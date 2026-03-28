'use client';
import React from 'react';
import type { LocalizedParagraphArray } from '@/sanity.types';
import ImageWithLoader from '../components/ImageWithLoader';
import StreamingVideo from '../components/StreamingVideo';
import { Fade } from "react-awesome-reveal";

export const GridFour: React.FC<{ media: any[], story: LocalizedParagraphArray | undefined, locale: string }> = ({ media, story, locale }) => {

    const media_one = media?.[0];
    const media_two = media?.[1];
    const media_three = media?.[2];
    const media_four = media?.[3];
    const media_five = media?.[4];
    const media_six = media?.[5];
    const media_seven = media?.[6];
    const media_eight = media?.[7];
    const media_nine = media?.[8];

    return (
        <section className='grid grid-cols-1 md:grid-cols-3 grid-rows-[repeat(12, 200px)] gap-5 p-4 mb-5 ' >

            {/* TEXT 1 */}
            <div className='grid col-span-3 items-center py-5' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col gap-5 px-4 w-full' >
                        <p className='text-sm lg:text-xl font-semibold text-center max-w-[700px] mx-auto ' >
                            {story?.[6]?.[locale as 'en' | 'es'] || ''}
                        </p>

                    </article>
                </Fade>
            </div>

            {/* MEDIA 1 VIDEO */}
            <div className='grid col-span-3 bg-zinc-200 min-h-[400px] max-h-[95dvh]' >
                <Fade triggerOnce duration={1000} >
                    <StreamingVideo
                        videoUrl={media_one?.mp4 || ''}
                        posterUrl={media_one?.src || ''}
                    />
                </Fade>
            </div>

            {/* MEDIA 2 */}
            <div className='grid col-span-3 bg-zinc-200 ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        width={300}
                        height={300}
                        WithContainer
                        classNameContainer='w-full h-[600px] shadow-md bg-zinc-200'
                        className='h-full w-full object-cover object-center shadow-md'
                        src={media_two?.src}
                        alt={media_two?.alt}
                    />
                </Fade>
            </div>

            {/* TEXT 2 */}
            <div className='grid col-span-3 items-center py-5' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col gap-5 px-4' >
                        <p className='text-sm lg:text-xl font-semibold text-center max-w-[700px] mx-auto ' >
                            {story?.[7]?.[locale as 'en' | 'es'] || ''}
                        </p>
                    </article>
                </Fade>
            </div>


            {/* MEDIA 3 */}
            <div className='grid col-span-3 md:col-span-3 lg:col-span-1 bg-zinc-200 h-full' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        width={300}
                        height={300}
                        WithContainer
                        classNameContainer='w-full h-[85dvh] shadow-md bg-zinc-200'
                        className='h-full w-full object-cover object-center'
                        src={media_three?.src}
                        alt={media_three?.alt}
                    />
                </Fade>
            </div>


            {/* MEDIA 4 */}
            <div className='grid col-span-3 md:col-span-3 lg:col-span-1 bg-zinc-200 h-full' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        width={300}
                        height={300}
                        WithContainer
                        classNameContainer='w-full h-[85dvh] shadow-md bg-zinc-200'
                        className='h-full w-full object-cover object-center'
                        src={media_four?.src}
                        alt={media_four?.alt}
                    />
                </Fade>
            </div>


            {/* MEDIA 5 */}
            <div className='grid col-span-3 md:col-span-3 lg:col-span-1 bg-zinc-200 h-full' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        width={300}
                        height={300}
                        WithContainer
                        classNameContainer='w-full h-[85dvh] shadow-md bg-zinc-200'
                        className='h-full w-full object-cover object-center'
                        src={media_five?.src}
                        alt={media_five?.alt}
                    />
                </Fade>
            </div>


            {/* MEDIA 6 */}
            <div className='grid col-span-3 md:col-span-2 bg-zinc-200 ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        width={300}
                        height={300}
                        WithContainer
                        classNameContainer='w-full h-[600px] shadow-md bg-zinc-200'
                        className='h-full w-full object-cover object-center'
                        src={media_six?.src}
                        alt={media_six?.alt}
                    />
                </Fade>
            </div>

            {/* MEDIA 7 */}
            <div className='grid col-span-3 md:col-span-1 bg-zinc-200 ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        width={300}
                        height={300}
                        WithContainer
                        classNameContainer='w-full h-[600px] shadow-md bg-zinc-200'
                        className='h-full w-full object-cover object-center'
                        src={media_seven?.src}
                        alt={media_seven?.alt}
                    />
                </Fade>
            </div>


            {/* TEXT 3 */}
            <div className='grid col-span-3 items-center py-5' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col gap-5 px-4' >
                        <p className='text-sm lg:text-xl font-semibold text-center max-w-[700px] mx-auto ' >
                            {story?.[8]?.[locale as 'en' | 'es'] || ''}
                        </p>
                    </article>
                </Fade>
            </div>


            {/* MEDIA 8 */}
            <div className='grid col-span-3 bg-zinc-200 ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        width={300}
                        height={300}
                        WithContainer
                        classNameContainer='w-full h-[85dvh] shadow-md bg-zinc-200'
                        className='h-full w-full object-cover object-center'
                        src={media_eight?.src}
                        alt={media_eight?.alt}
                    />
                </Fade>
            </div>


            {/* MEDIA 2 VIDEO */}
            <div className='grid col-span-3 bg-zinc-200 min-h-[400px] max-h-[95dvh]' >
                <Fade triggerOnce duration={1000} >
                    <StreamingVideo
                        videoUrl={media_nine?.mp4 || ''}
                        posterUrl={media_nine?.src || ''}
                    />
                </Fade>
            </div>

        </section>
    );
}
