/* Golden waterfall: Zone1 (0-60%) particles, Zone2 (60-75%) trunk convergence,
   Zone3 (75-100%) root curves. rAF pauses off-screen/tab-hidden. */
'use client';

import { useEffect, useRef } from 'react';
import { type RootCurve, drawRootCurve, generateRootCurves } from './waterfall-root-curves';
import { type DrawableStream, drawParticle } from './waterfall-particle-renderer';

type Stream = DrawableStream;

const GOLD = 'rgba(227,198,158,';
const TRUNK_START = 0.60;
const TRUNK_BASE = 0.75;

function getStreamCount(w: number): number {
  if (w < 768) return 1800;
  if (w < 1440) return 2400;
  return 3000;
}

function createStream(w: number, h: number, centerX: number): Stream {
  const spread = Math.min(w * 0.35, 380);
  const gaussian = (Math.random() + Math.random() + Math.random()) / 3 - 0.5;
  const x = centerX + gaussian * spread * 2;
  const dist = Math.abs(x - centerX) / spread;
  const edgeFade = Math.max(0.12, 1 - dist * 0.6);
  const yStart = -Math.random() * h * 0.2;
  const roll = Math.random();
  return {
    x, y: yStart,
    vy: 1.0 + Math.random() * 3.5,
    headRadius: 0.8 + Math.random() * 1.5,
    baseOpacity: (0.15 + Math.random() * 0.4) * edgeFade,
    sparkle: Math.random() < 0.3,
    twinklePhase: Math.random() * Math.PI * 2,
    twinkleSpeed: 0.02 + Math.random() * 0.06,
    drift: (Math.random() - 0.5) * 0.15,
    sinePhase: Math.random() * Math.PI * 2,
    sineSpeed: 0.015 + Math.random() * 0.025,
    sineAmp: 1.5 + Math.random() * 1.5,
    dotCount: 8 + Math.floor(Math.random() * 15),
    dotSpacing: 3 + Math.random() * 4,
    bigHead: roll < 0.15,
    megaSparkle: roll < 0.08,
    breathePhase: Math.random() * Math.PI * 2,
    breatheSpeed: 0.015 + Math.random() * 0.015,
  };
}

export function WaterfallCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const streamsRef = useRef<Stream[]>([]);
  const rootsRef = useRef<RootCurve[]>([]);
  const visibleRef = useRef(true);
  const dimsRef = useRef({ w: 0, h: 0, centerX: 0 });
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    if (!ctx) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let resizeRaf = 0;
    const resize = () => {
      cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(() => {
        const dpr = Math.min(window.devicePixelRatio, 2);
        const rect = canvas.parentElement?.getBoundingClientRect();
        if (!rect) return;
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        const w = rect.width;
        const h = rect.height;
        const centerX = w / 2;
        dimsRef.current = { w, h, centerX };

        const count = getStreamCount(w);
        streamsRef.current = Array.from({ length: count }, () => {
          const s = createStream(w, h, centerX);
          s.y = Math.random() * h * TRUNK_BASE;
          return s;
        });
        rootsRef.current = generateRootCurves(w, h, centerX);
      });
    };
    resize();
    window.addEventListener('resize', resize);

    const startLoop = () => {
      if (animRef.current) return;
      animRef.current = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) startLoop();
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    const onVisChange = () => {
      visibleRef.current = !document.hidden;
      if (!document.hidden) startLoop();
    };
    document.addEventListener('visibilitychange', onVisChange);

    function animate() {
      if (!visibleRef.current) { animRef.current = 0; return; }

      const { w, h, centerX } = dimsRef.current;
      if (w === 0) { animRef.current = requestAnimationFrame(animate); return; }

      ctx.clearRect(0, 0, w, h);
      frameRef.current++;

      const trunkStartY = h * TRUNK_START;
      const trunkBaseY = h * TRUNK_BASE;
      /* Global wind: ~8s period, +/-2px amplitude */
      const wind = Math.sin(frameRef.current * 0.013) * 2;

      /* --- Root curves (back layer) --- */
      const roots = rootsRef.current;
      ctx.save();
      ctx.lineCap = 'round';
      for (let i = 0; i < roots.length; i++) {
        const c = roots[i];
        if (c.growProgress < 1) c.growProgress += c.growSpeed;
        if (c.growProgress <= 0) continue;
        drawRootCurve(ctx, c, GOLD);
      }
      ctx.restore();

      /* --- Particles (front layer) --- */
      const streams = streamsRef.current;
      for (let i = 0; i < streams.length; i++) {
        const s = streams[i];
        const prevX = s.x;

        s.sinePhase += s.sineSpeed;
        s.twinklePhase += s.twinkleSpeed;
        if (s.megaSparkle) s.breathePhase += s.breatheSpeed;
        const sineOffset = Math.sin(s.sinePhase) * s.sineAmp;

        /* Trunk zone: attract toward centerX */
        if (s.y > trunkStartY) {
          const trunkProgress = (s.y - trunkStartY) / (trunkBaseY - trunkStartY);
          const attraction = 0.04 + trunkProgress * 0.12;
          s.x += (centerX - s.x) * attraction;
          s.drift *= 0.90;
          s.x += sineOffset * (1 - trunkProgress);
        } else {
          s.x += s.drift + sineOffset + wind;
        }

        /* Gentle gravity acceleration */
        s.vy = Math.min(s.vy + 0.003, 5.5);
        s.y += s.vy;

        /* Recycle at trunk base */
        if (s.y > trunkBaseY || s.x < -40 || s.x > w + 40 || s.baseOpacity < 0.01) {
          Object.assign(s, createStream(w, h, centerX));
          continue;
        }

        const inTrunk = s.y > trunkStartY;
        drawParticle(ctx, s, GOLD, inTrunk, centerX, trunkStartY, sineOffset, prevX);
      }

      animRef.current = requestAnimationFrame(animate);
    }

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      animRef.current = 0;
      cancelAnimationFrame(resizeRaf);
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisChange);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
