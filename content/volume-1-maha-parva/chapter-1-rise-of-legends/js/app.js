/**
 * Hulmane-The-Saga - Shared JavaScript Utilities
 * Epic fantasy website: Heroes of India's states, their animals, and tattoo progressions.
 * Loaded on every page. All public functions attached to window.
 */

/* ====================================================================
   1. REGION COLOR MAP & HELPER DATA
   ==================================================================== */
const REGION_COLORS = {
  south:   { primary: '#e65100', aura: '#ff9800', accent: '#fff3e0' },
  north:   { primary: '#1565c0', aura: '#42a5f5', accent: '#e3f2fd' },
  east:    { primary: '#2e7d32', aura: '#66bb6a', accent: '#e8f5e9' },
  west:    { primary: '#6a1b9a', aura: '#ab47bc', accent: '#f3e5f5' },
  central: { primary: '#bf360c', aura: '#ff7043', accent: '#fbe9e7' },
  northeast: { primary: '#00695c', aura: '#26a69a', accent: '#e0f2f1' }
};

const ANIMAL_EMOJI_MAP = {
  'blackbuck': '🦌', 'barasingha': '🦌', 'sangai': '🦌', 'sambar': '🦌',
  'spotted deer': '🦌', 'chinkara': '🦌', 'musk deer': '🦌', 'nilgiri tahr': '🐐',
  'indian elephant': '🐘', 'elephant': '🐘',
  'snow leopard': '🐆', 'clouded leopard': '🐆', 'fishing cat': '🐆', 'asiatic lion': '🦁',
  'gaur': '🐃', 'wild buffalo': '🐃', 'gayal': '🐃',
  'one-horned rhino': '🦏', 'rhino': '🦏',
  'giant squirrel': '🐿️', 'squirrel': '🐿️',
  'red panda': '🐾',
  "phayre's langur": '🐒', 'langur': '🐒',
  'serow': '🐐'
};

const ANIMAL_CATEGORY_MAP = {
  'blackbuck': 'deer', 'barasingha': 'deer', 'sangai': 'deer', 'sambar': 'deer',
  'spotted deer': 'deer', 'chinkara': 'deer', 'musk deer': 'deer', 'nilgiri tahr': 'deer',
  'indian elephant': 'elephant', 'elephant': 'elephant',
  'snow leopard': 'bigcat', 'clouded leopard': 'bigcat', 'fishing cat': 'bigcat', 'asiatic lion': 'bigcat',
  'gaur': 'bovine', 'wild buffalo': 'bovine', 'gayal': 'bovine',
  'one-horned rhino': 'rhino', 'rhino': 'rhino',
  'giant squirrel': 'squirrel', 'squirrel': 'squirrel',
  'red panda': 'redpanda',
  "phayre's langur": 'primate', 'langur': 'primate',
  'serow': 'serow'
};

/* ====================================================================
   2. ANIMAL SVG SILHOUETTES
   ==================================================================== */
function getDeerSVG() {
  return `<path d="M30 70 Q32 55 35 45 Q37 35 40 30 L42 22 L44 15 L42 22 L45 18 L43 24
    Q42 30 40 35 Q38 42 37 50 L36 55 L34 65 L32 75 L30 80 L28 85 L26 80 L28 75 Z
    M37 50 Q42 48 47 52 Q50 56 48 62 L46 70 L44 78 L42 85 L40 80 L42 72
    Q43 65 42 58 Q40 54 37 50 Z" />`;
}

function getElephantSVG() {
  return `<path d="M15 55 Q18 40 28 35 Q38 30 50 32 Q60 34 68 42 Q74 50 75 60
    Q76 70 72 78 L70 85 L66 85 L68 75 Q68 68 65 62 L60 55 Q55 50 48 48
    Q40 46 32 50 L25 56 Q20 62 18 70 L16 80 L20 85 L16 85 L14 78
    Q12 68 15 55 Z M25 56 Q22 52 18 54 Q14 56 12 62 Q10 68 12 72
    L14 70 Q15 64 18 60 Q20 56 25 56 Z" />`;
}

function getBigCatSVG() {
  return `<path d="M20 50 Q22 40 30 35 Q38 32 46 34 Q54 36 58 42 Q62 48 62 56
    Q62 62 58 68 L56 72 L54 80 L58 85 L54 85 L50 78 Q48 72 46 68
    Q42 64 38 66 L34 72 L32 80 L28 85 L24 85 L28 78 L30 70
    Q28 64 24 60 Q20 56 20 50 Z M62 56 Q66 54 72 56 Q76 58 78 62
    Q80 66 78 72 L76 76 L80 82 L82 85 L78 85 L74 78 Q72 72 70 68
    Q68 64 66 60 Q64 58 62 56 Z" />`;
}

function getBovineSVG() {
  return `<path d="M18 55 Q20 42 30 36 Q40 30 52 32 Q62 34 70 42 Q76 50 76 60
    Q76 68 72 75 L70 82 L74 85 L70 85 L66 78 Q64 72 62 68 Q56 60 48 58
    Q40 56 34 60 Q28 64 26 72 L24 82 L20 85 L16 85 L20 78
    Q18 68 18 55 Z M30 36 L26 28 L28 30 L30 36 Z M52 32 L56 24 L54 28 L52 32 Z" />`;
}

function getRhinoSVG() {
  return `<path d="M12 58 Q14 45 24 38 Q34 32 48 33 Q60 34 70 42 Q78 50 80 60
    Q80 70 76 78 L74 85 L70 85 L72 76 Q72 68 68 62 Q62 56 54 54
    Q44 52 36 56 Q28 60 24 68 L22 78 L18 85 L14 85 L16 76
    Q12 68 12 58 Z M24 38 Q20 36 16 38 L12 34 L18 36 Q22 36 24 38 Z" />`;
}

function getSquirrelSVG() {
  return `<path d="M40 75 Q38 65 36 58 Q34 50 36 42 Q38 36 44 32 Q48 28 52 30
    Q56 32 56 38 Q56 44 54 50 L52 56 L54 62 L56 70 L58 78 L60 85 L56 85
    L54 78 Q52 72 50 68 L48 72 L46 80 L44 85 L40 85 L42 78 L40 75 Z
    M52 30 Q54 24 58 20 Q62 18 64 22 Q66 26 64 32 Q62 38 58 40 Q56 38 56 34
    Q56 32 52 30 Z" />`;
}

function getRedPandaSVG() {
  return `<path d="M30 60 Q32 50 38 44 Q44 38 50 38 Q56 38 60 44 Q64 50 64 60
    Q64 68 60 74 L58 80 L56 85 L52 85 L54 78 Q54 72 52 68 Q48 64 44 66
    L42 72 L40 80 L38 85 L34 85 L36 78 Q34 70 30 60 Z
    M50 38 Q48 32 44 30 Q40 28 38 32 Q44 34 48 36 L50 38 Z
    M50 38 Q52 32 56 30 Q60 28 62 32 Q58 34 54 36 L50 38 Z
    M64 60 Q68 58 74 60 Q78 64 76 70 Q74 76 70 74 Q66 70 64 66 L64 60 Z" />`;
}

function getPrimateSVG() {
  return `<path d="M36 55 Q38 44 42 38 Q46 32 50 30 Q54 32 58 38 Q62 44 64 55
    Q66 64 64 72 L62 80 L60 85 L56 85 L58 78 Q58 72 56 66 Q52 60 48 60
    Q44 60 42 66 L40 72 L38 80 L36 85 L32 85 L34 78
    Q34 68 36 55 Z M50 30 Q46 24 42 22 Q40 26 44 30 Q46 32 50 30 Z
    M50 30 Q54 24 58 22 Q60 26 56 30 Q54 32 50 30 Z" />`;
}

function getSerowSVG() {
  return `<path d="M32 65 Q34 52 38 44 Q42 36 48 34 Q54 36 58 44 Q62 52 64 65
    Q64 72 62 78 L60 85 L56 85 L58 78 Q58 72 56 66 Q52 60 48 58
    Q44 60 42 66 L40 72 L38 80 L36 85 L32 85 L34 78 Q32 72 32 65 Z
    M48 34 L44 22 L46 26 L48 34 Z M48 34 L52 22 L50 26 L48 34 Z" />`;
}

function getAnimalSVGByCategory(category) {
  const map = {
    deer: getDeerSVG, elephant: getElephantSVG, bigcat: getBigCatSVG,
    bovine: getBovineSVG, rhino: getRhinoSVG, squirrel: getSquirrelSVG,
    redpanda: getRedPandaSVG, primate: getPrimateSVG, serow: getSerowSVG
  };
  return (map[category] || getDeerSVG)();
}

/* ====================================================================
   3. PUBLIC: generateAnimalSVG(animalName, size)
   ==================================================================== */
window.generateAnimalSVG = function generateAnimalSVG(animalName, size, fillColor) {
  size = size || 48;
  fillColor = fillColor || '#c89b3c';
  const key = (animalName || '').toLowerCase();

  if (window.ANIMAL_ART && window.ANIMAL_ART[key]) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"
      width="${size}" height="${size}" role="img" aria-label="${animalName} illustration">
      <g fill="${fillColor}" opacity="0.9">${window.ANIMAL_ART[key](fillColor)}</g>
    </svg>`;
  }

  const category = ANIMAL_CATEGORY_MAP[key] || 'deer';
  const pathData = getAnimalSVGByCategory(category);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"
    width="${size}" height="${size}" role="img" aria-label="${animalName} silhouette">
    <g fill="${fillColor}" opacity="0.9">${pathData}</g>
  </svg>`;
};

/* ====================================================================
   4. PUBLIC: generateHeroSVG(hero)
   ==================================================================== */
const MALE_SILHOUETTE = `M150 60 Q142 58 136 62 Q130 66 128 74 Q126 82 130 88
  Q134 94 140 92 L144 90 Q148 86 150 80 Q152 86 156 90 L160 92 Q166 94 170 88
  Q174 82 172 74 Q170 66 164 62 Q158 58 150 60 Z
  M150 95 Q138 96 130 100 Q118 106 110 118 Q104 130 106 140 L108 150
  Q110 158 114 164 L116 170 L118 200 Q120 220 118 240 L116 270 L114 310
  L112 340 L110 370 L120 372 L126 340 L130 310 L134 280 Q140 260 150 258
  Q160 260 166 280 L170 310 L174 340 L180 372 L190 370 L188 340 L186 310
  L184 270 L182 240 Q180 220 182 200 L184 170 L186 164 Q190 158 192 150
  L194 140 Q196 130 190 118 Q182 106 170 100 Q162 96 150 95 Z`;

const FEMALE_SILHOUETTE = `M150 60 Q143 58 138 62 Q133 66 132 74 Q131 82 134 88
  Q138 94 143 92 L146 90 Q149 86 150 80 Q151 86 154 90 L157 92 Q162 94 166 88
  Q169 82 168 74 Q167 66 162 62 Q157 58 150 60 Z
  M150 95 Q140 96 132 100 Q122 106 116 116 Q112 126 114 136 L116 146
  Q118 154 122 160 L124 166 L122 186 Q118 200 116 210 Q114 218 118 226
  Q124 236 134 240 L138 242 L136 270 L134 310 L132 340 L130 370 L140 372
  L144 340 L146 310 L148 280 Q150 270 150 258 Q150 270 152 280 L154 310
  L156 340 L160 372 L170 370 L168 340 L166 310 L164 270 L162 242 L166 240
  Q176 236 182 226 Q186 218 184 210 Q182 200 178 186 L176 166 L178 160
  Q182 154 184 146 L186 136 Q188 126 184 116 Q178 106 168 100
  Q160 96 150 95 Z`;

window.generateHeroSVG = function generateHeroSVG(hero) {
  if (!hero) return '';
  const region = (hero.region || 'central').toLowerCase();
  const colors = REGION_COLORS[region] || REGION_COLORS.central;

  if (window.HERO_ART && window.HERO_ART[hero.id]) {
    return window.HERO_ART[hero.id](colors, hero);
  }

  const gender = ((hero.hero && hero.hero.gender) || hero.gender || 'male').toLowerCase();
  const silhouette = gender === 'female' ? FEMALE_SILHOUETTE : MALE_SILHOUETTE;
  const fillOpacity = 0.35;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400"
    class="hero-svg" role="img" aria-label="${hero.name || 'Hero'} portrait">
    <defs>
      <radialGradient id="aura-${hero.id || 'x'}" cx="50%" cy="45%" r="50%">
        <stop offset="0%" stop-color="${colors.aura}" stop-opacity="0.4"/>
        <stop offset="100%" stop-color="${colors.primary}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="400" fill="none"/>
    <ellipse cx="150" cy="200" rx="130" ry="170" fill="url(#aura-${hero.id || 'x'})"/>
    <g fill="${colors.primary}" opacity="${fillOpacity}">
      <path d="${silhouette}"/>
    </g>
    <circle cx="120" cy="140" r="6" fill="#c89b3c" opacity="0.8">
      <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
    </circle>
  </svg>`;
};

/* ====================================================================
   5. HELPER: getAnimalEmoji
   ==================================================================== */
function getAnimalEmoji(animal) {
  if (!animal) return '🐾';
  const name = (typeof animal === 'string' ? animal : animal.name || '').toLowerCase();
  return ANIMAL_EMOJI_MAP[name] || '🐾';
}

/* ====================================================================
   6. PUBLIC: renderHeroCard(hero, options)
   ==================================================================== */
window.renderHeroCard = function renderHeroCard(hero, options) {
  if (!hero) return '';
  const opts = Object.assign({ compact: false, showTattoo: true, clickable: true }, options);
  const region = (hero.region || 'central').toLowerCase();
  const gender = ((hero.hero && hero.hero.gender) || hero.gender || 'male').toLowerCase();
  const heroName = (hero.hero && hero.hero.name) || hero.name || 'Unknown';
  const heroTitle = (hero.hero && hero.hero.title) || hero.title || '';
  const animalName = hero.animal ? (typeof hero.animal === 'string' ? hero.animal : hero.animal.name) : '';
  const currentLevel = (hero.tattoo && hero.tattoo.currentLevel) || hero.tattooLevel || hero.currentLevel || 0;
  const clickAttr = opts.clickable ? `onclick="window.showHeroDetail('${hero.id}')"` : '';
  const compactClass = opts.compact ? ' hero-card--compact' : '';
  const genderIcon = gender === 'female' ? '&#9792;' : '&#9794;';
  const genderLabel = gender === 'female' ? 'Female' : 'Male';

  let tattooHTML = '';
  if (opts.showTattoo) {
    const dots = [0, 1, 2, 3].map(i =>
      `<span class="tattoo-dot${i < currentLevel ? ' tattoo-dot--filled' : ''}"></span>`
    ).join('');
    tattooHTML = `<div class="tattoo-indicator">${dots}</div>`;
  }

  return `<div class="hero-card hero-${region}${compactClass}" data-hero="${hero.id}"
    data-region="${region}" data-gender="${gender}" ${clickAttr} role="article"
    tabindex="${opts.clickable ? '0' : '-1'}">
    <div class="hero-portrait">${window.generateHeroSVG(hero)}</div>
    <div class="hero-info">
      <div class="hero-name">${heroName}</div>
      <div class="hero-title">${heroTitle}</div>
      <div class="hero-state">${hero.state || ''}</div>
      <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
        <div class="animal-badge">
          <span class="animal-icon">${getAnimalEmoji(hero.animal)}</span>
          <span>${animalName}</span>
        </div>
        <div class="gender-badge" style="font-size:0.72em; padding:3px 10px; border-radius:12px; border:1px solid; ${gender === 'female' ? 'border-color:#ff66cc; color:#ff66cc;' : 'border-color:#7b9eff; color:#7b9eff;'}">
          ${genderIcon} ${genderLabel}
        </div>
      </div>
      ${tattooHTML}
    </div>
  </div>`;
};

/* ====================================================================
   7. PUBLIC: renderTattooProgress(hero, animated)
   ==================================================================== */
window.renderTattooProgress = function renderTattooProgress(hero, animated) {
  if (!hero) return '';
  const animalName = hero.animal ? (typeof hero.animal === 'string' ? hero.animal : hero.animal.name) : '';
  const region = (hero.region || 'central').toLowerCase();
  const colors = REGION_COLORS[region] || REGION_COLORS.central;
  const level = (hero.tattoo && hero.tattoo.currentLevel) || hero.tattooLevel || hero.currentLevel || 0;
  const stageLabels = ['Pawprint', 'Legs Revealed', 'Half Body', 'Full Form'];
  const clipHeights = [85, 60, 35, 0]; // y-offset for clip-rect top edge

  const stages = stageLabels.map((label, i) => {
    const active = i < level;
    const animClass = animated && active ? ' tattoo-stage--animated' : '';
    const clipY = clipHeights[i];
    const animalSVGRaw = window.generateAnimalSVG(animalName, 64, active ? colors.primary : '#555');

    return `<div class="tattoo-stage${active ? ' tattoo-stage--active' : ''}${animClass}">
      <div class="tattoo-stage-icon" style="clip-path: inset(${clipY}% 0 0 0);">
        ${animalSVGRaw}
      </div>
      <div class="tattoo-stage-label">${label}</div>
      <div class="tattoo-stage-marker">${active ? '&#9733;' : '&#9734;'}</div>
    </div>`;
  }).join('');

  return `<div class="tattoo-progress" data-level="${level}">${stages}</div>`;
};

/* ====================================================================
   8. TOOLTIP SYSTEM
   ==================================================================== */
let activeTooltip = null;

window.showTooltip = function showTooltip(element, html) {
  window.hideTooltip();
  const tip = document.createElement('div');
  tip.className = 'mh-tooltip';
  tip.innerHTML = html;
  document.body.appendChild(tip);

  const rect = element.getBoundingClientRect();
  const tipRect = tip.getBoundingClientRect();
  let left = rect.left + (rect.width - tipRect.width) / 2;
  let top = rect.top - tipRect.height - 8;
  if (top < 4) top = rect.bottom + 8;
  if (left < 4) left = 4;
  if (left + tipRect.width > window.innerWidth - 4) left = window.innerWidth - tipRect.width - 4;

  tip.style.left = left + window.scrollX + 'px';
  tip.style.top = top + window.scrollY + 'px';
  tip.style.position = 'absolute';
  activeTooltip = tip;
};

window.hideTooltip = function hideTooltip() {
  if (activeTooltip) {
    activeTooltip.remove();
    activeTooltip = null;
  }
};

/* ====================================================================
   9. MODAL SYSTEM
   ==================================================================== */
window.openModal = function openModal(contentHTML) {
  window.closeModal();
  const overlay = document.createElement('div');
  overlay.className = 'mh-modal-overlay';
  overlay.innerHTML = `<div class="mh-modal-content" role="dialog" aria-modal="true">
    <button class="mh-modal-close" aria-label="Close" title="Close">&times;</button>
    <div class="mh-modal-body">${contentHTML}</div>
  </div>`;

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) window.closeModal();
  });
  overlay.querySelector('.mh-modal-close').addEventListener('click', window.closeModal);
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';

  document.addEventListener('keydown', handleModalEscape);
};

window.closeModal = function closeModal() {
  const existing = document.querySelector('.mh-modal-overlay');
  if (existing) {
    existing.remove();
    document.body.style.overflow = '';
    document.removeEventListener('keydown', handleModalEscape);
  }
};

function handleModalEscape(e) {
  if (e.key === 'Escape') window.closeModal();
}

/* ====================================================================
   10. HERO DETAIL PANEL
   ==================================================================== */
window.showHeroDetail = function showHeroDetail(heroId) {
  const heroes = window.HEROES || [];
  const hero = Array.isArray(heroes)
    ? heroes.find(function (h) { return h.id === heroId; })
    : heroes[heroId];
  if (!hero) return;

  const region = (hero.region || 'central').toLowerCase();
  const colors = REGION_COLORS[region] || REGION_COLORS.central;
  const animalName = hero.animal ? (typeof hero.animal === 'string' ? hero.animal : hero.animal.name) : '';

  // Handle nested vs flat data structure
  const heroName = (hero.hero && hero.hero.name) || hero.name || 'Unknown';
  const heroTitle = (hero.hero && hero.hero.title) || hero.title || '';
  const heroEpithet = (hero.hero && hero.hero.epithet) || hero.epithet || '';
  const heroGender = ((hero.hero && hero.hero.gender) || hero.gender || 'male').toLowerCase();
  const genderLabel = heroGender === 'female' ? '&#9792; Female' : '&#9794; Male';

  // Backstory fields (under hero.backstory or flat)
  const backstoryData = hero.backstory || {};
  const heroOrigin = backstoryData.origin || hero.origin || '';
  const heroSummary = backstoryData.summary || hero.summary || '';
  const heroFamilyDrama = backstoryData.familyDrama || hero.familyDrama || '';
  const backstoryTimespan = backstoryData.timespan || hero.backstoryTimespan || '';
  const timespan = backstoryTimespan ? ` <span class="timespan">(${backstoryTimespan})</span>` : '';

  // Tattoo milestones
  const tattooStages = (hero.tattoo && hero.tattoo.stages) ? hero.tattoo.stages : [];
  const milestoneHTML = tattooStages.length
    ? tattooStages.map(function (s, i) {
        return `<p class="milestone"><strong>Stage ${i + 1} — ${s.name || ''}:</strong> ${s.milestone || ''}</p>`;
      }).join('')
    : '';

  // Story page link
  const storyLink = `stories/asia/india/${region}/${hero.id}/index.html`;

  const portrait = window.generateHeroSVG(hero);
  const tattoo = window.renderTattooProgress(hero, true);

  const overview = `
    <div class="detail-section">
      <p style="margin-bottom:8px;"><span style="font-size:0.8em; padding:3px 10px; border-radius:10px; border:1px solid; ${heroGender === 'female' ? 'border-color:#ff66cc; color:#ff66cc;' : 'border-color:#7b9eff; color:#7b9eff;'}">${genderLabel}</span></p>
      ${hero.appearance ? `<p><strong>Appearance:</strong> ${hero.appearance}</p>` : ''}
      ${hero.personality ? `<p><strong>Personality:</strong> ${hero.personality}</p>` : ''}
      ${hero.fightingStyle ? `<p><strong>Fighting Style:</strong> ${hero.fightingStyle}</p>` : ''}
      ${hero.weapon ? `<p><strong>Weapon:</strong> ${hero.weapon}</p>` : ''}
      <p style="margin-top:15px;"><a href="${storyLink}" style="color:var(--gold); text-decoration:none; border:1px solid var(--gold-dim); padding:6px 18px; border-radius:20px; font-size:0.85em;">View Kingdom Story &rarr;</a></p>
    </div>`;

  const backstory = `
    <div class="detail-section">
      ${heroOrigin ? `<p><strong>Origin:</strong> ${heroOrigin}</p>` : ''}
      ${heroSummary ? `<p><strong>Summary:</strong>${timespan} ${heroSummary}</p>` : ''}
      ${heroFamilyDrama ? `<p><strong>Family Drama:</strong> ${heroFamilyDrama}</p>` : ''}
    </div>`;

  const tattooTab = `
    <div class="detail-section">
      <h3>Tattoo Progression &mdash; ${animalName}</h3>
      ${tattoo}
      ${milestoneHTML}
    </div>`;

  const html = `
    <div class="hero-detail" style="--region-color: ${colors.primary}; --region-aura: ${colors.aura};">
      <div class="hero-detail-portrait">${portrait}</div>
      <div class="hero-detail-main">
        <header class="hero-detail-header">
          <h2 class="hero-detail-name">${heroName}</h2>
          <p class="hero-detail-title">${heroTitle}</p>
          ${heroEpithet ? `<p class="hero-detail-epithet">"${heroEpithet}"</p>` : ''}
          <p class="hero-detail-meta">${hero.state || ''} &mdash; ${region}</p>
        </header>
        <nav class="hero-detail-tabs" role="tablist">
          <button class="tab-btn active" data-tab="overview" role="tab" aria-selected="true">Overview</button>
          <button class="tab-btn" data-tab="backstory" role="tab" aria-selected="false">Backstory</button>
          <button class="tab-btn" data-tab="tattoo" role="tab" aria-selected="false">Tattoo Progress</button>
        </nav>
        <div class="hero-detail-tab-content">
          <div class="tab-panel active" data-panel="overview">${overview}</div>
          <div class="tab-panel" data-panel="backstory">${backstory}</div>
          <div class="tab-panel" data-panel="tattoo">${tattooTab}</div>
        </div>
      </div>
    </div>`;

  window.openModal(html);

  // Wire up tabs after modal is in the DOM
  requestAnimationFrame(function () {
    const tabs = document.querySelectorAll('.hero-detail-tabs .tab-btn');
    const panels = document.querySelectorAll('.hero-detail-tab-content .tab-panel');
    tabs.forEach(function (btn) {
      btn.addEventListener('click', function () {
        tabs.forEach(function (t) { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
        panels.forEach(function (p) { p.classList.remove('active'); });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        const target = btn.getAttribute('data-tab');
        const panel = document.querySelector('[data-panel="' + target + '"]');
        if (panel) panel.classList.add('active');
      });
    });
  });
};

/* ====================================================================
   11. FILTER SYSTEM
   ==================================================================== */
window.setupFilters = function setupFilters(containerSelector, cardSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const buttons = container.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll(cardSelector);
  const activeFilters = { region: null, gender: null };

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const filterType = btn.dataset.filterType || 'region';
      const filterValue = btn.dataset.filterValue || btn.textContent.trim().toLowerCase();

      // Toggle: deactivate if already active
      if (btn.classList.contains('active')) {
        btn.classList.remove('active');
        activeFilters[filterType] = null;
      } else {
        // Deactivate sibling buttons of the same filter type
        buttons.forEach(function (b) {
          if ((b.dataset.filterType || 'region') === filterType) b.classList.remove('active');
        });
        btn.classList.add('active');
        activeFilters[filterType] = filterValue;
      }

      applyFilters(cards, activeFilters);
    });
  });
};

function applyFilters(cards, activeFilters) {
  cards.forEach(function (card) {
    const regionMatch = !activeFilters.region || card.dataset.region === activeFilters.region;
    const genderMatch = !activeFilters.gender || card.dataset.gender === activeFilters.gender;
    const visible = regionMatch && genderMatch;

    if (visible) {
      card.style.opacity = '0';
      card.style.display = '';
      requestAnimationFrame(function () {
        card.style.transition = 'opacity 0.3s ease';
        card.style.opacity = '1';
      });
    } else {
      card.style.transition = 'opacity 0.3s ease';
      card.style.opacity = '0';
      setTimeout(function () { card.style.display = 'none'; }, 300);
    }
  });
}

/* ====================================================================
   12. SCROLL ANIMATION SYSTEM
   ==================================================================== */
function initScrollAnimations() {
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
    observer.observe(el);
  });
}

/* ====================================================================
   13. NAVIGATION SYSTEM
   ==================================================================== */
function initNavigation() {
  // Mobile hamburger toggle
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      navLinks.classList.toggle('open');
    });

    // Close nav when a link is clicked (mobile UX)
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active page highlighting
  highlightActiveNavLink();

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function highlightActiveNavLink() {
  const path = window.location.pathname;
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(function (link) {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (!href) return;
    // Match exact path or filename
    if (path === href || path.endsWith('/' + href) || path.endsWith(href)) {
      link.classList.add('active');
    }
  });
}

/* ====================================================================
   14. INITIALIZATION
   ==================================================================== */
/* ====================================================================
   15. PRINT BUTTON & PRINT HANDLERS
   ==================================================================== */

function injectPrintButton() {
  if (document.getElementById('hulmane-print-btn')) return;
  var btn = document.createElement('button');
  btn.id = 'hulmane-print-btn';
  btn.title = 'Print this page with full colour theme and images';
  btn.innerHTML =
    '<svg viewBox="0 0 24 24" aria-hidden="true">' +
      '<polyline points="6 9 6 2 18 2 18 9"/>' +
      '<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>' +
      '<rect x="6" y="14" width="12" height="8"/>' +
    '</svg>' +
    'Print';
  btn.addEventListener('click', function () { window.print(); });
  document.body.appendChild(btn);
}

// Before printing: expand all collapsed sections so full content prints
window.addEventListener('beforeprint', function () {
  document.querySelectorAll('.saga-text').forEach(function (el) {
    el.dataset._hadExpanded = el.classList.contains('expanded') ? '1' : '';
    el.classList.add('expanded');
  });
  document.querySelectorAll('.kingdom-body').forEach(function (el) {
    el.dataset._printH = el.style.maxHeight || '';
    el.dataset._printO = el.style.overflow  || '';
    el.style.maxHeight = 'none';
    el.style.overflow  = 'visible';
    el.style.display   = 'block';
  });
});

// After printing: restore collapsed state
window.addEventListener('afterprint', function () {
  document.querySelectorAll('.saga-text').forEach(function (el) {
    if (!el.dataset._hadExpanded) el.classList.remove('expanded');
    delete el.dataset._hadExpanded;
  });
  document.querySelectorAll('.kingdom-body').forEach(function (el) {
    el.style.maxHeight = el.dataset._printH || '';
    el.style.overflow  = el.dataset._printO || '';
    delete el.dataset._printH;
    delete el.dataset._printO;
  });
});

document.addEventListener('DOMContentLoaded', function () {
  initScrollAnimations();
  initNavigation();

  // Auto-setup filters if the standard container exists
  if (document.querySelector('.hero-filters')) {
    window.setupFilters('.hero-filters', '.hero-card');
  }

  highlightActiveNavLink();
  injectPrintButton();
});
