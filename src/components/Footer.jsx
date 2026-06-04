import { Link } from 'react-router-dom'
import { Mail, Phone, Linkedin, Instagram, Twitter } from 'lucide-react'
import { BRAND, NAV_LINKS, SOCIAL_LINKS, CONTACT } from '../constants'
import logo from '../assets/logo.png'

// Static icon map — defeats no-tree-shake bundler trap from `import *`
const SOCIAL_ICONS = { Linkedin, Instagram, Twitter }

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/10">
          <div>
            <Link to="/" className="inline-block mb-5">
              <img src={logo} alt={BRAND.name} className="h-12 w-auto object-contain" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A strategic growth partner - not just another agency. We grow when you grow.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ label, icon, href }) => {
                const Icon = SOCIAL_ICONS[icon]
                return (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-600 transition-colors duration-200">
                    {Icon && <Icon size={15} />}
                  </a>
                )
              })}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-5">Navigation</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ label, path }) => (
                <li key={path}>
                  <Link to={path} className="text-gray-400 hover:text-accent-400 text-sm transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-5">Services</h4>
            <ul className="space-y-3">
              {[
                { label: 'Paid Ads', slug: 'paid-ads' },
                { label: 'SEO', slug: 'seo' },
                { label: 'AIO / GEO', slug: 'ai-search' },
                { label: 'AI / Data Science', slug: 'data-science' },
                { label: 'Web & App Services', slug: 'web-services' },
              ].map(s => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-gray-400 hover:text-accent-400 text-sm transition-colors">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-accent-500 mt-0.5 shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="text-gray-400 hover:text-accent-400 text-sm transition-colors break-all">{CONTACT.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-accent-500 mt-0.5 shrink-0" />
                <a href={`tel:${CONTACT.phone}`} className="text-gray-400 hover:text-accent-400 text-sm transition-colors">{CONTACT.phone}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">© {year} {BRAND.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="text-gray-400 hover:text-accent-400 text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-accent-400 text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
