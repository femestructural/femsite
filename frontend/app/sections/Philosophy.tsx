import { getTranslations } from "next-intl/server";
import { GiBookCover } from "react-icons/gi";

export async function Philosophy() {

    const translate = await getTranslations('Philosophy')

    return (
        <section className='flex flex-col justify-center min-h-[95dvh] relative' >

            <div className='flex flex-col items-center gap-2 w-full px-5 lg:px-10 max-w-[1200px] mx-auto h-fit z-3' >

                <GiBookCover className='text-[80px] text-[var(--primary)] mb-10' />

                <span
                    className='text-3xl lg:text-5xl font-bold uppercase text-center text-[var(--primary)] mb-5'
                >
                    {translate('Title')}
                </span>

                <p className='text-sm lg:text-xl text-center mb-4 text-justify' >
                    {translate('Subtitle')}
                </p>

                <section className='flex flex-row items-center gap-2 ' >
                    <span className='h-px w-10 border border-black relative bottom-[20px]' />
                    <span className='font-italic font-serif text-xl mb-10 text-center' >
                        {translate('FooterText')}
                    </span>
                    <span className='h-px w-10 border border-black relative bottom-[20px]' />
                </section>

            </div>


        </section >
    )
}