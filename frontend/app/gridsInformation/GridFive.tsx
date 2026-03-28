'use client';
import React from 'react';
import ImageWithLoader from '../components/ImageWithLoader';
import StreamingVideo from '../components/StreamingVideo';
import { Fade } from "react-awesome-reveal";
import { LocalizedParagraphArray } from '@/sanity.types';

export const GridFive: React.FC<{ media: any[], story: LocalizedParagraphArray | undefined, locale: string }> = ({ media, story, locale }) => {

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

    return (
        <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 grid-rows-[repeat(12, 200px)] gap-5 p-4 mb-5  ' >

       
            <div className='grid col-span-1 md:col-span-3 lg:col-span-3 md:row-start-1 items-center py-5 ' >
                <Fade triggerOnce duration={1000} >
                    <div className='flex flex-col gap-5 xl:flex-row items-center justify-between w-full ' >
                        <article className='flex flex-col w-full lg:max-w-[450px] items-start md:items-center xl:items-start gap-5 px-4' >
                            <p className='text-sm lg:text-xl font-semibold' >
                                {story?.[0]?.[locale as 'en' | 'es'] || ''}
                            </p>

                            <p className='text-sm lg:text-xl font-semibold' >
                                {story?.[1]?.[locale as 'en' | 'es'] || ''}
                            </p>

                        </article>

                        <article className='flex flex-col w-full xl:w-[800px] items-start md:items-center xl:items-start gap-5 px-4 ' >

                            <p className='text-sm lg:text-xl font-semibold' >
                                {story?.[2]?.[locale as 'en' | 'es'] || ''}
                            </p>

                            <p className='text-sm lg:text-xl font-semibold' >
                                {story?.[3]?.[locale as 'en' | 'es'] || ''}
                            </p>

                        </article>
                    </div>
                </Fade>
            </div>


            {/* MEDIA 1 */}
            <div className='grid col-span-1 md:col-span-3 lg:col-span-4 row-start-2 md:row-start-2 lg:row-start-2 h-[80dvh] bg-zinc-200 ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        classNameContainer='h-[80dvh] w-full  '
                        className='h-full w-full object-cover object-center'
                        src={media_one?.src}
                        alt={media_one?.alt}
                    />
                </Fade>
            </div>

            {/* MEDIA 2 */}
            <div className='grid col-span-1 md:col-span-3 lg:col-span-1 row-start-3 md:row-start-3 md:row-end-3 lg:row-start-3 lg:h-[80dvh] bg-zinc-200 ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        classNameContainer='h-full lg:h-[80dvh] w-full flex items-center justify-center'
                        className='w-full h-full object-cover object-center'
                        src={media_two?.src}
                        alt={media_two?.alt}
                    />
                </Fade>
            </div>


            {/* MEDIA 3 */}
            <div className='grid col-span-1 md:col-span-3 lg:col-span-3 row-start-4 md:row-start-4 lg:row-start-3 h-[80dvh] bg-zinc-200 ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        classNameContainer='h-[80dvh] w-full  bg-white flex items-center justify-center'
                        className='h-[72%] w-full object-cover object-center'
                        src={media_three?.src}
                        alt={media_three?.alt}
                    />
                </Fade>
            </div>


            {/* TEXT 2 */}
            <div className='grid col-span-1 md:col-span-3 lg:col-span-3 row-start-5 md:row-start-5 lg:row-start-4 items-center py-5' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col gap-5 px-4 w-full items-center justify-center' >
                        <p className='text-sm lg:text-xl font-semibold text-center' >
                            {story?.[4]?.[locale as 'en' | 'es'] || ''}
                        </p>
                    </article>
                </Fade>
            </div>

            {/* MEDIA 4 */}
            <div className='grid col-span-1 md:col-span-3 lg:col-span-2 row-start-6 md:row-start-6 lg:row-start-5 h-[80dvh] bg-zinc-200 ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        classNameContainer='h-[80dvh] w-full  bg-white flex items-center justify-center'
                        className='h-full w-full object-cover object-center'
                        src={media_four?.src}
                        alt={media_four?.alt}
                    />
                </Fade>
            </div>


            {/* MEDIA 5 */}
            <div className='grid col-span-1 md:col-span-3 lg:col-span-2 row-start-7 md:row-start-7 lg:row-start-5 h-[80dvh] bg-zinc-200 ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        classNameContainer='h-[80dvh] w-full  bg-white flex items-center justify-center'
                        className='h-full w-full object-cover object-center'
                        src={media_five?.src}
                        alt={media_five?.alt}
                    />
                </Fade>
            </div>

            <div className='grid col-span-1 md:col-span-3 lg:col-span-3 row-start-8 md:row-start-8 lg:row-start-6 items-center py-5' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col gap-5 px-4 w-full items-center justify-center' >
                        <p className='text-sm lg:text-xl font-semibold' >
                            {story?.[5]?.[locale as 'en' | 'es'] || ''}
                        </p>
                    </article>
                </Fade>
            </div>

            {/* MEDIA 6 */}
            <div className='grid col-span-1 md:col-span-3 lg:col-span-1 row-start-9 md:row-start-9 lg:row-start-7 h-[500px] bg-zinc-200 ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        classNameContainer='h-[500px] w-full  bg-white flex flex-col items-center justify-center'
                        className='h-[80%] md:h-full lg:h-[350px] w-[300px] md:min-w-[362px] md:w-[40%] lg:min-w-auto lg:w-[300px] object-cover object-center'
                        src={media_six?.src}
                        alt={media_six?.alt}
                    />
                </Fade>
            </div>

            {/* MEDIA 7 */}
            <div className='grid col-span-1 md:col-span-3 lg:col-span-1 row-start-10 md:row-start-10 lg:row-start-7 h-[500px] bg-zinc-200 ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        classNameContainer='h-[500px] w-full  bg-white flex items-center justify-center'
                        className='h-[80%] lg:h-[350px] md:h-full w-[350px] object-cover object-center'
                        src={media_seven?.src}
                        alt={media_seven?.alt}
                    />
                </Fade>
            </div>

            {/* MEDIA 8 */}
            <div className='grid col-span-1 md:col-span-3 lg:col-span-2 row-start-11 md:row-start-11 lg:row-start-8 h-[450px] bg-zinc-200 ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        classNameContainer='h-[450px] w-full  bg-white flex items-center justify-center'
                        className='h-[300px] md:h-full md:h-full w-[300px] md:w-[520px] lg:w-[550px] object-cover object-center'
                        src={media_eight?.src}
                        alt={media_eight?.alt}
                    />
                </Fade>
            </div>

            {/* MEDIA 9 */}
            <div className='grid col-span-1 md:col-span-3 lg:col-span-2 row-start-12 md:row-start-12 lg:row-start-7 lg:row-end-9 h-[80dvh] md:h-full bg-zinc-200 ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        classNameContainer='h-full w-full  bg-white flex items-center justify-center'
                        className='h-full w-full object-cover object-center'
                        src={media_nine?.src}
                        alt={media_nine?.alt}
                    />
                </Fade>
            </div>
         

            {/* MEDIA 10 VIDEO */}
            <div className='grid col-span-1 md:col-span-4 lg:col-span-4 row-start-13 md:row-start-13 lg:row-start-10 bg-zinc-200 min-h-[400px] max-h-[95dvh]' >
                <Fade triggerOnce duration={1000} >
                    <StreamingVideo
                        videoUrl={media_ten?.mp4 || ''}
                        posterUrl={media_ten?.src || ''}
                    />
                </Fade>
            </div>

        </section>

    )
}
