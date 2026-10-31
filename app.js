/* ==========================================================
   app.js — Shared app code: themes, UI/install/progress, language, welcome slides, backup
   (Is file mein: themes.js, app.js, lang.js, onboarding.js, backup.js)
   ========================================================== */

/* ───────────── themes.js ───────────── */
// ==========================================
// themes.js — Saare themes ek jagah + har page par wahi theme
// - Shop (index.html) se kharidi hui theme ab dua / tajweed / asma / games sab par lagti hai
// - Naya theme jodna ho: neeche THEMES mein ek entry (item = shop ka id, cost = XP)
// - Storage: 'theme' (jo lagi hai). Purana 'darkMode' sirf tab padha jata hai jab 'theme' na ho.
// - body par 2 attribute: data-theme = 'light'|'dark' (tone, purane dark rules ke liye)
//                         data-skin  = theme ka naam (rang yahin se aate hain)
// ==========================================
(function () {
    'use strict';

    function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
    function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

    // ---------- Decoration (SVG patterns) ----------
    function svg(s) { return 'url("data:image/svg+xml,' + encodeURIComponent(s) + '")'; }
    var STARS = svg('<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160"><g fill="#fff">' +
        '<circle cx="12" cy="20" r="1" opacity=".7"/><circle cx="70" cy="48" r="1.4" opacity=".55"/><circle cx="130" cy="14" r=".9" opacity=".8"/>' +
        '<circle cx="40" cy="96" r=".8" opacity=".5"/><circle cx="104" cy="88" r="1.2" opacity=".65"/><circle cx="148" cy="132" r="1" opacity=".6"/>' +
        '<circle cx="22" cy="148" r="1.3" opacity=".5"/><circle cx="84" cy="136" r=".8" opacity=".7"/></g>' +
        '<g fill="#F5D77A"><circle cx="58" cy="12" r="1.6" opacity=".9"/><circle cx="118" cy="62" r="1.8" opacity=".85"/><circle cx="30" cy="122" r="1.5" opacity=".8"/></g></svg>');
    var LEAVES = svg('<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90"><g fill="none" stroke="#16A34A" stroke-opacity=".16" stroke-width="1.2">' +
        '<path d="M14 62c0-16 10-26 26-28-1 16-10 27-26 28z"/><path d="M14 62l14-16"/>' +
        '<path d="M58 30c0-10 6-16 16-17-1 10-6 16-16 17z"/><path d="M58 30l9-10"/></g>' +
        '<circle cx="70" cy="70" r="2" fill="#E8B84A" fill-opacity=".35"/><circle cx="20" cy="14" r="1.6" fill="#E8B84A" fill-opacity=".3"/></svg>');
    var DIAMONDS = svg('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><g fill="none" stroke="#D4AF37" stroke-opacity=".16" stroke-width="1">' +
        '<path d="M32 4l28 28-28 28L4 32z"/><path d="M32 18l14 14-14 14-14-14z"/></g></svg>');

    // ---------- Themes ----------
    // tone: 'light' | 'dark'   hdr: [header ka upar, neeche]   btn: [a, b, text] (sub-pages ke buttons)
    var THEMES = [
        { id: 'light', free: true, tone: 'light', icon: '☀️', name: 'Default (Roshan)' },
        { id: 'dark', free: true, tone: 'dark', icon: '🌙', name: 'Dark' },

        { id: 'midnight', item: 'theme_midnight', tone: 'dark', icon: '🌙', name: 'Midnight Theme', cost: 300,
          c: { p: '#1E3A8A', pd: '#0F172A', sec: '#F59E0B', gb: '#FBBF24', ink: '#F8FAFC', bg: '#0F172A', card: '#1E293B', soft: '#334155', text: '#F8FAFC', tl: '#94A3B8', border: '#475569', ar: '#FDE68A' },
          hdr: ['#1E3A8A', '#172554'], btn: ['#F59E0B', '#D97706', '#1F1300'] },
        { id: 'royal', item: 'theme_royal', tone: 'dark', icon: '💎', name: 'Royal Theme', cost: 300,
          c: { p: '#4C1D95', pd: '#2E1065', sec: '#FBBF24', gb: '#FCD34D', ink: '#F3F4F6', bg: '#2E1065', card: '#4C1D95', soft: '#5B21B6', text: '#F3F4F6', tl: '#D8B4FE', border: '#7E22CE', ar: '#FDE68A' },
          hdr: ['#6D28D9', '#4C1D95'], btn: ['#FBBF24', '#D99A0B', '#2A1A00'] },
        { id: 'lightblue', item: 'theme_lightblue', tone: 'light', icon: '💧', name: 'Sky Blue Theme', cost: 250,
          c: { p: '#0284C7', pd: '#0369A1', sec: '#D98A0B', gb: '#FBBF24', ink: '#0F172A', bg: '#F0F9FF', card: '#FFFFFF', soft: '#E0F2FE', text: '#0F172A', tl: '#475569', border: '#BAE6FD', ar: '#0C4A6E' },
          hdr: ['#0EA5E9', '#0284C7'], btn: ['#0EA5E9', '#0284C7', '#FFFFFF'] },

        // ----- ✨ Special themes -----
        { id: 'qadr', item: 'theme_qadr', tone: 'dark', rarity: 'epic', icon: '🌌', name: 'Shab-e-Qadr ✨ (sitaron wali raat)', cost: 500,
          c: { p: '#4338CA', pd: '#0A0F2C', sec: '#F5D77A', gb: '#FDE68A', ink: '#EEF0FF', bg: '#0A0F2C', card: '#141B4A', soft: '#1D2660', text: '#EEF0FF', tl: '#A5ADE6', border: '#323E8F', ar: '#FFE9A8' },
          hdr: ['#2B2F8F', '#141B4A'], btn: ['#F5D77A', '#D4AF37', '#1A1440'],
          deco: 'radial-gradient(ellipse at 50% -8%, rgba(99,102,241,.38), transparent 62%), radial-gradient(ellipse at 85% 105%, rgba(245,215,122,.12), transparent 55%), ' + STARS },
        { id: 'jannah', item: 'theme_jannah', tone: 'light', rarity: 'epic', icon: '🌿', name: 'Jannah ka Bagh ✨ (hara-bhara)', cost: 450,
          c: { p: '#15803D', pd: '#14532D', sec: '#C28A1B', gb: '#E8B84A', ink: '#0F3D22', bg: '#EAF8EF', card: '#FFFFFF', soft: '#DDF3E5', text: '#14291C', tl: '#4B6B58', border: '#B6E3C6', ar: '#0B3B20' },
          hdr: ['#22A455', '#15803D'], btn: ['#16A34A', '#15803D', '#FFFFFF'],
          deco: 'radial-gradient(ellipse at 10% 0%, rgba(74,222,128,.22), transparent 55%), radial-gradient(ellipse at 100% 100%, rgba(232,184,74,.18), transparent 55%), ' + LEAVES },
        { id: 'haram', item: 'theme_haram', tone: 'dark', rarity: 'legend', icon: '🕋', name: 'Kaala-Sunehra ✨ (Shahi)', cost: 800,
          c: { p: '#8A6A0F', pd: '#000000', sec: '#E6C25A', gb: '#F3D77E', ink: '#F7E7B0', bg: '#0A0A0A', card: '#161412', soft: '#211C14', text: '#F4EBD0', tl: '#B7A77A', border: '#4A3C1A', ar: '#F6DE8C' },
          hdr: ['#000000', '#2E2408'], btn: ['#E6C25A', '#B8923A', '#1A1304'],
          deco: 'radial-gradient(ellipse at 50% -10%, rgba(212,175,55,.22), transparent 60%), ' + DIAMONDS }
    ];

    function byId(id) { for (var i = 0; i < THEMES.length; i++) if (THEMES[i].id === id) return THEMES[i]; return null; }

    // ---------- CSS (skins ke rang) ----------
    function buildCSS() {
        var css = '';
        THEMES.forEach(function (t) {
            if (!t.c) return;
            var c = t.c, dark = t.tone === 'dark';
            var sel = 'body[data-skin="' + t.id + '"]';
            css += sel + '{' +
                '--primary:' + c.p + ';--primary-deep:' + c.pd + ';--secondary:' + c.sec + ';--gold:' + c.sec + ';--gold-bright:' + c.gb + ';' +
                '--ink:' + c.ink + ';--bg:' + c.bg + ';--card-bg:' + c.card + ';--card:' + c.card + ';--soft-bg:' + c.soft + ';' +
                '--text:' + c.text + ';--text-light:' + c.tl + ';--light:' + c.tl + ';--border:' + c.border + ';--arabic:' + c.ar + ';' +
                '--chip-bg:' + (dark ? 'rgba(255,255,255,.08)' : 'rgba(0,0,0,.05)') + ';' +
                '--shadow:' + (dark ? '0 1px 2px rgba(0,0,0,.45),0 8px 24px rgba(0,0,0,.4)' : '0 1px 2px rgba(10,46,36,.08),0 8px 24px rgba(10,46,36,.10)') + ';' +
                '--hdr-a:' + t.hdr[0] + ';--hdr-b:' + t.hdr[1] + ';--btn-a:' + t.btn[0] + ';--btn-b:' + t.btn[1] + ';--btn-text:' + t.btn[2] + ';' +
                '--kbc-bg:' + c.pd + ';--kbc-gold:' + c.gb + ';' +
                (t.deco ? 'background-image:' + t.deco + ';background-attachment:fixed;' : '') +
                '}\n';
        });
        return css;
    }
    function injectCSS() {
        if (document.getElementById('fqThemeCss')) return;
        var s = document.createElement('style');
        s.id = 'fqThemeCss';
        s.textContent = buildCSS();
        (document.head || document.documentElement).appendChild(s);
    }

    // ---------- Kaun si theme is profile ki hai ----------
    function ownedIds() {
        if (lsGet('userRole') === 'admin') return null;                 // admin ke liye sab
        var p = lsGet('activeProfile');
        if (!p) return [];
        try { var v = JSON.parse(lsGet('p_' + p + '_ownedItems')); return Array.isArray(v) ? v : []; } catch (e) { return []; }
    }
    function allowed(t) {
        if (!t) return false;
        if (t.free) return true;
        var o = ownedIds();
        return o === null || o.indexOf(t.item) >= 0;
    }
    function available() { return THEMES.filter(allowed); }

    function current() {
        var id = lsGet('theme');
        if (!id) id = lsGet('darkMode') === 'true' ? 'dark' : 'light';   // purana format
        var t = byId(id);
        return allowed(t) ? t.id : 'light';
    }

    // ---------- Lagana ----------
    function metaColor(t) {
        var m = document.querySelector('meta[name="theme-color"]');
        if (m) m.setAttribute('content', t && t.hdr ? t.hdr[1] : '#0F4C3A');
    }
    function apply(id) {
        var t = byId(id) || byId('light');
        if (!allowed(t)) t = byId('light');
        var b = document.body;
        if (!b) return t.id;
        b.setAttribute('data-theme', t.tone);
        if (t.c) b.setAttribute('data-skin', t.id); else b.removeAttribute('data-skin');
        metaColor(t);
        paintButtons(t.id);
        return t.id;
    }
    function set(id) {
        var t = byId(id);
        if (!allowed(t)) t = byId('light');
        lsSet('theme', t.id);
        lsSet('darkMode', t.tone === 'dark' ? 'true' : 'false');          // purane pages ke liye
        return apply(t.id);
    }

    // ---------- Toolbar button (🌙 / ☀️ / skin): agli available theme par ----------
    function nextOf(id) {
        var list = available();
        for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[(i + 1) % list.length];
        return list[0];
    }
    function paintButtons(id) {
        var n = nextOf(id);
        var b = document.getElementById('themeBtn');
        if (b && b.getAttribute('data-fqcycle') === '1') { b.textContent = n.icon; b.title = 'Theme: ' + n.name; }
    }
    function cycle() { return set(nextOf(current()).id); }
    // Sub-pages: themeBtn dabane par ek ke baad ek theme (sirf kharidi hui)
    function bindButton() {
        var b = document.getElementById('themeBtn');
        if (!b || b.getAttribute('data-fqcycle')) return;
        b.setAttribute('data-fqcycle', '1');
        b.onclick = function (e) { if (e && e.stopImmediatePropagation) e.stopImmediatePropagation(); cycle(); };
        paintButtons(current());
    }

    window.FQTheme = {
        THEMES: THEMES, get: byId, current: current, apply: apply, set: set, cycle: cycle,
        available: available, owned: ownedIds, allowed: function (id) { return allowed(byId(id)); }, bindButton: bindButton
    };

    injectCSS();
    function init() { apply(current()); }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
    window.addEventListener('pageshow', function () { apply(current()); });          // wapas (back) aane par
    window.addEventListener('storage', function (e) { if (e.key === 'theme' || e.key === 'activeProfile') apply(current()); });
})();
;

/* ───────────── app.js ───────────── */
// ==========================================================
// app.js — Fahm-ul-Quran ka shared UI ek file mein
//  1) UI       : splash, text size (A-/A+), Aaj ki Ayat
//  2) INSTALL  : install popup + service worker
//  3) PROGRESS : levels, badges, share card (sirf index.html par chalta hai)
// Har page mein head mein ek line: <script src="app.js"></script>
// Jis page par splash/text-size nahi chahiye (jaise asma.html) wahan us se pehle:
//   <script>window.QS_LITE=1</script>
// ==========================================================

// ───────────── 1) UI ─────────────
if (!window.QS_LITE) {
/* Shared UI helpers — sab pages par:
   1) Splash screen (logo + bismillah), ek session mein ek hi baar
   2) Arabic/Urdu text ka size (A- / A+), sab pages par ek hi setting
   3) Figtree font (index jaisa) */
(function () {
    var root = document.documentElement;
    function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
    function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
    function ssGet(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } }
    function ssSet(k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} }

    // ---------- Text scale (--scale) ----------
    var scale = parseFloat(lsGet('textScale') || '1');
    if (!(scale >= 0.8 && scale <= 1.6)) scale = 1;
    root.style.setProperty('--scale', scale);

    window.QSUI = {
        changeScale: function (d) {
            scale = Math.min(1.6, Math.max(0.8, Math.round((scale + d) * 10) / 10));
            lsSet('textScale', scale);
            root.style.setProperty('--scale', scale);
            var s = document.getElementById('qsScaleVal');
            if (s) s.textContent = Math.round(scale * 100) + '%';
        }
    };

    // ---------- CSS ----------
    var st = document.createElement('style');
    st.textContent =
        /* Pages jahan scale pehle se nahi lagta (index, games) */
        '.grid-container .arabic{font-size:calc(42px*var(--scale,1))}' +
        '.grid-container .urdu{font-size:calc(21px*var(--scale,1))}' +
        '.exam-q .exam-ar{font-size:calc(34px*var(--scale,1))}' +
        '.today-card .t-ar{font-size:calc(40px*var(--scale,1))}' +
        '.today-card .t-ur{font-size:calc(20px*var(--scale,1))}' +
        '.list-item .li-ar{font-size:calc(28px*var(--scale,1))}' +
        '.mem-card span.ar{font-size:calc(18px*var(--scale,1))}' +
        /* Aaj ki ayat */
        '.daily-card{position:relative;margin:16px 0 0;padding:18px 16px 14px;border-radius:18px;background:var(--card-bg,#fffdf6);border:1.5px solid var(--secondary,#B8923A);box-shadow:var(--shadow);text-align:center;animation:fadeInUp .4s ease-out both}' +
        '.daily-card .d-label{font-size:12px;font-weight:700;letter-spacing:.5px;color:var(--secondary,#B8923A)}' +
        '.daily-card .d-ar{font-family:Amiri,serif;font-size:calc(30px*var(--scale,1));line-height:2;color:var(--ink,#0A2E24);direction:rtl;margin-top:4px}' +
        '.daily-card .d-ur{font-family:"Noto Nastaliq Urdu",serif;font-size:calc(18px*var(--scale,1));line-height:2.2;color:var(--text,#1F2A25);direction:rtl;margin-top:4px}' +
        '.daily-card .d-ref{font-size:13px;font-weight:600;color:var(--text-light,#55645C);margin-top:6px}' +
        '.daily-card .d-acts{display:flex;gap:8px;margin-top:12px}' +
        '.daily-card .d-btn{flex:1;min-height:44px;border-radius:12px;font-weight:700;font-size:14px;cursor:pointer;border:none;background:linear-gradient(180deg,#17614B,var(--primary,#0F4C3A));color:#fff}' +
        '.daily-card .d-ghost{background:transparent;color:var(--primary,#0F4C3A);border:1.5px solid var(--primary,#0F4C3A)}' +
        '[data-theme="dark"] .daily-card .d-ghost,[data-theme="midnight"] .daily-card .d-ghost,[data-theme="royal"] .daily-card .d-ghost{color:var(--gold-bright,#D9B65A);border-color:var(--gold-bright,#D9B65A)}' +
        /* Dropdown mein size row (index) */
        '.qs-size-row{display:flex;align-items:center;gap:8px;padding-bottom:12px;margin-bottom:12px;border-bottom:1px solid var(--border);font-size:13px}' +
        '.qs-size-row b{flex:1;font-weight:600}' +
        '.qs-size-row button{width:44px!important;min-height:40px!important;padding:0!important;background:var(--soft-bg)!important;color:var(--text)!important;border:1.5px solid var(--border)!important;border-radius:10px!important;font-weight:700;cursor:pointer}' +
        '.qs-size-row span{min-width:42px;text-align:center;color:var(--text-light);font-size:12px}' +
        /* Splash */
        '#qsSplash{position:fixed;inset:0;z-index:2147483600;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;' +
        'background:radial-gradient(120% 90% at 50% 0%,#17614B 0%,#0A2E24 70%);color:#fff;text-align:center;transition:opacity .45s;font-family:Amiri,serif}' +
        '#qsSplash.out{opacity:0;pointer-events:none}' +
        '#qsSplash img{width:112px;height:112px;border-radius:50%;border:3px solid #D9B65A;box-shadow:0 12px 34px rgba(0,0,0,.45);object-fit:cover;animation:qsPop .7s cubic-bezier(.2,.9,.3,1.2) both}' +
        '#qsSplash .bis{font-size:30px;line-height:1.8;color:#D9B65A;margin-top:14px;animation:qsUp .7s .25s both}' +
        '#qsSplash .nm{font-size:40px;font-weight:700;line-height:1.1;animation:qsUp .7s .4s both}' +
        '#qsSplash .sub{font-family:Figtree,system-ui,sans-serif;font-size:13px;letter-spacing:.5px;opacity:.8;animation:qsUp .7s .55s both}' +
        '@keyframes qsPop{from{transform:scale(.4);opacity:0}to{transform:scale(1);opacity:1}}' +
        '@keyframes qsUp{from{transform:translateY(14px);opacity:0}to{transform:none;opacity:1}}' +
        '@media (prefers-reduced-motion:reduce){#qsSplash *{animation:none!important}#qsSplash{transition:none}}';
    (document.head || root).appendChild(st);

    // ---------- Figtree font (jo pages mein nahi hai) ----------
    var fl = document.createElement('link');
    fl.rel = 'stylesheet';
    fl.href = 'https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&display=swap';
    (document.head || root).appendChild(fl);

    // ---------- Splash ----------
    window.qsSplashActive = false;
    if (ssGet('qsSplashShown') !== '1') {
        ssSet('qsSplashShown', '1');
        window.qsSplashActive = true;
        var sp = document.createElement('div');
        sp.id = 'qsSplash';
        sp.innerHTML =
            '<img src="icon-192.png" alt="">' +
            '<div class="bis">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>' +
            '<div class="nm">Fahm-ul-Quran</div>' +
            '<div class="sub">Quran aur Duaa seekhein</div>';
        root.appendChild(sp); // body ka intezaar nahi — foran dikhe

        var gone = false;
        var done = function () {
            if (gone) return; gone = true;
            sp.classList.add('out');
            window.qsSplashActive = false;
            setTimeout(function () { if (sp.parentNode) sp.parentNode.removeChild(sp); }, 500);
            try { window.dispatchEvent(new Event('qs-splash-done')); } catch (e) {}
        };
        var minTime = new Promise(function (r) { setTimeout(r, 1500); });
        var loaded = new Promise(function (r) {
            if (document.readyState === 'complete') r(); else window.addEventListener('load', r);
        });
        Promise.all([minTime, loaded]).then(done);
        setTimeout(done, 3500);         // load atka to bhi 3.5 sec mein hat jaye
        sp.addEventListener('click', done); // tap karke skip
    }

    // ---------- Index: dropdown mein "Arabic size" ----------
    function addSizeRow() {
        var drop = document.getElementById('userDrop');
        if (!drop || document.getElementById('qsScaleVal')) return;
        var row = document.createElement('div');
        row.className = 'qs-size-row';
        row.innerHTML = '<b>Arabic size</b><button type="button" aria-label="Chhota">A-</button><span id="qsScaleVal">' + Math.round(scale * 100) + '%</span><button type="button" aria-label="Bada">A+</button>';
        var btns = row.querySelectorAll('button');
        btns[0].onclick = function (e) { e.stopPropagation(); QSUI.changeScale(-0.1); };
        btns[1].onclick = function (e) { e.stopPropagation(); QSUI.changeScale(0.1); };
        drop.insertBefore(row, drop.querySelector('button'));
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addSizeRow); else addSizeRow();

    // ==========================================
    // 📖 AAJ KI AYAT (index par #dailyCard mein)
    // Ayat ka matn Shamela ki Quran fehrist se mila kar liya gaya hai.
    // "(آیت کا حصہ)" wale cards poori ayat ka sirf ek hissa hain.
    // ==========================================
    var DAILY_AYAT = [["فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ", "تم مجھے یاد کرو، میں تمہیں یاد رکھوں گا، اور میرا شکر ادا کرو اور ناشکری نہ کرو۔", "Al-Baqarah 2:152"], ["يَاأَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ", "اے ایمان والو! صبر اور نماز سے مدد لو۔ بے شک اللہ صبر کرنے والوں کے ساتھ ہے۔", "Al-Baqarah 2:153"], ["الَّذِينَ إِذَا أَصَابَتْهُمْ مُصِيبَةٌ قَالُوا إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ", "جنہیں جب کوئی مصیبت پہنچتی ہے تو کہتے ہیں: ہم اللہ ہی کے ہیں اور ہمیں اسی کی طرف لوٹ کر جانا ہے۔", "Al-Baqarah 2:156"], ["وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ فَلْيَسْتَجِيبُوا لِي وَلْيُؤْمِنُوا بِي لَعَلَّهُمْ يَرْشُدُونَ", "اور جب میرے بندے آپ سے میرے بارے میں پوچھیں تو (کہہ دیں) میں قریب ہوں؛ پکارنے والے کی پکار کا جواب دیتا ہوں جب وہ مجھے پکارے۔ پس وہ میرا حکم مانیں اور مجھ پر ایمان رکھیں تاکہ راہِ راست پائیں۔", "Al-Baqarah 2:186"], ["وَمِنْهُمْ مَنْ يَقُولُ رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ", "اور ان میں سے کوئی کہتا ہے: اے ہمارے رب! ہمیں دنیا میں بھلائی دے اور آخرت میں بھی بھلائی دے اور ہمیں آگ کے عذاب سے بچا۔", "Al-Baqarah 2:201"], ["رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً إِنَّكَ أَنْتَ الْوَهَّابُ", "اے ہمارے رب! ہدایت دینے کے بعد ہمارے دلوں کو ٹیڑھا نہ کر اور ہمیں اپنے پاس سے رحمت عطا فرما؛ بے شک تو ہی بہت عطا کرنے والا ہے۔", "Aal-e-Imran 3:8"], ["وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنْتُمُ الْأَعْلَوْنَ إِنْ كُنْتُمْ مُؤْمِنِينَ", "اور نہ سستی کرو اور نہ غم کرو، اور تم ہی غالب رہو گے اگر تم مومن ہو۔", "Aal-e-Imran 3:139"], ["قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ", "کہہ دیجیے: بے شک میری نماز، میری قربانی، میری زندگی اور میری موت سب اللہ رب العالمین کے لیے ہے۔", "Al-An'am 6:162"], ["قَالَا رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ", "دونوں نے کہا: اے ہمارے رب! ہم نے اپنی جانوں پر ظلم کیا، اور اگر تو نے ہمیں نہ بخشا اور ہم پر رحم نہ کیا تو ہم ضرور خسارہ پانے والوں میں ہوں گے۔", "Al-A'raf 7:23"], ["وَأَطِيعُوا اللَّهَ وَرَسُولَهُ وَلَا تَنَازَعُوا فَتَفْشَلُوا وَتَذْهَبَ رِيحُكُمْ وَاصْبِرُوا إِنَّ اللَّهَ مَعَ الصَّابِرِينَ", "اور اللہ اور اس کے رسول ﷺ کی اطاعت کرو، اور آپس میں جھگڑا نہ کرو ورنہ ہمت ہار بیٹھو گے اور تمہاری ہوا اکھڑ جائے گی؛ اور صبر کرو، بے شک اللہ صبر کرنے والوں کے ساتھ ہے۔", "Al-Anfal 8:46"], ["قُلْ لَنْ يُصِيبَنَا إِلَّا مَا كَتَبَ اللَّهُ لَنَا هُوَ مَوْلَانَا وَعَلَى اللَّهِ فَلْيَتَوَكَّلِ الْمُؤْمِنُونَ", "کہہ دیجیے: ہمیں ہرگز کوئی چیز نہیں پہنچے گی مگر وہی جو اللہ نے ہمارے لیے لکھ دی ہے؛ وہی ہمارا کارساز ہے، اور مومنوں کو اللہ ہی پر بھروسا کرنا چاہیے۔", "At-Tawbah 9:51"], ["وَاصْبِرْ فَإِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ", "اور صبر کرو، بے شک اللہ نیکی کرنے والوں کا اجر ضائع نہیں کرتا۔", "Hud 11:115"], ["الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُمْ بِذِكْرِ اللَّهِ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ", "جو لوگ ایمان لائے اور ان کے دل اللہ کے ذکر سے اطمینان پاتے ہیں؛ سن لو! اللہ کے ذکر ہی سے دلوں کو اطمینان ملتا ہے۔", "Ar-Ra'd 13:28"], ["وَإِذْ تَأَذَّنَ رَبُّكُمْ لَئِنْ شَكَرْتُمْ لَأَزِيدَنَّكُمْ وَلَئِنْ كَفَرْتُمْ إِنَّ عَذَابِي لَشَدِيدٌ", "اور جب تمہارے رب نے اعلان کر دیا: اگر تم شکر کرو گے تو میں ضرور تمہیں اور زیادہ دوں گا، اور اگر ناشکری کرو گے تو بے شک میرا عذاب بہت سخت ہے۔", "Ibrahim 14:7"], ["إِنَّ اللَّهَ مَعَ الَّذِينَ اتَّقَوْا وَالَّذِينَ هُمْ مُحْسِنُونَ", "بے شک اللہ ان لوگوں کے ساتھ ہے جو تقویٰ اختیار کرتے ہیں اور جو نیکی کرنے والے ہیں۔", "An-Nahl 16:128"], ["قَالَ رَبِّ اشْرَحْ لِي صَدْرِي", "(موسیٰ علیہ السلام نے) کہا: اے میرے رب! میرا سینہ میرے لیے کھول دے۔", "Taha 20:25"], ["وَقُلْ رَبِّ زِدْنِي عِلْمًا", "اور کہو: اے میرے رب! میرے علم میں اضافہ فرما۔", "Taha 20:114 (آیت کا حصہ)"], ["وَقُلْ رَبِّ اغْفِرْ وَارْحَمْ وَأَنْتَ خَيْرُ الرَّاحِمِينَ", "اور کہو: اے میرے رب! بخش دے اور رحم فرما، اور تو سب رحم کرنے والوں سے بہتر ہے۔", "Al-Mu'minun 23:118"], ["رَبِّ إِنِّي لِمَا أَنْزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ", "(موسیٰ علیہ السلام نے) کہا: اے میرے رب! جو بھلائی بھی تو مجھ پر نازل فرمائے میں اس کا محتاج ہوں۔", "Al-Qasas 28:24 (آیت کا حصہ)"], ["إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ يَاأَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا", "بے شک اللہ اور اس کے فرشتے نبی ﷺ پر درود بھیجتے ہیں؛ اے ایمان والو! تم بھی ان پر درود اور خوب سلام بھیجو۔", "Al-Ahzab 33:56"], ["وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ", "اور تمہارے رب نے فرمایا: مجھے پکارو، میں تمہاری دعا قبول کروں گا۔", "Ghafir 40:60 (آیت کا حصہ)"], ["إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ فَأَصْلِحُوا بَيْنَ أَخَوَيْكُمْ وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُرْحَمُونَ", "مومن تو آپس میں بھائی بھائی ہیں، اس لیے اپنے دو بھائیوں میں صلح کرا دیا کرو اور اللہ سے ڈرتے رہو تاکہ تم پر رحم کیا جائے۔", "Al-Hujurat 49:10"], ["وَمَا خَلَقْتُ الْجِنَّ وَالْإِنْسَ إِلَّا لِيَعْبُدُونِ", "اور میں نے جنوں اور انسانوں کو صرف اس لیے پیدا کیا کہ وہ میری عبادت کریں۔", "Adh-Dhariyat 51:56"], ["فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ", "پس (اے جن و انس!) تم اپنے رب کی کون کون سی نعمتوں کو جھٹلاؤ گے؟", "Ar-Rahman 55:13"], ["وَمَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ", "اور جو اللہ پر بھروسا کرے تو وہ اسے کافی ہے۔", "At-Talaq 65:3 (آیت کا حصہ)"], ["فَإِنَّ مَعَ الْعُسْرِ يُسْرًا إِنَّ مَعَ الْعُسْرِ يُسْرًا", "پس بے شک مشکل کے ساتھ آسانی ہے۔ بے شک مشکل کے ساتھ آسانی ہے۔", "Ash-Sharh 94:5-6"]];

    function dailyIndex() {
        var n = new Date();
        var dayOfYear = Math.floor((Date.UTC(n.getFullYear(), n.getMonth(), n.getDate()) - Date.UTC(n.getFullYear(), 0, 0)) / 86400000);
        return dayOfYear % DAILY_AYAT.length;
    }

    function renderDailyAyat() {
        var box = document.getElementById('dailyCard');
        if (!box) return;
        var a = DAILY_AYAT[dailyIndex()];
        box.innerHTML =
            '<div class="daily-card">' +
              '<div class="d-label">📖 AAJ KI AYAT</div>' +
              '<div class="d-ar">' + a[0] + '</div>' +
              '<div class="d-ur">' + a[1] + '</div>' +
              '<div class="d-ref">' + a[2] + '</div>' +
              '<div class="d-acts">' +
                '<button type="button" id="dailySuno" class="d-btn">🔊 Suno</button>' +
                '<button type="button" id="dailyShare" class="d-btn d-ghost">📤 Share</button>' +
              '</div>' +
            '</div>';
        document.getElementById('dailySuno').onclick = function () {
            if (window.QSpeech) QSpeech.speak(a[0], { lang: 'ar', rate: 0.7, btn: this });
        };
        document.getElementById('dailyShare').onclick = function () {
            var txt = a[0] + '\n\n' + a[1] + '\n\n(' + a[2] + ')\n\n- Fahm-ul-Quran';
            if (navigator.share) navigator.share({ title: 'Fahm-ul-Quran', text: txt }).catch(function () {});
            else if (navigator.clipboard) { navigator.clipboard.writeText(txt); if (window.showToast) showToast('📋 Copy ho gaya!'); }
        };
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', renderDailyAyat); else renderDailyAyat();
})();
}

// ───────────── 2) INSTALL ─────────────
/* Install popup + service worker (shared by index.html, dua.html, tajweed.html, games.html)
   - Link khulte hi neeche se popup aata hai (Android / iOS / in-app browser sab handle)
   - "Baad mein" dabane par 1 din tak dobara nahi aata
   - Install hone ke baad kabhi nahi aata */
(function () {
    // ---------- Service worker ----------
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
            navigator.serviceWorker.register('sw.js').then(function () { return navigator.serviceWorker.ready; }).then(function (reg) {
                // Background Sync + Periodic Sync register (jahan browser support kare)
                try { if (reg.sync) reg.sync.register('fq-sync').catch(function () {}); } catch (e) {}
                try {
                    if (reg.periodicSync) reg.periodicSync.register('fq-periodic', { minInterval: 24 * 60 * 60 * 1000 }).catch(function () {});
                } catch (e) {}
            }).catch(function () {});
        });
    }

    // ---------- Helpers ----------
    function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
    function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

    var standalone = (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;
    if (standalone) { lsSet('qsInstalled', '1'); return; }
    if (lsGet('qsInstalled') === '1') return;

    var SNOOZE_MS = 24 * 60 * 60 * 1000; // 1 din
    function snoozed() {
        var t = parseInt(lsGet('qsInstallSnooze') || '0', 10);
        return t && Date.now() - t < SNOOZE_MS;
    }

    var ua = navigator.userAgent || '';
    var isIOS = /iphone|ipad|ipod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    var isAndroid = /android/i.test(ua);
    // Facebook / Instagram / WhatsApp / Snapchat / Line etc. ke andar ka browser — yahan install nahi hota
    var inApp = /FBAN|FBAV|FB_IAB|Instagram|Snapchat|Line\/|MicroMessenger|Twitter|; wv\)|GSA\//i.test(ua);
    // iPhone par sirf Safari install karwa sakta hai
    var iosNotSafari = isIOS && /CriOS|FxiOS|EdgiOS|OPiOS|GSA/i.test(ua);

    var deferred = null;
    var root = null, titleEl, msgEl, stepsEl, mainBtn, laterBtn;

    // ---------- UI ----------
    function css() {
        var st = document.createElement('style');
        st.textContent =
            '#qsInst{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:flex-end;justify-content:center;' +
            'background:rgba(4,16,12,.62);opacity:0;transition:opacity .25s;font-family:Figtree,Poppins,system-ui,sans-serif}' +
            '#qsInst.show{opacity:1}' +
            '#qsInst .qs-sheet{width:100%;max-width:460px;background:#FFFDF6;color:#1F2A25;border-radius:26px 26px 0 0;' +
            'border-top:4px solid #D9B65A;padding:26px 20px calc(20px + env(safe-area-inset-bottom));text-align:center;' +
            'box-shadow:0 -14px 50px rgba(0,0,0,.45);transform:translateY(100%);transition:transform .4s cubic-bezier(.2,.9,.3,1)}' +
            '#qsInst.show .qs-sheet{transform:translateY(0)}' +
            '#qsInst .qs-ico{width:76px;height:76px;border-radius:20px;border:2px solid #D9B65A;box-shadow:0 8px 22px rgba(0,0,0,.3);' +
            'margin:-64px auto 10px;display:block;background:#0A2E24;object-fit:cover}' +
            '#qsInst h2{font-size:21px;line-height:1.25;color:#0A2E24;margin:0 0 6px;font-weight:700}' +
            '#qsInst p{font-size:14px;line-height:1.55;color:#55645C;margin:0 0 4px}' +
            '#qsInst ul{list-style:none;padding:0;margin:12px 0 4px;text-align:left;font-size:13.5px;color:#1F2A25}' +
            '#qsInst li{padding:5px 2px}' +
            '#qsInst ol{margin:12px 0 4px;padding:12px 14px 12px 34px;text-align:left;font-size:14px;line-height:1.7;background:#F4F1E3;border-radius:14px}' +
            '#qsInst button{border:none;cursor:pointer;font-family:inherit;font-weight:700;border-radius:14px;width:100%;min-height:50px;font-size:16px}' +
            '#qsInst .qs-main{background:linear-gradient(180deg,#17614B,#0F4C3A);color:#fff;margin-top:14px;box-shadow:0 6px 16px rgba(15,76,58,.35)}' +
            '#qsInst .qs-main:active{transform:translateY(1px)}' +
            '#qsInst .qs-later{background:transparent;color:#55645C;margin-top:6px;font-size:14px;font-weight:600;min-height:44px}' +
            '@media (prefers-reduced-motion:reduce){#qsInst,#qsInst .qs-sheet{transition:none}}';
        document.head.appendChild(st);
    }

    function build() {
        if (root) return;
        css();
        root = document.createElement('div');
        root.id = 'qsInst';
        root.setAttribute('dir', 'ltr'); // RTL pages (Arkan) par bhi popup seedha rahe
        root.setAttribute('role', 'dialog');
        root.setAttribute('aria-modal', 'true');
        root.setAttribute('aria-labelledby', 'qsInstTitle');
        root.innerHTML =
            '<div class="qs-sheet">' +
              '<img class="qs-ico" src="icon-192.png" alt="">' +
              '<h2 id="qsInstTitle">Fahm-ul-Quran app install karein</h2>' +
              '<p id="qsInstMsg">Home screen par app ki tarah kholein.</p>' +
              '<ul id="qsInstPerks">' +
                '<li>⚡ Ek tap mein khule, browser ki zaroorat nahi</li>' +
                '<li>📴 Internet ke baghair bhi chale</li>' +
                '<li>🔥 Roz ka sabaq aur streak saath rahe</li>' +
              '</ul>' +
              '<div id="qsInstSteps"></div>' +
              '<button class="qs-main" id="qsInstMain">📲 Install karein</button>' +
              '<button class="qs-later" id="qsInstLater">Baad mein</button>' +
            '</div>';
        document.body.appendChild(root);
        titleEl = document.getElementById('qsInstTitle');
        msgEl = document.getElementById('qsInstMsg');
        stepsEl = document.getElementById('qsInstSteps');
        mainBtn = document.getElementById('qsInstMain');
        laterBtn = document.getElementById('qsInstLater');

        mainBtn.onclick = onMain;
        laterBtn.onclick = later;
        root.addEventListener('click', function (e) { if (e.target === root) later(); });
        document.addEventListener('keydown', function (e) { if (e.key === 'Escape') later(); });
        render();
        // transition chalane ke liye agle frame mein show
        requestAnimationFrame(function () { requestAnimationFrame(function () { root.classList.add('show'); }); });
    }

    // Halat ke hisaab se text/button badlo
    function render() {
        if (!root) return;
        stepsEl.innerHTML = '';
        mainBtn.style.display = '';
        if (inApp) {
            titleEl.textContent = 'Browser mein kholein';
            msgEl.textContent = 'Is browser mein install nahi ho sakta. Chrome / Safari mein kholne par install ka button milega.';
            mainBtn.textContent = isAndroid ? '🌐 Chrome mein kholein' : '🔗 Link copy karein';
        } else if (iosNotSafari) {
            titleEl.textContent = 'Safari mein kholein';
            msgEl.textContent = 'iPhone par app sirf Safari se install hoti hai. Link copy karke Safari mein kholein.';
            mainBtn.textContent = '🔗 Link copy karein';
        } else if (isIOS) {
            msgEl.textContent = 'Safari mein ye 3 kaam karein:';
            stepsEl.innerHTML = '<ol><li>Neeche <b>Share ⬆️</b> dabayen</li><li><b>"Add to Home Screen"</b> chunein</li><li><b>Add</b> dabayen</li></ol>';
            mainBtn.textContent = 'Samajh gaya 👍';
        } else if (deferred) {
            mainBtn.textContent = '📲 Install karein';
        } else {
            // Event abhi tak nahi aaya (ya browser support nahi karta) — button dabane par menu ka tareeqa dikhao
            mainBtn.textContent = '📲 Install karein';
        }
    }

    function onMain() {
        if (deferred) {
            var d = deferred; deferred = null;
            hide();
            d.prompt();
            d.userChoice.then(function (r) {
                if (r && r.outcome === 'accepted') lsSet('qsInstalled', '1');
                else lsSet('qsInstallSnooze', String(Date.now()));
            }).catch(function () {});
            return;
        }
        if (inApp && isAndroid) { openInChrome(); return; }
        if (inApp || iosNotSafari) { copyLink(); return; }
        if (isIOS) { later(); return; }
        // Android/desktop jahan native prompt abhi tayyar nahi
        titleEl.textContent = 'Menu se install karein';
        msgEl.textContent = '';
        perks(false);
        stepsEl.innerHTML = '<div data-lbh="instsp"><ol><li>Browser ka menu <b>⋮</b> kholein</li><li><b>"Install app"</b> ya <b>"Add to Home screen"</b> chunein</li></ol></div>';
        mainBtn.style.display = 'none';
        laterBtn.textContent = 'Theek hai';
    }

    function perks(show) { var p = document.getElementById('qsInstPerks'); if (p) p.style.display = show ? '' : 'none'; }

    function openInChrome() {
        var u = location.href.replace(/^https?:\/\//, '');
        var scheme = location.protocol.replace(':', '');
        location.href = 'intent://' + u + '#Intent;scheme=' + scheme + ';package=com.android.chrome;end';
        setTimeout(copyLink, 1200); // intent na chale to link copy ho jaye
    }

    function copyLink() {
        var done = function () { msgEl.textContent = '✅ Link copy ho gaya. Ab Chrome / Safari kholkar paste karein.'; };
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(location.href).then(done, function () { msgEl.textContent = 'Link: ' + location.href; });
        } else { msgEl.textContent = 'Link: ' + location.href; }
    }

    function later() {
        lsSet('qsInstallSnooze', String(Date.now()));
        hide();
    }

    function hide() {
        if (!root) return;
        root.classList.remove('show');
        var r = root;
        setTimeout(function () { if (r.parentNode) r.parentNode.removeChild(r); }, 350);
        root = null;
    }

    // ---------- Events ----------
    window.addEventListener('beforeinstallprompt', function (e) {
        e.preventDefault();
        deferred = e;
        if (root) render(); else if (!snoozed()) build();
    });
    window.addEventListener('appinstalled', function () {
        deferred = null;
        lsSet('qsInstalled', '1');
        hide();
    });

    // ---------- Page khulte hi popup ----------
    function init() {
        if (snoozed()) return;
        if (window.qsSplashActive) {
            // Splash chal raha hai — uske hatne ke baad popup dikhao
            window.addEventListener('qs-splash-done', function () { setTimeout(build, 400); });
            setTimeout(build, 4200); // safety
        } else {
            setTimeout(build, 600);
        }
    }
    if (document.body) init(); else document.addEventListener('DOMContentLoaded', init);
})();

// ───────────── 3) PROGRESS (index.html) ─────────────
(function () {
    function start() {
        if (!document.getElementById('mainApp')) return;   // sirf index.html
/* Batch 3 — index.html ke liye:
   1) Levels aur Badges (streak, din mukammal, full marks, dohrai, pasandida)
   2) Share card: lafz ya badge ki sundar tasveer banakar WhatsApp par bhejna
   Ye file index.html ke main script ke BAAD load hoti hai. */
(function () {
    // ---------- storage helpers ----------
    // Profile ke hisaab se alag save hone wali keys (index.html ka pk() 'p_<profile>_<key>' banata hai)
    var PER = { currentDay: 1, streak: 1, bestStreak: 1, bookmarks: 1, perfectExams: 1, revisionsDone: 1, badgesEarned: 1, namazBest: 1 };
    function K(k) {
        try { if (PER[k] && typeof pk === 'function' && typeof activeProfile !== 'undefined' && activeProfile) return pk(k); } catch (e) {}
        return k;
    }
    function lsGet(k) { try { return localStorage.getItem(K(k)); } catch (e) { return null; } }
    function lsSet(k, v) { try { localStorage.setItem(K(k), v); } catch (e) {} }
    function lsJSON(k, d) { try { var v = JSON.parse(lsGet(k)); return v || d; } catch (e) { return d; } }
    function num(k) { return parseInt(lsGet(k), 10) || 0; }
    function toast(m) { if (typeof showToast === 'function') showToast(m); }

    // ---------- Levels ----------
    var LEVELS = [
        { n: 'Mubtadi',     i: '🌱', min: 0 },
        { n: 'Talib-e-Ilm', i: '📘', min: 50 },
        { n: 'Mutaalim',    i: '📗', min: 150 },
        { n: 'Mahir',       i: '⭐', min: 300 },
        { n: 'Ustad',       i: '👑', min: 450 }
    ];

    // ---------- Badges ----------
    var BADGES = [
        { id: 's3',  i: '🔥', n: '3 din ki streak',        d: 'Lagatar 3 din app kholi',               t: function (s) { return s.streak >= 3; } },
        { id: 's7',  i: '🔥', n: '7 din ki streak',        d: 'Poora ek hafta roz aaye',               t: function (s) { return s.streak >= 7; } },
        { id: 's30', i: '🌙', n: '30 din ki streak',       d: 'Poora ek mahina roz aaye',              t: function (s) { return s.streak >= 30; } },
        { id: 'd1',  i: '🌟', n: 'Pehla qadam',            d: 'Pehla din mukammal kiya',               t: function (s) { return s.days >= 1; } },
        { id: 'd10', i: '📚', n: 'Pehle 10 din mukammal',  d: '100 lafz seekh liye',                   t: function (s) { return s.days >= 10; } },
        { id: 'd25', i: '🧭', n: 'Aadha safar',            d: '25 din mukammal',                       t: function (s) { return s.days >= 25; } },
        { id: 'd50', i: '🏆', n: 'Course mukammal',        d: 'Sab din mukammal, Mashallah!',          t: function (s) { return s.days >= s.total; } },
        { id: 'p1',  i: '💯', n: 'Full marks',             d: 'Exam mein 10/10 aaye',                  t: function (s) { return s.perfect >= 1; } },
        { id: 'p5',  i: '🎯', n: '5 baar full marks',      d: 'Exam mein 5 baar 10/10',                t: function (s) { return s.perfect >= 5; } },
        { id: 'r1',  i: '🔁', n: 'Dohrai mukammal',        d: 'Dohrai mein sab lafz sahi',             t: function (s) { return s.rev >= 1; } },
        { id: 'n3',  i: '🕌', n: '3 din poori namaz',      d: 'Lagatar 3 din paanchon namaz',          t: function (s) { return s.namaz >= 3; } },
        { id: 'n7',  i: '🤲', n: 'Namazi — 7 din',         d: 'Poora hafta paanchon namaz',            t: function (s) { return s.namaz >= 7; } },
        { id: 'n30', i: '🌙', n: 'Pakka Namazi — 30 din',  d: 'Poora mahina paanchon namaz, MashaAllah!', t: function (s) { return s.namaz >= 30; } },
        { id: 'f10', i: '❤️', n: '10 pasandida',           d: '10 lafz pasandida mein jode',           t: function (s) { return s.favs >= 10; } }
    ];

    function state() {
        var total = (typeof courseData !== 'undefined' && courseData.length) ? courseData.length : 50;
        var prog = Math.max(1, num('currentDay') || 1);          // asli progress (admin ka dekhna nahi ginta)
        var days = Math.min(total, prog - 1);
        var words = 0;
        if (typeof courseData !== 'undefined') courseData.forEach(function (d) { if (d.day <= days) words += d.words.length; });
        var streak = num('streak');
        var best = Math.max(num('bestStreak'), streak);
        if (best !== num('bestStreak')) lsSet('bestStreak', best);
        return { total: total, days: days, words: words, streak: Math.max(streak, best), cur: streak, best: best,
                 favs: lsJSON('bookmarks', []).length, namaz: num('namazBest'), perfect: num('perfectExams'), rev: num('revisionsDone') };
    }

    function levelOf(words) {
        var idx = 0;
        for (var i = 0; i < LEVELS.length; i++) if (words >= LEVELS[i].min) idx = i;
        return idx;
    }

    function earnedIds(s) { return BADGES.filter(function (b) { return b.t(s); }).map(function (b) { return b.id; }); }

    // ---------- CSS ----------
    var st = document.createElement('style');
    st.textContent =
        '.share-ico{position:absolute;top:8px;left:8px;width:40px;height:40px;border-radius:50%;border:none;background:transparent;font-size:18px;cursor:pointer;z-index:3;display:flex;align-items:center;justify-content:center}' +
        '.share-ico:active{transform:scale(.9)}' +
        '.today-card .share-ico{background:rgba(255,255,255,.14)}' +
        '#levelStrip{max-width:1200px;margin:10px auto 0;padding:0 16px}' +
        '.lv-strip{width:100%;display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:16px;background:var(--card-bg);border:1px solid var(--border);box-shadow:var(--shadow);cursor:pointer;text-align:left;color:var(--text);min-height:64px}' +
        '.lv-strip:active{transform:scale(.99)}' +
        '.lv-ico{font-size:30px;flex:0 0 auto}' +
        '.lv-main{flex:1;min-width:0;display:flex;flex-direction:column;gap:4px}' +
        '.lv-main b{font-size:14px}' +
        '.lv-bar{display:block;height:6px;border-radius:6px;background:var(--border);overflow:hidden}' +
        '.lv-bar u{display:block;height:100%;text-decoration:none;background:linear-gradient(90deg,var(--primary),var(--gold-bright));border-radius:6px;transition:width .5s}' +
        '.lv-main small{font-size:11.5px;color:var(--text-light)}' +
        '.lv-bdg{flex:0 0 auto;font-size:12px;font-weight:700;padding:6px 10px;border-radius:14px;background:var(--soft-bg);color:var(--text)}' +
        '.bd-sum{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin:10px 0 4px}' +
        '.bd-sum span{font-size:12.5px;font-weight:600;padding:6px 12px;border-radius:14px;background:var(--soft-bg);color:var(--text)}' +
        '.bd-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:14px}' +
        '.bd{position:relative;text-align:center;padding:14px 8px 12px;border-radius:16px;border:1px solid var(--border);background:var(--soft-bg)}' +
        '.bd.on{border-color:var(--secondary);background:linear-gradient(180deg,rgba(217,182,90,.18),rgba(217,182,90,.04))}' +
        '.bd .bi{font-size:36px;line-height:1.2}' +
        '.bd:not(.on) .bi{filter:grayscale(1);opacity:.35}' +
        '.bd b{display:block;font-size:13px;margin-top:4px;color:var(--text)}' +
        '.bd small{display:block;font-size:11px;color:var(--text-light);margin-top:2px;line-height:1.35}' +
        '.bd:not(.on) b,.bd:not(.on) small{opacity:.6}' +
        '.bd .bs{margin-top:8px;border:none;background:var(--primary);color:#fff;border-radius:12px;padding:6px 12px;font-size:12px;font-weight:700;cursor:pointer;min-height:32px}' +
        '[data-theme="dark"] .bd .bs{background:var(--gold-bright);color:#2A2008}';
    document.head.appendChild(st);

    // ---------- Level strip ----------
    function renderStrip(s) {
        var row = document.querySelector('.quick-row');
        if (!row) return;
        var el = document.getElementById('levelStrip');
        if (!el) { el = document.createElement('div'); el.id = 'levelStrip'; row.parentNode.insertBefore(el, row.nextSibling); }
        var li = levelOf(s.words), lv = LEVELS[li], nx = LEVELS[li + 1];
        var pct = nx ? Math.round((s.words - lv.min) / (nx.min - lv.min) * 100) : 100;
        var sub = nx ? (s.words + ' / ' + nx.min + ' lafz • agla: ' + nx.n) : (s.words + ' lafz • Sab levels mukammal 🎉');
        el.innerHTML = '<button class="lv-strip" id="lvBtn" aria-label="Badges kholein">' +
            '<span class="lv-ico">' + lv.i + '</span>' +
            '<span class="lv-main"><b>Level ' + (li + 1) + ' · ' + lv.n + '</b><i class="lv-bar"><u style="width:' + pct + '%"></u></i><small>' + sub + '</small></span>' +
            '<span class="lv-bdg">🏅 ' + earnedIds(s).length + '/' + BADGES.length + '</span></button>';
        document.getElementById('lvBtn').onclick = openBadges;
    }

    // ---------- Naye badge ka pata ----------
    function checkNew(s) {
        var now = earnedIds(s);
        var seen = lsJSON('badgesEarned', []);
        var fresh = now.filter(function (id) { return seen.indexOf(id) < 0; });
        if (fresh.length) {
            lsSet('badgesEarned', JSON.stringify(seen.concat(fresh)));
            var b = BADGES.filter(function (x) { return x.id === fresh[0]; })[0];
            toast('🎉 Naya badge: ' + b.i + ' ' + b.n + (fresh.length > 1 ? ' (+' + (fresh.length - 1) + ' aur)' : ''));
        }
    }

    function refresh() {
        var s = state();
        renderStrip(s);
        checkNew(s);
        return s;
    }

    // ---------- Badges modal ----------
    function modal() {
        var m = document.getElementById('badgeModal');
        if (m) return m;
        m = document.createElement('div');
        m.id = 'badgeModal';
        m.className = 'modal hidden';
        m.innerHTML = '<div class="modal-content"><span class="close-btn" id="bdClose">&times;</span>' +
            '<h2 id="bdTitle" style="text-align:center;color:var(--ink)">🏅 Meri Progress</h2>' +
            '<div class="bd-sum" id="bdSum"></div><div class="bd-grid" id="bdGrid"></div></div>';
        document.body.appendChild(m);
        document.getElementById('bdClose').onclick = function () { m.classList.add('hidden'); };
        m.addEventListener('click', function (e) { if (e.target === m) m.classList.add('hidden'); });
        return m;
    }

    function openBadges() {
        var s = refresh(), m = modal(), li = levelOf(s.words), got = earnedIds(s);
        document.getElementById('bdSum').innerHTML =
            '<span>' + LEVELS[li].i + ' ' + LEVELS[li].n + '</span>' +
            '<span>🔥 Streak ' + s.cur + ' (best ' + s.best + ')</span>' +
            '<span>📖 ' + s.words + ' lafz</span>';
        document.getElementById('bdGrid').innerHTML = BADGES.map(function (b) {
            var on = got.indexOf(b.id) >= 0;
            return '<div class="bd ' + (on ? 'on' : '') + '"><div class="bi">' + (on ? b.i : '🔒') + '</div><b>' + b.n + '</b><small>' + b.d + '</small>' +
                (on ? '<button class="bs" data-bshare="' + b.id + '">📤 Share</button>' : '') + '</div>';
        }).join('');
        m.classList.remove('hidden');
    }

    // ---------- Share card (canvas) ----------
    var W = 1080, H = 1350, GOLD = '#D9B65A';

    function rr(ctx, x, y, w, h, r) {
        ctx.beginPath();
        if (ctx.roundRect) ctx.roundRect(x, y, w, h, r);
        else { ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); }
    }

    function fitText(ctx, text, font, maxW, startPx, minPx, weight) {
        var px = startPx;
        do { ctx.font = (weight || '') + ' ' + px + 'px ' + font; if (ctx.measureText(text).width <= maxW) break; px -= 4; } while (px > minPx);
        return px;
    }

    function wrapLines(ctx, text, maxW) {
        var words = String(text).split(/\s+/), lines = [], cur = '';
        words.forEach(function (w) {
            var t = cur ? cur + ' ' + w : w;
            if (ctx.measureText(t).width > maxW && cur) { lines.push(cur); cur = w; } else cur = t;
        });
        if (cur) lines.push(cur);
        return lines;
    }

    async function loadFonts() {
        try {
            await Promise.all([
                document.fonts.load('700 80px Amiri', 'اللَّه'),
                document.fonts.load('700 50px "Noto Nastaliq Urdu"', 'اللہ'),
                document.fonts.load('700 40px Figtree', 'Ab')
            ]);
        } catch (e) {}
    }

    function base(ctx) {
        var g = ctx.createRadialGradient(W / 2, 0, 80, W / 2, 0, H);
        g.addColorStop(0, '#17614B'); g.addColorStop(1, '#0A2E24');
        ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
        ctx.strokeStyle = 'rgba(217,182,90,.12)'; ctx.lineWidth = 2;
        for (var y = 0; y < H; y += 108) for (var x = 0; x < W; x += 108) {
            ctx.strokeRect(x + 27, y + 27, 54, 54);
            ctx.save(); ctx.translate(x + 54, y + 54); ctx.rotate(Math.PI / 4); ctx.strokeRect(-27, -27, 54, 54); ctx.restore();
        }
        ctx.strokeStyle = GOLD; ctx.lineWidth = 6; rr(ctx, 40, 40, W - 80, H - 80, 36); ctx.stroke();
        ctx.strokeStyle = 'rgba(217,182,90,.5)'; ctx.lineWidth = 2; rr(ctx, 62, 62, W - 124, H - 124, 26); ctx.stroke();
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.direction = 'rtl';
        ctx.fillStyle = GOLD; ctx.font = '700 58px Amiri, serif';
        ctx.fillText('بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', W / 2, 168);
        ctx.fillStyle = 'rgba(217,182,90,.5)'; ctx.fillRect(W / 2 - 90, 232, 180, 3);
    }

    function footer(ctx) {
        ctx.direction = 'ltr'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillStyle = 'rgba(217,182,90,.5)'; ctx.fillRect(W / 2 - 90, H - 262, 180, 3);
        ctx.fillStyle = '#fff'; ctx.font = '700 66px Amiri, serif';
        ctx.fillText('Fahm-ul-Quran', W / 2, H - 196);
        ctx.fillStyle = 'rgba(255,255,255,.75)'; ctx.font = '500 30px Figtree, system-ui, sans-serif';
        ctx.fillText('Quran aur Duaa seekhein', W / 2, H - 134);
    }

    async function drawWord(w) {
        await loadFonts();
        var c = document.createElement('canvas'); c.width = W; c.height = H;
        var ctx = c.getContext('2d');
        base(ctx);
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.direction = 'ltr'; ctx.fillStyle = 'rgba(255,255,255,.7)'; ctx.font = '600 30px Figtree, system-ui, sans-serif';
        ctx.fillText('QURAN KA LAFZ', W / 2, 330);
        // Arabic
        ctx.direction = 'rtl'; ctx.fillStyle = '#fff';
        fitText(ctx, w.a, 'Amiri, serif', W - 220, 230, 90, '700');
        ctx.fillText(w.a, W / 2, 560);
        // Roman
        ctx.direction = 'ltr'; ctx.fillStyle = GOLD;
        fitText(ctx, w.r, 'Figtree, system-ui, sans-serif', W - 200, 76, 40, '700');
        ctx.fillText(w.r, W / 2, 770);
        // Urdu
        ctx.direction = 'rtl'; ctx.fillStyle = '#fff';
        ctx.font = '700 70px "Noto Nastaliq Urdu", serif';
        var lines = wrapLines(ctx, w.u, W - 200).slice(0, 3);
        var y0 = 930 - (lines.length - 1) * 55;
        lines.forEach(function (ln, i) { ctx.fillText(ln, W / 2, y0 + i * 110); });
        footer(ctx);
        return c;
    }

    async function drawBadge(b) {
        await loadFonts();
        var c = document.createElement('canvas'); c.width = W; c.height = H;
        var ctx = c.getContext('2d');
        base(ctx);
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.direction = 'ltr';
        ctx.fillStyle = 'rgba(255,255,255,.7)'; ctx.font = '600 30px Figtree, system-ui, sans-serif';
        ctx.fillText('NAYA BADGE', W / 2, 330);
        ctx.font = '300px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif';
        ctx.fillText(b.i, W / 2, 600);
        ctx.fillStyle = GOLD;
        fitText(ctx, b.n, 'Amiri, serif', W - 200, 96, 50, '700');
        ctx.fillText(b.n, W / 2, 860);
        ctx.fillStyle = '#fff'; ctx.font = '500 42px Figtree, system-ui, sans-serif';
        wrapLines(ctx, b.d, W - 240).slice(0, 2).forEach(function (ln, i) { ctx.fillText(ln, W / 2, 960 + i * 58); });
        footer(ctx);
        return c;
    }

    async function shareCanvas(canvas, name, text) {
        var blob = await new Promise(function (r) { canvas.toBlob(r, 'image/png'); });
        if (!blob) { toast('❌ Tasveer nahi ban saki'); return; }
        var file = new File([blob], name, { type: 'image/png' });
        var link = location.origin + location.pathname.replace(/[^/]*$/, '');
        try {
            if (navigator.canShare && navigator.canShare({ files: [file] })) {
                await navigator.share({ files: [file], text: text + '\n' + link });
                return;
            }
        } catch (e) { if (e && e.name === 'AbortError') return; }
        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob); a.download = name;
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
        toast('📥 Tasveer save ho gayi — ab WhatsApp se bhej dein');
    }

    async function shareWord(a) {
        var w = (typeof findWord === 'function') ? findWord(a) : null;
        if (!w) return;
        toast('🖼️ Tasveer ban rahi hai...');
        var c = await drawWord(w);
        await shareCanvas(c, 'fahm-ul-quran-lafz.png', w.a + ' — ' + w.u);
    }

    async function shareBadge(id) {
        var b = BADGES.filter(function (x) { return x.id === id; })[0];
        if (!b) return;
        toast('🖼️ Tasveer ban rahi hai...');
        var c = await drawBadge(b);
        await shareCanvas(c, 'fahm-ul-quran-badge.png', b.i + ' ' + b.n + ' — Fahm-ul-Quran');
    }

    // ---------- Events ----------
    document.addEventListener('click', function (e) {
        var s = e.target.closest && e.target.closest('.share-ico');
        if (s) { e.stopPropagation(); shareWord(s.dataset.share); return; }
        var bs = e.target.closest && e.target.closest('[data-bshare]');
        if (bs) { e.stopPropagation(); shareBadge(bs.dataset.bshare); }
    });

    // ---------- Public ----------
    window.QSProgress = {
        refresh: refresh,
        open: openBadges,
        onExam: function (score, total, type) {
            if (total && score === total) {
                lsSet('perfectExams', num('perfectExams') + 1);
                if (type === 'revision') lsSet('revisionsDone', num('revisionsDone') + 1);
            }
            refresh();
        },
        _drawWord: drawWord, _drawBadge: drawBadge
    };

    if (document.getElementById('mainApp') && !document.getElementById('mainApp').classList.contains('hidden')) refresh();
})();
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
;

/* ───────────── lang.js ───────────── */
/* lang.js — Quraan Ustad: sab pages ke liye ek hi "meaning ki zubaan"
   Zubaan: u = اردو, ro = Roman, hi = हिंदी, en = English (arabi hamesha wahi rehti hai)
   Har page par ek button (data-qs-lang) jo zubaan badalta hai; chuni hui zubaan dusre pages par bhi wahi rehti hai.
   Kaam: QSLang.get(), QSLang.set(v), QSLang.cycle(), QSLang.onChange(fn), QSLang.pick(obj, 'u') -> obj.u / obj.u_ro / obj.u_hi / obj.u_en */
(function () {
    'use strict';
    var LIST = ['u', 'ro', 'hi', 'en'];
    var LAB = { u: 'اردو', ro: 'Roman', hi: 'हिंदी', en: 'English' };
    var KEY = 'mlang', cbs = [];
    function rd(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
    function wr(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
    function get() {
        var v = rd(KEY);
        if (LIST.indexOf(v) < 0) { var old = rd('meaningLang'); v = LIST.indexOf(old) >= 0 ? old : 'u'; }
        return v;
    }
    /* Icon/button ke labels — 4 zubaan [اردو, Roman, हिंदी, English]. Istemaal: <span data-lb="quran">Quran</span>
       Naya label: LB mein ek entry; page par data-lb="kunji". QSLang.t('kunji') se JS mein bhi mil jata hai. */
    var LB = {
        quran: ['قرآن', 'Quran', 'क़ुरआन', 'Quran'],
        sabaq: ['سبق', 'Sabaq', 'सबक़', 'Lessons'],
        games: ['کھیل', 'Games', 'खेल', 'Games'],
        tajweed: ['تجوید', 'Tajweed', 'तजवीद', 'Tajweed'],
        dua: ['دعائیں', 'Duaein', 'दुआएँ', 'Duas'],
        asma: ['۹۹ نام', '99 Naam', '99 नाम', '99 Names'],
        grammar: ['نحو صرف', 'Nahw-Sarf', 'नह्व-सर्फ़', 'Nahw-Sarf'],
        seerat: ['سیرت', 'Seerat', 'सीरत', 'Seerah'],
        arkan: ['ارکانِ اسلام', 'Arkan\u2011e\u2011\u200bIslam', 'अरकान-ए-इस्लाम', 'Pillars of Islam'],
        shop: ['شاپ', 'Shop', 'शॉप', 'Shop'],
        namazhisab: ['نماز کا حساب', 'Namaz ka Hisaab', 'नमाज़ का हिसाब', 'Prayer Tracker'],
        inaamshop: ['انعام گھر (شاپ)', 'Inaam Ghar (Shop)', 'इनाम घर (शॉप)', 'Reward Store (Shop)'],
        inaam: ['انعام گھر', 'Inaam Ghar', 'इनाम घर', 'Reward Store'],
        backup: ['بیک اپ / ریسٹور', 'Backup / Restore', 'बैकअप / रीस्टोर', 'Backup / Restore'],
        cert: ['تکمیل سرٹیفکیٹ', 'Completion Certificate', 'पूर्णता प्रमाणपत्र', 'Completion Certificate'],
        deftheme: ['ڈیفالٹ تھیم (خریدی ہوئی محفوظ)', 'Default Theme (kharidi hui safe)', 'डिफ़ॉल्ट थीम (ख़रीदी हुई सुरक्षित)', 'Default Theme (purchases stay safe)'],
        logout: ['لاگ آؤٹ', 'Logout', 'लॉग आउट', 'Logout'],
        delprof: ['میری پروفائل ڈیلیٹ کریں', 'Meri Profile Delete Karein', 'मेरी प्रोफ़ाइल डिलीट करें', 'Delete My Profile'],
        goal: ['آج کا مقصد', 'Aaj ka Maqsad', 'आज का मक़सद', 'Today\u2019s Goal'],
        yaad: ['روز کی یاد دہانی', 'Roz ki yaad', 'रोज़ की याद', 'Daily Reminder'],
        quranmajeed: ['قرآن مجید', 'Quran Majeed', 'क़ुरआन मजीद', 'The Holy Quran'],
        tajweedq: ['تجوید کے قواعد', 'Tajweed ke Qawaid', 'तजवीद के क़वाइद', 'Tajweed Rules'],
        masnoon: ['مسنون دعائیں', 'Masnoon Duaein', 'मसनून दुआएँ', 'Masnoon Duas'],
        asmah: ['أسماء الله الحسنى', 'Asma-ul-Husna', 'अस्माउल-हुस्ना', '99 Names of Allah']
    };
    function t(k, v) { var a = LB[k]; if (!a) return k; var i = LIST.indexOf(v || get()); return a[i < 0 ? 0 : i]; }
    /*@AUTO_START*/
    /* ===== Auto-translate: Roman title / button / tab / label / placeholder -> chuni hui zubaan =====
       D: 'Roman matn' -> [اردو, हिंदी, English]. Shuru ka emoji/nishaan aur aakhir ka "(7)" wapas laga diya jata hai.
       PAT: numbers wale matn ($1, $2).  HT: poore HTML hisse (data-lbh="kunji"), [اردو, Roman, हिंदी, English].
       Naya title jodna ho: sirf D mein ek entry. Sirf POORA match badalta hai — Arabic/content/data par asar nahi.
       Arkan / Nahw-Sarf pages apna alag engine rakhte hain, wahan ye band hai. */
    var D = {
        /* ---- Home / login / menu ---- */
        'Aapka Pura Naam': ['آپ کا پورا نام', 'आपका पूरा नाम', 'Your Full Name'],
        'Password': ['پاس ورڈ', 'पासवर्ड', 'Password'],
        'Login': ['لاگ اِن', 'लॉग इन', 'Login'],
        'Naye phone par? Backup se progress wapas laayein': ['نئے فون پر؟ بیک اپ سے پروگریس واپس لائیں', 'नए फ़ोन पर? बैकअप से प्रोग्रेस वापस लाएँ', 'New phone? Restore your progress from a backup'],
        'Profile:': ['پروفائل:', 'प्रोफ़ाइल:', 'Profile:'],
        'Role:': ['کردار:', 'भूमिका:', 'Role:'],
        'Student': ['طالب علم', 'विद्यार्थी', 'Student'],
        'Shop se sticker khareedein ✨': ['شاپ سے اسٹیکر خریدیں ✨', 'शॉप से स्टिकर ख़रीदें ✨', 'Buy stickers from the Shop ✨'],
        'Arabic size': ['عربی کا سائز', 'अरबी का साइज़', 'Arabic size'],
        'Exam Panel (Admin)': ['ایگزام پینل (ایڈمن)', 'एग्ज़ाम पैनल (एडमिन)', 'Exam Panel (Admin)'],
        'Aaj ki Ayat + Sunnat': ['آج کی آیت + سنت', 'आज की आयत + सुन्नत', 'Today\u2019s Ayah + Sunnah'],
        'Ek ayat, ek pyaari sunnat — doston ko bhejein': ['ایک آیت، ایک پیاری سنت — دوستوں کو بھیجیں', 'एक आयत, एक प्यारी सुन्नत — दोस्तों को भेजें', 'One ayah, one beautiful sunnah \u2014 share with friends'],
        'Azan ke waqt': ['اذان کے اوقات', 'अज़ान के वक़्त', 'Adhan Times'],
        'Tap karke set karein': ['ٹیپ کر کے سیٹ کریں', 'टैप करके सेट करें', 'Tap to set'],
        'Lagayein': ['لگائیں', 'लगाएँ', 'Set'],
        'Tasbeeh': ['تسبیح', 'तस्बीह', 'Tasbeeh'],
        'SubhanAllah • shuru karein': ['سبحان اللہ • شروع کریں', 'सुब्हानल्लाह • शुरू करें', 'SubhanAllah \u2022 tap to start'],
        'Shuru': ['شروع', 'शुरू', 'Start'],
        'Aapka Safar': ['آپ کا سفر', 'आपका सफ़र', 'Your Journey'],
        '90 din • Silver 🥈 • Gold 🥇': ['90 دن • سلور 🥈 • گولڈ 🥇', '90 दिन • सिल्वर 🥈 • गोल्ड 🥇', '90 days \u2022 Silver 🥈 \u2022 Gold 🥇'],
        'Silver': ['سلور', 'सिल्वर', 'Silver'],
        'Gold': ['گولڈ', 'गोल्ड', 'Gold'],
        'Aaj ke 10 lafz': ['آج کے 10 الفاظ', 'आज के 10 शब्द', 'Today\u2019s 10 Words'],
        'Is din ki sab ayaat': ['اس دن کی تمام آیات', 'इस दिन की सारी आयतें', 'All ayahs of this day'],
        'Sab ayaat': ['تمام آیات', 'सारी आयतें', 'All ayahs'],
        'Mashq:': ['مشق:', 'मश्क़:', 'Practice:'],
        'Quran mein ye lafz': ['قرآن میں یہ لفظ', 'क़ुरआन में यह शब्द', 'This word in the Quran'],
        'Download': ['ڈاؤن لوڈ', 'डाउनलोड', 'Download'],
        'MP3 file': ['MP3 فائل', 'MP3 फ़ाइल', 'MP3 file'],
        'Hatao': ['ہٹائیں', 'हटाएँ', 'Remove'],
        'Shop': ['شاپ', 'शॉप', 'Shop'],
        'Aaj ka Paigham': ['آج کا پیغام', 'आज का पैग़ाम', 'Today\u2019s Message'],
        'Aaj ki Sunnat': ['آج کی سنت', 'आज की सुन्नत', 'Today\u2019s Sunnah'],
        'Aaj ki Ayat': ['آج کی آیت', 'आज की आयत', 'Today\u2019s Ayah'],
        'WhatsApp / Insta par Share karein': ['واٹس ایپ / انسٹا پر شیئر کریں', 'व्हाट्सऐप / इंस्टा पर शेयर करें', 'Share on WhatsApp / Insta'],
        'Aapka XP:': ['آپ کا XP:', 'आपका XP:', 'Your XP:'],
        'Default Theme lagayein (kharidi hui cheezein safe rehti hain)': ['ڈیفالٹ تھیم لگائیں (خریدی ہوئی چیزیں محفوظ رہتی ہیں)', 'डिफ़ॉल्ट थीम लगाएँ (ख़रीदी हुई चीज़ें सुरक्षित रहती हैं)', 'Apply Default Theme (your purchases stay safe)'],
        'Exam': ['امتحان', 'इम्तिहान', 'Exam'],
        'Submit Exam': ['امتحان جمع کرائیں', 'इम्तिहान जमा करें', 'Submit Exam'],
        'Skip': ['چھوڑیں', 'छोड़ें', 'Skip'],
        'Agla \u2192': ['اگلا \u2192', 'अगला \u2192', 'Next \u2192'],
        'Chalo shuru karein': ['چلیں شروع کریں', 'चलो शुरू करें', 'Let\u2019s begin'],
        'Jaise: Mohammad Fauzan Raza': ['مثلاً: Mohammad Fauzan Raza', 'जैसे: Mohammad Fauzan Raza', 'e.g. Mohammad Fauzan Raza'],
        'Password daalein': ['پاس ورڈ درج کریں', 'पासवर्ड डालें', 'Enter password'],
        'Meaning ki zubaan badlein': ['معنی کی زبان بدلیں', 'मतलब की ज़बान बदलें', 'Change meaning language'],
        'Matlab ki zubaan': ['معنی کی زبان', 'मतलब की ज़बान', 'Meaning language'],
        'Theme': ['تھیم', 'थीम', 'Theme'],
        'Theme: Dark': ['تھیم: ڈارک', 'थीम: डार्क', 'Theme: Dark'],
        'Theme: Light': ['تھیم: لائٹ', 'थीम: लाइट', 'Theme: Light'],
        'Phone ke Calendar mein roz ka alarm lag jayega': ['فون کے کیلنڈر میں روز کا الارم لگ جائے گا', 'फ़ोन के कैलेंडर में रोज़ का अलार्म लग जाएगा', 'A daily alarm will be added to your phone calendar'],
        /* ---- Games ---- */
        'Maratib-e-Ilm': ['مراتبِ علم', 'मरातिब-ए-इल्म', 'Levels of Knowledge'],
        'Sahaba': ['صحابہ', 'सहाबा', 'Sahaba'],
        'Memory': ['میموری', 'मेमोरी', 'Memory'],
        'Emoji': ['ایموجی', 'इमोजी', 'Emoji'],
        'Bazm-e-Fahm': ['بزمِ فہم', 'बज़्म-ए-फ़हम', 'Bazm-e-Fahm (Quiz)'],
        'Sawal': ['سوال', 'सवाल', 'Question'],
        'Mubtadi': ['مبتدی', 'मुब्तदी', 'Beginner'],
        'Haan, jawab pakka hai': ['ہاں، جواب پکا ہے', 'हाँ, जवाब पक्का है', 'Yes, I\u2019m sure'],
        'Dobara sochun': ['دوبارہ سوچوں', 'दोबारा सोचूँ', 'Let me think again'],
        'Do Ghalat Hatayein': ['دو غلط ہٹائیں', 'दो ग़लत हटाएँ', 'Remove Two Wrong'],
        'Hazireen ki Raay': ['حاضرین کی رائے', 'हाज़िरीन की राय', 'Audience Poll'],
        'Saathi se Mashwara': ['ساتھی سے مشورہ', 'साथी से मशवरा', 'Ask a Friend'],
        'Ustad se Rujoo': ['استاد سے رجوع', 'उस्ताद से रुजू', 'Ask the Teacher'],
        'Sawal Tabdeel': ['سوال تبدیل', 'सवाल बदलें', 'Swap Question'],
        'Yahin Ruk Jayein (abhi ke stars le lein)': ['یہیں رک جائیں (ابھی کے ستارے لے لیں)', 'यहीं रुक जाएँ (अभी के सितारे ले लें)', 'Stop here (keep your current stars)'],
        'Yahin Ruk Jayein (abhi tak ka XP le lein)': ['یہیں رک جائیں (اب تک کا XP لے لیں)', 'यहीं रुक जाएँ (अब तक का XP ले लें)', 'Stop here (keep your XP so far)'],
        'Shuru karein': ['شروع کریں', 'शुरू करें', 'Start'],
        'darja': ['درجہ', 'दर्जा', 'level'],
        'Ilm Points (XP)': ['علم پوائنٹس (XP)', 'इल्म पॉइंट्स (XP)', 'Knowledge Points (XP)'],
        'Madad ke 4 tareeqe (har ek sirf ek baar)': ['مدد کے 4 طریقے (ہر ایک صرف ایک بار)', 'मदद के 4 तरीक़े (हर एक सिर्फ़ एक बार)', '4 lifelines (each only once)'],
        'Dobara khelein': ['دوبارہ کھیلیں', 'दोबारा खेलें', 'Play Again'],
        'Sabaq par wapas': ['سبق پر واپس', 'सबक़ पर वापस', 'Back to Lessons'],
        'Sound effects': ['آواز کے اثرات', 'साउंड इफ़ेक्ट', 'Sound effects'],
        'Nasheed chalayein': ['نشید چلائیں', 'नशीद चलाएँ', 'Play nasheed'],
        /* ---- Tajweed / Dua / Asma ---- */
        'Sab Kuch': ['سب کچھ', 'सब कुछ', 'All'],
        'Basic': ['بنیادی', 'बुनियादी', 'Basic'],
        'Intermediate': ['درمیانہ', 'मध्यम', 'Intermediate'],
        'High': ['اعلیٰ', 'उच्च', 'Advanced'],
        'Qaida Search Karein...': ['قاعدہ تلاش کریں...', 'क़ायदा खोजें...', 'Search rules...'],
        'Favourites': ['پسندیدہ', 'पसंदीदा', 'Favourites'],
        'Namaz': ['نماز', 'नमाज़', 'Prayer'],
        'Subah-Sham Azkar': ['صبح و شام کے اذکار', 'सुबह-शाम के अज़कार', 'Morning & Evening Adhkar'],
        'Roz marra': ['روزمرہ', 'रोज़मर्रा', 'Daily Life'],
        'Mushkil & Pareshani': ['مشکل و پریشانی', 'मुश्किल और परेशानी', 'Hardship & Distress'],
        'Bimari & Shifa': ['بیماری و شفا', 'बीमारी और शिफ़ा', 'Illness & Healing'],
        'Ruqya Shariah': ['رقیہ شرعیہ', 'रुक़्या शरीअह', 'Ruqyah Shar\u2019iyyah'],
        'Sone se Pehle': ['سونے سے پہلے', 'सोने से पहले', 'Before Sleep'],
        'Aaj ka naam': ['آج کا نام', 'आज का नाम', 'Today\u2019s Name'],
        'Mere yaad kiye hue naam': ['میرے یاد کیے ہوئے نام', 'मेरे याद किए हुए नाम', 'Names I Have Memorized'],
        'Sab': ['سب', 'सब', 'All'],
        'Yaad hain': ['یاد ہیں', 'याद हैं', 'Memorized'],
        'Baaqi': ['باقی', 'बाक़ी', 'Remaining'],
        'Yaad kiya?': ['یاد کیا؟', 'याद किया?', 'Memorized?'],
        'Suno': ['سنیں', 'सुनें', 'Listen'],
        'Zaroori wazahat (parhein)': ['ضروری وضاحت (پڑھیں)', 'ज़रूरी वज़ाहत (पढ़ें)', 'Important note (please read)'],
        /* ---- Quran page ---- */
        'Surah': ['سورت', 'सूरह', 'Surah'],
        'Juz': ['پارہ', 'पारा', 'Juz'],
        'Page': ['صفحہ', 'पेज', 'Page'],
        'Style:': ['انداز:', 'स्टाइल:', 'Style:'],
        'Madani Mushaf (604 page · 15 line)': ['مدنی مصحف (604 صفحات · 15 سطریں)', 'मदनी मुसहफ़ (604 पेज · 15 लाइन)', 'Madani Mushaf (604 pages \u00B7 15 lines)'],
        'Indo-Pak Mushaf (610 page · 15 line)': ['انڈو پاک مصحف (610 صفحات · 15 سطریں)', 'इंडो-पाक मुसहफ़ (610 पेज · 15 लाइन)', 'Indo-Pak Mushaf (610 pages \u00B7 15 lines)'],
        'Ayat-wise (surah, har ayat alag)': ['آیت وار (سورت، ہر آیت الگ)', 'आयत-वार (सूरह, हर आयत अलग)', 'Ayah-wise (surah, each ayah separate)'],
        'Qari:': ['قاری:', 'क़ारी:', 'Reciter:'],
        'Dobara koshish': ['دوبارہ کوشش کریں', 'दोबारा कोशिश करें', 'Try again'],
        'Arabic: Indo-Pak rasm-ul-khat · 3 style:': ['عربی: انڈو پاک رسم الخط · 3 انداز:', 'अरबी: इंडो-पाक रस्मुल-ख़त · 3 स्टाइल:', 'Arabic: Indo-Pak script \u00B7 3 styles:'],
        'Madani (604 page)': ['مدنی (604 صفحات)', 'मदनी (604 पेज)', 'Madani (604 pages)'],
        'Indo-Pak 15 line (610 page)': ['انڈو پاک 15 سطر (610 صفحات)', 'इंडो-पाक 15 लाइन (610 पेज)', 'Indo-Pak 15 lines (610 pages)'],
        'Ayat-wise': ['آیت وار', 'आयत-वार', 'Ayah-wise'],
        'Ahsan-ul-Bayan': ['احسن البیان', 'अहसनुल-बयान', 'Ahsan-ul-Bayan'],
        'Fehrist': ['فہرست', 'फ़ेहरिस्त', 'Index'],
        'Course ke alfaz rang mein hain — tap karke matlab dekhein': ['کورس کے الفاظ رنگ میں ہیں — ٹیپ کر کے معنی دیکھیں', 'कोर्स के शब्द रंग में हैं — टैप करके मतलब देखें', 'Course words are coloured \u2014 tap to see the meaning'],
        'Surah / 2:255 / page 50 / juz 5 / ayat ka hissa (Arabic)': ['سورت / 2:255 / صفحہ 50 / پارہ 5 / آیت کا حصہ (عربی)', 'सूरह / 2:255 / पेज 50 / पारा 5 / आयत का हिस्सा (अरबी)', 'Surah / 2:255 / page 50 / juz 5 / part of an ayah (Arabic)'],
        'Chhota': ['چھوٹا', 'छोटा', 'Smaller'],
        'Bada': ['بڑا', 'बड़ा', 'Larger'],
        'Back to App': ['ایپ پر واپس', 'ऐप पर वापस', 'Back to App'],
        'Har ayat kitni baar': ['ہر آیت کتنی بار', 'हर आयत कितनी बार', 'Repeat each ayah'],
        /* ---- Shop ---- */
        'Aapke stickers': ['آپ کے اسٹیکرز', 'आपके स्टिकर', 'Your stickers'],
        'abhi koi nahi': ['ابھی کوئی نہیں', 'अभी कोई नहीं', 'none yet'],
        'Themes': ['تھیمز', 'थीम्स', 'Themes'],
        'Stickers': ['اسٹیکرز', 'स्टिकर्स', 'Stickers'],
        '(profile ke naam ke saath dikhte hain)': ['(پروفائل کے نام کے ساتھ دکھتے ہیں)', '(प्रोफ़ाइल के नाम के साथ दिखते हैं)', '(shown next to your profile name)'],
        'Aam': ['عام', 'आम', 'Common'],
        'Khaas': ['خاص', 'ख़ास', 'Special'],
        'Nayaab': ['نایاب', 'नायाब', 'Rare'],
        'Shahi': ['شاہی', 'शाही', 'Royal'],
        'Midnight Theme': ['مڈ نائٹ تھیم', 'मिडनाइट थीम', 'Midnight Theme'],
        'Royal Theme': ['رائل تھیم', 'रॉयल थीम', 'Royal Theme'],
        'Sky Blue Theme': ['اسکائی بلو تھیم', 'स्काई ब्लू थीम', 'Sky Blue Theme'],
        'Shab-e-Qadr ✨ (sitaron wali raat)': ['شبِ قدر ✨ (ستاروں والی رات)', 'शब-ए-क़द्र ✨ (सितारों वाली रात)', 'Night of Qadr ✨ (starry night)'],
        'Jannah ka Bagh ✨ (hara-bhara)': ['جنت کا باغ ✨ (ہرا بھرا)', 'जन्नत का बाग़ ✨ (हरा-भरा)', 'Garden of Jannah ✨ (lush green)'],
        'Kaala-Sunehra ✨ (Shahi)': ['کالا-سنہرا ✨ (شاہی)', 'काला-सुनहरा ✨ (शाही)', 'Black & Gold ✨ (Royal)'],
        'Kaaba': ['کعبہ', 'काबा', 'Kaaba'],
        'Masjid': ['مسجد', 'मस्जिद', 'Mosque'],
        'Chaand Sitara': ['چاند ستارہ', 'चाँद सितारा', 'Crescent & Star'],
        'Khajoor': ['کھجور', 'खजूर', 'Date'],
        'Gulab': ['گلاب', 'गुलाब', 'Rose'],
        'Quran Premi': ['قرآن پریمی', 'क़ुरआन प्रेमी', 'Quran Lover'],
        'Dua Wala': ['دعا والا', 'दुआ वाला', 'Dua Lover'],
        'Ounth': ['اونٹ', 'ऊँट', 'Camel'],
        'Josh': ['جوش', 'जोश', 'Enthusiasm'],
        'Sher-e-Quran': ['شیرِ قرآن', 'शेर-ए-क़ुरआन', 'Lion of the Quran'],
        'Baaz': ['باز', 'बाज़', 'Falcon'],
        'Champion': ['چیمپیئن', 'चैंपियन', 'Champion'],
        'Roshan Sitara': ['روشن ستارہ', 'रोशन सितारा', 'Bright Star'],
        'Heera': ['ہیرا', 'हीरा', 'Diamond'],
        'Taj': ['تاج', 'ताज', 'Crown'],
        'Alim': ['عالم', 'आलिम', 'Scholar'],
        'Unlock': ['کھولیں', 'खोलें', 'Unlock'],
        'Goal Mukammal!': ['ہدف مکمل!', 'लक्ष्य पूरा!', 'Goal complete!'],
        'Aaj 10 lafz padhein': ['آج 10 الفاظ پڑھیں', 'आज 10 शब्द पढ़ें', 'Read 10 words today'],
        /* ---- Install popup ---- */
        'Fahm-ul-Quran app install karein': ['Fahm-ul-Quran ایپ انسٹال کریں', 'Fahm-ul-Quran ऐप इंस्टॉल करें', 'Install the Fahm-ul-Quran app'],
        'Home screen par app ki tarah kholein.': ['ہوم اسکرین پر ایپ کی طرح کھولیں۔', 'होम स्क्रीन पर ऐप की तरह खोलें।', 'Open it like an app from your home screen.'],
        'Ek tap mein khule, browser ki zaroorat nahi': ['ایک ٹیپ میں کھلے، براؤزر کی ضرورت نہیں', 'एक टैप में खुले, ब्राउज़र की ज़रूरत नहीं', 'Opens in one tap, no browser needed'],
        'Internet ke baghair bhi chale': ['انٹرنیٹ کے بغیر بھی چلے', 'इंटरनेट के बग़ैर भी चले', 'Works even without internet'],
        'Roz ka sabaq aur streak saath rahe': ['روز کا سبق اور اسٹریک ساتھ رہے', 'रोज़ का सबक़ और स्ट्रीक साथ रहे', 'Keep your daily lesson and streak with you'],
        'Install karein': ['انسٹال کریں', 'इंस्टॉल करें', 'Install'],
        'Baad mein': ['بعد میں', 'बाद में', 'Later'],
        /* ---- Namaz ka Hisaab ---- */
        'Namaz ka Hisaab': ['نماز کا حساب', 'नमाज़ का हिसाब', 'Prayer Tracker'],
        'Azan ke waqt set karein 👇': ['اذان کے اوقات سیٹ کریں 👇', 'अज़ान के वक़्त सेट करें 👇', 'Set the Adhan times 👇'],
        'Fajr': ['فجر', 'फ़ज्र', 'Fajr'],
        'Zuhr': ['ظہر', 'ज़ुहर', 'Zuhr'],
        'Asr': ['عصر', 'अस्र', 'Asr'],
        'Maghrib': ['مغرب', 'मग़रिब', 'Maghrib'],
        'Isha': ['عشاء', 'इशा', 'Isha'],
        'Time box = azan ka waqt (badal sakte hain). ✓ = aaj padh li. Poori 5 par +25 XP.': ['ٹائم باکس = اذان کا وقت (بدل سکتے ہیں)۔ ✓ = آج پڑھ لی۔ پوری 5 پر +25 XP۔', 'टाइम बॉक्स = अज़ान का वक़्त (बदल सकते हैं)। ✓ = आज पढ़ ली। पूरी 5 पर +25 XP।', 'Time box = Adhan time (editable). \u2713 = prayed today. All 5 prayers: +25 XP.'],
        'Mahine ka hisaab (5 boxes)': ['مہینے کا حساب (5 باکس)', 'महीने का हिसाब (5 बॉक्स)', 'Monthly summary (5 boxes)'],
        'PICHLE 7 DIN': ['پچھلے 7 دن', 'पिछले 7 दिन', 'LAST 7 DAYS'],
        'Itwa': ['اتوار', 'रवि', 'Sun'], 'Peer': ['پیر', 'सोम', 'Mon'], 'Mang': ['منگل', 'मंगल', 'Tue'], 'Budh': ['بدھ', 'बुध', 'Wed'],
        'Jume': ['جمعرات', 'गुरु', 'Thu'], 'Jumm': ['جمعہ', 'जुमा', 'Fri'], 'Haft': ['ہفتہ', 'शनि', 'Sat'],
        'SETTINGS': ['ترتیبات', 'सेटिंग्स', 'SETTINGS'],
        'Location se azan ke waqt lein': ['لوکیشن سے اذان کے اوقات لیں', 'लोकेशन से अज़ान के वक़्त लें', 'Get Adhan times from location'],
        'Azan ki awaaz': ['اذان کی آواز', 'अज़ान की आवाज़', 'Adhan sound'],
        'Azan Al-Aqsa': ['اذانِ اقصیٰ', 'अज़ान अल-अक़सा', 'Al-Aqsa Adhan'],
        'Meethi Azan': ['میٹھی اذان', 'मीठी अज़ान', 'Sweet Adhan'],
        'Azan 3': ['اذان 3', 'अज़ान 3', 'Adhan 3'],
        'Awaaz band': ['آواز بند', 'आवाज़ बंद', 'Sound off'],
        'Awaaz sunein': ['آواز سنیں', 'आवाज़ सुनें', 'Play sound'],
        'PHONE CALENDAR MEIN AZAN ALARM': ['فون کیلنڈر میں اذان الارم', 'फ़ोन कैलेंडर में अज़ान अलार्म', 'ADHAN ALARM IN PHONE CALENDAR'],
        'Kitne din ka chahiye? Jitna chunenge utna hi banega.': ['کتنے دن کا چاہیے؟ جتنا چنیں گے اتنا ہی بنے گا۔', 'कितने दिन का चाहिए? जितना चुनेंगे उतना ही बनेगा।', 'How many days? It will be created for exactly the days you choose.'],
        '1 din': ['1 دن', '1 दिन', '1 day'], '7 din': ['7 دن', '7 दिन', '7 days'],
        '1 mahina': ['1 مہینہ', '1 महीना', '1 month'], '3 mahine': ['3 مہینے', '3 महीने', '3 months'], '6 mahine': ['6 مہینے', '6 महीने', '6 months'], '1 saal': ['1 سال', '1 साल', '1 year'],
        'Ya apne din likhein:': ['یا اپنے دن لکھیں:', 'या अपने दिन लिखें:', 'Or enter your own days:'],
        'din': ['دن', 'दिन', 'days'],
        'ka alarm banayein': ['کا الارم بنائیں', 'का अलार्म बनाएँ', 'alarm'],
        'Calendar alarm': ['کیلنڈر الارم', 'कैलेंडर अलार्म', 'Calendar alarm'],
        /* ---- Tasbeeh ---- */
        'Aaj': ['آج', 'आज', 'Today'], 'Kul': ['کل', 'कुल', 'Total'], 'Round poore': ['راؤنڈ مکمل', 'राउंड पूरे', 'Rounds done'],
        'Peechhe': ['پیچھے', 'पीछे', 'Undo'], 'Zero': ['زیرو', 'ज़ीरो', 'Reset'], 'Vibration': ['وائبریشن', 'वाइब्रेशन', 'Vibration'],
        'Awaaz': ['آواز', 'आवाज़', 'Sound'], 'Screen on': ['اسکرین آن', 'स्क्रीन ऑन', 'Screen on'], 'Set karein': ['سیٹ کریں', 'सेट करें', 'Set'],
        'jaise 500': ['مثلاً 500', 'जैसे 500', 'e.g. 500'], 'Apna target': ['اپنا ہدف', 'अपना टारगेट', 'Your target'],
        /* ---- Backup ---- */
        'Backup / Restore': ['بیک اپ / ریسٹور', 'बैकअप / रीस्टोर', 'Backup / Restore'],
        'Apna sara progress ek file mein save karein, aur nayi phone par wapas laayein.': ['اپنی ساری پروگریس ایک فائل میں محفوظ کریں، اور نئے فون پر واپس لائیں۔', 'अपनी सारी प्रोग्रेस एक फ़ाइल में सेव करें, और नए फ़ोन पर वापस लाएँ।', 'Save all your progress in one file and bring it back on a new phone.'],
        'Free hai, login ya server ki zaroorat nahi.': ['مفت ہے، لاگ اِن یا سرور کی ضرورت نہیں۔', 'मुफ़्त है, लॉग इन या सर्वर की ज़रूरत नहीं।', 'Free \u2014 no login or server needed.'],
        'Abhi tak backup nahi liya.': ['ابھی تک بیک اپ نہیں لیا۔', 'अभी तक बैकअप नहीं लिया।', 'No backup taken yet.'],
        'Backup file banayein': ['بیک اپ فائل بنائیں', 'बैकअप फ़ाइल बनाएँ', 'Create backup file'],
        'Backup file se restore karein': ['بیک اپ فائل سے ریسٹور کریں', 'बैकअप फ़ाइल से रीस्टोर करें', 'Restore from backup file'],
        'Band karein': ['بند کریں', 'बंद करें', 'Close'],
        /* ---- Exams ---- */
        'Exam ka natija': ['امتحان کا نتیجہ', 'इम्तिहान का नतीजा', 'Exam Result'],
        'Theek hai': ['ٹھیک ہے', 'ठीक है', 'OK'],
        'Certificate ke liye pehle Day 50 tak poore karein!': ['سرٹیفکیٹ کے لیے پہلے دن 50 تک مکمل کریں!', 'सर्टिफ़िकेट के लिए पहले दिन 50 तक पूरे करें!', 'Complete up to Day 50 first for the certificate!'],
        'Kamzor Lafz Revision': ['کمزور الفاظ کی دہرائی', 'कमज़ोर शब्दों की दोहराई', 'Weak Words Revision'],
        '10 sawal • pass/fail nahi, sirf mashq': ['10 سوال • پاس/فیل نہیں، صرف مشق', '10 सवाल • पास/फ़ेल नहीं, सिर्फ़ मश्क़', '10 questions \u2022 no pass/fail, practice only'],
        /* ---- Admin panel, certificate, onboarding ---- */
        'Koi bhi exam jitni baar chahein dekhein. Admin ke exam se progress, XP ya certificate par koi asar nahi padta.': ['کوئی بھی امتحان جتنی بار چاہیں دیکھیں۔ ایڈمن کے امتحان سے پروگریس، XP یا سرٹیفکیٹ پر کوئی اثر نہیں پڑتا۔', 'कोई भी इम्तिहान जितनी बार चाहें देखें। एडमिन के इम्तिहान से प्रोग्रेस, XP या सर्टिफ़िकेट पर कोई असर नहीं पड़ता।', 'View any exam as many times as you like. Admin exams do not affect progress, XP or certificates.'],
        'Exam:': ['امتحان:', 'इम्तिहान:', 'Exam:'],
        'Silver Exam (500 lafz)': ['سلور امتحان (500 الفاظ)', 'सिल्वर इम्तिहान (500 शब्द)', 'Silver Exam (500 words)'],
        'Final / Gold Exam (900 lafz)': ['فائنل / گولڈ امتحان (900 الفاظ)', 'फ़ाइनल / गोल्ड इम्तिहान (900 शब्द)', 'Final / Gold Exam (900 words)'],
        'Kisi din ka exam': ['کسی دن کا امتحان', 'किसी दिन का इम्तिहान', 'Exam for a chosen day'],
        'Din:': ['دن:', 'दिन:', 'Day:'],
        'Sawalon ki ginti (5 se 150):': ['سوالوں کی گنتی (5 سے 150):', 'सवालों की गिनती (5 से 150):', 'Number of questions (5 to 150):'],
        'Pass ka % (1 se 100):': ['پاس کا % (1 سے 100):', 'पास का % (1 से 100):', 'Pass % (1 to 100):'],
        'Sahi jawab hara dikhayein': ['صحیح جواب سبز دکھائیں', 'सही जवाब हरा दिखाएँ', 'Show correct answers in green'],
        'Exam kholein': ['امتحان کھولیں', 'इम्तिहान खोलें', 'Open exam'],
        'Admin Certificate Panel': ['ایڈمن سرٹیفکیٹ پینل', 'एडमिन सर्टिफ़िकेट पैनल', 'Admin Certificate Panel'],
        'Kisi bhi profile ya koi bhi naam ke liye Completion Certificate banayein.': ['کسی بھی پروفائل یا کسی بھی نام کے لیے تکمیل سرٹیفکیٹ بنائیں۔', 'किसी भी प्रोफ़ाइल या किसी भी नाम के लिए पूर्णता सर्टिफ़िकेट बनाएँ।', 'Create a Completion Certificate for any profile or any name.'],
        'Profile chunein:': ['پروفائل چنیں:', 'प्रोफ़ाइल चुनें:', 'Choose a profile:'],
        'Ya koi bhi naam likhein (khali ho to upar wali profile ka naam):': ['یا کوئی بھی نام لکھیں (خالی ہو تو اوپر والی پروفائل کا نام):', 'या कोई भी नाम लिखें (ख़ाली हो तो ऊपर वाली प्रोफ़ाइल का नाम):', 'Or type any name (if empty, the profile above is used):'],
        'Tareekh:': ['تاریخ:', 'तारीख़:', 'Date:'],
        'Silver score (optional, 50 mein se):': ['سلور اسکور (اختیاری، 50 میں سے):', 'सिल्वर स्कोर (वैकल्पिक, 50 में से):', 'Silver score (optional, out of 50):'],
        'Silver (50 Din)': ['سلور (50 دن)', 'सिल्वर (50 दिन)', 'Silver (50 Days)'],
        'Gold (90 Din)': ['گولڈ (90 دن)', 'गोल्ड (90 दिन)', 'Gold (90 Days)'],
        'Chuni hui profile delete karein': ['چنی ہوئی پروفائل ڈیلیٹ کریں', 'चुनी हुई प्रोफ़ाइल डिलीट करें', 'Delete selected profile'],
        'Certificate Preview': ['سرٹیفکیٹ پیش نظارہ', 'सर्टिफ़िकेट प्रीव्यू', 'Certificate Preview'],
        'Share': ['شیئر', 'शेयर', 'Share'],
        'Certificate par chhapne wala naam': ['سرٹیفکیٹ پر چھپنے والا نام', 'सर्टिफ़िकेट पर छपने वाला नाम', 'Name to print on the certificate'],
        'jaise 45 — khali = score nahi likha jayega': ['مثلاً 45 — خالی = اسکور نہیں لکھا جائے گا', 'जैसे 45 — ख़ाली = स्कोर नहीं लिखा जाएगा', 'e.g. 45 \u2014 empty = no score printed'],
        'Fahm-ul-Quran mein khush aamdeed': ['Fahm-ul-Quran میں خوش آمدید', 'Fahm-ul-Quran में ख़ुश आमदीद', 'Welcome to Fahm-ul-Quran'],
        'Quran ke 900 lafz, namaz ki duaein, tajweed — sab ek jagah, aasan Urdu mein. Sirf 10 minute roz, 90 din mein poora course.': ['قرآن کے 900 الفاظ، نماز کی دعائیں، تجوید — سب ایک جگہ، آسان اردو میں۔ صرف 10 منٹ روز، 90 دن میں پورا کورس۔', 'क़ुरआन के 900 शब्द, नमाज़ की दुआएँ, तजवीद — सब एक जगह, आसान उर्दू में। सिर्फ़ 10 मिनट रोज़, 90 दिन में पूरा कोर्स।', '900 Quranic words, prayer duas and tajweed \u2014 all in one place, in easy language. Just 10 minutes a day, a complete course in 90 days.'],
        'Roz 10 lafz, 90 din mein 900': ['روز 10 الفاظ، 90 دن میں 900', 'रोज़ 10 शब्द, 90 दिन में 900', '10 words a day, 900 in 90 days'],
        'Har din 10 naye Quran ke alfaz. Har lafz ke saath mashq, tafseel, aur us ayat ka hawala jisme wo lafz aaya hai. Exam pass karke agla din kholein.': ['ہر دن قرآن کے 10 نئے الفاظ۔ ہر لفظ کے ساتھ مشق، تفصیل، اور اس آیت کا حوالہ جس میں وہ لفظ آیا ہے۔ امتحان پاس کر کے اگلا دن کھولیں۔', 'हर दिन क़ुरआन के 10 नए शब्द। हर शब्द के साथ मश्क़, तफ़सील और उस आयत का हवाला जिसमें वह शब्द आया है। इम्तिहान पास करके अगला दिन खोलें।', '10 new Quranic words every day, each with practice, details and the ayah reference where it appears. Pass the exam to unlock the next day.'],
        'Qari Mishary ki asli awaaz': ['قاری مشاری کی اصلی آواز', 'क़ारी मिशारी की असली आवाज़', 'The real voice of Qari Mishary'],
        'Har lafz, har dua, har ayat — asli Qari ki recording se suno. Robot awaaz nahi, sahi makharij ke saath. Offline bhi sun sakte hain.': ['ہر لفظ، ہر دعا، ہر آیت — اصلی قاری کی ریکارڈنگ سے سنیں۔ روبوٹ آواز نہیں، صحیح مخارج کے ساتھ۔ آف لائن بھی سن سکتے ہیں۔', 'हर शब्द, हर दुआ, हर आयत — असली क़ारी की रिकॉर्डिंग से सुनें। रोबोट की आवाज़ नहीं, सही मख़ारिज के साथ। ऑफ़लाइन भी सुन सकते हैं।', 'Every word, dua and ayah \u2014 listen to a real qari\u2019s recording. No robot voice, with correct makharij. Works offline too.'],
        'Allah aapko ilm se nawaze, samajh ata farmaye, aur amal ki taufeeq de. Ameen. 🤲': ['اللہ آپ کو علم سے نوازے، سمجھ عطا فرمائے، اور عمل کی توفیق دے۔ آمین۔ 🤲', 'अल्लाह आपको इल्म से नवाज़े, समझ अता फ़रमाए और अमल की तौफ़ीक़ दे। आमीन। 🤲', 'May Allah bless you with knowledge, grant you understanding and the ability to act upon it. Ameen. 🤲'],
        'Chalo shuru karein ': ['چلیں شروع کریں', 'चलो शुरू करें', 'Let\u2019s begin'],
        /* ---- Games ---- */
        'Talib': ['طالب', 'तालिब', 'Seeker'], 'Faahim': ['فاہم', 'फ़ाहिम', 'Understanding'],
        'Mutqin': ['متقن', 'मुत्क़िन', 'Proficient'], 'Mahir': ['ماہر', 'माहिर', 'Expert'],
        '10 • Darja:': ['10 • درجہ:', '10 • दर्जा:', '10 \u2022 Level:'],
        'pakka darja (yahan tak ke stars mehfooz) • Stars sirf inaam ke nishan hain, koi paisa nahi': ['پکا درجہ (یہاں تک کے ستارے محفوظ) • ستارے صرف انعام کے نشان ہیں، کوئی پیسہ نہیں', 'पक्का दर्जा (यहाँ तक के सितारे महफ़ूज़) • सितारे सिर्फ़ इनाम के निशान हैं, कोई पैसा नहीं', 'locked level (stars up to here are safe) \u2022 Stars are only reward marks, not money'],
        'Mubarak Ho!': ['مبارک ہو!', 'मुबारक हो!', 'Congratulations!'],
        'Aap jeet gaye! Allah aap ko aur ilm de.': ['آپ جیت گئے! اللہ آپ کو اور علم دے۔', 'आप जीत गए! अल्लाह आपको और इल्म दे।', 'You won! May Allah grant you more knowledge.'],
        'Nasheed Off': ['نشید بند', 'नशीद बंद', 'Nasheed Off'], 'Nasheed': ['نشید', 'नशीद', 'Nasheed'],
        'Aap yahin ruk gaye': ['آپ یہیں رک گئے', 'आप यहीं रुक गए', 'You stopped here'],
        'Afsos, jawab durust nahi tha': ['افسوس، جواب درست نہیں تھا', 'अफ़सोस, जवाब सही नहीं था', 'Sorry, that was not the correct answer'],
        'Afsos, durust jawab ye tha:': ['افسوس، درست جواب یہ تھا:', 'अफ़सोस, सही जवाब यह था:', 'Sorry, the correct answer was:'],
        'MashaAllah! Aap Mahir ban gaye': ['ماشاء اللہ! آپ ماہر بن گئے', 'माशा अल्लाह! आप माहिर बन गए', 'MashaAllah! You became an Expert'],
        'MashaAllah!': ['ماشاء اللہ!', 'माशा अल्लाह!', 'MashaAllah!'],
        'Aapne saare 15 sawal durust kiye.': ['آپ نے سارے 15 سوال درست کیے۔', 'आपने सारे 15 सवाल सही किए।', 'You answered all 15 questions correctly.'],
        'Aapne saare 30 din mukammal kar liye!': ['آپ نے سارے 30 دن مکمل کر لیے!', 'आपने सारे 30 दिन पूरे कर लिए!', 'You completed all 30 days!'],
        'Aapne is round ke saare Sahaba sawal mukammal kiye.': ['آپ نے اس راؤنڈ کے سارے صحابہ کے سوال مکمل کیے۔', 'आपने इस राउंड के सारे सहाबा के सवाल पूरे किए।', 'You completed all the Sahaba questions of this round.'],
        'Saare cards match ho gaye.': ['سارے کارڈز میچ ہو گئے۔', 'सारे कार्ड मैच हो गए।', 'All cards matched.'],
        'Mashaallah! Full Marks!': ['ماشاء اللہ! پورے نمبر!', 'माशा अल्लाह! पूरे नंबर!', 'MashaAllah! Full Marks!'],
        'Achi Koshish!': ['اچھی کوشش!', 'अच्छी कोशिश!', 'Good effort!'],
        'Thodi aur mashq karein, agli baar behtar hoga.': ['تھوڑی اور مشق کریں، اگلی بار بہتر ہو گا۔', 'थोड़ी और मश्क़ करें, अगली बार बेहतर होगा।', 'Practise a little more, next time will be better.'],
        'Naya sawal': ['نیا سوال', 'नया सवाल', 'New question'],
        'XP ke liye login zaroori hai.': ['XP کے لیے لاگ اِن ضروری ہے۔', 'XP के लिए लॉग इन ज़रूरी है।', 'Login is required to earn XP.'],
        'Admin account ko XP nahi milta.': ['ایڈمن اکاؤنٹ کو XP نہیں ملتا۔', 'एडमिन अकाउंट को XP नहीं मिलता।', 'Admin accounts do not earn XP.'],
        'Yahin ruk jayein? Abhi tak ke stars mil jayenge.': ['یہیں رک جائیں؟ ابھی تک کے ستارے مل جائیں گے۔', 'यहीं रुक जाएँ? अभी तक के सितारे मिल जाएँगे।', 'Stop here? You will keep your stars so far.'],
        'Yahin ruk jayein? Abhi tak ka XP mil jayega.': ['یہیں رک جائیں؟ ابھی تک کا XP مل جائے گا۔', 'यहीं रुक जाएँ? अभी तक का XP मिल जाएगा।', 'Stop here? You will keep your XP so far.'],
        /* ---- Quran page ---- */
        'Internet nahi mila. Pehli baar Quran.com se laana padta hai; ek baar khulne ke baad ye hissa offline bhi chalega.': ['انٹرنیٹ نہیں ملا۔ پہلی بار Quran.com سے لانا پڑتا ہے؛ ایک بار کھلنے کے بعد یہ حصہ آف لائن بھی چلے گا۔', 'इंटरनेट नहीं मिला। पहली बार Quran.com से लाना पड़ता है; एक बार खुलने के बाद यह हिस्सा ऑफ़लाइन भी चलेगा।', 'No internet. The first time it must be fetched from Quran.com; once opened, this part also works offline.'],
        'Data Quran.com se, ek baar dekhne ke baad offline bhi chalta hai.': ['ڈیٹا Quran.com سے، ایک بار دیکھنے کے بعد آف لائن بھی چلتا ہے۔', 'डेटा Quran.com से, एक बार देखने के बाद ऑफ़लाइन भी चलता है।', 'Data from Quran.com; works offline after it has been viewed once.'],
        'Mishary Rashid Alafasy': ['مشاری راشد العفاسی', 'मिशारी राशिद अल-अफ़ासी', 'Mishary Rashid Alafasy'],
        'Abdur-Rahman As-Sudais': ['عبد الرحمٰن السدیس', 'अब्दुर्रहमान अस-सुदैस', 'Abdur-Rahman As-Sudais'],
        'Mahmoud Khalil Al-Husary': ['محمود خلیل الحصری', 'महमूद ख़लील अल-हुसरी', 'Mahmoud Khalil Al-Husary'],
        'Abdul Basit (Murattal)': ['عبد الباسط (مرتل)', 'अब्दुल बासित (मुरत्तल)', 'Abdul Basit (Murattal)'],
        'Qari Mishary Alafasy': ['قاری مشاری العفاسی', 'क़ारी मिशारी अल-अफ़ासी', 'Qari Mishary Alafasy'],
        /* ---- Fragments, notes, misc ---- */
        'Menu se install karein': ['مینو سے انسٹال کریں', 'मेन्यू से इंस्टॉल करें', 'Install from the menu'],
        'Abu Hurairah (RA) • Sahih Bukhari o Sahih Muslim': ['ابو ہریرہ (رضی اللہ عنہ) • صحیح بخاری و صحیح مسلم', 'अबू हुरैरा (रज़ि.) • सहीह बुख़ारी व सहीह मुस्लिम', 'Abu Hurairah (RA) \u2022 Sahih al-Bukhari & Sahih Muslim'],
        'usi naam': ['اسی نام', 'उसी नाम', 'same name'],
        'se login karein.': ['سے لاگ اِن کریں۔', 'से लॉग इन करें।', 'to continue.'],
        'se login karein, aapka progress mil jayega.': ['سے لاگ اِن کریں، آپ کی پروگریس مل جائے گی۔', 'से लॉग इन करें, आपकी प्रोग्रेस मिल जाएगी।', 'to get your progress back.'],
        'File khol kar Calendar mein "Add" dabayein — roz 20:00 par alarm bajega': ['فائل کھول کر کیلنڈر میں "Add" دبائیں — روز 20:00 بجے الارم بجے گا', 'फ़ाइल खोलकर कैलेंडर में "Add" दबाएँ — रोज़ 20:00 बजे अलार्म बजेगा', 'Open the file and tap "Add" in Calendar \u2014 the alarm will ring daily at 20:00'],
        'Apna': ['اپنا', 'अपना', 'Custom'],
        'tap karein': ['ٹیپ کریں', 'टैप करें', 'tap']
    };
    var PAT = [
        [/^Day (\d+)$/, ['دن $1', 'दिन $1', 'Day $1']],
        [/^Day (\d+) Exam$/, ['دن $1 کا امتحان', 'दिन $1 का इम्तिहान', 'Day $1 Exam']],
        [/^Lvl (\d+) • (\d+) XP$/, ['لیول $1 • $2 XP', 'लेवल $1 • $2 XP', 'Lvl $1 \u2022 $2 XP']],
        [/^(\d+) \/ (\d+) lafz padhein$/, ['$1 / $2 لفظ پڑھیں', '$1 / $2 शब्द पढ़ें', 'Read $1 / $2 words']],
        [/^(\d+) baar$/, ['$1 بار', '$1 बार', '$1\u00D7']],
        [/^(\d+) XP aur$/, ['مزید $1 XP درکار', '$1 XP और चाहिए', '$1 more XP needed']],
        [/^Aaj (\d+)\/5$/, ['آج $1/5', 'आज $1/5', 'Today $1/5']],
        [/^Poori namaz (\d+) din$/, ['پوری نماز $1 دن', 'पूरी नमाज़ $1 दिन', 'Full prayers: $1 days']],
        [/^(\d+) din$/, ['$1 دن', '$1 दिन', '$1 days']],
        [/^Sawal (\d+)$/, ['سوال $1', 'सवाल $1', 'Question $1']],
        [/^(\d+) sawal • Pass: (\d+)\/(\d+)$/, ['$1 سوال • پاس: $2/$3', '$1 सवाल • पास: $2/$3', '$1 questions \u2022 Pass: $2/$3']],
        [/^(\d+)\/(\d+)\. Aapko (\d+) chahiye\.$/, ['$1/$2۔ آپ کو $3 چاہییں۔', '$1/$2। आपको $3 चाहिए।', '$1/$2. You need $3.']],
        [/^Pehle Day (\d+)[–-](\d+) poore karein!$/, ['پہلے دن $1–$2 مکمل کریں!', 'पहले दिन $1–$2 पूरे करें!', 'Complete Day $1\u2013$2 first!']],
        [/^Kul XP: (\d+)$/, ['کل XP: $1', 'कुल XP: $1', 'Total XP: $1']],
        [/^Darja mukammal: (.+) — XP pakka!$/, ['درجہ مکمل: $1 — XP پکا!', 'दर्जा पूरा: $1 — XP पक्का!', 'Level complete: $1 \u2014 XP locked!']],
        [/^Is phone ki profiles: (.+)$/, ['اس فون کی پروفائلز: $1', 'इस फ़ोन की प्रोफ़ाइलें: $1', 'Profiles on this phone: $1']],
        [/^Aakhri backup: (.+)$/, ['آخری بیک اپ: $1', 'आख़िरी बैकअप: $1', 'Last backup: $1']],
        [/^(\d+) cheezein wapas aa gayin\. App dobara khul rahi hai…$/, ['$1 چیزیں واپس آ گئیں۔ ایپ دوبارہ کھل رہی ہے…', '$1 चीज़ें वापस आ गईं। ऐप दोबारा खुल रही है…', '$1 items restored. The app is reopening\u2026']],
        [/^(\d+) cheezein wapas aa gayin\. Ab apne$/, ['$1 چیزیں واپس آ گئیں۔ اب اپنے', '$1 चीज़ें वापस आ गईं। अब अपने', '$1 items restored. Now log in with your']]
    ];
    var HT = {
        disc: ['⚠️ <b>ضروری:</b> یہ ایپ <b>عالم یا قاری کا متبادل نہیں</b>۔ تجوید، نماز اور دینی احکام کسی مستند استاد سے سیکھیں۔ ایپ صرف سیکھنے میں مدد کے لیے ہے۔ <a href="privacy.html">تفصیل</a>',
               '⚠️ <b>Zaroori:</b> ye app <b>aalim ya qaari ki jagah nahi</b>. Tajweed, namaz aur deeni ahkam kisi mustanad ustad se seekhein. App sirf seekhne mein madad ke liye hai. <a href="privacy.html">Tafseel</a>',
               '⚠️ <b>ज़रूरी:</b> यह ऐप <b>आलिम या क़ारी की जगह नहीं</b> है। तजवीद, नमाज़ और दीनी अहकाम किसी मुस्तनद उस्ताद से सीखें। ऐप सिर्फ़ सीखने में मदद के लिए है। <a href="privacy.html">तफ़सील</a>',
               '⚠️ <b>Important:</b> this app is <b>not a substitute for a scholar or qari</b>. Learn Tajweed, prayer and religious rulings from a qualified teacher. The app is only a learning aid. <a href="privacy.html">Details</a>'],
        gintro: ['قرآن کے الفاظ کے 15 سوال۔ ہر 3 سوال کے بعد ایک <b>درجہ</b> پکا ہو جاتا ہے۔ غلط جواب پر آپ پچھلے پکے درجے کا XP رکھتے ہیں۔ کوئی پیسہ نہیں، صرف <b>علم پوائنٹس (XP)</b>۔',
                 'Quran ke lafzon ke 15 sawal. Har 3 sawal ke baad ek <b>darja</b> pakka ho jaata hai. Galat jawab par aap pichla pakka darja ka XP rakhte hain. Koi paisa nahi, sirf <b>Ilm Points (XP)</b>.',
                 'क़ुरआन के शब्दों के 15 सवाल। हर 3 सवाल के बाद एक <b>दर्जा</b> पक्का हो जाता है। ग़लत जवाब पर आप पिछले पक्के दर्जे का XP रखते हैं। कोई पैसा नहीं, सिर्फ़ <b>इल्म पॉइंट्स (XP)</b>।',
                 '15 questions on Quranic words. After every 3 questions a <b>level</b> is locked in. On a wrong answer you keep the XP of your last locked level. No money involved, only <b>Knowledge Points (XP)</b>.'],
        gmadad: ['✂️ <b>دو غلط ہٹائیں</b>: 2 غلط جواب ہٹ جاتے ہیں<br>👥 <b>حاضرین کی رائے</b>: اندازہ (اصلی لوگ نہیں، صرف مشورہ)<br>📞 <b>استاد سے رجوع</b>: ایک اصلی اشارہ (پڑھنے کا طریقہ / آیت کا حصہ)<br>🔄 <b>سوال تبدیل</b>: نیا سوال، اسی درجے کا',
                 '✂️ <b>Do Ghalat Hatayein</b>: 2 ghalat jawab hat jaate hain<br>👥 <b>Hazireen ki Raay</b>: andaza (asli log nahi, sirf mashwara)<br>📞 <b>Ustad se Rujoo</b>: ek asli ishara (padhne ka tareeqa / ayat ka hissa)<br>🔄 <b>Sawal Tabdeel</b>: naya sawal, usi darje ka',
                 '✂️ <b>दो ग़लत हटाएँ</b>: 2 ग़लत जवाब हट जाते हैं<br>👥 <b>हाज़िरीन की राय</b>: अंदाज़ा (असली लोग नहीं, सिर्फ़ मशवरा)<br>📞 <b>उस्ताद से रुजू</b>: एक असली इशारा (पढ़ने का तरीक़ा / आयत का हिस्सा)<br>🔄 <b>सवाल बदलें</b>: नया सवाल, उसी दर्जे का',
                 '✂️ <b>Remove Two Wrong</b>: two wrong answers are removed<br>👥 <b>Audience Poll</b>: an estimate (not real people, just advice)<br>📞 <b>Ask the Teacher</b>: one genuine hint (how to read / part of the ayah)<br>🔄 <b>Swap Question</b>: a new question of the same level'],
        gnote: ['یہ گیم صرف سیکھنے میں مدد کے لیے ہے۔ دینی باتیں مستند استاد سے سیکھیں۔',
                'Ye game sirf seekhne mein madad ke liye hai. Deeni baatein mustanad ustad se seekhein.',
                'यह गेम सिर्फ़ सीखने में मदद के लिए है। दीनी बातें मुस्तनद उस्ताद से सीखें।',
                'This game is only a learning aid. Learn religious matters from a qualified teacher.'],
        instsp: ['<ol><li>براؤزر کا مینو <b>⋮</b> کھولیں</li><li><b>"Install app"</b> یا <b>"Add to Home screen"</b> چنیں</li></ol>',
               '<ol><li>Browser ka menu <b>⋮</b> kholein</li><li><b>"Install app"</b> ya <b>"Add to Home screen"</b> chunein</li></ol>',
               '<ol><li>ब्राउज़र का मेन्यू <b>⋮</b> खोलें</li><li><b>"Install app"</b> या <b>"Add to Home screen"</b> चुनें</li></ol>',
               '<ol><li>Open the browser menu <b>⋮</b></li><li>Choose <b>"Install app"</b> or <b>"Add to Home screen"</b></li></ol>'],
        nsn1: ['الارم میں وہی وقت جائے گا جو اوپر باکسز میں ہے (آپ کا اپنا وقت، ہر دن وہی)۔ ایونٹ کے نام میں وقت لکھا ہوتا ہے۔ کیلنڈر ایپ کی سیٹنگز میں نوٹیفکیشن <b>"ایونٹ کے وقت پر"</b> رکھیں — کچھ ایپس 10 منٹ پہلے بتا دیتی ہیں۔ کیلنڈر صرف نوٹیفکیشن دیتا ہے، اذان کی آواز نہیں۔',
               'Alarm mein wahi waqt jayega jo upar boxes mein hai (aapka khud ka waqt, har din wahi). Event ke naam mein waqt likha hota hai. Calendar app ki Settings mein notification <b>"event ke waqt par"</b> rakhein — kuch apps 10 min pehle bata deti hain. Calendar sirf notification deta hai, azan ki awaaz nahi.',
               'अलार्म में वही वक़्त जाएगा जो ऊपर बॉक्स में है (आपका अपना वक़्त, हर दिन वही)। इवेंट के नाम में वक़्त लिखा होता है। कैलेंडर ऐप की सेटिंग्स में नोटिफ़िकेशन <b>"इवेंट के वक़्त पर"</b> रखें — कुछ ऐप्स 10 मिनट पहले बता देती हैं। कैलेंडर सिर्फ़ नोटिफ़िकेशन देता है, अज़ान की आवाज़ नहीं।',
               'The alarm uses the same times shown in the boxes above (your own times, the same every day). The event name contains the time. In your Calendar app settings, set the notification to <b>"at time of event"</b> — some apps notify 10 minutes early. Calendar gives only a notification, not the sound of the Adhan.'],
        nsn2: ['الارم میں وہی وقت جائے گا جو اوپر باکسز میں ہے (لوکیشن کے حساب سے ہر دن کا اصل وقت)۔ ایونٹ کے نام میں وقت لکھا ہوتا ہے۔ کیلنڈر ایپ کی سیٹنگز میں نوٹیفکیشن <b>"ایونٹ کے وقت پر"</b> رکھیں — کچھ ایپس 10 منٹ پہلے بتا دیتی ہیں۔ کیلنڈر صرف نوٹیفکیشن دیتا ہے، اذان کی آواز نہیں۔',
               'Alarm mein wahi waqt jayega jo upar boxes mein hai (location ke hisaab se har din ka asli waqt). Event ke naam mein waqt likha hota hai. Calendar app ki Settings mein notification <b>"event ke waqt par"</b> rakhein — kuch apps 10 min pehle bata deti hain. Calendar sirf notification deta hai, azan ki awaaz nahi.',
               'अलार्म में वही वक़्त जाएगा जो ऊपर बॉक्स में है (लोकेशन के हिसाब से हर दिन का असली वक़्त)। इवेंट के नाम में वक़्त लिखा होता है। कैलेंडर ऐप की सेटिंग्स में नोटिफ़िकेशन <b>"इवेंट के वक़्त पर"</b> रखें — कुछ ऐप्स 10 मिनट पहले बता देती हैं। कैलेंडर सिर्फ़ नोटिफ़िकेशन देता है, अज़ान की आवाज़ नहीं।',
               'The alarm uses the same times shown in the boxes above (the actual time for each day based on your location). The event name contains the time. In your Calendar app settings, set the notification to <b>"at time of event"</b> — some apps notify 10 minutes early. Calendar gives only a notification, not the sound of the Adhan.'],
        nsn3: ['🔋 اگر اذان وقت پر نہ بجتی ہو تو فون کی سیٹنگز → بیٹری میں "Fahm-ul-Quran" کو <b>Unrestricted / Autostart</b> دیں (Xiaomi, Oppo, Vivo, Realme میں ضروری)۔',
               '🔋 Agar azan waqt par na bajti ho to phone ki Settings → Battery mein "Fahm-ul-Quran" ko <b>Unrestricted / Autostart</b> dein (Xiaomi, Oppo, Vivo, Realme mein zaroori).',
               '🔋 अगर अज़ान वक़्त पर न बजती हो तो फ़ोन की सेटिंग्स → बैटरी में "Fahm-ul-Quran" को <b>Unrestricted / Autostart</b> दें (Xiaomi, Oppo, Vivo, Realme में ज़रूरी)।',
               '🔋 If the Adhan does not play on time, go to your phone Settings → Battery and give "Fahm-ul-Quran" <b>Unrestricted / Autostart</b> (needed on Xiaomi, Oppo, Vivo, Realme).'],
        nsn4: ['ℹ️ ایپ بند ہو تب بھی یاد دلانے کے لیے اوپر والا <b>کیلنڈر الارم</b> لگائیں۔ ایپ بند ہونے پر اذان کی آواز کے لیے Android ایپ انسٹال کریں۔',
               'ℹ️ App band ho tab bhi yaad dilane ke liye upar wala <b>Calendar alarm</b> lagayein. App band hone par azan ki awaaz ke liye Android app install karein.',
               'ℹ️ ऐप बंद हो तब भी याद दिलाने के लिए ऊपर वाला <b>कैलेंडर अलार्म</b> लगाएँ। ऐप बंद होने पर अज़ान की आवाज़ के लिए Android ऐप इंस्टॉल करें।',
               'ℹ️ To be reminded even when the app is closed, set the <b>Calendar alarm</b> above. For the Adhan sound while the app is closed, install the Android app.'],
        fqbtip: ['ٹپ: فائل کو واٹس ایپ “اپنے آپ کو پیغام” / گوگل ڈرائیو / ای میل پر رکھ لیں۔ فون بدلتے وقت وہی فائل ریسٹور کریں، پھر اپنے <b>اسی نام</b> سے لاگ اِن کریں۔',
               'Tip: file ko WhatsApp “Mujhe message” / Google Drive / email par rakh lein. Phone badalte waqt wahi file restore karein, phir apne <b>usi naam</b> se login karein.',
               'टिप: फ़ाइल को व्हाट्सऐप “ख़ुद को मैसेज” / गूगल ड्राइव / ईमेल पर रख लें। फ़ोन बदलते वक़्त वही फ़ाइल रीस्टोर करें, फिर अपने <b>उसी नाम</b> से लॉग इन करें।',
               'Tip: keep the file on WhatsApp “Message yourself” / Google Drive / email. When you change phones, restore that same file, then log in with the <b>same name</b>.'],
        asnote: ['99 ناموں کی تفصیلی فہرست ترمذی اور ابن ماجہ کی روایتوں میں آتی ہے (ولید بن مسلم کے طریق سے)۔ علماء کا اس پر اختلاف ہے کہ یہ تفصیلی فہرست نبی ﷺ کے الفاظ ہیں یا کسی راوی کا اضافہ، اس لیے یہاں <b>مشہور فہرست</b> دی گئی ہے۔ اللہ کے نام 99 تک محدود نہیں۔ "احصاء" (یاد کرنا) کے معنی علماء نے گن لینا، یاد کرنا، سمجھنا اور تقاضے پر عمل کرنا بھی بیان کیے ہیں۔ کچھ نام جوڑے کی شکل میں لیے جاتے ہیں (جیسے المعز / المذل، النافع / الضار)، اکیلے نہیں۔',
               '99 naamon ki tafseeli fehrist Tirmidhi aur Ibn Majah ki riwayaton mein aati hai (Walid bin Muslim ke tareeq se). Ulama ka is par ikhtilaf hai ke ye tafseeli fehrist Nabi ﷺ ke alfaaz hain ya kisi raawi ka izafa, is liye yahan <b>mashhoor fehrist</b> di gayi hai. Allah ke naam 99 tak mehdood nahi. "Ihsa" (yaad karna) ke maani ulama ne gin lena, yaad karna, samajhna aur taqaze par amal karna bhi bayan kiye hain. Kuch naam jode ki shakl mein liye jate hain (jaise Al-Mu\'izz / Al-Mudhill, An-Nafi\' / Ad-Darr), akele nahi.',
               '99 नामों की तफ़सीली फ़ेहरिस्त तिरमिज़ी और इब्ने माजा की रिवायतों में आती है (वलीद बिन मुस्लिम के तरीक़ से)। उलमा का इस पर इख़्तिलाफ़ है कि यह तफ़सीली फ़ेहरिस्त नबी ﷺ के अल्फ़ाज़ हैं या किसी रावी का इज़ाफ़ा, इसलिए यहाँ <b>मशहूर फ़ेहरिस्त</b> दी गई है। अल्लाह के नाम 99 तक महदूद नहीं। "इह्सा" (याद करना) के मानी उलमा ने गिन लेना, याद करना, समझना और तक़ाज़े पर अमल करना भी बयान किए हैं। कुछ नाम जोड़े की शक्ल में लिए जाते हैं (जैसे अल-मुइज़्ज़ / अल-मुज़िल्ल, अन-नाफ़ि / अद-दार्र), अकेले नहीं।',
               'The detailed list of the 99 names appears in the narrations of Tirmidhi and Ibn Majah (via Walid ibn Muslim). Scholars differ on whether this detailed list is the words of the Prophet ﷺ or an addition by a narrator, so the <b>well-known list</b> is given here. Allah’s names are not limited to 99. Scholars have also explained “ihsa” (memorising) as counting, memorising, understanding and acting upon what the names require. Some names are taken as pairs (such as Al-Mu’izz / Al-Mudhill, An-Nafi’ / Ad-Darr), not alone.']
    };
    var NOAUTO = /arkan|arabic-grammar|privacy|terms|kill/.test(location.pathname);
    var REC = new WeakMap(), AREC = new WeakMap(), obs = null;
    var PRE = /^[^A-Za-z0-9(\u0600-\u06FF\u0900-\u097F]+/, CNT = /(\s*\(\d+(?:\/\d+)?\):?|\s*\u25BE)\s*$/;
    var ATTRS = ['title', 'placeholder', 'aria-label'];
    function idx3(v) { return v === 'u' ? 0 : v === 'hi' ? 1 : v === 'en' ? 2 : -1; }
    function tr(txt, i) {
        var m = /^(\s*)([\s\S]*?)(\s*)$/.exec(txt), core = m[2].replace(/\s+/g, ' ');
        if (!core) return null;
        var pre = '', suf = '', p = PRE.exec(core), s, out = null, hit;
        if (p) { pre = p[0]; core = core.slice(pre.length); }
        if ((s = CNT.exec(core))) { suf = s[0]; core = core.slice(0, s.index); }
        if ((hit = D[core])) out = hit[i];
        else for (var k = 0; k < PAT.length; k++) {
            var r = PAT[k][0].exec(core);
            if (r) { out = PAT[k][1][i].replace(/\$(\d)/g, function (_, n) { return r[n]; }); break; }
        }
        return out == null ? null : m[1] + pre + out + suf + m[3];
    }
    function doNode(n, i) {
        var rec = REC.get(n), cur = n.nodeValue;
        if (rec) { if (cur !== rec.s) rec.o = cur; }
        else { if (i < 0 || !/[A-Za-z]/.test(cur)) return; rec = { o: cur }; REC.set(n, rec); }
        var t = i < 0 ? null : tr(rec.o, i), nv = t == null ? rec.o : t;
        if (nv !== cur) n.nodeValue = nv;
        rec.s = nv;
    }
    function skipEl(p) {
        return !p || /^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA|CODE|TITLE)$/.test(p.tagName) || !!(p.closest && p.closest('[data-lb],[data-lbh],[data-noi18n],.ar,[contenteditable]'));
    }
    function doAttrs(el, i) {
        if (skipEl(el)) return;
        var R = AREC.get(el);
        for (var k = 0; k < ATTRS.length; k++) {
            var a = ATTRS[k], cur = el.getAttribute(a); if (cur == null) continue;
            var rec = R && R[a];
            if (rec) { if (cur !== rec.s) rec.o = cur; }
            else { if (i < 0 || !/[A-Za-z]/.test(cur)) continue; if (!R) { R = {}; AREC.set(el, R); } rec = R[a] = { o: cur }; }
            var t = i < 0 ? null : tr(rec.o, i), nv = t == null ? rec.o : t;
            if (nv !== cur) el.setAttribute(a, nv);
            rec.s = nv;
        }
    }
    function doH(el) {
        var hv = HT[el.getAttribute('data-lbh')]; if (!hv) return;
        var x = hv[LIST.indexOf(get())]; if (x != null && el.innerHTML !== x) el.innerHTML = x;
    }
    function walk(root, i) {
        if (root.nodeType === 3) { if (!skipEl(root.parentElement)) doNode(root, i); return; }
        if (root.nodeType !== 1) return;
        var cache = new Map(), w = document.createTreeWalker(root, 4), n;
        while ((n = w.nextNode())) {
            var p = n.parentElement, sk = cache.get(p);
            if (sk === undefined) { sk = skipEl(p); cache.set(p, sk); }
            if (!sk) doNode(n, i);
        }
        if (root.hasAttribute && root.hasAttribute('data-lbh')) doH(root);
        var hh = root.querySelectorAll('[data-lbh]');
        for (var q = 0; q < hh.length; q++) doH(hh[q]);
        if (root.hasAttribute && !(root.id === 'qiSprite')) doAttrs(root, i);
        var els = root.querySelectorAll('[title],[placeholder],[aria-label]');
        for (var j = 0; j < els.length; j++) doAttrs(els[j], i);
    }
    function auto() {
        if (NOAUTO || !document.body) return;
        var i = idx3(get());
        walk(document.body, i);
        if (!obs && i >= 0 && window.MutationObserver) {
            obs = new MutationObserver(function (list) {
                var j = idx3(get()); if (j < 0) return;
                for (var a = 0; a < list.length; a++) {
                    var m = list[a];
                    if (m.type === 'childList') { for (var b = 0; b < m.addedNodes.length; b++) walk(m.addedNodes[b], j); }
                    else if (m.type === 'characterData') { if (!skipEl(m.target.parentElement)) doNode(m.target, j); }
                    else if (m.type === 'attributes') doAttrs(m.target, j);
                }
            });
            obs.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS });
        }
    }
    /*@AUTO_END*/
    function paint() {
        var v = get(), l = LAB[v];
        var bs = document.querySelectorAll('[data-qs-lang]');
        for (var i = 0; i < bs.length; i++) { bs[i].textContent = l; bs[i].setAttribute('aria-label', 'Zubaan: ' + l); }
        var ls = document.querySelectorAll('[data-lb]');
        for (var j = 0; j < ls.length; j++) { var x = t(ls[j].getAttribute('data-lb'), v); if (ls[j].textContent !== x) ls[j].textContent = x; }
        var hs = document.querySelectorAll('[data-lbh]');
        for (var h = 0; h < hs.length; h++) { var hv = HT[hs[h].getAttribute('data-lbh')]; if (hv) { var hx = hv[LIST.indexOf(v)]; if (hs[h].innerHTML !== hx) hs[h].innerHTML = hx; } }
        document.documentElement.setAttribute('data-mlang', v);
        auto();
    }
    function fire(v) { for (var i = 0; i < cbs.length; i++) { try { cbs[i](v); } catch (e) {} } }
    function set(v) {
        if (LIST.indexOf(v) < 0) v = 'u';
        wr(KEY, v); wr('meaningLang', v); paint(); fire(v);
    }
    function cycle() { set(LIST[(LIST.indexOf(get()) + 1) % LIST.length]); }
    function pick(o, base) { var v = get(); return v === 'u' ? o[base] : (o[base + '_' + v] || o[base]); }
    window.QSLang = { list: LIST, labels: LAB, t: t, tr: function (x, v) { var i = idx3(v || get()); return i < 0 ? x : (tr(x, i) || x); }, get: get, set: set, cycle: cycle, onChange: function (fn) { cbs.push(fn); }, pick: pick, paint: paint };

    /* alert / confirm ke seedhe (poore) jumle bhi chuni hui zubaan mein */
    ['alert', 'confirm'].forEach(function (n) { var o = window[n]; if (typeof o !== 'function') return; window[n] = function (m) { try { m = window.QSLang.tr(String(m)); } catch (e) {} return o.call(window, m); }; });    window.addEventListener('storage', function (e) { if (e.key === KEY) { paint(); fire(get()); } });
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', paint); else paint();
})();
;

/* ───────────── onboarding.js ───────────── */
// ==========================================================
// onboarding.js — Fahm-ul-Quran welcome slides (sirf pehli baar)
// Install: index.html ke <head> mein:
//   <script src="onboarding.js"></script>
// Use: login ke baad QSOnboarding.show() call karein
// Reset: browser console mein QSOnboarding.reset()
// ==========================================================
(function () {
    'use strict';
    var KEY = 'qsOnboarded_v1';
    function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
    function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

    var SLIDES = [
        {
            icon: 'بِسْمِ اللَّهِ',
            isArabic: true,
            title: 'Fahm-ul-Quran mein khush aamdeed',
            text: 'Quran ke 900 lafz, namaz ki duaein, tajweed — sab ek jagah, aasan Urdu mein. Sirf 10 minute roz, 90 din mein poora course.'
        },
        {
            icon: '📚',
            title: 'Roz 10 lafz, 90 din mein 900',
            text: 'Har din 10 naye Quran ke alfaz. Har lafz ke saath mashq, tafseel, aur us ayat ka hawala jisme wo lafz aaya hai. Exam pass karke agla din kholein.'
        },
        {
            icon: '🎙️',
            title: 'Qari Mishary ki asli awaaz',
            text: 'Har lafz, har dua, har ayat — asli Qari ki recording se suno. Robot awaaz nahi, sahi makharij ke saath. Offline bhi sun sakte hain.'
        },
        {
            icon: '🤲',
            title: 'Chalo shuru karein',
            text: 'Allah aapko ilm se nawaze, samajh ata farmaye, aur amal ki taufeeq de. Ameen. 🤲'
        }
    ];

    function show(callback) {
        if (lsGet(KEY) === '1') { if (callback) callback(); return; }

        var current = 0;

        // ---------- CSS ----------
        var css = document.createElement('style');
        css.textContent = `
        #qsOnb {
            position: fixed; inset: 0; z-index: 2147483600;
            background: radial-gradient(120% 90% at 50% 0%, #17614B 0%, #0A2E24 70%);
            color: #fff; display: flex; flex-direction: column;
            font-family: 'Figtree', system-ui, -apple-system, sans-serif;
            overflow: hidden; opacity: 1;
        }
        #qsOnb::before {
            content: ""; position: absolute; inset: 0;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cg fill='none' stroke='%23D9B65A' stroke-opacity='.08' stroke-width='1'%3E%3Crect x='14' y='14' width='28' height='28'/%3E%3Crect x='14' y='14' width='28' height='28' transform='rotate(45 28 28)'/%3E%3C/g%3E%3C/svg%3E");
            pointer-events: none;
        }
        .qs-onb-top {
            position: relative; z-index: 1;
            display: flex; justify-content: space-between; align-items: center;
            padding: calc(16px + env(safe-area-inset-top, 0)) 20px 8px;
        }
        .qs-onb-logo {
            width: 40px; height: 40px; border-radius: 12px;
            border: 1.5px solid #D9B65A; object-fit: cover;
            background: #0A2E24;
        }
        .qs-onb-skip {
            background: rgba(255,255,255,.14); border: none; color: #fff;
            padding: 8px 16px; border-radius: 20px; font-size: 13px;
            font-weight: 600; cursor: pointer; font-family: inherit;
            min-height: 36px;
        }
        .qs-onb-skip:active { background: rgba(255,255,255,.28); }
        .qs-onb-slides {
            flex: 1; position: relative; z-index: 1;
            display: flex; overflow: hidden;
        }
        .qs-onb-slide {
            flex: 0 0 100%; display: flex; flex-direction: column;
            align-items: center; justify-content: center;
            padding: 20px 24px 30px; text-align: center;
            transition: transform .5s cubic-bezier(.2,.9,.3,1);
        }
        .qs-onb-ic {
            width: 156px; height: 156px; border-radius: 50%;
            background: radial-gradient(circle at 30% 30%, rgba(217,182,90,.25), rgba(217,182,90,.05));
            border: 2px solid rgba(217,182,90,.5);
            display: flex; align-items: center; justify-content: center;
            font-size: 72px; margin-bottom: 30px;
            box-shadow: 0 20px 50px rgba(0,0,0,.35);
            animation: qsOnbPulse 3s ease-in-out infinite;
            flex: 0 0 auto;
        }
        .qs-onb-ic.ar {
            font-family: 'Amiri', serif; font-size: 32px; color: #D9B65A;
            direction: rtl; line-height: 1.7; padding: 16px;
            font-weight: 700;
        }
        @keyframes qsOnbPulse {
            0%, 100% { transform: translateY(0); box-shadow: 0 20px 50px rgba(0,0,0,.35); }
            50% { transform: translateY(-6px); box-shadow: 0 26px 60px rgba(0,0,0,.45); }
        }
        .qs-onb-title {
            font-size: 24px; font-weight: 800; line-height: 1.3;
            margin: 0 0 14px; color: #fff; max-width: 420px;
            font-family: 'Amiri', serif; letter-spacing: .2px;
        }
        .qs-onb-text {
            font-size: 15.5px; line-height: 1.75; color: rgba(255,255,255,.85);
            max-width: 400px; margin: 0;
        }
        .qs-onb-bottom {
            position: relative; z-index: 1;
            padding: 16px 24px calc(28px + env(safe-area-inset-bottom, 0));
            display: flex; flex-direction: column; gap: 16px; align-items: center;
        }
        .qs-onb-dots {
            display: flex; gap: 8px; justify-content: center; align-items: center;
        }
        .qs-onb-dots span {
            width: 8px; height: 8px; border-radius: 50%;
            background: rgba(255,255,255,.28);
            transition: all .3s;
        }
        .qs-onb-dots span.on {
            width: 28px; border-radius: 4px; background: #D9B65A;
        }
        .qs-onb-btns {
            display: flex; gap: 10px; width: 100%; max-width: 460px;
        }
        .qs-onb-btn {
            flex: 1; min-height: 52px; border: none; border-radius: 14px;
            font-size: 16px; font-weight: 700; cursor: pointer;
            font-family: inherit; transition: transform .15s;
            display: flex; align-items: center; justify-content: center; gap: 6px;
        }
        .qs-onb-btn:active { transform: scale(.97); }
        .qs-onb-btn.next {
            background: linear-gradient(180deg, #E3C36E, #C79E3F);
            color: #2A2008; box-shadow: 0 8px 20px rgba(227,195,110,.35);
        }
        .qs-onb-btn.back {
            flex: 0 0 88px; background: rgba(255,255,255,.14); color: #fff;
        }
        .qs-onb-btn.back:disabled { opacity: .35; cursor: default; }
        @media (prefers-reduced-motion: reduce) {
            .qs-onb-ic { animation: none; }
            .qs-onb-slide { transition: none; }
            #qsOnb { transition: none !important; }
        }
        `;
        document.head.appendChild(css);

        // ---------- HTML ----------
        var el = document.createElement('div');
        el.id = 'qsOnb';
        var slidesHTML = SLIDES.map(function (s) {
            return '<div class="qs-onb-slide">' +
                '<div class="qs-onb-ic' + (s.isArabic ? ' ar' : '') + '">' + s.icon + '</div>' +
                '<h2 class="qs-onb-title">' + s.title + '</h2>' +
                '<p class="qs-onb-text">' + s.text + '</p>' +
                '</div>';
        }).join('');

        el.innerHTML =
            '<div class="qs-onb-top">' +
                '<img class="qs-onb-logo" src="icon-192.png" alt="" onerror="this.style.display=\'none\'">' +
                '<button class="qs-onb-skip" id="qsOnbSkip" type="button">Skip</button>' +
            '</div>' +
            '<div class="qs-onb-slides" id="qsOnbSlides">' + slidesHTML + '</div>' +
            '<div class="qs-onb-bottom">' +
                '<div class="qs-onb-dots" id="qsOnbDots">' +
                    SLIDES.map(function (_, i) { return '<span class="' + (i === 0 ? 'on' : '') + '" data-i="' + i + '"></span>'; }).join('') +
                '</div>' +
                '<div class="qs-onb-btns">' +
                    '<button class="qs-onb-btn back" id="qsOnbBack" type="button" disabled>←</button>' +
                    '<button class="qs-onb-btn next" id="qsOnbNext" type="button">Agla →</button>' +
                '</div>' +
            '</div>';

        document.body.appendChild(el);
        document.documentElement.style.overflow = 'hidden';

        var slides = document.getElementById('qsOnbSlides');
        var dots = document.querySelectorAll('#qsOnbDots span');
        var nextBtn = document.getElementById('qsOnbNext');
        var backBtn = document.getElementById('qsOnbBack');
        var skipBtn = document.getElementById('qsOnbSkip');

        function go(i) {
            current = Math.max(0, Math.min(SLIDES.length - 1, i));
            slides.style.transform = 'translateX(-' + (current * 100) + '%)';
            dots.forEach(function (d, k) { d.classList.toggle('on', k === current); });
            backBtn.disabled = current === 0;
            nextBtn.textContent = current === SLIDES.length - 1 ? '🤲 Shuru Karein' : 'Agla →';
        }

        function done() {
            lsSet(KEY, '1');
            el.style.transition = 'opacity .35s';
            el.style.opacity = '0';
            setTimeout(function () {
                if (el.parentNode) el.remove();
                document.documentElement.style.overflow = '';
                if (callback) callback();
            }, 350);
        }

        nextBtn.addEventListener('click', function () {
            if (current === SLIDES.length - 1) done();
            else go(current + 1);
        });
        backBtn.addEventListener('click', function () { if (current > 0) go(current - 1); });
        skipBtn.addEventListener('click', done);

        // Swipe support
        var sx = 0, sy = 0, drag = false;
        slides.addEventListener('touchstart', function (e) {
            var t = e.touches[0]; sx = t.clientX; sy = t.clientY; drag = true;
        }, { passive: true });
        slides.addEventListener('touchend', function (e) {
            if (!drag) return;
            drag = false;
            var t = e.changedTouches[0];
            var dx = t.clientX - sx, dy = t.clientY - sy;
            if (Math.abs(dx) > 50 && Math.abs(dy) < 60) {
                if (dx < 0) go(current + 1);
                else go(current - 1);
            }
        }, { passive: true });

        // Keyboard (desktop)
        document.addEventListener('keydown', function (e) {
            if (!document.getElementById('qsOnb')) return;
            if (e.key === 'ArrowRight') { if (current < SLIDES.length - 1) go(current + 1); }
            else if (e.key === 'ArrowLeft') { if (current > 0) go(current - 1); }
            else if (e.key === 'Escape') done();
        });
    }

    window.QSOnboarding = {
        show: show,
        reset: function () { try { localStorage.removeItem(KEY); } catch (e) {} },
        hasSeen: function () { return lsGet(KEY) === '1'; }
    };
})();
;

/* ───────────── backup.js ───────────── */
// ==========================================
// backup.js — Progress Backup / Restore (bina login, bina server)
// - Poora progress (sab profiles, XP, streak, exam, namaz, favourites, theme...) ek .json file mein
// - Nayi phone par wahi file restore karein, phir apne naam se login karein
// - Data kisi server par nahi jaata
// Use: FQBackup.open()   (Backup / Restore wali window)
// ==========================================
(function () {
    'use strict';

    var APP_ID = 'Fahm-ul-Quran';
    var FORMAT = 1;
    // Ye keys backup mein nahi jaatin: login session, aur cache/andar ki cheezein
    var SKIP_EXACT = { isLoggedIn: 1, userRole: 1, userId: 1, activeProfile: 1 };
    var SKIP_PREFIX = ['qariCache', 'fq_'];
    var LAST_KEY = 'fq_lastBackup';
    var SINCE_KEY = 'fq_bkSince';
    var NAG_KEY = 'fq_bkNagAt';
    var DAY = 86400000;

    function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
    function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

    function skipKey(k) {
        if (SKIP_EXACT[k]) return true;
        for (var i = 0; i < SKIP_PREFIX.length; i++) if (k.indexOf(SKIP_PREFIX[i]) === 0) return true;
        return false;
    }

    // Chhota checksum (file adhoori ya kharab ho to pakad lein)
    function checksum(str) {
        var h = 0x811c9dc5;
        for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = (h * 16777619) >>> 0; }
        return h.toString(16);
    }

    function readProfiles(src) {
        try { var v = JSON.parse(src); return Array.isArray(v) ? v.filter(function (p) { return p && p.id && p.name; }) : []; }
        catch (e) { return []; }
    }

    // ---------- Export ----------
    function collect() {
        var data = {};
        try {
            for (var i = 0; i < localStorage.length; i++) {
                var k = localStorage.key(i);
                if (k && !skipKey(k)) data[k] = localStorage.getItem(k);
            }
        } catch (e) {}
        return data;
    }

    function buildBackup() {
        var data = collect();
        return {
            app: APP_ID,
            format: FORMAT,
            created: new Date().toISOString(),
            profiles: readProfiles(data.profiles).map(function (p) { return p.name; }),
            check: checksum(JSON.stringify(data)),
            data: data
        };
    }

    function hasProgress() {
        try {
            for (var i = 0; i < localStorage.length; i++) {
                var k = localStorage.key(i);
                if (k && k.indexOf('p_') === 0) return true;
            }
        } catch (e) {}
        return false;
    }

    function fileName() {
        var d = new Date();
        function p(n) { return (n < 10 ? '0' : '') + n; }
        return 'Fahm-ul-Quran-backup-' + d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()) + '.json';
    }

    function markBackedUp() { lsSet(LAST_KEY, String(Date.now())); }

    function saveFile(mode) {
        if (!hasProgress()) { say('ℹ️ Abhi backup karne layak progress nahi hai. Pehle thoda sabaq karein.', 'warn'); return; }
        var json = JSON.stringify(buildBackup());
        var name = fileName();
        var blob = new Blob([json], { type: 'application/json' });

        // Android app (WebView): seedha Downloads mein
        if (mode !== 'share' && window.AndroidNS && typeof window.AndroidNS.saveDataUrl === 'function') {
            var fr = new FileReader();
            fr.onloadend = function () { try { window.AndroidNS.saveDataUrl(fr.result, name); markBackedUp(); render(); } catch (e) { say('❌ Backup save nahi ho saka.', 'err'); } };
            fr.readAsDataURL(blob);
            return;
        }

        // Share (WhatsApp / Drive / Files)
        if (mode === 'share') {
            try {
                var f = new File([blob], name, { type: 'application/json' });
                if (navigator.canShare && navigator.canShare({ files: [f] })) {
                    navigator.share({ files: [f], title: 'Fahm-ul-Quran backup' })
                        .then(function () { markBackedUp(); render(); })
                        .catch(function (e) { if (e && e.name !== 'AbortError') say('❌ Share nahi ho saka. "Download" try karein.', 'err'); });
                    return;
                }
            } catch (e) {}
            say('ℹ️ Is device par share nahi chal raha. "Download" dabayein.', 'warn');
            return;
        }

        // Aam browser: download
        try {
            var url = URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = url; a.download = name; a.style.display = 'none';
            document.body.appendChild(a); a.click();
            setTimeout(function () { URL.revokeObjectURL(url); a.remove(); }, 4000);
            markBackedUp();
            say('✅ Backup file ban gayi: ' + name + '\nIse kisi safe jagah rakhein (Drive / WhatsApp / email).', 'ok');
            render();
        } catch (e) { say('❌ Backup file nahi ban saki.', 'err'); }
    }

    // ---------- Restore ----------
    var pending = null; // parse ho chuki file

    function parseBackup(text) {
        var obj;
        try { obj = JSON.parse(text); } catch (e) { return { err: 'Ye file sahi backup nahi lagti (padhi nahi ja saki).' }; }
        if (!obj || obj.app !== APP_ID || typeof obj.data !== 'object' || obj.data === null || Array.isArray(obj.data))
            return { err: 'Ye Fahm-ul-Quran ki backup file nahi hai.' };
        if (obj.format > FORMAT) return { err: 'Ye backup naye version ki hai. Pehle app update karein.' };
        var keys = Object.keys(obj.data);
        for (var i = 0; i < keys.length; i++) {
            if (typeof obj.data[keys[i]] !== 'string' || keys[i].length > 200)
                return { err: 'Backup file kharab hai.' };
        }
        if (obj.check && obj.check !== checksum(JSON.stringify(obj.data)))
            return { err: 'Backup file adhoori ya badli hui hai (check match nahi hua). Dobara banayi hui file use karein.' };
        if (!keys.some(function (k) { return k.indexOf('p_') === 0; }))
            return { err: 'Is backup mein koi progress nahi mila.' };
        return { ok: obj };
    }

    function applyRestore(obj) {
        var data = obj.data;
        // Profiles: purani + backup wali, id ke hisaab se mila do
        var local = readProfiles(lsGet('profiles'));
        var incoming = readProfiles(data.profiles);
        var seen = {}; var merged = [];
        incoming.concat(local).forEach(function (p) { if (!seen[p.id]) { seen[p.id] = 1; merged.push(p); } });

        var count = 0;
        Object.keys(data).forEach(function (k) {
            if (skipKey(k) || k === 'profiles') return;
            lsSet(k, data[k]); count++;
        });
        lsSet('profiles', JSON.stringify(merged));
        return count;
    }

    function pickFile() {
        var inp = document.createElement('input');
        inp.type = 'file';
        inp.accept = '.json,application/json,text/plain,*/*';
        inp.style.display = 'none';
        inp.onchange = function () {
            var f = inp.files && inp.files[0];
            inp.remove();
            if (!f) return;
            if (f.size > 20 * 1024 * 1024) { say('❌ File bahut badi hai.', 'err'); return; }
            var fr = new FileReader();
            fr.onload = function () {
                var r = parseBackup(String(fr.result));
                if (r.err) { pending = null; say('❌ ' + r.err, 'err'); return; }
                pending = r.ok; renderConfirm();
            };
            fr.onerror = function () { say('❌ File padhi nahi ja saki.', 'err'); };
            fr.readAsText(f);
        };
        document.body.appendChild(inp);
        inp.click();
    }

    // ---------- UI ----------
    var overlay, box, msgEl;

    function css() {
        if (document.getElementById('fqbStyle')) return;
        var s = document.createElement('style');
        s.id = 'fqbStyle';
        s.textContent =
            '#fqbOv{position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:99999;display:flex;align-items:center;justify-content:center;padding:16px;font-family:inherit}' +
            '#fqbBox{background:var(--card-bg,#fff);color:var(--text,#222);border-radius:18px;max-width:420px;width:100%;max-height:90vh;overflow:auto;padding:20px;box-shadow:0 20px 60px rgba(0,0,0,.45);text-align:left;direction:ltr;border:1px solid var(--border,#ddd)}' +
            '#fqbBox h3{margin:0 0 6px;font-size:20px;color:var(--primary,#0F4C3A)}' +
            '#fqbBox p,#fqbBox li{font-size:14px;line-height:1.55;margin:6px 0}' +
            '#fqbBox ul{padding-left:18px;margin:6px 0}' +
            '#fqbBox button{width:100%;padding:13px;border-radius:12px;font-size:15px;font-weight:700;cursor:pointer;margin-top:10px;border:none}' +
            '#fqbBox .fqb-main{background:var(--primary,#0F4C3A);color:#fff}' +
            '#fqbBox .fqb-alt{background:transparent;color:var(--primary,#0F4C3A);border:1.5px solid var(--primary,#0F4C3A)}' +
            '#fqbBox .fqb-gold{background:linear-gradient(180deg,#E3C36E,#C79E3F);color:#2A2008}' +
            '#fqbBox .fqb-close{background:transparent;color:var(--text-light,#777);font-weight:600}' +
            '#fqbBox .fqb-msg{white-space:pre-line;padding:10px 12px;border-radius:10px;font-size:13px;margin-top:10px}' +
            '#fqbBox .fqb-ok{background:#e6f6ec;color:#14532d}#fqbBox .fqb-err{background:#fde8e8;color:#8a1c1c}#fqbBox .fqb-warn{background:#fff6dd;color:#6b4e00}' +
            '#fqbBox .fqb-meta{font-size:12px;color:var(--text-light,#777)}' +
            '#fqbBar{position:fixed;left:12px;right:12px;bottom:14px;z-index:99998;background:var(--card-bg,#fff);color:var(--text,#222);border:1.5px solid var(--primary,#0F4C3A);border-radius:14px;padding:12px 14px;box-shadow:0 10px 30px rgba(0,0,0,.3);font-size:14px;max-width:460px;margin:0 auto}' +
            '#fqbBar .row{display:flex;gap:8px;margin-top:8px}' +
            '#fqbBar button{flex:1;padding:9px;border-radius:10px;font-weight:700;cursor:pointer;border:none;font-size:13px}' +
            '#fqbBar .go{background:var(--primary,#0F4C3A);color:#fff}#fqbBar .no{background:transparent;color:var(--text-light,#777);border:1px solid var(--border,#ccc)}';
        document.head.appendChild(s);
    }

    function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
    function esc(t) { return String(t).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

    function fmtDate(ms) {
        try { return new Date(ms).toLocaleString(undefined, { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }); }
        catch (e) { return new Date(ms).toISOString().slice(0, 16).replace('T', ' '); }
    }

    function say(text, kind) {
        if (!box) { try { alert(text); } catch (e) {} return; }
        if (!msgEl) { msgEl = el('div', 'fqb-msg'); box.appendChild(msgEl); }
        msgEl.className = 'fqb-msg fqb-' + (kind || 'ok');
        msgEl.textContent = text;
    }

    function open() {
        css(); close();
        overlay = el('div'); overlay.id = 'fqbOv';
        box = el('div'); box.id = 'fqbBox';
        overlay.appendChild(box);
        overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
        document.body.appendChild(overlay);
        pending = null;
        render();
    }

    function close() {
        if (overlay) overlay.remove();
        overlay = box = msgEl = null;
    }

    function btn(cls, text, fn) { var b = el('button', cls, text); b.type = 'button'; b.onclick = fn; return b; }

    function render() {
        if (!box) return;
        box.innerHTML = ''; msgEl = null;
        box.appendChild(el('h3', '', '💾 Backup / Restore'));
        var last = parseInt(lsGet(LAST_KEY), 10);
        var names = readProfiles(lsGet('profiles')).map(function (p) { return p.name; });
        box.appendChild(el('p', '', 'Apna sara progress ek file mein save karein, aur nayi phone par wapas laayein. <b>Free hai, login ya server ki zaroorat nahi.</b>'));
        box.appendChild(el('p', 'fqb-meta',
            (names.length ? 'Is phone ki profiles: ' + esc(names.join(', ')) + '<br>' : '') +
            (last ? 'Aakhri backup: ' + esc(fmtDate(last)) : 'Abhi tak backup nahi liya.')));

        box.appendChild(btn('fqb-main', '⬇️ Backup file banayein', function () { saveFile('download'); }));
        if (navigator.canShare && !window.AndroidNS) box.appendChild(btn('fqb-alt', '📤 Share karein (WhatsApp / Drive)', function () { saveFile('share'); }));
        box.appendChild(btn('fqb-gold', '📂 Backup file se restore karein', pickFile));
        box.appendChild(el('p', 'fqb-meta', '<span data-lbh="fqbtip">Tip: file ko WhatsApp “Mujhe message” / Google Drive / email par rakh lein. Phone badalte waqt wahi file restore karein, phir apne <b>usi naam</b> se login karein.</span>'));
        box.appendChild(btn('fqb-close', 'Band karein', close));
    }

    function renderConfirm() {
        if (!box || !pending) return;
        box.innerHTML = ''; msgEl = null;
        var b = pending;
        var when = b.created ? Date.parse(b.created) : NaN;
        box.appendChild(el('h3', '', '📂 Restore ki tasdeeq'));
        box.appendChild(el('p', '',
            'Backup ki tareekh: <b>' + esc(isNaN(when) ? 'maloom nahi' : fmtDate(when)) + '</b>'));
        var prof = (b.profiles && b.profiles.length) ? b.profiles : readProfiles(b.data.profiles).map(function (p) { return p.name; });
        if (prof.length) box.appendChild(el('p', '', 'Profiles: <b>' + esc(prof.join(', ')) + '</b>'));
        box.appendChild(el('ul', '',
            '<li>Backup wali profiles ka progress is phone par <b>badal jayega</b>.</li>' +
            '<li>Is phone ki baaki profiles (jo backup mein nahi) <b>safe rahengi</b>.</li>'));
        box.appendChild(btn('fqb-main', '✅ Haan, restore karein', function () {
            var n = applyRestore(pending);
            var loggedIn = lsGet('isLoggedIn') === 'true';
            pending = null;
            box.innerHTML = '';
            box.appendChild(el('h3', '', '✅ Restore ho gaya'));
            box.appendChild(el('p', '', n + ' cheezein wapas aa gayin.' + (loggedIn ? ' App dobara khul rahi hai…' : ' Ab apne <b>usi naam</b> se login karein, aapka progress mil jayega.')));
            setTimeout(function () { location.reload(); }, 1600);
        }));
        box.appendChild(btn('fqb-close', 'Cancel', function () { pending = null; render(); }));
    }

    // ---------- Yaad-dehani (hafte mein ek baar, sirf jab progress ho) ----------
    function nagIfNeeded() {
        try {
            if (lsGet('isLoggedIn') !== 'true' || !hasProgress()) return;
            var now = Date.now();
            var since = parseInt(lsGet(SINCE_KEY), 10);
            if (!since) { lsSet(SINCE_KEY, String(now)); return; }
            var last = parseInt(lsGet(LAST_KEY), 10) || 0;
            var ref = last || since;
            var limit = last ? 7 * DAY : 3 * DAY;      // pehla backup 3 din baad, phir har hafta
            if (now - ref < limit) return;
            var shown = parseInt(lsGet(NAG_KEY), 10) || 0;
            if (now - shown < DAY) return;             // din mein ek baar se zyada nahi
            lsSet(NAG_KEY, String(now));
            css();
            var bar = el('div'); bar.id = 'fqbBar';
            bar.innerHTML = '💾 ' + (last ? 'Aapne kaafi din se backup nahi liya.' : 'Aapne abhi tak progress ka backup nahi liya.') + ' Phone badalne par progress bach jayega.';
            var row = el('div', 'row');
            row.appendChild(btn('go', 'Backup lein', function () { bar.remove(); open(); }));
            row.appendChild(btn('no', 'Baad mein', function () { bar.remove(); }));
            bar.appendChild(row);
            document.body.appendChild(bar);
        } catch (e) {}
    }

    // ---------- Storage ko browser se delete hone se bachana ----------
    function persist() {
        try {
            if (navigator.storage && navigator.storage.persist) {
                navigator.storage.persisted().then(function (p) { if (!p) navigator.storage.persist(); }).catch(function () {});
            }
        } catch (e) {}
    }

    window.FQBackup = { open: open, close: close, exportNow: function () { saveFile('download'); }, hasProgress: hasProgress, _t: { buildBackup: buildBackup, parseBackup: parseBackup, applyRestore: applyRestore } };

    function init() {
        persist();
        if (document.getElementById('mainApp')) setTimeout(nagIfNeeded, 6000);   // sirf main app page par
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
;
