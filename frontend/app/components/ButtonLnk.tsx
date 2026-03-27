'use client'
import React, { ReactElement } from 'react'
import { MouseEvent } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { getPathname, Link } from '@/i18n/routing'
import { useLoader } from '../providers/LoaderProvider'
import { useLocale } from 'next-intl'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode,
    startContent?: React.ReactNode
    text?: string
    size?: 'small' | 'medium' | 'large'
    rounded?: boolean
    iconClassName?: string
    bgcolor?: string
    color?: string
    widthClass?: string
    className?: string
    borderColor?: string
    href: string
    bgClass?: string // Para clases de background de Tailwind
    colorClass?: string // Para clases de color de Tailwind  
    borderClass?: string // Para clases de border de Tailwind
    isExternal?: boolean // Para distinguir entre links externos e internos
    children?: ReactElement
    callback?: () => void
};


const ButtonLink: React.FC<ButtonProps> = ({
    icon,
    text,
    startContent,
    size = 'medium',
    rounded = false,
    className,
    iconClassName,
    bgcolor,
    widthClass,
    color,
    borderColor,
    bgClass,
    colorClass,
    borderClass,
    isExternal = false,
    href,
    children,
    callback,
    ...props
}) => {

    const router = useRouter();
    const locale = useLocale();
    const pathname = usePathname();
    const { start: onStartLoading, stop: onStopLoading, delayMs } = useLoader()

    const baseStyles = `flex flex-row justify-between items-center gap-4 px-[16px] py-[12px] py-2`

    const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
        // Permite open-in-new-tab, cmd/ctrl click, etc.
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

        e.preventDefault();
        onStartLoading();

        if (callback) {
            callback();
        }

        const finalRef = getPathname({ href: href, locale: locale });
        router.push(finalRef);
    };

    // Crear estilos personalizados basados en las props CSS
    const customStyles = {
        backgroundColor: bgcolor,
        color: color,
        borderColor: borderColor,
        rounded: rounded,
        width: widthClass
    }

    // Filtrar valores undefined del objeto de estilos
    const filteredCustomStyles = Object.fromEntries(
        Object.entries(customStyles).filter(([_, value]) => value !== undefined)
    )

    // Combinar clases de Tailwind
    const tailwindClasses = [
        bgClass,
        widthClass,
        colorClass,
        borderClass,
        className
    ].filter(Boolean).join(' ')

    const buttonStyles = `${baseStyles} ${tailwindClasses}`

    const isActive = (targetHref: string) => {
        // 1. Obtenemos la ruta real que Next.js/i18n espera (ej: /es/proyectos)
        const localizedHref = getPathname({ href: targetHref, locale: locale });

        // 2. Comparamos. 
        // Opción A: Exacta (Home vs Home)
        if (targetHref === '/') return pathname === `/${locale}` || pathname === '/';

        // Opción B: Basada en prefijo (Para que /proyectos/id mantenga activo /proyectos)
        return pathname.startsWith(localizedHref);
    };

    const hoverStyles = (ref) => isActive(ref) ? 'px-1 border-b-1 border-white' : '';

    // Contenido del botón
    const buttonContent = (
        <>
            {startContent && startContent}
            <span>{text}</span>
            <div className='w-5 h-5 flex items-center justify-center'>
                {React.isValidElement(icon)
                    ? React.cloneElement(icon as React.ReactElement<any>, {
                        className: `w-full h-full ${iconClassName || ''}`,
                        width: '100%',
                        height: '100%'
                    })
                    : icon
                }
            </div>
        </>
    )

    // Si es un link externo o # usa <a>, si es interno usa Link internacionalizado
    if (isExternal ||
        (typeof href === 'string' && (href.startsWith('http') || href.startsWith('https') || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:'))
        )
    ) {
        return (
            <a
                className={buttonStyles}
                style={filteredCustomStyles}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
                {buttonContent}
            </a>
        )
    }


    if (className && typeof text === 'string' && text) {
        return (
            <Link
                href={href as any}
                onClick={onClick}
                className={`${className} ${hoverStyles(href)}`}
            >

                {text}
                {icon && (<div className={iconClassName}>{icon}</div>)}
            </Link>
        )
    }

    // Para rutas internas, usar el Link internacionalizado
    if (!className && isExternal === false) {
        return (
            <Link
                href={href as any}
                className={buttonStyles}
                style={filteredCustomStyles}
                onClick={onClick}
            >
                {buttonContent}
            </Link>
        )
    }

    if (text === undefined && children) {
        console.log('Rendering ButtonLink with children')
        return (
            <Link
                onClick={onClick}
                href={href as any}
                className={className}
            >
                {children}
            </Link>
        )
    }
}

export default ButtonLink
