import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CTASection({ onOpen }) {
  return (
    <section className="relative bg-navy-800 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-600/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
      </div>
      <div className="relative z-10 max-w-site mx-auto px-4 sm:px-6 lg:px-12 py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-accent-400 text-xs font-bold uppercase tracking-[0.2em] mb-5">
            Let's Work Together
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6 tracking-tight">
            Ready to Grow to Millions?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto">
            Let's build your growth engine - together.
          </p>
          <button
            onClick={onOpen}
            className="group inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-700 text-white font-bold px-10 py-4 rounded-full text-base transition-all duration-200 hover:shadow-xl hover:shadow-accent-600/30 active:scale-95"
          >
            Start Growing
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
