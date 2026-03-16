/* Particle drawing logic extracted from waterfall-canvas.
   Handles gradient trail rendering, head circle, glow halos, and breathing animation.
   Pure rendering — no physics or lifecycle logic. */

export interface DrawableStream {
  x: number; y: number; vy: number;
  headRadius: number; baseOpacity: number;
  sparkle: boolean; twinklePhase: number; twinkleSpeed: number;
  drift: number;
  sinePhase: number; sineSpeed: number; sineAmp: number;
  dotCount: number; dotSpacing: number;
  bigHead: boolean; megaSparkle: boolean;
  breathePhase: number; breatheSpeed: number;
}

/** Draw a single particle stream (gradient trail + head + glow halos) */
export function drawParticle(
  ctx: CanvasRenderingContext2D,
  s: DrawableStream,
  gold: string,
  inTrunk: boolean,
  centerX: number,
  trunkStartY: number,
  sineOffset: number,
  prevX: number,
) {
  /* Compute base opacity with twinkle */
  let opacity = s.baseOpacity;
  if (s.sparkle) {
    opacity *= 0.55 + 0.45 * Math.sin(s.twinklePhase);
  }
  opacity = Math.max(0.01, opacity);

  /* Head radius — megaSparkle 6x, bigHead 2.5x */
  let r0 = s.megaSparkle
    ? s.headRadius * 6
    : s.bigHead ? s.headRadius * 2.5 : s.headRadius;

  /* Breathing modulation for megaSparkle orbs */
  if (s.megaSparkle) {
    const breathe = 0.85 + 0.15 * Math.sin(s.breathePhase);
    r0 *= breathe;
    opacity *= 0.8 + 0.2 * Math.sin(s.breathePhase);
  }

  /* Gradient trail */
  const tailLength = s.dotCount * s.dotSpacing;
  const frames = tailLength / s.vy;
  let tailX = prevX;
  const tailY = s.y - tailLength;

  if (s.y > trunkStartY) {
    const distToCenter = prevX - centerX;
    tailX = prevX + distToCenter * 0.02 * frames;
  } else {
    tailX = prevX - (s.drift + sineOffset) * frames;
  }

  if (tailLength > 0 && opacity > 0.01) {
    const grad = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
    grad.addColorStop(0, `${gold}${opacity})`);
    grad.addColorStop(1, `${gold}0)`);
    ctx.beginPath();
    ctx.moveTo(s.x, s.y);
    ctx.lineTo(tailX, tailY);
    ctx.strokeStyle = grad;
    ctx.lineWidth = Math.max(1, s.headRadius * 1.5);
    ctx.lineCap = 'round';
    ctx.stroke();
  }

  /* Head (brightest point) */
  ctx.beginPath();
  ctx.arc(s.x, s.y, r0, 0, Math.PI * 2);
  ctx.fillStyle = `${gold}${opacity})`;
  ctx.fill();

  /* Glow halos — only in waterfall zone (above trunk) to prevent blob */
  if (inTrunk) return;

  if (s.megaSparkle && opacity > 0.15) {
    ctx.beginPath();
    ctx.arc(s.x, s.y, r0 * 8, 0, Math.PI * 2);
    ctx.fillStyle = `${gold}${opacity * 0.12})`;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(s.x, s.y, r0 * 4, 0, Math.PI * 2);
    ctx.fillStyle = `${gold}${opacity * 0.25})`;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(s.x, s.y, r0 * 2, 0, Math.PI * 2);
    ctx.fillStyle = `${gold}${opacity * 0.45})`;
    ctx.fill();
  } else if (s.bigHead && opacity > 0.2) {
    ctx.beginPath();
    ctx.arc(s.x, s.y, r0 * 4.5, 0, Math.PI * 2);
    ctx.fillStyle = `${gold}${opacity * 0.12})`;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(s.x, s.y, r0 * 2.2, 0, Math.PI * 2);
    ctx.fillStyle = `${gold}${opacity * 0.30})`;
    ctx.fill();
  }
}
