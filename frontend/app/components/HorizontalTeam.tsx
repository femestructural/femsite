'use client';

import gsap from 'gsap';
import ImageWithLoader from './ImageWithLoader';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { Colaborator } from '@/sanity.types';

gsap.registerPlugin(ScrollTrigger);

type Props = {
    title?: string;
    items: Colaborator[];
    locale: string;
};

export default function HorizontalTeam({
    title,
    items,
    locale
}: Props) {
    const sectionRef = useRef<HTMLElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const [openId, setOpenId] = useState<string | null>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const track = trackRef.current;
        if (!section || !track) return;

        const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
        if (reduceMotion) return;

        let mm = gsap.matchMedia();

        mm.add("(min-width: 1024px)", () => {
            const totalScroll = track.scrollWidth - section.clientWidth;
            if (totalScroll <= 0) return;

            gsap.set(track, { x: 0 });

            gsap.to(track, {
                x: -totalScroll,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: () => `+=${totalScroll}`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            });

            return () => { };
        });

        return () => mm.revert();
    }, [items]);

    return (
        <section
            ref={sectionRef}
            // CAMBIO: overflow-hidden ahora solo en 'lg'
            className="relative w-full flex flex-row items-center overflow-x-auto overflow-y-hidden lg:overflow-hidden h-[85dvh] snap-x snap-mandatory scrollbar-hide bg-[var(--background)]"
        >
            <div className="h-[90%] pt-10 lg:pt-24">
                <div
                    ref={trackRef}
                    // CAMBIO: padding adaptado a 'lg'
                    className="flex h-full items-stretch gap-6 pl-10 lg:pl-32 xl:pl-48 will-change-transform"
                >
                    {/* TÍTULO */}
                    <div className="flex flex-col items-center justify-center h-full w-[85dvw] lg:w-[clamp(460px,50vw,500px)] px-8 py-10 bg-[var(--primary)] shadow-lg border border-zinc-200 shrink-0 snap-center">
                        <h2 className="text-white whitespace-pre-line text-4xl lg:text-5xl font-bold leading-tight text-center">
                            {title}
                        </h2>
                    </div>

                    {/* MIEMBROS */}
                    {items.map((member) => (
                        <div
                            key={member._id}
                            onClick={() => setOpenId(openId === member._id ? null : member._id)}
                            className="group flex h-full w-[85dvw] lg:w-[clamp(460px,50vw,500px)] flex-col justify-start bg-white shadow-lg border border-zinc-200 shrink-0 snap-center"
                        >
                            <div className="relative h-[92%] w-full">
                                <ImageWithLoader
                                    fill={true}
                                    src={member.photoUrl}
                                    alt={member.name}
                                    className="object-cover object-fit"
                                />

                                <div className={`absolute p-8 inset-0 transition-all duration-500 ${openId === member._id ? 'bg-black/80' : 'group-hover:bg-black/80 lg:opacity-0 lg:group-hover:opacity-100'}`} >
                                    <div className={`text-white flex flex-col justify-end h-full gap-4 transition-all duration-300 ${openId === member._id ? 'opacity-100' : 'hidden lg:flex'}`} >
                                        <span className='font-semibold' >{member.role[locale as 'en' | 'es'] || ''}</span>
                                        <p className='leading-relaxed whitespace-pre-line line-clamp-6 lg:line-clamp-12'>
                                            {member.description[locale as 'en' | 'es'] || ''}
                                        </p>
                                        {member.quote && (
                                            <span className='font-serif italic pl-4'>
                                                "{member.quote[locale as 'en' | 'es']}"
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="h-[8%] flex items-center justify-between px-6 bg-white">
                                <span className="uppercase tracking-[0.2em] font-bold ">
                                    {member.name}
                                </span>
                            </div>
                        </div>
                    ))}

                    {/* ESPACIADOR FINAL: Ahora se oculta en lg */}
                    <div
                        className="group flex h-full w-[80dvw] md:w-[50dvw] lg:w-[clamp(460px,50vw,500px)] flex-col justify-start "
                    />


                </div>
            </div>
        </section>
    );
}