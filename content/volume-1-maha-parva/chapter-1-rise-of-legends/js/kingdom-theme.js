// kingdom-theme.js — applies kingdom colour theme to story pages
// Usage: set window.KINGDOM_ID = 'karnataka' before loading this script

(function () {
  'use strict';

  function applyTheme() {
    var id = window.KINGDOM_ID;
    if (!id || !window.KINGDOM_IDENTITY) return;

    var k = window.KINGDOM_IDENTITY.find(function (x) { return x.id === id; });
    if (!k) return;

    var p = k.colors.primary;
    var s = k.colors.secondary;
    var rn = window.REGION_NAMES && window.REGION_NAMES[k.region];

    // Set CSS variables on root
    document.documentElement.style.setProperty('--kingdom-primary',   p);
    document.documentElement.style.setProperty('--kingdom-secondary', s);
    document.documentElement.style.setProperty('--kingdom-bg',        k.colors.secondary + '11');

    // Style breadcrumb links and current page name
    document.querySelectorAll('.breadcrumb .current').forEach(function (el) {
      el.style.color = p;
    });
    document.querySelectorAll('.breadcrumb a').forEach(function (el) {
      el.style.color = p + 'bb';
    });

    // Inject breadcrumb if #ki-breadcrumb placeholder exists
    var bc = document.getElementById('ki-breadcrumb');
    if (bc && rn) {
      var sep = '<span style="color:' + p + '55; margin:0 6px;">›</span>';
      bc.innerHTML =
        '<a href="../../../../../kingdom-identity.html" style="color:' + p + '99;">All Kingdoms</a>' + sep +
        '<span style="color:' + p + '77;">India</span>' + sep +
        '<span style="color:' + p + '99;">' + rn.name + ' (' + k.region.charAt(0).toUpperCase() + k.region.slice(1) + ')</span>' + sep +
        '<span style="color:' + p + 'bb;">' + k.state + '</span>' + sep +
        '<span style="color:' + p + '; font-weight:bold;">' + k.kingdomName + '</span>';
      bc.style.cssText = 'font-size:0.8rem; padding:8px 0; display:flex; align-items:center; flex-wrap:wrap; gap:2px;';
    }

    // Add colour pill badges showing kingdom colours
    var pill = document.getElementById('ki-colour-pill');
    if (pill) {
      pill.innerHTML =
        '<span style="display:inline-flex;align-items:center;gap:6px;padding:3px 10px;border-radius:20px;border:1px solid ' + p + '44;font-size:0.7em;">' +
          '<span style="width:10px;height:10px;border-radius:50%;background:' + p + ';display:inline-block;"></span>' +
          p +
          '<span style="width:10px;height:10px;border-radius:50%;background:' + s + ';display:inline-block;margin-left:4px;"></span>' +
          s +
        '</span>';
    }

    // Tint the kingdom banner background glow
    var banner = document.querySelector('.kingdom-banner');
    if (banner) {
      banner.style.background =
        'radial-gradient(ellipse at 50% 0%, ' + p + '18 0%, transparent 70%)';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyTheme);
  } else {
    applyTheme();
  }
}());
