'use client'

import { Project } from '@/src/types/project'
import ButtonLink from './ButtonLnk'
import ImageWithLoader from './ImageWhitLoader'

interface ProjectCardProps {
    project: Project
    locale: 'en' | 'es'
    portfolioRoute: string
    className?: string
}

export default function ProjectCard({ project, locale, portfolioRoute, className = '' }: ProjectCardProps) {

    const title = project.title[locale] || project.title.es
    const category = project.category[locale] || project.category.es
    const location = project.location[locale] || project.location.es

    const href = `${portfolioRoute}/${project.slug.current}`

    // Obtener la imagen principal del proyecto
    const mainImage = project.project_cover_image || 'https://res.cloudinary.com/ditwfi7c9/image/upload/v1758097988/00_PORTADA-PORTAFOLIO_lv80ge.jpg'

    return (
        <ButtonLink
            href={href}
            lang={locale}
            className={`h-[70dvh] lg:h-full shadow-md border-1 border-zinc-300  ${className}`}
        >
            <picture className='relative' >
                <ImageWithLoader
                    src={mainImage}
                    alt={title}
                    fill={false}
                    width={300}
                    height={300}
                    className='img-filter-scalegray object-cover w-full h-[calc(100%-110px)]'
                />
                <figcaption className='flex flex-col gap-1 md:gap-2 bg-white w-full h-[110px] py-2 justify-center px-4'>
                    <small className='text-xs lg:text-sm tracking-widest uppercase'>{category}</small>
                    <span className='font-semibold capitalize'>{title} | {location}</span>
                </figcaption>
            </picture>
        </ButtonLink>
    )
}