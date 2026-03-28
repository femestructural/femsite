import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'es', // Idioma por defecto
  pathnames: {
    '/': '/',
    '/nosotros': {
      es: '/nosotros',
      en: '/about-us'
    },
    '/portafolio': {
      es: '/portafolio',
      en: '/portfolio'
    },
    '/direccion-de-obra': {
      es: '/direccion-de-obra',
      en: '/construction-supervision'
    },
    '/contacto': {
      es: '/contacto',
      en: '/contact'
    },
  }
});

// Helpers para navegar (Link, redirect, usePathname, useRouter)
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);