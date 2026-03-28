import { Metadata } from 'next'
import { Suspense } from 'react'
import { sanityFetch } from "@/sanity/lib/live"
import { resolveMetadataImage } from '@/sanity/lib/utils'
import { metadataProjectQuery, projectQuery } from '@/sanity/lib/queries'
import { icons } from '@/public/icons/react-icons'
import { getTranslations } from 'next-intl/server'
import ImageWithLoader from '@/app/components/ImageWithLoader'
import ButtonLink from '@/app/components/ButtonLnk'
import { Tab, Tabs } from '@/app/components/Tabs'
import { ProjectGridInfo } from '@/app/components/ProjectGridInfo'
import { ProjectGridGallery } from '@/app/components/ProjectGridGallery'
import ModelViewer from '@/app/components/Model3d'
import { MoreProjects } from '@/app/components/Projects'

interface Props {
    params: Promise<{ slug: string, locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug, locale } = await params;

    const { data } = await sanityFetch({
        query: metadataProjectQuery,
        params: { slug, locale }
    })

    const project = data?.project
    const settings = data?.settings

    if (!project) return { title: 'Proyecto no encontrado' }

    // 1. LÓGICA DE FALLBACK PARA LA IMAGEN
    // Prioridad: ogImage del proyecto (si la añades luego) > portfolio_image (Cloudinary) > ogImage global
    const rawImage = project.ogImage || project.portfolio_image || settings?.ogImage
    const ogImage = resolveMetadataImage(rawImage)

    // 2. LÓGICA PARA TEXTOS
    const siteTitle = project.title?.toUpperCase() || 'Proyecto'
    const finalTitle = project.title?.toUpperCase() || 'Proyecto'
    const description = project.story?.[0]?.[locale as 'en' | 'es'] || `Proyecto ${siteTitle}`

    return {
        title: {
            template: `%s | ${finalTitle}`,
            default: siteTitle,
        },
        description: description,
        openGraph: {
            title: `${siteTitle}`,
            description: description,
            images: [ogImage],
            locale: locale === 'es' ? 'es_ES' : 'en_US',
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${siteTitle}`,
            description: description,
            images: [ogImage.url],
        },
    }
}

// Implementación básica del componente ProjectPage
export default async function ProjectPage({ params }: Props) {
    const { slug, locale } = await params;

    const { data: project } = await sanityFetch({
        query: projectQuery,
        params: { slug, locale }
    })

    const translate = await getTranslations('CTAs')

    if (!project) return <div>Proyecto no encontrado</div>

    return (
        <>

            <section className='flex flex-col justify-center items-center min-h-[calc(100dvh-76px)] relative bottom-15'>

                <ImageWithLoader
                    fill={true}
                    className='z-1'
                    WithContainer
                    alt={project.slug}
                    src={project.project_page_image}
                />

                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 2,
                    backgroundImage: `linear-gradient(to top, var(--primary), var(--logo-shadow),  var(--primary))`,
                }}
                />

                <div className='hidden lg:flex flex-row items-center w-full gap-4 justify-between px-10 absolute bottom-10 z-3' >
                    <div className='flex flex-col gap-2 ' >
                        <span className='text-[var(--header-text)] uppercase tracking-widest text-sm' >{project.category}</span>
                        <h1 className='text-[var(--header-text)] capitalize font-semibold text-2xl' >{project.title} | {project.location}</h1>
                    </div>

                    <div className='flex h-[60px] items-end' >
                        <ButtonLink
                            href={`/portafolio`}
                            text={translate('BackPortfolio')}
                            className='w-fit h-fit text-white hover:text-white/80 transition-colors flex border border-white px-[16px] py-2 flex-row-reverse items-center gap-4'
                            icon={<icons.arrow_back />}
                        />
                    </div>
                </div>

                <div className='flex lg:hidden flex-col items-center w-full gap-10 justify-between px-4 md:px-10 my-auto z-3' >

                    <div className='flex flex-col gap-2 items-center' >
                        <span className='text-[var(--header-text)] uppercase tracking-widest text-sm text-center' >{project.category}</span>
                        <h1 className='text-[var(--header-text)] capitalize font-semibold text-xl md:text-2xl text-center' >{project.title}</h1>
                        <h1 className='text-[var(--header-text)] capitalize font-semibold text-xl md:text-2xl text-center' >{project.location}</h1>
                    </div>

                </div>

                <ButtonLink
                    href={`/portafolio`}
                    className='flex lg:hidden absolute top-20 right-2 text-white z-3 border-0!'
                >
                    <icons.arrow_back size={20} />
                </ButtonLink>

            </section>

            <section className='flex flex-col gap-10 mt-10 mx-auto w-full max-w-[1600px]  h-full' >
                <Tabs>
                    <Tab id="info" label='información' iconLabel={<icons.info />} >
                        <ProjectGridInfo project={project} locale={locale} />
                    </Tab>
                    <Tab id="galery" label='galería' iconLabel={<icons.image />} >
                        <ProjectGridGallery project={project} locale={locale} />
                    </Tab>
                    <Tab id="model" label='modelo 3D' iconLabel={<icons.rotation3d />} >
                        <section className='w-full md:w-[80%] h-[70dvh] md:h-[80dvh] md:mx-auto mb-5 lg:mb-20 shadow-md border-1 border-zinc-200 rounded-sm hover:cursor-move' >
                            {project.model3d_url ? (
                                <ModelViewer url={project.model3d_url} />
                            ) : (
                                <div className='flex h-full w-full items-center justify-center'>
                                    <span className='text-sm text-zinc-500'>Modelo 3D no disponible</span>
                                </div>
                            )}
                        </section>
                    </Tab>
                </Tabs>
            </section>

            <div className='bg-zinc-100 ' >
                <section className='flex flex-col gap-10 justify-center items-start w-full max-w-[1600px] mx-auto px-0 lg:px-5 pt-10 pb-10 lg:pb-20' >
                    <Suspense
                        fallback={<div className="w-full h-40 bg-zinc-100 animate-pulse" />}
                    >
                        <MoreProjects skip={project._id} locale={locale} limit={3} />
                    </Suspense>
                </section>
            </div>


        </>
    )
}