/* Arkan-e-Islam — shared: "padh liya" nishan (device par save), tabs (ek waqt mein ek hissa), 4 zubaanen (اردو/Roman/हिंदी/English) */
(function () {
  var K = 'arkan_read_v1';
  function load() { try { return JSON.parse(localStorage.getItem(K)) || {}; } catch (e) { return {}; } }
  function save(o) { try { localStorage.setItem(K, JSON.stringify(o)); } catch (e) {} }
  var page = document.body.getAttribute('data-page');
  function LI() { var l = window.QSLang ? QSLang.get() : 'u'; return { u: 0, ro: 1, hi: 2, en: 3 }[l] || 0; }
  var S = {
    read:   ['✅ پڑھ لیا', '✅ Padh liya', '✅ पढ़ लिया', '✅ Read'],
    unread: ['☐ یہ حصہ پڑھ لیا', '☐ Yeh hissa padh liya', '☐ यह हिस्सा पढ़ लिया', '☐ Mark this section as read'],
    prog:   [' حصے پڑھ لیے', ' hisse padh liye', ' हिस्से पढ़ लिए', ' sections read'],
    pdone:  [' پڑھے', ' padhe', ' पढ़े', ' read'],
    sec:    ['حصہ ', 'Hissa ', 'हिस्सा ', 'Section '],
    prev:   ['→ پچھلا', '← Pichhla', '← पिछला', '← Previous'],
    next:   ['اگلا ←', 'Agla →', 'अगला →', 'Next →'],
    back:   ['واپس', 'Wapas', 'वापस', 'Back'],
    theme:  ['تھیم', 'Theme', 'थीम', 'Theme']
  };
  function s(k) { return S[k][LI()]; }

  function paintHero(all) {
    var secs = document.querySelectorAll('.sec[data-sec]'), n = secs.length;
    var d = (all[page] || []).filter(function (id) { return document.getElementById(id); }).length;
    var f = document.getElementById('progFill'), t = document.getElementById('progText');
    if (f) f.style.width = (n ? Math.round(d * 100 / n) : 0) + '%';
    if (t) t.textContent = d + ' / ' + n + s('prog');
  }
  function paintBtn(b, on) {
    b.classList.toggle('on', !!on);
    b.textContent = on ? s('read') : s('unread');
  }
  function paintHub() {
    var a2 = load();
    document.querySelectorAll('.pcard[data-page]').forEach(function (c) {
      var p = c.getAttribute('data-page'), tot = parseInt(c.getAttribute('data-total'), 10) || 1;
      var d = (a2[p] || []).length, pct = Math.min(100, Math.round(d * 100 / tot));
      var f = c.querySelector('.pfill'); if (f) f.style.width = pct + '%';
      var t = c.querySelector('.pdone'); if (t) t.textContent = d + '/' + tot + s('pdone');
    });
  }
  function paintAria() {
    document.querySelectorAll('header a.icon-btn[aria-label]').forEach(function (a) { a.setAttribute('aria-label', s('back')); });
    document.querySelectorAll('header button[onclick*="FQTheme"]').forEach(function (b) { b.setAttribute('aria-label', s('theme')); });
  }

  var order = [], byId = {}, chips = document.querySelectorAll('.chips a'), cur = null, refreshTabs = function () {};

  function paintAll() {
    var all = load();
    if (page && page !== 'hub') {
      document.querySelectorAll('.done').forEach(function (b) {
        paintBtn(b, (all[page] || []).indexOf(b.getAttribute('data-sec')) > -1);
      });
      paintHero(all);
    }
    if (page === 'hub') paintHub();
    paintAria();
    refreshTabs();
  }

  if (page && page !== 'hub') {
    document.querySelectorAll('.done').forEach(function (b) {
      var id = b.getAttribute('data-sec');
      b.addEventListener('click', function () {
        var a = load(), list = a[page] || [], i = list.indexOf(id);
        if (i > -1) list.splice(i, 1); else list.push(id);
        a[page] = list; save(a); paintBtn(b, i === -1); paintHero(a);
      });
    });
  }

  // ===== Tabs: dua page ki tarah — ek waqt mein ek hissa (lambi scroll nahi, isliye atakta nahi) =====
  var secs2 = document.querySelectorAll('.sec[data-sec]');
  if (chips.length && secs2.length) {
    document.documentElement.classList.add('tabs-on');
    try { history.scrollRestoration = 'manual'; } catch (e) {}
    secs2.forEach(function (x) { byId[x.id] = x; order.push(x.id); });
    var chipOf = {};
    chips.forEach(function (c) { chipOf[c.getAttribute('href').slice(1)] = c; });
    var hdr = document.querySelector('header');

    function paintCount() {
      var cnt = document.getElementById('secCount');
      if (cnt && cur) cnt.textContent = s('sec') + (order.indexOf(cur) + 1) + ' / ' + order.length;
    }
    function lbl(k) {
      var t = byId[k].querySelector('h2'); if (!t) return '';
      var ic = t.querySelector('.ic'), icon = ic ? ic.textContent.trim() : '';
      var txt = t.textContent.replace(icon, '').replace(/^\s+|\s+$/g, '');
      return (icon ? icon + ' ' : '') + txt;
    }
    function paintSnav() {
      document.querySelectorAll('.snav button[data-go]').forEach(function (b) {
        b.querySelector('small').textContent = s(b.classList.contains('nx') ? 'next' : 'prev');
        b.querySelector('span').textContent = lbl(b.getAttribute('data-go'));
      });
    }
    refreshTabs = function () { paintCount(); paintSnav(); };

    function show(id, keepScroll) {
      if (!byId[id]) id = order[0];
      if (cur === id) return;
      cur = id;
      order.forEach(function (k) { byId[k].classList.toggle('active', k === id); });
      chips.forEach(function (c) { c.classList.remove('on'); });
      var c = chipOf[id];
      if (c) {
        c.classList.add('on');
        var box = c.parentNode;   // sirf chips ki patti ko sarkao, poore page ko nahi (RTL/LTR dono mein theek)
        var cr = c.getBoundingClientRect(), br = box.getBoundingClientRect();
        box.scrollLeft += (cr.left + cr.width / 2) - (br.left + br.width / 2);
      }
      paintCount();
      if (!keepScroll) {
        var top = byId[id].getBoundingClientRect().top;
        var hh = hdr ? hdr.offsetHeight : 90;
        if (top < hh + 6 || top > window.innerHeight) {
          var y = byId[id].getBoundingClientRect().top + window.pageYOffset - hh - 10;
          window.scrollTo(0, Math.max(0, y));
        }
      }
    }
    chips.forEach(function (c) {
      c.addEventListener('click', function (e) { e.preventDefault(); show(c.getAttribute('href').slice(1)); });
    });
    order.forEach(function (id, i) {
      var nav = document.createElement('div');
      nav.className = 'snav';
      var prev = i > 0 ? order[i - 1] : null, next = i < order.length - 1 ? order[i + 1] : null;
      nav.innerHTML =
        (prev ? '<button type="button" data-go="' + prev + '"><small></small><span></span></button>' : '<span></span>') +
        (next ? '<button type="button" data-go="' + next + '" class="nx"><small></small><span></span></button>' : '<span></span>');
      byId[id].appendChild(nav);
    });
    document.addEventListener('click', function (e) {
      var b = e.target.closest && e.target.closest('.snav button[data-go]');
      if (b) show(b.getAttribute('data-go'));
    });
    var h = (location.hash || '').slice(1);
    show(byId[h] ? h : order[0], true);
    window.addEventListener('hashchange', function () { var k = location.hash.slice(1); if (byId[k]) show(k); });
  }

  // ===== Zubaan: QSLang badalte hi poora page (matn + nishan + button) =====
  function langApply() {
    if (window.ArkanI18n) ArkanI18n.apply();
    paintAll();
  }
  if (window.QSLang) QSLang.onChange(langApply);
  langApply();
})();
