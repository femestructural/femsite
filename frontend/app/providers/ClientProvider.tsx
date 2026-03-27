'use client'
import PageLoader from '../components/PageLoader'
import { useLoader } from '../providers/LoaderProvider'
import { RouteDoneStopper } from '../components/RouteDoneStopper'

interface ClientProviderProps {
    children: React.ReactNode
}

export default function ClientProvider({ children }: ClientProviderProps) {

    const { active } = useLoader()

    return (
        <>
            <PageLoader isActive={active} />
            <RouteDoneStopper />
            <main className="">{children}</main>
        </>
    )
}