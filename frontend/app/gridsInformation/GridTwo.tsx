'use client';
import React from 'react';
import ImageWithLoader from '../components/ImageWithLoader';
import StreamingVideo from '../components/StreamingVideo';
import { Fade } from "react-awesome-reveal";
import { LocalizedParagraphArray } from '@/sanity.types';

export const GridTwo: React.FC<{ media: any[], story: LocalizedParagraphArray | undefined, locale: string }> = ({ media, story, locale }) => {

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
        <section className='grid grid-cols-1 md:grid-cols-3 grid-rows-[repeat(18, 200px)] gap-5 p-4 mb-5 ' >

            {/* TEXT 1*/}
            <div className='grid col-span-1 md:col-span-3 lg:col-span-3 md:row-start-1 items-center py-5' >
                <Fade triggerOnce duration={1000} >
                    <div className='flex flex-col gap-5 xl:flex-row items-center justify-between w-full ' >
                        <article className='flex flex-col w-full xl:w-[400px] items-start md:items-center xl:items-start gap-5 px-4' >
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
            <div className='grid col-span-1 md:col-span-3 lg:col-span-3 row-start-2 md:row-start-2 lg:row-start-2 bg-zinc-200 ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer={true}
                        className='object-cover object-center h-full max-h-[700px] w-full '
                        classNameContainer='h-full h-[400px] w-full '
                        src={media_one?.src}
                        alt={media_one?.alt}
                    />
                </Fade>
            </div>

            {/* MEDIA 2 */}
            <div className='grid col-span-1 md:col-span-3 lg:col-span-1 row-start-3 md:row-start-3 lg:row-start-3 bg-zinc-200 relative bg-green-100 pl-5' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        fill
                        WithContainer={true}
                        classNameContainer='h-full min-h-[470px] max-h-[700px] md:h-full w-full '
                        src={media_two?.src}
                        alt={media_two?.alt}
                    />
                </Fade>
            </div>

            {/* MEDIA 3 */}
            <div className='grid col-span-1 row-start-4 md:row-start-5 lg:row-start-3 md:col-span-3 lg:col-span-2 bg-zinc-200 ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer={true}
                        classNameContainer=''
                        className='h-full min-h-[470px] max-h-[800px] w-full object-cover object-center'
                        src={media_three?.src}
                        alt={media_three?.alt}
                    />
                </Fade>
            </div>

            {/* TEXT 2*/}
            <div className='grid col-span-1 md:col-span-3 row-start-5 md:row-start-4 lg:row-start-4 items-center py-5' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col items-center gap-5 px-4' >
                        <p className='text-sm lg:text-xl font-semibold text-center tracking-widest max-w-[1100px]' >
                            {story?.[4]?.[locale as 'en' | 'es'] || ''}
                        </p>
                    </article>
                </Fade>
            </div>

            {/* MEDIA 4 */}
            <div className='grid col-span-1 md:col-span-3 lg:col-span-2 row-start-6 md:row-start-6 lg:row-start-5 bg-zinc-200 min-h-[400px] max-h-[600px]' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        className='min-h-[470px] max-h-[600px] w-full object-cover object-center'
                        classNameContainer=''
                        src={media_four?.src}
                        alt={media_four?.alt}
                    />
                </Fade>
            </div>

            {/* MEDIA 5 */}
            <div className='grid col-span-1 md:col-span-3 lg:col-span-1 row-start-7 md:row-start-7 lg:row-start-5 bg-zinc-200 min-h-[400px] max-h-[600px]' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        WithContainer
                        classNameContainer="min-h-[400px] max-h-[600px]"
                        className='h-full max-h-[600px] w-full object-cover object-center'
                        src={media_five?.src}
                        alt={media_five?.alt}
                    />
                </Fade>
            </div>

            {/* TEXT 3*/}
            <div className='grid col-span-1 md:col-span-3 row-start-8 md:row-start-8 lg:row-start-6 items-center min-h-[100px]' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col gap-5 px-4' >
                        <p className='text-sm lg:text-xl  font-semibold text-center' >
                            {story?.[5]?.[locale as 'en' | 'es'] || ''}
                        </p>
                    </article>
                </Fade>
            </div>

            {/* MEDIA 6 */}
            <div className='grid col-span-1 md:col-span-3 lg:col-span-1 row-start-9 md:row-start-9 lg:row-start-7 bg-zinc-200 ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        className='min-h-[250px] lg:max-h-[350px] h-full w-full object-cover object-center'
                        classNameContainer=''
                        src={media_six?.src}
                        alt={media_six?.alt}
                    />
                </Fade>
            </div>

            {/* MEDIA 7 */}
            <div className='grid col-span-1 md:col-span-3 lg:col-span-1 row-start-10 md:row-start-10 lg:row-start-7 bg-white ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        className='min-h-[250px] max-h-[350px] h-full w-full p-2 object-fit object-center'
                        classNameContainer=''
                        src={media_seven?.src}
                        alt={media_seven?.alt}
                    />
                </Fade>
            </div>

            {/* MEDIA 8 */}
            <div className='grid col-span-1 md:col-span-3 lg:col-span-2 row-start-11 md:row-start-11 lg:row-start-8 bg-white ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        className=' lg:min-h-[450px] max-h-[550px] w-full object-cover object-center '
                        classNameContainer=''
                        src={media_eight?.src}
                        alt={media_eight?.alt}
                    />
                </Fade>
            </div>

            {/* MEDIA 9 */}
            <div className='grid col-span-1 md:col-span-3 lg:col-span-1 md:row-start-12  lg:row-start-7 lg:row-end-9 bg-zinc-200 ' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        height={400}
                        width={400}
                        className='h-full w-full object-cover object-center'
                        classNameContainer=''
                        src={media_nine?.src}
                        alt={media_nine?.alt}
                    />
                </Fade>
            </div>

            {/* TEXT 4*/}
            <div className='grid col-span-1 md:col-span-3 lg:col-span-3 row-start-13 md:row-start-13 lg:row-start-9 items-center py-5' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col items-center gap-5 px-4' >
                        <p className='text-sm lg:text-xl  font-semibold text-center tracking-widest max-w-[1100px]' >
                            {story?.[6]?.[locale as 'en' | 'es'] || ''}
                        </p>
                    </article>
                </Fade>
            </div>

            {/* MEDIA 10 VIDEO */}
            <div className='grid col-span-1 md:col-span-3 row-start-14 md:row-start-14 lg:row-start-10 bg-zinc-200 h-[95dvh]' >
                <Fade triggerOnce duration={1000} >
                    <StreamingVideo
                        videoUrl={media_ten?.mp4 || ''}
                        posterUrl={media_ten?.src || ''}
                    />
                </Fade>
            </div>

        </section>
    );
}
