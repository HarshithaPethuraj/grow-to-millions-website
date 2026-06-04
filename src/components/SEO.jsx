import { Helmet } from 'react-helmet-async'

// CHANGE THIS to your real production domain when you deploy.
export const SITE_URL = 'https://growtomillions.com'
export const SITE_NAME = 'Grow to Millions'
export const DEFAULT_TITLE = 'Grow to Millions | Strategic Growth Partner'
export const DEFAULT_DESC =
  'Performance marketing and SEO agency for ambitious brands. We tie every campaign to revenue — paid ads, SEO, AI search, data science, and conversion-first web.'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`

/**
 * Per-route SEO. Pass `path` (e.g. "/services/seo") so canonical and OG
 * URLs match the actual route. `jsonLd` is an object that gets serialized
 * into a <script type="application/ld+json"> tag.
 */
export default function SEO({
  title,
  description = DEFAULT_DESC,
  path = '/',
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  jsonLd,
  noIndex = false,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE
  const url = `${SITE_URL}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  )
}

// Common JSON-LD payloads
export const ORG_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  sameAs: [
    'https://www.linkedin.com/company/grow-to-millions',
    'https://www.instagram.com/growtomillions',
    'https://twitter.com/growtomillions',
  ],
}

export function serviceJsonLd({ name, description, slug }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    url: `${SITE_URL}/services/${slug}`,
  }
}

export function articleJsonLd({ title, description, date, slug }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    datePublished: date,
    author: { '@type': 'Organization', name: SITE_NAME },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${slug}`,
  }
}
