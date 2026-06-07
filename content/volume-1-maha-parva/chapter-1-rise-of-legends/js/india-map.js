/**
 * india-map.js
 * Interactive SVG India map for the Hulmane-The-Saga website.
 * Provides window.createIndiaMap(containerId), window.highlightState(stateId),
 * and window.clearMapHighlight().
 */

(function () {
  'use strict';

  // ── Region colour palette ──────────────────────────────────────────────────
  var REGION_COLORS = {
    south:     { fill: '#003a1a', stroke: '#44ff88', hover: '#005a2a' },
    west:      { fill: '#3a1a00', stroke: '#ff8c00', hover: '#5a2a00' },
    east:      { fill: '#001a3a', stroke: '#44aaff', hover: '#002a5a' },
    north:     { fill: '#3a0030', stroke: '#ff66cc', hover: '#5a0050' },
    northeast: { fill: '#2a1a3a', stroke: '#aa66ff', hover: '#3a2a5a' },
    central:   { fill: '#2b1a00', stroke: '#ffaa00', hover: '#4b3a00' },
  };

  // ── State-to-region mapping ────────────────────────────────────────────────
  var STATE_REGIONS = {
    'andhra-pradesh':    'south',
    'telangana':         'south',
    'tamil-nadu':        'south',
    'kerala':            'south',
    'karnataka':         'south',
    'maharashtra':       'west',
    'gujarat':           'west',
    'goa':               'west',
    'rajasthan':         'west',
    'west-bengal':       'east',
    'odisha':            'east',
    'bihar':             'east',
    'jharkhand':         'east',
    'uttar-pradesh':     'north',
    'uttarakhand':       'north',
    'himachal-pradesh':  'north',
    'punjab':            'north',
    'haryana':           'north',
    'assam':             'northeast',
    'arunachal-pradesh': 'northeast',
    'manipur':           'northeast',
    'meghalaya':         'northeast',
    'mizoram':           'northeast',
    'nagaland':          'northeast',
    'sikkim':            'northeast',
    'tripura':           'northeast',
    'madhya-pradesh':    'central',
    'chhattisgarh':      'central',
  };

  // ── State display names ────────────────────────────────────────────────────
  var STATE_NAMES = {
    'andhra-pradesh':    'Andhra Pradesh',
    'telangana':         'Telangana',
    'tamil-nadu':        'Tamil Nadu',
    'kerala':            'Kerala',
    'karnataka':         'Karnataka',
    'maharashtra':       'Maharashtra',
    'gujarat':           'Gujarat',
    'goa':               'Goa',
    'rajasthan':         'Rajasthan',
    'west-bengal':       'West Bengal',
    'odisha':            'Odisha',
    'bihar':             'Bihar',
    'jharkhand':         'Jharkhand',
    'uttar-pradesh':     'Uttar Pradesh',
    'uttarakhand':       'Uttarakhand',
    'himachal-pradesh':  'Himachal Pradesh',
    'punjab':            'Punjab',
    'haryana':           'Haryana',
    'assam':             'Assam',
    'arunachal-pradesh': 'Arunachal Pradesh',
    'manipur':           'Manipur',
    'meghalaya':         'Meghalaya',
    'mizoram':           'Mizoram',
    'nagaland':          'Nagaland',
    'sikkim':            'Sikkim',
    'tripura':           'Tripura',
    'madhya-pradesh':    'Madhya Pradesh',
    'chhattisgarh':      'Chhattisgarh',
  };

  // ── Simplified state boundary paths (approximate polygons) ─────────────────
  // Each path is a closed polygon using absolute coordinates in the 600x700
  // viewBox.  Shapes are intentionally stylised — this is a fantasy map.
  var STATE_PATHS = {
    // --- NORTH ---
    'himachal-pradesh':  'M195,55 L230,50 L245,75 L230,100 L200,95 L185,75 Z',
    'punjab':            'M115,80 L155,75 L175,95 L165,125 L130,130 L105,110 Z',
    'haryana':           'M155,125 L190,115 L210,140 L200,170 L165,170 L145,150 Z',
    'uttarakhand':       'M235,75 L275,65 L295,90 L280,120 L245,115 L230,95 Z',
    'uttar-pradesh':     'M200,145 L280,120 L340,145 L355,185 L330,220 L260,230 L210,210 L195,175 Z',

    // --- WEST ---
    'rajasthan':         'M80,165 L160,150 L195,175 L195,240 L170,290 L105,300 L60,260 L55,200 Z',
    'gujarat':           'M40,280 L100,270 L120,300 L115,350 L90,380 L50,385 L25,340 L30,300 Z',
    'maharashtra':       'M115,350 L185,330 L260,340 L290,370 L280,420 L230,440 L170,445 L130,420 L110,380 Z',
    'goa':               'M155,445 L175,440 L180,460 L165,470 L150,460 Z',

    // --- CENTRAL ---
    'madhya-pradesh':    'M170,250 L260,230 L340,240 L355,280 L340,320 L265,335 L190,330 L160,290 Z',
    'chhattisgarh':      'M310,290 L360,275 L390,310 L385,360 L350,380 L310,360 L295,325 Z',

    // --- EAST ---
    'bihar':             'M340,175 L395,170 L415,200 L400,230 L360,235 L335,215 Z',
    'jharkhand':         'M345,235 L400,225 L415,260 L400,290 L360,295 L335,275 Z',
    'west-bengal':       'M385,230 L420,215 L440,250 L435,310 L415,340 L390,330 L385,290 L395,260 Z',
    'odisha':            'M310,330 L365,315 L395,340 L400,385 L365,410 L320,400 L295,365 Z',

    // --- SOUTH ---
    'telangana':         'M240,380 L300,365 L330,395 L315,430 L270,440 L240,420 Z',
    'andhra-pradesh':    'M260,440 L320,425 L355,455 L345,500 L300,520 L260,500 L245,465 Z',
    'karnataka':         'M160,420 L230,410 L260,445 L255,500 L220,530 L170,530 L145,490 L140,450 Z',
    'kerala':            'M165,530 L195,525 L210,560 L200,610 L180,630 L160,610 L155,570 Z',
    'tamil-nadu':        'M210,500 L270,490 L310,520 L305,570 L275,610 L235,620 L205,590 L195,550 Z',

    // --- NORTHEAST ---
    'sikkim':            'M400,140 L420,132 L425,155 L410,162 L395,155 Z',
    'assam':             'M425,145 L470,130 L510,145 L515,175 L490,190 L450,195 L430,180 L425,160 Z',
    'arunachal-pradesh': 'M475,95 L530,85 L555,110 L540,140 L500,145 L475,125 Z',
    'nagaland':          'M500,155 L530,145 L545,170 L530,190 L505,185 L495,170 Z',
    'meghalaya':         'M430,180 L470,172 L490,190 L475,208 L440,210 L425,195 Z',
    'manipur':           'M495,190 L525,185 L535,210 L520,230 L500,225 L490,205 Z',
    'tripura':           'M455,215 L475,210 L482,235 L470,255 L452,248 L448,230 Z',
    'mizoram':           'M478,235 L500,225 L510,250 L500,275 L480,270 L472,255 Z',
  };

  // ── Tooltip element (lazily created) ───────────────────────────────────────
  var tooltip = null;

  function ensureTooltip(container) {
    if (tooltip) return tooltip;
    tooltip = document.createElement('div');
    tooltip.className = 'map-tooltip';
    tooltip.style.cssText =
      'position:absolute;pointer-events:none;opacity:0;transition:opacity .15s;' +
      'background:#111;border:1px solid #44ff88;border-radius:6px;padding:8px 12px;' +
      'font-family:inherit;font-size:13px;color:#eee;z-index:100;white-space:nowrap;';
    container.style.position = 'relative';
    container.appendChild(tooltip);
    return tooltip;
  }

  // ── Build the SVG markup ───────────────────────────────────────────────────
  function buildSVG() {
    var paths = '';
    var ids = Object.keys(STATE_PATHS);
    for (var i = 0; i < ids.length; i++) {
      var id = ids[i];
      var region = STATE_REGIONS[id] || 'central';
      var colors = REGION_COLORS[region];
      var name = STATE_NAMES[id] || id;
      paths +=
        '<path id="' + id + '"' +
        ' class="state-path state-' + region + '"' +
        ' data-state="' + name + '"' +
        ' d="' + STATE_PATHS[id] + '"' +
        ' fill="' + colors.fill + '"' +
        ' stroke="' + colors.stroke + '"' +
        ' stroke-width="1.2"' +
        ' style="cursor:pointer;transition:fill .2s,filter .2s;"' +
        '/>\n';
    }

    return (
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 700"' +
      ' style="width:100%;max-width:600px;height:auto;" role="img"' +
      ' aria-label="Interactive map of India">\n' +
      '<title>Hulmane-The-Saga India Map</title>\n' +
      paths +
      '</svg>'
    );
  }

  // ── Build a mobile-friendly state list ─────────────────────────────────────
  function buildMobileList() {
    var html = '<div class="map-state-list" style="display:none;margin-top:16px;">';
    html += '<select class="map-state-select" style="width:100%;padding:8px;' +
      'font-size:15px;background:#111;color:#eee;border:1px solid #44ff88;border-radius:4px;">';
    html += '<option value="">— Select a state —</option>';
    var ids = Object.keys(STATE_NAMES).sort(function (a, b) {
      return STATE_NAMES[a].localeCompare(STATE_NAMES[b]);
    });
    for (var i = 0; i < ids.length; i++) {
      html += '<option value="' + ids[i] + '">' + STATE_NAMES[ids[i]] + '</option>';
    }
    html += '</select></div>';
    return html;
  }

  // ── Apply responsive visibility ────────────────────────────────────────────
  function applyResponsive(container) {
    var list = container.querySelector('.map-state-list');
    if (!list) return;
    if (window.innerWidth < 600) {
      list.style.display = 'block';
    } else {
      list.style.display = 'none';
    }
  }

  // ── Lookup hero data from window.HEROES ────────────────────────────────────
  function findHero(stateId) {
    if (!window.HEROES || !Array.isArray(window.HEROES)) return null;
    for (var i = 0; i < window.HEROES.length; i++) {
      if (window.HEROES[i].id === stateId) return window.HEROES[i];
    }
    return null;
  }

  // ── Show / hide tooltip ────────────────────────────────────────────────────
  function showTooltip(container, stateId, event) {
    var tip = ensureTooltip(container);
    var name = STATE_NAMES[stateId] || stateId;
    var hero = findHero(stateId);

    var inner =
      '<div class="tooltip-state" style="font-weight:bold;margin-bottom:3px;">' +
      name + '</div>';

    if (hero) {
      inner +=
        '<div class="tooltip-hero" style="margin-bottom:2px;">' +
        (hero.name || '') + (hero.title ? ' &mdash; ' + hero.title : '') +
        '</div>';
      if (hero.animal) {
        inner +=
          '<div class="tooltip-animal" style="font-size:12px;opacity:.8;">' +
          hero.animal + '</div>';
      }
    }

    tip.innerHTML = inner;
    tip.style.opacity = '1';
    positionTooltip(container, event);
  }

  function positionTooltip(container, event) {
    if (!tooltip) return;
    var rect = container.getBoundingClientRect();
    var x = event.clientX - rect.left + 15;
    var y = event.clientY - rect.top + 15;

    // Keep tooltip within container bounds
    var tipW = tooltip.offsetWidth;
    var tipH = tooltip.offsetHeight;
    if (x + tipW > rect.width) x = x - tipW - 30;
    if (y + tipH > rect.height) y = y - tipH - 30;
    if (x < 0) x = 5;
    if (y < 0) y = 5;

    tooltip.style.left = x + 'px';
    tooltip.style.top = y + 'px';
  }

  function hideTooltip() {
    if (tooltip) tooltip.style.opacity = '0';
  }

  // ── Highlight helpers ──────────────────────────────────────────────────────
  function setHighlight(path, on) {
    var id = path.getAttribute('id');
    var region = STATE_REGIONS[id] || 'central';
    var colors = REGION_COLORS[region];
    if (on) {
      path.setAttribute('fill', colors.hover);
      path.style.filter = 'drop-shadow(0 0 6px ' + colors.stroke + ')';
    } else {
      path.setAttribute('fill', colors.fill);
      path.style.filter = 'none';
    }
  }

  // ── Main creation function ─────────────────────────────────────────────────
  window.createIndiaMap = function (containerId) {
    var container = document.getElementById(containerId);
    if (!container) {
      console.error('india-map.js: container "' + containerId + '" not found.');
      return null;
    }

    // Insert SVG and mobile list
    container.innerHTML = buildSVG() + buildMobileList();

    var svg = container.querySelector('svg');
    var statePaths = container.querySelectorAll('.state-path');

    // Attach event listeners to each state path
    for (var i = 0; i < statePaths.length; i++) {
      (function (path) {
        path.addEventListener('mouseenter', function (e) {
          setHighlight(path, true);
          showTooltip(container, path.getAttribute('id'), e);
        });

        path.addEventListener('mousemove', function (e) {
          positionTooltip(container, e);
        });

        path.addEventListener('mouseleave', function () {
          setHighlight(path, false);
          hideTooltip();
        });

        path.addEventListener('click', function () {
          var stateId = path.getAttribute('id');
          var region = STATE_REGIONS[stateId] || 'central';
          window.location.href = 'stories/asia/india/' + region + '/' + stateId + '/index.html';
        });
      })(statePaths[i]);
    }

    // Mobile dropdown navigation
    var select = container.querySelector('.map-state-select');
    if (select) {
      select.addEventListener('change', function () {
        var val = select.value;
        if (val) {
          var region = STATE_REGIONS[val] || 'central';
          window.location.href = 'stories/asia/india/' + region + '/' + val + '/index.html';
        }
      });
    }

    // Responsive show/hide of mobile list
    applyResponsive(container);
    window.addEventListener('resize', function () {
      applyResponsive(container);
    });

    return svg;
  };

  // ── Public highlight API ───────────────────────────────────────────────────

  window.highlightState = function (stateId) {
    window.clearMapHighlight();
    var path = document.getElementById(stateId);
    if (path && path.classList.contains('state-path')) {
      setHighlight(path, true);
    }
  };

  window.clearMapHighlight = function () {
    var all = document.querySelectorAll('.state-path');
    for (var i = 0; i < all.length; i++) {
      setHighlight(all[i], false);
    }
    hideTooltip();
  };
})();
