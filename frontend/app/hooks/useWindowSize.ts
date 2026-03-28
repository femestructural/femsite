'use client'
import { useState, useEffect } from 'react';

interface WindowSize {
    width: number | undefined;
    height: number | undefined;
}

export const useWindowSize = (): WindowSize => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // Función para manejar el redimensionamiento
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        // Verificar si estamos en el cliente (browser)
        if (typeof window !== 'undefined') {
            // Establecer el tamaño inicial
            handleResize();

            // Agregar el event listener
            window.addEventListener('resize', handleResize);

            // Limpiar el event listener al desmontar el componente
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    return windowSize;
};
