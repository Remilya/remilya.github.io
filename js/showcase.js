import { gesture } from "./deck.js";
import { content } from "./content.js";

const deterministicRand = (seed) => {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
};

export function initMangaShowcase(initialLocale = "en") {
  const stageEl = document.querySelector("#manga-stage");
  if (!stageEl) {
    return { setLocale() {} };
  }

  let locale = initialLocale === "tr" ? "tr" : "en";
  let activeIdx = 0;

  const cards = Array.from(stageEl.querySelectorAll(".manga-card"));
  const tabs = Array.from(document.querySelectorAll("[data-manga-tab]"));
  const prevBtn = document.querySelector("#manga-prev");
  const nextBtn = document.querySelector("#manga-next");

  const epEl = document.querySelector("#manga-active-ep");
  const titleEl = document.querySelector("#manga-active-title");
  const subEl = document.querySelector("#manga-active-sub");
  const seriesEl = document.querySelector("#manga-active-series");
  const noteEl = document.querySelector("#manga-active-note");
  const roleEl = document.querySelector("#manga-active-role");
  const ctaEl = document.querySelector("#manga-active-cta");
  const countEl = document.querySelector("#manga-count");

  const paint = () => {
    const dict = content[locale] || content.en;
    const items = dict.manga.items;
    const total = items.length;
    activeIdx = ((activeIdx % total) + total) % total;
    const item = items[activeIdx];

    cards.forEach((card, i) => {
      const diff = (i - activeIdx + total) % total;
      const pos = diff === 0 ? "center" : diff === 1 ? "right" : "left";
      card.dataset.pos = pos;
      card.classList.toggle("is-center", pos === "center");
      const btn = card.querySelector(".manga-card__btn");
      if (btn) {
        btn.setAttribute("aria-pressed", String(pos === "center"));
      }
    });

    tabs.forEach((tab, i) => {
      tab.setAttribute("aria-pressed", String(i === activeIdx));
    });

    if (epEl) epEl.textContent = item.ep;
    if (titleEl) titleEl.textContent = item.title;
    if (subEl) subEl.textContent = item.subtitle;
    if (seriesEl) seriesEl.textContent = item.series;
    if (noteEl) noteEl.textContent = item.note;
    if (roleEl) roleEl.textContent = dict.manga.roleLabel;
    if (ctaEl) {
      ctaEl.href = item.href;
      ctaEl.textContent = dict.manga.readLabel;
      ctaEl.setAttribute("aria-label", `${dict.manga.readLabel} (${item.title})`);
    }
    if (countEl) {
      countEl.textContent = `0${activeIdx + 1} / 0${total}`;
    }
    if (prevBtn) prevBtn.setAttribute("aria-label", dict.manga.prevAria);
    if (nextBtn) nextBtn.setAttribute("aria-label", dict.manga.nextAria);
  };

  const turn = (next) => {
    activeIdx = next;
    paint();
  };

  cards.forEach((card, idx) => {
    const btn = card.querySelector(".manga-card__btn");
    if (!btn) return;
    btn.addEventListener("click", () => {
      if (idx === activeIdx) {
        const dict = content[locale] || content.en;
        const href = dict.manga.items[idx]?.href;
        if (href) window.open(href, "_blank", "noopener,noreferrer");
      } else {
        turn(idx);
      }
    });
  });

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const idx = Number(tab.dataset.mangaTab);
      if (!Number.isNaN(idx)) turn(idx);
    });
  });

  if (prevBtn) prevBtn.addEventListener("click", () => turn(activeIdx - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => turn(activeIdx + 1));

  // Pointer swipe support
  let x0 = null;
  let y0 = null;
  stageEl.addEventListener("pointerdown", (e) => {
    x0 = e.clientX;
    y0 = e.clientY;
  });
  stageEl.addEventListener("pointerup", (e) => {
    if (x0 === null || y0 === null) return;
    const dx = e.clientX - x0;
    const dy = e.clientY - y0;
    x0 = null;
    y0 = null;
    if (Math.abs(dx) > 36 && Math.abs(dx) > Math.abs(dy)) {
      turn(activeIdx + (dx < 0 ? 1 : -1));
    }
  });
  stageEl.addEventListener("pointercancel", () => {
    x0 = null;
    y0 = null;
  });

  // Sideways trackpad swipe
  const wheelTurn = gesture(38, 420);
  const mangaPanel = document.querySelector("#translations");
  if (mangaPanel) {
    mangaPanel.addEventListener(
      "wheel",
      (e) => {
        if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
        e.preventDefault();
        const dir = wheelTurn(
          e.deltaX * (e.deltaMode === 1 ? 16 : 1),
          performance.now()
        );
        if (dir) turn(activeIdx + dir);
      },
      { passive: false }
    );

    mangaPanel.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        turn(activeIdx - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        turn(activeIdx + 1);
      }
    });
  }

  paint();

  return {
    setLocale(nextLocale) {
      locale = nextLocale === "tr" ? "tr" : "en";
      paint();
    }
  };
}

export function initAtmosphere() {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const coarsePointer = window.matchMedia("(hover: none)").matches;
  if (reduceMotion) return;

  // Seed lightweight CSS compositor golden/crimson motes in Hero & Contact
  document.querySelectorAll("[data-motes]").forEach((box, b) => {
    const count = Math.round(
      (Number(box.dataset.motes) || 14) * (coarsePointer ? 0.5 : 1)
    );
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const seed = (i + 3) * (b + 5) * 13;
      const el = document.createElement("i");
      const isDeep = i % 3 === 0;
      el.className = isDeep ? "mote mote--violet" : "mote mote--lavender";
      el.style.cssText = [
        `left:${(deterministicRand(seed) * 100).toFixed(2)}%`,
        `--sz:${(2.5 + deterministicRand(seed + 1) * 3.5).toFixed(1)}px`,
        `--dur:${(11 + deterministicRand(seed + 2) * 11).toFixed(1)}s`,
        `--dl:${(-deterministicRand(seed + 3) * 18).toFixed(1)}s`,
        `--dx:${(deterministicRand(seed + 4) * 84 - 42).toFixed(0)}px`,
        `--op:${(0.32 + deterministicRand(seed + 5) * 0.48).toFixed(2)}`
      ].join(";");
      frag.appendChild(el);
    }
    box.appendChild(frag);
  });

  if (coarsePointer) return;

  const canvas = document.querySelector("#cursorFx");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener("resize", resize);

  const MAX = 38;
  const GAP = 42;
  const IDLE = 220;
  const FADE = 2400;
  const LOCK_SELECTOR = 'a, button, select, input, [data-cursor="lock"]';

  const parts = [];
  let x = -300;
  let y = -300;
  let locked = false;
  let lastMove = performance.now();
  let idleAt = null;
  let idle = false;
  let last = performance.now();
  let lastSpawn = 0;
  let px = null;
  let py = null;
  let pt = performance.now();
  let speed = 0;
  let inButterflyZone = false;

  const checkZone = (target) =>
    Boolean(
      target &&
        target.closest &&
        target.closest(".hero, .journey-panel, .contact-panel")
    );

  const drawSpark = (cx, cy, r, a) => {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(Math.PI / 4);
    ctx.fillStyle = `rgba(167, 139, 250, ${(a * 0.9).toFixed(3)})`;
    ctx.fillRect(-r, -r, r * 2, r * 2);
    ctx.restore();
  };

  const drawButterfly = (cx, cy, r, rot, phase, a, altTone) => {
    const flap = 0.42 + 0.58 * Math.abs(Math.sin(phase));
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rot);
    ctx.scale(flap, 1);

    const fill = altTone
      ? `rgba(192, 132, 252, ${(a * 0.92).toFixed(3)})`
      : `rgba(139, 92, 246, ${(a * 0.92).toFixed(3)})`;

    for (const side of [-1, 1]) {
      ctx.save();
      ctx.scale(side, 1);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(r * 0.9, -r * 1.15, r * 1.65, -r * 0.55, r * 0.72, r * 0.12);
      ctx.bezierCurveTo(r * 1.25, r * 0.55, r * 0.65, r * 1.15, 0, r * 0.35);
      ctx.closePath();
      ctx.fillStyle = fill;
      ctx.fill();
      ctx.restore();
    }
    ctx.restore();
  };

  document.addEventListener("mousemove", (e) => {
    const now = performance.now();
    if (px !== null) {
      const dt = now - pt;
      if (dt > 0 && dt < 100) {
        const dx = e.clientX - px;
        const dy = e.clientY - py;
        speed =
          speed * 0.75 + (Math.sqrt(dx * dx + dy * dy) / dt) * 1000 * 0.25;
      }
    }
    px = x = e.clientX;
    py = y = e.clientY;
    pt = lastMove = now;
    inButterflyZone = checkZone(e.target);
  });

  document.addEventListener("mouseover", (e) => {
    if (e.target && e.target.closest && e.target.closest(LOCK_SELECTOR)) {
      locked = true;
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (
      e.target &&
      e.target.closest &&
      e.target.closest(LOCK_SELECTOR) &&
      !(
        e.relatedTarget &&
        e.relatedTarget.closest &&
        e.relatedTarget.closest(LOCK_SELECTOR)
      )
    ) {
      locked = false;
    }
  });

  document.documentElement.addEventListener("mouseleave", () => {
    x = -300;
    y = -300;
  });

  const spawn = (sx, sy, strength) => {
    if (parts.length >= MAX) return;
    const life = 0.22 + strength * 0.78;
    if (inButterflyZone) {
      parts.push({
        x: sx + (Math.random() - 0.5) * 8,
        y: sy + (Math.random() - 0.5) * 8,
        vx: (Math.random() - 0.5) * 0.65,
        vy: -(Math.random() * 0.55 + 0.16),
        life,
        lifeAtIdle: null,
        r: Math.random() * 2.8 + 3.4,
        type: "butterfly",
        crimson: Math.random() < 0.34,
        rot: (Math.random() - 0.5) * 0.8,
        rotSpeed: (Math.random() - 0.5) * 0.025,
        phase: Math.random() * Math.PI * 2,
        decay: 1450
      });
    } else {
      parts.push({
        x: sx + (Math.random() - 0.5) * 5,
        y: sy + (Math.random() - 0.5) * 5,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -(Math.random() * 0.45 + 0.12),
        life,
        lifeAtIdle: null,
        r: Math.random() * 1.4 + 1.4,
        type: "spark",
        decay: 1100
      });
    }
  };

  const frame = (now) => {
    if (document.hidden) {
      last = now;
      requestAnimationFrame(frame);
      return;
    }

    const dt = Math.min(now - last, 50);
    last = now;
    const isIdle = !locked && now - lastMove > IDLE;
    if (isIdle && !idle) {
      idleAt = now;
      parts.forEach((p) => {
        p.lifeAtIdle = p.life;
      });
    }
    idle = isIdle;
    const fade = isIdle && idleAt ? Math.min(1, (now - idleAt) / FADE) : 0;

    if (locked) parts.length = 0;

    const strength = Math.min(speed / 460, 1);
    const gap = GAP + (1 - strength) * 150;
    if (
      !locked &&
      !isIdle &&
      now - lastSpawn > gap &&
      x > -200 &&
      strength > 0.03
    ) {
      spawn(x, y, strength);
      lastSpawn = now;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let k = parts.length - 1; k >= 0; k--) {
      const p = parts[k];
      if (isIdle && p.lifeAtIdle !== null) {
        p.life = p.lifeAtIdle * (1 - fade);
      } else {
        p.life -= dt / p.decay;
      }
      if (p.life <= 0) {
        parts.splice(k, 1);
        continue;
      }
      p.x += p.vx;
      p.y += p.vy;
      if (p.type === "butterfly") {
        p.rot += p.rotSpeed;
        p.phase += dt * 0.014;
        drawButterfly(p.x, p.y, p.r, p.rot, p.phase, p.life, p.crimson);
      } else {
        drawSpark(p.x, p.y, p.r, p.life);
      }
    }

    requestAnimationFrame(frame);
  };

  requestAnimationFrame(frame);
}
