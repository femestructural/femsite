'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import ImageWithLoader from '../components/ImageWithLoader';
import StreamingVideo from '../components/StreamingVideo';
import { Fade } from "react-awesome-reveal";
import { LocalizedParagraphArray } from '@/sanity.types';

export const GridSix: React.FC<{ media: any[], story: LocalizedParagraphArray | undefined, locale: string }> = ({ media, story, locale }) => {

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


    return (
        <section className='grid grid-cols-1 md:grid-cols-4 grid-rows-[repeat(12, 200px)] gap-5 p-4 mb-5 ' >


            <div className='grid col-span-1 md:col-span-4 lg:col-span-2 md:row-start-1 lg:col-end-3 items-center py-5 ' >
                <Fade triggerOnce duration={1000} >
                    <div className='flex flex-col gap-5 w-full' >
                        <article className='flex flex-col w-full lg:max-w-[450px] items-start md:items-center xl:items-start gap-5 px-4' >
                            <p className='text-sm lg:text-xl' >
                                <span className='font-semibold' >{translate('Design')} —</span>{story?.[0]?.[locale as 'en' | 'es'] || ''}
                            </p>

                            <p className='text-sm lg:text-xl' >
                                <span className='font-semibold' >{translate('Area')} —</span>{story?.[1]?.[locale as 'en' | 'es'] || ''}
                            </p>

                        </article>

                        <article className='flex flex-col w-full xl:w-[800px] items-start md:items-center xl:items-start gap-5 px-4 ' >

                            <p className='text-sm lg:text-xl' >
                                <span className='font-semibold' >{translate('System')} —</span>{story?.[2]?.[locale as 'en' | 'es'] || ''}
                            </p>

                            <p className='text-sm lg:text-xl' >
                                <span className='font-semibold' >{translate('Result')} —</span>{story?.[3]?.[locale as 'en' | 'es'] || ''}
                            </p>

                        </article>
                    </div>
                </Fade>
            </div>


            {/* MEDIA 1 */}
            <div className='grid col-span-1 md:col-span-4 lg:col-span-2 row-start-2 md:row-start-2 lg:row-start-1 bg-zinc-200 min-h-[300px] ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        classNameContainer='h-full lg:h-[250px] w-full  '
                        className='h-full w-full object-cover object-center'
                        src={media_one?.src}
                        alt={media_one?.alt}
                    />
                </Fade>
            </div>

            <div className='grid col-span-1 md:col-span-4 lg:col-span-4 row-start-3 md:row-start-3 lg:row-start-2 bg-zinc-200 ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        classNameContainer='h-full w-full  '
                        className='h-full w-full object-cover object-bottom'
                        src={media_two?.src}
                        alt={media_two?.alt}
                    />
                </Fade>
            </div>

            <div className='grid col-span-1 md:col-span-4 lg:col-span-4 row-start-4 md:row-start-4 lg:row-start-3 bg-zinc-200 ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        classNameContainer='h-full w-full  '
                        className='h-full w-full object-cover object-bottom'
                        src={media_three?.src}
                        alt={media_three?.alt}
                    />
                </Fade>
            </div>

            <div className='grid col-span-1 md:col-span-4 lg:col-span-4 row-start-5 md:row-start-5 lg:row-start-4 py-5' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col items-center gap-5 px-4' >
                        <p className='text-sm lg:text-xl font-light' >
                            {story?.[4]?.[locale as 'en' | 'es'] || ''}
                        </p>

                    </article>
                </Fade>
            </div>


            <div className='grid col-span-1 md:col-span-4 lg:col-span-3 row-start-6 md:row-start-6 lg:row-start-5 bg-white ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        classNameContainer='h-full w-full'
                        className='h-full w-full object-cover object-center '
                        src={media_four?.src}
                        alt={media_four?.alt}
                    />
                </Fade>
            </div>


            <div className='grid col-span-1 md:col-span-4 lg:col-span-1 row-start-7 md:row-start-7 lg:row-start-5 bg-white ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        classNameContainer='h-full w-full'
                        className='h-full w-full object-cover'
                        src={media_five?.src}
                        alt={media_five?.alt}
                    />
                </Fade>
            </div>

            <div className='grid col-span-1 md:col-span-4 lg:col-span-2 row-start-8 md:row-start-8 lg:row-start-6 bg-white ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        classNameContainer='h-full w-full'
                        className='h-full w-full object-cover'
                        src={media_six?.src}
                        alt={media_six?.alt}
                    />
                </Fade>
            </div>

            <div className='grid col-span-1 md:col-span-4 items-center lg:col-span-1 row-start-9 md:row-start-9 lg:row-start-6 bg-white ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        classNameContainer='h-full lg:h-[450px] w-full'
                        className='h-full w-full object-cover'
                        src={media_seven?.src}
                        alt={media_seven?.alt}
                    />
                </Fade>
            </div>

            <div className='grid col-span-1 md:col-span-4 items-center lg:col-span-1 row-start-10 md:row-start-10 lg:row-start-6 bg-white ' >
                <div className='flex flex-col items-center justify-center gap-10 h-full py-10 lg:py-0' >
                    <Fade triggerOnce duration={1000} >
                        <ImageWithLoader
                            height={400}
                            width={400}
                            WithContainer
                            classNameContainer='h-full lg:h-[150px] w-full'
                            className='h-full w-full object-cover'
                            src={media_eight?.src}
                            alt={media_eight?.alt}
                        />
                    </Fade>

                    <Fade triggerOnce duration={1000} >
                        <ImageWithLoader
                            height={400}
                            width={400}
                            WithContainer
                            classNameContainer='h-full lg:h-[250px] w-full'
                            className='h-full w-full object-cover'
                            src={media_nine?.src}
                            alt={media_nine?.alt}
                        />
                    </Fade>
                </div>
            </div>

            <div className='grid col-span-1 md:col-span-4 items-center lg:col-span-4 row-start-11 md:row-start-11 lg:row-start-7 bg-white ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        classNameContainer='h-full lg:h-[750px] w-full'
                        className='h-full w-full object-cover'
                        src={media_ten?.src}
                        alt={media_ten?.alt}
                    />
                </Fade>
            </div>


            <div className='grid col-span-1 md:col-span-4 lg:col-span-4 row-start-12 md:row-start-12 lg:row-start-8 py-5' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col items-center gap-5 px-4' >
                        <p className='text-sm lg:text-xl font-light text-center max-w-[700px]'>
                            {story?.[5]?.[locale as 'en' | 'es'] || ''}
                        </p>

                    </article>
                </Fade>
            </div>

            {/* MEDIA 10 VIDEO */}
            <div className='grid col-span-1 md:col-span-4 row-start-14 md:row-start-13 lg:row-start-9 bg-zinc-200 h-full' >
                <Fade triggerOnce duration={1000} >
                    <StreamingVideo
                        videoUrl={media_eleven?.mp4 || ''}
                        posterUrl={media_eleven?.src || ''}
                    />
                </Fade>
            </div>



        </section>

    )
}
