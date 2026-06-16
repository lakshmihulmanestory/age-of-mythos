/**
 * Hulmane-The-Saga — Internationalization Engine
 * Simple i18n system with localStorage persistence.
 * Load language files (lang-en.js, lang-kn.js, etc.) after this script.
 */

(function () {
  'use strict';

  var MH_LANG = {
    current: 'en',
    strings: {},
    available: [],

    init: function () {
      var saved = null;
      try { saved = localStorage.getItem('mh-lang'); } catch (e) { /* private browsing */ }
      if (saved && this.strings[saved]) {
        this.current = saved;
      }
      this.applyAll();
      this._initSelector();
    },

    register: function (code, label, strings) {
      this.strings[code] = strings;
      this.available.push({ code: code, label: label });
    },

    set: function (lang) {
      if (!this.strings[lang]) return;
      this.current = lang;
      try { localStorage.setItem('mh-lang', lang); } catch (e) { /* private browsing */ }
      this.applyAll();
      this._updateSelector();
      document.documentElement.setAttribute('lang', lang);
    },

    t: function (key, fallback) {
      var cur = this.strings[this.current];
      if (cur && cur[key] !== undefined) return cur[key];
      var en = this.strings['en'];
      if (en && en[key] !== undefined) return en[key];
      return fallback || key;
    },

    tHero: function (hero, field) {
      if (!hero) return '';
      var suffix = '_' + this.current;
      var heroObj = hero.hero || hero;
      if (this.current !== 'en' && heroObj[field + suffix]) {
        return heroObj[field + suffix];
      }
      return heroObj[field] || hero[field] || '';
    },

    applyAll: function () {
      var self = this;
      var els = document.querySelectorAll('[data-i18n]');
      for (var i = 0; i < els.length; i++) {
        var el = els[i];
        var key = el.getAttribute('data-i18n');
        var translated = self.t(key, el.textContent);
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translated;
        } else {
          el.textContent = translated;
        }
      }
      var attrEls = document.querySelectorAll('[data-i18n-title]');
      for (var j = 0; j < attrEls.length; j++) {
        var attrEl = attrEls[j];
        var attrKey = attrEl.getAttribute('data-i18n-title');
        attrEl.title = self.t(attrKey, attrEl.title);
      }
    },

    _initSelector: function () {
      var self = this;
      var selectors = document.querySelectorAll('.lang-selector');
      for (var i = 0; i < selectors.length; i++) {
        var sel = selectors[i];
        sel.innerHTML = '';
        for (var j = 0; j < self.available.length; j++) {
          var lang = self.available[j];
          var btn = document.createElement('button');
          btn.className = 'lang-btn' + (lang.code === self.current ? ' lang-btn--active' : '');
          btn.setAttribute('data-lang', lang.code);
          btn.textContent = lang.label;
          btn.addEventListener('click', (function (code) {
            return function () { self.set(code); };
          })(lang.code));
          sel.appendChild(btn);
        }
      }
    },

    _updateSelector: function () {
      var self = this;
      var btns = document.querySelectorAll('.lang-btn');
      for (var i = 0; i < btns.length; i++) {
        var btn = btns[i];
        if (btn.getAttribute('data-lang') === self.current) {
          btn.classList.add('lang-btn--active');
        } else {
          btn.classList.remove('lang-btn--active');
        }
      }
    }
  };

  window.MH_LANG = MH_LANG;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { MH_LANG.init(); });
  } else {
    setTimeout(function () { MH_LANG.init(); }, 0);
  }
})();
