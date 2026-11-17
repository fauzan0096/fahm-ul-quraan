// ==========================================
// SERVICE WORKER — Auto Update Version
// v96: OFFLINE PAKKA — install ab poora ~9MB nahi utaarta (pehle SW 'installing' mein atka rehta tha, kabhi
//      active nahi hota tha, is liye offline kuch bhi nahi chalta tha). Ab install sirf bunyaadi shell
//      (index/app/tools/sounds/icons/theme/manifest) cache karta hai, baaki files PICHHE SE bharti hain
//      (activate + page ka message + sync). Purane cache ki files naye version mein copy hoti hain, is liye
//      version badalne par 9MB dobara download nahi hota. Fetch mein kabhi respondWith(undefined) nahi —
//      offline navigation par index.html (kisi bhi cache se) ya saaf "internet chahiye" page milta hai.
// v95: MERGE — v94 + Dua/Arkan/Games ki ilmi aur imla ki islaah (ek hi mauqif, tootay alfaz theek, Arabic quotes sahi)
// v94: Theme naam 4 zubaan; Qibla+Ramadan tile ek jaisa; Quran Patla/Mota 4 zubaan; ruku page ki taraf (taaq page = right, juft = left)
// v93: Shop themes designer backgrounds: Samundar (lehrein), Gulaab (rosette), Amethyst (chaand-taare), Zamurrud (khatam geometry), Lavender (lattice), Registan (dunes), Sky Blue (badal); Kaaba + Shab-e-Qadr waise hi
// v92: Quran page (padhna) mein alfaz ka Patla/Mota option (6 darje, yaad rehta hai)
// v91: Shop themes naye (9): Sky Blue, Kaaba (Kaala-Sunehra), Shab-e-Qadr waise hi; baaki naye rang; Home par Qibla + Ramadan ek hi line mein, upar ke 9 buttons pehle jaise
// v90: Namaz ke baad tasbih 33·33·34 (Arkan fazail, 4 zubaan); Quran page se naqshi side-patti hata kar saaf Indo-Pak jaisa frame + ruku ع kinare par; Qibla Finder home ke quick-nav aur Quran header se; Home par Ramadan counter (ramadan.js tools.js ke andar)
// v89 (kalima): Arkan — Chautha Kalima ab wahi jo Fajr ke baad ki hadees (Tirmidhi 3474) mein hai (lamba badhaya hua nahi); aakhir mein namaz ke baad 33·33·34 (Muslim 596) aur 100 poora karne ki riwayat (Muslim 597); Arkan pages ka install popup bhi 4 zubaan mein
// v89: MERGE — v88 (aap ki line: Games 4-zubaan, Ramadan counter, Arkan/course fixes) + Qibla Finder (meri line)
// v83: v82 + Games page 4 zubaanon mein (games-lang.js: KBC, Sahaba, Memory, Emoji, Bazm)
// Qibla (pehle v83): Qibla Finder (home par card + sheet): Kaaba ka zaavia, compass (Android/iPhone), GPS ya haath se coordinates — poora offline, 4 zubaan mein (tools.js, icons.js, index.html)
// v82: MERGE — v81 (v72–v78 ke saare features + har page ke title/icon/date 4 zubaan mein) + v79 ka Seerat (Din 1–34: islahat, hawale, 4-zubaan tarjuma)
// Seerat ki alag line (pehle v72–v79 ke naam se) — seerat.js:
// Seerat-line v79: Seerat Din 20-34 ki islahat + 4-zubaan (Urdu/Roman/Hindi/English) mukammal tarjuma, hawale aur ikhtilaf ke saath
// Seerat-line v78: Seerat Din 19-20 ka 4-zubaan tarjuma + Urdu islahat
// Seerat-line v77: Seerat Din 16-18 ka 4-zubaan tarjuma + Urdu islahat
// Seerat-line v76: Seerat Din 13-15 ka 4-zubaan tarjuma + Urdu islahat
// Seerat-line v75: Seerat Din 10-12 ka 4-zubaan tarjuma + Urdu islahat
// Seerat-line v74: Seerat Din 7-9 ka 4-zubaan tarjuma + Urdu islahat
// Seerat-line v73: Seerat Din 4-6 ka 4-zubaan tarjuma + Urdu islahat
// Seerat-line v72: Seerat Din 1-3 ka mukammal 4-zubaan tarjuma + Urdu islahat (naqid ki nazar se); baaqi din ek ek karke
// v80: har page ke title/icon/tab/button/label/placeholder 4 zubaan mein (app.js: auto-translate engine, ek dictionary D) + Quran aur Games page par language button
// v79: icon ke labels (home tiles, neeche ki bar, menu, shop, page titles) aur Arabi/English tareekh ab 4 zubaanon mein (اردو / Roman / हिंदी / English) — app.js (QSLang.t, data-lb) + tools.js (hijri)
// v75: Arkan pages — ikhtilafi masail hata kar muttafiq/jumhur ka qaul; har 50 lafz ke baad 20 sawal ka exam; course ki 7 misalon ki islah
// v74: exam — jawab chunte waqt awaaz band (sahi/galat ka pata na chale), Submit par seedha dashboard + natija wahin, double-submit se din do baar nahi badhta
// v73: streak fix — roz app kholne par badhti hai (pehle kabhi likhi hi nahi jaati thi)
// v72: audit-fix — chhote phone par header (title kat'na/Home button), games header, Arkan header safe-area, install popup RTL, SVG icons (Asma, Nahw-Sarf, Shop, Namaz), azan tile, naye manifest screenshots
// v71: teeno course (Seerat, Nahw-Sarf, Arkan) ab sab ke liye khule; naya icon set (icons.js) — Home tiles, neeche ki bar, header; sab zip merge (course.js ayat Day 1-80, Seerat 4 zubaan, Nahw-Sarf 4 zubaan, Arkan 4 zubaan + design-fix)
// v70: Arkan-e-Islam 4 zubaanon mein (Urdu / Roman / Hindi / English) — arkan-lang.js, har jagah (matn, refs, calculator, buttons)
// v69: Arkan pages mein tabs (dua ki tarah, ek waqt mein ek hissa — scroll atakna band), pichla/agla button, naya design
// v68: dono zip merge — Arkan-e-Islam (root par) + Seerat mein Shamail (din 31-34, sirf sahih ahadith, Albani ke hukm ke saath)
// v67: Arkan-e-Islam ab root par (arkan.html, arkan-kalima.html ...) — folder upload mein 404 deta tha; SW ab cache-first + background refresh (click par foran khule), sab pages precache
// v66 (purana, folder): arkan-islam/ folder (Kalima, Namaz, Zakat, Roza, Hajj) — filhaal sirf admin, precache nahi (visit par network-first cache hota hai)
// v65: Seerat ka button Nahw-Sarf ki tarah top link bar mein (sirf admin)
// v64: seerat.js (Seerat 30 din, sirf Admin, tap par load — precache nahi) + tools.js mein Arabi (Hijri) tareekh — sunnat.js aur Ruqya Shariah ke saath merge
// v63: Ruqya Shariah category (dua.html, 19 mustanad entries) + dua.js translations — sunnat.js wale v62 ke saath merge
// v62: sunnat.js — 'Aaj ki Ayat' ke saath 'Aaj ki Sunnat' (Riyadh-us-Saliheen, Shamela se)
// v61: arabic-grammar.html (Nahw-Sarf 30 din ka course) — filhaal sirf admin ko dikhta hai
// v60: Day 41 ka doosra 'أَتَى' (Ata kiya) hata kar 'كَفَى' (Kaafi hua) — ab har lafz sirf ek din mein
// v59: nayi nature-ambience.mp3 (3 min) games mein; games.html ka <source type> theek (audio/mpeg); purani 2-min cache wali mp3 refresh hoti hai
// v57: iPhone ke liye apple-touch-icon.png (180x180); ?reset=1 install popup ke flags bhi saaf karta hai
// v56: SAB FILES EK HI JAGAH (koi folder nahi) — upload mein kuch chhootta nahi; saare paths root par
// v55 (login fix): boot guard (file na mile to wajah dikhaye, ?reset=1 se cache saaf), password bade/chhote harf + storage error handle
// v54: Files folders mein:  (app, tools, sounds, course, dua), ,  — root par sirf pages + sw.js + manifest
// v53 (rotate on: orientation any): manifest poora (screenshots, icon sizes, display_override, launch_handler, shortcuts); purana Al-Quran Al-Karim icon wapas
// v52: dono zip mix (language system + tasbeeh); PWABuilder: Background Sync, Periodic Sync, Push Notifications handlers; lang.js, duaTr.js
// v51: tasbeeh.js (misbaha tile azan/yaad ke saath), terms.html, kill.html cache, native azan ka purana lock code saaf
// v50: dono zip mile (Quran/themes/backup + profile delete, admin, Kitab wa Sunnat, muttafaq sawal, azan/lock hata); menu order Quran > Sabaq > Games > Tajweed
// v49: Quran page mein course ke saare alfaz alag rang mein (tap par matlab)
// v48: nasheed.mp3 hata kar original nature-ambience.mp3 (hawa + paani + parinde, code se bani)
// v47: quran.html (Indo-Pak Quran, Junagarhi tarjuma, Ibn Kathir tafseer, audio) + fq-quran-v1 cache
// v46: themes.js (kharidi theme har page par + 3 naye special themes), Bazm-e-Fahm games.html ke andar
// v45: backup.js (Backup/Restore), offline audio (azan + nasheed, range support), offline Google Fonts, privacy.html cache
// v44: Bazm-e-Fahm game games page mein jora (bazm.html)
// v43: app ka naam badal kar Fahm-ul-Quran (فهم القرآن)
// v42: certificate — jhoota 'Sanad ki jaanch' hata, 'Completion Certificate' naam, disclaimer
// v41: onboarding.js (welcome slides, sirf pehli baar); games se Shab-e-Barat/Miraj ke sawal hataye
// v40: ui.js + install.js + progress.js ek file (app.js) mein; QSSFX sounds.js mein
// v39: speech.js + qari.js + games-audio.js ek file (sounds.js) mein
// v38: Roz marra ki 26 duaein (Hisnul Muslim), namaz.js dua aur asma pages mein
// v37: Tajweed ke 38 qawaid (18 naye), iPhone status bar ka dhundhla hissa theek
// v36: ayat Day 1-50 (lafz 1-500) poore
// v35: ayat Day 1-30 + 41-57 (dono versions mila diye)
// v34: Naya dashboard (maqsad > shortcuts > namaz/yaad > ayat > safar > sabaq), nasheed har game mein, Silver/Gold exam mein anbiya ke naam nahi
// v33: Namaz panel back-gesture, azan calendar (1 din se 1 saal), chhote namaz/yaad cards
// v32: Android app ke liye namaz.js bridge (azan app band hone par bhi)
// v31: Mahine ka hisaab (5 boxes, 2 mahine ka data), azan ki awaaz (3 mp3)
// v30: Shop mein 16 stickers (hamesha ke liye, naam ke baazu mein), theme dobara lagana, namaz.js (azan lock + roz ki namaz)
// v29: naam ka font Playfair Display + Aref Ruqaa
// v28: app ke naam ka naya design (Reem Kufi)
// v27: Kamzor lafz revision, roz ki yaad-dehani (.ics), Sanad No. + jaanch
// v26: 92 padav ka safar (Silver beech mein, Gold aakhir mein), Qari sirf ayat par, ek language button, naya naam-font, ayat offline download
// v25: Day 11-20 (lafz 101-200) ki ayat + har ayat par Mishary ki mp3 ⬇ Download button
// v24: Day 1-10 ke har lafz ke saath Quran ki ayat (wordAyat.js), lafz highlight + hawala + Qari Mishary
// v23: Silver (500 lafz) aur Final (900 lafz) milestone exam, 80% pass, Day 51+ lock
// v22: Qari ki awaaz har Quran ke hisse par (multi-ayat, teeno Qul, Ayatul Kursi) + dua mein Favourites — cache badalna zaroori hai
// (v21: naya login (pura naam + multi-user profiles) aur certificate naam fix)
// NOTE: sirf Cache Storage badalta hai, users ki history (localStorage) ko koi asar nahi
// v97: AAJ KI AYAT + SUNNAT — ab 60 ayat aur 60 sunnat (pehle 27/26). Naye 34 ayat (Juz Amma aur mashhoor
//      ayaat) aur naye 34 sunnat sirf sahih/hasan riwayatein: Bukhari, Muslim, ya Tirmidhi/Abu Dawud jinhein
//      Albani (rah) ne sahih/hasan kaha. Sunne/share ka wohi purana tareeqa hai.
// v98: Aaj ki Ayat ek hi list se — index.html ka "Aaj ki Ayat + Sunnat" card pehle apni alag 7 ayat ki list
//      dikhata tha (har hafte wahi ghoomti thi). Ab woh bhi app.js ka DAILY_AYAT (60 ayat) use karta hai,
//      is liye roz nayi ayat + nayi sunnat aati hai aur dashboard ke card se match karti hai.
// v99: Aaj ki Ayat + Sunnat ka 4-zubaan tarjuma (daily-lang.js) — app ka ek hi language button
//      (اردو / Roman / हिंदी / English) ab in dono ka tarjuma bhi badalta hai (pehle sirf heading badalti thi).
//      daily-lang.js core shell mein hai, is liye offline bhi chalta hai.
// v104: DUAEIN — naya dua-lang.js: har dua ka naam, matlab aur tafseel मराठी / العربية / Français /
//       Español mein (dua ke naam se juda hua, is liye tarteeb badalne se bhi sahi dua). Ab tak
//       namaz ki pehli 15 duaein. Arabi matn waisa hi rehta hai — sirf tarjuma badalta hai.
const CACHE_NAME = 'quran-ustad-auto-v104';
// Download ki hui ayat ki recordings (sounds.js) — ye cache kabhi delete nahi karna
// Audio (azan + nasheed) aur fonts ke alag caches — ye bhi version badalne par delete nahi hote
const AUDIO_CACHE = 'fq-audio-v1';
const FONT_CACHE = 'fq-fonts-v1';
const QURAN_CACHE = 'fq-quran-v1';   // quran.html ka text/tarjuma/tafseer (offline) — version badalne par bhi nahi mitata
const KEEP_CACHES = [CACHE_NAME, 'qs-mishary-v1', AUDIO_CACHE, FONT_CACHE, QURAN_CACHE];
const AUDIO_ASSETS = ['./azan-aksa.mp3', './azan-sweet.mp3', './azan-3.mp3', './nature-ambience.mp3'];

// Google Fonts ka CSS — install par hi cache ho jaye, warna pehli hi visit offline mein likhawat badal jaati hai
const FONT_URL = 'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Noto+Nastaliq+Urdu:wght@400;700&family=Figtree:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,800;1,600&family=Aref+Ruqaa:wght@400;700&display=swap';
const FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com', 'static-cdn.tarteel.ai'];

// Bunyaadi shell — install mein sirf yahi files, taake SW foran active ho jaye aur app (sabaq + roz ki ayat samet) offline khule
const CORE = [
    './',
    './index.html',
    './manifest.json',
    './theme.css',
    './app.js',
    './tools.js',
    './sounds.js',
    './icons.js',
    './course.js',
    './course-lang.js',
    './sunnat.js',
    './daily-lang.js',
    './lang-extra.js',
    './dua-lang.js'
];

// Baaki sab — pichhe se bharti hain (activate / page ka message / sync). Offline ke liye poora app
const ASSETS = [
    './index.html',
    './dua.html',
    './tajweed.html',
    './games.html',
    './games-lang.js',
    './asma.html',
    './arabic-grammar.html',
    './quran.html',
    './privacy.html',
    './terms.html',
    './kill.html',
    './manifest.json',
    './theme.css',
    './app.js',
    './tools.js',
    './sounds.js',
    './course.js',
    './course-lang.js',
    './sunnat.js',
    './daily-lang.js',
    './lang-extra.js',
    './dua-lang.js',
    './dua.js',
    './icon.png',
    './icon-192.png',
    './apple-touch-icon.png',
    './icon-maskable.png',
    './signature.png',
    './seerat.js',
    './arkan.html',
    './arkan-kalima.html',
    './arkan-namaz.html',
    './arkan-zakat.html',
    './arkan-roza.html',
    './arkan-hajj.html',
    './arkan.css',
    './arkan.js',
    './arkan-lang.js',
    './arkan-i18n.js',
    './grammar-course.js',
    './icons.js',
    // purane chhote Arkan pages (root par) — ab inke paths bhi theek hain
    './kalima.html',
    './namaz.html',
    './zakat.html',
    './roza.html',
    './hajj.html'
];

// ===== INSTALL: sirf shell + fonts (~1 MB) — bhaari files activate ke baad, pichhe se =====
self.addEventListener('install', (e) => {
    self.skipWaiting(); // Purane SW ko wait mat karo, foran replace karo
    e.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        // Ek file na mile to bhi baaki cache ho jayein (addAll sab fail kar deta hai)
        await Promise.all(CORE.map(url =>
            cache.add(new Request(url, { cache: 'reload' })).catch(err => console.warn('Cache skip:', url))
        ));
        // Google Fonts CSS (CORS khula hai) — offline mein bhi wohi fonts
        try {
            const fonts = await caches.open(FONT_CACHE);
            const hit = await fonts.match(FONT_URL);
            if (!hit) await fonts.add(new Request(FONT_URL, { mode: 'cors' }));
        } catch (err) {
            console.warn('Font skip:', String(err));
        }
    })());
});

// ===== ACTIVATE: purani files naye cache mein le aao, phir purana cache delete =====
self.addEventListener('activate', (e) => {
    e.waitUntil((async () => {
        const keys = await caches.keys();
        const cache = await caches.open(CACHE_NAME);

        // Purane app cache ki files copy karo — version badalne par 9MB dobara download na ho
        for (const k of keys) {
            if (k === CACHE_NAME || k.indexOf('quran-ustad-auto') !== 0) continue;
            try {
                const old = await caches.open(k);
                const reqs = await old.keys();
                for (const r of reqs) {
                    const have = await cache.match(r.url);
                    if (have) continue;
                    const res = await old.match(r);
                    if (res) await cache.put(r.url, res.clone());
                }
            } catch (err) { /* purana cache kharab ho to chhod do */ }
        }

        await Promise.all(keys.filter(k => !KEEP_CACHES.includes(k)).map(k => caches.delete(k)));
        await self.clients.claim();

        // Baaki files pichhe se bharo (app khuli rehni chahiye; na ho to agli visit par message se)
        fillRest().catch(() => {});
    })());
});

// ===== Baaki files (pages, course, duaein, azan) dheere dheere cache karo =====
// Sirf woh files jo cache mein nahi hain — do baar download nahi hota
let filling = null;
function fillRest() {
    if (filling) return filling;
    filling = (async () => {
        const cache = await caches.open(CACHE_NAME);
        const missing = [];
        for (const url of ASSETS) {
            let hit = null;
            try { hit = await cache.match(url); } catch (err) { hit = null; }
            if (!hit) missing.push(url);
        }
        // ek waqt mein 4 files (net par bojh na pade)
        let n = 0;
        async function worker() {
            while (n < missing.length) {
                const url = missing[n++];
                try { await cache.add(new Request(url, { cache: 'reload' })); }
                catch (err) { console.warn('Cache skip:', url); }
            }
        }
        await Promise.all([worker(), worker(), worker(), worker()]);

        // Azan + nasheed — sabse bhaari, sabse aakhir mein (ek baar save, phir dobara nahi)
        try {
            const audio = await caches.open(AUDIO_CACHE);
            for (const url of AUDIO_ASSETS) {
                try {
                    const hit = await audio.match(url);
                    if (!hit) await audio.add(new Request(url, { cache: 'reload' }));
                } catch (err) { console.warn('Audio skip:', url); }
            }
        } catch (err) { /* audio cache na bane to app phir bhi chale */ }
    })().catch(() => {}).then(() => { filling = null; });
    return filling;
}

// Page (app.js) khulne par kehta hai: baaki files bhi save karo
self.addEventListener('message', (e) => {
    const d = e.data || {};
    if (d && (d.type === 'fq-precache' || d === 'fq-precache')) e.waitUntil(fillRest());
});

// ===== FETCH: Smart Strategy =====
self.addEventListener('fetch', (e) => {
    const request = e.request;
    if (!request || request.method !== 'GET') return;

    let url;
    try { url = new URL(request.url); } catch (err) { return; }

    // 🔤 Google Fonts (CSS + font files) + Indo-Pak font CDN: pehle cache, phir net (offline bhi)
    if (FONT_HOSTS.indexOf(url.hostname) > -1) {
        e.respondWith(staleWhileRevalidate(e, request, FONT_CACHE));
        return;
    }

    // Baaki cross-origin (Quran.com API, everyayah.com ki recordings) — browser seedha net se
    if (url.origin !== location.origin) return;

    // 🎵 Audio: saved azan/nasheed cache se (Range support ke saath), warna net se
    if (/\.(mp3|ogg|m4a|wav)$/i.test(url.pathname)) {
        e.respondWith(serveAudio(request));
        return;
    }
    if (request.headers.has('range')) return;   // range wali baaki cheezein browser ke hawaale

    const isHTML = (request.headers.get('accept') || '').indexOf('text/html') > -1;
    const isCode = isHTML || /\.(js|css|json)$/i.test(url.pathname);

    // ⚡ HTML / JS / CSS / JSON = CACHE FIRST + background refresh (stale-while-revalidate)
    if (isCode) {
        e.respondWith(codeResponse(e, request, isHTML || request.mode === 'navigate'));
        return;
    }

    // 🖼️ Images / Fonts / Icons = CACHE FIRST, phir net
    e.respondWith(assetResponse(request));
});

// Cache mein rakhna — navigate mode wali request par cache.put nahi chalta, is liye URL se naya Request
function putSafe(cache, request, res) {
    let store = request;
    try {
        if (!request || request.mode === 'navigate') store = new Request(request.url, { credentials: 'same-origin' });
    } catch (err) {
        store = request;
    }
    try {
        return cache.put(store, res.clone()).then(() => res, () => res);
    } catch (err) {
        return Promise.resolve(res);
    }
}

// Pehle cache, peeche se taaza (Google Fonts, font files)
async function staleWhileRevalidate(event, request, cacheName) {
    const cache = await caches.open(cacheName);
    const hit = await cache.match(request);
    const net = fetch(request).then(res => {
        if (res && (res.status === 200 || res.type === 'opaque')) putSafe(cache, request, res);
        return res;
    }).catch(() => null);
    if (hit) {
        // Peeche taaza karo, jawab foran do (event ka waqt badha do warna worker band ho jaye)
        try { event.waitUntil(net.then(() => {}, () => {})); } catch (err) {}
        return hit;
    }
    const fresh = await net;
    return fresh || Response.error();
}

// Pages / scripts / styles: cache se foran, peeche taaza. Net na ho to app shell ya saaf message
async function codeResponse(event, request, isNavigation) {
    const cache = await caches.open(CACHE_NAME);
    let hit = await cache.match(request, { ignoreSearch: true });
    if (!hit) {
        try { hit = await caches.match(request, { ignoreSearch: true }); } catch (err) { hit = null; }
    }

    const refresh = fetch(request, { cache: 'no-cache' }).then(res => {
        if (res && res.status === 200 && res.type === 'basic') return putSafe(cache, request, res);
        return res;
    }).catch(() => null);

    if (hit) {
        // Peeche taaza karo (event ka waqt badha do warna worker band ho jaye)
        try { event.waitUntil(refresh.then(() => {}, () => {})); } catch (err) {}
        return hit;
    }

    const fresh = await refresh;
    if (fresh) return fresh;

    // Internet nahi mila
    if (isNavigation) {
        let path = '';
        try { path = new URL(request.url).pathname; } catch (err) { path = ''; }
        const isRoot = path === '' || path.slice(-1) === '/' || path.slice(-10) === 'index.html';
        if (isRoot) {
            const shell = (await cache.match('./index.html', { ignoreSearch: true })) ||
                          (await caches.match('./index.html', { ignoreSearch: true })) ||
                          (await caches.match('./', { ignoreSearch: true }));
            if (shell) return shell;
        }
        return offlinePage();
    }
    return Response.error();
}

// Tasveerein / icons / font files: cache se, warna net se aur cache mein rakh lo
async function assetResponse(request) {
    let hit = null;
    try { hit = await caches.match(request); } catch (err) { hit = null; }
    if (hit) return hit;
    try {
        const res = await fetch(request);
        if (res && res.status === 200 && res.type === 'basic') {
            const cache = await caches.open(CACHE_NAME);
            putSafe(cache, request, res);
        }
        return res;
    } catch (err) {
        return Response.error();
    }
}

// Offline par app shell bhi na mile to saaf wajah (browser ki "no internet" screen nahi)
function offlinePage() {
    const html = '<!DOCTYPE html><html lang="ur"><head><meta charset="utf-8">' +
        '<meta name="viewport" content="width=device-width,initial-scale=1">' +
        '<title>Fahm-ul-Quran</title><style>' +
        'body{font-family:system-ui,sans-serif;background:#0A2E24;color:#F0E9D0;margin:0;' +
        'display:flex;align-items:center;justify-content:center;min-height:100vh;padding:24px;text-align:center}' +
        'h1{font-size:20px;color:#D9B65A;margin:0 0 10px}p{font-size:15px;line-height:1.7;margin:0 0 18px;max-width:340px}' +
        'button{background:#D9B65A;color:#2A2008;border:0;border-radius:14px;padding:14px 22px;font-size:16px;font-weight:700}' +
        '</style></head><body><div><h1>Internet ek baar chahiye</h1>' +
        '<p>App ne pehli baar poora hissa save nahi kar paya. Internet chalu karke app ek baar kholein — uske baad yeh hissa offline bhi chalega.</p>' +
        '<button onclick="location.reload()">Dobara koshish karein</button></div></body></html>';
    return new Response(html, { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8' } });
}

// ===== Audio ko cache se do (Range request bhi chalti hai, warna seek/play nahi chalta) =====
async function serveAudio(request) {
    let hit = null;
    try {
        const cache = await caches.open(AUDIO_CACHE);
        hit = await cache.match(request.url, { ignoreSearch: true });
    } catch (err) { hit = null; }

    // Azan/nasheed ke ilawa bhi koi saved recording ho to wahi chale
    if (!hit) {
        try { hit = await caches.match(request.url, { ignoreSearch: true }); } catch (err) { hit = null; }
    }

    if (!hit) {
        try { return await fetch(request); }
        catch (err) { return new Response('', { status: 503, statusText: 'Offline' }); }
    }
    const range = request.headers.get('range');
    if (!range) return hit;
    const m = /bytes=(\d*)-(\d*)/.exec(range);
    if (!m) return hit;
    const buf = await hit.arrayBuffer();
    const size = buf.byteLength;
    let start = m[1] === '' ? Math.max(0, size - parseInt(m[2], 10)) : parseInt(m[1], 10);
    let end = (m[1] === '' || m[2] === '') ? size - 1 : Math.min(parseInt(m[2], 10), size - 1);
    if (isNaN(start) || isNaN(end) || start > end || start >= size) {
        return new Response('', { status: 416, headers: { 'Content-Range': 'bytes */' + size } });
    }
    return new Response(buf.slice(start, end + 1), {
        status: 206,
        statusText: 'Partial Content',
        headers: {
            'Content-Type': hit.headers.get('Content-Type') || 'mpeg',
            'Content-Length': String(end - start + 1),
            'Content-Range': 'bytes ' + start + '-' + end + '/' + size,
            'Accept-Ranges': 'bytes'
        }
    });
}


// ===== PWABuilder extras: Background Sync, Periodic Sync, Push Notifications =====
// Core files ko chupke se taaza karna (net ho to cache update, na ho to purana chalta rahe)
function refreshCore() {
    return caches.open(CACHE_NAME).then(cache =>
        Promise.all(CORE.map(url =>
            fetch(url, { cache: 'no-cache' }).then(res => { if (res && res.ok) return cache.put(url, res); }).catch(() => {})
        ))
    ).then(() => fillRest());
}

// 🔁 Background Sync: net nahi tha, wapas aate hi core files taaza
self.addEventListener('sync', (e) => {
    if (e.tag === 'fq-sync' || e.tag === 'fq-refresh') e.waitUntil(refreshCore());
});

// ⏰ Periodic Background Sync: app band ho tab bhi waqt-waqt par taaza (browser ijazat de to)
self.addEventListener('periodicsync', (e) => {
    if (e.tag === 'fq-periodic' || e.tag === 'fq-refresh') e.waitUntil(refreshCore());
});

// 🔔 Push Notifications: server se push aaye to notification dikhao
self.addEventListener('push', (e) => {
    let d = {};
    try { d = e.data ? e.data.json() : {}; } catch (err) { d = { body: e.data ? e.data.text() : '' }; }
    const title = d.title || 'Fahm-ul-Quran';
    e.waitUntil(self.registration.showNotification(title, {
        body: d.body || 'Aaj ka sabaq aur ayat aapka intezar kar rahi hai 📖',
        icon: './icon-192.png',
        badge: './icon-192.png',
        tag: d.tag || 'fq-push',
        data: { url: d.url || './' }
    }));
});

self.addEventListener('notificationclick', (e) => {
    e.notification.close();
    const target = (e.notification.data && e.notification.data.url) || './';
    e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
        for (const c of list) { if ('focus' in c) return c.focus(); }
        return self.clients.openWindow(target);
    }));
});
