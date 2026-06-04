import { useState } from 'react'
import { Mail, Phone, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { CONTACT } from '../constants'
import SEO from '../components/SEO'

const INIT = { name: '', email: '', phone: '', message: '' }

function ContactForm() {
  const [form, setForm]     = useState(INIT)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  function validate() {
    const e = {}
    if (!form.name.trim())                       e.name    = 'Name is required.'
    if (!form.email.trim())                      e.email   = 'Email is required.'
    else if (!/\S+@\S+\.\S+/.test(form.email))  e.email   = 'Enter a valid email.'
    if (!form.message.trim())                    e.message = 'Message is required.'
    else if (form.message.trim().length < 20)    e.message = 'At least 20 characters please.'
    return e
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setStatus('loading')
    try {
      const res = await fetch(CONTACT.API_CONTACT, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body:    JSON.stringify({ ...form, _source: 'Contact Page', source: 'Contact Page' }),
      })
      const data = await res.json()
      if (res.ok) { setStatus('success'); setForm(INIT) }
      else throw new Error()
    } catch { setStatus('error') }
  }

  function field(key) {
    return {
      value:    form[key],
      onChange: e => { setForm(f => ({ ...f, [key]: e.target.value })); if (errors[key]) setErrors(er => ({ ...er, [key]: '' })) },
    }
  }

  const inputCls = key =>
    `w-full px-5 py-3.5 rounded-xl border text-sm transition-all bg-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent ${errors[key] ? 'border-red-400 bg-red-50' : 'border-gray-200'}`

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {[
        { key: 'name',  label: 'Full Name',     placeholder: 'Your name',       type: 'text',  req: true  },
        { key: 'email', label: 'Email Address', placeholder: 'you@company.com', type: 'email', req: true  },
        { key: 'phone', label: 'Phone Number',  placeholder: '+91 8778002107',  type: 'tel',   req: false },
      ].map(({ key, label, placeholder, type, req }) => (
        <div key={key}>
          <label className="block text-sm font-semibold text-navy-800 mb-2">
            {label} {req ? <span className="text-red-500">*</span> : <span className="text-gray-500 font-normal">(optional)</span>}
          </label>
          <input type={type} placeholder={placeholder} className={inputCls(key)} {...field(key)} />
          {errors[key] && <p className="mt-1.5 text-red-500 text-xs flex items-center gap-1.5"><AlertCircle size={12} />{errors[key]}</p>}
        </div>
      ))}

      <div>
        <label className="block text-sm font-semibold text-navy-800 mb-2">Message <span className="text-red-500">*</span></label>
        <textarea rows={5} placeholder="Tell us about your business and what growth looks like for you…"
          className={`${inputCls('message')} resize-none`} {...field('message')} />
        {errors.message && <p className="mt-1.5 text-red-500 text-xs flex items-center gap-1.5"><AlertCircle size={12} />{errors.message}</p>}
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
          <AlertCircle size={16} className="shrink-0" />
          Something went wrong. Email us directly at {CONTACT.email}.
        </div>
      )}
      {status === 'success' && (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-3 bg-accent-50 border border-accent-200 text-accent-700 rounded-xl px-4 py-3 text-sm">
          <CheckCircle2 size={16} className="shrink-0" />
          Message sent! We will be in touch within 24 hours.
        </motion.div>
      )}

      <button type="submit" disabled={status === 'loading' || status === 'success'}
        className="w-full flex items-center justify-center gap-2 bg-accent-600 hover:bg-accent-700 disabled:bg-accent-400 disabled:cursor-not-allowed text-white font-bold py-4 rounded-full transition-all duration-200 active:scale-95 text-sm">
        {status === 'loading' ? <><Loader2 size={18} className="animate-spin" /> Sending…</>
         : status === 'success' ? <><CheckCircle2 size={18} /> Message Sent!</>
         : <><Send size={18} /> Send Message</>}
      </button>
    </form>
  )
}

export default function Contact() {
  const INFO = [
    { Icon: Mail,  label: 'Email us', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { Icon: Phone, label: 'Call us',  value: CONTACT.phone, href: `tel:${CONTACT.phone}` },
  ]

  return (
    <>
      <SEO
        title="Contact — Let's Build Something That Grows"
        description="Tell us about your business. We respond within one business day with a tailored growth conversation — no hard sell."
        path="/contact"
      />
      <section className="bg-navy-800 pt-36 pb-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-600/8 rounded-full blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
          />
        </div>
        <div className="max-w-site mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-accent-400 text-xs font-bold uppercase tracking-[0.2em] mb-5 block">Get in Touch</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.0] tracking-tight mb-6">
              Let's Build Something
              <br />
              <span className="bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">That Grows.</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-lg leading-relaxed">
              Tell us about your business. We will review and reach out within one business day.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-site mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="text-3xl sm:text-4xl font-black text-navy-800 tracking-tight mb-4">Start the conversation.</h2>
            <p className="text-gray-500 leading-relaxed mb-10">Whether you are ready to launch or just exploring - we would love to hear from you. No hard sell, just a real conversation about growth.</p>
            <div className="space-y-6 mb-12">
              {INFO.map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-accent-50 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-accent-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 mb-0.5 uppercase tracking-wider">{label}</p>
                    {href
                      ? <a href={href} className="text-navy-800 text-sm font-semibold hover:text-accent-600 transition-colors break-all">{value}</a>
                      : <p className="text-navy-800 text-sm font-semibold">{value}</p>}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h4 className="font-bold text-navy-800 text-sm mb-4">What happens next?</h4>
              <ol className="space-y-3">
                {['We review your message within 24 hours.', 'A strategist schedules a 30-min discovery call.', 'You receive a tailored growth proposal - free.'].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-navy-800 text-accent-400 rounded-full text-xs font-black flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                    <span className="text-gray-500 text-sm leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="bg-gray-50 rounded-3xl p-8 sm:p-10 border border-gray-100">
              <h3 className="font-black text-navy-800 text-2xl mb-2 tracking-tight">Send us a message</h3>
              <p className="text-gray-500 text-sm mb-7">We typically respond within one business day.</p>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
