'use client';
import React from 'react';
import { Project } from '@/sanity.types';
import { GridOne } from '../gridsInformation/GridOne';
import { GridTwo } from '../gridsInformation/GridTwo';
import { GridThree } from '../gridsInformation/GridThree';
import { GridFour } from '../gridsInformation/GridFour';
import { GridFive } from '../gridsInformation/GridFive';

export const ProjectGridInfo: React.FC<{ project: Project }> = ({ project }) => {

    const { grid_variant, information_media } = project;
    const media = information_media || [];

    return (
        <>
            {grid_variant === 1 && <GridOne media={media} />}

            {grid_variant === 2 && <GridTwo media={media} />}

            {grid_variant === 3 && <GridThree media={media} />}

            {grid_variant === 4 && <GridFour media={media} />}

            {grid_variant === 5 && <GridFive media={media} />}
        </>
    )
}
