"use client";
import React, { useMemo, useState, useEffect } from 'react';
import { Gallery } from "react-grid-gallery";
import { Project, SupportedLocale } from '@/src/types/project';

interface ProjectGalleryProps {
    project: Project;
    locale: SupportedLocale;
    images_galery?: string[];
}

interface ImageDimensions {
    width: number;
    height: number;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
    project,
    locale,
    images_galery
}) => {
    const [imageDimensions, setImageDimensions] = useState<Record<string, ImageDimensions>>({});

    // Función para cargar una imagen y obtener sus dimensiones naturales
    const loadImageDimensions = (src: string): Promise<ImageDimensions> => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                resolve({
                    width: img.naturalWidth,
                    height: img.naturalHeight
                });
            };
            img.onerror = reject;
            img.src = src;
        });
    };

    // Efecto para cargar las dimensiones de todas las imágenes
    useEffect(() => {
        if (!images_galery || images_galery.length === 0) return;

        const loadAllDimensions = async () => {
            const dimensions: Record<string, ImageDimensions> = {};

            for (const src of images_galery) {
                try {
                    const dims = await loadImageDimensions(src);
                    dimensions[src] = dims;
                } catch (error) {
                    console.error(`Error loading image dimensions for ${src}:`, error);
                    // Fallback dimensions si falla la carga
                    dimensions[src] = { width: 320, height: 212 };
                }
            }

            setImageDimensions(dimensions);
        };

        loadAllDimensions();
    }, [images_galery]);

    // useMemo para crear los objetos de imágenes con dimensiones normalizadas
    const galleryImages = useMemo(() => {
        if (!images_galery || images_galery.length === 0) return [];

        const targetHeight = 300; // Altura más conservadora

        const images = images_galery.map((src) => {
            const dimensions = imageDimensions[src];

            // Si tenemos las dimensiones reales, calculamos el ancho proporcional
            if (dimensions) {
                const aspectRatio = dimensions.width / dimensions.height;
                const scaledWidth = Math.round(targetHeight * aspectRatio);

                return {
                    src,
                    thumbnail: src,
                    caption: "",
                    width: scaledWidth,
                    height: targetHeight,
                };
            }

            // Fallback solo si no se han cargado las dimensiones aún
            return {
                src,
                thumbnail: src,
                caption: "",
                width: 320,
                height: 212,
            };
        });

        return images;
    }, [images_galery, imageDimensions]);

    return (
        <div className='w-full mb-5 lg:mb-20 min-h-[90dvh]'>
            {galleryImages.length > 0 ? (
                <Gallery
                    images={galleryImages}
                    enableImageSelection={false}
                    rowHeight={400}
                    margin={5}
                />
            ) : (
                <div>Cargando imágenes... ({images_galery?.length || 0} imágenes encontradas)</div>
            )}
        </div>
    );
};

export default ProjectGallery;