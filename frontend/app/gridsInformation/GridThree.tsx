'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import ImageWithLoader from '../components/ImageWithLoader';
import StreamingVideo from '../components/StreamingVideo';
import { Fade } from "react-awesome-reveal";
import { LocalizedParagraphArray } from '@/sanity.types';

export const GridThree: React.FC<{ media: any[], story: LocalizedParagraphArray | undefined, locale: string }> = ({ media, story, locale }) => {

    const translate = useTranslations('ProjectPage');

    const media_one = media?.[0];
    const media_two = media?.[1];
    const media_three = media?.[2];
    const media_four = media?.[3];
    const media_five = media?.[4];
    const media_six = media?.[5];
    const media_seven = media?.[6];
    const media_eight = media?.[7];
    const media_nine = media?.[8];
    const media_ten = media?.[9];
    const media_eleven = media?.[10];
    const media_twelve = media?.[11];

    return (
        <section className='grid grid-cols-1 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 grid-rows-[repeat(18, 200px)] gap-5 p-4 mb-5' >


            {/* TEXT 1*/}
            <div className='grid col-span-1 md:col-span-3 lg:col-span-3 row-start-1 items-center min-h-[80px]' >

                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col gap-5 px-4 w-full ' >
                        <p className='text-sm lg:text-xl font-light text-center tracking-widest' >
                            {story?.[0]?.[locale as 'en' | 'es'] || ''}
                        </p>
                    </article>
                </Fade>
            </div>


            {/* MEDIA 1 */}
            <div className='grid col-span-1 md:col-span-3 lg:col-span-1 md:row-start-2 lg:row-start-2 lg:row-end-4 bg-zinc-200' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        className='object-cover h-full w-full'
                        classNameContainer='bg-white h-full w-full'
                        src={media_one?.src}
                        alt={media_one?.alt}
                    />
                </Fade>
            </div>

            {/* TEXT 2 */}
            <div className='grid col-span-1 md:col-span-3 lg:col-span-1 md:row-start-3 lg:row-start-2 lg:row-end-3 items-center h-[250px] lg:min-h-[350px]' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col gap-5 px-4 tracking-widest' >
                        <p className='text-sm lg:text-lg' >
                            <span className='font-semibold' >{translate('Design')} —</span>{story?.[1]?.[locale as 'en' | 'es'] || ''}
                        </p>

                        <p className='text-sm lg:text-lg' >
                            <span className='font-semibold' >{translate('Area')} —</span>{story?.[2]?.[locale as 'en' | 'es'] || ''}
                        </p>

                        <p className='text-sm lg:text-lg' >
                            <span className='font-semibold' >{translate('System')} —</span>{story?.[3]?.[locale as 'en' | 'es'] || ''}
                        </p>

                        <p className='text-sm lg:text-lg' >
                            <span className='font-semibold' >{translate('Result')} —</span>{story?.[4]?.[locale as 'en' | 'es'] || ''}
                        </p>
                    </article>
                </Fade>
            </div>

            {/* MEDIA 2 */}
            <div className='grid col-span-1 md:col-span-3 lg:col-span-1 md:row-start-4 lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4 bg-zinc-200 ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        className='h-full min-h-[400px] w-full object-cover object-center '
                        classNameContainer=''
                        src={media_two?.src}
                        alt={media_two?.alt}
                    />
                </Fade>
            </div>

            {/* MEDIA 3 */}
            <div className='grid col-span-1 md:col-span-3 lg:col-span-1 md:row-start-5 lg:col-start-3 lg:row-start-2 lg:row-end-4 bg-zinc-200 ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        className='h-full w-full object-fit object-center'
                        classNameContainer='bg-white h-full '
                        src={media_three?.src}
                        alt={media_three?.alt}
                    />
                </Fade>
            </div>

            {/* MEDIA 4 */}
            <div className='grid col-span-1 md:col-span-3 lg:col-span-3 row-start-6 md:row-start-6 lg:row-start-4 h-full' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        className='h-[200px] md:h-[300px] lg:h-[500px] w-full object-cover object-center'
                        classNameContainer=''
                        src={media_seven?.src}
                        alt={media_seven?.alt}
                    />
                </Fade>
            </div>

            {/* TEXT 3 */}
            <div className='grid col-span-1 md:col-span-3 lg:col-span-3 row-start-7 md:row-start-7 lg:row-start-5 items-center py-5' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col  items-center gap-5 px-4' >
                        <p className='text-sm lg:text-xl font-light tracking-widest text-center max-w-[1000px]' >
                            {story?.[5]?.[locale as 'en' | 'es'] || ''}
                        </p>
                    </article>
                </Fade>
            </div>

            {/* MEDIA 5 */}
            <div className='grid col-span-1 md:col-span-3 lg:col-span-1 row-start-8 md:row-start-8 lg:row-start-6 bg-zinc-200 ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        className='h-full w-full object-cover object-center'
                        classNameContainer='bg-white h-full '
                        src={media_four?.src}
                        alt={media_four?.alt}
                    />
                </Fade>
            </div>

            {/* MEDIA 6 */}
            <div className='grid col-span-1 md:col-span-3 lg:col-span-1 row-start-9 md:row-start-9 lg:row-start-6 bg-zinc-200 ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        className='h-full w-full object-cover object-center'
                        classNameContainer='bg-white h-full '
                        src={media_five?.src}
                        alt={media_five?.alt}
                    />
                </Fade>
            </div>

            {/* MEDIA 7 */}
            <div className='grid col-span-1 md:col-span-3 lg:col-span-1 row-start-10 md:row-start-10 lg:row-start-6 bg-zinc-200 ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        className='h-full w-full object-cover object-center '
                        classNameContainer='bg-white h-full '
                        src={media_six?.src}
                        alt={media_six?.alt}
                    />
                </Fade>
            </div>


            {/* MEDIA 8 */}
            <div className='grid col-span-1 md:col-span-3 lg:col-span-2 row-start-11 md:row-start-11 lg:row-start-7 bg-zinc-200 h-[85dvh] ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        className='h-[85dvh] w-full object-cover object-center '
                        classNameContainer=''
                        src={media_eight?.src}
                        alt={media_eight?.alt}
                    />
                </Fade>
            </div>

            {/* MEDIA 9 */}
            <div className='grid col-span-1 md:col-span-3 lg:col-span-1 row-start-12 md:row-start-12 lg:row-start-7 bg-zinc-200 h-fit md:h-[85dvh]' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        className='w-fit h-fit object-cover object-center'
                        classNameContainer='bg-white flex flex-col justify-center  h-full'
                        src={media_nine?.src}
                        alt={media_nine?.alt}
                    />
                </Fade>
            </div>

            {/* TEXT 4 */}
            <div className='grid col-span-1 md:col-span-3 lg:col-span-3 items-center row-start-13 md:row-start-13 lg:row-start-8 py-5' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col items-center gap-5 px-4 ' >
                        <p className='text-sm lg:text-xl tracking-widest font-light text-center max-w-[1200px] ' >
                            {story?.[6]?.[locale as 'en' | 'es'] || ''}
                        </p>
                    </article>
                </Fade>
            </div>

            {/* MEDIA 10 VIDEO */}
            <div className='grid col-span-1 md:col-span-3 lg:col-span-3 row-start-14 md:row-start-14 lg:row-start-9 bg-zinc-200 min-h-[400px] max-h-[95dvh]' >
                <Fade triggerOnce duration={1000} >
                    <StreamingVideo
                        videoUrl={media_ten?.mp4 || ''}
                        posterUrl={media_ten?.src || ''}
                    />
                </Fade>
            </div>

            {/* TEXT 5 */}
            <div className='grid col-span-1 md:col-span-3 lg:col-span-3 items-center row-start-15 md:row-start-15 lg:row-start-10 py-5' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col items-center gap-5 px-4' >
                        <p className='text-sm lg:text-xl tracking-widest font-light text-center max-w-[1200px] ' >
                            {story?.[7]?.[locale as 'en' | 'es'] || ''}
                        </p>
                    </article>
                </Fade>
            </div>

            {/* MEDIA 11 */}
            <div className='grid col-span-1 md:col-span-3 lg:col-span-2 row-start-16 md:row-start-16 lg:row-start-11 bg-zinc-200 h-[85dvh] ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        className='h-[85dvh] w-full object-cover object-center'
                        classNameContainer=''
                        src={media_eleven?.src}
                        alt={media_eleven?.alt}
                    />
                </Fade>
            </div>

            {/* MEDIA 12 */}
            <div className='grid col-span-1 md:col-span-3 lg:col-span-1 row-start-17 md:row-start-17 lg:row-start-11 bg-zinc-200 h-[85dvh] ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        className='h-[85dvh] w-full object-cover object-center'
                        classNameContainer=''
                        src={media_twelve?.src}
                        alt={media_twelve?.alt}
                    />
                </Fade>
            </div>

        </section>
    )
}
