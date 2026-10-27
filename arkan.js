/* Arkan-e-Islam — shared: "padh liya" nishan (device par save) + chips ka scroll-spy */
(function () {
  var K = 'arkan_read_v1';
  function load() { try { return JSON.parse(localStorage.getItem(K)) || {}; } catch (e) { return {}; } }
  function save(o) { try { localStorage.setItem(K, JSON.stringify(o)); } catch (e) {} }
  var page = document.body.getAttribute('data-page');

  function paintHero(all) {
    var secs = document.querySelectorAll('.sec[data-sec]'), n = secs.length;
    var d = (all[page] || []).filter(function (id) { return document.getElementById(id); }).length;
    var f = document.getElementById('progFill'), t = document.getElementById('progText');
    if (f) f.style.width = (n ? Math.round(d * 100 / n) : 0) + '%';
    if (t) t.textContent = d + ' / ' + n + ' حصے پڑھ لیے';
  }
  function paintBtn(b, on) {
    b.classList.toggle('on', !!on);
    b.textContent = on ? '✅ پڑھ لیا' : '☐ یہ حصہ پڑھ لیا';
  }
  if (page && page !== 'hub') {
    var all = load();
    document.querySelectorAll('.done').forEach(function (b) {
      var id = b.getAttribute('data-sec');
      paintBtn(b, (all[page] || []).indexOf(id) > -1);
      b.addEventListener('click', function () {
        var a = load(), list = a[page] || [], i = list.indexOf(id);
        if (i > -1) list.splice(i, 1); else list.push(id);
        a[page] = list; save(a); paintBtn(b, i === -1); paintHero(a);
      });
    });
    paintHero(all);
  }
  if (page === 'hub') {
    var a2 = load();
    document.querySelectorAll('.pcard[data-page]').forEach(function (c) {
      var p = c.getAttribute('data-page'), tot = parseInt(c.getAttribute('data-total'), 10) || 1;
      var d = (a2[p] || []).length, pct = Math.min(100, Math.round(d * 100 / tot));
      var f = c.querySelector('.pfill'); if (f) f.style.width = pct + '%';
      var s = c.querySelector('.pdone'); if (s) s.textContent = d + '/' + tot + ' پڑھے';
    });
  }
  // ===== Tabs: dua page ki tarah — ek waqt mein ek hissa (lambi scroll nahi, isliye atakta nahi) =====
  var chips = document.querySelectorAll('.chips a');
  var secs2 = document.querySelectorAll('.sec[data-sec]');
  if (chips.length && secs2.length) {
    document.documentElement.classList.add('tabs-on');
    try { history.scrollRestoration = 'manual'; } catch (e) {}
    var byId = {}, order = [];
    secs2.forEach(function (s) { byId[s.id] = s; order.push(s.id); });
    var chipOf = {};
    chips.forEach(function (c) { chipOf[c.getAttribute('href').slice(1)] = c; });
    var hdr = document.querySelector('header');
    var cur = null;

    function show(id, keepScroll) {
      if (!byId[id]) id = order[0];
      if (cur === id) return;
      cur = id;
      order.forEach(function (k) { byId[k].classList.toggle('active', k === id); });
      chips.forEach(function (c) { c.classList.remove('on'); });
      var c = chipOf[id];
      if (c) {
        c.classList.add('on');
        var box = c.parentNode;   // sirf chips ki patti ko sarkao, poore page ko nahi
        box.scrollLeft = c.offsetLeft - (box.clientWidth - c.offsetWidth) / 2;
      }
      var idx = order.indexOf(id);
      var cnt = document.getElementById('secCount');
      if (cnt) cnt.textContent = 'حصہ ' + (idx + 1) + ' / ' + order.length;

      if (!keepScroll) {
        // sirf tab upar le jao jab hissa header ke neeche chhup gaya ho
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

    // har hissay ke neeche pichla / agla
    order.forEach(function (id, i) {
      var nav = document.createElement('div');
      nav.className = 'snav';
      var prev = i > 0 ? order[i - 1] : null, next = i < order.length - 1 ? order[i + 1] : null;
      function lbl(k) { var t = byId[k].querySelector('h2'); return t ? t.textContent.replace(/^\s+/, '') : ''; }
      nav.innerHTML =
        (prev ? '<button type="button" data-go="' + prev + '"><small>→ پچھلا</small><span>' + lbl(prev) + '</span></button>' : '<span></span>') +
        (next ? '<button type="button" data-go="' + next + '" class="nx"><small>اگلا ←</small><span>' + lbl(next) + '</span></button>' : '<span></span>');
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
})();
