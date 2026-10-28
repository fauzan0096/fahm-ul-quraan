/* Arkan-e-Islam — 4 zubaanein (Urdu / Roman / Hindi / English). Engine: page ke har "patte" (leaf) matn ko pehchanta hai,
   uski chhoti hash se arkan-lang.js (alag file, sirf tab load hoti hai jab Urdu ke ilawa zubaan chuni jaye) mein tarjuma dhoondhta hai.
   Arabi (Quran/Hadith ka matn, .ar) kabhi nahi badalta. Zubaan wahi hai jo baaqi app mein (QSLang, 'mlang'). */
(function () {
  'use strict';
  var LANGS = ['u', 'ro', 'hi', 'en'], IDX = { ro: 0, hi: 1, en: 2 };
  var INLINE = { B: 1, STRONG: 1, I: 1, EM: 1, SPAN: 1, A: 1, SMALL: 1, SUP: 1, SUB: 1, BR: 1, MARK: 1, U: 1, CODE: 1, BDI: 1, BDO: 1 };
  var LETTER = /[A-Za-z؀-ۿऀ-ॿ]/;
  var SKIP = { SCRIPT: 1, STYLE: 1, SVG: 1, NOSCRIPT: 1, TEXTAREA: 1, INPUT: 1 };

  function norm(s) { return s.replace(/\s+/g, ' ').trim(); }
  function hash(s) {                       // FNV-1a 32-bit
    var h = 0x811c9dc5;
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = (h * 0x01000193) >>> 0; }
    return h.toString(36);
  }
  function isInline(el) {
    if (!INLINE[el.tagName]) return false;
    if (el.tagName === 'A' && el.parentNode && el.parentNode.classList && (el.parentNode.classList.contains('chips') || el.parentNode.classList.contains('pn'))) return false;
    return true;
  }
  function skipEl(el) {
    return SKIP[el.tagName.toUpperCase()] || el.classList.contains('ar') || el.classList.contains('done') || el.classList.contains('snav') ||
      el.hasAttribute('data-noi18n') || el.hasAttribute('data-qs-lang') || el.classList.contains('hq') || el.id === 'zres' || el.id === 'secCount' || el.id === 'progText';
  }
  // Lambe Arabi matn (harakat wala, Urdu ke nishan nahi) ko chhor do; baaki sab chhote alfaz bhi tarjume ke liye
  var URDU_HINT = /[ٹڈڑںےگچپکھۓہیۂۃ]|(?:\bکے\b|\bکی\b|\bہے\b|\bمیں\b|\bاور\b|\bسے\b|\bکو\b|\bیہ\b)/;
  function needsTr(txt) {
    if (!LETTER.test(txt)) return false;
    if (/[A-Za-z\u0900-\u097F]/.test(txt)) return true;
    var tash = (txt.match(/[\u064B-\u0652\u0670]/g) || []).length;
    if (tash >= 6 && !URDU_HINT.test(txt)) return false;
    return true;
  }
  function collect(root, out) {
    var kids = root.children, hasBlock = false, i;
    for (i = 0; i < kids.length; i++) { if (!SKIP[kids[i].tagName.toUpperCase()] && !isInline(kids[i])) { hasBlock = true; break; } }
    if (!hasBlock) {
      var t = norm(root.textContent || '');
      if (t && needsTr(t)) out.push(root);
      return;
    }
    // mixed: seedhe text nodes (block bachchon ke saath) ko span mein lapet do taake wo bhi patta ban jaye
    for (i = 0; i < root.childNodes.length; i++) {
      var n = root.childNodes[i];
      if (n.nodeType === 3 && norm(n.nodeValue) && needsTr(n.nodeValue)) {
        var sp = document.createElement('span'); sp.setAttribute('data-akw', '1');
        n.parentNode.replaceChild(sp, n); sp.appendChild(n);
      }
    }
    for (i = 0; i < root.children.length; i++) {
      var c = root.children[i];
      if (skipEl(c)) continue;
      collect(c, out);
    }
  }
  var leaves = null, attrs = null;
  function scan() {
    if (leaves) return;
    leaves = []; attrs = [];
    var roots = [document.querySelector('header'), document.querySelector('main')];
    roots.forEach(function (r) {
      if (!r) return;
      var arr = [];
      if (!skipEl(r)) collect(r, arr);
      arr.forEach(function (el) {
        var u = el.innerHTML.replace(/\s+/g, ' ').trim();
        leaves.push({ el: el, ur: u, key: hash(u) });
      });
      r.querySelectorAll('[placeholder],[aria-label],[title],option').forEach(function (el) {
        ['placeholder', 'aria-label', 'title'].forEach(function (a) {
          var v = el.getAttribute && el.getAttribute(a);
          if (v && needsTr(v)) attrs.push({ el: el, a: a, ur: v, key: 'a' + hash(v) });
        });
      });
    });
    attrs.push({ el: document.documentElement, title: true, ur: document.title, key: 'a' + hash(document.title) });
  }
  function getLang() { try { return (window.QSLang && QSLang.get()) || localStorage.getItem('mlang') || 'u'; } catch (e) { return 'u'; } }

  var dataReady = false, dataLoading = false, cbs = [];
  function loadData(cb) {
    if (window.ARKAN_TR) { dataReady = true; cb(); return; }
    cbs.push(cb);
    if (dataLoading) return; dataLoading = true;
    var s = document.createElement('script'); s.src = 'arkan-lang.js';
    s.onload = function () { dataReady = true; var l = cbs.slice(); cbs = []; l.forEach(function (f) { f(); }); };
    s.onerror = function () { dataLoading = false; cbs = []; };
    document.head.appendChild(s);
  }

  function arrowFix(lang) {   // wapsi ka teer: RTL mein →, LTR mein ←
    var b = document.querySelectorAll('header .icon-btn[href]');
    for (var i = 0; i < b.length; i++) b[i].textContent = lang === 'u' ? '→' : '←';
  }
  function setDir(lang) {
    var de = document.documentElement;
    de.setAttribute('data-mlang', lang);
    de.setAttribute('lang', lang === 'u' ? 'ur' : lang === 'hi' ? 'hi' : 'en');
    de.setAttribute('dir', lang === 'u' ? 'rtl' : 'ltr');
    document.body.setAttribute('dir', lang === 'u' ? 'rtl' : 'ltr');
  }
  var applied = 'u';
  function apply(lang) {
    scan();
    var tr = window.ARKAN_TR || {}, ix = IDX[lang], i, L, t;
    for (i = 0; i < leaves.length; i++) {
      L = leaves[i];
      if (lang === 'u') { if (L.el.innerHTML !== L.ur) L.el.innerHTML = L.ur; continue; }
      t = tr[L.key]; t = t && t[ix];
      if (t) L.el.innerHTML = t; else if (L.el.innerHTML !== L.ur) L.el.innerHTML = L.ur;
    }
    for (i = 0; i < attrs.length; i++) {
      L = attrs[i]; t = lang === 'u' ? L.ur : ((tr[L.key] || [])[ix] || L.ur);
      if (L.title) document.title = t; else L.el.setAttribute(L.a, t);
    }
    applied = lang;
    setDir(lang); arrowFix(lang);
    if (window.AKUI && AKUI.relang) AKUI.relang(lang);
  }
  function refresh() {
    var lang = getLang();
    if (LANGS.indexOf(lang) < 0) lang = 'u';
    if (lang === 'u') { if (applied !== 'u' || document.documentElement.getAttribute('dir') !== 'rtl') apply('u'); return; }
    setDir(lang);                                   // foran disha/font, tarjuma file aate hi
    loadData(function () { apply(getLang()); });
  }
  window.AKI18N = {
    refresh: refresh, scan: function () { scan(); return leaves; }, attrs: function () { scan(); return attrs; },
    hash: hash, norm: norm, lang: getLang,
    t: function (map) { var l = getLang(); return (l === 'u' ? map.u : map[l]) || map.u; }
  };
  function start() { refresh(); if (window.QSLang) QSLang.onChange(refresh); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
