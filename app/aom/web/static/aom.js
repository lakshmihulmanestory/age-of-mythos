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

  // --- keyboard prev/next ---
  document.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    if (e.key === "ArrowLeft") { const p = document.querySelector("[data-prev]"); if (p) location.href = p.getAttribute("href"); }
    if (e.key === "ArrowRight") { const n = document.querySelector("[data-next]"); if (n) location.href = n.getAttribute("href"); }
  });
})();
