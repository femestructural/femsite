'use client'

import { Project } from '@/src/types/project'
import ProjectGrid from './ProjectGrid'
import Pagination from './Pagination'

interface PortfolioClientProps {
    projects: Project[]
    pagination: {
        page: number
        limit: number
        total: number
        totalPages: number
        hasNextPage: boolean
        hasPreviousPage: boolean
    }
    locale: 'en' | 'es'
    portfolioRoute: string
}

export default function PortfolioClient({
    projects,
    pagination,
    locale,
    portfolioRoute
}: PortfolioClientProps) {
    return (
        <>
            <ProjectGrid
                projects={projects}
                locale={locale}
                portfolioRoute={portfolioRoute}
            />

            <Pagination
                currentPage={pagination.page}
                totalPages={pagination.totalPages}
                hasNextPage={pagination.hasNextPage}
                hasPreviousPage={pagination.hasPreviousPage}
            />
        </>
    )
}