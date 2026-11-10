import { clamp } from "./deck.js";
import { higurashiQuotes } from "./content.js";

export function initSlices(deckApi, initialLocale = "en") {
  const panel = document.querySelector("#library");
  const stage = document.querySelector("#slicesStage");
  const area = document.querySelector("#slicesArea");
  if (!panel || !stage || !area || !deckApi) {
    return { setLocale() {} };
  }

  const SL = Array.from(area.querySelectorAll(".sl"));
  const N = SL.length; // 4 flagship slices; step 5 = composite panorama
  const COMP_STEP = N + 1;
  const T = Math.tan(Math.PI / 12); // 15 degrees
  const HG = 4 / Math.cos(Math.PI / 12); // 8px perpendicular ink cut
  const GAP = 8;

  let step = -1;
  let W = 0;
  let H = 0;
  let port = false;

  const f = (n) => `${Math.round(n * 10) / 10}px`;
  const poly = (pts) =>
    `polygon(${pts.map(([x, y]) => `${f(x)} ${f(y)}`).join(", ")})`;

  const fitN = (len, cross, n) => {
    const s = cross * T;
    const eq = len / n - s;
    const m = (len - (n - 1) * s) / n;
    return eq >= 32 ? { s, eq: true } : m >= 12 ? { s, eq: false, m } : null;
  };

  const cols = (w, y0, y1, n, odd, fit) => {
    const hBand = y1 - y0;
    const s = hBand * T;
    const xs = [];
    if (fit.eq) {
      for (let c = 1; c < n; c++) xs.push((c * w) / n);
    } else {
      let x = s / 2 + fit.m;
      for (let c = 1; c < n; c++) {
        xs.push(x);
        x += s + fit.m;
      }
    }

    const seam = (c) => {
      if (c === 0) return { t: 0, b: 0, e: true };
      if (c === n) return { t: w, b: w, e: true };
      const x = xs[c - 1];
      const sg = (c + odd) % 2 === 1 ? 1 : -1;
      return { t: x + (sg * s) / 2, b: x - (sg * s) / 2 };
    };

    const out = [];
    for (let c = 0; c < n; c++) {
      const L = seam(c);
      const R = seam(c + 1);
      const lt = L.e ? L.t : L.t + HG;
      const lb = L.e ? L.b : L.b + HG;
      const rt = R.e ? R.t : R.t - HG;
      const rb = R.e ? R.b : R.b - HG;
      const widerTop = rt - lt >= rb - lb;
      const frac = widerTop ? 0.43 : 0.57;
      const lxAt = lt + (lb - lt) * frac;
      const rxAt = rt + (rb - rt) * frac;
      out.push({
        pts: [
          [lt, y0],
          [rt, y0],
          [rb, y1],
          [lb, y1]
        ],
        lab: {
          x: (lxAt + rxAt) / 2,
          y: y0 + hBand * frac,
          w: Math.max(120, rxAt - lxAt - 22),
          a: "center"
        }
      });
    }
    return out;
  };

  const bands = (w, h, n, fit) => {
    const s = w * T;
    const ys = [];
    if (fit.eq) {
      for (let c = 1; c < n; c++) ys.push((c * h) / n);
    } else {
      let y = s / 2 + fit.m;
      for (let c = 1; c < n; c++) {
        ys.push(y);
        y += s + fit.m;
      }
    }

    const seam = (c) => {
      if (c === 0) return { l: 0, r: 0, e: true };
      if (c === n) return { l: h, r: h, e: true };
      const y = ys[c - 1];
      const sg = c % 2 === 1 ? 1 : -1;
      return { l: y + (sg * s) / 2, r: y - (sg * s) / 2 };
    };

    const out = [];
    for (let c = 0; c < n; c++) {
      const A = seam(c);
      const B = seam(c + 1);
      const tl = A.e ? A.l : A.l + HG;
      const tr = A.e ? A.r : A.r + HG;
      const bl = B.e ? B.l : B.l - HG;
      const br = B.e ? B.r : B.r - HG;
      const widerLeft = bl - tl >= br - tr;
      const xFrac = widerLeft ? 0.46 : 0.54;
      const tyAt = tl + (tr - tl) * xFrac;
      const byAt = bl + (br - bl) * xFrac;
      const yBias = c === 0 ? 0.58 : 0.5;
      out.push({
        pts: [
          [0, tl],
          [w, tr],
          [w, br],
          [0, bl]
        ],
        lab: {
          x: w * 0.5,
          y: tyAt + (byAt - tyAt) * yBias,
          w: w - 32,
          a: "row"
        }
      });
    }
    return out;
  };

  const composition = () => {
    const fc = fitN(W, H, N);
    const fr = fitN(H, W, N);
    if (!port && fc) return { mode: "cols", sl: cols(W, 0, H, N, 0, fc) };
    if (port && fr) return { mode: "rows", sl: bands(W, H, N, fr) };

    const R = 2;
    const C = Math.ceil(N / R);
    const rh = (H - (R - 1) * GAP) / R;
    const sl = [];
    for (let r = 0; r < R; r++) {
      const y0 = r * (rh + GAP);
      const y1 = y0 + rh;
      const fit = fitN(W, rh, C) || {
        s: rh * T,
        eq: false,
        m: Math.max(8, (W - (C - 1) * rh * T) / C)
      };
      sl.push(...cols(W, y0, y1, C, r, fit));
    }
    return { mode: "grid", sl: sl.slice(0, N) };
  };

  const accum = (k) => {
    const out = [];
    if (!port) {
      const s = H * T;
      const ws = clamp(38, W * 0.04, 60);
      const seam = (j) => ({ t: j * ws + s, b: j * ws });

      for (let i = 1; i <= N; i++) {
        if (i < k) {
          const L = i > 1 ? seam(i - 1) : null;
          const R = seam(i);
          const lm = L ? (L.t + L.b) / 2 : 0;
          const rm = (R.t + R.b) / 2;
          out.push({
            st: "sliver",
            pts: [
              [L ? L.t + HG : 0, 0],
              [R.t - HG, 0],
              [R.b - HG, H],
              [L ? L.b + HG : 0, H]
            ],
            sliv: {
              x: (lm + rm) / 2 + (L ? 0 : ws * 0.16),
              y: H / 2,
              r: -75
            }
          });
        } else if (i === k) {
          const L = i > 1 ? seam(i - 1) : null;
          const l = L ? L.t + HG : 0;
          out.push({
            st: "active",
            pts: [
              [l, 0],
              [W, 0],
              [W, H],
              [L ? L.b + HG : 0, H]
            ],
            body: {
              l: l + (L ? 20 : clamp(18, W * 0.04, 56)),
              t: 16,
              r: clamp(18, W * 0.04, 56),
              b: 16
            }
          });
        } else {
          const x = W + 4;
          out.push({
            st: "park",
            pts: [
              [x + s, 0],
              [x + s + 1, 0],
              [x + 1, H],
              [x, H]
            ]
          });
        }
      }
    } else {
      const s = W * T;
      const hs = clamp(30, H * 0.046, 42);
      const seam = (j) => ({ l: j * hs + s, r: j * hs });

      for (let i = 1; i <= N; i++) {
        if (i < k) {
          const A = i > 1 ? seam(i - 1) : null;
          const B = seam(i);
          const am = A ? (A.l + A.r) / 2 : 0;
          const bm = (B.l + B.r) / 2;
          out.push({
            st: "sliver",
            pts: [
              [0, A ? A.l + HG : 0],
              [W, A ? A.r + HG : 0],
              [W, B.r - HG],
              [0, B.l - HG]
            ],
            sliv: {
              x: W / 2,
              y: (am + bm) / 2 + (A ? 0 : hs * 0.18),
              r: -15
            }
          });
        } else if (i === k) {
          const A = i > 1 ? seam(i - 1) : null;
          const t = A ? A.l + HG : 0;
          out.push({
            st: "active",
            pts: [
              [0, t],
              [W, A ? A.r + HG : 0],
              [W, H],
              [0, H]
            ],
            body: {
              l: 14,
              t: t + (A ? 14 : 16),
              r: 14,
              b: 14
            }
          });
        } else {
          const y = H + 4;
          out.push({
            st: "park",
            pts: [
              [0, y + s],
              [W, y],
              [W, y + 1],
              [0, y + s + 1]
            ]
          });
        }
      }
    }
    return out;
  };

  const setBody = (el, b) => {
    el.style.setProperty("--bl", f(b.l));
    el.style.setProperty("--bt", f(b.t));
    el.style.setProperty("--br", f(b.r));
    el.style.setProperty("--bb", f(b.b));
  };

  const render = () => {
    if (deckApi.flatMQ.matches) {
      stage.classList.remove("is-comp");
      SL.forEach((el) => {
        el.style.clipPath = "";
        el.classList.remove("is-sliver");
        el.classList.add("is-active");
      });
      return;
    }

    W = area.clientWidth;
    H = area.clientHeight;
    if (!W || !H) return;
    port = W < H;
    stage.classList.toggle("m-port", port);

    const comp = composition();
    stage.classList.remove("m-cols", "m-rows", "m-grid");
    stage.classList.add(`m-${comp.mode}`);

    const k = Math.max(0, step);
    if (k >= 1 && k <= N) {
      accum(k).forEach((g, i) => {
        const el = SL[i];
        el.style.clipPath = poly(g.pts);
        el.classList.toggle("is-active", g.st === "active");
        el.classList.toggle("is-sliver", g.st === "sliver");
        if (g.body) setBody(el, g.body);
        if (g.sliv) {
          el.style.setProperty("--sx", f(g.sliv.x));
          el.style.setProperty("--sy", f(g.sliv.y));
          el.style.setProperty("--sr", `${g.sliv.r}deg`);
        }
      });
    } else if (k === COMP_STEP) {
      comp.sl.forEach((g, i) => {
        const el = SL[i];
        el.classList.remove("is-active", "is-sliver");
        const lab = el.querySelector(".lab");
        if (lab) {
          lab.dataset.a = g.lab.a;
        }
        el.style.setProperty("--lx", f(g.lab.x));
        el.style.setProperty("--ly", f(g.lab.y));
        el.style.setProperty("--lw", f(g.lab.w));
        el.style.clipPath = poly(g.pts);
      });
    } else {
      accum(0).forEach((g, i) => {
        SL[i].style.clipPath = poly(g.pts);
        SL[i].classList.remove("is-active", "is-sliver");
      });
    }

    SL.forEach((el, i) => el.style.setProperty("--z", String(i + 1)));
  };

  const instant = (fn) => {
    stage.classList.add("no-tr");
    fn();
    void stage.offsetWidth;
    requestAnimationFrame(() =>
      requestAnimationFrame(() => stage.classList.remove("no-tr"))
    );
  };

  const setStep = (n) => {
    if (n === step) return;
    step = n;
    stage.dataset.step = String(n);
    stage.classList.toggle("is-comp", n === COMP_STEP);
    render();
  };

  const slicesPanelIdx = deckApi.panels.indexOf(panel);
  const updateFromScroll = (st) => {
    const stops = deckApi.getStops();
    if (deckApi.flatMQ.matches) {
      let k = 1;
      stops.forEach((s) => {
        if (s.pi === slicesPanelIdx && s.top <= st + deckApi.DH() / 2) {
          k = s.k;
        }
      });
      setStep(k);
      return;
    }

    if (st < panel.offsetTop - deckApi.DH() * 0.55) {
      setStep(0);
      return;
    }

    let k = 1;
    let bd = Infinity;
    stops.forEach((s) => {
      if (s.pi !== slicesPanelIdx) return;
      const d = Math.abs(s.top - st);
      if (d <= bd) {
        bd = d;
        k = s.k;
      }
    });
    setStep(k);
  };

  instant(() => {
    step = -1;
    setStep(0);
  });

  if ("ResizeObserver" in window) {
    new ResizeObserver(() => instant(render)).observe(area);
  }

  // Click a folded sliver or a composite shard background to focus that slice
  area.addEventListener("click", (e) => {
    if (e.target.closest("a, button, iframe")) return;
    const sl = e.target.closest(".sl");
    if (!sl) return;
    if (
      sl.classList.contains("is-sliver") ||
      stage.classList.contains("is-comp")
    ) {
      const k = Number(sl.dataset.k);
      if (k >= 1 && k <= N) {
        deckApi.goToSlice(k);
      }
    }
  });

  deckApi.registerSlicesUpdater(updateFromScroll);

  // Interactive Higurashi trilingual quote switcher inside Slice 2
  let siteLocale = initialLocale === "tr" ? "tr" : "en";
  let quoteLang = siteLocale;

  const langBtns = Array.from(document.querySelectorAll("[data-higu-lang]"));
  const speakerEl = document.querySelector("#higu-speaker");
  const lineEl = document.querySelector("#higu-line");

  const paintQuote = () => {
    const q = higurashiQuotes[0];
    langBtns.forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.higuLang === quoteLang));
    });

    if (speakerEl) {
      speakerEl.textContent = q.speaker[quoteLang] || q.speaker.en;
      speakerEl.lang = quoteLang === "ja" ? "ja" : quoteLang;
    }
    if (lineEl) {
      const wrap = quoteLang === "ja" ? ["「", "」"] : ["“", "”"];
      lineEl.textContent = `${wrap[0]}${q.lines[quoteLang] || q.lines.en}${wrap[1]}`;
      lineEl.lang = quoteLang === "ja" ? "ja" : quoteLang;
    }
  };

  langBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const l = btn.dataset.higuLang;
      if (l === "tr" || l === "en" || l === "ja") {
        quoteLang = l;
        paintQuote();
      }
    });
  });

  paintQuote();

  return {
    setLocale(nextLocale, syncQuoteLang = false) {
      siteLocale = nextLocale === "tr" ? "tr" : "en";
      if (syncQuoteLang && quoteLang !== "ja") {
        quoteLang = siteLocale;
      }
      paintQuote();
      instant(render);
    }
  };
}
