/* ============================================================
   Age of Mythos — unified navigation & theming (aom.js)
   Runs on every page. Self-locates the site root from its own
   <script src>, looks the current page up in window.AOM_MANIFEST,
   applies theme tokens, and injects header / breadcrumb /
   prev-next / footer. Works under file:// (no fetch, no server).
   ============================================================ */
(function () {
  'use strict';

  var M = window.AOM_MANIFEST;
  if (!M) { console.warn('[aom] manifest not loaded'); return; }

  /* ---- locate site root from this script's own URL ---- */
  var me = document.currentScript || (function () {
    var s = document.getElementsByTagName('script');
    return s[s.length - 1];
  })();
  var ROOT = me.src.replace(/assets\/aom\.js(\?.*)?$/, '');   // file:///.../
  function href(relPath) { return ROOT + relPath; }

  /* ---- which page are we on? ---- */
  function rootRelPath() {
    var here = decodeURIComponent(location.href.split('#')[0].split('?')[0]);
    var base = decodeURIComponent(ROOT);
    var rel = here.indexOf(base) === 0 ? here.slice(base.length) : here.replace(/^.*?\/\/[^/]*\//, '');
    if (rel === '' || rel.charAt(rel.length - 1) === '/') rel += 'index.html';
    return rel;
  }
  var REL = rootRelPath();
  var node = M.pages[REL] || M.pages[REL.replace(/[^/]+$/, 'index.html')] || null;

  /* ---- apply theme tokens ---- */
  var t = (node && node.tokens) || {};
  var rs = document.documentElement.style;
  if (t.volAccent)  rs.setProperty('--vol-accent',  t.volAccent);
  if (t.volAccent2) rs.setProperty('--vol-accent2', t.volAccent2);
  if (t.chAccent)   rs.setProperty('--ch-accent',   t.chAccent);
  if (t.kAccent)    rs.setProperty('--k-accent',    t.kAccent);
  if (t.kAccent2)   rs.setProperty('--k-accent2',   t.kAccent2);
  if (t.glow)       rs.setProperty('--aom-glow',    t.glow);

  document.body.classList.add('aom');

  /* ---- helpers ---- */
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  /* ============================================================
     HEADER
     ============================================================ */
  var header = el('header', 'aom-header');

  var logo = el('a', 'aom-logo', 'Age of Mythos');
  logo.href = href(M.home || 'index.html');

  var hereTxt = '';
  if (node) {
    if (node.volLabel) hereTxt += node.volLabel;
    if (node.chLabel)  hereTxt += (hereTxt ? ' · ' : '') + node.chLabel;
  }
  var here = el('div', 'aom-here', node ? ('<b>' + (node.title || '') + '</b>' + (hereTxt ? ' — ' + hereTxt : '')) : '');

  var actions = el('div', 'aom-actions');
  var bMap  = el('a', 'aom-btn', 'Map');        bMap.href  = href(M.overview || 'hierarchy.html');
  var bRead = el('a', 'aom-btn primary', 'Read in Order'); bRead.href = href((M.spine && M.spine[0]) || M.home || 'index.html');
  actions.appendChild(bMap);
  actions.appendChild(bRead);

  var toggle = el('button', 'aom-menu-toggle', '&#9776;');
  toggle.setAttribute('aria-label', 'Menu');
  toggle.onclick = function () { actions.classList.toggle('open'); };

  header.appendChild(logo);
  header.appendChild(here);
  header.appendChild(actions);
  header.appendChild(toggle);
  document.body.insertBefore(header, document.body.firstChild);

  /* ============================================================
     BREADCRUMB
     ============================================================ */
  if (node && node.crumbs && node.crumbs.length) {
    var bc = el('nav', 'aom-crumbs');
    node.crumbs.forEach(function (c, i) {
      if (i) bc.appendChild(el('span', 'sep', '›'));
      if (c.path) {
        var a = el('a', null, c.label); a.href = href(c.path); bc.appendChild(a);
      } else {
        bc.appendChild(el('span', 'here', c.label));
      }
    });
    document.body.insertBefore(bc, header.nextSibling);
  }

  /* ============================================================
     PREV / NEXT PAGER  +  FOOTER
     ============================================================ */
  var si = node ? node.si : -1;
  if (typeof si === 'number' && si >= 0 && M.spine) {
    var pager = el('div', 'aom-pager');

    function pagerLink(idx, cls, lbl) {
      var a = el('a', cls);
      if (idx >= 0 && idx < M.spine.length) {
        var p = M.spine[idx], pn = M.pages[p] || {};
        a.href = href(p);
        a.innerHTML = '<span class="lbl">' + lbl + '</span><span class="ttl">' + (pn.title || 'Untitled') + '</span>';
      } else { a.className += ' disabled'; a.innerHTML = '<span class="lbl">' + lbl + '</span>'; }
      return a;
    }
    pager.appendChild(pagerLink(si - 1, 'prev', '‹ Previous'));
    pager.appendChild(pagerLink(si + 1, 'next', 'Next ›'));
    document.body.appendChild(pager);
  }

  /* ============================================================
     STORY LANGUAGE TOGGLE  (English / Kannada text + audio)
     ============================================================ */
  (function () {
    var toggle = document.querySelector('.reader-langtoggle');
    if (!toggle) return;
    var langEls = document.querySelectorAll('.reader-lang, .reader-audio');
    toggle.addEventListener('click', function (ev) {
      var btn = ev.target.closest ? ev.target.closest('button[data-lang]') : null;
      if (!btn) return;
      var lang = btn.getAttribute('data-lang');
      toggle.querySelectorAll('button').forEach(function (b) {
        b.classList.toggle('active', b === btn);
      });
      langEls.forEach(function (e) {
        var on = e.getAttribute('data-lang') === lang;
        e.hidden = !on;
        if (!on) { var a = e.querySelector ? e.querySelector('audio') : null; if (a) a.pause(); }
      });
    });
  })();

  var footer = el('footer', 'aom-footer');
  var homeA = '<a href="' + href(M.home || 'index.html') + '">Home</a>';
  var mapA  = '<a href="' + href(M.overview || 'hierarchy.html') + '">Map</a>';
  footer.innerHTML = 'Age of Mythos &nbsp;&bull;&nbsp; ' + homeA + ' &nbsp;&bull;&nbsp; ' + mapA;
  document.body.appendChild(footer);
})();
