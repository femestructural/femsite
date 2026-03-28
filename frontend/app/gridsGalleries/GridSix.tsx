'use client';
import React from 'react';
import type { LocalizedParagraphArray } from '@/sanity.types';
import ImageWithLoader from '../components/ImageWithLoader';
import StreamingVideo from '../components/StreamingVideo';
import { Fade } from "react-awesome-reveal";

export const GridSix: React.FC<{ media: any[], story: LocalizedParagraphArray | undefined, locale: string }> = ({ media, story, locale }) => {

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
            <div className='grid col-span-1 md:col-span-3 items-center min-h-[200px]' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col gap-5 px-4 w-full' >
                        <p className='text-sm lg:text-xl font-semibold text-center max-w-[700px] mx-auto ' >
                            {story?.[6]?.[locale as 'en' | 'es'] || ''}
                        </p>

                    </article>
                </Fade>
            </div>

            {/* MEDIA 1 */}
            <div className='grid col-span-1 md:col-span-3 row-start-2 bg-zinc-200' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        classNameContainer='h-full w-full  '
                        className='h-full w-full object-cover object-center'
                        src={media_one?.src}
                        alt={media_one?.alt}
                    />
                </Fade>
            </div>

            {/* MEDIA 2 */}
            <div className='grid col-span-1 md:col-span-3 row-start-3 bg-zinc-200' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        classNameContainer='h-full w-full  '
                        className='h-full w-full object-cover object-center'
                        src={media_two?.src}
                        alt={media_two?.alt}
                    />
                </Fade>
            </div>

            {/* TEXT 1 */}
            <div className='grid col-span-1 md:col-span-3  row-start-4 items-center py-5' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col gap-5 px-4 w-full' >
                        <p className='text-sm lg:text-xl font-semibold text-center max-w-[700px] mx-auto ' >
                            {story?.[7]?.[locale as 'en' | 'es'] || ''}
                        </p>

                    </article>
                </Fade>
            </div>

            <div className='grid col-span-1 md:col-span-3 lg:col-span-1 row-start-5 lg:row-start-5 ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        classNameContainer='h-full w-full  '
                        className='h-full w-full object-cover object-center'
                        src={media_three?.src}
                        alt={media_three?.alt}
                    />
                </Fade>
            </div>

            <div className='grid col-span-1 md:col-span-3 lg:col-span-1 row-start-6 lg:row-start-5 ' >

                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        classNameContainer='h-full w-full  '
                        className='h-full w-full object-cover object-center'
                        src={media_four?.src}
                        alt={media_four?.alt}
                    />
                </Fade>

            </div>

            <div className='grid col-span-1 md:col-span-3 lg:col-span-1 row-start-7 lg:row-start-5 ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        classNameContainer='h-full w-full  '
                        className='h-full w-full object-cover object-center'
                        src={media_five?.src}
                        alt={media_five?.alt}
                    />
                </Fade>
            </div>

            {/* MEDIA 2 */}
            <div className='grid col-span-1 md:col-span-2 row-start-8 lg:row-start-6 ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        classNameContainer='h-full w-full'
                        className='h-full w-full object-cover object-center'
                        src={media_six?.src}
                        alt={media_six?.alt}
                    />
                </Fade>
            </div>

            <div className='grid col-span-1 md:col-span-1 row-start-9 lg:row-start-6' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        classNameContainer='h-full w-full'
                        className='h-full w-full object-cover object-center'
                        src={media_seven?.src}
                        alt={media_seven?.alt}
                    />
                </Fade>
            </div>


            <div className='grid col-span-1 md:col-span-3 items-center py-5 md:row-start-10 lg:row-start-7' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col gap-5 px-4 w-full' >
                        <p className='text-sm lg:text-xl font-semibold text-center max-w-[700px] mx-auto ' >
                            {story?.[8]?.[locale as 'en' | 'es'] || ''}
                        </p>

                    </article>
                </Fade>
            </div>


            <div className='grid col-span-1 md:col-span-3 lg:col-span-3 row-start-11 lg:row-start-8 ' >

                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        classNameContainer='h-full w-full  '
                        className='h-full w-full object-cover object-center'
                        src={media_eight?.src}
                        alt={media_eight?.alt}
                    />
                </Fade>

            </div>


            {/* MEDIA 10 VIDEO */}
            <div className='grid col-span-1 md:col-span-4 row-start-14 md:row-start-13 lg:row-start-9 bg-zinc-200 h-full' >
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
