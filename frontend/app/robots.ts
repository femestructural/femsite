import { MetadataRoute } from 'next'
import { headers } from 'next/headers'

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers()
  const host = headersList.get('host') || 'www.femestructural.com.mx'
  const protocol = host.includes('localhost') ? 'http' : 'https'
  const baseUrl = `${protocol}://${host}`

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/', // Evita que se indexen las rutas de la API
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
