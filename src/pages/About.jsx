import { useOutletContext } from 'react-router-dom'
import { motion } from 'framer-motion'
import { STORY, TESTIMONIALS, ICON_MAP } from '../constants'
import CTASection from '../components/CTASection'
import SEO from '../components/SEO'

const VALUES = [
  { icon: 'Target',     title: 'Outcome-First',        desc: 'Every tactic is tied to a measurable business result.' },
  { icon: 'Eye',        title: 'Radical Transparency', desc: 'You see every number, every decision, every week.' },
  { icon: 'Zap',        title: 'Speed & Precision',    desc: 'We move fast, eliminate waste, and double down on winners.' },
  { icon: 'Handshake',  title: 'Skin in the Game',     desc: 'We operate as partners, not vendors. Your growth is ours.' },
]

export default function About() {
  const { openQuestionnaire } = useOutletContext()
  return (
    <>
      <SEO
        title="About — Built by Marketers, Driven by Outcomes"
        description="A growth partner, not another agency. We operate with skin in the game, tying every tactic to your revenue and long-term vision."
        path="/about"
      />
      {/* Hero */}
      <section className="bg-navy-800 pt-36 pb-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent-600/8 rounded-full blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
          />
        </div>
        <div className="max-w-site mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-accent-400 text-xs font-bold uppercase tracking-[0.2em] mb-5 block">About Us</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.0] tracking-tight mb-6 max-w-3xl">
              Built by Marketers.<br />Driven by Outcomes.
            </h1>
            <p className="text-gray-300 text-xl max-w-xl leading-relaxed">
              We didn't build another agency. We built a growth partner - one that only wins when you do.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-site mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:sticky lg:top-32">
              <span className="text-accent-600 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Our Story</span>
              <h2 className="text-4xl sm:text-5xl font-black text-navy-800 leading-[1.05] tracking-tight mb-8">
                We grow when<br />
                <span className="bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent">you grow.</span>
              </h2>
              <div className="w-16 h-1 bg-accent-600 rounded-full" />
            </motion.div>
            <div className="space-y-6">
              {STORY.paragraphs.map((para, i) => (
                <motion.p key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6, delay: i * 0.08 }}
                  className={`leading-relaxed ${i === 0 ? 'text-2xl sm:text-3xl font-bold text-navy-800 tracking-tight' : i === 1 ? 'text-xl text-accent-700 font-semibold' : 'text-gray-500 text-base sm:text-lg'}`}>
                  {para}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-site mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent-600 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Our Values</span>
            <h2 className="text-4xl sm:text-5xl font-black text-navy-800 leading-[1.05] tracking-tight">What Drives Everything We Do</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon, title, desc }, i) => {
              const Icon = ICON_MAP[icon] ?? ICON_MAP.Star
              return (
                <motion.div key={title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-accent-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-11 h-11 bg-navy-800 rounded-xl flex items-center justify-center mb-5">
                    <Icon size={20} className="text-accent-400" />
                  </div>
                  <h3 className="font-bold text-navy-800 text-lg mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-site mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent-600 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Client Stories</span>
            <h2 className="text-4xl sm:text-5xl font-black text-navy-800 leading-[1.05] tracking-tight">Clients Who Trust Us</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div key={t.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.12 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col gap-5">
                <div className="text-5xl text-accent-100 font-serif leading-none select-none">"</div>
                <p className="text-gray-600 leading-relaxed italic flex-1">{t.quote}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <div className="w-10 h-10 rounded-full bg-navy-800 text-white flex items-center justify-center font-black text-sm shrink-0">{t.initials}</div>
                  <div>
                    <p className="font-bold text-navy-800 text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection onOpen={openQuestionnaire} />
    </>
  )
}
