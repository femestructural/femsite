import { FC } from 'react'
import { NavLink } from './NavLink'
import { Link } from '../../i18n/routing'
import { useTranslations } from 'next-intl'
import LogoIcon from '../../public/icons/logo'
import LangSwitcher from './LangSwitcher'
import FacebookIcon from '../../public/icons/facebook'
import InstagramIcon from '../../public/icons/instagram'
import LinkedinIcon from '../../public/icons/linkedin'
import ButtonLink from './ButtonLnk'
import { HeaderMobile } from './HeaderMobile'

interface Props {
  locale: string
}
export const Header: FC<Props> = ({ locale }) => {

  const t = useTranslations('nav')


  return (
    <>

      <div className='absolute inset-0 h-[80px] bg-primary shadow-lg ' />

      <div className='flex sticky top-0 flex-row items-center justify-center p-4 relative z-50 '>
        <div className='flex flex-row items-center justify-between w-full max-w-[1200px]'>

          {/* Logo */}
          <Link lang={locale} href='/'>
            <div className='flex flex-row items-center scale-90'>
              <LogoIcon />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex flex-row items-center justify-end lg:justify-between gap-3 w-full'>
            <nav className='hidden lg:flex mx-10 lg:inline-flex gap-5 text-[var(--header-text)]'>
              <ButtonLink isHeaderStyle={true} href="/" text={t('Inicio')} className='py-0 hover:cursor-pointer' />
              <ButtonLink isHeaderStyle={true} href="/nosotros" text={t('Nosotros')} className='py-0 hover:cursor-pointer' />
              <ButtonLink isHeaderStyle={true} href="/portafolio" text={t('Portafolio')} className='py-0 hover:cursor-pointer' />
              <ButtonLink isHeaderStyle={true} href="/direccion-de-obra" text={t('Obra')} className='py-0! hover:cursor-pointer' />
              <ButtonLink isHeaderStyle={true} href="/contacto" text={t('Contacto')} className='py-0 hover:cursor-pointer' />
            </nav>
            {/* <ThemeSwitch /> */}

            <div className='flex flex-row items-center gap-3 w-fit px-5'>
              <a
                href='https://www.facebook.com/femestructural'
                target='_blank'
              >
                <div className='size-5'>
                  <FacebookIcon />
                </div>
              </a>
              <a
                href='https://www.instagram.com/femestructural.mx/'
                target='_blank'
              >
                <div className='size-5'>
                  <InstagramIcon />
                </div>
              </a>
              <a
                href='https://www.linkedin.com/company/femestructural/'
                target='_blank'
              >
                <div className='size-5'>
                  <LinkedinIcon />
                </div>
              </a>

              <LangSwitcher />
            </div>
          </div>

          <HeaderMobile />

        </div>
      </div>

    </>
  )
}
