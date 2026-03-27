'use client'

import { ProjectLayout } from '@/src/types/project'
import { Project } from '@/src/types/project'
import ProjectCard from './ProjectCard'

interface ProjectGridProps {
    projects: Project[]
    locale: 'en' | 'es'
    portfolioRoute: string
}


export default function ProjectGrid({ projects, locale, portfolioRoute }: ProjectGridProps) {
    if (!projects || projects.length === 0) {
        return (
            <div className="flex items-center justify-center py-16">
                <p className="text-lg text-gray-500">No se encontraron proyectos.</p>
            </div>
        )
    }

    const getProjectUrl = (slug: string) => `/${locale}/${portfolioRoute}/${slug}`

    // Función para determinar las clases de cada proyecto según el patrón
    const getProjectClasses = (sectionIndex: number, projectIndex: number) => {
        const patterns = [
            // Patrón 1: Primera sección (2 proyectos)
            [
                'row-span-6 lg:col-span-4 lg:row-span-12',
                'row-span-6 lg:col-span-8 lg:row-span-12'
            ],
            // Patrón 2: Segunda sección (3 proyectos)
            // [
            //     'row-span-6 lg:col-span-8 lg:row-span-12',
            //     'row-span-6 lg:col-span-4 lg:row-span-6',
            //     'row-span-6 lg:col-span-4 lg:row-span-6'
            // ],
            // Patrón 3: Tercera sección (2 proyectos)
            [
                'row-span-6 lg:col-span-8 lg:row-span-12',
                'row-span-6 lg:col-span-4 lg:row-span-12',
            ],
            // Patrón 4: Cuarta sección (3 proyectos)
            [
                'row-span-6 lg:col-span-4 lg:row-span-12',
                'row-span-6 lg:col-span-4 lg:row-span-12',
                'row-span-6 lg:col-span-4 lg:row-span-12'
            ],
            // Patrón 5: Quinta sección (1 proyecto completo)
            [
                'row-span-12 col-span-12'
            ]
        ]

        return patterns[sectionIndex % patterns.length]?.[projectIndex] || 'row-span-6 lg:col-span-4 lg:row-span-6'
    }

    // Agrupar proyectos en secciones según el patrón
    const groupProjectsIntoSections = () => {
        const sections = []
        let currentIndex = 0
        const sectionSizes = [2, 3, 2, 3, 1] // Tamaños de cada tipo de sección

        while (currentIndex < projects.length) {
            const sectionType: number = sections.length % 5 // 5 tipos de sección
            const sectionSize = sectionSizes[sectionType]
            const sectionProjects = projects.slice(currentIndex, currentIndex + sectionSize)

            if (sectionProjects.length > 0) {
                sections.push({
                    projects: sectionProjects,
                    type: sectionType
                })
            }

            currentIndex += sectionSize
        }

        return sections
    }

    const sections = groupProjectsIntoSections()

    const layoutToClasses: Record<ProjectLayout, string> = {
        hero: "lg:col-span-12",
        half: "lg:col-span-8",
        third: "lg:col-span-4",
    };

    // const projects: Project[] = [
    //     { id: "1", title: "Proyecto A", image: "...", layout: "hero" },  // banner grande
    //     { id: "2", title: "Proyecto B", image: "...", layout: "half" },  // izquierda
    //     { id: "3", title: "Proyecto C", image: "...", layout: "half" },  // derecha
    //     { id: "4", title: "Proyecto D", image: "...", layout: "hero" },  // otro grande
    //     { id: "5", title: "Proyecto E", image: "...", layout: "third" }, // 3 columnas
    //     { id: "6", title: "Proyecto F", image: "...", layout: "third" },
    //     { id: "7", title: "Proyecto G", image: "...", layout: "third" },
    // ];



    return (
        <>
            <section>
                {/* Mobile / Tablet: listado sencillo */}
                <div className="flex flex-col px-6 gap-6 lg:hidden">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project._id}
                            project={project}
                            locale={locale}
                            portfolioRoute={portfolioRoute}
                        />
                    ))}
                </div>

                {/* Desktop: grid con spans */}
                <div
                    className="
                    hidden lg:grid
                    lg:grid-cols-12
                    lg:auto-rows-[90dvh]
                    lg:gap-8
                    lg:[grid-auto-flow:row_dense]
                    max-w-[1700px] mx-auto px-6
                    "
                >
                    {projects.map((project) => (
                        <ProjectCard
                            key={project._id}
                            project={project}
                            locale={locale}
                            portfolioRoute={portfolioRoute}
                            className={["h-full", layoutToClasses[project?.layout || "hero"]].join(" ")}
                        />
                    ))}
                </div>
            </section>

        </>
    )
}