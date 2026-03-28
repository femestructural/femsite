'use client'

import { useState, useEffect } from "react"
import { useTranslations, useLocale } from 'next-intl'
import { Link, usePathname } from '@/i18n/routing'
import LogoIcon from '@/public/icons/logo'
import FacebookIcon from '@/public/icons/facebook'
import InstagramIcon from '@/public/icons/instagram'
import LinkedinIcon from '@/public/icons/linkedin'
import LangSwitcher from './LangSwitcher'
import ButtonLink from './ButtonLnk'

export function HeaderMobile() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isClosing, setIsClosing] = useState(false)
    const locale = useLocale()
    const pathname = usePathname()
    const t = useTranslations('nav')

    const toggleMobileMenu = () => {
        if (isMobileMenuOpen) {
            closeMobileMenu()
        } else {
            setIsMobileMenuOpen(true)
            setIsClosing(false)
        }
    }

    const closeMobileMenu = () => {
        setIsClosing(true)
        // Esperar a que termine la animación antes de ocultar
        setTimeout(() => {
            setIsMobileMenuOpen(false)
            setIsClosing(false)
        }, 500) // Debe coincidir con la duración de la animación CSS
    }

    // Bloquear scroll del body cuando el menú está abierto
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        // Cleanup cuando el componente se desmonta
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    return (
        <>
            {/* Mobile Burger Button */}
            <button
                onClick={toggleMobileMenu}
                className="lg:hidden flex flex-col items-center justify-center w-8 h-8 text-[var(--header-text)] focus:outline-none z-50 relative"
                aria-label="Toggle mobile menu"
            >
                <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-current my-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </button>

            {isMobileMenuOpen && (
                <div
                    className={`fixed top-0 left-0 w-full h-screen bg-[var(--primary)] z-40 lg:hidden ${isClosing ? 'animate-slide-up' : 'animate-slide-down'
                        }`}
                >

                    {/* Mobile Header - Logo y botón de cierre fijos */}
                    <div className='absolute top-0 left-0 right-0 flex flex-row items-center justify-between p-4 bg-[var(--primary)] z-50'>
                        <Link href='/' onClick={closeMobileMenu}>
                            <div className='flex flex-row items-center scale-90'>
                                <LogoIcon />
                            </div>
                        </Link>
                    </div>

                    {/* Mobile Navigation */}
                    <nav className='flex flex-col items-start pl-10 justify-center h-full text-[var(--header-text)] space-y-8 pt-20'>
                        <ButtonLink
                            href="/"
                            text={t('Inicio')}
                            className="text-2xl font-medium"
                            callback={closeMobileMenu}
                        />
                        <ButtonLink
                            href="/nosotros"
                            text={t('Nosotros')}
                            className="text-2xl font-medium"
                            callback={closeMobileMenu}
                        />
                        <ButtonLink
                            href="/portafolio"
                            text={t('Portafolio')}
                            className="text-2xl font-medium"
                            callback={closeMobileMenu}
                        />
                        <ButtonLink
                            href="/direccion-de-obra"
                            text={t('Obra')}
                            className="text-2xl font-medium"
                            callback={closeMobileMenu}
                        />
                        <ButtonLink
                            href="/contacto"
                            text={t('Contacto')}
                            className="text-2xl font-medium"
                            callback={closeMobileMenu}
                        />

                        {/* Mobile Social Links */}
                        <div className='flex flex-row items-center gap-6 mt-8'>
                            <a
                                href='https://www.facebook.com/femestructural'
                                target='_blank'
                                className='text-[var(--header-text)] hover:opacity-75 transition-opacity duration-200'
                            >
                                <div className='size-8'>
                                    <FacebookIcon />
                                </div>
                            </a>
                            <a
                                href='https://www.instagram.com/femestructural.mx/'
                                target='_blank'
                                className='text-[var(--header-text)] hover:opacity-75 transition-opacity duration-200'
                            >
                                <div className='size-8'>
                                    <InstagramIcon />
                                </div>
                            </a>
                            <a
                                href='https://www.linkedin.com/company/femestructural/'
                                target='_blank'
                                className='text-[var(--header-text)] hover:opacity-75 transition-opacity duration-200'
                            >
                                <div className='size-8'>
                                    <LinkedinIcon />
                                </div>
                            </a>
                        </div>

                        {/* Mobile Language Switcher */}
                        <div className='mt-6'>
                            <LangSwitcher />
                        </div>
                    </nav>
                </div>
            )}
        </>
    )
}
