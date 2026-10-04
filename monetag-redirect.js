(function () {
    "use strict";

    const MONETAG_ZONE_PRIMARY = "11947320";
    const MONETAG_ZONE_FALLBACK = "3516334";

    let imranAdFlowBusy = false;

    function escapeAttr(value) {
        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    function getVideoTarget(video) {
        if (!video) return "";

        const candidates = [
            video.telegramUrl,
            video.botUrl,
            video.videoUrl,
            video.targetUrl,
            video.telegramLink,
            video.link,
            video.url,
            Array.isArray(video.links) ? video.links[0]?.url : ""
        ];

        const found = candidates.find(v => typeof v === "string" && /^https?:\/\//i.test(v.trim()));
        if (found) return found.trim();

        /*
         * If Firestore stores only the video document ID, build the bot deep-link
         * using the bot name supplied for this Mini App.
         */
        if (video.id) {
            return `https://t.me/Imranmiabot?start=vid${encodeURIComponent(String(video.id))}`;
        }

        return "";
    }

    function isTelegramTarget(url) {
        return /^https?:\/\/(?:www\.)?(?:t\.me|telegram\.me)\//i.test(String(url || "").trim());
    }

    function redirectToTelegramBot(url) {
        if (!url) {
            if (typeof showToast === "function") {
                showToast(
                    APP_LANG === "bn" ? "ভিডিও বট লিংক পাওয়া যায়নি!" : "Video bot link not found!",
                    "error"
                );
            }
            return false;
        }

        try {
            if (window.Telegram?.WebApp?.openTelegramLink && isTelegramTarget(url)) {
                /*
                 * openTelegramLink() is called immediately after the awaited
                 * Monetag function resolves successfully.
                 */
                window.Telegram.WebApp.openTelegramLink(url);

                /*
                 * IMPORTANT: do NOT call Telegram.WebApp.close() here.
                 * Telegram documents that openTelegramLink() keeps the Mini App
                 * open, so the Mini App's bottom/compact UI remains available
                 * while the bot/video destination opens.
                 */
                return true;
            }

            if (window.Telegram?.WebApp?.openLink) {
                /* External links also stay outside the Mini App without closing it. */
                window.Telegram.WebApp.openLink(url);
                return true;
            }

            window.location.replace(url);
            return true;
        } catch (error) {
            console.error("Telegram redirect error:", error);
            try {
                window.location.href = url;
                return true;
            } catch (_) {
                return false;
            }
        }
    }

    function getRewardedAdFunction() {
        /*
         * Monetag creates the function named by data-sdk.
         * The primary zone is the requested rewarded-video zone.
         */
        if (typeof window.show_11947320 === "function") {
            return window.show_11947320;
        }

        /*
         * Keep 3516334 available as a fallback only if the primary SDK
         * function is not exposed by the current WebView.
         */
        if (typeof window.show_3516334 === "function") {
            return window.show_3516334;
        }

        return null;
    }

    async function waitForMonetagReady(maxWaitMs = 8000) {
        const started = Date.now();

        while (Date.now() - started < maxWaitMs) {
            const fn = getRewardedAdFunction();
            if (typeof fn === "function") return fn;

            await new Promise(resolve => setTimeout(resolve, 50));
        }

        return null;
    }

    async function showMonetagRewardedAd() {
        const showAd = await waitForMonetagReady();

        if (typeof showAd !== "function") {
            throw new Error(
                `Monetag SDK unavailable: show_${MONETAG_ZONE_PRIMARY}/show_${MONETAG_ZONE_FALLBACK}`
            );
        }

        /*
         * IMPORTANT:
         * Do not use a fake timer and do not redirect on ad open/dismiss.
         * The next line executes only after Monetag's returned Promise
         * resolves successfully.
         */
        const result = await showAd();

        /*
         * Most Monetag rewarded SDK integrations resolve the returned Promise
         * when the rewarded ad flow has completed. If an implementation
         * explicitly returns false, treat that as a failed reward.
         */
        if (result === false) {
            throw new Error("Monetag rewarded ad was not completed.");
        }

        return result;
    }

    function setCardBusy(card, busy) {
        if (!card) return;

        card.style.pointerEvents = busy ? "none" : "";
        card.setAttribute("aria-busy", busy ? "true" : "false");
        card.style.opacity = busy ? "0.78" : "";
    }

    async function handleCardClick(event, videoId) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }

        if (imranAdFlowBusy) return;

        const videos = Array.isArray(window.allLoadedVideos)
            ? window.allLoadedVideos
            : (typeof allLoadedVideos !== "undefined" ? allLoadedVideos : []);

        const video = videos.find(item => String(item.id) === String(videoId));

        if (!video) {
            if (typeof showToast === "function") {
                showToast(
                    APP_LANG === "bn" ? "ভিডিও পাওয়া যায়নি!" : "Video not found!",
                    "error"
                );
            }
            return;
        }

        const targetUrl = getVideoTarget(video);

        if (!targetUrl) {
            if (typeof showToast === "function") {
                showToast(
                    APP_LANG === "bn" ? "ভিডিও বট লিংক পাওয়া যায়নি!" : "Video bot link not found!",
                    "error"
                );
            }
            return;
        }

        const card = document.querySelector(
            `[data-imran-post-id="${CSS.escape(String(videoId))}"]`
        );

        imranAdFlowBusy = true;
        setCardBusy(card, true);

        try {
            if (typeof triggerHaptic === "function") triggerHaptic("light");

            /*
             * One post click starts the rewarded ad.
             * There is NO second click and NO artificial progress timer.
             */
            await showMonetagRewardedAd();

            /*
             * The redirect is intentionally the first navigation action after
             * successful Monetag completion.
             */
            redirectToTelegramBot(targetUrl);

        } catch (error) {
            console.error("Monetag rewarded-ad flow failed:", error);

            if (typeof showToast === "function") {
                showToast(
                    APP_LANG === "bn"
                        ? "বিজ্ঞাপন সম্পন্ন হয়নি। বিজ্ঞাপনটি পুরোপুরি শেষ হলে আবার চেষ্টা করুন।"
                        : "The ad was not completed. Please finish the ad and try again.",
                    "error"
                );
            }
        } finally {
            /*
             * If Telegram navigation succeeds this page normally closes.
             * If it does not, restore the card so the user can retry.
             */
            setCardBusy(card, false);
            imranAdFlowBusy = false;
        }
    }

    /*
     * Expose the requested handler without deleting any of the original
     * application functions.
     */
    window.handleCardClick = handleCardClick;
    window.handleImranVideoClick = function (videoId) {
        return handleCardClick(null, videoId);
    };
    window.redirectToTelegramBot = redirectToTelegramBot;

    /*
     * Capture clicks on generated video cards before the old navigation logic
     * can execute. preventDefault() stops the card's default action.
     */
    document.addEventListener("click", function (event) {
        const card = event.target.closest("[data-imran-post-id], .series-card-item");
        if (!card) return;

        /* Keep the existing share button behavior intact. */
        if (event.target.closest(".series-share-btn")) return;

        event.preventDefault();
        event.stopPropagation();

        const markedId = card.getAttribute("data-imran-post-id");
        const idFromCard = markedId || String(card.id || "").replace(/^video-card-/, "");
        if (idFromCard) handleCardClick(event, idFromCard);
    }, true);

    /*
     * Keyboard accessibility: Enter / Space behaves exactly like a card click.
     */
    document.addEventListener("keydown", function (event) {
        if (event.key !== "Enter" && event.key !== " ") return;

        const card = event.target.closest("[data-imran-post-id], .series-card-item");
        if (!card) return;

        event.preventDefault();
        event.stopPropagation();

        const markedId = card.getAttribute("data-imran-post-id");
        const idFromCard = markedId || String(card.id || "").replace(/^video-card-/, "");
        if (idFromCard) handleCardClick(event, idFromCard);
    }, true);

    /*
     * Keep the existing renderer intact; this only adds the post-click marker
     * when a card is generated dynamically.
     */
    const originalRenderVideosForGrid =
        typeof window.renderVideosForGrid === "function"
            ? window.renderVideosForGrid
            : null;

    if (originalRenderVideosForGrid) {
        window.renderVideosForGrid = function (type, list) {
            const result = originalRenderVideosForGrid.apply(this, arguments);
            document.querySelectorAll(".series-card-item").forEach(card => {
                if (!card.hasAttribute("data-imran-post-id")) {
                    const onclickText = card.getAttribute("onclick") || "";
                    const match = onclickText.match(/['"]([^'"]+)['"]/);
                    if (match) card.setAttribute("data-imran-post-id", match[1]);
                }
            });
            return result;
        };
    }
})();
