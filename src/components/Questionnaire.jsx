import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, Check, Loader2, ChevronLeft } from 'lucide-react'
import { CONTACT } from '../constants'

// ─── Question definitions ──────────────────────────────────────────
const QUESTIONS = [
  { id: 1,  type: 'input',   inputType: 'text',  label: 'Your good name?',                                          placeholder: 'Type your name here',              required: true  },
  { id: 2,  type: 'input',   inputType: 'email', label: 'Enter your email address.',                                placeholder: 'you@company.com',                  required: true  },
  { id: 3,  type: 'input',   inputType: 'url',   label: 'Please list your website.',                                placeholder: 'https://yourwebsite.com',           required: true  },
  { id: 4,  type: 'input',   inputType: 'text',  label: 'What is your role?',                                       placeholder: 'e.g. Founder, CMO, Marketing Head', required: true  },
  { id: 5,  type: 'textarea',                    label: 'What are your most important products or services?',        placeholder: 'Type your answer here',            required: true  },
  { id: 6,  type: 'input',   inputType: 'text',  label: 'Are you interested in Paid Ads, SEO services, or LLM-search optimization?', placeholder: 'Type your answer here', required: true },
  {
    id: 7, type: 'buttons', label: 'When are you looking to make a decision?',
    options: ['ASAP', 'Next 30 days', 'Next 90 days', "I'm just exploring"],
  },
  {
    id: 8, type: 'buttons', label: 'What is your monthly marketing budget?',
    options: ['<$1000', '$1000–$3000', '$3000–$7000', '$7000–$9000', '$10000+'],
  },
  { id: 9,  type: 'textarea', label: 'Any additional information you would like to share?', placeholder: 'Optional - anything else we should know', required: false },
  {
    id: 10, type: 'buttons', label: 'Are you open to a recommendation?',
    options: ['Yes', 'No'],
  },
  { id: 11, type: 'input', inputType: 'text', label: 'How did you hear about us?', placeholder: 'Google, referral, social media…', required: false },
]

// Maps question IDs to backend field names
const FIELD_MAP = {
  1:  'name',
  2:  'email',
  3:  'website',
  4:  'role',
  5:  'products',
  6:  'interests',
  7:  'timeline',
  8:  'budget',
  9:  'additionalInfo',
  10: 'openToRecommendation',
  11: 'referralSource',
}

const slideVariants = {
  enter:  (dir) => ({ opacity: 0, y: dir > 0 ? 40 : -40 }),
  center: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit:   (dir) => ({ opacity: 0, y: dir > 0 ? -40 : 40, transition: { duration: 0.3 } }),
}

export default function Questionnaire({ onClose }) {
  const [screen, setScreen] = useState('welcome')   // welcome | questions | submitting | done
  const [step, setStep]     = useState(0)            // 0-based question index
  const [dir, setDir]       = useState(1)            // animation direction
  const [answers, setAnswers] = useState({})
  const [error, setError]   = useState('')
  const [submitting, setSubmitting] = useState(false)

  const current = QUESTIONS[step]
  const progress = ((step) / QUESTIONS.length) * 100

  // ── Validate current answer ──
  function validate() {
    const val = answers[current.id] ?? ''
    if (current.required === false) return true
    if (!val.toString().trim()) { setError('This field is required.'); return false }
    if (current.inputType === 'email' && !/\S+@\S+\.\S+/.test(val)) {
      setError('Please enter a valid email.'); return false
    }
    return true
  }

  // ── Move forward ──
  function next() {
    if (!validate()) return
    setError('')
    setDir(1)
    if (step < QUESTIONS.length - 1) {
      setStep(s => s + 1)
    } else {
      handleSubmit()
    }
  }

  // ── Move back ──
  function back() {
    if (step === 0) { setScreen('welcome'); return }
    setDir(-1)
    setError('')
    setStep(s => s - 1)
  }

  // ── Handle button-type answers ──
  function pickOption(option) {
    setAnswers(a => ({ ...a, [current.id]: option }))
    setError('')
    setDir(1)
    setTimeout(() => {
      if (step < QUESTIONS.length - 1) setStep(s => s + 1)
      else handleSubmit()
    }, 350)
  }

  // ── Submit to backend ─────────────────────────────────────────────
  async function handleSubmit() {
    setScreen('submitting')

    // Build payload using field map
    const payload = {}
    QUESTIONS.forEach(q => {
      const fieldName = FIELD_MAP[q.id]
      if (fieldName) payload[fieldName] = answers[q.id] ?? ''
    })

    try {
      const res = await fetch(CONTACT.API_QUESTIONNAIRE, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body:    JSON.stringify({ ...payload, _source: 'Questionnaire Popup', source: 'Questionnaire Popup' }),
      })
      const data = await res.json()
      if (res.ok && data.success) setScreen('done')
      else                        setScreen('done')
    } catch {
      setScreen('done')
    }
  }

  // ── Key handler ──
  function handleKey(e) {
    if (e.key === 'Enter' && current.type !== 'textarea') next()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] overlay-bg flex flex-col"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
        aria-label="Close"
      >
        <X size={18} />
      </button>

      {/* ── WELCOME SCREEN ── */}
      {screen === 'welcome' && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex flex-col items-center justify-center px-6 text-center"
        >
          <div className="w-16 h-16 rounded-full bg-accent-600/20 border border-accent-600/40 flex items-center justify-center mb-8">
            <span className="text-2xl">👋</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight leading-snug max-w-lg">
            Welcome!
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-md mb-10">
            Please complete the following information so that we can learn more about your business.
            <span className="block mt-2 text-accent-400 font-semibold text-sm">- GTM Team</span>
          </p>
          <button
            onClick={() => { setScreen('questions'); setStep(0) }}
            className="group inline-flex items-center gap-3 bg-accent-600 hover:bg-accent-700 text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 hover:shadow-lg hover:shadow-accent-600/30"
          >
            Continue
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      )}

      {/* ── QUESTIONS SCREEN ── */}
      {screen === 'questions' && (
        <div className="flex-1 flex flex-col">
          {/* Progress bar */}
          <div className="w-full h-1 bg-white/10">
            <motion.div
              className="h-full bg-accent-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress + (1 / QUESTIONS.length) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>

          {/* Back button */}
          <div className="px-6 pt-6">
            <button
              onClick={back}
              className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
            >
              <ChevronLeft size={16} /> Back
            </button>
          </div>

          {/* Step counter */}
          <div className="px-6 pt-2 text-gray-400 text-xs font-mono">
            {step + 1} / {QUESTIONS.length}
          </div>

          {/* Question area */}
          <div className="flex-1 flex flex-col items-center justify-center px-6 pb-10">
            <div className="w-full max-w-xl">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={step}
                  custom={dir}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  {/* Question label */}
                  <div className="flex items-start gap-3 mb-6">
                    <span className="text-accent-500 font-black text-sm mt-1 font-mono shrink-0">
                      {String(step + 1).padStart(2, '0')} →
                    </span>
                    <h3 className="text-white text-2xl sm:text-3xl font-bold leading-snug">
                      {current.label}
                      {current.required !== false && <span className="text-accent-500 ml-1">*</span>}
                    </h3>
                  </div>

                  {/* Input types */}
                  {current.type === 'input' && (
                    <input
                      type={current.inputType || 'text'}
                      placeholder={current.placeholder}
                      value={answers[current.id] ?? ''}
                      onChange={e => { setAnswers(a => ({ ...a, [current.id]: e.target.value })); setError('') }}
                      onKeyDown={handleKey}
                      autoFocus
                      className="w-full bg-transparent border-b-2 border-white/20 focus:border-accent-500 text-white text-xl py-3 placeholder-gray-400 transition-colors duration-200 focus:outline-none"
                    />
                  )}

                  {current.type === 'textarea' && (
                    <textarea
                      rows={3}
                      placeholder={current.placeholder}
                      value={answers[current.id] ?? ''}
                      onChange={e => { setAnswers(a => ({ ...a, [current.id]: e.target.value })); setError('') }}
                      autoFocus
                      className="w-full bg-transparent border-b-2 border-white/20 focus:border-accent-500 text-white text-xl py-3 placeholder-gray-400 transition-colors duration-200 focus:outline-none resize-none"
                    />
                  )}

                  {current.type === 'buttons' && (
                    <div className="flex flex-col gap-3 mt-2">
                      {current.options.map(opt => (
                        <button
                          key={opt}
                          onClick={() => pickOption(opt)}
                          className={`w-full text-left px-5 py-4 rounded-xl border text-sm font-semibold transition-all duration-200 ${
                            answers[current.id] === opt
                              ? 'bg-accent-600 border-accent-600 text-white'
                              : 'border-white/20 text-gray-300 hover:border-accent-500 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Error */}
                  {error && (
                    <p className="mt-3 text-red-400 text-sm flex items-center gap-2">
                      <span className="w-1 h-1 bg-red-400 rounded-full" />{error}
                    </p>
                  )}

                  {/* OK button for input/textarea */}
                  {(current.type === 'input' || current.type === 'textarea') && (
                    <div className="mt-8 flex items-center gap-4">
                      <button
                        onClick={next}
                        className="group inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-700 text-white font-bold px-7 py-3.5 rounded-full text-sm transition-all duration-200"
                      >
                        OK <Check size={16} className="group-hover:scale-110 transition-transform" />
                      </button>
                      <span className="text-gray-400 text-xs">press Enter ↵</span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      )}

      {/* ── SUBMITTING SCREEN ── */}
      {screen === 'submitting' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex-1 flex flex-col items-center justify-center text-center px-6"
        >
          <Loader2 size={48} className="text-accent-500 animate-spin mb-6" />
          <p className="text-white text-xl font-semibold">Sending your details…</p>
        </motion.div>
      )}

      {/* ── DONE SCREEN ── */}
      {screen === 'done' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex flex-col items-center justify-center text-center px-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-20 h-20 rounded-full bg-accent-600/20 border-2 border-accent-500 flex items-center justify-center mb-8"
          >
            <Check size={36} className="text-accent-400" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
            Thank you! 🎉
          </h2>
          <p className="text-gray-300 text-lg max-w-sm leading-relaxed mb-10">
            We'll review your details and get back to you shortly.
          </p>
          <button
            onClick={onClose}
            className="bg-accent-600 hover:bg-accent-700 text-white font-bold px-8 py-4 rounded-full transition-colors duration-200"
          >
            Back to Website
          </button>
        </motion.div>
      )}
    </motion.div>
  )
}
