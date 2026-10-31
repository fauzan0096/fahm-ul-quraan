// ==========================================
// SERVICE WORKER — Auto Update Version
// Network-First for HTML/CSS/JS
// Cache-First for Images
// Audio (azan + nasheed) = alag audio cache se (Range support), baaki audio browser seedha network se
// ==========================================

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
// v43: app ka naam badal kar Fahm-ul-Quran (ÙÙÙ Ø§ÙÙØ±Ø¢Ù)
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
const CACHE_NAME = 'quran-ustad-auto-v82';
// Download ki hui ayat ki recordings (sounds.js) — ye cache kabhi delete nahi karna
// Audio (azan + nasheed) aur fonts ke alag caches — ye bhi version badalne par delete nahi hote
const AUDIO_CACHE = 'fq-audio-v1';
const FONT_CACHE = 'fq-fonts-v1';
const QURAN_CACHE = 'fq-quran-v1';   // quran.html ka text/tarjuma/tafseer (offline) — version badalne par bhi nahi mitata
const KEEP_CACHES = [CACHE_NAME, 'qs-mishary-v1', AUDIO_CACHE, FONT_CACHE, QURAN_CACHE];
const AUDIO_ASSETS = ['./azan-aksa.mp3', './azan-sweet.mp3', './azan-3.mp3', './nature-ambience.mp3'];

const ASSETS = [
    './',
    './index.html',
    './dua.html',
    './tajweed.html',
    './games.html',
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
    './sunnat.js',
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
    './icons.js'
];

// ===== INSTALL: Naya SW foran ready ho =====
self.addEventListener('install', (e) => {
    self.skipWaiting(); // Purane SW ko wait mat karo, foran replace karo
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache =>
            // Ek file na mile to bhi baaki cache ho jayein (addAll sab fail kar deta hai)
            Promise.all(ASSETS.map(url =>
                cache.add(new Request(url, { cache: 'reload' })).catch(err => console.warn('Cache skip:', url))
            ))
        ).then(() =>
            // Azan + nasheed offline ke liye (ek baar save, version badalne par dobara nahi)
            caches.open(AUDIO_CACHE).then(cache =>
                Promise.all(AUDIO_ASSETS.map(url =>
                    (url.indexOf('nature-ambience') > -1 ? cache.add(new Request(url, { cache: 'reload' })) : cache.match(url).then(hit => hit || cache.add(url))).catch(err => console.warn('Audio skip:', url))
                ))
            )
        )
    );
});

// ===== ACTIVATE: Purana cache delete karo (purana audio cache bhi) =====
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys.filter(k => !KEEP_CACHES.includes(k)).map(k => caches.delete(k))
            )
        ).then(() => self.clients.claim())
    );
});

// ===== FETCH: Smart Strategy =====
self.addEventListener('fetch', (e) => {
    const request = e.request;
    const url = new URL(request.url);

    // 🔤 Google Fonts (CSS + font files): pehli baar net se, phir offline bhi (stale-while-revalidate)
    if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com' || url.hostname === 'static-cdn.tarteel.ai') {
        e.respondWith(
            caches.open(FONT_CACHE).then(cache =>
                cache.match(request).then(hit => {
                    const net = fetch(request).then(res => {
                        if (res && (res.status === 200 || res.type === 'opaque')) cache.put(request, res.clone());
                        return res;
                    }).catch(() => hit);
                    return hit || net;
                })
            )
        );
        return;
    }

    // Baaki sirf same-origin handle karo
    if (url.origin !== location.origin) return;

    // 🎵 Audio: saved azan/nasheed cache se (Range support ke saath), warna browser seedha network se
    if (/\.(mp3|ogg|m4a|wav)$/i.test(url.pathname)) {
        e.respondWith(serveAudio(request));
        return;
    }
    if (request.headers.has('range')) return;

    const isHTML = request.headers.get('accept')?.includes('text/html');
    const isJS = url.pathname.endsWith('.js');
    const isCSS = url.pathname.endsWith('.css');
    const isJSON = url.pathname.endsWith('.json');

    // ⚡ HTML / JS / CSS / JSON = CACHE FIRST + background refresh (stale-while-revalidate)
    // Click par foran cache se khulta hai; peeche network se taaza copy aa kar cache update hoti hai.
    // Naya upload: sw.js ka CACHE_NAME badlein — install par sab file taaza (reload) cache hoti hai.
    if (isHTML || isJS || isCSS || isJSON) {
        e.respondWith(
            caches.open(CACHE_NAME).then(cache =>
                cache.match(request, { ignoreSearch: true }).then(hit => {
                    const net = fetch(request, { cache: 'no-cache' }).then(response => {
                        if (response && response.status === 200) cache.put(request, response.clone());
                        return response;
                    });
                    if (hit) {
                        e.waitUntil(net.catch(() => {}));   // peeche taaza karo, jawab foran do
                        return hit;
                    }
                    return net.catch(() =>
                        (request.mode === 'navigate' ? cache.match('./index.html') : undefined) || Response.error()
                    );
                })
            )
        );
        return;
    }

    // 🖼️ Images / Fonts / Icons = CACHE FIRST
    // Matlab: Pehle cache se do (fast), agar nahi mila toh internet se lao
    e.respondWith(
        caches.match(request).then(cached => {
            if (cached) return cached;
            return fetch(request).then(response => {
                if (response && response.status === 200) {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
                }
                return response;
            }).catch(() => cached);
        })
    );
});


// ===== Audio ko cache se do (Range request bhi chalti hai, warna seek/play nahi chalta) =====
async function serveAudio(request) {
    const cache = await caches.open(AUDIO_CACHE);
    const hit = await cache.match(request.url, { ignoreSearch: true });
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
        Promise.all(ASSETS.map(url =>
            fetch(url, { cache: 'no-cache' }).then(res => { if (res && res.ok) return cache.put(url, res); }).catch(() => {})
        ))
    );
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
