import { Suspense } from 'react'
import { Metadata } from 'next'
import { sanityFetch } from "@/sanity/lib/live"
import { metadataPageQuery, siteVisitsQuery } from '@/sanity/lib/queries'
import { resolveMetadataImage } from '@/sanity/lib/utils'
import SiteVisitGallery from '@/app/components/SiteVisitGallery'
import { fetchSiteVisits } from '@/app/actions'

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params
    const slug = 'direccion-de-obra'

    const { data } = await sanityFetch({
        query: metadataPageQuery,
        params: { slug, locale },
        stega: false
    })

    const { page, settings } = data

    const title = page?.title || 'Dirección de Obra'
    const description = page?.description || 'Seguimiento y dirección de nuestros proyectos en obra.'
    const siteTitle = settings?.siteTitle || 'Femsite'
    const ogImage = resolveMetadataImage(page?.ogImage || settings?.ogImage)

    return {
        title: {
            template: `%s | ${siteTitle}`,
            default: title,
        },
        description: description,
        openGraph: {
            title: title,
            description: description,
            images: [ogImage],
            locale: locale === 'es' ? 'es_ES' : 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: title,
            description: description,
            images: [ogImage.url],
        },
    }
}

export default async function DireccionDeObraPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;

    const slug = 'direccion-de-obra'

    const { data } = await sanityFetch({
        query: metadataPageQuery,
        params: { slug, locale },
        stega: false
    })

    // Carga inicial de datos (página 0)
    const { data: initialData } = await sanityFetch({
        query: siteVisitsQuery,
        params: { start: 0, end: 10, locale: locale }
    })

    return (
        <main className="container mx-auto px-4 pt-20 pb-20 min-h-screen">
            <div className="flex flex-col w-full max-w-[1700px] mx-auto gap-10">
                <header className="flex flex-col gap-5 ">
                    <h1 className="text-4xl font-bold tracking-wider text-[var(--primary)] uppercase">
                        {data.page?.title}
                    </h1>
                    <p className="text-md lg:text-lg text-zinc-500">
                        {data?.page?.description}
                    </p>
                </header>

                <Suspense fallback={<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 animate-pulse">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="bg-zinc-100 rounded-lg h-60"></div>
                    ))}
                </div>}>
                    <SiteVisitGallery
                        initialData={initialData}
                        locale={locale}
                        fetchMore={fetchSiteVisits}
                    />
                </Suspense>
            </div>
        </main>
    )
}
