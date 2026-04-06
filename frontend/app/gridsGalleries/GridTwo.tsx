'use client';
import React from 'react';
import type { LocalizedParagraphArray } from '@/sanity.types';
import ImageWithLoader from '../components/ImageWithLoader';
import StreamingVideo from '../components/StreamingVideo';
import { Fade } from "react-awesome-reveal";

export const GridTwo: React.FC<{ media: any[], story: LocalizedParagraphArray | undefined, locale: string }> = ({ media, story, locale }) => {

    const media_one = media?.[0];
    const media_two = media?.[1];
    const media_three = media?.[2];
    const media_four = media?.[3];
    const media_five = media?.[4];
    const media_six = media?.[5];
    const media_seven = media?.[6];
    const media_eight = media?.[7];


    return (
        <section className='grid grid-cols-1 md:grid-cols-3 grid-rows-[repeat(12, 200px)] gap-5 p-4 mb-5' >

            <div className='grid col-span-1 md:col-span-3 row-start-1 md:row-start-1 min-h-[80px]' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col items-center gap-5 px-4' >
                        <p className='text-sm lg:text-xl font-light text-center tracking-widest max-w-[1100px]' >
                            {story?.[10]?.[locale as 'en' | 'es'] || ''}
                        </p>
                    </article>
                </Fade>
            </div>

            {/* MEDIA 1 */}
            <div className='grid col-span-1 row-start-2 md:row-start-2 bg-zinc-200 max-h-[600px]' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        width={300}
                        height={300}
                        WithContainer
                        classNameContainer='w-full h-[400px] md:h-[600px] shadow-md bg-zinc-200'
                        className='h-full w-full object-cover'
                        src={media_one?.src}
                        alt={media_one?.alt}
                    />
                </Fade>
            </div>

            {/* MEDIA 2 */}
            <div className='grid col-span-1 row-start-3 md:row-start-2 bg-zinc-200 max-h-[600px]' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        width={300}
                        height={300}
                        WithContainer
                        classNameContainer='w-full h-[400px] md:h-[600px] shadow-md bg-zinc-200'
                        className='h-full w-full object-cover'
                        src={media_two?.src}
                        alt={media_two?.alt}
                    />
                </Fade>
            </div>

            {/* MEDIA 3 */}
            <div className='grid col-span-1 row-start-4 md:row-start-2 bg-zinc-200 max-h-[600px]' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        width={300}
                        height={300}
                        WithContainer
                        classNameContainer='w-full h-[400px] md:h-[600px] shadow-md bg-zinc-200'
                        className='h-full w-full object-cover'
                        src={media_three?.src}
                        alt={media_three?.alt}
                    />
                </Fade>
            </div>

            <div className='grid col-span-1 md:col-span-3 row-start-5 md:row-start-4 min-h-[80px]' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col items-center gap-5 px-4' >
                        <p className='text-sm lg:text-xl font-light text-center tracking-widest max-w-[1100px]' >
                            {story?.[11]?.[locale as 'en' | 'es'] || ''}
                        </p>
                    </article>
                </Fade>
            </div>


            {/* MEDIA 4 */}
            <div className='grid col-span-1 md:col-span-3 row-start-6 md:row-start-5 bg-zinc-200 h-[80dvh]' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        width={300}
                        height={300}
                        WithContainer
                        classNameContainer='w-full h-[80dvh] shadow-md bg-zinc-200'
                        className='h-full w-full object-cover object-[0%_100%]'
                        src={media_four?.src}
                        alt={media_four?.alt}
                    />
                </Fade>
            </div>

            {/* MEDIA 6 */}
            <div className='grid col-span-1 md:col-span-3 row-start-7 md:row-start-6 bg-zinc-200 h-full' >
                <div className='flex flex-col lg:flex-row w-full items-center gap-5' >
                    <Fade triggerOnce duration={1000} >
                        <ImageWithLoader
                            width={300}
                            height={300}
                            WithContainer
                            classNameContainer='w-full h-full shadow-md bg-zinc-200'
                            className='h-full w-full object-cover object-center'
                            src={media_five?.src}
                            alt={media_five?.alt}
                        />
                    </Fade>

                    <Fade triggerOnce duration={1000} >
                        <ImageWithLoader
                            width={300}
                            height={300}
                            WithContainer
                            classNameContainer='w-full h-full shadow-md bg-zinc-200'
                            className='h-full w-full object-cover object-center'
                            src={media_six?.src}
                            alt={media_six?.alt}
                        />
                    </Fade>
                </div>
            </div>

            <div className='grid col-span-1 md:col-span-3 row-start-8 md:row-start-7 py-5' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col items-center gap-5 px-4' >
                        <p className='text-sm lg:text-xl font-light text-center tracking-widest max-w-[1100px]' >
                            {story?.[12]?.[locale as 'en' | 'es'] || ''}
                        </p>
                    </article>
                </Fade>
            </div>

            {/* MEDIA 6 VIDEO */}
            <div className='grid col-span-1 md:col-span-3 row-start-9 md:row-start-8 bg-zinc-200 min-h-[800px] max-h-[70dvh]' >
                <Fade triggerOnce duration={1000} >
                    <StreamingVideo
                        videoUrl={media_seven?.mp4 || ''}
                        posterUrl={media_seven?.src || ''}
                        height='800px'
                    />
                </Fade>
            </div>


            {/* MEDIA 7 */}
            <div className='grid col-span-1 md:col-span-3 row-start-10 md:row-start-9 bg-zinc-200 h-full' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        width={300}
                        height={300}
                        WithContainer
                        classNameContainer='w-full h-full shadow-md bg-zinc-200'
                        className='h-full w-full object-cover object-center'
                        src={media_eight?.src}
                        alt={media_eight?.alt}
                    />
                </Fade>
            </div>

        </section>
    );
}
