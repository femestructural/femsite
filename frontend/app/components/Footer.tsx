import ButtonLink from "./ButtonLnk"
import { icons } from "@/public/icons/react-icons"
// import { linkWp } from "@/src/navigation"
import FacebookIcon from "@/public/icons/facebook"
import InstagramIcon from "@/public/icons/instagram"
import LinkedinIcon from "@/public/icons/linkedin"
import LangSwitcher from './LangSwitcher'
import { getTranslations } from "next-intl/server"
import Button from "./Button"
import Link from "next/link"

export async function Footer() {

  const translate = await getTranslations('CTAs');

  const pohone = '525577828470'
  const message = translate('contactMessage')

  const formatMessage = (msg: string) => `https://wa.me/${pohone}?text=${encodeURIComponent(msg)}`

  return (
    <footer className="flex flex-col gap-10 bg-[var(--primary)] w-full px-10 py-20" >

      <div className="flex flex-col gap-5 w-full items-center md:items-start" >
        <span className="font-semibold text-2xl text-[var(--header-text)]" >{translate('contact')}</span>
        <Button className="border border-1 border-white" >
          <Link
            target={'_blank'}
            rel={'noopener noreferrer'}
            className="flex flex-row items-center gap-2" href={formatMessage(message)} >
            <span>{translate('meeting')}</span>
            <icons.whatsapp />
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-5 w-full items-center md:items-end " >
        <div className='flex flex-row items-center gap-3 w-fit px-5 '>
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
        <span className="text-[var(--header-text)]" >contacto@femestructural.com.mx</span>
      </div>

    </footer>
  )
}
