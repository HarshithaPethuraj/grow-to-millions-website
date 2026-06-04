import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

// ── Data ──────────────────────────────────────────────────────────
const DATA   = [15, 22, 20, 32, 40, 38, 55, 63, 72, 80, 88, 95]
const LABELS = ['1','2','3','4','5','6','7','8','9','10','11','12']

// ── Fixed SVG canvas — wide enough so boxes are always landscape ──
const SVG_W   = 720   // wider viewBox keeps boxes landscape at any scale
const L_PAD   = 38
const R_PAD   = 10
const T_PAD   = 58    // milestone label headroom
const CHART_H = 180
const BASE_Y  = T_PAD + CHART_H
const SVG_H   = BASE_Y + 28   // space for text labels only

const N       = DATA.length
const COL_W   = (SVG_W - L_PAD - R_PAD) / N
const BAR_W   = Math.round(COL_W * 0.44)
const BAR_OFF = (COL_W - BAR_W) / 2

// helpers
const slotX = i => L_PAD + i * COL_W
const midX  = i => slotX(i) + COL_W / 2
const barY  = h => T_PAD + CHART_H - (h / 100) * CHART_H

// smooth cubic-bezier through all points
function buildCurve() {
  const pts = DATA.map((h, i) => [midX(i), barY(h)])
  let d = `M${pts[0][0]},${pts[0][1]}`
  for (let i = 1; i < pts.length; i++) {
    const dx = (pts[i][0] - pts[i-1][0]) / 2.8
    d += ` C${pts[i-1][0]+dx},${pts[i-1][1]} ${pts[i][0]-dx},${pts[i][1]} ${pts[i][0]},${pts[i][1]}`
  }
  return d
}

// angle of last segment in degrees
function lastAngleDeg() {
  const x1 = midX(N-2), y1 = barY(DATA[N-2])
  const x2 = midX(N-1), y2 = barY(DATA[N-1])
  return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI
}

const MILESTONES = [
  { idx: 1,  label: 'Discovery Call'      },
  { idx: 3,  label: 'Research & Strategy' },
  { idx: 7,  label: 'Execution'           },
  { idx: 11, label: 'Target Reached'      },
]

// Pre-compute so nothing is called inside render
const CURVE      = buildCurve()
const END_X      = midX(N-1)
const END_Y      = barY(DATA[N-1])
const END_ANGLE  = lastAngleDeg()   // e.g. −22° → arrow points up-right ✓

export default function GrowthGraph() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.25 })
  const [showArrow, setShowArrow] = useState(false)

  // Show arrow only AFTER the path animation completes (delay 0.9 + 1.6 = 2.5s)
  // Using a timeout avoids the Framer Motion scale-from-0 SVG positioning bug
  useEffect(() => {
    if (!inView) return
    const t = setTimeout(() => setShowArrow(true), 2600)
    return () => clearTimeout(t)
  }, [inView])

  return (
    <section ref={ref} className="bg-navy-900 pb-28 pt-4 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-site mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden border border-white/10 p-6 sm:p-10"
          style={{ background: 'linear-gradient(135deg,#060E1A 0%,#0A1628 60%,#0D1F38 100%)' }}
        >
          {/* dot-grid bg */}
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle,#16A34A 1px,transparent 1px)', backgroundSize: '24px 24px' }}
          />

          {/* Header row */}
          <div className="flex items-center justify-between mb-6 relative z-10">
            <div>
              <p className="text-accent-400 text-xs font-bold uppercase tracking-[0.2em] mb-1">Growth Trajectory</p>
              <h2 className="text-white text-xl sm:text-3xl font-black tracking-tight">From Zero to Millions</h2>
            </div>
            <div className="flex items-center gap-2 bg-accent-600/10 border border-accent-600/20 rounded-full px-3 py-1.5">
              <span className="w-2 h-2 bg-accent-500 rounded-full shrink-0" />
              <span className="text-accent-400 text-xs font-semibold whitespace-nowrap">Illustrative growth pattern</span>
            </div>
          </div>

          {/* SVG chart */}
          <div className="relative z-10 w-full">
            <svg
              viewBox={`0 0 ${SVG_W} ${SVG_H}`}
              width="100%"
              preserveAspectRatio="xMidYMid meet"
              style={{ maxHeight: '360px', display: 'block' }}
            >
              <defs>
                <filter id="g-glow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="4" result="b"/>
                  <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <filter id="g-soft" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2" result="b"/>
                  <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <linearGradient id="g-bar" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="#34D399"/>
                  <stop offset="100%" stopColor="#16A34A"/>
                </linearGradient>
                <linearGradient id="g-line" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%"   stopColor="#16A34A"/>
                  <stop offset="100%" stopColor="#ffffff"/>
                </linearGradient>
              </defs>

              {/* Axes */}
              <line x1={L_PAD-4} y1={T_PAD}   x2={L_PAD-4}         y2={BASE_Y} stroke="rgba(255,255,255,.15)" strokeWidth="1"/>
              <line x1={L_PAD-4} y1={BASE_Y}   x2={SVG_W - R_PAD}  y2={BASE_Y} stroke="rgba(255,255,255,.15)" strokeWidth="1"/>

              {/* Y-axis grid + labels */}
              {[25, 50, 75, 100].map(pct => {
                const y = barY(pct)
                return (
                  <g key={pct}>
                    <line x1={L_PAD-4} y1={y} x2={SVG_W-R_PAD} y2={y}
                      stroke="rgba(255,255,255,.05)" strokeWidth="1" strokeDasharray="4,4"/>
                    <text x={L_PAD-7} y={y+4} fill="rgba(255,255,255,.3)"
                      fontSize="8" textAnchor="end">{pct}%</text>
                  </g>
                )
              })}

              {/* Bars — animate up from base */}
              {DATA.map((h, i) => {
                const fullH = (h / 100) * CHART_H
                const bx    = slotX(i) + BAR_OFF
                const by    = barY(h)
                return (
                  <motion.rect
                    key={i}
                    x={bx} y={BASE_Y} width={BAR_W} height={0} rx={3}
                    fill="url(#g-bar)" filter="url(#g-glow)"
                    animate={inView ? { y: by, height: fullH } : { y: BASE_Y, height: 0 }}
                    transition={{ duration: 0.7, delay: 0.08 + i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                )
              })}

              {/* X-axis labels — placed below the axis line, away from bar glow */}
              {LABELS.map((lbl, i) => (
                <text
                  key={lbl}
                  x={midX(i)}
                  y={BASE_Y + 22}
                  fill="#CBD5E1"
                  fontSize="11"
                  fontWeight="700"
                  textAnchor="middle"
                  dominantBaseline="central"
                >
                  {lbl}
                </text>
              ))}

              {/* Trend line — loops from left to right continuously */}
              <motion.path
                d={CURVE}
                fill="none"
                stroke="url(#g-line)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#g-soft)"
                initial={{ pathLength: 0, opacity: 1 }}
                animate={inView ? { pathLength: [0, 1, 0] } : {}}
                transition={{ duration: 3, delay: 0.9, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.5 }}
              />

              {/* ── Arrowhead at END of line ───────────────────────
                  Rendered as plain SVG (NOT motion.g with scale)
                  to avoid the Framer scale-from-0 positioning bug
                  that puts a ghost arrow at (0,0) / top-left.
                  Visibility toggled by a setTimeout in useEffect.
              ─────────────────────────────────────────────────────── */}
              {showArrow && (
                <g transform={`translate(${END_X},${END_Y}) rotate(${END_ANGLE})`}>
                  <polygon
                    points="13,0 -5,-7 -5,7"
                    fill="white"
                    opacity="1"
                    filter="url(#g-soft)"
                  />
                </g>
              )}

              {/* Milestone markers */}
              {MILESTONES.map((m, mi) => {
                const cx      = midX(m.idx)
                const topY    = barY(DATA[m.idx])
                const dotY    = topY - 7
                const lineEnd = topY - 24
                const labelY  = lineEnd - 6
                return (
                  <motion.g
                    key={m.label}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.7 + mi * 0.2 }}
                  >
                    <line x1={cx} y1={topY} x2={cx} y2={lineEnd}
                      stroke="#16A34A" strokeWidth="1.5" strokeDasharray="3,2"/>
                    <circle cx={cx} cy={dotY} r="4.5" fill="#16A34A" filter="url(#g-soft)"/>
                    {/* Label pill */}
                    <rect x={cx - 46} y={labelY - 14} width="92" height="16" rx="5"
                      fill="#16A34A" fillOpacity="0.25"/>
                    <text x={cx} y={labelY} fill="#34D399" fontSize="8" fontWeight="700"
                      textAnchor="middle" dominantBaseline="auto">
                      {m.label}
                    </text>
                  </motion.g>
                )
              })}
            </svg>
          </div>

          {/* ambient glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-20 bg-accent-600/10 blur-3xl pointer-events-none"/>
        </motion.div>
      </div>
    </section>
  )
}
