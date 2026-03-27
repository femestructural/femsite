'use client'

import { ComponentProps } from 'react'
import { Link, usePathname } from '@/i18n/routing' // Asegúrate de que la ruta coincida con tu alias

// Extendemos las propiedades del Link de next-intl y añadimos activeClassName
type NavLinkProps = ComponentProps<typeof Link> & {
    activeClassName?: string
}

export const NavLink = ({ 
    href, 
    activeClassName = 'font-semibold border-b-2', // Clases por defecto si no le pasas unas
    className = '', 
    children, 
    ...rest 
}: NavLinkProps) => {
    
    const pathname = usePathname()

    // Lógica inteligente de ruta activa:
    // Si es '/', tiene que ser coincidencia exacta.
    // Si es otra ruta (ej: '/portafolio'), usamos startsWith para que si entras a 
    // '/portafolio/casa-bosque', el menú de 'Portafolio' siga marcado como activo.
    const isActive = href === '/' 
        ? pathname === '/' 
        : pathname.startsWith(href as string)

    // Unimos las clases normales con las clases activas (si aplica)
    const combinedClassName = `${className} ${isActive ? activeClassName : ''}`.trim()

    return (
        <Link 
            href={href} 
            className={combinedClassName} 
            {...rest}
        >
            {children}
        </Link>
    )
}