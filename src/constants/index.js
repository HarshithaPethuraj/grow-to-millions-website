// ALL SITE CONTENT - edit here only
import {
  BarChart2, TrendingUp, Bot, BrainCircuit, Globe,
  Target, Eye, Zap, Handshake, Star,
  Linkedin, Instagram, Twitter,
} from 'lucide-react'

// Static icon registry — keeps lucide tree-shakeable.
// Adding a new icon? Import it above and add it here.
export const ICON_MAP = {
  BarChart2, TrendingUp, Bot, BrainCircuit, Globe,
  Target, Eye, Zap, Handshake, Star,
  Linkedin, Instagram, Twitter,
}

export const BRAND = {
  name: 'Grow to Millions',
  tagline: 'We Help Brands Grow to Millions',
  subTagline: 'Data-driven digital marketing strategies that scale your business.',
}

export const NAV_LINKS = [
  { label: 'Home',     path: '/'         },
  { label: 'Services', path: '/services' },
  { label: 'About',    path: '/about'    },
  { label: 'Blog',     path: '/blog'     },
  { label: 'Contact',  path: '/contact'  },
]

export const SERVICES = [
  {
    id: 1, icon: 'BarChart2',
    title: 'Paid Ads',
    slug: 'paid-ads',
    description: 'Performance campaigns on Google, Meta & LinkedIn engineered for maximum ROAS, not just impressions.',
    benefits: [
      'Google Ads, Meta & LinkedIn Campaigns',
      'Full-funnel campaign architecture',
      'Creative strategy & copywriting',
      'Conversion tracking & attribution',
      'Weekly optimisation cycles',
    ],
    fullDescription: 'We build paid media campaigns that grow revenue - not just impressions. From audience research to creative, targeting, bidding, and reporting, every decision is tied to your business outcome.',
    color: 'text-red-600', bg: 'bg-red-50',
  },
  {
    id: 2, icon: 'TrendingUp',
    title: 'SEO',
    slug: 'seo',
    description: 'Strategic SEO that goes beyond rankings - building organic revenue engines tied to your goals.',
    benefits: [
      'Technical SEO audits & fixes',
      'Revenue-focused keyword strategy',
      'Content architecture & production',
      'Core Web Vitals optimisation',
      'Monthly performance reporting',
    ],
    fullDescription: 'Our SEO work starts with your revenue model, not a keyword spreadsheet. We map organic growth to business outcomes and build a compounding traffic engine that delivers month after month.',
    color: 'text-accent-600', bg: 'bg-accent-50',
  },
  {
    id: 3, icon: 'Bot',
    title: 'AIO / GEO',
    slug: 'ai-search',
    description: 'Optimize for ChatGPT, Perplexity, and Google SGE - the new frontier of brand discovery.',
    benefits: [
      'AI search visibility audit',
      'Generative Engine Optimisation (GEO)',
      'Entity & knowledge graph optimisation',
      'Authoritative citation building',
      'AI-first content strategy',
    ],
    fullDescription: 'The next generation of search is here. Buyers are discovering brands through AI assistants - and most businesses are invisible. We make sure yours gets cited, recommended, and trusted.',
    color: 'text-violet-600', bg: 'bg-violet-50',
  },
  {
    id: 4, icon: 'BrainCircuit',
    title: 'AI / Data Science',
    slug: 'data-science',
    description: 'Predictive analytics and segmentation that turns raw data into strategic growth decisions.',
    benefits: [
      'Customer segmentation & LTV modelling',
      'Predictive churn & retention models',
      'Marketing mix modelling (MMM)',
      'Attribution & incrementality testing',
      'Growth dashboards & reporting',
    ],
    fullDescription: 'Data without strategy is noise. We build the analytical infrastructure that helps you see what is actually driving growth - and make every marketing decision with confidence.',
    color: 'text-indigo-600', bg: 'bg-indigo-50',
  },
  {
    id: 5, icon: 'Globe',
    title: 'Web & App Services',
    slug: 'web-services',
    description: 'High-performance websites and landing pages built for speed, conversion, and SEO.',
    benefits: [
      'Conversion-first landing pages',
      'Website redesign & development',
      'Page speed & Core Web Vitals',
      'A/B testing infrastructure',
      'CRO & UX optimisation',
    ],
    fullDescription: 'Your website is your most important growth asset. We design and develop high-performance sites that rank, convert, and scale - built with the speed and precision your business deserves.',
    color: 'text-teal-600', bg: 'bg-teal-50',
  },
]

export const POSITIONING_QUESTIONS = [
  'Are you investing in marketing - or actual growth?',
  'Do your campaigns drive revenue, or just reports?',
  'What if your agency actually had skin in the game?',
]

export const STORY = {
  heading: 'Our Story',
  paragraphs: [
    `We didn't start this as just another marketing agency.`,
    `From day one, we built this with one belief - our clients' growth is our growth.`,
    `Because of that, we've always had skin in the game. Every campaign we run, every strategy we build, is tied to real business outcomes - not vanity metrics.`,
    `We've seen too many brands work with vendors who focus on activity instead of impact. That was never the goal here.`,
    `We operate as partners - aligning with your business, your numbers, and your long-term vision.`,
    `That's exactly why our client relationships don't just last - they grow stronger over time.`,
    `For us, it's simple: when you win, we win.`,
  ],
}

export const TESTIMONIALS = [
  {
    id: 1,
    quote: `GTM team has been working with us since day one. I want to give this team a huge shoutout. They have done a very good job.`,
    name: 'Chetan Prakash', role: 'Founder, Estart', initials: 'CP',
  },
  {
    id: 2,
    quote: `The GTM team's strategic execution is second to none. Their reliability and deep focus on business growth impact have made them a trusted partner for QMI. They align with your goals, deliver consistently, and always bring a level of professionalism that moves the needle.`,
    name: 'Indrajit Aurora', role: 'President, QMI', initials: 'IA',
  },
  {
    id: 3,
    quote: `What impressed me most was their clarity of thinking and speed of execution. From day one, the GTM team understood our growth objectives and delivered with precision. Their expertise in growth strategy is exceptional - they don't just plan, they execute.`,
    name: 'Tausif', role: 'Symbiosis University, Dubai', initials: 'T',
  },
]

export const BLOG_POSTS = [
  {
    id: 1,
    title: 'How AI Search is Reshaping SEO in 2026',
    date: 'April 10, 2026', tag: 'AI / GEO',
    tagColor: 'bg-violet-100 text-violet-700',
    description: `ChatGPT, Perplexity, and Google SGE are changing how people discover brands. Here's how to win in the age of AI search.`,
    readTime: '7 min read', slug: '#',
    content: [
      { heading: 'The Shift is Already Here', body: `In 2026, a growing percentage of search journeys don't start on Google - they start on ChatGPT, Perplexity, or Google's own AI Overview. Users are asking conversational questions and trusting AI-generated answers. If your brand isn't being cited by these systems, you're invisible to a fast-growing segment of buyers.` },
      { heading: 'What AI Search Engines Actually Look For', body: `Unlike traditional SEO, AI search engines don't just rank pages - they synthesise information and attribute sources. They favour brands that are consistently mentioned across authoritative domains, have clear topical expertise, and produce content that directly answers specific questions. This is called Generative Engine Optimisation (GEO).` },
      { heading: 'Strategies That Work Right Now', body: `First, build topical authority - publish deep, structured content around your core subject matter. Second, earn mentions on third-party sites like industry publications, review platforms, and podcasts. Third, structure your content with clear headers, definitions, and direct answers. Fourth, optimise your brand's knowledge panel and ensure your entity data is accurate across the web.` },
      { heading: 'The Bottom Line', body: `SEO in 2026 is not dead - it has evolved. Brands that adapt to AI-first discovery will dominate both traditional and AI search results. Those who don't will find their organic traffic quietly eroding. The time to start is now.` },
    ],
  },
  {
    id: 2,
    title: 'The SEO Growth Playbook That Actually Moves Revenue',
    date: 'March 28, 2026', tag: 'SEO',
    tagColor: 'bg-accent-100 text-accent-700',
    description: `Most SEO advice optimises for rankings. We optimise for revenue. Here's our exact framework for connecting organic growth to business outcomes.`,
    readTime: '9 min read', slug: '#',
    content: [
      { heading: 'Rankings Are a Vanity Metric', body: `Every agency will show you a graph of keywords climbing. Very few will show you a graph of revenue climbing alongside them. The uncomfortable truth is that ranking #1 for the wrong keyword generates zero business value.` },
      { heading: 'Step 1 - Revenue Keyword Mapping', body: `We reverse-engineer from your CRM. Which deals closed came from organic search? What did those prospects search before they found you? We build keyword clusters around buyer intent - not just search volume.` },
      { heading: 'Step 2 - Conversion-First Content', body: `Content should do two jobs: rank and convert. We build pages with a clear structure - problem, solution, proof, CTA - and test headlines, formats and CTAs continuously.` },
      { heading: 'Step 3 - The Authority Engine', body: `Sustainable SEO requires domain authority. We run targeted digital PR and link-building campaigns focused on placements that move the needle - not mass outreach to irrelevant directories.` },
      { heading: 'Tying It Back to Revenue', body: `Every month, we map organic sessions to leads to pipeline to closed revenue. When a client can see that their SEO investment generated real pipeline, the conversation changes. That's the playbook.` },
    ],
  },
  {
    id: 3,
    title: `Why Your Paid Ads Are Profitable But Your Business Isn't Growing`,
    date: 'March 14, 2026', tag: 'Paid Ads',
    tagColor: 'bg-orange-100 text-orange-700',
    description: `A profitable ROAS doesn't always mean business growth. We break down full-funnel thinking that separates great paid media from great marketing.`,
    readTime: '8 min read', slug: '#',
    content: [
      { heading: 'The ROAS Trap', body: `A 4x ROAS looks great on a dashboard. But if your customer acquisition cost is rising, your repeat purchase rate is flat, and your brand awareness hasn't moved - you're running on a treadmill.` },
      { heading: 'What ROAS Doesn\'t Measure', body: `ROAS doesn't account for customer lifetime value, brand equity, or market saturation. We've seen brands achieving 6x ROAS on campaigns that were almost entirely capturing demand they had already built through other channels.` },
      { heading: 'Full-Funnel Paid Strategy', body: `Great paid media works across all three funnel stages. At the top, awareness campaigns build brand familiarity. At the mid-funnel, retargeting converts consideration. At the bottom, direct response campaigns close.` },
      { heading: 'Metrics That Actually Matter', body: `We track blended CAC, LTV to CAC ratio, new vs returning customer revenue, and market share metrics. When these trend in the right direction, your business is growing - not just your ad account.` },
      { heading: 'The Fix', body: `Allocate 20 to 30% of your paid budget to top-of-funnel brand building. Be patient - results show up in 3 to 6 months. Measure success by pipeline growth, not just immediate ROAS.` },
    ],
  },
]

export const CONTACT = {
  // TODO: replace with your real domain inbox before launch.
  // A personal Gmail in production undermines the brand on every page.
  email: 'hello@growtomillions.com',
  phone: '+91 8778002107',
  API_CONTACT:       'https://formspree.io/f/xqewlzdj',
  API_NEWSLETTER:    'https://formspree.io/f/xvzdqpwa',
  API_QUESTIONNAIRE: 'https://formspree.io/f/mbdqkrza',
}

export const SOCIAL_LINKS = [
  // TODO: replace href with your real profile URLs.
  { label: 'LinkedIn',  icon: 'Linkedin',  href: 'https://www.linkedin.com/company/grow-to-millions' },
  { label: 'Instagram', icon: 'Instagram', href: 'https://www.instagram.com/growtomillions' },
  { label: 'Twitter',   icon: 'Twitter',   href: 'https://twitter.com/growtomillions' },
]
