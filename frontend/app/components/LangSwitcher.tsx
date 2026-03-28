'use client'
// import { capitalize } from '@/lib/utils'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { usePathname, useSelectedLayoutSegments } from 'next/navigation'
import React, { useState } from 'react'
import Button from './Button'

const LangSwitcher: React.FC = () => {
  interface Option {
    country: string
    code: string
  }
  const locale = useLocale();
  const pathname = usePathname();
  const urlSegments = useSelectedLayoutSegments();

  const [isOptionsExpanded, setIsOptionsExpanded] = useState(false)
  const options: Option[] = [
    { country: 'English', code: 'en' }, // Native name is the same
    { country: 'Español', code: 'es' },
  ]

  return (
    <div className='flex items-center justify-center w-[20px]'>
      <div className='relative'>
        <Button
          className='flex items-center justify-center uppercase bg-transparent w-[20px] hover:cursor-pointer'
          onClick={() => setIsOptionsExpanded(!isOptionsExpanded)}
          onBlur={() => setIsOptionsExpanded(false)}
        >
          <span className='text-[16px] font-medium mx-auto text-white' >{locale}</span>
        </Button>
        {isOptionsExpanded && (
          <div className='absolute mt-2 w-[40px] rounded-md bg-[var(--dropdown)] shadow-lg z-[2]'>
            <div
              className='py-1'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='options-menu'
            >
              {options.map(lang => {
                return (
                  <Link
                    key={lang.code}
                    href={`/${lang.code}/${urlSegments.join('/')}`}
                  >
                    <button
                      lang={lang.code}
                      onMouseDown={e => {
                        e.preventDefault()
                      }}
                      className={`block text-sm w-full pl-3 py-2 text-left hover:cursor-pointer uppercase ${pathname.includes(`/${lang.code}`)
                        ? 'bg-primary text-[var(--header-text)]'
                        : 'text-[var(--primary)]'
                        }`}
                    >
                      {lang.code}
                    </button>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div >
  )
}

export default LangSwitcher
