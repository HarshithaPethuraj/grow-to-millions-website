import { useParams, useNavigate, useOutletContext } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Calendar, ArrowRight } from 'lucide-react'
import { BLOG_POSTS } from '../constants'
import CTASection from '../components/CTASection'
import SEO, { articleJsonLd } from '../components/SEO'

export default function BlogPost() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { openQuestionnaire } = useOutletContext()

  // Map slugs to post IDs
  const SLUG_MAP = {
    'ai-search':  1,
    'seo-growth': 2,
    'paid-ads':   3,
  }
  const postId = SLUG_MAP[slug]
  const post = BLOG_POSTS.find(p => p.id === postId)

  if (!post) {
    return (
      <>
        <SEO title="Article not found" path={`/blog/${slug}`} noIndex />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-black text-navy-800 mb-4">Article not found</h1>
            <button onClick={() => navigate('/blog')} className="text-accent-700 font-semibold">Back to Blog</button>
          </div>
        </div>
      </>
    )
  }

  // Find adjacent posts for next/prev
  const currentIndex = BLOG_POSTS.findIndex(p => p.id === postId)
  const prevPost = BLOG_POSTS[currentIndex + 1]
  const nextPost = BLOG_POSTS[currentIndex - 1]

  const SLUG_BY_ID = { 1: 'ai-search', 2: 'seo-growth', 3: 'paid-ads' }

  return (
    <>
      <SEO
        title={post.title}
        description={post.description}
        path={`/blog/${slug}`}
        ogType="article"
        jsonLd={articleJsonLd({
          title: post.title,
          description: post.description,
          date: post.date,
          slug,
        })}
      />
      {/* Hero */}
      <section className="bg-navy-800 pt-36 pb-16 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-accent-600/8 blur-[80px]" />
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
          />
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium mb-10 transition-colors"
          >
            <ArrowLeft size={15} /> Back to all articles
          </button>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full mb-6 ${post.tagColor}`}>
              {post.tag}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-5 text-gray-400 text-sm">
              <span className="flex items-center gap-1.5"><Calendar size={13} />{post.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={13} />{post.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Lead paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-xl leading-relaxed border-l-4 border-accent-500 pl-6 mb-12 italic"
          >
            {post.description}
          </motion.p>

          {/* Content sections */}
          <div className="space-y-10">
            {post.content?.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.3 + i * 0.1 }}
              >
                <h2 className="text-2xl font-black text-navy-800 mb-4 tracking-tight">{section.heading}</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{section.body}</p>
              </motion.div>
            ))}
          </div>

          {/* Nav between posts */}
          {(prevPost || nextPost) && (
            <div className="mt-16 pt-10 border-t border-gray-100 grid grid-cols-2 gap-6">
              {prevPost ? (
                <button
                  onClick={() => navigate(`/blog/${SLUG_BY_ID[prevPost.id]}`)}
                  className="text-left group"
                >
                  <span className="text-gray-400 text-xs font-semibold uppercase tracking-wide flex items-center gap-1 mb-2">
                    <ArrowLeft size={12} /> Previous
                  </span>
                  <span className="text-navy-800 font-bold text-sm group-hover:text-accent-600 transition-colors line-clamp-2">
                    {prevPost.title}
                  </span>
                </button>
              ) : <div />}
              {nextPost ? (
                <button
                  onClick={() => navigate(`/blog/${SLUG_BY_ID[nextPost.id]}`)}
                  className="text-right group"
                >
                  <span className="text-gray-400 text-xs font-semibold uppercase tracking-wide flex items-center gap-1 mb-2 justify-end">
                    Next <ArrowRight size={12} />
                  </span>
                  <span className="text-navy-800 font-bold text-sm group-hover:text-accent-600 transition-colors line-clamp-2">
                    {nextPost.title}
                  </span>
                </button>
              ) : <div />}
            </div>
          )}
        </div>
      </section>

      <CTASection onOpen={openQuestionnaire} />
    </>
  )
}
