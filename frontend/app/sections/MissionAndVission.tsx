import StreamingVideo from '@/app/components/StreamingVideo';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import Button from '../components/Button';

export async function MissionAndVission() {

    const translateM = await getTranslations('Mission')
    const translateV = await getTranslations('Vission')
    const translateCTA = await getTranslations('CTAs')

    return (
        <section className='flex flex-col justify-center w-full h-[100dvh] relative '>


            {/* <ImageWithLoader
                            fill={true}
                            className='object-cover z-1 absolute'
                            src="https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1756825098/corte-plano-fem_jtfuqf.png"
                            alt="Hero Image"
                        /> */}

            <div className='hidden md:block absolute z-1 bg-red-200 h-full w-full' >
                <StreamingVideo
                    videoUrl='https://res.cloudinary.com/ditwfi7c9/video/upload/q_auto/v1771194512/WhatsApp_Video_2026-02-03_at_12.42.34_2_1_b8lw08.mp4'
                    posterUrl=''
                    height='100%'
                />
            </div>

            <div className='block md:hidden absolute z-1 bg-red-200 h-full w-full' >
                <StreamingVideo
                    videoUrl='https://res.cloudinary.com/ditwfi7c9/video/upload/q_auto/v1771202172/obra-areo-vertical_d7e0jn.mp4'
                    posterUrl=''
                    height='100%'
                />
            </div>

            <div
                className='bg-gradient-to-t from-[var(--primary)] to-black/50'
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 2,
                }}
            />

            <div className='flex flex-col justify-between mx-auto gap-20 lg:gap-30 w-full max-w-[1200px] px-6 text-white z-3 ' >


                {/* Misión section */}
                <div className='w-full lg:w-[45%]' >
                    <article className="flex flex-col gap-5 justify-center">
                        <header>
                            <h3 className='text-3xl lg:text-5xl font-bold uppercase '>{translateM('Title')}</h3>
                        </header>
                        <footer className='' >
                            <p className='text-sm lg:text-lg' >
                                {translateM('Description')}
                            </p>
                        </footer>
                    </article>
                </div>

                {/* Visión section */}
                <div className='flex flex-row w-full lg:justify-end' >
                    <article className="flex flex-col gap-5 justify-center w-full lg:w-[45%]">
                        <header>
                            <h3 className='text-3xl lg:text-5xl font-bold uppercase '>{translateV('Title')}</h3>
                        </header>
                        <footer className='flex flex-col gap-4 ' >
                            <p className='text-sm lg:text-lg' >
                                {translateV('Description')}
                            </p>
                        </footer>
                    </article>
                </div>

                {/* CTA */}
                <div className='flex flex-row items-center justify-center' >
                    <Button className='flex flex-row items-center gap-4 border-[1px] bg-transparent border-white text-white px-[16px] py-[12px] '>
                        <Link href={'/contacto'} >
                            {translateCTA('Consulting')}
                        </Link>
                    </Button>
                </div>

            </div>

        </section>
    )
}