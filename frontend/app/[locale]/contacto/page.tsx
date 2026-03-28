import { Metadata } from 'next'
import { ContactMap, EmbebedMap } from '@/app/sections/Map'
import { sanityFetch } from "@/sanity/lib/live"
import { metadataPageQuery } from '@/sanity/lib/queries'
import { resolveMetadataImage } from '@/sanity/lib/utils'
import { ContactForm } from '@/app/components/ContactForm'
import { getTranslations } from 'next-intl/server'
import Button from '@/app/components/Button'
import Link from 'next/link'
import { icons } from '@/public/icons/react-icons'

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params
    const slug = 'contacto'

    const { data } = await sanityFetch({
        query: metadataPageQuery,
        params: { slug, locale },
        stega: false
    })

    const { page, settings } = data

    const title = page?.title || 'Contacto'
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

    const slug = 'contacto'

    const { data } = await sanityFetch({
        query: metadataPageQuery,
        params: { slug, locale },
        stega: false
    })

    const translate = await getTranslations('CTAs');

    const pohone = '525577828470'
    const message = translate('contactMessage')

    const formatMessage = (msg: string) => `https://wa.me/${pohone}?text=${encodeURIComponent(msg)}`

    return (
        <main className="bg-white px-4 pt-20 pb-0 min-h-screen">
            <div className="flex flex-col w-full justify-center items-center mx-auto gap-10">
                <header className="flex flex-col gap-5 lg:text-center max-w-[1700px] mx-auto">
                    <h1 className=" text-2xl lg:text-4xl font-bold tracking-wider uppercase">
                        {data.page?.title}
                    </h1>
                    <p className="text-sm lg:text-lg">
                        {data.page?.description}
                    </p>
                </header>

                <ContactForm />

                {/* <div className='flex flex-col gap-10 text-center w-full items-center' >
                    <span>Or</span>
                    <Button className="border border-1 border-white" >
                        <Link
                            target={'_blank'}
                            rel={'noopener noreferrer'}
                            className="flex flex-row items-center gap-2" href={formatMessage(message)} >
                            <span>{translate('meeting')}</span>
                            <icons.whatsapp />
                        </Link>
                    </Button>
                </div> */}

                <EmbebedMap />


            </div>
        </main>
    )
}
