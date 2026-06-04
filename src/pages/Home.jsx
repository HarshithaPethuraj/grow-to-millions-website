import { Link, useOutletContext } from 'react-router-dom'
import { ArrowRight, ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { BRAND, SERVICES, STORY, TESTIMONIALS } from '../constants'
import ServiceCard from '../components/ServiceCard'
import GrowthGraph from '../components/GrowthGraph'
import CTASection from '../components/CTASection'
import SEO, { ORG_JSON_LD } from '../components/SEO'

// ─── HERO ──────────────────────────────────────────────────────────
function Hero({ onOpen }) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-navy-800">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[700px] h-[600px] bg-accent-600/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-navy-700/80 rounded-full blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent-600/15 to-transparent" />
      </div>

      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-12 pt-36 pb-20 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-px bg-accent-500" />
            <span className="text-accent-400 text-xs font-bold uppercase tracking-[0.25em]">Strategic Growth Partner</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.0] tracking-tight mb-8"
          >
            We Help Brands
            <br />
            <span className="bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
              Grow to Millions.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-12 max-w-xl"
          >
            {BRAND.subTagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={onOpen}
              className="group inline-flex items-center justify-center gap-2 bg-accent-600 hover:bg-accent-700 text-white font-bold px-9 py-4 rounded-full text-base transition-all duration-200 hover:shadow-xl hover:shadow-accent-600/30 active:scale-95"
            >
              Start Growing
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 text-xs"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}

// ─── SERVICES ──────────────────────────────────────────────────────
function ServicesSection() {
  return (
    <section className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-site mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent-600 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Our Services</span>
          <h2 className="text-4xl sm:text-5xl font-black text-navy-800 leading-[1.05] tracking-tight mb-5">
            Everything You Need to Scale
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            From AI-powered search to data science - every growth lever your business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} {...s} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 border-2 border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all duration-200 group"
          >
            Explore All Services
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// ─── OUR STORY ────────────────────────────────────────────────────
function StorySection() {
  const lastPara = STORY.paragraphs[STORY.paragraphs.length - 1]
  const restParas = STORY.paragraphs.slice(0, -1)

  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-site mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32"
          >
            <span className="text-accent-600 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Our Story</span>
            <h2 className="text-4xl sm:text-5xl font-black text-navy-800 leading-[1.05] tracking-tight mb-8">
              We grow when
              <br />
              <span className="bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent">
                you grow.
              </span>
            </h2>
            <div className="w-16 h-1 bg-accent-600 rounded-full" />
          </motion.div>

          <div className="space-y-6">
            {restParas.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`leading-relaxed ${
                  i === 0
                    ? 'text-2xl sm:text-3xl font-bold text-navy-800 tracking-tight'
                    : i === 1
                    ? 'text-xl text-accent-700 font-semibold'
                    : 'text-gray-500 text-base sm:text-lg'
                }`}
              >
                {para}
              </motion.p>
            ))}

            {/* Highlighted "when you win, we win" with glow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: restParas.length * 0.08 }}
              className="relative"
            >
              <motion.p
                animate={{
                  textShadow: [
                    '0 0 20px rgba(22, 163, 74, 0)',
                    '0 0 30px rgba(22, 163, 74, 0.6)',
                    '0 0 20px rgba(22, 163, 74, 0)',
                  ]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="text-lg sm:text-xl font-black text-accent-600 border-l-4 border-accent-500 pl-5 py-2"
              >
                {lastPara}
              </motion.p>
              <motion.div
                className="absolute -inset-2 rounded-xl bg-accent-600/5 -z-10"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── TESTIMONIALS (one at a time with arrows) ─────────────────────
function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState(1)

  function prev() {
    setDir(-1)
    setCurrent(c => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }
  function next() {
    setDir(1)
    setCurrent(c => (c + 1) % TESTIMONIALS.length)
  }

  const t = TESTIMONIALS[current]

  return (
    <section className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-site mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent-600 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Client Stories</span>
          <h2 className="text-4xl sm:text-5xl font-black text-navy-800 leading-[1.05] tracking-tight">
            Trusted by Growth-Focused Brands
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          {/* Card */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={t.id}
                custom={dir}
                initial={{ opacity: 0, x: dir > 0 ? 80 : -80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir > 0 ? -80 : 80 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm flex flex-col gap-6"
              >
                <div className="text-5xl text-accent-100 font-serif leading-none select-none">"</div>
                <p className="text-gray-700 text-lg leading-relaxed italic">{t.quote}</p>
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-navy-800 text-white flex items-center justify-center font-black text-sm shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-navy-800">{t.name}</p>
                    <p className="text-gray-500 text-sm">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-accent-500 hover:text-accent-600 transition-all duration-200"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i) }}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-accent-600' : 'w-2 bg-gray-300'}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-accent-500 hover:text-accent-600 transition-all duration-200"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── HOME PAGE ────────────────────────────────────────────────────
export default function Home() {
  const { openQuestionnaire } = useOutletContext()
  return (
    <>
      <SEO
        path="/"
        description="Performance marketing and SEO agency for ambitious brands. We tie every campaign to revenue — paid ads, SEO, AI search, data science, and conversion-first web."
        jsonLd={ORG_JSON_LD}
      />
      <Hero onOpen={openQuestionnaire} />
      <GrowthGraph />
      <ServicesSection />
      <StorySection />
      <TestimonialsSection />
      <CTASection onOpen={openQuestionnaire} />
    </>
  )
}
