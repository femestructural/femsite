'use client'

import ButtonLink from './ButtonLnk'
import ImageWithLoader from './ImageWithLoader'

interface ProjectCardProps {
    project: any
    locale: 'en' | 'es'
    portfolioRoute: string
    className?: string
}

export default function ProjectCard({ project, locale, portfolioRoute, className = '' }: ProjectCardProps) {

    // Extraemos los campos que ya vienen traducidos por la consulta GROQ
    const title = project.title
    const category = project.category
    const location = project.location

    // El slug ahora es un string plano en los resultados optimizados
    const href = `${portfolioRoute}/${project.slug}`

    // Obtener la imagen principal del proyecto (portfolio_image es el nombre correcto en el esquema)
    const mainImage = project.portfolio_image || 'https://res.cloudinary.com/ditwfi7c9/image/upload/v1758097988/00_PORTADA-PORTAFOLIO_lv80ge.jpg'

    return (
        <ButtonLink
            href={href}
            className={`h-[70dvh] lg:h-full shadow-md border-1 border-zinc-300  ${className}`}
        >
            <picture className='relative' >
                <ImageWithLoader
                    src={mainImage}
                    alt={title || 'Project image'}
                    fill={false}
                    width={500}
                    height={500}
                    className='img-filter-scalegray object-cover w-full h-[calc(100%-110px)]'
                />
                <figcaption className='flex flex-col gap-1 md:gap-2 bg-white w-full h-[110px] py-2 justify-center px-4'>
                    <small className='text-xs lg:text-sm tracking-widest uppercase'>{category}</small>
                    <span className='font-semibold capitalize'>{title} {location && `| ${location}`}</span>
                </figcaption>
            </picture>
        </ButtonLink>
    )
}