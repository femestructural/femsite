"use client";
import { useState, useRef, useEffect, useCallback } from 'react';

interface UseAnimatedImageProps {
    gifSrc: string;
    gifDuration?: number;
    enableAutoLoop?: boolean;
    hoverDelay?: number;
}

export const useAnimatedImage = ({
    gifSrc,
    gifDuration = 3000,
    enableAutoLoop = false,
    hoverDelay = 100
}: UseAnimatedImageProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [showGif, setShowGif] = useState(false);
    const [gifLoaded, setGifLoaded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [canPlayAgain, setCanPlayAgain] = useState(true);

    const timeoutRef = useRef<NodeJS.Timeout>();
    const hoverTimeoutRef = useRef<NodeJS.Timeout>();

    // Pre-cargar el GIF
    useEffect(() => {
        const preloadGif = new window.Image();
        preloadGif.onload = () => setGifLoaded(true);
        preloadGif.onerror = () => console.warn(`Failed to load GIF: ${gifSrc}`);
        preloadGif.src = gifSrc;
    }, [gifSrc]);

    // Limpiar timeouts al desmontar
    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        };
    }, []);

    const playGif = useCallback(() => {
        if (!gifLoaded || isPlaying || !canPlayAgain) return;

        setIsPlaying(true);
        setShowGif(true);

        timeoutRef.current = setTimeout(() => {
            setIsPlaying(false);
            setShowGif(false);

            if (!enableAutoLoop) {
                setCanPlayAgain(false);
                setTimeout(() => setCanPlayAgain(true), 500);
            }
        }, gifDuration);
    }, [gifLoaded, isPlaying, canPlayAgain, gifDuration, enableAutoLoop]);

    const handleMouseEnter = useCallback(() => {
        setIsHovered(true);

        hoverTimeoutRef.current = setTimeout(() => {
            if (isHovered) {
                playGif();
            }
        }, hoverDelay);
    }, [isHovered, playGif, hoverDelay]);

    const handleMouseLeave = useCallback(() => {
        setIsHovered(false);

        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
        }
    }, []);

    // Re-hover logic
    useEffect(() => {
        if (isHovered && !isPlaying && canPlayAgain && !showGif) {
            playGif();
        }
    }, [isHovered, isPlaying, canPlayAgain, showGif, playGif]);

    return {
        isHovered,
        showGif,
        gifLoaded,
        isPlaying,
        canPlayAgain,
        handleMouseEnter,
        handleMouseLeave,
        playGif
    };
};