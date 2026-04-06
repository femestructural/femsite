'use client';
import React from 'react';
import type { LocalizedParagraphArray } from '@/sanity.types';
import ImageWithLoader from '../components/ImageWithLoader';
import StreamingVideo from '../components/StreamingVideo';
import { Fade } from "react-awesome-reveal";

export const GridThree: React.FC<{ media: any[], story: LocalizedParagraphArray | undefined, locale: string }> = ({ media, story, locale }) => {

    const media_one = media?.[0];
    const media_two = media?.[1];
    const media_three = media?.[2];
    const media_four = media?.[3];
    const media_five = media?.[4];
    const media_six = media?.[5];
    const media_seven = media?.[6];
    const media_eight = media?.[7];

    return (
        <section className='grid grid-cols-2 md:grid-cols-2 grid-rows-[repeat(20, 200px)] gap-5 p-4 mb-5 '>

            {/* TEXT 1 */}
            <div className='grid col-span-2 items-center min-h-[100px]' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col items-center gap-5 px-4' >
                        <p className='text-sm lg:text-xl font-light text-center tracking-widest max-w-[1100px] leading-15' >
                            {story?.[8]?.[locale as 'en' | 'es'] || ''}
                        </p>
                    </article>
                </Fade>
            </div>

            {/* MEDIA 1 */}
            {media_one && (
                <div className='col-span-2 md:col-span-1 md:row-start-2 bg-zinc-200 h-full'>
                    <Fade triggerOnce duration={1000}>
                        {media_one?.mp4 ? (
                            <StreamingVideo
                                videoUrl={media_one.mp4}
                                posterUrl={media_one.src || ''}
                                height='700px'
                            />
                        ) : (
                            <img
                                className='h-full w-full object-cover '
                                src={media_one?.src}
                                alt={media_one?.alt}
                            />
                        )}
                    </Fade>
                </div>
            )}

            {/* MEDIA 2 */}
            {media_two && (
                <div className='col-span-2 md:col-span-1 md:row-start-2 bg-zinc-200 h-full'>
                    <Fade triggerOnce duration={1000}>
                        {media_two?.mp4 ? (
                            <StreamingVideo
                                videoUrl={media_two.mp4}
                                posterUrl={media_two.src || ''}
                                height='700px'
                            />
                        ) : (
                            <img
                                className='h-full w-full object-cover '
                                src={media_two?.src}
                                alt={media_two?.alt}
                            />
                        )}
                    </Fade>
                </div>
            )}


            {/* MEDIA 3 */}
            {media_three && (
                <div className='col-span-2 bg-zinc-200 h-[85dvh]'>
                    <Fade triggerOnce duration={1000}>
                        {media_three?.mp4 ? (
                            <StreamingVideo
                                videoUrl={media_three.mp4}
                                posterUrl={media_three.src || ''}
                                height='400px'
                            />
                        ) : (
                            <ImageWithLoader
                                width={300}
                                height={300}
                                WithContainer
                                classNameContainer='w-full h-[85dvh]  bg-zinc-200'
                                className='h-full w-full object-cover'
                                src={media_three?.src}
                                alt={media_three?.alt}
                            />
                        )}
                    </Fade>
                </div>
            )}

            {/* TEXT 2 */}
            <div className='grid col-span-2 items-center py-5' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col items-center gap-5 px-4' >
                        <p className='text-sm lg:text-xl  font-light text-center tracking-widest max-w-[1100px] leading-15' >
                            {story?.[9]?.[locale as 'en' | 'es'] || ''}
                        </p>
                    </article>
                </Fade>
            </div>

            {/* MEDIA 4 */}
            {media_four && (
                <div className='col-span-2 md:col-span-2 lg:col-span-1 bg-zinc-200 h-full'>
                    <Fade triggerOnce duration={1000}>
                        {media_four?.mp4 ? (
                            <StreamingVideo
                                videoUrl={media_four.mp4}
                                posterUrl={media_four.src || ''}
                                height='400px'
                            />
                        ) : (
                            <ImageWithLoader
                                width={300}
                                height={300}
                                WithContainer
                                classNameContainer='w-full h-full  bg-zinc-200'
                                className='h-full w-full object-cover'
                                src={media_four?.src}
                                alt={media_four?.alt}
                            />
                        )}
                    </Fade>
                </div>
            )}

            {/* MEDIA 5 */}
            {media_five && (
                <div className='col-span-2 md:col-span-2 lg:col-span-1 bg-zinc-200 h-full'>
                    <Fade triggerOnce duration={1000}>
                        {media_five?.mp4 ? (
                            <StreamingVideo
                                videoUrl={media_five.mp4}
                                posterUrl={media_five.src || ''}
                                height='400px'
                            />
                        ) : (
                            <ImageWithLoader
                                width={300}
                                height={300}
                                WithContainer
                                classNameContainer='w-full h-full  bg-zinc-200'
                                className='h-full w-full object-cover'
                                src={media_five?.src}
                                alt={media_five?.alt}
                            />
                        )}
                    </Fade>
                </div>
            )}

            {/* MEDIA 6 */}
            {media_six && (
                <div className='col-span-2 bg-zinc-200 h-[85dvh]'>
                    <Fade triggerOnce duration={1000}>
                        {media_six?.mp4 ? (
                            <StreamingVideo
                                videoUrl={media_six.mp4}
                                posterUrl={media_six.src || ''}
                                height='400px'
                            />
                        ) : (
                            <ImageWithLoader
                                width={300}
                                height={300}
                                WithContainer
                                classNameContainer='h-[85dvh] w-full object-cover  bg-zinc-200'
                                className='h-full w-full object-cover object-center'
                                src={media_six?.src}
                                alt={media_six?.alt}
                            />
                        )}
                    </Fade>
                </div>
            )}

            {/* TEXT 3 */}
            <div className='grid col-span-2 items-center py-5' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col items-center gap-5 px-4' >
                        <p className='text-sm lg:text-xl font-light text-center tracking-widest max-w-[1100px] leading-15' >
                            {story?.[10]?.[locale as 'en' | 'es'] || ''}
                        </p>
                    </article>
                </Fade>
            </div>

            {/* MEDIA 7 */}
            {media_seven && (
                <div className='col-span-2 md:col-span-2 lg:col-span-1 bg-zinc-200 h-full'>
                    <Fade triggerOnce duration={1000}>
                        {media_seven?.mp4 ? (
                            <StreamingVideo
                                videoUrl={media_seven.mp4}
                                posterUrl={media_seven.src || ''}
                            />
                        ) : (
                            <ImageWithLoader
                                width={300}
                                height={300}
                                WithContainer
                                classNameContainer='w-full h-[60dvh]  bg-zinc-200'
                                className='h-full w-full object-cover object-center'
                                src={media_seven?.src}
                                alt={media_seven?.alt}
                            />
                        )}
                    </Fade>
                </div>
            )}

            {/* MEDIA 8 */}
            {media_eight && (
                <div className='col-span-2 md:col-span-2 lg:col-span-1 bg-zinc-200 h-full'>
                    <Fade triggerOnce duration={1000}>
                        {media_eight?.mp4 ? (
                            <StreamingVideo
                                videoUrl={media_eight.mp4}
                                posterUrl={media_eight.src || ''}
                                height='400px'
                            />
                        ) : (
                            <ImageWithLoader
                                width={300}
                                height={300}
                                WithContainer
                                classNameContainer='w-full h-[60dvh]  bg-zinc-200'
                                className='h-full w-full object-cover object-center'
                                src={media_eight?.src}
                                alt={media_eight?.alt}
                            />
                        )}
                    </Fade>
                </div>
            )}

        </section>
    );
}
