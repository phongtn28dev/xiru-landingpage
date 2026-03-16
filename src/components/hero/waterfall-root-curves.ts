/* Pre-computed quadratic bezier root curves for the waterfall tree-root aesthetic.
   Root curves grow from trunk base (h*0.75) and spread outward like tree roots.
   Called on init + resize; results stored in a ref and rendered behind particles. */

export interface RootCurve {
  startX: number; startY: number;
  cpX: number; cpY: number;
  endX: number; endY: number;
  lineWidth: number; opacity: number;
  hasTip: boolean; tipRadius: number;
  growProgress: number; growSpeed: number;
}

/* De Casteljau subdivision: split quadratic bezier at t, return first segment */
function splitAt(t: number, p0: number, p1: number, p2: number) {
  const q1 = p0 + (p1 - p0) * t;
  const r1 = p1 + (p2 - p1) * t;
  const q2 = q1 + (r1 - q1) * t;
  return { start: p0, control: q1, end: q2 };
}

export function drawRootCurve(
  ctx: CanvasRenderingContext2D,
  c: RootCurve,
  gold: string,
) {
  const t = Math.min(c.growProgress, 1);
  const sx = splitAt(t, c.startX, c.cpX, c.endX);
  const sy = splitAt(t, c.startY, c.cpY, c.endY);

  ctx.beginPath();
  ctx.moveTo(sx.start, sy.start);
  ctx.quadraticCurveTo(sx.control, sy.control, sx.end, sy.end);
  ctx.strokeStyle = `${gold}${c.opacity})`;
  ctx.lineWidth = c.lineWidth;
  ctx.stroke();

  if (c.hasTip && t >= 1) {
    /* Outermost diffuse glow */
    ctx.beginPath();
    ctx.arc(c.endX, c.endY, c.tipRadius * 5, 0, Math.PI * 2);
    ctx.fillStyle = `${gold}${c.opacity * 0.06})`;
    ctx.fill();
    /* Mid glow halo */
    ctx.beginPath();
    ctx.arc(c.endX, c.endY, c.tipRadius * 2.8, 0, Math.PI * 2);
    ctx.fillStyle = `${gold}${c.opacity * 0.22})`;
    ctx.fill();
    /* Solid bright tip */
    ctx.beginPath();
    ctx.arc(c.endX, c.endY, c.tipRadius, 0, Math.PI * 2);
    ctx.fillStyle = `${gold}${c.opacity * 0.90})`;
    ctx.fill();
  }
}

export function generateRootCurves(w: number, h: number, centerX: number): RootCurve[] {
  const curves: RootCurve[] = [];
  const count = 48; // denser root spread
  const trunkBaseY = h * 0.75;
  const maxSpread = Math.min(540, w * 0.5 - 10);

  for (let i = 0; i < count; i++) {
    const side = i < count / 2 ? -1 : 1;
    const idx = side === -1 ? i : i - count / 2;
    const fraction = (idx + 0.5) / (count / 2); // 0→1 across left or right half

    /* Spread angle 15°-85° from vertical, more outer = wider angle */
    const angle = (15 + fraction * 70) * (Math.PI / 180);
    const reach = maxSpread * (0.15 + fraction * 0.85);
    const endX = centerX + side * reach;
    const endY = h - 10 - Math.random() * 20;

    /* Start clustered near trunk base */
    const startX = centerX + (Math.random() - 0.5) * 60;
    const startY = trunkBaseY + Math.random() * 8;

    /* Control point: creates the arc — bias toward start for "emerging root" look */
    const cpBias = 0.25 + Math.random() * 0.3;
    const cpX = startX + (endX - startX) * cpBias + side * reach * Math.sin(angle) * 0.45;
    const cpY = startY + (endY - startY) * (0.3 + Math.random() * 0.3);

    /* Thinner/more transparent at edges */
    const edgeFactor = 1 - fraction * 0.5;
    const lineWidth = parseFloat((1.0 + edgeFactor * 2.5).toFixed(1));
    const opacity = 0.25 + edgeFactor * 0.55 + Math.random() * 0.15;

    /* Stagger: outer roots start growing slightly later */
    const growSpeed = 1 / (120 + fraction * 60 + Math.random() * 40); // 2-4 sec

    curves.push({
      startX, startY, cpX, cpY, endX, endY,
      lineWidth,
      opacity: Math.min(0.9, opacity),
      hasTip: Math.random() < 0.65,
      tipRadius: 6 + Math.random() * 6,
      growProgress: fraction * -0.4, // stagger: outer roots start later
      growSpeed,
    });
  }
  return curves;
}
