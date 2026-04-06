import {MetadataRoute} from 'next'
import {sanityFetch} from '@/sanity/lib/live'
import {sitemapData} from '@/sanity/lib/queries'
import {headers} from 'next/headers'
import {routing} from '@/i18n/routing'

/**
 * Generates a sitemap.xml for the application.
 * Handles multiple locales and translated pathnames.
 */

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allPostsPagesAndProjects = await sanityFetch({
    query: sitemapData,
  })

  const headersList = await headers()
  const host = headersList.get('host') || 'www.femestructural.com.mx'
  const protocol = host.includes('localhost') ? 'http' : 'https'
  const baseUrl = `${protocol}://${host}`

  const locales = routing.locales
  const defaultLocale = routing.defaultLocale

  // 1. Static Routes from routing configuration
  const staticRoutes = Object.keys(routing.pathnames).map((path) => {
    const translations = routing.pathnames[path as keyof typeof routing.pathnames]
    
    // If it's a string (like '/'), use it for all locales. If it's an object, use the translations.
    const getPathForLocale = (locale: string) => {
      if (typeof translations === 'string') return translations
      return (translations as any)[locale] || path
    }

    return {
      url: `${baseUrl}/${defaultLocale}${getPathForLocale(defaultLocale)}`.replace(/\/$/, ''),
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: path === '/' ? 1.0 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((locale) => [
            locale,
            `${baseUrl}/${locale}${getPathForLocale(locale)}`.replace(/\/$/, ''),
          ])
        ),
      },
    }
  })

  // 2. Dynamic Routes from Sanity (Pages, Posts, Projects)
  const dynamicRoutes: MetadataRoute.Sitemap = []

  if (allPostsPagesAndProjects?.data) {
    for (const item of allPostsPagesAndProjects.data) {
      let priority = 0.5
      let changeFrequency: 'monthly' | 'weekly' = 'monthly'
      let routePrefix = ''

      switch (item._type) {
        case 'page':
          priority = 0.7
          routePrefix = '' // Direct under locale
          break
        case 'project':
          priority = 0.9
          changeFrequency = 'weekly'
          // Projects live under /portafolio (es) or /portfolio (en)
          break
      }

      // Special handling for projects since the parent path is translated
      if (item._type === 'project') {
        const portfolioPathEs = (routing.pathnames['/portafolio'] as any).es
        const portfolioPathEn = (routing.pathnames['/portafolio'] as any).en

        dynamicRoutes.push({
          url: `${baseUrl}/es${portfolioPathEs}/${item.slug}`,
          lastModified: item._updatedAt || new Date(),
          priority,
          changeFrequency,
          alternates: {
            languages: {
              es: `${baseUrl}/es${portfolioPathEs}/${item.slug}`,
              en: `${baseUrl}/en${portfolioPathEn}/${item.slug}`,
            },
          },
        })
      } else {
        dynamicRoutes.push({
          url: `${baseUrl}/${defaultLocale}${routePrefix}/${item.slug}`,
          lastModified: item._updatedAt || new Date(),
          priority,
          changeFrequency,
          alternates: {
            languages: Object.fromEntries(
              locales.map((locale) => [
                locale,
                `${baseUrl}/${locale}${routePrefix}/${item.slug}`,
              ])
            ),
          },
        })
      }
    }
  }

  return [...staticRoutes, ...dynamicRoutes]
}
