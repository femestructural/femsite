import { Metadata } from 'next'
import { sanityFetch } from "@/sanity/lib/live"
import { metadataPageQuery } from '@/sanity/lib/queries'
import { resolveMetadataImage } from '@/sanity/lib/utils'
import { StatsSection } from '@/app/components/StatsSection';
import { HeroAbout } from '@/app/sections/HeroAbout';
import { Philosophy } from '@/app/sections/Philosophy';
import { MissionAndVission } from '@/app/sections/MissionAndVission';
import { TeamSection } from '@/app/sections/Team';
import { FooterAbout } from '@/app/sections/FooterAbout';


export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params
    const slug = 'nosotros'

    const { data } = await sanityFetch({
        query: metadataPageQuery,
        params: { slug, locale },
        stega: false
    })

    const { page, settings } = data

    const title = page?.title || 'Nosotros'
    const description = page?.description || 'Sobre nosotros'
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

interface PageProps {
    params: Promise<{ slug?: string, locale: string }>
}


export default async function AboutPage({ params }: PageProps) {

    const { locale } = await params;

    return (
        <div className='w-full bg-[var(--background)]'>

            <HeroAbout />

            <StatsSection />

            <Philosophy />

            <MissionAndVission />

            <TeamSection locale={locale} />

            <FooterAbout />

        </div >
    )
}
