'use client';
import React from 'react';
import type { Project } from '@/sanity.types';
import StreamingVideo from '../components/StreamingVideo';
import { Fade } from "react-awesome-reveal";
import ImageWithLoader from '../components/ImageWithLoader';

export const ProjectGridGallery: React.FC<{ project: Project }> = ({ project }) => {

    const { grid_variant } = project;

    return (
        <>


            {grid_variant === 1 && <GridOne project={project} />}

            {grid_variant === 2 && <GridTwo project={project} />}

            {grid_variant === 3 && <GridThree project={project} />}

            {grid_variant === 4 && <GridFour project={project} />}

            {grid_variant === 5 && <GridFive project={project} />}


        </>
    )
}

const GridOne: React.FC<{ project: Project }> = ({ project }) => {

    const { gallery_media } = project || {};

    const media_one = gallery_media?.[0];
    const media_two = gallery_media?.[1];
    const media_three = gallery_media?.[2];
    const media_four = gallery_media?.[3];
    const media_five = gallery_media?.[4];
    const media_six = gallery_media?.[5];
    const media_seven = gallery_media?.[6];


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
            <div className='grid col-span-1 md:col-span-4 lg:col-span-1 lg:row-start-2 lg:col-start-1 lg:col-end-3 bg-zinc-200 h-[430px]' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        width={300}
                        height={300}
                        WithContainer
                        classNameContainer='w-full h-[430px] shadow-md'
                        className='w-full h-full object-cover object-[0%_50%]  '
                        src={media_two?.src}
                        alt={media_two?.alt}
                    />
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


            {/* MEDIA 7 VIDEO */}
            <div className='grid col-span-1 md:col-span-4 lg:col-span-4 row-start-7 md:row-start-7 lg:row-start-6 bg-zinc-200 min-h-[400px] max-h-[95dvh]' >
                <Fade triggerOnce duration={1000} >
                    <img
                        className='h-[95dvh] w-full object-cover shadow-md'
                        src={media_seven?.src}
                        alt={media_seven?.alt}
                    />
                </Fade>
            </div>




        </section>
    )
}

const GridTwo: React.FC<{ project: Project }> = ({ project }) => {

    const { gallery_media } = project || {};

    const media_one = gallery_media?.[0];
    const media_two = gallery_media?.[1];
    const media_three = gallery_media?.[2];
    const media_four = gallery_media?.[3];
    const media_five = gallery_media?.[4];
    const media_six = gallery_media?.[5];
    const media_seven = gallery_media?.[6];


    return (
        <section className='grid grid-cols-1 md:grid-cols-3 grid-rows-[repeat(12, 200px)] gap-5 p-4 mb-5' >

            {/* MEDIA 1 */}
            <div className='grid col-span-1 row-start-1 md:row-start-1 bg-zinc-200 max-h-[600px]' >
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
            <div className='grid col-span-1 row-start-2 md:row-start-1 bg-zinc-200 max-h-[600px]' >
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
            <div className='grid col-span-1 row-start-3 md:row-start-1 bg-zinc-200 max-h-[600px]' >
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


            {/* MEDIA 4 */}
            <div className='grid col-span-1 md:col-span-3 row-start-4 md:row-start-2 bg-zinc-200 h-[80dvh]' >
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

            {/* MEDIA 6 VIDEO */}
            <div className='grid col-span-1 md:col-span-3 row-start-5 md:row-start-3 bg-zinc-200 min-h-[800px] max-h-[70dvh]' >
                <Fade triggerOnce duration={1000} >
                    <StreamingVideo
                        videoUrl={media_seven?.mp4 || ''}
                        posterUrl={media_seven?.src || ''}
                        height='800px'
                    />
                </Fade>
            </div>

            {/* MEDIA 6 */}
            <div className='grid col-span-1 row-start-6 md:row-start-4 bg-zinc-200 h-full' >
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
            </div>

            {/* MEDIA 7 */}
            <div className='grid col-span-1 md:col-span-2 row-start-7 md:row-start-4 bg-zinc-200 h-full' >
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


        </section>
    )
}

const GridThree: React.FC<{ project: Project }> = ({ project }) => {

    const { gallery_media } = project || {};

    const media_one = gallery_media?.[0];
    const media_two = gallery_media?.[1];
    const media_three = gallery_media?.[2];
    const media_four = gallery_media?.[3];
    const media_five = gallery_media?.[4];
    const media_six = gallery_media?.[5];
    const media_seven = gallery_media?.[6];
    const media_eight = gallery_media?.[7];

    return (
        <section className='grid grid-cols-2 md:grid-cols-2 grid-rows-[repeat(20, 200px)] gap-5 p-4 mb-5 '>

            {/* TEXT 1 */}
            <div className='grid col-span-2 items-center min-h-[200px]' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col gap-5 px-4' >
                        <p className='text-xl lg:text-2xl font-semibold text-center' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <p className='text-xl lg:text-2xl font-semibold text-center' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </article>
                </Fade>
            </div>

            {/* MEDIA 1 */}
            {media_one && (
                <div className='col-span-2 md:col-span-2 md:row-start-2 bg-zinc-200 h-full'>
                    <Fade triggerOnce duration={1000}>
                        {media_one?.mp4 ? (
                            <StreamingVideo
                                videoUrl={media_one.mp4}
                                posterUrl={media_one.src || ''}
                                height='700px'
                            />
                        ) : (
                            <img
                                className='h-full w-full object-cover shadow-md'
                                src={media_one?.src}
                                alt={media_one?.alt}
                            />
                        )}
                    </Fade>
                </div>
            )}

            {/* MEDIA 2 */}
            {media_two && (
                <div className='col-span-2 md:col-span-2 md:row-start-3 bg-zinc-200 h-full'>
                    <Fade triggerOnce duration={1000}>
                        {media_two?.mp4 ? (
                            <StreamingVideo
                                videoUrl={media_two.mp4}
                                posterUrl={media_two.src || ''}
                                height='700px'
                            />
                        ) : (
                            <img
                                className='h-full w-full object-cover shadow-md'
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
                                classNameContainer='w-full h-[85dvh] shadow-md bg-zinc-200'
                                className='h-full w-full object-cover'
                                src={media_three?.src}
                                alt={media_three?.alt}
                            />
                        )}
                    </Fade>
                </div>
            )}

            {/* TEXT 2 */}
            <div className='grid col-span-2 items-center min-h-[200px]' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col gap-5 px-4' >
                        <p className='text-xl lg:text-2xl font-semibold text-center' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <p className='text-xl lg:text-2xl font-semibold text-center' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
                                classNameContainer='w-full h-[400px] shadow-md bg-zinc-200'
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
                                classNameContainer='w-full h-full shadow-md bg-zinc-200'
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
                                classNameContainer='h-[85dvh] w-full object-cover shadow-md bg-zinc-200'
                                className='h-full w-full object-cover object-center'
                                src={media_six?.src}
                                alt={media_six?.alt}
                            />
                        )}
                    </Fade>
                </div>
            )}

            {/* TEXT 3 */}
            <div className='grid col-span-2 items-center min-h-[200px]' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col gap-5 px-4' >
                        <p className='text-xl lg:text-2xl font-semibold text-center' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <p className='text-xl lg:text-2xl font-semibold text-center' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
                                classNameContainer='w-full h-[60dvh] shadow-md bg-zinc-200'
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
                                classNameContainer='w-full h-[60dvh] shadow-md bg-zinc-200'
                                className='h-full w-full object-cover object-center'
                                src={media_eight?.src}
                                alt={media_eight?.alt}
                            />
                        )}
                    </Fade>
                </div>
            )}

        </section>
    )
}

const GridFour: React.FC<{ project: Project }> = ({ project }) => {

    const { gallery_media } = project || {};

    const media_one = gallery_media?.[0];
    const media_two = gallery_media?.[1];
    const media_three = gallery_media?.[2];
    const media_four = gallery_media?.[3];
    const media_five = gallery_media?.[4];
    const media_six = gallery_media?.[5];
    const media_seven = gallery_media?.[6];
    const media_eight = gallery_media?.[7];
    const media_nine = gallery_media?.[8];
    const media_ten = gallery_media?.[9];
    const media_eleven = gallery_media?.[10];
    const media_twelve = gallery_media?.[11];

    return (
        <section className='grid grid-cols-1 md:grid-cols-3 grid-rows-[repeat(12, 200px)] gap-5 p-4 mb-5 ' >

            {/* TEXT 1 */}
            <div className='grid col-span-3 items-center min-h-[200px]' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col gap-5 px-4 w-full' >
                        <p className='text-xl lg:text-2xl font-semibold text-center' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <p className='text-xl lg:text-2xl font-semibold text-center' >
                            Lorem ipsum dolor sit adipisicing elit.
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
            <div className='grid col-span-3 items-center min-h-[200px]' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col gap-5 px-4' >
                        <p className='text-xl lg:text-2xl font-semibold text-center' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <p className='text-xl lg:text-2xl font-semibold text-center' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
            <div className='grid col-span-3 items-center min-h-[200px]' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col gap-5 px-4' >
                        <p className='text-xl lg:text-2xl font-semibold text-center' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <p className='text-xl lg:text-2xl font-semibold text-center' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
    )
}

const GridFive: React.FC<{ project: Project }> = ({ project }) => {

    const { gallery_media } = project || {};

    const media_one = gallery_media?.[0];
    const media_two = gallery_media?.[1];
    const media_three = gallery_media?.[2];
    const media_four = gallery_media?.[3];
    const media_five = gallery_media?.[4];
    const media_six = gallery_media?.[5];
    const media_seven = gallery_media?.[6];
    const media_eight = gallery_media?.[7];

    return (
        <section className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 grid-rows-[repeat(12, 200px)] gap-5 p-4 mb-5 ' >

            {/* TEXT 1 */}
            <div className='grid col-span-1 md:col-span-4 lg:col-span-6 row-start-1 items-center min-h-[200px]' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col gap-5 px-4' >
                        <p className='text-xl lg:text-2xl font-semibold text-center' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <p className='text-xl lg:text-2xl font-semibold text-center' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
            <div className='grid col-span-1 md:col-span-4 lg:col-span-6 items-center md:row-start-5 lg:row-start-3 min-h-[200px]' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col gap-5 px-4' >
                        <p className='text-xl lg:text-2xl font-semibold text-center' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <p className='text-xl lg:text-2xl font-semibold text-center' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
            <div className='grid col-span-1 md:col-span-4 lg:col-span-6 items-center row-start-9 md:row-start-9 lg:row-start-6 min-h-[200px]' >
                <Fade triggerOnce duration={1000} >
                    <article className='flex flex-col gap-5 px-4' >
                        <p className='text-xl lg:text-2xl font-semibold text-center' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <p className='text-xl lg:text-2xl font-semibold text-center' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
            <div className='grid col-span-1 md:col-span-4 lg:col-span-6 row-start-11 md:row-start-11 lg:row-start-8 lg:mt-5 bg-zinc-200 max-h-[80dvh] h-[80dvh]' >
                <Fade triggerOnce duration={1000} >
                    <ImageWithLoader
                        width={300}
                        height={300}
                        WithContainer
                        classNameContainer='w-full max-h-[80dvh] shadow-md bg-zinc-200'
                        className='object-cover object-center w-full h-full'
                        src={media_eight?.src}
                        alt={media_eight?.alt}
                    />
                </Fade>
            </div>




        </section>
    )
}
