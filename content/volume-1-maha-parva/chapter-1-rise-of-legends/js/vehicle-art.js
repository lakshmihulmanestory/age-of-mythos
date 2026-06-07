// vehicle-art.js — SVG vehicle illustrations for all 28 kingdoms
// window.renderVehicleSVG(type, color, label) → SVG string

(function () {
  'use strict';

  var SVGS = {

    // ── ANCIENT ────────────────────────────────────────────────────────

    'river-boat': function (c) {
      return '<ellipse cx="160" cy="148" rx="110" ry="22" fill="' + c + '22" stroke="' + c + '66" stroke-width="1.5"/>' +
        '<path d="M60 148 Q80 110 160 105 Q240 110 260 148 Z" fill="' + c + '18" stroke="' + c + '" stroke-width="1.8"/>' +
        '<line x1="160" y1="105" x2="160" y2="55" stroke="' + c + '" stroke-width="2"/>' +
        '<polygon points="160,58 160,95 220,76" fill="' + c + '88"/>' +
        '<path d="M50 155 Q100 145 160 148 Q220 151 270 155" fill="none" stroke="' + c + '44" stroke-width="2"/>' +
        '<path d="M40 162 Q100 152 160 155 Q220 158 280 162" fill="none" stroke="' + c + '33" stroke-width="1.5"/>';
    },

    'ocean-dhow': function (c) {
      return '<path d="M80 150 L240 150 L220 120 L100 120 Z" fill="' + c + '22" stroke="' + c + '" stroke-width="1.8"/>' +
        '<line x1="130" y1="120" x2="130" y2="55" stroke="' + c + '" stroke-width="2.5"/>' +
        '<polygon points="130,58 130,115 200,88" fill="' + c + 'bb"/>' +
        '<line x1="200" y1="88" x2="270" y2="72" stroke="' + c + '" stroke-width="1.5"/>' +
        '<polygon points="200,88 270,72 270,108" fill="' + c + '66"/>' +
        '<path d="M70 160 Q160 150 260 160" fill="none" stroke="' + c + '44" stroke-width="3"/>' +
        '<circle cx="100" cy="115" r="4" fill="' + c + '"/>' +
        '<circle cx="230" cy="115" r="4" fill="' + c + '"/>';
    },

    'chariot': function (c) {
      return '<circle cx="100" cy="155" r="30" fill="none" stroke="' + c + '" stroke-width="2.5"/>' +
        '<circle cx="220" cy="155" r="30" fill="none" stroke="' + c + '" stroke-width="2.5"/>' +
        '<circle cx="100" cy="155" r="8" fill="' + c + '44" stroke="' + c + '" stroke-width="1.5"/>' +
        '<circle cx="220" cy="155" r="8" fill="' + c + '44" stroke="' + c + '" stroke-width="1.5"/>' +
        '<line x1="100" y1="155" x2="220" y2="155" stroke="' + c + '" stroke-width="3"/>' +
        '<path d="M100 155 L100 100 L200 100 L220 125 L220 155" fill="' + c + '15" stroke="' + c + '" stroke-width="1.8"/>' +
        '<path d="M75 100 L60 130 L45 115" fill="none" stroke="' + c + '88" stroke-width="2"/>' +
        '<ellipse cx="55" cy="108" rx="18" ry="22" fill="' + c + '22" stroke="' + c + '66" stroke-width="1.5"/>' +
        '<ellipse cx="80" cy="112" rx="18" ry="22" fill="' + c + '22" stroke="' + c + '66" stroke-width="1.5"/>';
    },

    'lion-chariot': function (c) {
      return '<circle cx="100" cy="155" r="28" fill="none" stroke="' + c + '" stroke-width="2.5"/>' +
        '<circle cx="215" cy="155" r="28" fill="none" stroke="' + c + '" stroke-width="2.5"/>' +
        '<line x1="100" y1="155" x2="215" y2="155" stroke="' + c + '" stroke-width="3"/>' +
        '<path d="M100 155 L100 105 L195 105 L215 128 L215 155" fill="' + c + '18" stroke="' + c + '" stroke-width="1.8"/>' +
        // lion head silhouette
        '<ellipse cx="58" cy="118" rx="20" ry="16" fill="' + c + '33" stroke="' + c + '88" stroke-width="1.5"/>' +
        '<circle cx="58" cy="118" r="11" fill="' + c + '55"/>' +
        '<path d="M38 118 Q48 105 58 108 Q68 105 78 118" fill="' + c + '22" stroke="' + c + '66" stroke-width="1"/>' +
        '<line x1="58" y1="134" x2="45" y2="155" stroke="' + c + '88" stroke-width="2"/>' +
        '<line x1="45" y1="155" x2="30" y2="155" stroke="' + c + '88" stroke-width="2"/>';
    },

    'elephant-mount': function (c) {
      return '<ellipse cx="160" cy="135" rx="90" ry="55" fill="' + c + '18" stroke="' + c + '" stroke-width="2"/>' +
        '<ellipse cx="85" cy="115" rx="35" ry="30" fill="' + c + '22" stroke="' + c + '" stroke-width="1.8"/>' +
        '<path d="M60 130 Q50 150 55 170 Q62 160 68 170 Q72 150 75 140" fill="' + c + '22" stroke="' + c + '" stroke-width="1.5"/>' +
        '<rect x="115" y="165" width="20" height="25" rx="5" fill="' + c + '22" stroke="' + c + '" stroke-width="1.5"/>' +
        '<rect x="145" y="165" width="20" height="25" rx="5" fill="' + c + '22" stroke="' + c + '" stroke-width="1.5"/>' +
        '<rect x="175" y="165" width="20" height="25" rx="5" fill="' + c + '22" stroke="' + c + '" stroke-width="1.5"/>' +
        '<rect x="205" y="165" width="20" height="25" rx="5" fill="' + c + '22" stroke="' + c + '" stroke-width="1.5"/>' +
        '<path d="M125 90 L155 70 L165 90" fill="' + c + '33" stroke="' + c + '" stroke-width="1.5"/>' +
        '<circle cx="80" cy="100" r="6" fill="' + c + '"/>';
    },

    'elephant-chariot': function (c) {
      return '<ellipse cx="140" cy="140" rx="85" ry="50" fill="' + c + '18" stroke="' + c + '" stroke-width="2"/>' +
        '<ellipse cx="72" cy="118" rx="32" ry="28" fill="' + c + '22" stroke="' + c + '" stroke-width="1.8"/>' +
        '<path d="M52 128 Q42 148 48 165 Q54 155 60 165 Q64 148 68 138" fill="' + c + '22" stroke="' + c + '" stroke-width="1.5"/>' +
        '<rect x="140" y="100" width="70" height="50" rx="4" fill="' + c + '28" stroke="' + c + '" stroke-width="2"/>' +
        '<path d="M140 100 L155 80 L210 80 L225 100" fill="' + c + '33" stroke="' + c + '" stroke-width="1.5"/>' +
        '<rect x="108" y="162" width="18" height="24" rx="4" fill="' + c + '22" stroke="' + c + '" stroke-width="1.5"/>' +
        '<rect x="195" y="162" width="18" height="24" rx="4" fill="' + c + '22" stroke="' + c + '" stroke-width="1.5"/>';
    },

    'deer-mount': function (c) {
      return '<ellipse cx="155" cy="145" rx="70" ry="38" fill="' + c + '18" stroke="' + c + '" stroke-width="2"/>' +
        '<ellipse cx="95" cy="125" rx="28" ry="22" fill="' + c + '22" stroke="' + c + '" stroke-width="1.8"/>' +
        // antlers
        '<path d="M85 110 Q78 90 70 78 M78 90 Q72 82 68 72 M85 110 Q92 90 100 78 M92 90 Q98 82 104 72" fill="none" stroke="' + c + '" stroke-width="2"/>' +
        // legs
        '<line x1="130" y1="175" x2="125" y2="200" stroke="' + c + '" stroke-width="2.5"/>' +
        '<line x1="150" y1="178" x2="148" y2="205" stroke="' + c + '" stroke-width="2.5"/>' +
        '<line x1="185" y1="175" x2="183" y2="200" stroke="' + c + '" stroke-width="2.5"/>' +
        '<line x1="205" y1="172" x2="208" y2="198" stroke="' + c + '" stroke-width="2.5"/>' +
        // rider silhouette
        '<ellipse cx="170" cy="118" rx="16" ry="20" fill="' + c + '33" stroke="' + c + '88" stroke-width="1.5"/>' +
        '<circle cx="170" cy="98" r="10" fill="' + c + '44" stroke="' + c + '" stroke-width="1.5"/>';
    },

    'rhino-mount': function (c) {
      return '<ellipse cx="160" cy="148" rx="100" ry="45" fill="' + c + '18" stroke="' + c + '" stroke-width="2"/>' +
        '<ellipse cx="72" cy="130" rx="38" ry="30" fill="' + c + '22" stroke="' + c + '" stroke-width="1.8"/>' +
        // horn
        '<polygon points="42,120 52,95 62,120" fill="' + c + 'aa" stroke="' + c + '" stroke-width="1.5"/>' +
        // armor plates
        '<path d="M100 120 L240 120 M100 135 L240 135 M100 150 L240 150" stroke="' + c + '44" stroke-width="1.5" fill="none"/>' +
        // legs
        '<rect x="108" y="180" width="18" height="22" rx="4" fill="' + c + '22" stroke="' + c + '" stroke-width="1.5"/>' +
        '<rect x="150" y="183" width="18" height="19" rx="4" fill="' + c + '22" stroke="' + c + '" stroke-width="1.5"/>' +
        '<rect x="195" y="183" width="18" height="19" rx="4" fill="' + c + '22" stroke="' + c + '" stroke-width="1.5"/>' +
        '<rect x="235" y="178" width="18" height="24" rx="4" fill="' + c + '22" stroke="' + c + '" stroke-width="1.5"/>' +
        // rider
        '<ellipse cx="175" cy="108" rx="18" ry="22" fill="' + c + '33" stroke="' + c + '88" stroke-width="1.5"/>' +
        '<circle cx="175" cy="86" r="11" fill="' + c + '55" stroke="' + c + '" stroke-width="1.5"/>';
    },

    'yak-mount': function (c) {
      return '<ellipse cx="160" cy="148" rx="85" ry="42" fill="' + c + '18" stroke="' + c + '" stroke-width="2"/>' +
        '<ellipse cx="82" cy="128" rx="32" ry="26" fill="' + c + '22" stroke="' + c + '" stroke-width="1.8"/>' +
        // horns
        '<path d="M68 114 Q55 100 48 88 M96 114 Q109 100 116 88" fill="none" stroke="' + c + '" stroke-width="2.5"/>' +
        // shaggy fur lines
        '<path d="M95 175 Q105 185 100 195 M130 180 Q135 192 130 200 M170 180 Q175 192 170 200 M205 178 Q212 190 208 198" fill="none" stroke="' + c + '55" stroke-width="2"/>' +
        // legs
        '<rect x="105" y="178" width="16" height="24" rx="4" fill="' + c + '22" stroke="' + c + '" stroke-width="1.5"/>' +
        '<rect x="145" y="180" width="16" height="22" rx="4" fill="' + c + '22" stroke="' + c + '" stroke-width="1.5"/>' +
        '<rect x="190" y="180" width="16" height="22" rx="4" fill="' + c + '22" stroke="' + c + '" stroke-width="1.5"/>' +
        '<rect x="228" y="176" width="16" height="26" rx="4" fill="' + c + '22" stroke="' + c + '" stroke-width="1.5"/>' +
        // rider
        '<circle cx="170" cy="92" r="12" fill="' + c + '55" stroke="' + c + '" stroke-width="1.5"/>' +
        '<rect x="155" y="104" width="30" height="32" rx="5" fill="' + c + '33" stroke="' + c + '88" stroke-width="1.5"/>';
    },

    'snow-leopard-mount': function (c) {
      return '<ellipse cx="155" cy="148" rx="78" ry="36" fill="' + c + '18" stroke="' + c + '" stroke-width="2"/>' +
        '<ellipse cx="85" cy="128" rx="30" ry="24" fill="' + c + '22" stroke="' + c + '" stroke-width="1.8"/>' +
        // spots pattern
        '<circle cx="130" cy="138" r="5" fill="' + c + '33"/><circle cx="155" cy="132" r="4" fill="' + c + '33"/>' +
        '<circle cx="180" cy="140" r="5" fill="' + c + '33"/><circle cx="205" cy="133" r="4" fill="' + c + '33"/>' +
        // long tail
        '<path d="M220 148 Q250 138 268 158 Q255 165 235 155" fill="' + c + '22" stroke="' + c + '" stroke-width="1.8"/>' +
        // legs
        '<line x1="118" y1="172" x2="112" y2="198" stroke="' + c + '" stroke-width="2.5"/>' +
        '<line x1="145" y1="175" x2="142" y2="200" stroke="' + c + '" stroke-width="2.5"/>' +
        '<line x1="182" y1="175" x2="180" y2="200" stroke="' + c + '" stroke-width="2.5"/>' +
        '<line x1="210" y1="172" x2="213" y2="198" stroke="' + c + '" stroke-width="2.5"/>' +
        // rider
        '<circle cx="155" cy="95" r="11" fill="' + c + '55" stroke="' + c + '" stroke-width="1.5"/>' +
        '<rect x="140" y="106" width="30" height="30" rx="4" fill="' + c + '33" stroke="' + c + '88" stroke-width="1.5"/>';
    },

    'bull-mount': function (c) {
      return '<ellipse cx="160" cy="148" rx="92" ry="44" fill="' + c + '18" stroke="' + c + '" stroke-width="2"/>' +
        '<ellipse cx="76" cy="125" rx="34" ry="28" fill="' + c + '22" stroke="' + c + '" stroke-width="1.8"/>' +
        // horns
        '<path d="M58 110 Q44 94 38 80 M94 110 Q108 94 114 80" fill="none" stroke="' + c + '" stroke-width="2.5"/>' +
        // hump
        '<path d="M120 120 Q145 95 165 118" fill="' + c + '22" stroke="' + c + '" stroke-width="1.5"/>' +
        // legs
        '<rect x="110" y="178" width="18" height="24" rx="4" fill="' + c + '22" stroke="' + c + '" stroke-width="1.5"/>' +
        '<rect x="148" y="180" width="18" height="22" rx="4" fill="' + c + '22" stroke="' + c + '" stroke-width="1.5"/>' +
        '<rect x="190" y="180" width="18" height="22" rx="4" fill="' + c + '22" stroke="' + c + '" stroke-width="1.5"/>' +
        '<rect x="228" y="178" width="18" height="24" rx="4" fill="' + c + '22" stroke="' + c + '" stroke-width="1.5"/>' +
        // rider
        '<ellipse cx="180" cy="108" rx="18" ry="22" fill="' + c + '33" stroke="' + c + '88" stroke-width="1.5"/>' +
        '<circle cx="180" cy="86" r="11" fill="' + c + '55" stroke="' + c + '" stroke-width="1.5"/>';
    },

    'buffalo-mount': function (c) {
      return '<ellipse cx="160" cy="150" rx="95" ry="46" fill="' + c + '18" stroke="' + c + '" stroke-width="2"/>' +
        '<ellipse cx="72" cy="126" rx="36" ry="30" fill="' + c + '22" stroke="' + c + '" stroke-width="1.8"/>' +
        // wide curved horns
        '<path d="M50 110 Q30 88 35 68 Q45 72 48 88 Q54 108 58 112" fill="' + c + '22" stroke="' + c + '" stroke-width="2.5"/>' +
        '<path d="M94 110 Q114 88 109 68 Q99 72 96 88 Q90 108 86 112" fill="' + c + '22" stroke="' + c + '" stroke-width="2.5"/>' +
        // dark shaggy coat lines
        '<path d="M110 158 Q125 170 115 182 M145 165 Q155 178 148 188 M190 165 Q200 178 193 188" fill="none" stroke="' + c + '44" stroke-width="2"/>' +
        // legs
        '<rect x="108" y="180" width="18" height="24" rx="4" fill="' + c + '22" stroke="' + c + '" stroke-width="1.5"/>' +
        '<rect x="148" y="182" width="18" height="22" rx="4" fill="' + c + '22" stroke="' + c + '" stroke-width="1.5"/>' +
        '<rect x="190" y="182" width="18" height="22" rx="4" fill="' + c + '22" stroke="' + c + '" stroke-width="1.5"/>' +
        '<rect x="228" y="178" width="18" height="26" rx="4" fill="' + c + '22" stroke="' + c + '" stroke-width="1.5"/>' +
        // rider
        '<circle cx="178" cy="90" r="12" fill="' + c + '55" stroke="' + c + '" stroke-width="1.5"/>' +
        '<rect x="162" y="102" width="32" height="36" rx="5" fill="' + c + '33" stroke="' + c + '88" stroke-width="1.5"/>';
    },

    'mountain-carrier': function (c) {
      return '<rect x="90" y="130" width="140" height="40" rx="5" fill="' + c + '22" stroke="' + c + '" stroke-width="2"/>' +
        '<rect x="110" y="100" width="100" height="32" rx="4" fill="' + c + '18" stroke="' + c + '" stroke-width="1.5"/>' +
        // carrier poles
        '<line x1="90" y1="140" x2="50" y2="175" stroke="' + c + '" stroke-width="2.5"/>' +
        '<line x1="230" y1="140" x2="270" y2="175" stroke="' + c + '" stroke-width="2.5"/>' +
        '<line x1="110" y1="170" x2="70" y2="190" stroke="' + c + '" stroke-width="2"/>' +
        '<line x1="210" y1="170" x2="250" y2="190" stroke="' + c + '" stroke-width="2"/>' +
        // warriors carrying
        '<ellipse cx="52" cy="182" rx="14" ry="18" fill="' + c + '33" stroke="' + c + '88" stroke-width="1.5"/>' +
        '<ellipse cx="268" cy="182" rx="14" ry="18" fill="' + c + '33" stroke="' + c + '88" stroke-width="1.5"/>' +
        '<ellipse cx="72" cy="196" rx="12" ry="15" fill="' + c + '33" stroke="' + c + '88" stroke-width="1.5"/>' +
        '<ellipse cx="248" cy="196" rx="12" ry="15" fill="' + c + '33" stroke="' + c + '88" stroke-width="1.5"/>' +
        // mountain peak bg hint
        '<path d="M60 80 L160 30 L260 80" fill="none" stroke="' + c + '22" stroke-width="2"/>';
    },

    'rope-network': function (c) {
      return '<rect x="50" y="80" width="40" height="130" rx="8" fill="' + c + '22" stroke="' + c + '" stroke-width="2"/>' +
        '<rect x="230" y="80" width="40" height="130" rx="8" fill="' + c + '22" stroke="' + c + '" stroke-width="2"/>' +
        '<line x1="90" y1="100" x2="230" y2="100" stroke="' + c + '" stroke-width="2.5"/>' +
        '<line x1="90" y1="130" x2="230" y2="130" stroke="' + c + '" stroke-width="2"/>' +
        '<line x1="90" y1="160" x2="230" y2="160" stroke="' + c + '" stroke-width="2"/>' +
        // hanging pulley
        '<circle cx="160" cy="100" r="10" fill="none" stroke="' + c + '" stroke-width="2"/>' +
        '<rect x="145" y="110" width="30" height="40" rx="5" fill="' + c + '33" stroke="' + c + '88" stroke-width="2"/>' +
        // diagonal ropes
        '<line x1="90" y1="100" x2="160" y2="145" stroke="' + c + '55" stroke-width="1.5"/>' +
        '<line x1="230" y1="100" x2="160" y2="145" stroke="' + c + '55" stroke-width="1.5"/>' +
        // figure on platform
        '<ellipse cx="160" cy="122" rx="10" ry="12" fill="' + c + '66" stroke="' + c + '" stroke-width="1.5"/>' +
        '<circle cx="160" cy="110" r="7" fill="' + c + '88" stroke="' + c + '" stroke-width="1.5"/>';
    },

    'dirigible': function (c) {
      return '<ellipse cx="160" cy="100" rx="120" ry="55" fill="' + c + '22" stroke="' + c + '" stroke-width="2"/>' +
        '<ellipse cx="160" cy="100" rx="80" ry="35" fill="' + c + '18"/>' +
        '<line x1="100" y1="148" x2="90" y2="170" stroke="' + c + '" stroke-width="1.5"/>' +
        '<line x1="160" y1="152" x2="160" y2="172" stroke="' + c + '" stroke-width="1.5"/>' +
        '<line x1="220" y1="148" x2="230" y2="170" stroke="' + c + '" stroke-width="1.5"/>' +
        '<rect x="85" y="168" width="150" height="35" rx="8" fill="' + c + '28" stroke="' + c + '" stroke-width="2"/>' +
        '<path d="M40 85 Q55 65 70 75 M280 85 Q265 65 250 75" fill="none" stroke="' + c + '66" stroke-width="1.5"/>' +
        '<circle cx="130" cy="85" r="5" fill="' + c + '55"/>' +
        '<circle cx="160" cy="78" r="5" fill="' + c + '55"/>' +
        '<circle cx="190" cy="85" r="5" fill="' + c + '55"/>';
    },

    // ── MODERN ─────────────────────────────────────────────────────────

    'hydrofoil': function (c) {
      return '<path d="M60 130 L260 130 L240 110 L80 110 Z" fill="' + c + '22" stroke="' + c + '" stroke-width="2"/>' +
        '<path d="M80 110 L100 80 L220 80 L240 110" fill="' + c + '18" stroke="' + c + '" stroke-width="1.8"/>' +
        // foil struts
        '<line x1="110" y1="130" x2="110" y2="165" stroke="' + c + '" stroke-width="2.5"/>' +
        '<line x1="210" y1="130" x2="210" y2="165" stroke="' + c + '" stroke-width="2.5"/>' +
        '<line x1="80" y1="165" x2="145" y2="165" stroke="' + c + '" stroke-width="3"/>' +
        '<line x1="175" y1="165" x2="240" y2="165" stroke="' + c + '" stroke-width="3"/>' +
        // cockpit
        '<ellipse cx="160" cy="88" rx="25" ry="15" fill="' + c + '44" stroke="' + c + '" stroke-width="1.5"/>' +
        // wake lines
        '<path d="M40 175 Q160 165 280 175" fill="none" stroke="' + c + '44" stroke-width="2"/>';
    },

    'motorcycle': function (c) {
      return '<circle cx="90" cy="165" r="32" fill="none" stroke="' + c + '" stroke-width="2.5"/>' +
        '<circle cx="230" cy="165" r="32" fill="none" stroke="' + c + '" stroke-width="2.5"/>' +
        '<circle cx="90" cy="165" r="10" fill="' + c + '44" stroke="' + c + '" stroke-width="1.5"/>' +
        '<circle cx="230" cy="165" r="10" fill="' + c + '44" stroke="' + c + '" stroke-width="1.5"/>' +
        '<line x1="90" y1="165" x2="230" y2="165" stroke="' + c + '" stroke-width="2.5"/>' +
        '<path d="M90 165 L115 120 L190 110 L230 130 L230 165" fill="' + c + '18" stroke="' + c + '" stroke-width="2"/>' +
        '<path d="M175 110 L190 85 L215 90 L205 112" fill="' + c + '28" stroke="' + c + '" stroke-width="1.8"/>' +
        '<ellipse cx="160" cy="108" rx="25" ry="18" fill="' + c + '33" stroke="' + c + '88" stroke-width="1.5"/>' +
        '<circle cx="160" cy="90" r="11" fill="' + c + '44" stroke="' + c + '" stroke-width="1.5"/>';
    },

    'mountain-atv': function (c) {
      return '<rect x="70" y="110" width="180" height="65" rx="10" fill="' + c + '22" stroke="' + c + '" stroke-width="2"/>' +
        '<rect x="85" y="85" width="145" height="38" rx="8" fill="' + c + '18" stroke="' + c + '" stroke-width="1.8"/>' +
        // wheels with thick treads
        '<circle cx="108" cy="178" r="28" fill="none" stroke="' + c + '" stroke-width="5"/>' +
        '<circle cx="212" cy="178" r="28" fill="none" stroke="' + c + '" stroke-width="5"/>' +
        '<circle cx="108" cy="178" r="12" fill="' + c + '33"/>' +
        '<circle cx="212" cy="178" r="12" fill="' + c + '33"/>' +
        // magnetic tracks hint
        '<path d="M80 175 Q108 162 138 175 Q160 182 182 175 Q212 162 240 175" fill="none" stroke="' + c + '55" stroke-width="2"/>' +
        // windshield
        '<rect x="100" y="88" width="110" height="30" rx="5" fill="' + c + '44" stroke="' + c + '88" stroke-width="1.5"/>';
    },

    'armored-transport': function (c) {
      return '<rect x="55" y="120" width="210" height="65" rx="8" fill="' + c + '22" stroke="' + c + '" stroke-width="2"/>' +
        '<path d="M70 120 L80 85 L240 85 L250 120" fill="' + c + '18" stroke="' + c + '" stroke-width="2"/>' +
        '<circle cx="100" cy="190" r="28" fill="none" stroke="' + c + '" stroke-width="4"/>' +
        '<circle cx="220" cy="190" r="28" fill="none" stroke="' + c + '" stroke-width="4"/>' +
        '<circle cx="100" cy="190" r="10" fill="' + c + '33"/>' +
        '<circle cx="220" cy="190" r="10" fill="' + c + '33"/>' +
        // armor ridges
        '<path d="M55 138 L265 138 M55 152 L265 152" stroke="' + c + '44" stroke-width="2" fill="none"/>' +
        // front ram
        '<rect x="40" y="128" width="20" height="42" rx="4" fill="' + c + '33" stroke="' + c + '" stroke-width="1.5"/>' +
        // windshield
        '<rect x="98" y="88" width="120" height="28" rx="4" fill="' + c + '44" stroke="' + c + '88" stroke-width="1.5"/>';
    },

    'wall-climbing-bike': function (c) {
      return '<circle cx="88" cy="162" r="30" fill="none" stroke="' + c + '" stroke-width="2.5"/>' +
        '<circle cx="228" cy="162" r="30" fill="none" stroke="' + c + '" stroke-width="2.5"/>' +
        '<line x1="88" y1="162" x2="228" y2="162" stroke="' + c + '" stroke-width="2.5"/>' +
        '<path d="M88 162 L112 118 L188 108 L228 128 L228 162" fill="' + c + '18" stroke="' + c + '" stroke-width="2"/>' +
        // electromagnet pads on wheels
        '<path d="M62 148 Q72 138 82 148 Q92 158 102 148" fill="none" stroke="' + c + '88" stroke-width="2"/>' +
        '<path d="M202 148 Q212 138 222 148 Q232 158 242 148" fill="none" stroke="' + c + '88" stroke-width="2"/>' +
        // wall on the side
        '<rect x="265" y="60" width="25" height="150" fill="' + c + '11" stroke="' + c + '33" stroke-width="1"/>' +
        // climbing indicator arrows
        '<path d="M255 130 L255 80 M248 90 L255 80 L262 90" fill="none" stroke="' + c + '55" stroke-width="1.5"/>' +
        '<circle cx="158" cy="106" r="10" fill="' + c + '44" stroke="' + c + '" stroke-width="1.5"/>';
    },

    'command-suv': function (c) {
      return '<rect x="50" y="118" width="220" height="62" rx="10" fill="' + c + '22" stroke="' + c + '" stroke-width="2"/>' +
        '<path d="M68 118 L82 82 L238 82 L252 118" fill="' + c + '18" stroke="' + c + '" stroke-width="2"/>' +
        '<circle cx="96" cy="185" r="24" fill="none" stroke="' + c + '" stroke-width="4"/>' +
        '<circle cx="224" cy="185" r="24" fill="none" stroke="' + c + '" stroke-width="4"/>' +
        '<circle cx="96" cy="185" r="8" fill="' + c + '44"/>' +
        '<circle cx="224" cy="185" r="8" fill="' + c + '44"/>' +
        // gold trim lines
        '<rect x="50" y="118" width="220" height="4" rx="2" fill="' + c + '66"/>' +
        // windshield
        '<rect x="100" y="84" width="120" height="30" rx="5" fill="' + c + '55" stroke="' + c + '88" stroke-width="1.5"/>' +
        // side windows
        '<rect x="60" y="92" width="40" height="22" rx="4" fill="' + c + '44" stroke="' + c + '66" stroke-width="1"/>' +
        '<rect x="220" y="92" width="40" height="22" rx="4" fill="' + c + '44" stroke="' + c + '66" stroke-width="1"/>';
    },

    'amphibious': function (c) {
      return '<path d="M55 135 L265 135 L250 110 L70 110 Z" fill="' + c + '22" stroke="' + c + '" stroke-width="2"/>' +
        '<path d="M70 110 L85 78 L235 78 L250 110" fill="' + c + '18" stroke="' + c + '" stroke-width="1.8"/>' +
        // wheels that are also propellers
        '<circle cx="100" cy="152" r="20" fill="none" stroke="' + c + '" stroke-width="3"/>' +
        '<circle cx="220" cy="152" r="20" fill="none" stroke="' + c + '" stroke-width="3"/>' +
        // propeller blades
        '<line x1="100" y1="135" x2="100" y2="169" stroke="' + c + '88" stroke-width="2"/>' +
        '<line x1="83" y1="152" x2="117" y2="152" stroke="' + c + '88" stroke-width="2"/>' +
        '<line x1="220" y1="135" x2="220" y2="169" stroke="' + c + '88" stroke-width="2"/>' +
        '<line x1="203" y1="152" x2="237" y2="152" stroke="' + c + '88" stroke-width="2"/>' +
        // wake
        '<path d="M40 165 Q160 155 280 165" fill="none" stroke="' + c + '44" stroke-width="2"/>' +
        '<rect x="100" y="80" width="120" height="26" rx="4" fill="' + c + '44" stroke="' + c + '88" stroke-width="1.5"/>';
    },

    'heavy-tank': function (c) {
      return '<rect x="40" y="138" width="240" height="55" rx="6" fill="' + c + '22" stroke="' + c + '" stroke-width="2"/>' +
        '<rect x="62" y="105" width="196" height="38" rx="8" fill="' + c + '28" stroke="' + c + '" stroke-width="2"/>' +
        // turret
        '<ellipse cx="160" cy="105" rx="50" ry="28" fill="' + c + '33" stroke="' + c + '" stroke-width="2"/>' +
        // cannon
        '<rect x="195" y="98" width="80" height="14" rx="4" fill="' + c + '44" stroke="' + c + '" stroke-width="2"/>' +
        // tracks
        '<rect x="35" y="172" width="250" height="22" rx="6" fill="' + c + '33" stroke="' + c + '" stroke-width="2"/>' +
        '<circle cx="65" cy="183" r="12" fill="' + c + '22" stroke="' + c + '88" stroke-width="1.5"/>' +
        '<circle cx="115" cy="183" r="12" fill="' + c + '22" stroke="' + c + '88" stroke-width="1.5"/>' +
        '<circle cx="160" cy="183" r="12" fill="' + c + '22" stroke="' + c + '88" stroke-width="1.5"/>' +
        '<circle cx="205" cy="183" r="12" fill="' + c + '22" stroke="' + c + '88" stroke-width="1.5"/>' +
        '<circle cx="255" cy="183" r="12" fill="' + c + '22" stroke="' + c + '88" stroke-width="1.5"/>';
    },

    'vtol': function (c) {
      return '<ellipse cx="160" cy="128" rx="130" ry="28" fill="' + c + '22" stroke="' + c + '" stroke-width="2"/>' +
        '<rect x="145" y="100" width="30" height="80" rx="6" fill="' + c + '28" stroke="' + c + '" stroke-width="2"/>' +
        // rotor discs
        '<ellipse cx="75" cy="95" rx="60" ry="10" fill="' + c + '22" stroke="' + c + '" stroke-width="2"/>' +
        '<ellipse cx="245" cy="95" rx="60" ry="10" fill="' + c + '22" stroke="' + c + '" stroke-width="2"/>' +
        '<line x1="75" y1="95" x2="75" y2="128" stroke="' + c + '" stroke-width="2"/>' +
        '<line x1="245" y1="95" x2="245" y2="128" stroke="' + c + '" stroke-width="2"/>' +
        // cockpit
        '<ellipse cx="160" cy="120" rx="24" ry="16" fill="' + c + '55" stroke="' + c + '" stroke-width="1.5"/>' +
        // tail fin
        '<path d="M280 128 L310 105 L310 128" fill="' + c + '22" stroke="' + c + '" stroke-width="1.5"/>';
    },

    'snow-terrain': function (c) {
      return '<rect x="55" y="120" width="210" height="58" rx="12" fill="' + c + '22" stroke="' + c + '" stroke-width="2"/>' +
        '<path d="M72 120 L86 84 L234 84 L248 120" fill="' + c + '18" stroke="' + c + '" stroke-width="2"/>' +
        // ski tracks instead of wheels
        '<path d="M40 178 L155 172 L280 178" fill="none" stroke="' + c + '" stroke-width="4" stroke-linecap="round"/>' +
        '<path d="M40 184 L155 178 L280 184" fill="none" stroke="' + c + '66" stroke-width="2.5" stroke-linecap="round"/>' +
        // snow spray
        '<path d="M40 178 Q30 168 25 155 M280 178 Q290 168 295 155" fill="none" stroke="' + c + '44" stroke-width="2"/>' +
        // windshield + camouflage
        '<rect x="105" y="86" width="110" height="28" rx="5" fill="' + c + '44" stroke="' + c + '88" stroke-width="1.5"/>' +
        '<path d="M55 138 L265 138" stroke="' + c + '33" stroke-width="1.5" fill="none"/>';
    },

    'hovercraft': function (c) {
      return '<ellipse cx="160" cy="155" rx="130" ry="30" fill="' + c + '22" stroke="' + c + '" stroke-width="2.5"/>' +
        // skirt
        '<path d="M35 155 Q160 185 285 155 Q285 178 160 185 Q35 185 35 155" fill="' + c + '18" stroke="' + c + '55" stroke-width="1.5"/>' +
        '<path d="M60 125 L260 125 L250 105 L70 105 Z" fill="' + c + '28" stroke="' + c + '" stroke-width="2"/>' +
        // propeller at back
        '<ellipse cx="280" cy="115" rx="18" ry="30" fill="' + c + '22" stroke="' + c + '" stroke-width="2"/>' +
        // air jets underneath
        '<line x1="100" y1="155" x2="100" y2="180" stroke="' + c + '44" stroke-width="2"/>' +
        '<line x1="140" y1="155" x2="140" y2="182" stroke="' + c + '44" stroke-width="2"/>' +
        '<line x1="180" y1="155" x2="180" y2="182" stroke="' + c + '44" stroke-width="2"/>' +
        '<line x1="220" y1="155" x2="220" y2="180" stroke="' + c + '44" stroke-width="2"/>' +
        '<rect x="85" y="107" width="120" height="24" rx="4" fill="' + c + '44" stroke="' + c + '88" stroke-width="1.5"/>';
    },

    'terrain-command': function (c) {
      return '<rect x="50" y="115" width="220" height="65" rx="12" fill="' + c + '22" stroke="' + c + '" stroke-width="2"/>' +
        '<path d="M65 115 L80 78 L240 78 L255 115" fill="' + c + '18" stroke="' + c + '" stroke-width="2"/>' +
        // high-clearance wheels
        '<circle cx="95" cy="188" r="28" fill="none" stroke="' + c + '" stroke-width="4"/>' +
        '<circle cx="225" cy="188" r="28" fill="none" stroke="' + c + '" stroke-width="4"/>' +
        // spoke detail
        '<line x1="95" y1="163" x2="95" y2="213" stroke="' + c + '66" stroke-width="1.5"/>' +
        '<line x1="70" y1="188" x2="120" y2="188" stroke="' + c + '66" stroke-width="1.5"/>' +
        '<line x1="225" y1="163" x2="225" y2="213" stroke="' + c + '66" stroke-width="1.5"/>' +
        '<line x1="200" y1="188" x2="250" y2="188" stroke="' + c + '66" stroke-width="1.5"/>' +
        // communication antenna
        '<line x1="200" y1="78" x2="215" y2="48" stroke="' + c + '" stroke-width="2"/>' +
        '<circle cx="215" cy="46" r="5" fill="' + c + '"/>' +
        '<rect x="100" y="80" width="115" height="28" rx="5" fill="' + c + '44" stroke="' + c + '88" stroke-width="1.5"/>';
    },

    'forest-truck': function (c) {
      return '<rect x="45" y="120" width="230" height="62" rx="8" fill="' + c + '22" stroke="' + c + '" stroke-width="2"/>' +
        '<rect x="55" y="88" width="130" height="36" rx="8" fill="' + c + '18" stroke="' + c + '" stroke-width="2"/>' +
        // large off-road wheels
        '<circle cx="100" cy="188" r="30" fill="none" stroke="' + c + '" stroke-width="5"/>' +
        '<circle cx="220" cy="188" r="30" fill="none" stroke="' + c + '" stroke-width="5"/>' +
        '<circle cx="100" cy="188" r="10" fill="' + c + '33"/>' +
        '<circle cx="220" cy="188" r="10" fill="' + c + '33"/>' +
        // cargo bed with load
        '<rect x="178" y="122" width="90" height="56" rx="4" fill="' + c + '15" stroke="' + c + '44" stroke-width="1.5"/>' +
        '<line x1="180" y1="140" x2="265" y2="140" stroke="' + c + '33" stroke-width="1.5"/>' +
        '<line x1="180" y1="155" x2="265" y2="155" stroke="' + c + '33" stroke-width="1.5"/>' +
        // solar panel on top of cab
        '<rect x="58" y="75" width="120" height="16" rx="3" fill="' + c + '44" stroke="' + c + '66" stroke-width="1"/>' +
        // windshield
        '<rect x="62" y="90" width="115" height="26" rx="4" fill="' + c + '44" stroke="' + c + '88" stroke-width="1.5"/>';
    }
  };

  // Map each kingdom to its ancient + modern vehicle SVG type
  window.VEHICLE_TYPES = {
    'andhra-pradesh':    { ancient: 'river-boat',        modern: 'hydrofoil' },
    'telangana':         { ancient: 'deer-mount',        modern: 'motorcycle' },
    'tamil-nadu':        { ancient: 'mountain-carrier',  modern: 'mountain-atv' },
    'kerala':            { ancient: 'elephant-mount',    modern: 'armored-transport' },
    'karnataka':         { ancient: 'elephant-chariot',  modern: 'armored-transport' },
    'maharashtra':       { ancient: 'rope-network',      modern: 'wall-climbing-bike' },
    'gujarat':           { ancient: 'lion-chariot',      modern: 'command-suv' },
    'goa':               { ancient: 'ocean-dhow',        modern: 'hydrofoil' },
    'rajasthan':         { ancient: 'chariot',           modern: 'command-suv' },
    'west-bengal':       { ancient: 'river-boat',        modern: 'amphibious' },
    'odisha':            { ancient: 'chariot',           modern: 'terrain-command' },
    'bihar':             { ancient: 'bull-mount',        modern: 'heavy-tank' },
    'jharkhand':         { ancient: 'elephant-mount',    modern: 'forest-truck' },
    'uttar-pradesh':     { ancient: 'chariot',           modern: 'terrain-command' },
    'uttarakhand':       { ancient: 'yak-mount',         modern: 'vtol' },
    'himachal-pradesh':  { ancient: 'snow-leopard-mount',modern: 'snow-terrain' },
    'punjab':            { ancient: 'chariot',           modern: 'terrain-command' },
    'haryana':           { ancient: 'chariot',           modern: 'terrain-command' },
    'assam':             { ancient: 'rhino-mount',       modern: 'armored-transport' },
    'arunachal-pradesh': { ancient: 'chariot',           modern: 'vtol' },
    'manipur':           { ancient: 'deer-mount',        modern: 'hovercraft' },
    'meghalaya':         { ancient: 'snow-leopard-mount',modern: 'dirigible' },
    'mizoram':           { ancient: 'mountain-carrier',  modern: 'forest-truck' },
    'nagaland':          { ancient: 'bull-mount',        modern: 'terrain-command' },
    'sikkim':            { ancient: 'yak-mount',         modern: 'snow-terrain' },
    'tripura':           { ancient: 'chariot',           modern: 'terrain-command' },
    'madhya-pradesh':    { ancient: 'chariot',           modern: 'terrain-command' },
    'chhattisgarh':      { ancient: 'buffalo-mount',     modern: 'forest-truck' }
  };

  window.renderVehicleSVG = function (kingdomId, color, label, size) {
    var types = window.VEHICLE_TYPES[kingdomId];
    if (!types) return '';
    var type  = label === 'ancient' ? types.ancient : types.modern;
    var fn    = SVGS[type];
    if (!fn) return '';
    var c   = color || '#ffd700';
    var s   = size  || 320;
    var h   = Math.round(s * 200 / 320);
    var content = fn(c);
    return (
      '<svg viewBox="0 0 320 200" width="' + s + '" height="' + h + '"' +
      ' xmlns="http://www.w3.org/2000/svg" style="display:block;border-radius:8px;background:rgba(0,0,0,0.35);">' +
      '<rect width="320" height="200" fill="rgba(0,0,0,0.4)"/>' +
      content +
      '</svg>'
    );
  };

}());
