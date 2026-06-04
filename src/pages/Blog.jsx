import { useState } from 'react'
import { Search, CheckCircle2, Loader2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useOutletContext } from 'react-router-dom'
import { BLOG_POSTS, CONTACT } from '../constants'
import BlogCard from '../components/BlogCard'
import CTASection from '../components/CTASection'
import SEO from '../components/SEO'

const ALL_TAGS = ['All', 'SEO', 'AI / GEO', 'Paid Ads']

export default function Blog() {
  const { openQuestionnaire } = useOutletContext()
  const navigate = useNavigate()
  const SLUG_MAP = { 1: 'ai-search', 2: 'seo-growth', 3: 'paid-ads' }
  const [activeTag, setActiveTag] = useState('All')
  const [query, setQuery] = useState('')
  const [email, setEmail] = useState('')
  const [subStatus, setSubStatus] = useState('idle') // idle | loading | success | error

  const filtered = BLOG_POSTS.filter(p => {
    const matchTag = activeTag === 'All' || p.tag === activeTag
    const matchQ   = p.title.toLowerCase().includes(query.toLowerCase()) ||
                     p.description.toLowerCase().includes(query.toLowerCase())
    return matchTag && matchQ
  })

  async function handleSubscribe(e) {
    e.preventDefault()
    if (!email || !/\S+@\S+\.\S+/.test(email)) return
    setSubStatus('loading')
    try {
      const res = await fetch(CONTACT.API_NEWSLETTER, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ email, _source: 'Blog Page - Newsletter', source: 'Blog Page - Newsletter' }),
      })
      setSubStatus(res.ok ? 'success' : 'error')
    } catch {
      setSubStatus('error')
    }
  }

  return (
    <>
      <SEO
        title="Insights — From Our Playbook"
        description="Real strategies, real numbers. Articles on AI search, SEO, and paid media that actually move revenue."
        path="/blog"
      />
      {/* Hero */}
      <section className="bg-navy-800 pt-36 pb-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-accent-600/8 blur-[80px]" />
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
          />
        </div>
        <div className="max-w-site mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-accent-400 text-xs font-bold uppercase tracking-[0.2em] mb-5 block">Insights</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.0] tracking-tight mb-6">
              From Our Playbook
            </h1>
            <p className="text-gray-300 text-xl max-w-xl leading-relaxed">
              Real strategies. Real numbers. Everything we are learning while scaling our clients' businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-site mx-auto">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Search articles…" value={query} onChange={e => setQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 bg-white text-sm focus:ring-2 focus:ring-accent-500 focus:border-transparent transition" />
            </div>
            <div className="flex gap-2 flex-wrap">
              {ALL_TAGS.map(tag => (
                <button key={tag} onClick={() => setActiveTag(tag)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${activeTag === tag ? 'bg-navy-800 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:border-accent-400 hover:text-accent-600'}`}>
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Cards */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filtered.map((post, i) => (
                <BlogCard key={post.id} {...post} index={i} onClick={() => navigate(`/blog/${SLUG_MAP[post.id]}`)} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400">
              <Search size={36} className="mx-auto mb-4 opacity-30" />
              <p className="text-lg font-semibold">No articles found</p>
              <p className="text-sm mt-1">Try a different keyword or filter.</p>
            </div>
          )}

          {/* Newsletter */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mt-16 bg-navy-800 rounded-3xl p-10 sm:p-14 flex flex-col sm:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-600/8 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <h3 className="font-black text-white text-2xl mb-1 tracking-tight">Stay ahead of the curve.</h3>
              <p className="text-gray-400 text-sm">Join 2,000+ marketers. Unsubscribe anytime.</p>
            </div>

            {subStatus === 'success' ? (
              <div className="flex items-center gap-3 text-accent-400 font-semibold relative z-10">
                <CheckCircle2 size={22} />
                <span>You're subscribed! Welcome aboard.</span>
              </div>
            ) : (
              <form className="flex gap-3 w-full sm:w-auto relative z-10" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setSubStatus('idle') }}
                  required
                  className="flex-1 sm:w-64 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500"
                />
                <button
                  type="submit"
                  disabled={subStatus === 'loading'}
                  className="bg-accent-600 hover:bg-accent-700 disabled:opacity-60 text-white text-sm font-bold px-6 py-3 rounded-full transition-colors whitespace-nowrap flex items-center gap-2"
                >
                  {subStatus === 'loading' ? <><Loader2 size={15} className="animate-spin" /> Subscribing…</> : 'Subscribe'}
                </button>
              </form>
            )}

            {subStatus === 'error' && (
              <p className="text-red-400 text-xs absolute bottom-4 right-10">Something went wrong. Please try again.</p>
            )}
          </motion.div>
        </div>
      </section>

      <CTASection onOpen={openQuestionnaire} />

    </>
  )
}
