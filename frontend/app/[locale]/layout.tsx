import '../globals.css'
import { Locale } from 'next-intl'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { getMessages } from 'next-intl/server'
import { Lato, Josefin_Sans } from 'next/font/google'
import { draftMode } from 'next/headers'
import { VisualEditing } from 'next-sanity/visual-editing'
import { Toaster } from 'sonner'
import DraftModeToast from '@/app/components/DraftModeToast'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { NextIntlClientProvider } from 'next-intl'
import { sanityFetch, SanityLive } from '@/sanity/lib/live'
import { metadataPageQuery, settingsQuery } from '@/sanity/lib/queries'
import { resolveMetadataImage } from '@/sanity/lib/utils'
import { handleError } from '@/app/client-utils'
import ClientProvider from '../providers/ClientProvider'
import { AppProvider } from './provider'
import { Analytics } from "@vercel/analytics/next"

/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "FEM Estructural",
  "url": "https://femestructural.com.mx",
  "telephone": "+523312150893",
  "openingHours": "Mo-Su 00:00-23:59",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Guadalajara",
    "addressRegion": "Jalisco",
    "addressCountry": "MX"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 20.6727978,
    "longitude": -103.4156747
  },
  "sameAs": [
    "https://maps.google.com/?cid=TU_CID"
  ]
}

interface PageProps {
  params: Promise<{ slug?: string, locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {

  const { locale } = await params
  const slug = 'inicio'

  const { data } = await sanityFetch({
    query: metadataPageQuery,
    params: { slug, locale },
    stega: false
  })

  const { page, settings } = data


  const ogImage = resolveMetadataImage(settings?.ogImage)

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
    title: {
      template: `%s | ${page?.title || 'FEM'}`,
      default: 'FEM',
    },
    description: page?.description || 'Femsite',
    openGraph: {
      description: page?.description || '',
      url: `${baseUrl}/${locale === 'en' ? 'en/' : ''}`,
      siteName: page?.description || '',
      images: [ogImage],
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: page?.title || 'FEM',
      description: page?.description || '',
      images: [ogImage.url],
    },
    icons: {
      icon: 'https://res.cloudinary.com/ditwfi7c9/image/upload/v1756680554/FEM-LOGO-SIMPLE_songzr.svg',
      shortcut: 'https://res.cloudinary.com/ditwfi7c9/image/upload/v1756680554/FEM-LOGO-SIMPLE_songzr.svg',
      apple: 'https://res.cloudinary.com/ditwfi7c9/image/upload/v1756680554/FEM-LOGO-SIMPLE_songzr.svg',
    }
  }
}

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['100', '300', '400', '700']
})

const josefin_sans = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin-sans',
  weight: ['100', '300', '400', '700']
})

export default async function RootLayout({ children, params }: { children: React.ReactNode, params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const { isEnabled: isDraftMode } = await draftMode()
  const messages = await getMessages()


  return (
    <html lang={locale}
      className={`${lato.variable} ${josefin_sans.variable} scroll-smooth`}
    >
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <Analytics />
        <AppProvider>
          <NextIntlClientProvider messages={messages} >
            <section className="min-h-screen">
              {/* The <Toaster> component is responsible for rendering toast notifications used in /app/client-utils.ts and /app/components/DraftModeToast.tsx */}
              <Toaster />
              {isDraftMode && (
                <>
                  <DraftModeToast />
                  {/*  Enable Visual Editing, only to be rendered when Draft Mode is enabled */}
                  <VisualEditing />
                </>
              )}
              {/* The <SanityLive> component is responsible for making all sanityFetch calls in your application live, so should always be rendered. */}
              <SanityLive onError={handleError} />
              <Header locale={locale} />
              <ClientProvider>
                {children}
              </ClientProvider>
              <Footer />
            </section>
            <SpeedInsights />
          </NextIntlClientProvider>
        </AppProvider>
      </body>
    </html>
  )
}
