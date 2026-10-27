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
  // chips: jo hissa nazar aa raha ho wo roshan
  var chips = document.querySelectorAll('.chips a');
  if (chips.length && 'IntersectionObserver' in window) {
    var map = {}; chips.forEach(function (c) { map[c.getAttribute('href').slice(1)] = c; });
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) {
          chips.forEach(function (c) { c.classList.remove('on'); });
          var c = map[e.target.id];
          if (c) { c.classList.add('on'); try { c.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' }); } catch (e) {} }
        }
      });
    }, { rootMargin: '-25% 0px -65% 0px' });
    document.querySelectorAll('.sec[id]').forEach(function (s) { io.observe(s); });
  }
})();
