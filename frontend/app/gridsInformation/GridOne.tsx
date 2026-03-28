'use client';
import React from 'react';
import Image from 'next/image';
import ImageWithLoader from '../components/ImageWithLoader';
import StreamingVideo from '../components/StreamingVideo';
import { Fade } from "react-awesome-reveal";
import { LocalizedParagraphArray } from '@/sanity.types';

export const GridOne: React.FC<{ media: any[], story: LocalizedParagraphArray | undefined, locale: string }> = ({ media, story, locale }) => {


    const media_one = media?.[0];
    const media_two = media?.[1];
    const media_three = media?.[2];
    const media_four = media?.[3];
    const media_five = media?.[4];
    const media_six = media?.[5];
    const media_seven = media?.[6];
    return (
        <section className='grid grid-cols-1 md:grid-cols-4 grid-rows-[repeat(12, 200px)] gap-5 p-4 mb-5 ' >

            {/* INFORMATION TEXT HEADER */}
            <div className='grid col-span-4 row-start-1 xl:col-span-2 xl:row-start-1 xl:row-end-2 items-center min-h-[200px]' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col gap-5 px-4' >
                        <p className='text-sm lg:text-xl font-semibold'>
                            {story?.[0]?.[locale as 'en' | 'es'] || ''}
                        </p>

                        <p className='text-sm lg:text-xl font-semibold'>
                            {story?.[1]?.[locale as 'en' | 'es'] || ''}
                        </p>

                        <p className='text-sm lg:text-xl font-semibold'>
                            {story?.[2]?.[locale as 'en' | 'es'] || ''}
                        </p>

                        <p className='text-sm lg:text-xl font-semibold'>
                            {story?.[3]?.[locale as 'en' | 'es'] || ''}
                        </p>

                    </article>
                </Fade>
            </div>

            {/* MEDIA 1 */}
            {/* <div className='grid col-span-4 row-start-2 lg:col-span-2 xl:col-span-2 xl:row-start-2 xl:row-end-4 bg-zinc-200 h-[400px]' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        classNameContainer='h-[400px]  bg-zinc-200'
                        className='object-cover w-full h-full object-center'
                        src={media_one?.src}
                        alt={media_one?.alt}
                    />
                </Fade>
            </div> */}

            {/* MEDIA 1 */}
            <div className='grid col-span-4 row-start-3 lg:row-start-2 lg:col-span-2 xl:col-span-2 xl:row-start-1 xl:row-end-4 bg-zinc-200 ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        classNameContainer='h-[600px] lg:h-full '
                        className='w-full h-full object-cover object-center '
                        src={media_two?.src}
                        alt={media_two?.alt}
                    />
                </Fade>
            </div>


            {/* MEDIA 3 */}
            <div className='grid col-span-4 row-start-4 lg:row-start-3 lg:col-span-2 xl:col-span-2 xl:row-start-2 xl:row-end-4 bg-zinc-200 min-h-[450px]' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        className='h-full w-full object-cover'
                        classNameContainer='h-full w-full '
                        src={media_three?.src}
                        alt={media_three?.alt}
                    />
                </Fade>
            </div>

            {/* MEDIA 4 */}
            <div className='grid col-span-4 row-start-5 lg:row-start-3 lg:col-span-2 xl:col-span-4 xl:row-start-4 bg-zinc-200' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        className='h-full w-full object-cover object-[0%_25%] '
                        classNameContainer='h-full w-full '
                        src={media_four?.src || ''}
                        alt={media_four?.alt || ''}
                    />
                </Fade>
            </div>

            {/* INFORMATION TEXT FOOTER */}
            <div className='grid col-span-4 row-start-6 lg:row-start-4 xl:row-start-5 items-center min-h-[200px]' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col items-center gap-5 px-4' >
                        <p className='text-sm lg:text-xl font-semibold max-w-[800px] mx-auto text-center' >
                            {story?.[4]?.[locale as 'en' | 'es'] || ''}
                        </p>
                    </article>
                </Fade>
            </div>

            {/* MEDIA 5 VIDEO */}
            <div className='grid col-span-4 row-start-7 lg:row-start-5 xl:row-start-6 bg-zinc-200 min-h-[400px] max-h-[95dvh]' >
                <Fade triggerOnce duration={1000} >
                    <StreamingVideo
                        videoUrl={media_five?.mp4 || ''}
                        posterUrl={media_five?.src || ''}
                    />
                </Fade>
            </div>

            <div className='grid col-span-4 row-start-8 lg:row-start-6 xl:row-start-7 items-center py-5' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col items-center gap-5 px-4' >
                        <p className='text-sm lg:text-xl font-semibold max-w-[700px] mx-auto text-center' >
                            {story?.[5]?.[locale as 'en' | 'es'] || ''}
                        </p>
                    </article>
                </Fade>
            </div>

            {/* MEDIA 6 VIDEO */}
            <div className='grid col-span-4 row-start-9 lg:row-start-7 xl:row-start-8 bg-zinc-200 min-h-[400px] max-h-[95dvh]' >
                <Fade triggerOnce duration={1000} >
                    <StreamingVideo
                        videoUrl={media_six?.mp4 || ''}
                        posterUrl={media_six?.src || ''}
                    />
                </Fade>
            </div>

            {/* MEDIA 7 VIDEO */}
            <div className='grid col-span-4 row-start-10 lg:row-start-8 xl:row-start-9 bg-zinc-200 min-h-[400px] max-h-[95dvh]' >
                <Fade triggerOnce duration={1000} >
                    <StreamingVideo
                        videoUrl={media_seven?.mp4 || ''}
                        posterUrl={media_seven?.src || ''}
                    />
                </Fade>
            </div>




        </section>
    );
}
