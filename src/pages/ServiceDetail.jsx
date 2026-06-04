import { useParams, useNavigate, useOutletContext } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import { SERVICES, ICON_MAP } from '../constants'
import CTASection from '../components/CTASection'
import SEO, { serviceJsonLd } from '../components/SEO'

const HOW_WE_WORK = [
  { num: '01', title: 'Discovery & Audit',   desc: 'We map your current state, identify gaps, and pinpoint where the biggest opportunity lies.' },
  { num: '02', title: 'Strategy & Roadmap',  desc: 'A prioritised 90-day growth plan with channels, budgets, KPIs, and projected outcomes.' },
  { num: '03', title: 'Execute & Launch',    desc: 'Our specialists build and launch with precision - creative, copy, targeting, and tracking.' },
  { num: '04', title: 'Measure & Compound',  desc: 'Weekly optimisation cycles. Double down on winners, eliminate waste, compound growth.' },
]

const OUTCOMES = [
  'Measurable revenue growth tied to your campaigns',
  'Transparent, real-time reporting - no vanity metrics',
  'A system that compounds and scales over time',
  'A strategic partner invested in your long-term success',
]

export default function ServiceDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { openQuestionnaire } = useOutletContext()
  const service = SERVICES.find(s => s.slug === slug)

  if (!service) {
    return (
      <>
        <SEO title="Service not found" path={`/services/${slug}`} noIndex />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-black text-navy-800 mb-4">Service not found</h1>
            <button onClick={() => navigate('/services')} className="text-accent-600 font-semibold">
              Back to Services
            </button>
          </div>
        </div>
      </>
    )
  }

  const Icon = ICON_MAP[service.icon] ?? ICON_MAP.Star

  return (
    <>
      <SEO
        title={`${service.title} — Strategic ${service.title} Services`}
        description={service.fullDescription}
        path={`/services/${service.slug}`}
        jsonLd={serviceJsonLd({
          name: service.title,
          description: service.fullDescription,
          slug: service.slug,
        })}
      />
      {/* Hero */}
      <section className="bg-navy-800 pt-36 pb-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-600/8 rounded-full blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
          />
        </div>
        <div className="max-w-site mx-auto relative z-10">
          <button
            onClick={() => navigate('/services')}
            className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium mb-10 transition-colors"
          >
            <ArrowLeft size={15} /> Back to Services
          </button>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className={`w-16 h-16 ${service.bg} rounded-2xl flex items-center justify-center mb-6`}>
              <Icon size={28} className={service.color} />
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.0] tracking-tight mb-6 max-w-3xl">
              {service.title}
            </h1>
            <p className="text-gray-300 text-xl max-w-xl leading-relaxed">{service.fullDescription}</p>
          </motion.div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-site mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto mb-12 text-center"
          >
            <span className="text-accent-600 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">What We Do</span>
            <h2 className="text-4xl font-black text-navy-800 tracking-tight">Built for real outcomes</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {service.benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-3 bg-white p-5 rounded-xl border border-gray-100"
              >
                <CheckCircle2 size={18} className="text-accent-600 mt-0.5 shrink-0" />
                <span className="text-gray-700 font-medium">{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-site mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-accent-600 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Our Process</span>
            <h2 className="text-4xl font-black text-navy-800 tracking-tight">How We Work</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {HOW_WE_WORK.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-black text-navy-800 mb-3">{step.num}</div>
                <h3 className="font-bold text-navy-800 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-navy-800 py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-site mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent-400 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Outcomes</span>
            <h2 className="text-4xl font-black text-white tracking-tight mb-10">What You Can Expect</h2>
            <div className="space-y-4">
              {OUTCOMES.map((o, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-3 text-left bg-white/5 rounded-xl px-5 py-4 border border-white/10"
                >
                  <CheckCircle2 size={18} className="text-accent-500 shrink-0" />
                  <span className="text-gray-300 font-medium">{o}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection onOpen={openQuestionnaire} />
    </>
  )
}
