'use client'

import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import Button from './Button'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


interface PaginationProps {
    currentPage: number
    totalPages: number
    hasNextPage: boolean
    hasPreviousPage: boolean
}

export default function Pagination({ currentPage, totalPages, hasNextPage, hasPreviousPage }: PaginationProps) {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const router = useRouter()

    const createPageURL = (pageNumber: number) => {
        const params = new URLSearchParams(searchParams)
        params.set('page', pageNumber.toString())
        return `${pathname}?${params.toString()}`
    }

    const handlePageChange = (pageNumber: number) => {
        router.push(createPageURL(pageNumber))
    }

    // Generar array de páginas para mostrar
    const getPageNumbers = () => {
        const delta = 2 // Número de páginas a mostrar a cada lado de la página actual
        const range = []
        const rangeWithDots = []

        for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
            range.push(i)
        }

        if (currentPage - delta > 2) {
            rangeWithDots.push(1, '...')
        } else {
            rangeWithDots.push(1)
        }

        rangeWithDots.push(...range)

        if (currentPage + delta < totalPages - 1) {
            rangeWithDots.push('...', totalPages)
        } else if (totalPages > 1) {
            rangeWithDots.push(totalPages)
        }

        return rangeWithDots
    }

    if (totalPages <= 1) return null

    return (
        <div className="flex justify-center items-center space-x-2 mt-8">
            {/* Botón anterior */}
            <Button
                variant="secondary"
                size="small"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={!hasPreviousPage}
                className="flex items-center space-x-1 border border-gray-300"
            >
                <FaChevronLeft className="w-4 h-4" />
                <span>Anterior</span>
            </Button>

            {/* Números de página */}
            <div className="flex space-x-1">
                {getPageNumbers().map((pageNumber, index) => (
                    <div key={index}>
                        {pageNumber === '...' ? (
                            <span className="px-3 py-1 text-gray-500">...</span>
                        ) : (
                            <Button
                                variant={currentPage === pageNumber ? "primary" : "secondary"}
                                size="small"
                                onClick={() => handlePageChange(pageNumber as number)}
                                className="min-w-[40px] border border-gray-300"
                            >
                                {pageNumber}
                            </Button>
                        )}
                    </div>
                ))}
            </div>

            {/* Botón siguiente */}
            <Button
                variant="secondary"
                size="small"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={!hasNextPage}
                className="flex items-center space-x-1 border border-gray-300"
            >
                <span>Siguiente</span>
                <FaChevronRight className="w-4 h-4" />
            </Button>
        </div>
    )
}