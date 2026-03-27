'use client';
import React from 'react';
import type { LocalizedParagraphArray } from '@/sanity.types';
import ImageWithLoader from '../components/ImageWithLoader';
import StreamingVideo from '../components/StreamingVideo';
import { Fade } from "react-awesome-reveal";

export const GridFive: React.FC<{ media: any[], story: LocalizedParagraphArray | undefined, locale: string }> = ({ media, story, locale }) => {

    const media_one = media?.[0];
    const media_two = media?.[1];
    const media_three = media?.[2];
    const media_four = media?.[3];
    const media_five = media?.[4];
    const media_six = media?.[5];
    const media_seven = media?.[6];
    const media_eight = media?.[7];

    return (
        <section className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 grid-rows-[repeat(12, 200px)] gap-5 p-4 mb-5 ' >

            {/* TEXT 1 */}
            <div className='grid col-span-1 md:col-span-4 lg:col-span-6 row-start-1 items-center py-5' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col gap-5 px-4 w-full items-center justify-center' >
                        <p className='text-sm lg:text-xl font-semibold' >
                            {story?.[6]?.[locale as 'en' | 'es'] || ''}
                        </p>
                    </article>
                </Fade>
            </div>

            {/* MEDIA 1 */}
            <div className='grid col-span-1 md:col-span-4 lg:col-span-2 lg:col-start-1  md:row-start-2 lg:row-start-2 bg-zinc-200 h-[750px]' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        width={300}
                        height={300}
                        WithContainer
                        classNameContainer='w-full h-[750px] shadow-md bg-zinc-200'
                        className='object-cover object-center w-full h-full'
                        src={media_one?.src}
                        alt={media_one?.alt}
                    />
                </Fade>
            </div>

            {/* MEDIA 2 */}
            <div className='grid col-span-1 md:col-span-4 lg:col-span-2 lg:col-start-3  md:row-start-3 lg:row-start-2 bg-zinc-200 h-[750px]' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        width={300}
                        height={300}
                        WithContainer
                        classNameContainer='w-full h-[750px] shadow-md bg-zinc-200'
                        className='object-cover object-center w-full h-full'
                        src={media_two?.src}
                        alt={media_two?.alt}
                    />
                </Fade>
            </div>

            {/* MEDIA 3 */}
            <div className='grid col-span-1 md:col-span-4 lg:col-span-2 lg:col-start-5 md:row-start-4 lg:row-start-2 bg-zinc-200 h-[750px]' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        width={300}
                        height={300}
                        WithContainer
                        classNameContainer='w-full h-[750px] shadow-md bg-zinc-200'
                        className='object-cover object-center w-full h-full'
                        src={media_three?.src}
                        alt={media_three?.alt}
                    />
                </Fade>
            </div>


            {/* TEXT 2 */}
            <div className='grid col-span-1 md:col-span-4 lg:col-span-6 items-center md:row-start-5 lg:row-start-3 py-5' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col gap-5 px-4 w-full items-center justify-center' >
                        <p className='text-sm lg:text-xl font-semibold max-w-[720px] text-center' >
                            {story?.[7]?.[locale as 'en' | 'es'] || ''}
                        </p>
                    </article>
                </Fade>
            </div>

            {/* MEDIA 4 */}
            <div className='grid col-span-1 md:col-span-4 md:row-start-6 lg:col-span-6 lg:row-start-4 bg-zinc-200 h-[80dvh]' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        width={300}
                        height={300}
                        WithContainer
                        classNameContainer='w-full h-[80dvh] shadow-md bg-zinc-200'
                        className='object-cover object-center w-full h-full'
                        src={media_four?.src}
                        alt={media_four?.alt}
                    />
                </Fade>
            </div>

            {/* MEDIA 5 */}
            <div className='grid col-span-1 md:col-span-4 lg:col-span-3 row-start-6 md:row-start-7 lg:row-start-5 bg-zinc-200 h-[70dvh] min-h-[500px] max-h-[750px]' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        width={300}
                        height={300}
                        WithContainer
                        classNameContainer='w-full h-[70dvh] min-h-[500px] max-h-[750px] shadow-md bg-zinc-200'
                        className='object-cover object-center w-full h-full'
                        src={media_five?.src}
                        alt={media_five?.alt}
                    />
                </Fade>
            </div>

            {/* MEDIA 6 */}
            <div className='grid col-span-1 md:col-span-4 lg:col-span-3 row-start-7 md:row-start-8 lg:row-start-5 bg-zinc-200 h-[70dvh] min-h-[500px] max-h-[750px]' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        width={300}
                        height={300}
                        WithContainer
                        classNameContainer='w-full h-[70dvh] min-h-[500px] max-h-[750px] shadow-md bg-zinc-200'
                        className='object-cover object-center w-full h-full'
                        src={media_six?.src}
                        alt={media_six?.alt}
                    />
                </Fade>
            </div>

            {/* TEXT 3 */}
            <div className='grid col-span-1 md:col-span-4 lg:col-span-6 items-center row-start-9 md:row-start-9 lg:row-start-6 py-5' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col gap-5 px-4 w-full items-center justify-center' >
                        <p className='text-sm lg:text-xl font-semibold max-w-[720px] text-center' >
                            {story?.[8]?.[locale as 'en' | 'es'] || ''}
                        </p>
                    </article>
                </Fade>
            </div>

            {/* VIDEO 1 */}
            <div className='grid col-span-1 md:col-span-4 lg:col-span-6 row-start-10 md:row-start-10 lg:row-start-7 bg-zinc-200 max-h-[80dvh] h-[80dvh]' >
                <Fade triggerOnce duration={1000} >
                    <StreamingVideo
                        videoUrl={media_seven?.mp4 || ''}
                        posterUrl={media_seven?.src || ''}
                        height='100%'
                    />
                </Fade>
            </div>

            {/* VIDEO 2 */}
            <div className='grid col-span-1 md:col-span-4 lg:col-span-6 row-start-11 md:row-start-11 lg:row-start-8 lg:mt-5 bg-zinc-200 ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        width={300}
                        height={300}
                        WithContainer
                        classNameContainer='w-full max-h-[80dvh] shadow-md bg-zinc-200'
                        className='object-fill object-center w-full h-full'
                        src={media_eight?.src}
                        alt={media_eight?.alt}
                    />
                </Fade>
            </div>

        </section>
    );
}
