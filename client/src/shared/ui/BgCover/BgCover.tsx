import { DesignToken } from '@/shared/const/theme'

import Hexagon from 'public/bg/hexagon.svg'
import Parallelogram from 'public/bg/parallelogram.svg'
import Pentagon from 'public/bg/pentagon.svg'
import Quadrilateral from 'public/bg/quadrilateral.svg'
import Rhombus from 'public/bg/rhombus.svg'
import Square from 'public/bg/square.svg'
import Trapezoid from 'public/bg/trapezoid.svg'
import Triangle from 'public/bg/triangle.svg'

const SHAPES = [
  Hexagon,
  Parallelogram,
  Pentagon,
  Quadrilateral,
  Rhombus,
  Square,
  Trapezoid,
  Triangle,
]

// Centers must stay at least `spread` away from 0/96 to avoid clamp-bunching at edges.
// Blue cy:26 keeps shapes below ~65px fixed navbar (7% on 900px viewport; 26-14=12% safe margin)
const ORB_GROUPS = [
  { color: `var(${DesignToken.BRAND_BLUE})`, cx: 76, cy: 26, spread: 14 },
  { color: `var(${DesignToken.BRAND_PINK})`, cx: 14, cy: 76, spread: 12 },
  { color: `var(${DesignToken.BRAND_PURPLE})`, cx: 62, cy: 52, spread: 16 },
]

const SHAPES_PER_GROUP = 5 // 5 × 3 = 15 total

// Seeded PRNG — deterministic on both server and client (avoids hydration mismatch)
const r = (() => {
  let s = 42
  return () => {
    s = (s * 1664525 + 1013904223) & 0x7fffffff
    return s / 0x7fffffff
  }
})()

const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v))

const rawParticles = ORB_GROUPS.flatMap((orb, gi) =>
  Array.from({ length: SHAPES_PER_GROUP }, (_, i) => {
    const offsetX = (r() - 0.5) * 2 * orb.spread
    const offsetY = (r() - 0.5) * 2 * orb.spread
    return {
      id: gi * SHAPES_PER_GROUP + i,
      Shape: SHAPES[Math.floor(r() * SHAPES.length)],
      cx: clamp(orb.cx + offsetX, 0, 96),
      cy: clamp(orb.cy + offsetY, 0, 96),
      size: Math.round(24 + r() * 56),
      rotate: Math.round(r() * 360),
      color: orb.color,
      dx: Math.round(12 + r() * 28),
      dy: Math.round(12 + r() * 28),
      floatDur: parseFloat((15 + r() * 18).toFixed(1)),
      floatDelay: parseFloat((-r() * 20).toFixed(1)),
      scaleTo: parseFloat((1.15 + r() * 0.35).toFixed(2)),
      opacityMin: parseFloat((0.04 + r() * 0.07).toFixed(2)),
      opacityMax: parseFloat((0.14 + r() * 0.12).toFixed(2)),
      pulseDur: parseFloat((6 + r() * 10).toFixed(1)),
      pulseDelay: parseFloat((-r() * 12).toFixed(1)),
    }
  }),
)

// Push overlapping shapes apart so they don't visually stack at spawn.
// Uses a reference viewport (1440×900) for pixel-space distance math.
const REF_W = 1440
const REF_H = 900
for (let iter = 0; iter < 5; iter++) {
  for (let a = 0; a < rawParticles.length; a++) {
    for (let b = a + 1; b < rawParticles.length; b++) {
      const pa = rawParticles[a]
      const pb = rawParticles[b]
      const dx = ((pb.cx - pa.cx) / 100) * REF_W
      const dy = ((pb.cy - pa.cy) / 100) * REF_H
      const dist = Math.sqrt(dx * dx + dy * dy)
      const minDist = (pa.size + pb.size) / 2 + 8
      if (dist > 0 && dist < minDist) {
        const push = (minDist - dist) / 2
        const nx = dx / dist
        const ny = dy / dist
        pa.cx = clamp(pa.cx - (nx * push * 100) / REF_W, 2, 94)
        pa.cy = clamp(pa.cy - (ny * push * 100) / REF_H, 2, 94)
        pb.cx = clamp(pb.cx + (nx * push * 100) / REF_W, 2, 94)
        pb.cy = clamp(pb.cy + (ny * push * 100) / REF_H, 2, 94)
      }
    }
  }
}

const particles = rawParticles.map((p) => ({
  ...p,
  top: `${p.cy.toFixed(2)}%`,
  left: `${p.cx.toFixed(2)}%`,
}))

const BgCover = () => (
  <div className='pointer-events-none fixed inset-0 -z-10 overflow-hidden'>
    {/* Gradient orbs — cx/cy % match ORB_GROUPS in the particle system */}
    <div className='absolute top-0 right-[20%] size-[340px] -translate-y-1/3 rounded-full bg-brand-blue opacity-40 blur-[160px] shadow-[0_0_180px_120px_var(--color-brand-blue)]' />
    <div className='absolute bottom-[20%] left-0 size-[500px] translate-y-1/4 rounded-full bg-brand-pink opacity-20 blur-[200px] shadow-[0_0_220px_140px_var(--color-brand-pink)]' />
    <div className='absolute top-[44%] left-[54%] size-[480px] -translate-y-1/2 rounded-full bg-brand-purple opacity-20 blur-[140px] shadow-[0_0_180px_120px_var(--color-brand-purple)]' />

    {/* Shapes clustered near each orb */}
    {particles.map(
      ({
        id,
        Shape,
        top,
        left,
        size,
        rotate,
        color,
        dx,
        dy,
        floatDur,
        floatDelay,
        scaleTo,
        opacityMin,
        opacityMax,
        pulseDur,
        pulseDelay,
      }) => (
        <div
          key={id}
          className='absolute'
          style={
            {
              top,
              left,
              animation: `float ${floatDur}s ease-in-out ${floatDelay}s infinite`,
              '--dx': `${dx}px`,
              '--dy': `${dy}px`,
            } as React.CSSProperties
          }
        >
          <Shape
            style={
              {
                rotate: `${rotate}deg`,
                width: size,
                height: size,
                color,
                animation: `pulse-shape ${pulseDur}s linear ${pulseDelay}s infinite`,
                '--scale-to': scaleTo,
                '--opacity-min': opacityMin,
                '--opacity-max': opacityMax,
              } as React.CSSProperties
            }
          />
        </div>
      ),
    )}
  </div>
)

export default BgCover
