'use client'

import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import ImageWithLoader from './ImageWithLoader'
import ButtonLink from './ButtonLnk'
import { icons } from '@/public/icons/react-icons'
import { SiteVisitsQueryResult } from '@/sanity.types'

interface Props {
    initialData: SiteVisitsQueryResult
    locale: string
    // Función para cargar más datos (Server Action o API Route)
    fetchMore: (start: number, end: number, locale: string) => Promise<SiteVisitsQueryResult>
}

const SPAN_MAP: Record<string, string> = {
    '1': 'col-span-1 md:col-span-2  lg:col-span-1 row-span-1',
    '2': 'col-span-1 md:col-span-2  lg:col-span-2 row-span-1',
    'large': 'col-span-1 md:col-span-2  lg:col-span-3 row-span-1',
}

export default function SiteVisitGallery({ initialData, locale, fetchMore }: Props) {
    const [items, setItems] = useState<NonNullable<SiteVisitsQueryResult>>(initialData || [])
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(initialData?.length ? initialData.length >= 10 : false)
    const [loading, setLoading] = useState(false)

    const { ref, inView } = useInView({
        threshold: 0,
        rootMargin: '400px',
    })

    const ITEMS_PER_PAGE = 10

    useEffect(() => {
        if (inView && hasMore && !loading) {
            loadMoreItems()
        }
    }, [inView, hasMore, loading])

    const loadMoreItems = async () => {
        setLoading(true)
        const start = page * ITEMS_PER_PAGE
        const end = start + ITEMS_PER_PAGE
        
        try {
            const newItems = await fetchMore(start, end, locale)
            
            if (!newItems || newItems.length < ITEMS_PER_PAGE) {
                setHasMore(false)
            }
            
            if (newItems && newItems.length > 0) {
                // Evitamos duplicados por si acaso comparando IDs
                setItems((prev) => {
                    const existingIds = new Set(prev.map(item => item.id))
                    const filteredNew = newItems.filter(item => !existingIds.has(item.id))
                    return [...prev, ...filteredNew]
                })
                setPage((prev) => prev + 1)
            }
        } catch (error) {
            console.error('Error fetching more site visits:', error)
        } finally {
            setLoading(false)
        }
    }

    // Helper para manejar el tipado inconsistente de Sanity en campos localizados
    const getText = (value: any): string | null => {
        if (!value) return null
        if (typeof value === 'string') return value
        // Si por alguna razón viene el objeto completo o un array debido a un error de tipado
        if (Array.isArray(value) && value.length > 0) return value[0] as unknown as string
        return null
    }

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[70dvh] gap-4">
                {items.map((item) => {
                    const projectTitle = getText(item.projectTitle)
                    const caption = getText(item.caption)
                    const gridSpanClass = item.gridSpan ? (SPAN_MAP[item.gridSpan] || SPAN_MAP['1']) : SPAN_MAP['1']

                    return (
                        <div
                            key={item.id}
                            className={`relative group overflow-hidden bg-zinc-100 border-1 border-zinc-300  ${gridSpanClass}`}
                        >
                            {item.photoUrl && (
                                <ImageWithLoader
                                    src={item.photoUrl}
                                    alt={caption || projectTitle || 'Visita de obra'}
                                    fill={true}
                                    className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                                />
                            )}

                            {/* Overlay con información */}
                            <div className="absolute inset-0 flex flex-col justify-end ">
                                <div className="flex flex-row items-center justify-between w-full gap-3 bg-white p-5">
                                    <div className="flex flex-col gap-1">
                                        {projectTitle && (
                                            <span className="text-sm uppercase tracking-widest font-bold text-primary">
                                                {projectTitle}
                                            </span>
                                        )}
                                        {caption && (
                                            <p className="text-sm font-medium line-clamp-2">
                                                {caption}
                                            </p>
                                        )}
                                    </div>

                                    {item.projectSlug && (
                                        <ButtonLink
                                            href={`/portafolio/${item.projectSlug}`}
                                            text="Ver Proyecto"
                                            className="w-fit text-[10px] uppercase tracking-wider border border-white/30 px-3 py-1.5 hover:bg-white hover:text-black transition-all flex items-center gap-2"
                                            icon={<icons.arrow_forward size={12} />}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Elemento centinela para Infinite Scroll */}
            {hasMore && (
                <div ref={ref} className="w-full flex justify-center py-10">
                    {loading && (
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    )}
                </div>
            )}
        </div>
    )
}
