import { MetadataRoute } from 'next'
import { locales } from '../../i18n/routing'

const baseUrl = 'https://arvexalabs.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/services', '/pricing', '/contact', '/portfolio', '/legal/privacy-policy', '/legal/terms-of-service']
  
  const sitemapEntries: MetadataRoute.Sitemap = []

  routes.forEach((route) => {
    locales.forEach((locale) => {
      const url = `${baseUrl}/${locale}${route}`
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1.0 : 0.8,
        // Alternates for multi-language SEO (Hreflang)
        /* @ts-ignore - Next.js sitemap type handles this but sometimes TS complains */
        alternates: {
          languages: locales.reduce((acc, l) => {
            acc[l] = `${baseUrl}/${l}${route}`
            return acc
          }, {} as Record<string, string>),
        },
      })
    })
  })

  return sitemapEntries
}
