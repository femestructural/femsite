"use client";

import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

interface CloudinaryVideoProps {
    /** 
     * URL del video. 
     * RECOMENDACIÓN: Para loops nítidos usa MP4 con f_auto en lugar de HLS.
     * Ejemplo: https://res.cloudinary.com/.../q_auto,f_auto/v.../video.mp4
     */
    videoUrl: string;
    /** URL del poster (miniatura) */
    posterUrl?: string;
    height?: string;
}

export default function StreamingVideo({ videoUrl, posterUrl, height = '95dvh', }: CloudinaryVideoProps) {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isHqReady, setIsHqReady] = useState(false);
    const isHls = videoUrl.includes('.m3u8');

    useEffect(() => {
        const video = videoRef.current;
        if (!video || !videoUrl) return;

        setIsHqReady(false);
        // Limpiamos src para evitar que frames del video anterior se cuelen
        video.src = '';
        
        if (isHls) {
            // LÓGICA HLS (m3u8) - Mejor para videos largos
            if (video.canPlayType("application/vnd.apple.mpegurl")) {
                video.src = videoUrl;
                video.oncanplay = () => setIsHqReady(true);
            } else if (Hls.isSupported()) {
                const hls = new Hls({
                    enableWorker: true,
                    backBufferLength: 90,
                    maxBufferLength: 30,
                    maxMaxBufferLength: 60,
                    abrEwmaDefaultEstimate: 50000000, 
                });

                hls.loadSource(videoUrl);
                hls.attachMedia(video);

                hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
                    const highestLevel = data.levels.length - 1;
                    hls.currentLevel = highestLevel;
                    hls.loadLevel = highestLevel; 
                    hls.startLevel = highestLevel;
                });

                hls.on(Hls.Events.FRAG_BUFFERED, (event, data) => {
                    // Esperamos a que se haya guardado en buffer un fragmento de calidad máxima
                    if (data.frag.level === hls.levels.length - 1) {
                        setTimeout(() => setIsHqReady(true), 600);
                    }
                });

                hls.on(Hls.Events.ERROR, (event, data) => {
                    if (data.fatal) {
                        console.error('Error HLS fatal:', data);
                        hls.destroy();
                    }
                });

                return () => hls.destroy();
            }
        } else {
            // LÓGICA MP4/WebM - Calidad máxima desde el frame 1
            video.src = videoUrl;
            // canplaythrough asegura que el navegador ha cargado suficiente para no detenerse
            video.oncanplaythrough = () => setIsHqReady(true);
        }
    }, [videoUrl, isHls]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        videoRef.current?.play();
                    } else {
                        videoRef.current?.pause();
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    const handleLoop = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
    };

    return (
        <div style={{ position: 'relative', width: "100%", height: height, overflow: 'hidden', backgroundColor: '#000' }}>
            {/* Poster Overlay Manual */}
            {posterUrl && (
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: `url(${posterUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: 1,
                        opacity: isHqReady ? 0 : 1,
                        transition: 'opacity 0.8s ease-in-out',
                        pointerEvents: 'none'
                    }}
                />
            )}
            
            <video
                ref={videoRef}
                onEnded={isHls ? handleLoop : undefined}
                loop={!isHls}
                muted
                autoPlay
                playsInline
                preload="auto"
                style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: 'cover',
                    opacity: isHqReady ? 1 : 0,
                    transition: 'opacity 0.6s ease-in-out'
                }}
            />
        </div>
    );
}
