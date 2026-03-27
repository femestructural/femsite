import { useState, useEffect } from "react"

export function HeaderMobile() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isClosing, setIsClosing] = useState(false)

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

        isMobileMenuOpen && (
            <div
                className={`fixed top-0 left-0 w-full h-screen bg-[var(--primary)] z-40 lg:hidden ${isClosing ? 'animate-slide-up' : 'animate-slide-down'
                    }`}
            >

                {/* Mobile Header - Logo y botón de cierre fijos */}
                <div className='absolute top-0 left-0 right-0 flex flex-row items-center justify-between p-4 bg-[var(--primary)] z-50'>
                    <Link lang={locale} href='/' onClick={closeMobileMenu}>
                        <div className='flex flex-row items-center scale-90'>
                            <LogoIcon />
                        </div>
                    </Link>

                    {/* Mobile Close Button */}
                    <button
                        onClick={closeMobileMenu}
                        className='flex flex-col items-center justify-center w-8 h-8 text-[var(--header-text)] focus:outline-none'
                        aria-label="Close mobile menu"
                    >
                        <div className="w-6 h-0.5 bg-current rotate-45 translate-y-1.5"></div>
                        <div className="w-6 h-0.5 bg-current -rotate-45 -translate-y-1.5"></div>
                    </button>
                </div>

                {/* Mobile Navigation */}
                <nav className='flex flex-col items-start pl-10 justify-center h-full text-[var(--header-text)] space-y-8 pt-20'>
                    <Link
                        lang={locale}
                        href={`/`}
                        onClick={closeMobileMenu}
                        className={`text-2xl font-medium transition-colors duration-200 ${isActive('/') ? 'font-bold border-b-2 border-[var(--header-text)]' : 'hover:opacity-75'
                            }`}
                    >
                        {t('Inicio')}
                    </Link>
                    <Link
                        lang={locale}
                        href={`/nosotros`}
                        onClick={closeMobileMenu}
                        className={`text-2xl font-medium transition-colors duration-200 ${isActive('/nosotros') ? 'font-bold border-b-2 border-[var(--header-text)]' : 'hover:opacity-75'
                            }`}
                    >
                        {t('Nosotros')}
                    </Link>
                    <Link
                        lang={locale}
                        href={`/portafolio`}
                        onClick={closeMobileMenu}
                        className={`text-2xl font-medium transition-colors duration-200 ${isActive('/portafolio') ? 'font-bold border-b-2 border-[var(--header-text)]' : 'hover:opacity-75'
                            }`}
                    >
                        {t('Portafolio')}
                    </Link>
                    <Link
                        lang={locale}
                        href={`/direccion-de-obra`}
                        onClick={closeMobileMenu}
                        className={`text-2xl font-medium transition-colors duration-200 ${isActive('/direccion-de-obra') ? 'font-bold border-b-2 border-[var(--header-text)]' : 'hover:opacity-75'
                            }`}
                    >
                        {t('Dirección_de_obra')}
                    </Link>
                    <Link
                        lang={locale}
                        href={`/contacto`}
                        onClick={closeMobileMenu}
                        className={`text-2xl font-medium transition-colors duration-200 ${isActive('/contacto') ? 'font-bold border-b-2 border-[var(--header-text)]' : 'hover:opacity-75'
                            }`}
                    >
                        {t('Contacto')}
                    </Link>

                    {/* Mobile Social Links */}
                    <div className='flex flex-row items-center gap-6 mt-8'>
                        <a
                            href='https://github.com/yahyaparvar/nextjs-template'
                            target='_blank'
                            className='text-[var(--header-text)] hover:opacity-75 transition-opacity duration-200'
                        >
                            <div className='size-8'>
                                <FacebookIcon />
                            </div>
                        </a>
                        <a
                            href='https://github.com/yahyaparvar/nextjs-template'
                            target='_blank'
                            className='text-[var(--header-text)] hover:opacity-75 transition-opacity duration-200'
                        >
                            <div className='size-8'>
                                <InstagramIcon />
                            </div>
                        </a>
                        <a
                            href='https://github.com/yahyaparvar/nextjs-template'
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
        )

    )
}