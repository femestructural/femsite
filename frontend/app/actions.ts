'use server'

import { draftMode } from 'next/headers'
import { sanityFetch } from "@/sanity/lib/live"
import { siteVisitsQuery } from "@/sanity/lib/queries"

export async function disableDraftMode() {
  await Promise.allSettled([
    (await draftMode()).disable(),
    // Simulate a delay for the loading state
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ])
}

export async function fetchSiteVisits(start: number, end: number, locale: string) {
    const { data } = await sanityFetch({
        query: siteVisitsQuery,
        params: { start, end, locale }
    })
    return data
}
