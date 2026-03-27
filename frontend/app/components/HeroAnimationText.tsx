'use client'

import React, { useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import ButtonLink from "./ButtonLnk";
import { useTranslations } from "next-intl";
import { icons } from "@/public/icons/react-icons";
import { useLocale } from "next-intl";


gsap.registerPlugin(TextPlugin);


export default function HeroAnimationText() {
    const locale = useLocale();
    const t = useTranslations('HeroHome');
    const cta = useTranslations('CTAs')

    const h1Ref = useRef<HTMLHeadingElement>(null);
    const typedRef = useRef<HTMLSpanElement>(null);
    const subtitleRef = useRef<HTMLSpanElement>(null);

    const subtitles = useMemo(() => ([
        t('sub_one'),
        t('sub_two'),
        t('sub_three'),
    ]), []);

    const words = useMemo(() => ([
        t('text_one'),
        t('text_two'),
        t('text_three'),
    ]), [t]);

    // Velocidad basada en longitud (similar a tu lógica)
    const getCharSpeed = (text: string) => {
        const len = text.length;
        if (len <= 3) return 0.30; // seg por char (lento)
        if (len <= 6) return 0.25;
        if (len <= 10) return 0.20;
        return 0.10;
    };

    useLayoutEffect(() => {
        const h1 = h1Ref.current;
        const typed = typedRef.current;
        const subtitle = subtitleRef.current;
        if (!h1 || !typed || !subtitle) return;

        // Limpieza previa (por HMR)
        gsap.killTweensOf([typed, subtitle]);
        gsap.set(typed, { text: "" });

        // Estados iniciales
        gsap.set(subtitle, { autoAlpha: 0, y: 50 });

        const pauseBetween = 3; // 3000ms
        const initialDelay = (txt: string) => (txt.length <= 3 ? 0.8 : 0.5);
        const endPause = (txt: string) => (txt.length <= 5 ? 1.2 : 0.6);

        const tl = gsap.timeline({
            repeat: -1,
            defaults: { ease: "power2.out" },
        });

        // Helper: una “fase” completa
        const phase = (word: string, subtitleText: string) => {
            // Reset typed + set subtitle text (sin re-render)
            tl.set(typed, { text: "" });
            tl.set(subtitle, { text: subtitleText });

            // Typewriter
            const dur = Math.max(0.15, word.length * getCharSpeed(word));
            tl.to(typed, {
                text: word,
                duration: dur,
                delay: initialDelay(word),
                ease: "none", // typewriter se siente mejor sin easing
            });

            // Mostrar subtítulo
            tl.to(subtitle, { autoAlpha: 1, y: 0, duration: dur }, "<");

            // Espera con subtítulo visible
            tl.to({}, { duration: pauseBetween });

            // Ocultar subtítulo para preparar siguiente
            tl.to(subtitle, { autoAlpha: 0, y: -30, duration: 0.4, ease: "power2.in" });

            // Pausa al final del tipeo (para cortas)
            tl.to({}, { duration: endPause(word) });

            // Reset posición del subtítulo para la próxima entrada
            tl.set(subtitle, { y: 50 });
        };

        // Construye el loop
        phase(words[0], subtitles[0]);
        phase(words[1], subtitles[1]);
        phase(words[2], subtitles[2]);

        return () => {
            tl.kill();
        };
    }, [words, subtitles]);

    return (
        <div className='flex flex-col relative items-center px-5 h-[16rem] z-4'>
            <h1
                ref={h1Ref}
                className='min-h-[70px] md:min-h-[100px] text-[2.8rem] lg:text-6xl xl:text-8xl font-bold uppercase text-shadow-lg text-[var(--header-text)] relative flex items-center justify-center'
            >
                {/* El texto lo escribe GSAP aquí */}
                <span ref={typedRef} />

                {/* Cursor (siempre presente, parpadea) */}
                <span className="mt-5 ml-2 inline-block w-1 lg:w-2 xl:w-3 bg-[var(--header-text)] h-[1.05em] animate-[blink_1.06s_infinite]" />
            </h1>

            <span
                ref={subtitleRef}
                className='text-center lg:text-xl xl:text-2xl text-shadow-lg text-[var(--header-text)]'
            />

            <div className="absolute bottom-4" >
                <ButtonLink
                    lang={locale}
                    href={`/portafolio`}
                    text={cta('results')}
                    icon={<icons.folder />}
                    className='flex flex-row items-center gap-4 border-[1px] border-[var(--background)] text-[var(--header-text)] px-[16px] py-[12px] '
                />
            </div>

            <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
        </div>
    );
}
