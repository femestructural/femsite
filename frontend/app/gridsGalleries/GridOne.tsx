'use client';
import React from 'react';
import type { LocalizedParagraphArray } from '@/sanity.types';
import ImageWithLoader from '../components/ImageWithLoader';
import StreamingVideo from '../components/StreamingVideo';
import { Fade } from "react-awesome-reveal";

export const GridOne: React.FC<{ media: any[], story: LocalizedParagraphArray | undefined, locale: string }> = ({ media, story, locale }) => {

    const media_one = media?.[0];
    const media_two = media?.[1];
    const media_three = media?.[2];
    const media_four = media?.[3];
    const media_five = media?.[4];
    const media_six = media?.[5];
    const media_seven = media?.[6];

    return (
        <section className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 grid-rows-[repeat(12, 200px)] gap-5 p-4 mb-5' >

            {/* MEDIA 1 */}
            <div className='grid col-span-1 md:col-span-4 lg:col-span-2 row-start-1 lg:col-start-1 lg:col-end-3 bg-zinc-200 h-[430px]' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        width={300}
                        height={300}
                        WithContainer
                        classNameContainer='w-full h-[430px] shadow-md bg-zinc-200'
                        className='object-cover object-center w-full h-full'
                        src={media_one?.src}
                        alt={media_one?.alt}
                    />
                </Fade>
            </div>

            {/* MEDIA 2 */}
            <div className='grid col-span-1 jusitfy-center items-center md:col-span-4 lg:col-span-1 lg:row-start-2 lg:col-start-1 lg:col-end-3 py-4 lg:py-0 lg:h-[430px]' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col gap-5 px-4' >
                        <p className='text-sm lg:text-xl font-light text-center'>
                            {story?.[6]?.[locale as 'en' | 'es'] || ''}
                        </p>
                    </article>
                </Fade>
            </div>

            {/* MEDIA 3 */}
            <div className='grid col-span-1 md:col-span-4 lg:col-span-1 lg:row-start-1 lg:row-end-3 lg:col-start-3 lg:col-end-5 bg-zinc-200 ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        width={300}
                        height={300}
                        WithContainer
                        classNameContainer='w-full h-[880px] shadow-md'
                        className='h-full w-full object-cover'
                        src={media_three?.src}
                        alt={media_three?.alt}
                    />
                </Fade>
            </div>


            {/* MEDIA 4 */}
            <div className='grid col-span-1 md:col-span-4 lg:col-span-2 row-start-4 md:row-start-4 lg:row-start-3 lg:col-span-2 bg-zinc-200 min-h-[400px] max-h-[400px]' >
                <Fade triggerOnce duration={1000} >
                    <StreamingVideo
                        videoUrl={media_four?.mp4 || ''}
                        posterUrl={media_four?.src || ''}
                        height='400px'
                    />
                </Fade>
            </div>

            {/* MEDIA 5 */}
            <div className='grid col-span-1 md:col-span-4 lg:col-span-2 row-start-5 md:row-start-5 lg:row-start-3 lg:col-span-2 lg:col-start-3 bg-zinc-200 min-h-[400px] max-h-[400px]' >
                <Fade triggerOnce duration={1000} >
                    <StreamingVideo
                        videoUrl={media_five?.mp4 || ''}
                        posterUrl={media_five?.src || ''}
                        height='400px'
                    />
                </Fade>
            </div>


            {/* MEDIA 6 VIDEO */}
            <div className='grid col-span-1 md:col-span-4 lg:col-span-4 row-start-6 md:row-start-6 lg:row-start-4 bg-zinc-200 min-h-[400px] max-h-[70dvh]' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        width={300}
                        height={300}
                        WithContainer
                        classNameContainer='w-full h-[70dvh] shadow-md bg-zinc-200'
                        className='h-[70dvh] w-full object-cover shadow-md'
                        src={media_six?.src}
                        alt={media_six?.alt}
                    />
                </Fade>
            </div>

            <div className='grid col-span-1 md:col-span-4 lg:col-span-4 row-start-7 md:row-start-7 lg:row-start-5 py-5 ' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col gap-5 px-4 w-full items-center ' >
                        <p className='text-sm lg:text-xl font-light w-full max-w-[700px] mx-auto text-center'>
                            {story?.[7]?.[locale as 'en' | 'es'] || ''}
                        </p>
                    </article>
                </Fade>
            </div>


            {/* MEDIA 7 VIDEO */}
            <div className='grid col-span-1 md:col-span-4 lg:col-span-4 row-start-8 md:row-start-8 lg:row-start-8 bg-zinc-200 min-h-[400px] max-h-[95dvh]' >
                <Fade triggerOnce duration={1000} >
                    <img
                        className='h-[95dvh] w-full object-cover shadow-md'
                        src={media_seven?.src}
                        alt={media_seven?.alt}
                    />
                </Fade>
            </div>

        </section>
    );
}
