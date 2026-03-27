import { Suspense } from 'react'
import { AllProjects } from '@/app/components/Projects'
import { Metadata } from 'next'
import { ProjectGridSuspense } from '@/app/components/SuspenseProjects';
import { sanityFetch } from "@/sanity/lib/live"
import { metadataPageQuery } from '@/sanity/lib/queries'
import { resolveMetadataImage } from '@/sanity/lib/utils'

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params
    const slug = 'portafolio'

    const { data } = await sanityFetch({
        query: metadataPageQuery,
        params: { slug, locale },
        stega: false
    })

    const { page, settings } = data

    const title = page?.title || 'Portafolio'
    const description = page?.description || 'Nuestro portafolio de proyectos'
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

export default async function ProyectosPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;

    return (
        <div className="container mx-auto px-4 pt-10 pb-50 min-h-screen">
            <div className="flex flex-col w-full max-w-[1700px] mx-auto">
                <Suspense fallback={<ProjectGridSuspense />}>
                    <AllProjects locale={locale} />
                </Suspense>
            </div>
        </div>
    )
}
