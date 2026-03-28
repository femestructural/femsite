import ButtonLink from "./ButtonLnk"
import { useTranslations } from "next-intl"
import { icons } from "@/public/icons/react-icons"

export function ExperienceSection() {

    const translate = useTranslations('Experience')
    const translateButton = useTranslations('CTAs')

    return (
        <section className='flex flex-col justify-center items-center min-h-[100dvh] px-5 py-30'
            style={{
                backgroundImage: `
      linear-gradient(to top, var(--primary), transparent),
      url("https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1769982852/palomares_portada_dvnwrt.jpg")
    `,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
            }}
        >
            <div className='flex flex-col items-center gap-5' >
                <h4 className='text-[2.8rem] lg:text-6xl xl:text-[7.5rem] uppercase text-center text-shadow-lg text-[var(--header-text)]'>{translate('title')}</h4>
                <span className='text-center lg:text-xl xl:text-2xl text-shadow-lg text-[var(--header-text)]' >{translate('subtitle')}</span>
                <div className='flex w-full items-center max-w-[550px]' >
                    <ButtonLink
                        href='/nosotros'
                        text={translateButton('aboutUs')}
                        widthClass='w-full'
                        borderClass='border-[1px] border-[var(--background)] text-[var(--header-text)]'
                        icon={<icons.add />}
                        iconClassName='text-white'
                    />
                </div>
            </div>

        </section>
    )
}