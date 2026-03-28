import { AiOutlineBuild } from "react-icons/ai";
import { TbSettingsDollar } from "react-icons/tb";
import { TbDeviceAnalytics } from "react-icons/tb";
import ImageWithLoader from '@/app/components/ImageWithLoader';
import { getTranslations } from "next-intl/server";

export async function HeroAbout() {

    const translateHero = await getTranslations('HeroAbout');
    const translateCards = await getTranslations('HeroAboutCards')


    return (
        <section className='flex flex-col justify-center bg-[var(--primary)] min-h-[100dvh] px-6 ' >


            <div
                className='bg-gradient-to-t from-[var(--primary)] to-black/20'
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 2,
                }}
            />

            <ImageWithLoader
                fill={true}
                className='object-cover z-1 absolute'
                src="https://res.cloudinary.com/ditwfi7c9/image/upload/v1774612762/DSC04107_Copy_Copy_t9fptx.jpg"
                alt="Hero Image"
            />

            <div className='flex flex-col items-center gap-2 w-full max-w-[1200px] mx-auto z-3' >

                <span
                    className='text-3xl lg:text-5xl text-shadow-lg font-bold uppercase text-[var(--header-text)] pt-10 lg:pt-0 mb-5'
                >
                    {translateHero('Title')}
                </span>

                <p className='text-sm lg:text-md font-light text-xl text-[var(--header-text)] text-center mb-10' >
                    {translateHero('subtitle')}
                </p>

                <span className='font-light text-white/70 text-center mb-5' >
                    {translateCards('Header')}
                </span>

                <section className='flex flex-col lg:flex-row items-center justify-center gap-5 w-full text-white md:mt-20' >

                    <div className='flex flex-col gap-2 transition-all duration-300 bg-[var(--background)]/10 backdrop-blur-md p-4 rounded-lg shadow-lg cursor-pointer w-full lg:max-w-[350px]' >

                        <div className='flex flex-row items-center gap-2' >
                            <span className=' w-6 h-6 md:w-8 md:h-8 rounded-sm border flex items-center justify-center' >
                                <TbDeviceAnalytics className='w-3 h-3 md:w-4 md:h-4' />
                            </span>
                            <span>
                                {translateCards('TitleCardOne')}
                            </span>
                        </div>

                        <p>
                            {translateCards('DescriptionCardOne')}
                        </p>

                    </div>

                    <div className='flex flex-col gap-2 transition-all duration-300 bg-[var(--background)]/10 backdrop-blur-md p-4 rounded-lg shadow-lg cursor-pointer w-full lg:max-w-[350px]' >

                        <div className='flex flex-row items-center gap-2' >
                            <span className=' w-6 h-6 md:w-8 md:h-8 rounded-sm border flex items-center justify-center' >
                                <AiOutlineBuild className='w-3 h-3 md:w-4 md:h-4' />
                            </span>
                            <span>
                                {translateCards('TitleCardTwo')}
                            </span>
                        </div>

                        <p>
                            {translateCards('DescriptionCardTwo')}
                        </p>

                    </div>

                    <div className='flex flex-col gap-2 transition-all duration-300 bg-[var(--background)]/10 backdrop-blur-md p-4 rounded-lg shadow-lg cursor-pointer w-full lg:max-w-[350px]' >

                        <div className='flex flex-row items-center gap-2' >
                            <span className=' w-6 h-6 md:w-8 md:h-8 rounded-sm border flex items-center justify-center' >
                                <TbSettingsDollar className='w-3 h-3 md:w-4 md:h-4' />
                            </span>
                            <span>
                                {translateCards('TitleCardThree')}
                            </span>
                        </div>

                        <p>
                            {translateCards('DescriptionCardThree')}
                        </p>

                    </div>

                </section>

                <section className='flex flex-row items-center gap-2 mt-10' >
                    <span className='h-px w-10 border border-white relative bottom-[20px]' />
                    <span className='font-italic font-serif text-xl text-[var(--header-text)] mb-10 text-center' >
                        {translateCards('FooterCards')}
                    </span>
                    <span className='h-px w-10 border border-white relative bottom-[20px]' />
                </section>

            </div>


        </section >
    )
}