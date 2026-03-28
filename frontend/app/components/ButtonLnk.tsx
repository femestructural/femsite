'use client'
import React, { ReactElement } from 'react'
import { MouseEvent } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { getPathname, Link, routing } from '@/i18n/routing'
import { useLoader } from '../providers/LoaderProvider'
import { useLocale } from 'next-intl'
import styles from './Header.module.css'

type Href = Parameters<typeof getPathname>[0]['href']

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
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
    isHeaderStyle?: boolean
    bgClass?: string // Para clases de background de Tailwind
    colorClass?: string // Para clases de color de Tailwind  
    borderClass?: string // Para clases de border de Tailwind
    isExternal?: boolean // Para distinguir entre links externos e internos
    children?: React.ReactNode
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
    isHeaderStyle = false,
    isExternal = false,
    href,
    children,
    callback,
    style,
    ...props
}) => {

    const router = useRouter();
    const locale = useLocale() as any;
    const pathname = usePathname();
    const { start: onStartLoading } = useLoader()

    const baseStyles = `flex flex-row justify-between items-center gap-4 px-[16px] py-[12px] py-2`

    const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
        // Permite open-in-new-tab, cmd/ctrl click, etc.
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

        // Si es externo, no prevenimos el comportamiento por defecto (o lo manejamos según sea necesario)
        if (isExternal || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
            if (callback) callback();
            return;
        }

        e.preventDefault();

        // 1. Resolvemos la ruta final EXACTA a la que el router intentará ir
        const finalRef = getPathname({ href: href as any, locale: locale });

        // 2. Obtenemos la ruta actual real del navegador
        const currentPath = window.location.pathname;

        // 3. Limpiamos ambas rutas quitando la barra final "/" por si hay discrepancias
        const cleanFinalRef = finalRef.replace(/\/$/, '') || '/';
        const cleanCurrentPath = currentPath.replace(/\/$/, '') || '/';

        // 4. Comparamos las rutas limpias
        if (cleanFinalRef !== cleanCurrentPath) {
            onStartLoading();
        }

        if (callback) {
            callback();
        }

        router.push(href as any);
    };

    // Crear estilos personalizados basados en las props CSS
    const customStyles: React.CSSProperties = {
        backgroundColor: bgcolor,
        color: color,
        borderColor: borderColor,
        width: widthClass,
        borderRadius: rounded ? '9999px' : undefined,
        ...style
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
        // Solo para rutas internas
        if (targetHref.startsWith('http') || targetHref.startsWith('#')) return false;

        try {
            // 1. Obtenemos la ruta real que Next.js/i18n espera (ej: /es/proyectos)
            const localizedHref = getPathname({ href: targetHref as any, locale: locale });

            // 2. Comparamos. 
            if (targetHref === '/') return pathname === `/${locale}` || pathname === '/';

            return pathname.startsWith(localizedHref);
        } catch {
            return false;
        }
    };

    const hoverStyles = (ref: string) => isActive(ref) ? 'px-1 border-b-1 border-white' : '';

    // Contenido del botón
    const buttonContent = (
        <>
            {startContent && startContent}
            {text && <span>{text}</span>}
            {children && children}
            {icon && (
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
            )}
        </>
    )

    const isInternalLink = !isExternal &&
        !(href.startsWith('http') || href.startsWith('https') || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:'));

    if (!isInternalLink) {
        return (
            <a
                className={buttonStyles}
                style={filteredCustomStyles}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                onClick={callback}
                {...props}
            >
                {buttonContent}
            </a>
        )
    }

    if (isHeaderStyle) {
        return (
            <Link
                href={href as any}
                className={` ${isActive(href) ? 'font-semibold border-b-2' : `${styles.navLink}`} `}
                style={filteredCustomStyles}
                onClick={onClick}
                {...props as any}
            >
                {buttonContent}
            </Link>
        )
    }

    // Para rutas internas, usar el Link internacionalizado
    return (
        <Link
            href={href as any}
            className={`${buttonStyles} ${hoverStyles(href)} `}
            style={filteredCustomStyles}
            onClick={onClick}
            {...props as any}
        >
            {buttonContent}
        </Link>
    )
}

export default ButtonLink

