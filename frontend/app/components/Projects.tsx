import { sanityFetch } from '@/sanity/lib/live'
import { allProjectsQuery, getPageQuery, moreProjectsQuery } from '@/sanity/lib/queries'
import { AllProjectsQueryResult } from '@/sanity.types'
import OnBoarding from '@/app/components/Onboarding'
import { Project } from './Project'
import { getTranslations } from 'next-intl/server'


const Projects = ({
    children,
    heading,
    subHeading,
}: {
    children: React.ReactNode
    heading?: string
    subHeading?: string
}) => (
    <>
        <div className="mb-12">
            {heading && <h1 className="text-4xl font-bold text-gray-900 mb-4">{heading}</h1>}
            {subHeading && <p className="text-md text-gray-600">
                {subHeading}
            </p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">{children}</div>
    </>
)

export const MoreProjects = async ({ limit, skip, locale }: { skip: string; limit: number, locale: string }) => {
    const { data } = await sanityFetch({
        query: moreProjectsQuery,
        params: { limit, skip, locale },
    })
    
    const translate = await getTranslations('PortfolioPage')

    if (!data || data.length === 0) {
        return null
    }

    return (
        <section className="mt-10 lg:mt-20 px-4 max-w-[1600px] mx-auto w-full">
            <h4 className="text-2xl font-semibold uppercase tracking-widest border-b border-primary pb-4 mb-10">
                {translate('more_projects_title')}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.map((project: any) => (
                    <Project key={project._id} project={project} gridMode={false} />
                ))}
            </div>
        </section>
    )
}

export const AllProjects = async ({ locale }: { locale: string }) => {


    const { data } = await sanityFetch({
        query: allProjectsQuery,
        params: { locale }
    })
    // const { data: page } = await sanityFetch({ 
    //     query: getPageQuery, 
    //     params: { slug: 'portafolio', locale } 
    // })

    const translate = await getTranslations('PortfolioPage')

    if (!data || data.length === 0) {
        return <OnBoarding />
    }

    return (

        <>

            <Projects
                heading={translate('title')}
                subHeading={translate('subtitle')}
            >
                {data.map((project: any) => (
                    <Project key={project._id} project={project} gridMode={true} />
                ))}
            </Projects>

        </>
    )
}
