// Age of Mythos — reader interactions: theme, font size, progress, lightbox, keys.
(function () {
  const root = document.documentElement;

  // --- theme (persisted) ---
  const savedTheme = localStorage.getItem("aom-theme");
  if (savedTheme) root.setAttribute("data-theme", savedTheme);
  window.aomToggleTheme = function () {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("aom-theme", next);
  };

  // --- font size (persisted) ---
  const savedSize = parseFloat(localStorage.getItem("aom-size"));
  if (savedSize) root.style.setProperty("--reader-size", savedSize + "rem");
  window.aomFont = function (delta) {
    const cur = parseFloat(getComputedStyle(root).getPropertyValue("--reader-size")) || 1.22;
    const next = Math.min(1.8, Math.max(0.95, cur + delta));
    root.style.setProperty("--reader-size", next + "rem");
    localStorage.setItem("aom-size", next);
  };

  // --- reading progress bar ---
  const bar = document.getElementById("progress");
  if (bar) {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // --- lightbox for story images ---
  const lb = document.getElementById("lightbox");
  if (lb) {
    const lbImg = lb.querySelector("img");
    document.querySelectorAll(".story-img").forEach((img) => {
      img.addEventListener("click", () => {
        lbImg.src = img.dataset.full || img.src;
        lb.classList.add("open");
      });
    });
    lb.addEventListener("click", () => lb.classList.remove("open"));
  }

  // --- audio language switch (English / Kannada) ---
  window.aomAudioLang = function (btn) {
    const audio = document.getElementById("story-audio");
    if (!audio) return;
    const wasPlaying = !audio.paused;
    const t = audio.currentTime;
    audio.src = btn.dataset.src;
    document.querySelectorAll(".langtab").forEach((b) => b.classList.toggle("on", b === btn));
    audio.load();
    audio.currentTime = isFinite(t) ? t : 0;
    if (wasPlaying) audio.play().catch(() => {});
  };

  // --- story text language switch (English / Kannada) ---
  window.aomTextLang = function (btn) {
    const lang = btn.dataset.lang;
    document.querySelectorAll(".textlang .langtab").forEach((b) =>
      b.classList.toggle("on", b === btn));
    document.querySelectorAll(".prose[data-lang]").forEach((el) => {
      el.hidden = el.dataset.lang !== lang;
    });
    localStorage.setItem("aom-text-lang", lang);
  };
  // restore saved reading language on load
  (function () {
    const saved = localStorage.getItem("aom-text-lang");
    const btn = saved && document.querySelector('.textlang .langtab[data-lang="' + saved + '"]');
    if (btn) window.aomTextLang(btn);
  })();

  // --- story cards: cycle through the kingdom's cast ---
  // Each card holds several face-framed tiles; every 5 minutes it cross-fades
  // to the next one, so a shelf gradually shows a whole cast instead of one
  // frozen portrait. Cards are staggered so the page doesn't blink in unison.
  (function () {
    const PERIOD = 5 * 60 * 1000;
    const cards = [];
    document.querySelectorAll(".scard .thumb[data-frames]").forEach((thumb) => {
      let frames;
      try { frames = JSON.parse(thumb.dataset.frames); } catch (e) { return; }
      if (!Array.isArray(frames) || frames.length < 2) return;
      const fade = thumb.querySelector(".thumb-fade");
      if (!fade) return;
      cards.push({ thumb, fade, frames, i: 0 });
    });
    if (!cards.length) return;

    function advance(card) {
      const next = card.frames[(card.i + 1) % card.frames.length];
      const img = new Image();
      img.onload = () => {
        card.fade.style.backgroundImage = "url('" + next + "')";
        card.fade.classList.add("show");
        // once the fade has landed, promote it to the base layer and reset,
        // so the next transition always fades from the picture on screen
        setTimeout(() => {
          card.thumb.style.backgroundImage = "url('" + next + "')";
          card.fade.classList.remove("show");
          card.i = (card.i + 1) % card.frames.length;
        }, 1200);
      };
      img.src = next;
    }

    cards.forEach((card, n) => {
      const stagger = (n % 12) * (PERIOD / 12);
      setTimeout(() => {
        advance(card);
        setInterval(() => advance(card), PERIOD);
      }, stagger + PERIOD / 12);
    });
  })();

  // --- keyboard prev/next ---
  document.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    if (e.key === "ArrowLeft") { const p = document.querySelector("[data-prev]"); if (p) location.href = p.getAttribute("href"); }
    if (e.key === "ArrowRight") { const n = document.querySelector("[data-next]"); if (n) location.href = n.getAttribute("href"); }
  });
})();
