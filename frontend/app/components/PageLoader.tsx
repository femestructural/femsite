'use client'
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react'
import LogoCompleto from '@/public/icons/logo_completo';

type LoaderOverlayProps = {
    isActive: boolean;
};

export default function PageLoader({ isActive }: LoaderOverlayProps) {

    const wrapRef = useRef<HTMLDivElement | null>(null);
    const logoRef = useRef<HTMLDivElement | null>(null);
    const textRef = useRef<HTMLDivElement | null>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);

    useLayoutEffect(() => {
        const wrap = wrapRef.current!;
        const logo = logoRef.current!;
        const text = textRef.current!;

        // Estado inicial
        gsap.set(wrap, { autoAlpha: 0, pointerEvents: "none" });
        gsap.set(logo, { autoAlpha: 0, y: 10, scale: 0.98 });
        gsap.set(text, { autoAlpha: 0, y: 6 });

        // Timeline: overlay visible + logo entra + texto entra + ciclo que se repite
        const tl = gsap.timeline({ paused: true });

        // Fondo aparece (solo una vez)
        tl.to(wrap, { autoAlpha: 1, duration: 0.15 }, 0)
            // Logo aparece
            .to(
                logo,
                { autoAlpha: 1, y: 0, scale: 1, duration: 0.35, ease: "power2.out" },
                0.03
            )
            // Texto aparece 300ms después del logo
            .to(
                text,
                { autoAlpha: 1, y: 0, duration: 0.25, ease: "power2.out" },
                ">+=0.3"
            )
            // Pausa antes de empezar a desaparecer
            .to({}, { duration: 1 }, "+=1")
            // Texto desaparece primero
            .to(
                text,
                { autoAlpha: 0, y: 6, duration: 0.35, ease: "power2.in" },
                ">"
            )
            // Logo desaparece después
            .to(
                logo,
                { autoAlpha: 0, y: 10, scale: 0.98, duration: 0.35, ease: "power2.in" },
                ">"
            )
            // Pausa entre el final de la primera iteración y el inicio del loop
            .to({}, { duration: 2 }, ">");

        // Timeline del ciclo que se repite infinitamente
        const tlLoop = gsap.timeline({ repeat: -1, repeatDelay: 1 });

        tlLoop
            // Logo reaparece
            .to(
                logo,
                { autoAlpha: 1, y: 0, scale: 1, duration: 1, ease: "power2.out" },
                0
            )
            // Texto reaparece 800ms después del logo
            .to(
                text,
                { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out" },
                0.8
            )
            // Pausa mientras están visibles
            .to({}, { duration: 1 }, "+=1")
            // Texto desaparece
            .to(
                text,
                { autoAlpha: 0, y: 6, duration: 0.35, ease: "power2.in" },
                ">"
            )
            // Logo desaparece
            .to(
                logo,
                { autoAlpha: 0, y: 10, scale: 0.98, duration: 0.35, ease: "power2.in" },
                ">"
            );

        // Agregar el loop a la timeline principal
        tl.add(tlLoop);

        tlRef.current = tl;

        return () => {
            tl.kill();
            tlLoop.kill();
            tlRef.current = null;
        };
    }, []);

    useLayoutEffect(() => {
        const wrap = wrapRef.current!;
        const tl = tlRef.current!;
        if (!tl) return;

        if (isActive) {
            gsap.set(wrap, { pointerEvents: "all" });
            tl.play(0);
        } else {
            // Ocultar rápido (puedes hacer reverse si quieres “salida”)
            gsap.to(wrap, { autoAlpha: 0, duration: 0.18 });
            gsap.set(wrap, { pointerEvents: "none", delay: 0.2 });
            // reset para próxima vez
            gsap.set(logoRef.current!, { autoAlpha: 0, y: 10, scale: 0.98, delay: 0.2 });
            gsap.set(textRef.current!, { autoAlpha: 0, y: 6, delay: 0.2 });
        }
    }, [isActive]);

    return (
        <div ref={wrapRef} className="loaderWrap" aria-hidden={!isActive}>
            <div className="loaderCenter">
                <div ref={logoRef}>
                    <LogoCompleto />
                </div>

                <div ref={textRef} className="loaderText">
                    ESTRUCTURAL
                </div>
            </div>
        </div>
    )
}