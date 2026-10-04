# Imran Telegram Mini App — GitHub Pages

এই প্রজেক্টটি একাধিক ফাইলে ভাগ করা হয়েছে, কিন্তু সব ফাইল একসাথে রাখলে আগের HTML ভার্সনের মতোই কাজ করবে।

## Folder structure

```text
imran_github_site/
├── index.html
├── README.md
├── css/
│   └── style.css
└── js/
    ├── app.js
    └── monetag-redirect.js
```

## GitHub Pages

1. সব ফাইল ও folder structure একইভাবে GitHub repository-তে upload করুন।
2. `index.html` repository root-এ রাখুন।
3. GitHub → Settings → Pages → Deploy from branch নির্বাচন করুন।
4. Branch হিসেবে আপনার main/master branch এবং folder হিসেবে `/ (root)` নির্বাচন করুন।
5. Deploy হওয়ার পর পাওয়া GitHub Pages URL Telegram Mini App-এর Web App URL হিসেবে ব্যবহার করুন।

## গুরুত্বপূর্ণ

- `index.html` থেকে `css/style.css`, `js/app.js` এবং `js/monetag-redirect.js` relative path-এ load হয়।
- তাই file/folder-এর নাম বা অবস্থান পরিবর্তন করলে path-ও পরিবর্তন করতে হবে।
- Firebase, Telegram Web App, Font Awesome, Google Fonts, HLS.js, Confetti এবং Monetag-এর external SDK আগের মতোই রাখা হয়েছে।
- Imran video/content section এবং ad-to-video redirect flow এই split করার সময় পরিবর্তন করা হয়নি।
