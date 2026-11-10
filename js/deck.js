export const clamp = (lo, v, hi) => Math.max(lo, Math.min(hi, v));

export function gesture(min, hold) {
  let acc = 0;
  let last = 0;
  let locked = false;
  let unlockAt = 0;
  let tail = 0;
  const recent = [];

  return (d, now) => {
    const gap = now - last;
    const size = Math.abs(d);
    const avg = recent.length
      ? recent.reduce((a, b) => a + b, 0) / recent.length
      : 0;
    recent.push(size);
    if (recent.length > 5) recent.shift();
    last = now;

    if (locked) {
      const fresh =
        gap > 1000 ||
        (gap > 90 && size >= 50) ||
        (size >= 20 && size > avg * 1.6) ||
        (gap > 260 && size >= 4 && size > tail * 1.2);
      if (now < unlockAt || !fresh) {
        tail = size;
        return 0;
      }
      locked = false;
      acc = 0;
    }

    if (gap > 220) acc = 0;
    acc += d;
    if (Math.abs(acc) < min) return 0;

    const dir = Math.sign(acc);
    acc = 0;
    locked = true;
    unlockAt = now + hold;
    return dir;
  };
}

export function initDeck({ slicesSectionId = "library", sliceSteps = 5 } = {}) {
  const deck = document.querySelector("#deck");
  if (!deck) return null;

  const panels = Array.from(deck.querySelectorAll(".panel"));
  const slicesPanel = document.getElementById(slicesSectionId);
  const dotsEl = document.querySelector("#dots");
  const navLinks = Array.from(document.querySelectorAll(".lnav nav a"));

  const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const touchQuery = window.matchMedia("(hover: none) and (pointer: coarse)");
  const flatMQ = window.matchMedia("(max-height: 540px)");

  const isReducedMotion = () => reduceMotionQuery.matches;
  const isTouch = () => touchQuery.matches;
  const DH = () => deck.clientHeight || window.innerHeight;

  let stops = [];
  let slicesUpdater = null;
  let pending = null;
  let pendingAt = 0;
  let cur = 0;
  let restT = 0;
  let activePanelIdx = -1;

  const buildStops = () => {
    document.documentElement.style.setProperty("--dh", `${DH()}px`);
    stops = [];
    const flat = flatMQ.matches;

    panels.forEach((p, pi) => {
      if (p === slicesPanel) {
        const sl = Array.from(p.querySelectorAll(".sl"));
        const snaps = Array.from(p.querySelectorAll(".slice-snap"));
        const count = flat ? sl.length : sliceSteps;
        for (let k = 1; k <= count; k++) {
          const offset = flat
            ? sl[k - 1]
              ? sl[k - 1].offsetTop
              : 0
            : k > 1 && snaps[k - 2]
              ? snaps[k - 2].offsetTop
              : (k - 1) * DH();
          stops.push({ pi, k, top: p.offsetTop + offset });
        }
      } else {
        stops.push({ pi, k: 0, top: p.offsetTop });
      }
    });
  };

  buildStops();

  const nearest = () => {
    const st = deck.scrollTop;
    let bi = 0;
    let bd = Infinity;
    stops.forEach((s, i) => {
      const d = Math.abs(s.top - st);
      if (d < bd) {
        bd = d;
        bi = i;
      }
    });
    return bi;
  };

  const firstStop = (pi) => stops.findIndex((s) => s.pi === pi);

  const jump = (top) => {
    deck.style.scrollBehavior = "auto";
    deck.scrollTop = top;
    requestAnimationFrame(() => {
      deck.style.scrollBehavior = "";
    });
  };

  const go = (i, instant = false) => {
    if (!stops.length) return;
    const idx = clamp(0, i, stops.length - 1);
    pending = idx;
    pendingAt = performance.now();
    if (instant || isReducedMotion()) {
      jump(stops[idx].top);
    } else {
      deck.scrollTo({ top: stops[idx].top, behavior: "smooth" });
    }
  };

  const goToSlice = (k) => {
    const slicesPi = panels.indexOf(slicesPanel);
    if (slicesPi < 0) return;
    const to = stops.findIndex((s) => s.pi === slicesPi && s.k === k);
    if (to >= 0) go(to);
  };

  const base = () =>
    pending !== null && performance.now() - pendingAt < 900 ? pending : nearest();

  // Build right-side stage dots
  const dots = [];
  if (dotsEl) {
    dotsEl.innerHTML = "";
    panels.forEach((p, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "dot";
      const labelText = p.dataset.label || p.id;
      btn.setAttribute("aria-label", `${i + 1}. ${labelText}`);
      const span = document.createElement("span");
      span.className = "dot-label";
      span.textContent = labelText;
      btn.appendChild(span);
      btn.addEventListener("click", () => go(firstStop(i)));
      dotsEl.appendChild(btn);
      dots.push(btn);
    });
  }

  const updateDotLabels = (labelMap = {}) => {
    panels.forEach((p, i) => {
      const nextLabel = labelMap[p.id] || p.dataset.label || p.id;
      p.dataset.label = nextLabel;
      const btn = dots[i];
      if (btn) {
        btn.setAttribute("aria-label", `${i + 1}. ${nextLabel}`);
        const lbl = btn.querySelector(".dot-label");
        if (lbl) lbl.textContent = nextLabel;
      }
    });
  };

  // Smooth anchor navigation inside the deck
  document.addEventListener("click", (e) => {
    const a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a || a.classList.contains("skip")) return;
    const href = a.getAttribute("href");
    const targetPanel = panels.find((x) => `#${x.id}` === href);
    if (!targetPanel) return;
    e.preventDefault();
    go(firstStop(panels.indexOf(targetPanel)));
    const heading = targetPanel.querySelector("h1, h2");
    if (heading) {
      heading.tabIndex = -1;
      heading.focus({ preventScroll: true });
    }
  });

  // Inner scrollable box detection
  const innerBox = (el) => {
    for (let node = el; node && node !== deck; node = node.parentElement) {
      if (
        node.scrollHeight > node.clientHeight + 1 &&
        /(auto|scroll)/.test(window.getComputedStyle(node).overflowY)
      ) {
        return node;
      }
    }
    return null;
  };

  const canScroll = (el, dy) =>
    dy > 0
      ? el.scrollTop + el.clientHeight < el.scrollHeight - 1
      : el.scrollTop > 0;

  const fits = () =>
    !flatMQ.matches &&
    panels.every((p) => p === slicesPanel || p.offsetHeight <= DH() + 2);

  const loosen = () => {
    deck.classList.toggle("is-free", !isTouch() && !fits());
  };
  loosen();

  // Keyboard navigation
  window.addEventListener("keydown", (e) => {
    if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return;
    const t = e.target;
    const tag = ((t && t.tagName) || "").toLowerCase();
    if (
      tag === "input" ||
      tag === "textarea" ||
      tag === "select" ||
      (t && t.isContentEditable)
    ) {
      return;
    }

    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      const box = innerBox(t);
      if (box && canScroll(box, e.key === "ArrowDown" ? 1 : -1)) return;
    }

    const b = base();
    let to = null;
    switch (e.key) {
      case "ArrowDown":
      case "PageDown":
        to = b + 1;
        break;
      case "ArrowUp":
      case "PageUp":
        to = b - 1;
        break;
      case " ":
        if (tag === "button" || tag === "a" || tag === "summary") return;
        to = e.shiftKey ? b - 1 : b + 1;
        break;
      case "Home":
        to = 0;
        break;
      case "End":
        to = stops.length - 1;
        break;
      default:
        break;
    }

    if (to === null) return;
    if (!fits()) return;
    e.preventDefault();
    go(to);
  });

  // Wheel / trackpad inertia-swallowing step paging
  const deckStep = gesture(24, 650);
  let latchUntil = 0;

  deck.addEventListener(
    "wheel",
    (e) => {
      if (e.ctrlKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      if (!fits()) return;

      const now = performance.now();
      const box = innerBox(e.target);
      if (box && (canScroll(box, e.deltaY) || now < latchUntil)) {
        latchUntil = now + 250;
        if (!canScroll(box, e.deltaY)) e.preventDefault();
        return;
      }

      e.preventDefault();
      const normalizedDelta =
        e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? DH() : 1);
      const dir = deckStep(normalizedDelta, now);
      if (!dir) return;

      const to = base() + dir;
      if (to >= 0 && to < stops.length) go(to);
    },
    { passive: false }
  );

  // Active section tracking & lazy image warming
  const near = new Set();
  const warm = (p) => {
    if (!p || near.has(p)) return;
    near.add(p);
    p.querySelectorAll('img[loading="lazy"]').forEach((img) => {
      img.loading = "eager";
    });
  };

  const setActive = (i) => {
    if (i === activePanelIdx || i < 0 || i >= panels.length) return;
    activePanelIdx = i;

    panels.forEach((p, k) => p.classList.toggle("is-active", k === i));
    dots.forEach((d, k) => {
      const on = k === i;
      d.classList.toggle("is-active", on);
      if (on) d.setAttribute("aria-current", "true");
      else d.removeAttribute("aria-current");
    });
    navLinks.forEach((a) => {
      if (a.getAttribute("href") === `#${panels[i].id}`) {
        a.setAttribute("aria-current", "true");
      } else {
        a.removeAttribute("aria-current");
      }
    });

    [i - 1, i, i + 1].forEach((k) => warm(panels[k]));

    const url =
      i === 0
        ? window.location.pathname + window.location.search
        : `${window.location.pathname}${window.location.search}#${panels[i].id}`;
    try {
      window.history.replaceState(null, "", url);
    } catch {
      /* ignore history rate-limits */
    }
  };

  const activeIO = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActive(panels.indexOf(entry.target));
        }
      }
    },
    { root: deck, rootMargin: "-49% 0px -49% 0px", threshold: 0 }
  );
  panels.forEach((p) => activeIO.observe(p));

  if (isReducedMotion()) {
    panels.forEach((p) => p.classList.add("is-in"));
  }

  // Keyboard focus auto-alignment
  deck.addEventListener("focusin", (e) => {
    const t = e.target;
    if (!t || !t.closest) return;
    let isKb = false;
    try {
      isKb = t.matches(":focus-visible");
    } catch {
      isKb = true;
    }
    if (!isKb) return;

    const sl = t.closest(".sl");
    let to = -1;
    if (sl && slicesPanel && slicesPanel.contains(sl)) {
      const k = Number(sl.dataset.k);
      // Do not jump away if stage is on step 5 composite and user tabs into shard links
      const stage = slicesPanel.querySelector(".slices-stage");
      if (stage && stage.classList.contains("is-comp") && t.closest(".lab")) {
        to = stops.findIndex(
          (s) => s.pi === panels.indexOf(slicesPanel) && s.k === sliceSteps
        );
      } else {
        to = stops.findIndex(
          (s) => s.pi === panels.indexOf(slicesPanel) && s.k === k
        );
      }
    } else {
      const p = t.closest(".panel");
      if (p) to = firstStop(panels.indexOf(p));
    }

    if (to >= 0 && to !== nearest()) go(to);
  });

  // Scroll frame painter
  let ticking = false;
  const paint = () => {
    ticking = false;
    const st = deck.scrollTop;
    const h = DH();
    if (slicesUpdater) slicesUpdater(st);

    if (isReducedMotion()) return;
    for (const p of panels) {
      if (p === slicesPanel) continue;
      const top = p.offsetTop - st;
      const bottom = top + p.offsetHeight;
      const t = top > 0 ? top / h : bottom < h ? (bottom - h) / h : 0;
      if (t <= -1.5 || t >= 1.5) continue;
      p.style.setProperty("--ta", Math.min(1, Math.abs(t)).toFixed(4));
    }
  };

  const rest = () => {
    window.clearTimeout(restT);
    paint();
    cur = nearest();
    const st = deck.scrollTop;
    const h = DH();
    panels.forEach((p) => {
      const top = p.offsetTop - st;
      const seen = Math.min(h, top + p.offsetHeight) - Math.max(0, top);
      if (seen > h * 0.25) p.classList.add("is-in");
    });
  };

  deck.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(paint);
      }
      window.clearTimeout(restT);
      restT = window.setTimeout(rest, 180);
    },
    { passive: true }
  );

  if ("onscrollend" in deck) {
    deck.addEventListener("scrollend", rest);
  }

  const reflow = () => {
    const keep =
      pending !== null && performance.now() - pendingAt < 900 ? pending : cur;
    buildStops();
    loosen();
    if (stops.length) {
      const s = stops[clamp(0, keep, stops.length - 1)];
      if (Math.abs(deck.scrollTop - s.top) > 2 && fits()) {
        jump(s.top);
      }
    }
    paint();
  };

  window.addEventListener("resize", reflow);
  if ("ResizeObserver" in window) {
    new ResizeObserver(reflow).observe(deck);
    const grow = new ResizeObserver(() => {
      buildStops();
      loosen();
    });
    panels.forEach((p) => grow.observe(p));
  }

  // Deep link jump on initial load
  if (window.location.hash) {
    const linked = panels.findIndex((p) => `#${p.id}` === window.location.hash);
    if (linked > 0) {
      const targetStop = firstStop(linked);
      if (targetStop >= 0) jump(stops[targetStop].top);
    }
  }
  cur = nearest();
  rest();

  return {
    deck,
    panels,
    getStops: () => stops,
    DH,
    flatMQ,
    isReducedMotion,
    isTouch,
    go,
    goToSlice,
    firstStop,
    nearest,
    updateDotLabels,
    registerSlicesUpdater(fn) {
      slicesUpdater = fn;
      paint();
    },
    refresh() {
      buildStops();
      loosen();
      paint();
    }
  };
}
