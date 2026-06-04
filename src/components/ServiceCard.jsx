import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowRight, X, CheckCircle2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { ICON_MAP } from '../constants'

// ─── SVG tile backgrounds (pure inline SVG, no external URLs) ────────────────

function PaidAdsBg () {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 280"
      preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      {/* Platform badge: Google Ads */}
      <g transform="translate(24,24)">
        <rect width="76" height="24" rx="5" fill="#4285F4" opacity="0.75"/>
        <text x="38" y="16.5" fill="white" fontSize="9.5" textAnchor="middle" fontWeight="700" fontFamily="Arial">Google Ads</text>
      </g>
      {/* Platform badge: Meta Ads */}
      <g transform="translate(112,20)">
        <rect width="68" height="24" rx="5" fill="#0866FF" opacity="0.70"/>
        <text x="34" y="16.5" fill="white" fontSize="9.5" textAnchor="middle" fontWeight="700" fontFamily="Arial">Meta Ads</text>
      </g>
      {/* Platform badge: LinkedIn */}
      <g transform="translate(192,26)">
        <rect width="68" height="24" rx="5" fill="#0077B5" opacity="0.68"/>
        <text x="34" y="16.5" fill="white" fontSize="9.5" textAnchor="middle" fontWeight="700" fontFamily="Arial">LinkedIn</text>
      </g>
      {/* Platform badge: Analytics */}
      <g transform="translate(272,20)">
        <rect width="76" height="24" rx="5" fill="#E37400" opacity="0.65"/>
        <text x="38" y="16.5" fill="white" fontSize="9.5" textAnchor="middle" fontWeight="700" fontFamily="Arial">Analytics</text>
      </g>
      {/* Bar chart */}
      <g transform="translate(20,90)" opacity="0.65">
        {[30,55,42,78,60,88,70,92].map((h,i) => (
          <rect key={i} x={i*26} y={92-h} width="19" height={h} rx="3" fill="#34D399"/>
        ))}
      </g>
      {/* Trend line */}
      <polyline
        points="24,232 72,210 120,196 168,168 216,140 264,112 312,84 360,60"
        fill="none" stroke="#34D399" strokeWidth="2.5" opacity="0.68"
        strokeLinecap="round" strokeLinejoin="round"/>
      {/* Ambient circles */}
      <circle cx="340" cy="210" r="55" fill="#4285F4" opacity="0.25"/>
      <circle cx="60"  cy="220" r="40" fill="#0866FF" opacity="0.28"/>
    </svg>
  )
}

function SeoBg () {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 280"
      preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      {/* Google search bar shell */}
      <g transform="translate(32,52)">
        <rect width="336" height="46" rx="23" fill="white" opacity="0.10"/>
        <rect width="336" height="46" rx="23" fill="none" stroke="white" strokeWidth="1" opacity="0.60"/>
        {/* G logo */}
        <circle cx="26" cy="23" r="11" fill="#4285F4" opacity="0.80"/>
        <text x="26" y="27.5" fill="white" fontSize="12" textAnchor="middle" fontWeight="900" fontFamily="Arial">G</text>
        {/* Query text */}
        <text x="52" y="28" fill="white" fontSize="13" opacity="0.90" fontFamily="Arial" fontWeight="500">grow my brand online</text>
        {/* Blinking cursor */}
        <rect x="221" y="14" width="2" height="18" fill="#34D399" opacity="0.95" rx="1"/>
        {/* Search icon */}
        <circle cx="306" cy="23" r="9" fill="none" stroke="white" strokeWidth="2" opacity="0.45"/>
        <line x1="313" y1="30" x2="320" y2="37" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.45"/>
      </g>
      {/* Search results */}
      <g transform="translate(32,116)" opacity="0.55">
        {[0,1,2].map(i => (
          <g key={i} transform={`translate(0,${i*40})`}>
            <rect y="0"  width="240" height="5" rx="2" fill="#4285F4"/>
            <rect y="12" width="300" height="4" rx="2" fill="white"/>
            <rect y="21" width="260" height="4" rx="2" fill="white"/>
          </g>
        ))}
      </g>
      {/* Ranking arrows on right */}
      <g transform="translate(336,100)" opacity="0.68">
        {[0,1,2].map(i => (
          <g key={i} transform={`translate(0,${i*32})`}>
            <text x="0" y="16" fill="#34D399" fontSize="20" fontWeight="900" fontFamily="Arial">↑</text>
            <rect x="22" y="4" width={[44,32,52][i]} height="11" rx="3" fill="white" opacity="0.35"/>
          </g>
        ))}
      </g>
      <circle cx="370" cy="230" r="55" fill="#4285F4" opacity="0.22"/>
    </svg>
  )
}

function AioBg () {
  const nodes = [[80,90],[170,55],[260,75],[340,58],[200,145],[95,175],[290,158],[150,225],[330,210]]
  const edges = [[0,1],[1,2],[2,3],[0,5],[1,4],[2,4],[3,6],[4,7],[4,6],[6,8]]
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 280"
      preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      {/* Neural edges */}
      {edges.map(([a,b],i) => (
        <line key={i}
          x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}
          stroke="#34D399" strokeWidth="1" opacity="0.18"/>
      ))}
      {/* Neural nodes */}
      {nodes.map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r={i===4?10:7} fill="#34D399" opacity="0.38"/>
      ))}
      {/* Brand pills */}
      <g transform="translate(20,18)">
        <rect width="76" height="22" rx="5" fill="#10A37F" opacity="0.72"/>
        <text x="38" y="15.5" fill="white" fontSize="9" textAnchor="middle" fontWeight="700" fontFamily="Arial">ChatGPT</text>
      </g>
      <g transform="translate(112,16)">
        <rect width="86" height="22" rx="5" fill="#6B4FBB" opacity="0.68"/>
        <text x="43" y="15.5" fill="white" fontSize="9" textAnchor="middle" fontWeight="700" fontFamily="Arial">Perplexity</text>
      </g>
      <g transform="translate(212,18)">
        <rect width="96" height="22" rx="5" fill="#4285F4" opacity="0.68"/>
        <text x="48" y="15.5" fill="white" fontSize="9" textAnchor="middle" fontWeight="700" fontFamily="Arial">Google SGE</text>
      </g>
      {/* Pulse rings around center node */}
      <circle cx="200" cy="145" r="28" fill="none" stroke="#34D399" strokeWidth="1" opacity="0.14"/>
      <circle cx="200" cy="145" r="48" fill="none" stroke="#34D399" strokeWidth="1" opacity="0.08"/>
      <circle cx="200" cy="145" r="68" fill="none" stroke="#34D399" strokeWidth="0.5" opacity="0.22"/>
    </svg>
  )
}

function DataBg () {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 280"
      preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      {/* Dashboard frame */}
      <rect x="16" y="24" width="368" height="220" rx="8"
        fill="white" opacity="0.04" stroke="white" strokeWidth="0.5" strokeOpacity="0.14"/>
      {/* KPI cards */}
      {[['LTV','↑ 24%',248,30],['CAC','↓ 18%',320,30],['ROAS','↑ 3.8×',248,80]].map(([label,val,x,y],i)=>(
        <g key={i} transform={`translate(${x},${y})`} opacity="0.42">
          <rect width="68" height="38" rx="5" fill="white" opacity="0.09"/>
          <text x="34" y="14" fill="#94A3B8" fontSize="8" textAnchor="middle" fontFamily="Arial">{label}</text>
          <text x="34" y="30" fill="#34D399" fontSize="13" textAnchor="middle" fontWeight="700" fontFamily="Arial">{val}</text>
        </g>
      ))}
      {/* Bar chart */}
      <g transform="translate(28,110)" opacity="0.65">
        {[28,52,38,74,58,84,68,90].map((h,i) => (
          <rect key={i} x={i*24} y={90-h} width="17" height={h} rx="2" fill="#34D399"/>
        ))}
      </g>
      {/* Line chart */}
      <polyline
        points="28,220 68,200 108,188 148,166 188,140 228,110 268,88 308,66 348,44"
        fill="none" stroke="#6366F1" strokeWidth="2" opacity="0.68"
        strokeLinecap="round" strokeLinejoin="round"/>
      {/* Scatter dots */}
      {[[290,190],[312,172],[334,178],[356,160],[376,148]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="4.5" fill="#E879F9" opacity="0.65"/>
      ))}
      <circle cx="356" cy="220" r="60" fill="#6366F1" opacity="0.22"/>
    </svg>
  )
}

function WebBg () {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 280"
      preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      {/* Code lines on left */}
      <g transform="translate(18,50)" opacity="0.60" fontFamily="monospace" fontSize="10.5">
        {['<App />','  <Navbar />','  <Hero />','  <Services />','  <Growth />','  <CTA />','</App>'].map((line,i)=>(
          <text key={i} x="0" y={i*22} fill="#34D399">{line}</text>
        ))}
      </g>
      {/* Phone frame */}
      <g transform="translate(218,10)">
        <rect width="136" height="240" rx="18"
          fill="white" opacity="0.28" stroke="white" strokeWidth="1" strokeOpacity="0.22"/>
        {/* Notch */}
        <rect x="44" y="7" width="48" height="9" rx="4" fill="white" opacity="0.14"/>
        {/* Screen */}
        <rect x="7" y="24" width="122" height="204" rx="10" fill="#0A1628" opacity="0.55"/>
        {/* App header */}
        <rect x="7" y="24" width="122" height="30" rx="0" fill="#16A34A" opacity="0.75"/>
        <text x="68" y="43" fill="white" fontSize="7.5" textAnchor="middle" fontWeight="700" fontFamily="Arial">GrowToMillions</text>
        {/* App content rows */}
        {[0,1,2,3,4,5].map(i=>(
          <g key={i} transform={`translate(14,${62+i*26})`}>
            <rect width="44" height="18" rx="3" fill="white" opacity="0.28"/>
            <rect x="52" y="3" width="56" height="5" rx="2" fill="white" opacity="0.11"/>
            <rect x="52" y="11" width="38" height="4" rx="2" fill="white" opacity="0.28"/>
          </g>
        ))}
        {/* Bottom nav */}
        <rect x="7" y="194" width="122" height="34" rx="0" fill="white" opacity="0.22"/>
        {[24,50,76,102].map((x,i)=>(
          <circle key={i} cx={x} cy={211} r="6" fill="#34D399" opacity={i===0?0.65:0.18}/>
        ))}
      </g>
      {/* Browser bar */}
      <g transform="translate(18,210)" opacity="0.65">
        <rect width="186" height="30" rx="7"
          fill="white" opacity="0.28" stroke="white" strokeWidth="0.5" strokeOpacity="0.2"/>
        <circle cx="16" cy="15" r="4.5" fill="#EF4444" opacity="0.7"/>
        <circle cx="29" cy="15" r="4.5" fill="#F59E0B" opacity="0.7"/>
        <circle cx="42" cy="15" r="4.5" fill="#10B981" opacity="0.7"/>
        <rect x="54" y="9" width="118" height="12" rx="5" fill="white" opacity="0.13"/>
        <text x="113" y="19.5" fill="white" fontSize="7" textAnchor="middle" opacity="0.7" fontFamily="Arial">your-site.com</text>
      </g>
    </svg>
  )
}

// ─── Map slug → background component ─────────────────────────────
const TILE_BG = {
  'paid-ads':     <PaidAdsBg />,
  'seo':          <SeoBg />,
  'ai-search':    <AioBg />,
  'data-science': <DataBg />,
  'web-services': <WebBg />,
}

// ─── Popup modal ──────────────────────────────────────────────────
function ServiceModal ({ service, onClose }) {
  const navigate = useNavigate()

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const esc = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', esc)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', esc) }
  }, [onClose])

  const Icon = ICON_MAP[service.icon] ?? ICON_MAP.Star

  function handleExplore () {
    onClose()
    setTimeout(() => navigate(`/services/${service.slug}`), 200)
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={e => { if (e.target === e.currentTarget) onClose() }}
      >
        <motion.div
          className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0,  scale: 1    }}
          exit={{    opacity: 0, y: 20,  scale: 0.96 }}
          transition={{ duration: 0.35, ease: [0.25,0.46,0.45,0.94] }}
        >
          {/* Modal header */}
          <div className="bg-navy-800 px-8 pt-8 pb-7 relative">
            <div className="absolute inset-0 opacity-[0.04]"
              style={{ backgroundImage: 'radial-gradient(circle,#ffffff 1px,transparent 1px)', backgroundSize: '20px 20px' }}/>
            <button onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
              <X size={16}/>
            </button>
            <div className={`w-12 h-12 ${service.bg} rounded-xl flex items-center justify-center mb-4 relative z-10`}>
              <Icon size={22} className={service.color}/>
            </div>
            <h2 className="text-2xl font-black text-white tracking-tight relative z-10">{service.title}</h2>
          </div>
          {/* Modal body */}
          <div className="px-8 py-7">
            <p className="text-gray-600 text-base leading-relaxed mb-6">{service.fullDescription}</p>
            <h4 className="text-navy-800 font-bold text-sm uppercase tracking-wide mb-4">Key Benefits</h4>
            <ul className="space-y-3 mb-8">
              {service.benefits.map((b,i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-accent-600 mt-0.5 shrink-0"/>
                  <span className="text-gray-600 text-sm">{b}</span>
                </li>
              ))}
            </ul>
            <button onClick={handleExplore}
              className="w-full bg-accent-600 hover:bg-accent-700 text-white font-bold py-3.5 rounded-full text-sm transition-all duration-200 flex items-center justify-center gap-2 group">
              Explore Service
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// ─── Card ─────────────────────────────────────────────────────────
export default function ServiceCard ({ icon, title, description, color, bg, slug, fullDescription, benefits, index = 0 }) {
  const [modal,   setModal]   = useState(false)
  const [hovered, setHovered] = useState(false)
  const Icon    = ICON_MAP[icon] ?? ICON_MAP.Star
  const service = { icon, title, description, color, bg, slug, fullDescription, benefits }

  return (
    <>
      <motion.div
        className="group relative rounded-2xl overflow-hidden cursor-pointer"
        style={{ minHeight: '260px', background: 'linear-gradient(160deg,#060E1A 0%,#0A1628 100%)' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -6, transition: { duration: 0.2 } }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={()   => setHovered(false)}
        onClick={() => setModal(true)}
      >
        {/* SVG background with zoom on hover */}
        <motion.div
          className="absolute inset-0"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {TILE_BG[slug] ?? null}
        </motion.div>

        {/* Overlay — lighter to reveal BG more clearly */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: hovered
              ? 'linear-gradient(160deg,rgba(6,14,26,.35) 0%,rgba(10,22,40,.45) 100%)'
              : 'linear-gradient(160deg,rgba(6,14,26,.55) 0%,rgba(10,22,40,.65) 100%)',
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Green accent bar slides in from left on hover */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent-500 to-accent-400"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.35 }}
          style={{ transformOrigin: 'left' }}
        />

        {/* Card content */}
        <div className="relative z-10 p-7 flex flex-col" style={{ minHeight: '260px' }}>
          <motion.div
            className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mb-5`}
            animate={{ scale: hovered ? 1.12 : 1 }}
            transition={{ duration: 0.25 }}
          >
            <Icon size={22} className={color}/>
          </motion.div>

          <h3 className="font-bold text-white text-lg mb-3 tracking-tight">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed flex-1">{description}</p>

          <motion.div
            className="flex items-center gap-1.5 mt-5"
            animate={{ x: hovered ? 4 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-accent-400 text-xs font-semibold">Learn more</span>
            <ArrowRight size={12} className="text-accent-400"/>
          </motion.div>
        </div>
      </motion.div>

      {modal && <ServiceModal service={service} onClose={() => setModal(false)}/>}
    </>
  )
}
