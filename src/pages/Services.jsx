import { Link, useOutletContext } from 'react-router-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { SERVICES } from '../constants'
import ServiceCard from '../components/ServiceCard'
import CTASection from '../components/CTASection'
import SEO from '../components/SEO'

function Hero() {
  return (
    <section className="bg-navy-800 pt-36 pb-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-600/8 rounded-full blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
      </div>
      <div className="max-w-site mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="text-accent-400 text-xs font-bold uppercase tracking-[0.2em] mb-5 block">What We Do</span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.0] tracking-tight mb-6 max-w-3xl">
            Services That Drive Real Growth
          </h1>
          <p className="text-gray-300 text-xl max-w-xl leading-relaxed">
            Every service we offer is tied to a business outcome - not an activity report.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

const PROCESS = [
  { num: '01', title: 'Discovery & Audit',  desc: 'We map your current state - what is working, what is not, and where the biggest opportunity lies.' },
  { num: '02', title: 'Strategy & Roadmap', desc: 'A 90-day prioritised growth plan with channels, budgets, KPIs, and projected outcomes.' },
  { num: '03', title: 'Execute & Launch',   desc: 'Our specialists build and launch with precision - creative, copy, targeting, and tracking all in-house.' },
  { num: '04', title: 'Measure & Compound', desc: 'Weekly iteration cycles. Double down on winners, eliminate waste, and compound growth month after month.' },
]

const PILLARS = [
  'Outcomes over outputs - every tactic tied to revenue',
  'No long-term lock-ins - we earn your business every month',
  'Full-funnel thinking - not just top-of-funnel awareness',
  'Transparent reporting - you see exactly what your money does',
  'Dedicated specialists - not junior generalists',
  'Skin in the game - we invest in understanding your business',
]

export default function Services() {
  const { openQuestionnaire } = useOutletContext()
  return (
    <>
      <SEO
        title="Services — Paid Ads, SEO, AI Search, Data Science, Web"
        description="Specialist performance marketing services tied to revenue: paid ads on Google/Meta/LinkedIn, SEO for revenue, generative search optimization (GEO), data science, and conversion-first web."
        path="/services"
      />
      <Hero />

      {/* Services grid */}
      <section className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-site mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent-600 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Our Services</span>
            <h2 className="text-4xl sm:text-5xl font-black text-navy-800 leading-[1.05] tracking-tight mb-5">Built for Scale</h2>
            <p className="text-gray-500 text-lg leading-relaxed">Specialist teams, not generalists. Each service owned by experts who live and breathe their domain.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => <ServiceCard key={s.id} {...s} index={i} />)}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-site mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent-600 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Our Process</span>
            <h2 className="text-4xl sm:text-5xl font-black text-navy-800 leading-[1.05] tracking-tight">How We Work</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS.map(({ num, title, desc }, i) => (
              <motion.div key={num} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1 }} className="relative">
                {i < PROCESS.length - 1 && <div className="hidden lg:block absolute top-4 left-full w-full h-px bg-gray-200 z-0" />}
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-navy-800 text-accent-400 font-black text-sm rounded-xl flex items-center justify-center mb-5 font-mono">{num}</div>
                  <h3 className="font-bold text-navy-800 text-lg mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-navy-800 py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-600/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-site mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="text-accent-400 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Why Us</span>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-[1.05] tracking-tight mb-6">Partners, not vendors.</h2>
              <p className="text-gray-400 text-lg leading-relaxed">We operate like an extension of your team - aligned to your goals, your numbers, and your long-term vision.</p>
            </motion.div>
            <ul className="space-y-4">
              {PILLARS.map((p, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent-500 shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-base">{p}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection onOpen={openQuestionnaire} />
    </>
  )
}
