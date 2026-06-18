import Head from 'next/head'
import siteConfig from '../../lib/siteConfig'

export default function Meta({ title, description, path = '' }) {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  const metaDescription = description || siteConfig.description
  const url = `${siteConfig.url}${path}`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={url} />
      <link rel="canonical" href={url} />
    </Head>
  )
}

