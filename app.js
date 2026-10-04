const $ = id => document.getElementById(id);
    const firebaseConfig = {
      apiKey: "AIzaSyCtjhgIxkEWWkHZEALNRD3Rz3i-3Xx3Dbw",
      authDomain: "naw-project-telegram-bot.firebaseapp.com",
      projectId: "naw-project-telegram-bot",
      storageBucket: "naw-project-telegram-bot.firebasestorage.app",
      messagingSenderId: "1087164913124",
      appId: "1:1087164913124:web:a6a83c2a88329334f963f1",
      measurementId: "G-MCHXW9C24P"
    };

    let APP_LANG = localStorage.getItem('app_lang_choice') || 'bn';

    const I18N = {
        bn: {
            appName: "ইমরান", appHeaderBadge: "ইমরান", menuTitle: "মেনু", drawerAdult: "ইমরান",
            drawerProfile: "ইউজার প্রোফাইল", drawerLangLabel: "ভাষা পরিবর্তন", drawerSocial: "সোশ্যাল লিংক", telegram: "টেলিগ্রাম", searchPlaceholder: "ইমরান ভিডিও খুঁজুন...",
            adultHero1: "ইমরান", adultHeroSub1: "ভিডিও কালেকশন", 
            adultFeatureTitle: "ইমরান ভিডিও", adultFeatureDesc: "ইমরান ভিডিও কালেকশন দেখুন।",
            adultBadgeFeature: "এন্ডাল বিশেষ কালেকশন", adultCountSub: "ভিডিও", tagUltraHd: "⚡ আল্ট্রা এইচডি",
            seriesBadgeFeature: "ওয়েব সিরিজ", seriesCountSub: "সিরিজ", seriesFeatureTitle: "সিরিজ লাইব্রেরি", seriesFeatureDesc: "দেশি ও বিদেশি সকল জনপ্রিয় ওয়েব সিরিজের অল এপিসোড সরাসরি আনলক করুন।",
            tagFullSeason: "⚡ ফুল সিজন", movieBadgeFeature: "মুভিজ", movieCountSub: "মুভি", movieFeatureTitle: "সিনেমা লাইব্রেরি", movieFeatureDesc: "আপনার পছন্দের সিনেমার উপর ক্লিক করে আনলক করে উপভোগ করুন।",
            tagMovie: "⚡ সিনেমা", lblRefCode: "রেফারেল কোড", lblRefLink: "আপনার রেফারেল লিংক",
            btnShareRef: "শেয়ার করুন", btnCopyRef: "লিংক কপি", earnMorePageHead: "আরও পয়েন্ট আয়", earnMorePageSub: "বিজ্ঞাপন দেখে পয়েন্ট সংগ্রহ করুন",
            lblEarnStatBal: "বর্তমান পয়েন্ট", lblEarnStatRew: "প্রতি অ্যাড পয়েন্ট", lblEarnStatWatch: "দেখা বিজ্ঞাপন", lblEarnStatLim: "দৈনিক লিমিট",
            btnWatchReward: "বিজ্ঞাপন দেখে পয়েন্ট নিন", doneToday: "আজ সম্পন্ন হয়েছে", videoUnlockNoticeTitle: "ভিডিও আনলক", videoUnlockNoticeDesc: "বিজ্ঞাপন দেখে ভিডিওটি চালু করুন।",
            unlockDurationAdBadge: "২ ঘণ্টার জন্য ফ্রি", unlockDurationPtDesc: "২৪ ঘণ্টার জন্য আনলক থাকবে", btnAdWatchRemain: "বিজ্ঞাপন দেখুন", btnPointUnlock: "পয়েন্ট দিয়ে আনলক করুন",
            lblBackHome: "হোমে ফিরে যান", rulesTitle: "ভিডিও দেখার নিয়ম", rulesDoneBtn: "বুঝেছি, ধন্যবাদ", adultModalTitle: "এন্ডাল সতর্কতা ও দায়মুক্তি নোটিশ",
            btnAdultConfirm: "আমি নিজ দায়িত্বে প্রবেশ করছি", btnAdultDecline: "না, সিনেমা লাইব্রেরিতে ফিরে যান", tgModalHeading: "চ্যানেলে জয়েন করা বাধ্যতামূলক",
            tgModalDesc: "ভিডিও দেখতে আমাদের টেলিগ্রাম চ্যানেলে যুক্ত থাকা বাধ্যতামূলক।", btnTgJoin: "চ্যানেলে জয়েন করুন", btnTgVerify: "আমি জয়েন করেছি",
            lblTabWithdraw: "উত্তোলন", lblTabHistory: "হিস্টোরি", lblCurBal: "বর্তমান ব্যালেন্স", lblTakaEquiv: "টাকার পরিমাণ", lblChooseGw: "উত্তোলন মাধ্যম বেছে নিন:",
            lblChooseSim: "সিম অপারেটর নির্বাচন করুন:", btnSubmitPayout: "উত্তোলন রিকোয়েস্ট পাঠান", btnClose: "বন্ধ করুন", unitPoints: "পয়েন্ট", partPrefix: "পাঠ",
            likesWord: "লাইক", viewsWord: "ভিউ", currencySymbol: "৳", uidPrefix: "আইডি:", emptyList: "কোনো ভিডিও বা তথ্য পাওয়া যায়নি!",
            bannedTitle: "আপনার একাউন্ট স্থগিত করা হয়েছে", bannedDesc: "অ্যাপের নিয়ম ভঙ্গের কারণে আপনার আইডিটি সাময়িক বা স্থায়ীভাবে ব্যান করা হয়েছে। বিস্তারিত জানতে সাপোর্টে যোগাযোগ করুন।",
            bannedSupportBtn: "সাপোর্টে মেসেজ দিন", maintTitle: "অ্যাপ সাময়িক রক্ষণাবেক্ষণে আছে", maintDesc: "আমরা সিস্টেম আপডেট করছি। কিছুক্ষণ পর আবার চেষ্টা করুন।",
            rechargeSummaryPrefix: "রিচার্জ:", bkashNagadSummaryPrefix: "বিকাশ/নগদ:", unlockProgressTxt: "আনলক অগ্রগতি:", unlockCompletedTxt: "সম্পন্ন",
            minWithdrawPrefix: "নূন্যতম উত্তোলন:", inputPhonePlaceholder: "মোবাইল নম্বর দিন", inputAmountPlaceholder: "পয়েন্ট পরিমাণ দিন", adminNoticeTitle: "অ্যাডমিন নোটিশ",
            defaultWithdrawNotice: "উত্তোলন রিকোয়েস্ট দেওয়ার সর্বোচ্চ ২৪ ঘণ্টার মধ্যে পেমেন্ট কমপ্লিট করা হবে। সঠিক নম্বর প্রদান করুন।"
        },
        en: {
            appName: "Imran", appHeaderBadge: "Imran", menuTitle: "Menu", drawerAdult: "Imran",
            drawerProfile: "User Profile", drawerLangLabel: "Change Language", drawerSocial: "Social Links", telegram: "Telegram", searchPlaceholder: "Search Imran videos...",
            adultHero1: "Imran", adultHeroSub1: "Video collection", 
            adultFeatureTitle: "Endal Video Library", adultFeatureDesc: "Pick your preferred video, unlock for free by watching ads or directly with points.",
            adultBadgeFeature: "Endal Special", adultCountSub: "Videos", tagUltraHd: "⚡ Ultra HD",
            seriesBadgeFeature: "Web Series", seriesCountSub: "Series", seriesFeatureTitle: "Series Library", seriesFeatureDesc: "Unlock all episodes of popular local and international web series instantly.",
            tagFullSeason: "⚡ Full Season", movieBadgeFeature: "Movies", movieCountSub: "Movies", movieFeatureTitle: "Movie Library", movieFeatureDesc: "Click any movie below to unlock and start streaming instantly.",
            tagMovie: "⚡ Movies", lblRefCode: "Referral Code", lblRefLink: "Your Referral Link",
            btnShareRef: "Share Link", btnCopyRef: "Copy Link", earnMorePageHead: "Earn More Points", earnMorePageSub: "Collect points by watching reward ads",
            lblEarnStatBal: "Current Points", lblEarnStatRew: "Points Per Ad", lblEarnStatWatch: "Watched Ads", lblEarnStatLim: "Daily Limit",
            btnWatchReward: "Watch Ad & Collect Points", doneToday: "completed today", videoUnlockNoticeTitle: "Unlock Video", videoUnlockNoticeDesc: "Watch ads for free access or unlock permanently with points.",
            unlockDurationAdBadge: "Free for 2 Hours", unlockDurationPtDesc: "Unlocked for 24 Hours", btnAdWatchRemain: "Watch Ad", btnPointUnlock: "Unlock with Points",
            lblBackHome: "Back to Home", rulesTitle: "Video Watching Rules", rulesDoneBtn: "Understood, Thanks", adultModalTitle: "Endal Warning & Disclaimer",
            btnAdultConfirm: "I Enter At My Own Risk", btnAdultDecline: "No, Back To Movies", tgModalHeading: "Telegram Channel Join Required",
            tgModalDesc: "You must be a member of our official Telegram channel to unlock and watch videos.", btnTgJoin: "Join Channel", btnTgVerify: "I Have Joined",
            lblTabWithdraw: "Withdraw", lblTabHistory: "History", lblCurBal: "Current Balance", lblTakaEquiv: "Amount in Cash", lblChooseGw: "Select Gateway:",
            lblChooseSim: "Select Mobile Operator:", btnSubmitPayout: "Submit Withdrawal Request", btnClose: "Close", unitPoints: "Points", partPrefix: "Part",
            likesWord: "Likes", viewsWord: "Views", currencySymbol: "BDT", uidPrefix: "ID:", profileSectionTitle: "User Profile", emptyList: "No videos or content available in this section!",
            bannedTitle: "Your Account Has Been Suspended", bannedDesc: "Your account is temporarily or permanently suspended due to violation of rules. Please contact support.",
            bannedSupportBtn: "Contact Support", maintTitle: "App Under Maintenance", maintDesc: "We are currently updating our systems. Please check back shortly.",
            rechargeSummaryPrefix: "Recharge:", bkashNagadSummaryPrefix: "bKash/Nagad:", unlockProgressTxt: "Unlock Progress:", unlockCompletedTxt: "Completed",
            minWithdrawPrefix: "Min Withdrawal:", inputPhonePlaceholder: "Enter mobile number", inputAmountPlaceholder: "Enter points amount", adminNoticeTitle: "Admin Notice",
            defaultWithdrawNotice: "Payments are processed within 24 hours of request. Ensure your number is correct."
        }
    };

    let APP_CONFIG = {
        appName: "ইনজ়য় মুভিজ", 
        appHeaderBadge: "সিনেমা", 
        adsgramRewardBlockId: "46116", 
        adsgramInterstitialBlockId: "int-38278",
        adModeVideo: "alternate", 
        adModeEarn: "reward",     
        botUsername: "Ret2_bot", 
        telegramChannelId: "@Ads_Earn_Pro", 
        appShortName: "TkEarning", 
        telegramChannel: "https://t.me/Ads_Earn_Pro",
        telegramChannelTitle: "টেলিগ্রাম",
        telegramSections: [
            {enabled:true,titleBn:"টেলিগ্রাম চ্যানেল",titleEn:"Telegram Channel",descriptionBn:"নতুন আপডেট ও সহায়তার জন্য আমাদের টেলিগ্রাম চ্যানেলে যুক্ত হন।",descriptionEn:"Join our Telegram channel for new updates and support.",url:"https://t.me/Ads_Earn_Pro"},
            {enabled:true,titleBn:"সাপোর্ট চ্যানেল",titleEn:"Support Channel",descriptionBn:"সাহায্য ও গুরুত্বপূর্ণ নোটিশ পেতে এখানে যুক্ত হন।",descriptionEn:"Join here for help and important notices.",url:"https://t.me/Ads_Earn_Pro"},
            {enabled:true,titleBn:"নতুন আপডেট",titleEn:"Latest Updates",descriptionBn:"অ্যাপের নতুন ফিচার ও আপডেটের খবর এখানে পাবেন।",descriptionEn:"Get the latest app features and update news here.",url:"https://t.me/Ads_Earn_Pro"}
        ],
        referralLinkTemplate: "",
        referralLinkBase: "",
        referralShareTextBn: "🔥 আমাদের অ্যাপে যোগ দিন এবং রিওয়ার্ড উপভোগ করুন!",
        referralShareTextEn: "🔥 Join our app and enjoy rewards!", 
        unlockAdCount: 3, 
        unlockPointsCost: 5, 
        adRewardPoints: 2, 
        dailyAdLimit: 20, 
        referralBonus: 10,
        signupBonus: 10, 
        initialPoints: 10, 
        minWithdrawPoints: 100, 
        minWithdrawBkash: 100, 
        minWithdrawNagad: 100, 
        minWithdrawRecharge: 40,
        pointsToTakaRate: 0.3, 
        minSelfEarnedWithdrawRatio: 0.6, 
        adUnlockDurationHours: 2, 
        maintenanceMode: false,
        maintenanceTitle: "", 
        maintenanceNotice: "", 
        withdrawNotice: "", 
        bannedTitle: "", 
        bannedDesc: "", 
        refAntiFraudCondition: "",
        enableBkash: true, 
        enableNagad: true, 
        enableRecharge: true,
        adultCategories: []
    };

    let db = null, tg = null, currentUser = null, userData = {};
    let adsgramRewardController = null, adsgramInterstitialController = null;
    let currentSelectedGateway = 'bKash', selectedSimOperator = 'Grameenphone';
    let allLoadedVideos = [], activeDetailVideo = null, videoAdProgressMap = {}, videoUnlockExpiryMap = {};
    let currentActiveTab = 'adult', currentStreamUrl = "", hlsInstance = null, currentPlayingPartIndex = 0;
    let countdownTimerInterval = null, searchDebounceTimeout = null, pendingActionAfterJoin = null;
    let hasHandledInitialTargetVideo = false, backButtonInitialized = false;
    let activeHeroFilterTags = { adult: 'adult_new' };
    const ITEMS_PER_PAGE = 10;
    let currentPageMap = { adult: 1 }, activeCategoryFilters = { adult: 'all' };

    let adminAdultCategories = [];
    let userLikedVideos = {};
    try { userLikedVideos = JSON.parse(localStorage.getItem('app_user_liked_vids') || '{}'); } catch(e) { userLikedVideos = {}; }

    function getTodayBDDate() { return new Date(Date.now() + 21600000).toISOString().slice(0, 10); }

    function triggerHaptic(type = 'light') {
        try {
            if (tg?.HapticFeedback) {
                if (['success', 'error', 'warning'].includes(type)) {
                    tg.HapticFeedback.notificationOccurred(type);
                } else {
                    const validImpacts = ['light', 'medium', 'heavy', 'rigid', 'soft'];
                    tg.HapticFeedback.impactOccurred(validImpacts.includes(type) ? type : 'light');
                }
            }
        } catch (e) {}
    }

    function setupTelegramBackButton() {
        if (!tg?.BackButton || backButtonInitialized) return;
        backButtonInitialized = true;
        tg.BackButton.onClick(() => {
            triggerHaptic('light');
            if ($('web-player-modal')?.style.display === 'flex') return closeWebVideoPlayer();
            
            
            if ($('rules-modal')?.style.display === 'flex') { $('rules-modal').style.display = 'none'; return updateTelegramBackButtonState(); }
            
            if ($('drawer-menu')?.classList.contains('open')) return toggleSidebarMenu(false);
            if ($('video-unlock-detail-view')?.style.display === 'block') return closeVideoDetailView();
        });
    }

    function updateTelegramBackButtonState() {
        if (!tg?.BackButton) return;
        const isAnyOpen = 
            $('rules-modal')?.style.display === 'flex' ||
            $('web-player-modal')?.style.display === 'flex' || $('video-unlock-detail-view')?.style.display === 'block' ||
            $('drawer-menu')?.classList.contains('open');
        isAnyOpen ? tg.BackButton.show() : tg.BackButton.hide();
    }

    function getGridLoadingSkeletons(count = 3) {
        return `
        <div class="skeleton-card">
            <div class="skeleton-thumb shimmer-animated"></div>
            <div class="skeleton-line w-80 shimmer-animated" style="margin-top:10px;"></div>
            <div class="skeleton-line w-50 shimmer-animated"></div>
        </div>`.repeat(count);
    }

    function setGridLoading(gridId) { const el = $(gridId); if (el) el.innerHTML = getGridLoadingSkeletons(3); }

    function hideGlobalLoader() {
        const l = $('global-app-loader');
        if (l) { l.style.opacity = '0'; setTimeout(() => l.style.display = 'none', 300); }
    }

    function formatNumber(n) {
        if (n === undefined || n === null || n === '') return APP_LANG === 'bn' ? '০' : '0';
        if (APP_LANG === 'en') return String(n);
        const bn = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
        return String(n).replace(/\d/g, d => bn[d]);
    }

    function getDeviceUUID() {
        let devId = localStorage.getItem('app_device_fingerprint_secure');
        if (!devId) {
            const navStr = (navigator.userAgent || '') + screen.width + screen.height + (navigator.language || '');
            let hash = 0;
            for (let i = 0; i < navStr.length; i++) hash = ((hash << 5) - hash) + navStr.charCodeAt(i) | 0;
            devId = 'dev_' + Math.abs(hash).toString(36) + '_' + Math.random().toString(36).substring(2, 10);
            localStorage.setItem('app_device_fingerprint_secure', devId);
        }
        return devId;
    }

    function showToast(msg, type = 'info') {
        const t = $('top-toast');
        t.className = 'top-toast show ' + (type === 'error' ? 'err' : (type === 'success' ? 'succ' : ''));
        $('toast-msg').innerText = msg;
        triggerHaptic(type === 'error' ? 'error' : (type === 'success' ? 'success' : 'light'));
        setTimeout(() => t.classList.remove('show'), 2800);
    }

    function toggleSidebarMenu(show) {
        triggerHaptic('light');
        $('drawer-overlay').classList.toggle('open', show);
        $('drawer-menu').classList.toggle('open', show);
        updateTelegramBackButtonState();
    }

    function navFromDrawer(tab) { toggleSidebarMenu(false); switchNavTab(tab); }

    function changeAppLang(lang) {
        triggerHaptic('medium');
        APP_LANG = lang;
        localStorage.setItem('app_lang_choice', lang);
        $('btn-lang-bn').classList.toggle('active', lang === 'bn');
        $('btn-lang-en').classList.toggle('active', lang === 'en');
        document.documentElement.lang = lang;
        applyStaticTranslations();
        applyAdminConfigToUI();
        renderAllCategories();
        filterVideosUI();
        showToast(lang === 'bn' ? "ভাষা বাংলায় রূপান্তর করা হয়েছে" : "Language switched to English", "success");
    }

    function applyStaticTranslations() {
        const t = I18N[APP_LANG];
        const txtMap = [
            ['page-head-title', t.appName], ['app-brand-title', t.appName], ['app-header-badge', t.appHeaderBadge],
            ['menu-title-txt', t.menuTitle], 
            ['drawer-item-adult', t.drawerAdult], ['drawer-item-profile', t.drawerProfile], ['menu-social-lbl', t.drawerSocial],
            ['menu-telegram-name', t.telegram], ['adult-hero-title1', t.adultHero1], ['adult-hero-sub1', t.adultHeroSub1],
            ['adult-hero-title2', t.adultHero2], ['adult-hero-sub2', t.adultHeroSub2], ['adult-count-sub', t.adultCountSub],
            ['adult-feature-title', t.adultFeatureTitle], ['adult-feature-desc', t.adultFeatureDesc],
            ['tag-pill-ultra-adult', t.tagUltraHd], ['adult-empty-card', t.emptyList], ['series-hero-title1', t.seriesHero1],
            ['series-hero-sub1', t.seriesHeroSub1], ['series-hero-title2', t.seriesHero2], ['series-hero-sub2', t.seriesHeroSub2],
            ['series-count-sub', t.seriesCountSub], ['series-feature-title', t.seriesFeatureTitle], ['series-feature-desc', t.seriesFeatureDesc],
            ['tag-pill-series', t.tagFullSeason], ['series-empty-card', t.emptyList], ['movie-hero-title1', t.movieHero1],
            ['movie-hero-sub1', t.movieHeroSub1], ['movie-hero-title2', t.movieHero2], ['movie-hero-sub2', t.movieHeroSub2],
            ['movie-count-sub', t.movieCountSub], ['movie-feature-title', t.movieFeatureTitle], ['movie-feature-desc', t.movieFeatureDesc],
            ['btn-video-rules-txt', "ভিডিও দেখার নিয়ম"], ['tag-pill-movie', t.tagMovie], ['movie-empty-card', t.emptyList],
            ['u-badge-vip', APP_LANG === 'bn' ? "ভিআইপি" : "VIP"], ['lbl-uid-prefix', t.uidPrefix], ['profile-section-title', t.profileSectionTitle],
            ['lbl-ref-code', t.lblRefCode], ['lbl-ref-link', t.lblRefLink],
            ['btn-share-ref-txt', t.btnShareRef], ['btn-copy-ref-txt', t.btnCopyRef], ['earn-more-page-head', t.earnMorePageHead],
            ['earn-more-page-sub', t.earnMorePageSub], ['lbl-earn-stat-balance', t.lblEarnStatBal], ['lbl-earn-stat-reward', t.lblEarnStatRew],
            ['lbl-earn-stat-watched', t.lblEarnStatWatch], ['lbl-earn-stat-limit', t.lblEarnStatLim], ['lbl-earn-row-reward', t.lblEarnStatRew],
            ['lbl-earn-row-limit', t.lblEarnStatLim], ['lbl-earn-row-remaining', APP_LANG === 'bn' ? "আজ বাকি আছে" : "Remaining Today"],
            ['btn-watch-reward-txt', APP_LANG === 'bn' ? 'বিজ্ঞাপন দেখে পয়েন্ট নিন' : 'Watch Ad & Earn Points'], ['video-unlock-notice-title', t.videoUnlockNoticeTitle], ['video-unlock-notice-desc', t.videoUnlockNoticeDesc],
            ['lbl-uac-ad-title', APP_LANG === 'bn' ? "বিজ্ঞাপন দেখে আনলক" : "Unlock by Watching Ads"], ['lbl-unlock-progress-txt', t.unlockProgressTxt],
            ['lbl-points-unit', t.unitPoints], ['lbl-back-home-txt', t.lblBackHome], ['btn-rules-modal-close', t.rulesDoneBtn],
            ['tg-modal-desc-txt', t.tgModalDesc], 
            
            
            
             ['btn-player-close', t.btnClose],
             ['nav-lbl-adult', t.drawerAdult],
            ['nav-lbl-profile', APP_LANG === 'bn' ? "প্রোফাইল" : "Profile"], ['banned-title', t.bannedTitle], ['banned-desc', t.bannedDesc],
            ['maint-title', t.maintTitle], ['maint-desc', t.maintDesc]
        ];

        txtMap.forEach(([id, val]) => { const el = $(id); if (el && val !== undefined) el.innerText = val; });

        const htmlMap = [
            ['drawer-lang-label', `<i class="fa-solid fa-language"></i> ${t.drawerLangLabel}`],
            ['adult-badge-feature', `<i class="fa-solid fa-fire"></i> ${t.adultBadgeFeature}`],
            
            ['ut-title-txt', `<i class="fa-solid fa-clock"></i> ${APP_LANG === 'bn' ? 'আনলক মেয়াদের বাকি:' : 'Unlock Time Remaining:'}`],
            ['rules-modal-title', `<i class="fa-solid fa-circle-info"></i> ${t.rulesTitle}`],
            ['btn-tg-join-channel', `<i class="fa-brands fa-telegram"></i> ${t.btnTgJoin}`],
            ['btn-verify-tg-status', `<i class="fa-solid fa-check-double"></i> ${t.btnTgVerify}`],
            ['btn-banned-support', `<i class="fa-brands fa-telegram"></i> ${t.bannedSupportBtn}`]
        ];
        htmlMap.forEach(([id, val]) => { const el = $(id); if (el && val !== undefined) el.innerHTML = val; });

        if ($('video-search-input')) $('video-search-input').placeholder = t.searchPlaceholder;
        

        if ($('adult-bar-title')) $('adult-bar-title').innerText = APP_LANG === 'bn' ? 'ইমরান' : 'Imran';
        

        renderRulesList();
        renderTelegramSections();
    }

    function renderRulesList() {
        const l = $('rules-modal-content-list');
        if (!l) return;
        l.innerHTML = APP_LANG === 'bn' ? `
            <div><b style="color:#00f260;">১. নির্বাচন:</b> যেকোনো ভিডিও কার্ডে ক্লিক করুন।</div>
            <div><b style="color:var(--primary);">২. বিজ্ঞাপন আনলক:</b> নির্দিষ্ট অ্যাড দেখে ভিডিও ফ্রি আনলক করুন।</div>
            
            <div><b style="color:#ff0844;">৩. ডিভাইস পলিসি:</b> একই ফোনে একাধিক রেফার করা নিষিদ্ধ।</div>
        ` : `
            <div><b style="color:#00f260;">1. Select:</b> Click on any video card to open.</div>
            <div><b style="color:var(--primary);">2. Ad Unlock:</b> Watch required ads to unlock video free.</div>
            <div><b style="color:#ffe000;">3. Point Unlock:</b> Instantly unlock for 24 hours using reward points.</div>
            <div><b style="color:#ff0844;">4. Device Policy:</b> Multiple accounts or self-referrals on the same device are strictly prohibited.</div>
        `;
    }

    function listenToDynamicCategories() {
        if (!db) return;
        db.collection("categories").onSnapshot((snapshot) => {
            if (!snapshot.empty) {
                const list = [];
                snapshot.forEach(doc => {
                    const data = doc.data();
                    if (!data.section || data.section === 'adult' || data.type === 'adult') {
                        list.push({
                            id: data.id || data.slug || data.name || doc.id,
                            bn: data.nameBn || data.name || doc.id,
                            en: data.nameEn || data.name || doc.id,
                            icon: data.icon || 'fa-tag'
                        });
                    }
                });
                if (list.length > 0) {
                    adminAdultCategories = list;
                    renderAllCategories();
                    filterVideosUI();
                }
            }
        }, () => {});
    }
function renderAllCategories() {
        let source = [];
        if (adminAdultCategories && adminAdultCategories.length) source = adminAdultCategories;
        else if (Array.isArray(APP_CONFIG.adultCategories) && APP_CONFIG.adultCategories.length) source = APP_CONFIG.adultCategories.map(item => typeof item === 'string' ? {id:item,bn:item,en:item,icon:'fa-tag'} : {id:item.id||item.name,bn:item.bn||item.name,en:item.en||item.name,icon:item.icon||'fa-tag'});
        const blockedCat = c => /18[\s_-]*\+[\s_-]*movies?|movie[\s_-]*bangla|মুভি[\s_-]*বাংলা|১৮[\s_-]*\+[\s_-]*মুভি/i.test(`${c.id||''} ${c.bn||''} ${c.en||''} ${c.name||''}`);
        source = source.filter(c => !blockedCat(c));
        const cats = [{id:'all',bn:'সব ভিডিও',en:'All videos',icon:'fa-layer-group'}, ...source];
        const el = $('adult-cat-scroll');
        if (el) el.innerHTML = cats.map(c => `<div class="cat-pill ${activeCategoryFilters.adult === c.id ? 'active':''}" onclick="setCatFilter(this, '${c.id}', 'adult')">${c.icon ? `<i class="fa-solid ${c.icon}"></i> `:''}${APP_LANG==='bn' ? c.bn : c.en}</div>`).join('');
    }


    function getTelegramSectionsConfig() {
        const fallback = [
            {enabled:true,titleBn:"টেলিগ্রাম চ্যানেল",titleEn:"Telegram Channel",descriptionBn:"নতুন আপডেট ও সহায়তার জন্য আমাদের টেলিগ্রাম চ্যানেলে যুক্ত হন।",descriptionEn:"Join our Telegram channel for new updates and support.",url:APP_CONFIG.telegramChannel || "https://t.me/Ads_Earn_Pro"},
            {enabled:true,titleBn:"সাপোর্ট চ্যানেল",titleEn:"Support Channel",descriptionBn:"সাহায্য ও গুরুত্বপূর্ণ নোটিশ পেতে এখানে যুক্ত হন।",descriptionEn:"Join here for help and important notices.",url:APP_CONFIG.telegramChannel || "https://t.me/Ads_Earn_Pro"},
            {enabled:true,titleBn:"নতুন আপডেট",titleEn:"Latest Updates",descriptionBn:"অ্যাপের নতুন ফিচার ও আপডেটের খবর এখানে পাবেন।",descriptionEn:"Get the latest app features and update news here.",url:APP_CONFIG.telegramChannel || "https://t.me/Ads_Earn_Pro"}
        ];
        const list = Array.isArray(APP_CONFIG.telegramSections) ? APP_CONFIG.telegramSections : [];
        return [0,1,2].map(i => ({...fallback[i], ...(list[i] || {})}));
    }

    function renderTelegramSections() {
        const sections = getTelegramSectionsConfig();
        const titleEl = $('profile-telegram-section-title');
        if (titleEl) titleEl.innerText = APP_CONFIG.telegramSectionHeading || (APP_LANG === 'bn' ? 'টেলিগ্রাম চ্যানেল' : 'Telegram Channels');

        const profile = $('profile-telegram-sections');
        if (profile) {
            profile.innerHTML = sections.filter(x => x.enabled !== false && x.url).map((x,i) => {
                const title = APP_LANG === 'bn' ? (x.titleBn || x.titleEn || `Telegram ${i+1}`) : (x.titleEn || x.titleBn || `Telegram ${i+1}`);
                const desc = APP_LANG === 'bn' ? (x.descriptionBn || x.descriptionEn || '') : (x.descriptionEn || x.descriptionBn || '');
                return `<div class="profile-telegram-card"><div class="profile-telegram-top"><div class="profile-telegram-icon"><i class="fa-brands fa-telegram"></i></div><div style="min-width:0"><div class="profile-telegram-title">${escapeHtmlSafe(title)}</div><div class="profile-telegram-desc">${escapeHtmlSafe(desc)}</div></div></div><button class="profile-telegram-btn" type="button" onclick="openConfiguredTelegramLink(${i})"><i class="fa-brands fa-telegram"></i> ${APP_LANG === 'bn' ? 'টেলিগ্রামে যোগ দিন' : 'Join on Telegram'}</button></div>`;
            }).join('');
        }

        const drawer = $('drawer-telegram-links');
        if (drawer) {
            drawer.innerHTML = sections.filter(x => x.enabled !== false && x.url).map((x,i) => {
                const title = APP_LANG === 'bn' ? (x.titleBn || x.titleEn || `Telegram ${i+1}`) : (x.titleEn || x.titleBn || `Telegram ${i+1}`);
                const desc = APP_LANG === 'bn' ? (x.descriptionBn || x.descriptionEn || '') : (x.descriptionEn || x.descriptionBn || '');
                return `<div class="drawer-telegram-link" onclick="openConfiguredTelegramLink(${i})"><i class="fa-brands fa-telegram"></i><div class="dtl-text"><strong>${escapeHtmlSafe(title)}</strong><small>${escapeHtmlSafe(desc)}</small></div><i class="fa-solid fa-chevron-right" style="font-size:11px;color:#64748b;width:auto"></i></div>`;
            }).join('');
        }
    }

    function escapeHtmlSafe(value) {
        return String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
    }

    function openConfiguredTelegramLink(index) {
        triggerHaptic('medium');
        const item = getTelegramSectionsConfig()[Number(index)];
        if (!item || item.enabled === false || !item.url) return;
        openTelegramDirect(item.url);
    }

    function applyAdminConfigToUI() {
        const t = I18N[APP_LANG];
        const m = $('maintenance-screen');
        if (APP_CONFIG.maintenanceMode === true) {
            m.style.display = 'flex';
            $('maint-title').innerText = APP_CONFIG.maintenanceTitle || t.maintTitle;
            $('maint-desc').innerText = APP_CONFIG.maintenanceNotice || t.maintDesc;
            return;
        } else { m.style.display = 'none'; }


        renderTelegramSections();
        $('ui-ad-progress-desc').innerText = APP_LANG === 'bn' ? `বিজ্ঞাপন দেখে ${formatNumber(APP_CONFIG.unlockAdCount)}টি পূরণ করুন` : `Watch ${formatNumber(APP_CONFIG.unlockAdCount)} ads to complete`;
        $('ui-ad-duration-badge').innerText = APP_LANG === 'bn' ? `${formatNumber(APP_CONFIG.adUnlockDurationHours || 2)} ঘণ্টার জন্য ফ্রি` : `Free for ${formatNumber(APP_CONFIG.adUnlockDurationHours || 2)} Hours`;

        if (currentUser?.id) {
            $('ref-share-url-box').innerText = getReferralLink();
        }
        updateUserUI();
        if (activeDetailVideo) updateUnlockProgressUI();
    }
function updateUserUI() {
        const set=(id,val)=>{const el=$(id);if(el)el.innerText=val;};
        set('u-profile-name',currentUser?.first_name||currentUser?.username||'User');set('u-profile-handle',currentUser?.username?'@'+currentUser.username:'@user');set('u-profile-id',currentUser?.id||'—');
        set('ref-user-code',currentUser?.id||'...'); if($('ref-share-url-box')&&currentUser?.id)$('ref-share-url-box').innerText=getReferralLink();
    }

    function openVideoRulesModal() { triggerHaptic('light'); $('rules-modal').style.display = 'flex'; updateTelegramBackButtonState(); }


    async function checkTelegramMembershipRealtime(userId) {
        if (!userId) return { isMember: false };
        try {
            const controller = new AbortController();
            const tid = setTimeout(() => controller.abort(), 6000);
            const res = await fetch(`https://tg-check.rakibkdbb.workers.dev?userId=${userId}`, { signal: controller.signal });
            clearTimeout(tid);
            return res.ok ? await res.json() : { isMember: false };
        } catch { return { isMember: false }; }
    }

    async function verifyUserMembershipNow(customMsg = "") {
        if (!currentUser?.id) return false;
        const check = await checkTelegramMembershipRealtime(currentUser.id);
        if (check.isMember) return true;
        openTelegramMandatoryModal(customMsg || I18N[APP_LANG].tgModalDesc);
        return false;
    }

    function openTelegramMandatoryModal(customNotice) {
        triggerHaptic('warning');
        if (customNotice) $('tg-modal-desc-txt').innerText = customNotice;
        $('telegram-mandatory-modal').style.display = 'flex';
        updateTelegramBackButtonState();
    }

    function goToTelegramChannel() { triggerHaptic('medium'); openTelegramDirect(APP_CONFIG.telegramChannel || "https://t.me/Ads_Earn_Pro"); }

    async function verifyTelegramChannelJoin() {
        triggerHaptic('medium');
        const btn = $('btn-verify-tg-status');
        const oldHtml = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${APP_LANG === 'bn' ? 'যাচাই হচ্ছে...' : 'Verifying...'}`;

        const res = await checkTelegramMembershipRealtime(currentUser.id);
        btn.disabled = false;
        btn.innerHTML = oldHtml;

        if (res.isMember) {
            $('telegram-mandatory-modal').style.display = 'none';
            updateTelegramBackButtonState();
            showToast(APP_LANG === 'bn' ? "অভিনন্দন! ভেরিফিকেশন সফল হয়েছে।" : "Congratulations! Verification successful.", "success");
            if (typeof pendingActionAfterJoin === 'function') {
                const act = pendingActionAfterJoin;
                pendingActionAfterJoin = null;
                act();
            }
        } else {
            showToast(APP_LANG === 'bn' ? "আপনি এখনো চ্যানেলে যুক্ত হননি! আগে জয়েন করুন।" : "You have not joined the channel yet! Please join first.", "error");
        }
    }

    function loadSavedProgress() {
        try { videoAdProgressMap = JSON.parse(localStorage.getItem('user_video_ad_progress') || '{}'); } catch(e) {}
        try { videoUnlockExpiryMap = JSON.parse(localStorage.getItem('user_video_unlock_expiry') || '{}'); } catch(e) {}
    }

    async function saveUnlockProgress() {
        try {
            const expJson = JSON.stringify(videoUnlockExpiryMap);
            localStorage.setItem('user_video_ad_progress', JSON.stringify(videoAdProgressMap));
            localStorage.setItem('user_video_unlock_expiry', expJson);
            if (tg?.CloudStorage) tg.CloudStorage.setItem('user_video_unlock_expiry', expJson);
            if (db && currentUser?.id) await db.collection("users").doc(String(currentUser.id)).set({ unlockedExpiryMap: videoUnlockExpiryMap }, { merge: true }).catch(()=>{});
        } catch(e) {}
    }

    function isVideoCurrentlyUnlocked(videoId) {
        return !!(videoId && videoUnlockExpiryMap[videoId] && Date.now() < videoUnlockExpiryMap[videoId]);
    }

    function isTelegramUrl(url) {
        if (!url || typeof url !== 'string') return false;
        const u = url.toLowerCase().trim();
        return u.includes("t.me/") || u.includes("telegram.me/") || u.startsWith("tg://");
    }

    function openTelegramDirect(url) {
        window.Telegram?.WebApp?.openTelegramLink ? window.Telegram.WebApp.openTelegramLink(url) : window.open(url, '_blank');
    }

    function listenToAdminConfig() {
        if (!db) return;
        db.collection("settings").doc("app_config").onSnapshot((doc) => {
            if (doc.exists) { 
                APP_CONFIG = { ...APP_CONFIG, ...doc.data() }; 
                // Adsgram removed; Imran content uses ADSXUIT flow below.
                applyAdminConfigToUI(); 
                renderAllCategories();
            }
        }, () => {});
    }

    function extractTelegramUser() {
        let u = null;
        if (window.Telegram?.WebApp?.initDataUnsafe?.user) u = window.Telegram.WebApp.initDataUnsafe.user;
        else if (window.Telegram?.WebApp?.initData) {
            try { const raw = new URLSearchParams(window.Telegram.WebApp.initData).get('user'); if (raw) u = JSON.parse(raw); } catch(e) {}
        }
        if (!u && window.location.hash) {
            try {
                const innerP = new URLSearchParams(new URLSearchParams(window.location.hash.substring(1)).get('tgWebAppData'));
                const raw = innerP.get('user'); if (raw) u = JSON.parse(raw);
            } catch(e) {}
        }
        if (!u || !u.id) {
            hideGlobalLoader();
            document.body.innerHTML = `
                <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100vh; background:#050814; color:#fff; text-align:center; padding:20px;">
                    <i class="fa-brands fa-telegram" style="font-size:60px; color:var(--primary); margin-bottom:15px; filter: drop-shadow(0 0 15px var(--primary));"></i>
                    <h2 style="font-size:20px; margin-bottom:10px; font-weight:800;">শুধুমাত্র টেলিগ্রামে চলবে</h2>
                    <p style="font-size:14px; color:#8ba2c4; max-width:290px; line-height:1.5;">এই অ্যাপটি ব্যবহারের জন্য দয়া করে আমাদের অফিসিয়াল টেলিগ্রাম বট থেকে প্রবেশ করুন।</p>
                </div>`;
            throw new Error("Unauthorized: Opened outside Telegram");
        }
        return u;
    }

    async function initApp() {
        try { if (!firebase.apps.length) firebase.initializeApp(firebaseConfig); db = firebase.firestore(); } catch(e) {}
        if (window.Telegram?.WebApp) {
            tg = window.Telegram.WebApp;
            try { tg.expand(); tg.ready(); setupTelegramBackButton(); } catch(e){}
        }
        currentUser = extractTelegramUser();
        const uid = String(currentUser.id);
        $('u-profile-name').innerText = currentUser.first_name || (APP_LANG === 'bn' ? "ব্যবহারকারী" : "User");
        $('u-profile-handle').innerText = currentUser.username ? "@" + currentUser.username : "@user";
        $('u-profile-id').innerText = formatNumber(uid);
        $('ref-user-code').innerText = formatNumber(uid);
        $('ref-share-url-box').innerText = `https://t.me/${APP_CONFIG.botUsername}/${APP_CONFIG.appShortName}?startapp=${uid}`;

        setGridLoading('adult-list-grid');
        loadSavedProgress();
        applyStaticTranslations();
        renderAllCategories();
        listenToAdminConfig();
        listenToDynamicCategories();
        loadSettingsAndVideos();
        await syncUserData();
        // Adsgram removed; Imran content uses ADSXUIT flow below.

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) { const v = $('in-app-video-element'); if (v && !v.paused) v.pause(); }
        });
    }

    function initAdsgram() {
        if (window.Adsgram) {
            try { adsgramRewardController = window.Adsgram.init({ blockId: APP_CONFIG.adsgramRewardBlockId || "46116" }); } catch(e) {}
            try { adsgramInterstitialController = window.Adsgram.init({ blockId: APP_CONFIG.adsgramInterstitialBlockId || "int-38278" }); } catch(e) {}
        }
    }

    let adWatchCounter = 0;
    function selectAdController(purpose = 'video', stepIndex = 0) {
        if (!adsgramRewardController || !adsgramInterstitialController) initAdsgram();
        const mode = (purpose === 'video' ? (APP_CONFIG.adModeVideo || 'alternate') : (APP_CONFIG.adModeEarn || 'reward')).toLowerCase();
        
        let chosenController = null;
        let fallbackController = null;
        let isRewardedAd = true;

        if (mode === 'reward') {
            chosenController = adsgramRewardController || adsgramInterstitialController;
            fallbackController = adsgramInterstitialController;
            isRewardedAd = true;
        } else if (mode === 'interstitial') {
            chosenController = adsgramInterstitialController || adsgramRewardController;
            fallbackController = adsgramRewardController;
            isRewardedAd = false;
        } else if (mode === 'mixed') {
            const rand = Math.random() < 0.5;
            chosenController = rand ? adsgramRewardController : adsgramInterstitialController;
            fallbackController = rand ? adsgramInterstitialController : adsgramRewardController;
            isRewardedAd = (chosenController === adsgramRewardController);
        } else {
            const isStepEven = ((purpose === 'video' ? stepIndex : adWatchCounter) % 2 === 0);
            chosenController = isStepEven ? adsgramInterstitialController : adsgramRewardController;
            fallbackController = isStepEven ? adsgramRewardController : adsgramInterstitialController;
            isRewardedAd = !isStepEven;
        }

        if (!chosenController) chosenController = fallbackController;
        return { primary: chosenController, fallback: fallbackController, isRewarded: isRewardedAd };
    }

    async function syncUserData() {
        if (!db || !currentUser?.id) return;
        try {
            const uid = String(currentUser.id);
            const ref = db.collection("users").doc(uid);
            const todayStr = getTodayBDDate();
            const deviceId = getDeviceUUID();
            const snap = await ref.get();

            if (!snap.exists) {
                let initialBalance = APP_CONFIG.initialPoints || 10, referredBy = null;
                const startParam = tg?.initDataUnsafe?.start_param;
                let isSameDeviceDetected = false;
                try {
                    const devCheck = await db.collection("users").where("deviceId", "==", deviceId).limit(1).get();
                    if (!devCheck.empty) isSameDeviceDetected = true;
                } catch(e) {}

                if (startParam && !startParam.startsWith('vid_') && String(startParam) !== uid) {
                    if (isSameDeviceDetected) {
                        showToast(APP_LANG === 'bn' ? "⚠️ একই ডিভাইসে রেফার গ্রহণযোগ্য নয়!" : "⚠️ Same device referral rejected!", "error");
                    } else {
                        referredBy = String(startParam);
                        initialBalance += (APP_CONFIG.signupBonus || 10);
                    }
                }

                const newUser = {
                    name: currentUser.first_name || "User", username: currentUser.username || "", balancePoints: initialBalance,
                    selfEarnedPoints: 0, referralEarnedPoints: 0, dailyAdsWatched: 0, videoAdsWatched: 0, totalVideoAdsWatched: 0,
                    dailyAdsLimit: APP_CONFIG.dailyAdLimit || 20, lastAdDate: todayStr, totalReferrals: 0, referredBy,
                    referralActivated: false, deviceId, isSameDeviceFraud: isSameDeviceDetected, status: 'active',
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                };
                await ref.set(newUser);
                userData = newUser;
            } else {
                userData = snap.data();
                if (userData.unlockedExpiryMap) videoUnlockExpiryMap = { ...videoUnlockExpiryMap, ...userData.unlockedExpiryMap };
                if (userData.lastAdDate !== todayStr) {
                    userData.dailyAdsWatched = 0; userData.videoAdsWatched = 0; userData.lastAdDate = todayStr;
                    ref.update({ dailyAdsWatched: 0, videoAdsWatched: 0, lastAdDate: todayStr }).catch(()=>{});
                }
            }

            ref.onSnapshot((doc) => {
                if (doc.exists) {
                    userData = { ...userData, ...doc.data() };
                    $('banned-screen').style.display = userData.status === 'banned' ? 'flex' : 'none';
                    updateUserUI();
                }
            }, () => {});
            updateUserUI();
        } catch (e) { updateUserUI(); }
    }

    function playAdLoadingProgress(callback) {
        const m = $('ad-loading-modal'), b = $('ad-loading-bar-fill'), txt = $('ad-loading-percent-txt');
        m.style.display = 'flex'; b.style.width = '0%'; txt.innerText = '০%';
        let cur = 0;
        const interval = setInterval(() => {
            cur += Math.floor(Math.random() * 16) + 12;
            if (cur > 100) cur = 100;
            b.style.width = cur + '%';
            txt.innerText = formatNumber(cur) + '%';
            if (cur >= 100) {
                clearInterval(interval);
                setTimeout(() => { m.style.display = 'none'; callback?.(); }, 220);
            }
        }, 70);
    }

    function startButtonCooldown(btnId, defaultText, seconds = 5) {
        const btn = $(btnId);
        if (!btn) return;
        btn.disabled = true;
        btn.classList.add('btn-disabled-state');
        let remaining = seconds;
        const updateBtn = () => { btn.innerHTML = `<i class="fa-solid fa-hourglass-half fa-spin"></i> ${APP_LANG === 'bn' ? `অপেক্ষা করুন (${formatNumber(remaining)}s)` : `Please wait (${remaining}s)`}`; };
        updateBtn();
        const timer = setInterval(() => {
            remaining--;
            if (remaining > 0) updateBtn();
            else {
                clearInterval(timer);
                btn.disabled = false;
                btn.classList.remove('btn-disabled-state');
                btn.innerHTML = defaultText;
                triggerHaptic('light');
            }
        }, 1000);
    }

    function watchRewardAdForPoints() {
        const btn = $('btn-watch-reward-ad');
        if (!btn || btn.classList.contains('btn-disabled-state') || btn.disabled) return;
        triggerHaptic('medium');
        const limit = APP_CONFIG.dailyAdLimit || 20, watched = userData.dailyAdsWatched || 0;

        if (watched >= limit) return showToast(APP_LANG === 'bn' ? "আজকের দৈনিক লিমিট শেষ! আগামীকাল আবার চেষ্টা করুন।" : "Daily limit reached! Try again tomorrow.", "error");
        
        const adConfig = selectAdController('earn', watched);
        if (!adConfig.primary) return showToast(APP_LANG === 'bn' ? "বিজ্ঞাপন প্রস্তুত হচ্ছে..." : "Loading ad...", "error");

        btn.classList.add('btn-disabled-state');
        btn.disabled = true;
        btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${APP_LANG === 'bn' ? 'বিজ্ঞাপন আসছে...' : 'Loading ad...'}`;

        playAdLoadingProgress(() => {
            const runEarnAd = (controller, backup) => {
                controller.show().then(async (res) => {
                    if (res?.done || !adConfig.isRewarded) {
                        triggerHaptic('success');
                        adWatchCounter++;
                        const reward = APP_CONFIG.adRewardPoints || 2, todayStr = getTodayBDDate();
                        try {
                            const userRef = db.collection("users").doc(String(currentUser.id));
                            await userRef.update({
                                balancePoints: firebase.firestore.FieldValue.increment(reward),
                                selfEarnedPoints: firebase.firestore.FieldValue.increment(reward),
                                dailyAdsWatched: firebase.firestore.FieldValue.increment(1),
                                lastAdDate: todayStr
                            });
                            const totalSeen = (userData.dailyAdsWatched || 0) + 1 + (userData.videoAdsWatched || 0);
                            if (userData.referredBy && !userData.referralActivated && !userData.isSameDeviceFraud && totalSeen >= 3) {
                                await db.collection("users").doc(String(userData.referredBy)).update({
                                    balancePoints: firebase.firestore.FieldValue.increment(APP_CONFIG.referralBonus || 20),
                                    referralEarnedPoints: firebase.firestore.FieldValue.increment(APP_CONFIG.referralBonus || 20),
                                    totalReferrals: firebase.firestore.FieldValue.increment(1)
                                });
                                await userRef.update({ referralActivated: true });
                            }
                        } catch (e) {}
                        if (window.confetti) window.confetti();
                        showToast(APP_LANG === 'bn' ? `🎉 আপনি ${formatNumber(reward)} পয়েন্ট পেয়েছেন!` : `🎉 You earned ${formatNumber(reward)} points!`, "success");
                    } else {
                        showToast(APP_LANG === 'bn' ? "বিজ্ঞাপন সম্পূর্ণ না দেখলে পয়েন্ট যোগ হবে না!" : "Watch full ad to get reward!", "error");
                    }
                    startButtonCooldown('btn-watch-reward-ad', `<i class="fa-solid fa-play"></i> <span>${I18N[APP_LANG].btnWatchReward}</span>`, 5);
                }).catch(() => {
                    if (backup && backup !== controller) {
                        runEarnAd(backup, null);
                    } else {
                        showToast(APP_LANG === 'bn' ? "বিজ্ঞাপন লোড হতে ব্যর্থ হয়েছে!" : "Failed to load ad!", "error");
                        startButtonCooldown('btn-watch-reward-ad', `<i class="fa-solid fa-play"></i> <span>${I18N[APP_LANG].btnWatchReward}</span>`, 4);
                    }
                });
            };

            runEarnAd(adConfig.primary, adConfig.fallback);
        });
    }

    async function watchVideoUnlockAd() {
        if (!activeDetailVideo) return;
        const btn = $('btn-unlock-ad-step');
        if (!btn || btn.classList.contains('btn-disabled-state') || btn.disabled) return;
        triggerHaptic('medium');

        const vId = activeDetailVideo.id, total = APP_CONFIG.unlockAdCount || 3;
        if (!isVideoCurrentlyUnlocked(vId) && (videoAdProgressMap[vId] || 0) >= total) {
            videoAdProgressMap[vId] = 0; saveUnlockProgress(); updateUnlockProgressUI();
        }

        const currentDone = videoAdProgressMap[vId] || 0;
        if (isVideoCurrentlyUnlocked(vId)) return playMovie(activeDetailVideo);
        if (currentDone >= total) return executeUnlockSuccess('ad');

        btn.classList.add('btn-disabled-state');
        btn.disabled = true;
        btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${APP_LANG === 'bn' ? 'অপেক্ষা করুন...' : 'Please wait...'}`;

        const releaseBtn = () => { btn.classList.remove('btn-disabled-state'); btn.disabled = false; updateUnlockProgressUI(); };

        if (currentDone >= (total - 1)) {
            const isMember = await verifyUserMembershipNow();
            if (!isMember) { pendingActionAfterJoin = () => watchVideoUnlockAd(); releaseBtn(); return; }
        }

        const adConfig = selectAdController('video', currentDone);
        if (!adConfig.primary) { releaseBtn(); return showToast(APP_LANG === 'bn' ? "বিজ্ঞাপন প্রস্তুত হচ্ছে..." : "Loading ad...", "error"); }

        playAdLoadingProgress(() => {
            const handleSuccess = async () => {
                triggerHaptic('success');
                adWatchCounter++;
                videoAdProgressMap[vId] = (videoAdProgressMap[vId] || 0) + 1;
                saveUnlockProgress();
                try {
                    const userRef = db.collection("users").doc(String(currentUser.id));
                    await userRef.update({
                        videoAdsWatched: firebase.firestore.FieldValue.increment(1),
                        totalVideoAdsWatched: firebase.firestore.FieldValue.increment(1),
                        lastAdDate: getTodayBDDate()
                    });
                    const totalSeen = (userData.dailyAdsWatched || 0) + (userData.videoAdsWatched || 0) + 1;
                    if (userData.referredBy && !userData.referralActivated && !userData.isSameDeviceFraud && totalSeen >= 3) {
                        await db.collection("users").doc(String(userData.referredBy)).update({
                            balancePoints: firebase.firestore.FieldValue.increment(APP_CONFIG.referralBonus || 20),
                            referralEarnedPoints: firebase.firestore.FieldValue.increment(APP_CONFIG.referralBonus || 20),
                            totalReferrals: firebase.firestore.FieldValue.increment(1)
                        });
                        await userRef.update({ referralActivated: true });
                    }
                } catch {}

                updateUnlockProgressUI();
                if (videoAdProgressMap[vId] >= total) {
                    executeUnlockSuccess('ad');
                } else {
                    showToast(APP_LANG === 'bn' ? `বিজ্ঞাপন সম্পন্ন! বাকি ${formatNumber(total - videoAdProgressMap[vId])} টি` : `Ad completed! ${total - videoAdProgressMap[vId]} left`, "success");
                }
                startButtonCooldown('btn-unlock-ad-step', $('btn-unlock-ad-step').innerHTML, 5);
            };

            const runController = (c, fallback) => {
                c.show().then(res => (res?.done || !adConfig.isRewarded) ? handleSuccess() : onAdFail("বিজ্ঞাপন সম্পূর্ণ দেখলে আনলক হবে!", "Watch full ad to unlock!"))
                 .catch(() => fallback && fallback !== c ? runController(fallback, null) : onAdFail("বিজ্ঞাপন লোড হতে ব্যর্থ হয়েছে!", "Ad failed to load!"));
            };

            const onAdFail = (bnMsg, enMsg) => {
                updateUnlockProgressUI();
                showToast(APP_LANG === 'bn' ? bnMsg : enMsg, "error");
                startButtonCooldown('btn-unlock-ad-step', $('btn-unlock-ad-step').innerHTML, 4);
            };

            runController(adConfig.primary, adConfig.fallback);
        });
    }

    function extractVideoLinks(data) {
        let rawList = [];
        let src = data.links || data.urls || data.parts || data.episodes || data.url || data.videoUrl || data.link || data.video_url || '';
        if (typeof src === 'string' && src.trim()) rawList = src.split(',').map(s => s.trim()).filter(Boolean);
        else if (Array.isArray(src)) {
            src.forEach(item => {
                if (typeof item === 'string') item.split(',').forEach(u => u.trim() && rawList.push(u.trim()));
                else if (item && typeof item === 'object') {
                    const u = item.url || item.link || '';
                    u.includes(',') ? u.split(',').forEach(x => x.trim() && rawList.push({ ...item, url: x.trim() })) : rawList.push(item);
                }
            });
        }
        let formatted = rawList.map((item, idx) => {
            const partName = `${I18N[APP_LANG].partPrefix} ${formatNumber(idx + 1)}`;
            const defaultThumb = data.thumb || data.thumbnail || data.poster || '';
            return typeof item === 'string' ? { name: partName, part: partName, duration: data.duration || 'HD', views: Number(data.views || 0), url: item.trim(), thumb: defaultThumb }
                                            : { name: item.name || item.title || partName, part: item.part || partName, duration: item.duration || data.duration || 'HD', views: Number(item.views || data.views || 0), thumb: item.thumb || item.thumbnail || defaultThumb, url: (item.url || item.link || '').trim() };
        });
        return formatted.length ? formatted : [{ name: `${I18N[APP_LANG].partPrefix} ${formatNumber(1)}`, duration: "HD", views: Number(data.views || 0), url: "", thumb: data.thumb || '' }];
    }
function isAdultVideo(v) {
        const type=(v.type||'').toLowerCase(), cat=(v.category||'').toLowerCase(), sec=(v.section||'').toLowerCase(), title=(v.title||'').toLowerCase();
        if (/18[\s_-]*\+[\s_-]*movies?|movie[\s_-]*bangla|মুভি[\s_-]*বাংলা|১৮[\s_-]*\+[\s_-]*মুভি/i.test(`${cat} ${sec} ${type}`)) return false;
        if(['adult','imran','18','18+','endal','এন্ডাল','ইমরান'].includes(sec)||['adult','imran','18','18+','endal','এন্ডাল','ইমরান'].includes(type)||v.isAdult===true||v.adult===true)return true;
        const keywords=['adult','18','18+','১৮+','endal','এন্ডাল','ইমরান','desi','college','exclusive','boudi','bhabi','bhabhi','বউদি','ভাবি','এডাল্ট','টিকটকার'];
        return keywords.some(k=>title.includes(k)||cat.includes(k));
    }

    function formatTimeAgo(dateObj) {
        if (!dateObj) return APP_LANG === 'bn' ? '১ দিন আগে' : '1 day ago';
        const past = typeof dateObj === 'number' ? dateObj : (dateObj.seconds ? dateObj.seconds * 1000 : (dateObj instanceof Date ? dateObj.getTime() : new Date(dateObj).getTime() || Date.now() - 3600000));
        const diffSec = Math.floor((Date.now() - past) / 1000);
        
        if (diffSec < 60) return APP_LANG === 'bn' ? 'এইমাত্র' : 'Just now';
        
        const diffM = Math.floor(diffSec / 60);
        if (diffM < 60) return APP_LANG === 'bn' ? `${formatNumber(diffM)} মিনিট আগে` : `${diffM} mins ago`;
        
        const diffH = Math.floor(diffM / 60);
        if (diffH < 24) return APP_LANG === 'bn' ? `${formatNumber(diffH)} ঘণ্টা আগে` : `${diffH} hours ago`;
        
        const diffDays = Math.floor(diffH / 24);
        if (diffDays < 7) return APP_LANG === 'bn' ? `${formatNumber(diffDays)} দিন আগে` : `${diffDays} days ago`;
        
        const diffWeeks = Math.floor(diffDays / 7);
        if (diffWeeks < 4) return APP_LANG === 'bn' ? `${formatNumber(diffWeeks)} সপ্তাহ আগে` : `${diffWeeks} weeks ago`;
        
        const diffMonths = Math.floor(diffDays / 30);
        if (diffMonths < 12) return APP_LANG === 'bn' ? `${formatNumber(diffMonths)} মাস আগে` : `${diffMonths} months ago`;
        
        const diffYears = Math.floor(diffDays / 365);
        return APP_LANG === 'bn' ? `${formatNumber(diffYears)} বছর আগে` : `${diffYears} years ago`;
    }
function processVideoSnapshot(docs) {
        allLoadedVideos = docs.map(d => {
            const data=d.data(), links=extractVideoLinks(data);
            return {id:d.id,...data,title:data.title||data.name||(APP_LANG==='bn'?'ভিডিও':'Video'),thumb:data.imageUrl||data.thumb||data.thumbnail||data.poster||'https://via.placeholder.com/600x450?text=Imran',imageUrl:data.imageUrl||data.thumb||data.thumbnail||data.poster||'',description:data.description||data.text||'',adCount:Number(data.adCount??data.adsRequired??APP_CONFIG.unlockAdCount??0),duration:data.duration||'HD',url:data.videoUrl||data.targetUrl||data.link||links[0]?.url||data.url||'',links,views:Number(data.views||0),likes:Number(data.likes||0),timeAgo:data.timeAgo||formatTimeAgo(data.createdAt||data.timestamp||data.date),section:(data.section||'adult').toLowerCase(),type:(data.type||'adult').toLowerCase(),category:(data.category||'imran').toLowerCase()};
        }).filter(isAdultVideo).sort((a,b)=>(b.createdAt?.seconds||0)-(a.createdAt?.seconds||0));
        const count=$('adult-total-count'); if(count) count.innerText=formatNumber(allLoadedVideos.length);
        filterVideosUI(); hideGlobalLoader(); if(!hasHandledInitialTargetVideo) handleDeepLinkVideoScroll();
    }
function scrollToAndHighlightVideo(videoId) {
        if(!videoId) return; const cleanId=videoId.replace(/^vid_/,'').trim();
        const found=allLoadedVideos.find(v=>v.id===cleanId||v.id===videoId); if(!found) return;
        const idx=allLoadedVideos.findIndex(v=>v.id===found.id); if(idx>=0) currentPageMap.adult=Math.floor(idx/ITEMS_PER_PAGE)+1;
        filterVideosUI(); switchNavTab('adult'); setTimeout(()=>{const card=$(`video-card-${found.id}`); if(card){card.scrollIntoView({behavior:'smooth',block:'center'});card.classList.add('highlight-glow-pulse');setTimeout(()=>card.classList.remove('highlight-glow-pulse'),3500);}},300);
    }

    function handleDeepLinkVideoScroll() {
        const p = new URLSearchParams(window.location.search);
        const targetId = p.get('video') || p.get('v') || p.get('id') || tg?.initDataUnsafe?.start_param;
        if (targetId) {
            hasHandledInitialTargetVideo = true;
            scrollToAndHighlightVideo(targetId.replace(/^vid_/, ''));
        }
    }
async function loadSettingsAndVideos() {
        if(!db) return;
        try { db.collection('videos').onSnapshot(s=>{ if(s.empty) renderVideosForGrid('adult',[]); else processVideoSnapshot(s.docs); hideGlobalLoader(); },()=>hideGlobalLoader()); }
        catch { hideGlobalLoader(); }
    }
function handleHeroSectionClick(cardEl, tag, section) {
        triggerHaptic('light');
        if(section!=='adult') return;
        cardEl.closest('.hero-banner-grid')?.querySelectorAll('.hero-card').forEach(c=>c.classList.remove('active-animated'));
        cardEl.classList.add('active-animated'); activeHeroFilterTags.adult='adult_new'; currentPageMap.adult=1; filterVideosUI();
    }

    function toggleCardLike(event, videoId) {
        event.stopPropagation();
        triggerHaptic('medium');
        const v = allLoadedVideos.find(item => item.id === videoId);
        if (!v) return;

        const isLiked = !!userLikedVideos[videoId];
        userLikedVideos[videoId] = !isLiked;
        v.likes = Math.max(0, (v.likes || 0) + (isLiked ? -1 : 1));
        showToast(APP_LANG === 'bn' ? (isLiked ? "লাইক বাতিল করা হয়েছে" : "ভিডিওতে লাইক দেওয়া হয়েছে!") : (isLiked ? "Like removed" : "Video liked!"), isLiked ? "info" : "success");

        if (db && videoId) db.collection("videos").doc(videoId).update({ likes: firebase.firestore.FieldValue.increment(isLiked ? -1 : 1) }).catch(()=>{});
        localStorage.setItem('app_user_liked_vids', JSON.stringify(userLikedVideos));

        if ($(`card-like-count-${videoId}`)) $(`card-like-count-${videoId}`).innerText = formatNumber(v.likes);
        if ($(`card-like-chip-${videoId}`)) $(`card-like-chip-${videoId}`).classList.toggle('active-liked', !isLiked);
        if (activeDetailVideo?.id === videoId) { activeDetailVideo.likes = v.likes; updateDetailLikeUI(); }
    }
function renderPaginationUI(type,totalPages,currentPage) {
        const c=$('adult-pagination'); if(!c) return;
        if(totalPages<=1){c.style.display='none';c.innerHTML='';return;}
        c.style.display='flex'; let out=`<div class="page-pill-btn ${currentPage===1?'disabled':''}" onclick="goToPaginationPage('adult',${currentPage-1})">‹</div>`;
        for(let i=1;i<=totalPages;i++) out+=`<div class="page-pill-btn ${i===currentPage?'active':''}" onclick="goToPaginationPage('adult',${i})">${formatNumber(i)}</div>`;
        out+=`<div class="page-pill-btn ${currentPage===totalPages?'disabled':''}" onclick="goToPaginationPage('adult',${currentPage+1})">›</div>`; c.innerHTML=out;
    }
function goToPaginationPage(type,pageNum) {
        triggerHaptic('light'); currentPageMap.adult=pageNum; filterVideosUI(); $('adult-list-grid')?.scrollIntoView({behavior:'smooth',block:'start'});
    }
function renderVideosForGrid(type,list) {
        if(type!=='adult') return;
        const grid=$('adult-list-grid'), empty=$('adult-empty-card'); if(!grid) return;
        if(!list||!list.length){grid.innerHTML='';if(empty)empty.style.display='block';renderPaginationUI('adult',0,1);return;}
        if(empty)empty.style.display='none'; const totalPages=Math.ceil(list.length/ITEMS_PER_PAGE);
        currentPageMap.adult=Math.min(Math.max(1,currentPageMap.adult||1),totalPages); const page=currentPageMap.adult;
        const visible=list.slice((page-1)*ITEMS_PER_PAGE,page*ITEMS_PER_PAGE); renderPaginationUI('adult',totalPages,page);
        grid.innerHTML=visible.map(v=>`<div class="series-card-item" id="video-card-${v.id}" onclick="openVideoDetailView('${v.id}')"><div class="series-thumb-container"><div class="series-thumb-badge-blue"><i class="fa-solid fa-circle-play"></i> ${v.duration||'HD'}</div><img src="${v.thumb}" onerror="this.src='https://via.placeholder.com/600x450?text=Imran'" loading="lazy"><div class="series-thumb-badge-yellow" style="background:linear-gradient(135deg,#0ea5e9,#2563eb);color:#fff;">ইমরান</div></div><div class="series-info-body"><div class="series-title-row"><div class="series-main-title">${v.title}</div><div class="series-share-btn" onclick="shareVideoItem(event,'${v.id}','${encodeURIComponent(v.title)}')"><i class="fa-solid fa-share-nodes"></i></div></div><div class="series-meta-row"><div class="series-chips-group"><span class="series-chip-pill"><i class="fa-solid fa-eye"></i> ${formatNumber(v.views||0)}</span><span class="series-chip-pill"><i class="fa-solid fa-film"></i> HD</span></div><div class="series-time-ago">${v.timeAgo||formatTimeAgo(v.createdAt||v.timestamp||v.date)}</div></div></div></div>`).join('');
    }

    function shareVideoItem(event, videoId, encodedTitle) {
        event?.stopPropagation();
        triggerHaptic('medium');
        const shareUrl = `https://t.me/${APP_CONFIG.botUsername || "Ret2_bot"}/${APP_CONFIG.appShortName || "TkEarning"}?startapp=vid_${videoId}`;
        const msg = APP_LANG === 'bn' ? `🔥 ${decodeURIComponent(encodedTitle || 'ভিডিও')} সরাসরি দেখুন এখনই!` : `🔥 Watch ${decodeURIComponent(encodedTitle || 'Video')} right now!`;
        openTelegramDirect(`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(msg)}`);
    }
function openVideoDetailView(videoId, epIndex = null) {
        triggerHaptic('light'); currentPlayingPartIndex=0;
        const video=allLoadedVideos.find(v=>v.id===videoId); if(!video)return showToast(APP_LANG==='bn'?'ভিডিও পাওয়া যায়নি!':'Video not found!');
        activeDetailVideo=video; video.views=(video.views||0)+1;
        if(db&&videoId)db.collection('videos').doc(videoId).update({views:firebase.firestore.FieldValue.increment(1)}).catch(()=>{});
        if(videoUnlockExpiryMap[videoId]&&Date.now()>=videoUnlockExpiryMap[videoId]){delete videoUnlockExpiryMap[videoId];delete videoAdProgressMap[videoId];saveUnlockProgress();}
        videoAdProgressMap[videoId]=videoAdProgressMap[videoId]||0;
        const badge=$('detail-category-badge'); if(badge){badge.innerHTML='<i class="fa-solid fa-play"></i> ইমরান';badge.style.background='var(--grad-blue)';}
        $('detail-poster-img').src=video.thumb; $('detail-file-title').innerText=video.title;
        $('detail-duration-badge').innerHTML=`<i class="fa-regular fa-clock"></i> ${video.duration||'HD'}`;
        $('detail-views-txt').innerText=`${formatNumber(video.views||0)} ${I18N[APP_LANG].viewsWord}`;
        updateDetailLikeUI();updateUnlockProgressUI();document.querySelectorAll('.content-tab').forEach(t=>t.style.display='none');$('video-unlock-detail-view').style.display='block';updateTelegramBackButtonState();window.scrollTo({top:0,behavior:'smooth'});
    }

    function updateDetailLikeUI() {
        if (!activeDetailVideo) return;
        const isLiked = !!userLikedVideos[activeDetailVideo.id];
        $('detail-likes-txt').innerText = `${formatNumber(activeDetailVideo.likes || 0)} ${I18N[APP_LANG].likesWord}`;
        $('detail-like-btn-action')?.classList.toggle('active-liked', isLiked);
    }

    function toggleDetailVideoLike() {
        if (!activeDetailVideo) return;
        triggerHaptic('medium');
        const vId = activeDetailVideo.id, isLiked = !!userLikedVideos[vId];
        userLikedVideos[vId] = !isLiked;
        activeDetailVideo.likes = Math.max(0, (activeDetailVideo.likes || 0) + (isLiked ? -1 : 1));
        showToast(APP_LANG === 'bn' ? (isLiked ? "লাইক বাতিল করা হয়েছে" : "ধন্যবাদ আপনার লাইকের জন্য!") : (isLiked ? "Like removed" : "Thank you for liking!"), isLiked ? "info" : "success");

        if (db && vId) db.collection("videos").doc(vId).update({ likes: firebase.firestore.FieldValue.increment(isLiked ? -1 : 1) }).catch(()=>{});
        localStorage.setItem('app_user_liked_vids', JSON.stringify(userLikedVideos));
        updateDetailLikeUI();

        if ($(`card-like-count-${vId}`)) $(`card-like-count-${vId}`).innerText = formatNumber(activeDetailVideo.likes);
        if ($(`card-like-chip-${vId}`)) $(`card-like-chip-${vId}`).classList.toggle('active-liked', !isLiked);
    }

    function closeVideoDetailView() {
        triggerHaptic('light');
        if (countdownTimerInterval) { clearInterval(countdownTimerInterval); countdownTimerInterval = null; }
        $('video-unlock-detail-view').style.display = 'none';
        switchNavTab(currentActiveTab);
        updateTelegramBackButtonState();
    }
function updateUnlockProgressUI() {
        if(!activeDetailVideo) return;
        const vId=activeDetailVideo.id,total=APP_CONFIG.unlockAdCount||3,isUnlocked=isVideoCurrentlyUnlocked(vId);
        const t=I18N[APP_LANG],timerCard=$('unlock-status-timer-card'),adBtn=$('btn-unlock-ad-step');
        if(countdownTimerInterval){clearInterval(countdownTimerInterval);countdownTimerInterval=null;}
        if(isUnlocked){if(timerCard)timerCard.style.display='flex';startExpiryCountdown(vId);$('unlock-ratio-txt').innerText=`${formatNumber(total)} / ${formatNumber(total)} ${t.unlockCompletedTxt} (100%)`;$('unlock-p-bar').style.width='100%';if(adBtn)adBtn.innerHTML=`<i class="fa-brands fa-telegram"></i> ${APP_LANG==='bn'?'টেলিগ্রামে ভিডিও দেখুন':'Watch on Telegram'}`;}
        else {if(timerCard)timerCard.style.display='none';const done=videoAdProgressMap[vId]||0,percent=Math.min(100,Math.round(done/total*100));$('unlock-ratio-txt').innerText=`${formatNumber(done)} / ${formatNumber(total)} ${t.unlockCompletedTxt} (${formatNumber(percent)}%)`;$('unlock-p-bar').style.width=percent+'%';if(adBtn)adBtn.innerHTML=done>=total?`<i class="fa-brands fa-telegram"></i> ${APP_LANG==='bn'?'টেলিগ্রামে ভিডিও দেখুন':'Watch on Telegram'}`:(done===total-1?`<i class="fa-brands fa-telegram"></i> ${APP_LANG==='bn'?'চ্যানেলে জয়েন ও শেষ অ্যাড দেখুন':'Join Channel & Watch Final Ad'}`:`<i class="fa-solid fa-desktop"></i> ${APP_LANG==='bn'?`বিজ্ঞাপন দেখুন (বাকি ${formatNumber(total-done)} টি)`:`Watch Ad (${total-done} remaining)`}`);}
    }

    function startExpiryCountdown(vId) {
        const timer = $('unlock-remaining-countdown');
        if (countdownTimerInterval) { clearInterval(countdownTimerInterval); countdownTimerInterval = null; }
        const update = () => {
            const diff = (videoUnlockExpiryMap[vId] || 0) - Date.now();
            if (diff <= 0) {
                clearInterval(countdownTimerInterval); countdownTimerInterval = null;
                delete videoUnlockExpiryMap[vId]; delete videoAdProgressMap[vId];
                saveUnlockProgress(); updateUnlockProgressUI();
                return showToast(APP_LANG === 'bn' ? "আনলকের মেয়াদ শেষ হয়েছে!" : "Unlock expired!", "error");
            }
            const h = String(Math.floor(diff / 3600000)).padStart(2, '0');
            const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
            const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
            timer.innerText = `${formatNumber(h)}:${formatNumber(m)}:${formatNumber(s)}`;
        };
        update();
        if ((videoUnlockExpiryMap[vId] || 0) - Date.now() > 0) countdownTimerInterval = setInterval(update, 1000);
    }
function executeUnlockSuccess() {
        if(!activeDetailVideo)return;
        const vId=activeDetailVideo.id, hrs=APP_CONFIG.adUnlockDurationHours||2;
        videoUnlockExpiryMap[vId]=Date.now()+hrs*3600000;saveUnlockProgress();setTimeout(()=>playMovie(activeDetailVideo),800);
    }

    async function playMovie(videoObj) {
        if (!videoObj) return;
        pendingActionAfterJoin = () => playMovie(videoObj);
        if (!await verifyUserMembershipNow()) return;

        const links = videoObj.links || extractVideoLinks(videoObj);
        const targetUrl = links[currentPlayingPartIndex || 0]?.url || videoObj.url;

        if (targetUrl && isTelegramUrl(targetUrl)) openTelegramDirect(targetUrl);
        else if (targetUrl && (['.m3u8', '.mp4', 'drive.google.com', 'embed'].some(x => targetUrl.includes(x)))) openDirectPlayer(videoObj, currentPlayingPartIndex || 0);
        else openTelegramDirect(targetUrl?.startsWith('http') ? targetUrl : (APP_CONFIG.telegramChannel || "https://t.me/Ads_Earn_Pro"));
    }

    function openDirectPlayer(videoObj, startIndex = 0) {
        triggerHaptic('light');
        const links = videoObj.links || extractVideoLinks(videoObj);
        if (!links?.length || !links[0].url) return showToast(APP_LANG === 'bn' ? "ভিডিও লিংক পাওয়া যায়নি!" : "Video link not found!", "error");

        currentPlayingPartIndex = (startIndex >= 0 && startIndex < links.length) ? startIndex : 0;
        const targetUrl = links[currentPlayingPartIndex].url;
        if (isTelegramUrl(targetUrl)) { closeWebVideoPlayer(); return openTelegramDirect(targetUrl); }

        currentStreamUrl = targetUrl;
        $('web-player-title').innerText = `${videoObj.title} - ${links[currentPlayingPartIndex].name || ''}`;
        renderPlayerPartsBar(links, currentPlayingPartIndex);
        $('web-player-modal').style.display = 'flex';
        updateTelegramBackButtonState();
        playStreamUrlInPlayer(targetUrl);
    }


    function playStreamUrlInPlayer(url) {
        const v = $('in-app-video-element'), f = $('in-app-iframe-element');
        if (hlsInstance) { hlsInstance.destroy(); hlsInstance = null; }
        if (!url) return showToast(APP_LANG === 'bn' ? "লিঙ্ক পাওয়া যায়নি!" : "Link not found!", "error");

        v.onended = () => {
            if (activeDetailVideo?.links && currentPlayingPartIndex < activeDetailVideo.links.length - 1) switchPlayerPart(currentPlayingPartIndex + 1);
        };

        if (['drive.google.com', 'youtube.com/embed', 'embed'].some(x => url.includes(x))) {
            v.pause(); v.removeAttribute('src'); v.load(); v.style.display = 'none';
            f.src = url; f.style.display = 'block';
        } else {
            f.src = ""; f.style.display = 'none'; v.style.display = 'block';
            if (url.includes('.m3u8')) {
                if (window.Hls?.isSupported()) {
                    hlsInstance = new Hls(); hlsInstance.loadSource(url); hlsInstance.attachMedia(v);
                    hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => v.play().catch(()=>{}));
                } else if (v.canPlayType('application/vnd.apple.mpegurl')) {
                    v.src = url; v.play().catch(()=>{});
                }
            } else { v.src = url; v.play().catch(()=>{}); }
        }
    }

    function closeWebVideoPlayer() {
        triggerHaptic('light');
        const v = $('in-app-video-element'), f = $('in-app-iframe-element');
        if (v) { v.pause(); v.removeAttribute('src'); v.onended = null; v.load(); }
        if (f) f.src = "";
        if (hlsInstance) { hlsInstance.destroy(); hlsInstance = null; }
        $('web-player-modal').style.display = 'none';
        updateTelegramBackButtonState();
    }
function switchNavTab(tabName, el) {
        triggerHaptic('light'); if(!['adult','profile'].includes(tabName)) tabName='adult';
        currentActiveTab=tabName; $('video-unlock-detail-view').style.display='none'; $('main-header').style.display='block';
        document.querySelectorAll('.content-tab').forEach(t=>t.style.display='none');
        document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
        const tab=$('tab-'+tabName); if(tab) tab.style.display='block'; if(el) el.classList.add('active');
        else { const navs=[...document.querySelectorAll('.bottom-nav .nav-item')]; const idx=tabName==='adult'?0:1; navs[idx]?.classList.add('active'); }
        document.querySelectorAll('.drawer-item').forEach(i=>i.classList.remove('active-blue-grad')); $('drawer-nav-'+tabName)?.classList.add('active-blue-grad');
        updateTelegramBackButtonState(); window.scrollTo({top:0,behavior:'smooth'});
    }

    function universalCopyText(text, msg) {
        triggerHaptic('light');
        let copied = false;
        try {
            const t = document.createElement("textarea");
            t.value = text; t.style.position = "fixed"; t.style.left = "-9999px";
            document.body.appendChild(t); t.focus(); t.select();
            copied = document.execCommand('copy');
            document.body.removeChild(t);
        } catch {}

        if (copied) showToast(msg, "success");
        else if (navigator.clipboard?.writeText) {
            navigator.clipboard.writeText(text).then(() => showToast(msg, "success")).catch(() => showToast("কপি করা সম্ভব হয়নি!", "error"));
        } else showToast("কপি করা সম্ভব হয়নি!", "error");
    }

    function getReferralLink() {
        if (!currentUser?.id) return '';
        const configured = String(APP_CONFIG.referralLinkTemplate || APP_CONFIG.referralLinkBase || '').trim();
        if (configured) return configured.includes('{userId}') ? configured.replace(/\{userId\}/g, encodeURIComponent(String(currentUser.id))) : (configured.endsWith('=') || configured.endsWith('/') ? configured + encodeURIComponent(String(currentUser.id)) : configured + encodeURIComponent(String(currentUser.id)));
        return `https://t.me/${APP_CONFIG.botUsername || "Ret2_bot"}/${APP_CONFIG.appShortName}?startapp=${encodeURIComponent(String(currentUser.id))}`;
    }
    function copyReferCode() { universalCopyText(String(currentUser.id), APP_LANG === 'bn' ? "রেফার কোড কপি হয়েছে!" : "Referral code copied!"); }
    function copyReferLink() { universalCopyText(getReferralLink(), APP_LANG === 'bn' ? "লিংক কপি হয়েছে!" : "Link copied!"); }

    function shareReferralLink() {
        triggerHaptic('medium');
        const url = getReferralLink();
        const msg = APP_LANG === 'bn' ? (APP_CONFIG.referralShareTextBn || "🔥 আমাদের অ্যাপে যোগ দিন এবং রিওয়ার্ড উপভোগ করুন!") : (APP_CONFIG.referralShareTextEn || "🔥 Join our app and enjoy rewards!");
        openTelegramDirect(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(msg)}`);
    }

    function toggleSearchBox() {
        triggerHaptic('light');
        const s = $('search-container');
        s.style.display = s.style.display === 'none' ? 'block' : 'none';
        if (s.style.display === 'block') $('video-search-input').focus();
    }

    function debouncedSearch() {
        clearTimeout(searchDebounceTimeout);
        searchDebounceTimeout = setTimeout(() => {
            currentPageMap.adult = 1;
            filterVideosUI();
        }, 180);
    }
function filterVideosUI() {
        const q=($('video-search-input')?.value||'').toLowerCase().trim();
        let list=allLoadedVideos.filter(isAdultVideo);
        const cat=activeCategoryFilters.adult||'all';
        list=list.filter(v=>{
            const title=(v.title||'').toLowerCase(), category=(v.category||'').toLowerCase();
            if(!title.includes(q)&&!category.includes(q)) return false;
            return cat==='all'||category.includes(String(cat).toLowerCase())||title.includes(String(cat).toLowerCase());
        });
        renderVideosForGrid('adult',list);
    }

    function setCatFilter(el, tag, section) {
        triggerHaptic('light');
        el?.parentElement?.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
        el?.classList.add('active');
        activeCategoryFilters[section] = tag;
        currentPageMap[section] = 1;
        filterVideosUI();
    }

    document.addEventListener('DOMContentLoaded', () => {
        switchNavTab('adult');
        initApp();
    });
