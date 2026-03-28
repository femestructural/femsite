'use server'

import { sanityFetch } from "@/sanity/lib/live"
import HorizontalTeam from "../components/HorizontalTeam"
import { allCollaboratorsQuery } from "@/sanity/lib/queries"

interface TeamSectionProps {
    locale: string
}

export async function TeamSection({ locale }: TeamSectionProps) {

    const { data: teamMembers } = await sanityFetch({
        query: allCollaboratorsQuery,
        params: { locale: locale },
        stega: false
    })

    return (
        <>
            <HorizontalTeam title="TEAM FEM" items={teamMembers} locale={locale} />
        </>
    )
}