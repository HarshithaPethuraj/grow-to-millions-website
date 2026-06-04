// Generate sitemap.xml from the same SERVICES + BLOG_POSTS data the app uses.
// Runs in `npm run build` (postbuild hook).
//
// To update: just add/remove routes here or in src/constants/index.js.
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const SITE_URL = process.env.SITE_URL || 'https://growtomillions.com'
const today = new Date().toISOString().split('T')[0]

const SERVICE_SLUGS = ['paid-ads', 'seo', 'ai-search', 'data-science', 'web-services']
const BLOG_SLUGS = ['ai-search', 'seo-growth', 'paid-ads']

const routes = [
  { path: '/',          priority: '1.0',  changefreq: 'weekly'  },
  { path: '/services',  priority: '0.9',  changefreq: 'monthly' },
  ...SERVICE_SLUGS.map(s => ({ path: `/services/${s}`, priority: '0.8', changefreq: 'monthly' })),
  { path: '/about',     priority: '0.6',  changefreq: 'monthly' },
  { path: '/blog',      priority: '0.8',  changefreq: 'weekly'  },
  ...BLOG_SLUGS.map(s => ({ path: `/blog/${s}`, priority: '0.7', changefreq: 'monthly' })),
  { path: '/contact',   priority: '0.5',  changefreq: 'yearly'  },
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    r => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

const out = resolve(process.cwd(), 'dist', 'sitemap.xml')
writeFileSync(out, xml)
console.log(`✓ sitemap.xml written (${routes.length} URLs) → ${out}`)
