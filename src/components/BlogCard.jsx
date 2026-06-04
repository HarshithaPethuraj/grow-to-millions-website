import { ArrowRight, Clock, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

export default function BlogCard({ title, date, tag, tagColor, description, readTime, index = 0, onClick }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-accent-200 transition-all duration-300 flex flex-col cursor-pointer"
      onClick={onClick}
    >
      <div className="h-1 bg-gradient-to-r from-accent-600 to-accent-400" />
      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-5">
          <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${tagColor}`}>{tag}</span>
          <div className="flex items-center gap-1.5 text-gray-500 text-xs">
            <Calendar size={11} /><span>{date}</span>
          </div>
        </div>
        <h3 className="font-black text-navy-800 text-xl leading-snug mb-3 group-hover:text-accent-600 transition-colors flex-1 tracking-tight">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">{description}</p>
        <div className="flex items-center justify-between pt-5 border-t border-gray-100">
          <div className="flex items-center gap-1.5 text-gray-500 text-xs"><Clock size={11} /><span>{readTime}</span></div>
          <span className="inline-flex items-center gap-1.5 text-accent-700 text-sm font-semibold group-hover:gap-2.5 transition-all">
            Read More <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </motion.article>
  )
}
