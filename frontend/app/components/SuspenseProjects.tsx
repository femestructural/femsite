
import React from 'react';
import LogoIcon from '@/public/icons/logo';

/**
 * Componente ProjectGridSuspense
 * Simula la carga de una grilla de proyectos arquitectónicos.
 * Diseñado para igualar la estructura de 'CEIBA MADRE' y 'A3'.
 */
export const ProjectGridSuspense = () => {
    // Definimos 4 cajas de carga para la grilla base.
    const loadingBoxes = Array.from({ length: 4 });

    return (
        // Contenedor principal de la grilla.
        // Usamos display: grid. Responsividad: 1 col móvil, 2 cols tablet/desktop (sm:).
        // gap-6 y p-6 para espacio y márgenes, igual que una web moderna.
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-5 bg-white w-full">
            {loadingBoxes.map((_, index) => (
                // Cada caja de carga (shimmer box).
                // flex-col para apilar imagen y texto.
                // border-gray-100 para un borde muy sutil, similar a los marcos de las imágenes.
                <div
                    key={index}
                    className="flex flex-col border border-gray-100 rounded-lg overflow-hidden shadow-sm"
                >


                    {/* SIMULACIÓN DE LA IMAGEN DE ARQUITECTURA 
            Utilizamos aspect-video o aspect-[16/10] para mantener la proporción de la foto.
            La clase 'animate-pulse' de Tailwind crea el efecto de desvanecimiento suave.
            El color de fondo 'bg-gray-200' es el estándar para shimmers.
          */}
                    < div className="flex items-center justify-center w-full aspect-video bg-gray-200 animate-pulse" >
                       <div className='scale-300' >
                            <LogoIcon />
                        </div>
                    </div >


                    {/* SIMULACIÓN DEL ÁREA DE TEXTO 
            Padded de 4 (p-4) para coincidir con la separación del texto en la imagen original.
          */}
                    <div className="p-4 space-y-3" >
                        {/* Simulación de 'RESIDENCIAL' (Categoría).
              Es un texto corto y fino.
              w-1/4 (25%) de ancho, h-3 (altura fina), rounded-full para bordes suaves.
            */}
                        < div className="h-3 w-1/4 bg-gray-200 rounded-full animate-pulse delay-75" />

                        {/* Simulación de 'NOMBRE PROYECTO | UBICACIÓN'.
              Es un texto más largo y ligeramente más grueso.
              w-3/4 (75%) de ancho, h-4, delay adicional para un efecto orgánico.
            */}
                        < div className="h-4 w-3/4 bg-gray-200 rounded-full animate-pulse delay-150" />
                    </div>
                </div >
            ))}
        </div >
    );
};

