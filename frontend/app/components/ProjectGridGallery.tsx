'use client';
import React from 'react';
import type { Project } from '@/sanity.types';
import { GridOne } from '../gridsGalleries/GridOne';
import { GridTwo } from '../gridsGalleries/GridTwo';
import { GridThree } from '../gridsGalleries/GridThree';
import { GridFour } from '../gridsGalleries/GridFour';
import { GridFive } from '../gridsGalleries/GridFive';
import { GridSix } from '../gridsGalleries/GridSix';


export const ProjectGridGallery: React.FC<{ project: Project, locale: string }> = ({ project, locale }) => {

    const { grid_variant, gallery_media, story } = project;

    if (!grid_variant) return null;

    const media = gallery_media || [];
    switch (Number(grid_variant)) {
        case 1: return <GridOne media={media} story={story} locale={locale} />;
        case 2: return <GridTwo media={media} story={story} locale={locale} />;
        case 3: return <GridThree media={media} story={story} locale={locale} />;
        case 4: return <GridFour media={media} story={story} locale={locale} />;
        case 5: return <GridFive media={media} story={story} locale={locale} />;
        case 6: return <GridSix media={media} story={story} locale={locale} />;
        default: return <GridOne media={media} story={story} locale={locale} />;
    }
}
