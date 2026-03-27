"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";

interface CloudinaryVideoProps {
    /** URL HLS completo generado por Cloudinary */
    videoUrl: string;
    /** URL del poster (miniatura) */
    posterUrl?: string;
    height?: string;
}

export default function StreamingVideo({ videoUrl, posterUrl, height = '95dvh', }: CloudinaryVideoProps) {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video || !videoUrl) return;

        // Limpiar fuentes previas
        video.src = '';
        video.load();

        if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.src = videoUrl;
        } else if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(videoUrl);
            hls.attachMedia(video);

            // Manejar errores de HLS
            hls.on(Hls.Events.ERROR, (event, data) => {
                console.error('Error HLS:', data);
                if (data.fatal) {
                    hls.destroy();
                }
            });

            return () => hls.destroy();
        }
    }, [videoUrl]);

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
            { threshold: 0.5 } // El video debe estar al menos al 50% visible
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

    return (
        <video
            ref={videoRef}
            loop
            muted
            autoPlay
            playsInline
            preload="none"
            style={{ width: "100%", height: height, objectFit: 'cover' }}
            poster={posterUrl}
        />
    );
}
