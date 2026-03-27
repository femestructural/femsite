import { getTranslations } from "next-intl/server";

export async function FooterAbout() {

    const translate = await getTranslations('FooterAbout')

    return (
        <section className='flex flex-col items-center justify-center w-full h-[50vh] lg:h-[40dvh]' >
            <div className='w-full mx-auto max-w-[1200px] px-6' >
                <p className='hidden text-center text-2xl lg:flex' >
                    {translate('text')}
                </p>
            </div>
        </section>
    )

}