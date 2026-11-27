import { useEffect, useRef } from 'react';

// Fondo del hero: semillas de diente de león y polen flotando sobre un degradado arena → océano.
// Los sprites se dibujan una sola vez, el movimiento depende del tiempo de frame,
// el loop se detiene fuera de pantalla y con "reducir movimiento" queda un frame fijo.
// Valores fáciles de ajustar:
const SEEDS_PER_MPX = 32; // semillas por millón de píxeles
const POLLEN_PER_MPX = 90; // granos de polen por millón de píxeles
const FILAMENT = '0,119,182'; // color de los filamentos (r,g,b): azul océano #0077b6
const STALK = '10,37,64'; // tallo y semilla: azul marino #0a2540
const POLLEN = ['244,162,97', '0,119,182', '0,150,199', '244,162,97']; // ámbar, azul océano, azul medio
const BREEZE = 1; // 0.5 tranquilo, 2 ventoso
const WARMUP = 120; // frames simulados antes del primer pintado

type Scene = { update: (dt: number, t: number) => void; draw: (c: CanvasRenderingContext2D, t: number) => void };

function glow(size: number, rgb: string, stops: number[][]): HTMLCanvasElement {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d')!;
  const r = size / 2;
  const grd = g.createRadialGradient(r, r, 0, r, r, r);
  for (const [o, a] of stops) grd.addColorStop(o, `rgba(${rgb},${a})`);
  g.fillStyle = grd;
  g.fillRect(0, 0, size, size);
  return c;
}

function mount(canvas: HTMLCanvasElement): () => void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return () => {};
  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let w = 0, h = 0, t = 0, last = 0, raf = 0, seen = true;
  let scene: Scene | null = null;
  const fit = () => {
    const r = canvas.getBoundingClientRect();
    if (scene && Math.abs(r.width - w) < 1 && Math.abs(r.height - h) < 1) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    w = Math.max(1, r.width);
    h = Math.max(1, r.height);
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    scene = createScene(w, h);
    for (let i = 0; i < WARMUP; i++) { t += 1 / 30; scene.update(1 / 30, t); }
    scene.draw(ctx, t);
  };
  const frame = (now: number) => {
    const dt = Math.min(0.05, Math.max(0, (now - last) / 1000));
    last = now;
    t += dt;
    if (scene) { scene.update(dt, t); scene.draw(ctx, t); }
    raf = requestAnimationFrame(frame);
  };
  const run = () => {
    cancelAnimationFrame(raf);
    raf = 0;
    if (!still && seen && !document.hidden) { last = performance.now(); raf = requestAnimationFrame(frame); }
  };
  const ro = new ResizeObserver(fit);
  ro.observe(canvas);
  const io = new IntersectionObserver((es) => { seen = es[es.length - 1].isIntersecting; run(); });
  io.observe(canvas);
  document.addEventListener('visibilitychange', run);
  fit();
  run();
  return () => {
    cancelAnimationFrame(raf);
    ro.disconnect();
    io.disconnect();
    document.removeEventListener('visibilitychange', run);
  };
}

function createScene(w: number, h: number): Scene {
  const area = (w * h) / 1e6;
// Sprite de una semilla real de diente de león (vilano), dibujado una vez en alta resolución:
  // cúpula de filamentos plumosos en 3D, tallo largo y fino, y la semilla (aquenio) abajo.
  const makeSeed = (variant: number) => {
    const S = 220;
    const c = document.createElement('canvas');
    c.width = c.height = S;
    const q = c.getContext('2d')!;
    q.lineCap = 'round';
    const cx = S / 2, top = S * 0.3; // centro de la cúpula
    const tilt = 0.28 + variant * 0.08; // inclinación de la cúpula (vista ligeramente de lado)
    const bristles = 70;
    const items: { x: number; y: number; front: number; L: number; dx: number; dy: number }[] = [];
    for (let i = 0; i < bristles; i++) {
      const theta = (i / bristles) * Math.PI * 2 + Math.random() * 0.08;
      const phi = 0.12 + Math.random() * 0.5; // elevación sobre la horizontal
      const L = S * (0.3 + Math.random() * 0.07);
      const dx = Math.cos(theta) * Math.cos(phi);
      const dy = -Math.sin(phi) + Math.sin(theta) * Math.cos(phi) * tilt;
      items.push({ x: cx + dx * L, y: top + dy * L, front: Math.sin(theta), L, dx, dy });
    }
    items.sort((a, b) => a.front - b.front); // primero los de atrás
    for (const b of items) {
      const depth = 0.55 + 0.45 * ((b.front + 1) / 2);
      // filamento principal con leve caída
      q.strokeStyle = `rgba(${FILAMENT},${0.55 * depth + 0.25})`;
      q.lineWidth = 1.5;
      q.beginPath();
      q.moveTo(cx, top);
      const mx = cx + b.dx * b.L * 0.55, my = top + b.dy * b.L * 0.55 - 2;
      q.quadraticCurveTo(mx, my, b.x, b.y + 3);
      q.stroke();
      // barbas laterales (aspecto plumoso) en la mitad exterior
      q.lineWidth = 0.9;
      q.strokeStyle = `rgba(${FILAMENT},${0.4 * depth + 0.15})`;
      for (let k = 0; k < 5; k++) {
        const t = 0.5 + k * 0.1;
        const px = cx + (b.x - cx) * t, py = top + (b.y + 3 - top) * t;
        const len = 5 + t * 6;
        const nx = -b.dy, ny = b.dx; // perpendicular
        const nn = Math.hypot(nx, ny) || 1;
        for (const side of [-1, 1]) {
          q.beginPath();
          q.moveTo(px, py);
          q.lineTo(px + (nx / nn) * len * side * 0.7 + b.dx * len * 0.6, py + (ny / nn) * len * side * 0.7 + b.dy * len * 0.6);
          q.stroke();
        }
      }
    }
    // nudo central
    q.fillStyle = `rgba(${STALK},0.9)`;
    q.beginPath(); q.arc(cx, top, 2.4, 0, 7); q.fill();
    // tallo (pico) largo y fino
    const stemEnd = S * 0.82;
    q.strokeStyle = `rgba(${STALK},0.8)`;
    q.lineWidth = 1.4;
    q.beginPath(); q.moveTo(cx, top); q.quadraticCurveTo(cx + 2, (top + stemEnd) / 2, cx, stemEnd); q.stroke();
    // semilla (aquenio) con estrías
    q.fillStyle = `rgba(${STALK},0.95)`;
    q.beginPath(); q.ellipse(cx, stemEnd + 10, 3.6, 11, 0, 0, 7); q.fill();
    q.strokeStyle = 'rgba(255,255,255,0.35)';
    q.lineWidth = 0.7;
    for (let k = -1; k <= 1; k++) { q.beginPath(); q.moveTo(cx + k * 1.4, stemEnd + 2); q.lineTo(cx + k * 1.4, stemEnd + 18); q.stroke(); }
    return c;
  };
  const sprites = [makeSeed(0), makeSeed(1), makeSeed(2)];

  const grains = POLLEN.map((c) => glow(12, c, [[0, 1], [0.5, 0.9], [1, 0]]));
  const seeds = Array.from({ length: Math.max(6, Math.round(area * SEEDS_PER_MPX)) }, (_, i) => ({
    x: Math.random() * w, y: Math.random() * h, z: Math.random(), r: (Math.random() - 0.5) * 0.6, s: Math.random() * 99, img: sprites[i % sprites.length],
  }));
  const dust = Array.from({ length: Math.min(500, Math.round(area * POLLEN_PER_MPX)) }, (_, i) => ({
    x: Math.random() * w, y: Math.random() * h, z: Math.random(), s: Math.random() * 99, g: grains[i % grains.length],
  }));
  let breeze = 0;
  return {
    update(dt, t) {
      breeze = (14 + Math.sin(t * 0.17) * 10 + Math.sin(t * 0.43) * 6) * BREEZE;
      for (const p of seeds) {
        const k = 0.4 + p.z;
        p.x += (breeze + Math.sin(t * 0.6 + p.s) * 8) * k * dt;
        p.y += (-6 + Math.sin(t * 0.9 + p.s * 1.3) * 10) * k * dt;
        p.r = Math.sin(t * 0.5 + p.s) * 0.35;
        if (p.x > w + 80) { p.x = -80; p.y = Math.random() * h; }
        if (p.y < -80) p.y = h + 80; else if (p.y > h + 80) p.y = -80;
      }
      for (const p of dust) {
        p.x += (breeze * 0.7 + Math.sin(t + p.s) * 6) * (0.3 + p.z) * dt;
        p.y += Math.cos(t * 0.8 + p.s) * 7 * dt - 2 * dt;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10; else if (p.y > h + 10) p.y = -10;
      }
    },
    draw(c, t) {
      c.clearRect(0, 0, w, h);
      for (const p of dust) {
        const s = 1.5 + p.z * 2.5;
        c.globalAlpha = (0.3 + p.z * 0.5) * (0.6 + 0.4 * Math.sin(t * 2 + p.s));
        c.drawImage(p.g, p.x - s / 2, p.y - s / 2, s, s);
      }
      for (const p of seeds) {
        const s = 38 + p.z * 55; // las cercanas más grandes
        c.globalAlpha = 0.55 + p.z * 0.45; // y más nítidas
        c.save();
        c.translate(p.x, p.y);
        c.rotate(p.r);
        c.drawImage(p.img, -s / 2, -s * 0.3, s, s);
        c.restore();
      }
      c.globalAlpha = 1;
    },
  };
}

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    return mount(canvasRef.current);
  }, []);

  return (
    <div aria-hidden="true" className="hero-bg pointer-events-none absolute inset-0 -z-10">
      <style>{`
        .hero-bg{background:
          radial-gradient(50% 60% at 90% 6%, rgba(251,227,204,0.95) 0%, rgba(251,227,204,0) 70%),
          radial-gradient(55% 60% at 75% 100%, rgba(0,150,199,0.35) 0%, rgba(0,150,199,0) 70%),
          linear-gradient(165deg, #f6f1e9 0%, #f3eadc 30%, #d6eef3 62%, #a9e3ef 85%, #90e0ef 100%)}
        .hero-scrim{background:radial-gradient(50% 70% at 22% 52%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 78%)}
      `}</style>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="hero-scrim absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-white" />
    </div>
  );
}
