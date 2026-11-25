/*!
 * Sakuga VFX — Electric Ultraviolet Adaptation for remilya.dev
 * Procedural Canvas 2D anime micro-interaction engine adapted from
 * finktheartist/sakuga-vfx (MIT License, Copyright (c) 2026 Justin Finkelman).
 */

const TAU = Math.PI * 2;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const rnd = (a = 1, b) =>
  b === undefined ? Math.random() * a : a + Math.random() * (b - a);
const out = (t) => 1 - (1 - t) ** 3;
const inn = (t) => t * t * t;
const back = (t) => 1 + 2.70158 * (t - 1) ** 3 + 1.70158 * (t - 1) ** 2;

const PALETTES = {
  ultraviolet: {
    fill: "#f5f3ff",
    shade: "#c4b5fd",
    line: "#080312",
    accent: "#d946ef"
  },
  scarlet: {
    fill: "#ffeea8",
    shade: "#fb7185",
    line: "#080312",
    accent: "#e11d48"
  },
  crimson: {
    fill: "#fff1f2",
    shade: "#fda4af",
    line: "#080312",
    accent: "#be123c"
  }
};

const pickPal = (name) => PALETTES[name] || PALETTES.ultraviolet;
const isCompact = () => window.innerWidth < 600;
const scaleFactor = () => (isCompact() ? 0.74 : 1);

const reduceMQ =
  typeof window !== "undefined" && window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)")
    : { matches: false };

let calm = reduceMQ.matches;
let canvas = null;
let g = null;
let dpr = 1;
let running = false;
let dirty = false;
let now = 0;
let last = 0;
let initialized = false;

const live = [];
const timers = [];

function sizeCanvas() {
  if (!canvas) return;
  dpr = Math.min(2.5, window.devicePixelRatio || 1);
  canvas.width = Math.round(window.innerWidth * dpr);
  canvas.height = Math.round(window.innerHeight * dpr);
}

function clearCanvas() {
  live.length = 0;
  timers.length = 0;
  dirty = false;
  if (canvas && g) {
    g.setTransform(1, 0, 0, 1, 0, 0);
    g.clearRect(0, 0, canvas.width, canvas.height);
  }
}

function ensureCanvas() {
  if (canvas || !document.body) return canvas;
  canvas = document.createElement("canvas");
  canvas.id = "sakugaFx";
  canvas.className = "sakuga-fx";
  canvas.setAttribute("aria-hidden", "true");
  document.body.append(canvas);
  g = canvas.getContext("2d");
  sizeCanvas();
  return canvas;
}

function start() {
  if (running || calm) return;
  running = true;
  last = performance.now();
  requestAnimationFrame(loop);
}

function add(life, draw) {
  if (calm || document.hidden) return null;
  if (!ensureCanvas() || !g) return null;
  const p = { t: 0, life, draw, dead: false };
  live.push(p);
  start();
  return p;
}

function later(ms, fn) {
  if (calm || document.hidden) return;
  timers.push({ at: now + ms / 1000, fn });
  start();
}

function tick(dt) {
  if (!canvas || !g || (!live.length && !dirty)) return;
  g.setTransform(dpr, 0, 0, dpr, 0, 0);
  g.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
  g.lineJoin = "round";
  g.lineCap = "round";

  for (let i = live.length - 1; i >= 0; i--) {
    const p = live[i];
    p.t += dt;
    if (p.dead || p.t >= p.life) {
      live.splice(i, 1);
    }
  }

  for (let i = 0; i < live.length; i++) {
    const p = live[i];
    g.save();
    p.draw(p.t / p.life, p.t, dt);
    g.restore();
  }
  dirty = live.length > 0;
}

function loop(ms) {
  if (!running) return;
  if (calm || document.hidden) {
    clearCanvas();
    running = false;
    return;
  }
  const dt = clamp((ms - last) / 1000, 0, 0.034);
  last = ms;
  now += dt;

  if (timers.length) {
    for (let i = timers.length - 1; i >= 0; i--) {
      if (timers[i].at <= now) {
        const job = timers.splice(i, 1)[0];
        job.fn();
      }
    }
  }

  tick(dt);

  if (!timers.length && !live.length && !dirty) {
    running = false;
    return;
  }
  requestAnimationFrame(loop);
}

// ───────── Cel-Shaded Procedural Drawing Primitives ─────────

function blob(cs, pal, lw = 1.5, { lx = -1, arcs = false, deep = 1 } = {}) {
  const u = new Path2D();
  for (const [x, y, r] of cs) {
    if (r > 0.3) {
      u.moveTo(x + r, y);
      u.arc(x, y, r, 0, TAU);
    }
  }
  g.save();
  g.lineWidth = lw * 2;
  g.strokeStyle = pal.line;
  g.stroke(u);
  g.restore();

  g.save();
  g.clip(u);
  g.fillStyle = pal.shade;
  g.fillRect(-1e4, -1e4, 2e4, 2e4);
  const r0 = cs[0] ? cs[0][2] : 8;
  g.save();
  g.translate(lx * r0 * 0.2 * deep, -r0 * 0.26 * deep);
  g.fillStyle = pal.fill;
  g.fill(u);
  g.restore();
  if (arcs) {
    g.strokeStyle = pal.line;
    g.lineWidth = lw * 0.75;
    g.beginPath();
    for (const [x, y, rr] of cs) {
      if (rr > 3) {
        g.moveTo(x + Math.cos(-2.7) * rr, y + Math.sin(-2.7) * rr);
        g.arc(x, y, rr, -2.7, -0.5);
      }
    }
    g.stroke();
  }
  g.restore();
}

function shape(path, pal, lw = 1.5, off = 3, fill = pal.fill) {
  g.save();
  g.lineWidth = lw * 2;
  g.strokeStyle = pal.line;
  g.stroke(path);
  g.restore();

  g.save();
  g.clip(path);
  g.fillStyle = pal.shade;
  g.fillRect(-1e4, -1e4, 2e4, 2e4);
  g.translate(-off * 0.7, -off);
  g.fillStyle = fill;
  g.fill(path);
  g.restore();
}

function puff(
  x,
  y,
  { n = 4, size = 10, vx = 0, vy = -16, life = 0.65, spread = 1, pal = "ultraviolet" } = {}
) {
  const P = pickPal(pal);
  const lobes = Array.from({ length: n }, (_, i) => ({
    a: (i / n) * TAU + rnd(0.6),
    d: rnd(0.25, 0.85) * size * spread,
    r: rnd(0.55, 1) * size,
    ph: rnd(TAU),
    sp: rnd(0.6, 1.3)
  }));
  lobes.unshift({ a: 0, d: 0, r: size, ph: 0, sp: 1 });
  add(life, (k, t) => {
    const grow = back(clamp(t / 0.2));
    const die = 1 - inn(clamp((k - 0.55) / 0.45));
    const px = x + vx * out(k) * life;
    const py = y + vy * out(k) * life;
    blob(
      lobes.map((l) => [
        px + Math.cos(l.a + t * 0.9 * l.sp) * l.d * (0.5 + out(k) * 0.9),
        py + Math.sin(l.a + t * 0.9 * l.sp) * l.d * (0.5 + out(k) * 0.9) - out(k) * 5 * l.sp,
        l.r * grow * die * (1 + Math.sin(t * 9 + l.ph) * 0.05)
      ]),
      P,
      1.4,
      { lx: 0.5, arcs: size > 6.5, deep: 1.4 }
    );
  });
}

function burst(
  x,
  y,
  { r = 38, spikes = 11, life = 0.34, pal = "ultraviolet" } = {}
) {
  const P = pickPal(pal);
  const j = Array.from({ length: spikes * 2 }, (_, i) =>
    i % 2 ? rnd(0.34, 0.5) : rnd(0.75, 1.15)
  );
  const rot = rnd(TAU);
  const pins = Array.from({ length: 7 }, (_, i) => ({
    a: (i / 7) * TAU + rnd(0.5),
    l: rnd(1.25, 1.75),
    w: rnd(0.03, 0.055)
  }));
  const star = (R, turn, inner = 1) => {
    const p = new Path2D();
    j.forEach((m, i) => {
      const a = rot + turn + (i / j.length) * TAU;
      const rr = R * (i % 2 ? m * inner : m);
      p[i ? "lineTo" : "moveTo"](x + Math.cos(a) * rr, y + Math.sin(a) * rr);
    });
    p.closePath();
    return p;
  };

  add(life, (k) => {
    const R = r * out(clamp(k / 0.3));
    const hollow = 1 + inn(clamp((k - 0.35) / 0.65)) * 1.3;
    const r0 = R * 0.6 * Math.min(1.9, hollow);

    g.save();
    g.fillStyle = P.accent;
    g.beginPath();
    for (const pin of pins) {
      const l = R * pin.l;
      if (l <= r0) continue;
      g.moveTo(x + Math.cos(pin.a - pin.w) * r0, y + Math.sin(pin.a - pin.w) * r0);
      g.lineTo(x + Math.cos(pin.a) * l, y + Math.sin(pin.a) * l);
      g.lineTo(x + Math.cos(pin.a + pin.w) * r0, y + Math.sin(pin.a + pin.w) * r0);
    }
    g.fill();
    g.restore();

    const big = star(R * 1.14, 0.19, hollow);
    g.save();
    g.fillStyle = P.shade;
    g.fill(big);
    g.strokeStyle = P.line;
    g.lineWidth = 1.4;
    g.stroke(big);
    g.restore();

    shape(star(R * 0.82, 0, hollow), P, 1.4, 2.6);
  });
}

function shards(
  x,
  y,
  {
    n = 7,
    speed = 180,
    size = 4.8,
    life = 0.68,
    dir = -Math.PI / 2,
    arc = Math.PI * 1.35,
    grav = 420,
    pal = "ultraviolet"
  } = {}
) {
  const P = pickPal(pal);
  const count = isCompact() ? Math.max(3, Math.round(n * 0.65)) : n;
  for (let i = 0; i < count; i++) {
    const a = dir + rnd(-arc, arc) / 2;
    const v = speed * rnd(0.5, 1.15);
    const s = size * rnd(0.65, 1.35);
    const spin = rnd(-7, 7);
    const pts = [
      [-1.4, 0.1],
      [-0.6, -0.7],
      [1.2, -0.45],
      [1.5, 0.15],
      [0.4, 0.75]
    ].map(([px, py]) => [px * rnd(0.8, 1.2), py * rnd(0.8, 1.2)]);

    add(life * rnd(0.7, 1), (k, t) => {
      const px = x + Math.cos(a) * v * t;
      const py = y + Math.sin(a) * v * t + grav * t * t;
      const sc = s * (1 - inn(clamp((k - 0.6) / 0.4)));
      if (sc <= 0.35) return;
      g.translate(px, py);
      g.rotate(spin * t + a);
      const p = new Path2D();
      pts.forEach(([u, w], q) => p[q ? "lineTo" : "moveTo"](u * sc, w * sc));
      p.closePath();
      shape(p, P, 1.1, sc * 0.45, P.fill);
      if (sc > 2.5) {
        g.strokeStyle = P.line;
        g.lineWidth = 0.9;
        g.beginPath();
        g.moveTo(pts[1][0] * sc, pts[1][1] * sc);
        g.lineTo(pts[4][0] * sc, pts[4][1] * sc);
        g.stroke();
      }
    });
  }
}

function ring(
  x,
  y,
  { rx = 44, ry = 18, life = 0.46, w = 4.5, pal = "ultraviolet" } = {}
) {
  const P = pickPal(pal);
  add(life, (k) => {
    const s = out(k);
    const lw = w * (1 - k);
    if (lw <= 0.25) return;
    g.beginPath();
    g.ellipse(x, y, rx * (0.35 + s), ry * (0.35 + s), 0, 0, TAU);
    g.strokeStyle = P.line;
    g.lineWidth = lw + 2.6;
    g.stroke();
    g.strokeStyle = P.fill;
    g.lineWidth = lw;
    g.stroke();
  });
}

function slash(
  x,
  y,
  { len = 130, ang = -0.25, life = 0.42, thick = 14, pal = "crimson" } = {}
) {
  const P = pickPal(pal);
  const R = len * 0.9;
  const cx = x - Math.cos(ang - Math.PI / 2) * R * 0.86;
  const cy = y - Math.sin(ang - Math.PI / 2) * R * 0.86;
  const a0 = ang - Math.PI / 2 - 0.62;
  const sweep = 1.24;

  add(life, (k) => {
    const head = out(clamp(k / 0.42));
    const tail = inn(clamp((k - 0.22) / 0.78));
    if (head - tail < 0.01) return;

    const cres = (T) => {
      const p = new Path2D();
      const N = 26;
      for (let i = 0; i <= N; i++) {
        const u = lerp(tail, head, i / N);
        const a = a0 + sweep * u;
        p[i ? "lineTo" : "moveTo"](cx + Math.cos(a) * R, cy + Math.sin(a) * R);
      }
      for (let i = N; i >= 0; i--) {
        const q = i / N;
        const u = lerp(tail, head, q);
        const a = a0 + sweep * u;
        const rr = R - T * Math.sin(q * Math.PI) ** 0.7;
        p.lineTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr);
      }
      p.closePath();
      return p;
    };

    const outer = cres(thick);
    g.save();
    g.fillStyle = P.accent;
    g.fill(outer);
    g.restore();

    g.fillStyle = P.fill;
    g.fill(cres(thick * 0.4));

    g.strokeStyle = P.line;
    g.lineWidth = 1.5;
    g.stroke(outer);
  });
}

function lines(
  x,
  y,
  { n = 7, dir = Math.PI, len = 52, spread = 44, life = 0.32, pal = "ultraviolet" } = {}
) {
  const P = pickPal(pal);
  const count = isCompact() ? Math.max(4, Math.round(n * 0.65)) : n;
  for (let i = 0; i < count; i++) {
    const o = rnd(-spread, spread);
    const l = len * rnd(0.55, 1.3);
    const d = rnd(0, 0.22);
    const w = rnd(1.3, 2.8);
    add(life, (k) => {
      const kk = clamp((k - d) / (1 - d));
      if (kk <= 0) return;
      const a = out(kk);
      const b = inn(kk);
      const px = x - Math.sin(dir) * o;
      const py = y + Math.cos(dir) * o;
      const x0 = px + Math.cos(dir) * l * b * 1.4;
      const y0 = py + Math.sin(dir) * l * b * 1.4;
      const x1 = px + Math.cos(dir) * l * (0.2 + a * 1.2);
      const y1 = py + Math.sin(dir) * l * (0.2 + a * 1.2);

      g.strokeStyle = P.line;
      g.lineWidth = (w + 1.4) * (1 - b);
      g.beginPath();
      g.moveTo(x0, y0);
      g.lineTo(x1, y1);
      g.stroke();

      g.strokeStyle = P.shade;
      g.lineWidth = w * (1 - b);
      g.beginPath();
      g.moveTo(x0, y0);
      g.lineTo(x1, y1);
      g.stroke();
    });
  }
}

function ticks(
  x,
  y,
  { n = 3, r = 15, len = 9, dir = -0.9, life = 0.38, fan = 0.44, pal = "ultraviolet" } = {}
) {
  const P = pickPal(pal);
  add(life, (k) => {
    const a = out(clamp(k / 0.5));
    const b = inn(clamp((k - 0.4) / 0.6));
    g.save();
    g.fillStyle = P.accent;
    g.strokeStyle = P.line;
    g.lineWidth = 1.2;
    g.beginPath();
    for (let i = 0; i < n; i++) {
      const an = dir + (i - (n - 1) / 2) * fan;
      const r0 = r + len * b * 1.25;
      const r1 = r + len * a * 1.25;
      const hw = 0.07 + 2.2 / (r1 + 8);
      if (r1 - r0 < 0.6) continue;
      g.moveTo(x + Math.cos(an) * r0, y + Math.sin(an) * r0);
      g.lineTo(x + Math.cos(an - hw) * r1, y + Math.sin(an - hw) * r1);
      g.lineTo(x + Math.cos(an + hw) * r1, y + Math.sin(an + hw) * r1);
      g.closePath();
    }
    g.fill();
    g.stroke();
    g.restore();
  });
}

function wob(x, y, { dir = 1, r = 14, life = 0.42, pal = "ultraviolet" } = {}) {
  const P = pickPal(pal);
  add(life, (k) => {
    const lw = 2.2 * (1 - k);
    if (lw < 0.25) return;
    g.strokeStyle = P.shade;
    g.lineWidth = lw;
    g.beginPath();
    for (const d of [0, 6.5]) {
      const rr = r + d + out(k) * 7;
      const c = dir > 0 ? 0 : Math.PI;
      g.moveTo(
        x - dir * r + Math.cos(c - 0.45) * rr,
        y + Math.sin(c - 0.45) * rr
      );
      g.arc(x - dir * r, y, rr, c - 0.45, c + 0.45);
    }
    g.stroke();
  });
}

function kira(x, y, { r = 9, life = 0.54, pal = "ultraviolet" } = {}) {
  const P = pickPal(pal);
  add(life, (k, t) => {
    const s = r * Math.sin(k * Math.PI) ** 0.6;
    if (s < 0.4) return;
    const q = s * 0.17;
    const p = new Path2D();
    g.translate(x, y);
    g.rotate(Math.sin(t * 3) * 0.2);
    p.moveTo(0, -s);
    p.quadraticCurveTo(q, -q, s * 0.72, 0);
    p.quadraticCurveTo(q, q, 0, s);
    p.quadraticCurveTo(-q, q, -s * 0.72, 0);
    p.quadraticCurveTo(-q, -q, 0, -s);
    g.save();
    g.fillStyle = P.fill;
    g.fill(p);
    g.restore();
    g.strokeStyle = P.accent;
    g.lineWidth = 1.8;
    g.stroke(p);
  });
}

// ───────── DOM Geometry & Spring-Pop Helper ─────────

function boxOf(el) {
  if (!el || !el.getBoundingClientRect) return null;
  const r = el.getBoundingClientRect();
  if (!r.width && !r.height) return null;
  return {
    x: r.left + r.width * 0.5,
    y: r.top + r.height * 0.5,
    left: r.left,
    right: r.right,
    top: r.top,
    bottom: r.bottom,
    w: r.width,
    h: r.height
  };
}

function triggerPop(el) {
  if (calm || !el || !el.classList) return;
  el.classList.remove("is-sakuga-pop");
  requestAnimationFrame(() => {
    if (!el.isConnected || calm) return;
    el.classList.add("is-sakuga-pop");
    el.addEventListener(
      "animationend",
      () => el.classList.remove("is-sakuga-pop"),
      { once: true }
    );
  });
}

function resolvePoint(el, pt) {
  if (pt && Number.isFinite(pt.x) && Number.isFinite(pt.y)) {
    return pt;
  }
  const b = boxOf(el);
  return b ? { x: b.x, y: b.y } : null;
}

// ───────── Semantic Portfolio Effects ─────────

export function fxImpact(el, pal = "ultraviolet", pt) {
  if (calm) return;
  const b = boxOf(el);
  const p = resolvePoint(el, pt);
  if (!p) return;
  const sc = scaleFactor();
  triggerPop(el);
  burst(p.x, p.y, { r: 34 * sc, spikes: 11, life: 0.34, pal });
  shards(p.x, p.y, { n: 6, speed: 175 * sc, size: 4.4 * sc, pal });
  ticks(p.x, p.y - (b ? b.h * 0.35 : 14), {
    n: 3,
    r: 14 * sc,
    len: 9 * sc,
    dir: -Math.PI / 2,
    pal
  });
  if (b) {
    later(90, () => {
      kira(b.right - 6, b.top + 4, { r: 9.5 * sc, pal });
    });
  }
}

export function fxDanmaku(el, pt) {
  if (calm) return;
  const b = boxOf(el);
  const p = resolvePoint(el, pt);
  if (!p) return;
  const sc = scaleFactor();
  triggerPop(el);
  ring(p.x, p.y, { rx: 52 * sc, ry: 22 * sc, life: 0.44, w: 4.5, pal: "scarlet" });
  burst(p.x, p.y, { r: 34 * sc, spikes: 12, life: 0.34, pal: "scarlet" });
  shards(p.x, p.y, { n: 7, speed: 185 * sc, size: 4.5 * sc, pal: "scarlet" });

  // 4 cardinal danmaku glints echoing the #i-danmaku glyph
  const rad = (b ? Math.min(b.w, 120) * 0.38 : 34) * sc;
  [0, Math.PI / 2, Math.PI, (Math.PI * 3) / 2].forEach((a, idx) => {
    later(idx * 28, () => {
      kira(p.x + Math.cos(a) * rad, p.y + Math.sin(a) * rad * 0.65, {
        r: 8.5 * sc,
        life: 0.48,
        pal: "scarlet"
      });
    });
  });
}

export function fxRedTruth(btnEl, quoteBoxEl) {
  if (calm) return;
  const sc = scaleFactor();
  triggerPop(btnEl);

  const btnBox = boxOf(btnEl);
  if (btnBox) {
    ticks(btnBox.x, btnBox.top, {
      n: 3,
      r: 10 * sc,
      len: 8 * sc,
      dir: -Math.PI / 2,
      pal: "crimson"
    });
  }

  const box = boxOf(quoteBoxEl) || btnBox;
  if (!box) return;
  const slashLen = clamp(box.w * 0.62, 110, 210) * sc;
  slash(box.x, box.y + box.h * 0.1, {
    len: slashLen,
    ang: -0.18,
    life: 0.44,
    thick: 13 * sc,
    pal: "crimson"
  });
  kira(box.left + box.w * 0.18, box.y + box.h * 0.22, {
    r: 10 * sc,
    life: 0.52,
    pal: "crimson"
  });
  later(75, () => {
    kira(box.right - box.w * 0.14, box.top + box.h * 0.34, {
      r: 11.5 * sc,
      life: 0.56,
      pal: "crimson"
    });
  });
}

export function fxQuoteSwitch(btnEl) {
  if (calm) return;
  const b = boxOf(btnEl);
  if (!b) return;
  const sc = scaleFactor();
  triggerPop(btnEl);
  ticks(b.x, b.top, {
    n: 3,
    r: 10 * sc,
    len: 8 * sc,
    dir: -Math.PI / 2,
    pal: "ultraviolet"
  });
  puff(b.x, b.y, {
    n: 3,
    size: 7 * sc,
    vy: -16,
    life: 0.5,
    pal: "ultraviolet"
  });
  wob(b.right + 4, b.y, { dir: 1, r: 10 * sc, pal: "ultraviolet" });
}

export function fxMangaTurn(stageEl, dir = 1) {
  if (calm) return;
  const b = boxOf(stageEl);
  if (!b) return;
  const sc = scaleFactor();
  const forward = dir >= 0;
  const lineDir = forward ? Math.PI : 0;
  const edgeX = forward ? b.x + b.w * 0.18 : b.x - b.w * 0.18;

  lines(edgeX, b.y, {
    n: 7,
    dir: lineDir,
    len: 56 * sc,
    spread: Math.min(b.h * 0.34, 78),
    life: 0.34,
    pal: "ultraviolet"
  });
  puff(edgeX, b.y + b.h * 0.2, {
    n: 4,
    size: 9.5 * sc,
    vx: forward ? -28 : 28,
    vy: -14,
    life: 0.58,
    pal: "ultraviolet"
  });
  wob(forward ? b.x - b.w * 0.22 : b.x + b.w * 0.22, b.y, {
    dir: forward ? -1 : 1,
    r: 15 * sc,
    pal: "ultraviolet"
  });
  later(70, () => {
    kira(b.x + (forward ? 44 : -44) * sc, b.top + b.h * 0.2, {
      r: 10 * sc,
      pal: "ultraviolet"
    });
  });
}

export function fxSpark(el, pal = "ultraviolet", pt) {
  if (calm) return;
  const b = boxOf(el);
  const p = resolvePoint(el, pt);
  if (!p) return;
  const sc = scaleFactor();
  if (el && el.matches && el.matches("a, button")) {
    triggerPop(el);
  }
  ticks(p.x, p.y, {
    n: 3,
    r: 12 * sc,
    len: 8 * sc,
    dir: -0.85,
    pal
  });
  kira(p.x + (b ? Math.min(b.w * 0.28, 22) : 14) * sc, p.y - 8 * sc, {
    r: 8.5 * sc,
    life: 0.48,
    pal
  });
  puff(p.x, p.y, {
    n: 3,
    size: 6 * sc,
    vy: -14,
    life: 0.45,
    pal
  });
}

export function initSakugaFx() {
  if (initialized) return;
  initialized = true;

  if (reduceMQ.addEventListener) {
    reduceMQ.addEventListener("change", (e) => {
      calm = e.matches;
      if (calm) clearCanvas();
    });
  }

  window.addEventListener("resize", sizeCanvas, { passive: true });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) clearCanvas();
  });

  // Delegated VFX on standard CTAs and compact route/tool links (non-blocking)
  document.addEventListener("click", (e) => {
    if (calm) return;
    const target = e.target && e.target.closest
      ? e.target.closest(".btn, .tool-link--primary, .route-pill, .lab-cta")
      : null;
    if (!target) return;

    const pt =
      e.clientX || e.clientY ? { x: e.clientX, y: e.clientY } : undefined;

    if (target.id === "sl1-primary") {
      fxDanmaku(target, pt);
    } else if (target.classList.contains("btn")) {
      fxImpact(target, "ultraviolet", pt);
    } else {
      const pal =
        target.id === "sl1-lab-cta" ||
        target.getAttribute("href") === "https://remilya.dev/ScarletSurvivors/"
          ? "scarlet"
          : "ultraviolet";
      fxSpark(target, pal, pt);
    }
  });
}
