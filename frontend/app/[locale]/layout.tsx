import '../globals.css'
import { Locale } from 'next-intl'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { getMessages } from 'next-intl/server'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import { Lato, Josefin_Sans } from 'next/font/google'
import { draftMode } from 'next/headers'
import { toPlainText } from 'next-sanity'
import { VisualEditing } from 'next-sanity/visual-editing'
import { Toaster } from 'sonner'

import DraftModeToast from '@/app/components/DraftModeToast'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import * as demo from '@/sanity/lib/demo'
import { NextIntlClientProvider } from 'next-intl'
import { sanityFetch, SanityLive } from '@/sanity/lib/live'
import { settingsQuery } from '@/sanity/lib/queries'
import { resolveMetadataImage } from '@/sanity/lib/utils'
import { handleError } from '@/app/client-utils'
import ClientProvider from '../providers/ClientProvider'
import { AppProvider } from './provider'

/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */

interface PageProps {
  params: Promise<{ slug?: string, locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;

  const { data: settings } = await sanityFetch({
    query: settingsQuery,
    // Metadata should never contain stega
    stega: false,
  })

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  const title = settings?.title[resolvedParams?.locale as 'en' | 'es'] || demo.title
  const description = settings?.description[resolvedParams?.locale as 'en' | 'es'] || demo.description

  const ogImage = resolveMetadataImage(settings?.ogImage)

  return {
    metadataBase: new URL(baseUrl),
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: toPlainText(description),
    openGraph: {
      description: toPlainText(description),
      url: `${baseUrl}/${resolvedParams.locale === 'en' ? 'en/' : ''}`,
      siteName: title,
      images: [ogImage],
      locale: resolvedParams.locale === 'es' ? 'es_ES' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: toPlainText(description),
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
      <body>
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
