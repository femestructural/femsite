'use client';
import Image from "next/image";
import { useState } from "react";
import LogoIcon from "@/public/icons/logo";

export interface ImageWithLoaderProps {
    src: string;
    alt: string;
    className?: string;
    classNameContainer?: string;
    WithContainer?: boolean;
    fill?: boolean;
    width?: number;
    height?: number;
}

export default function ImageWithLoader({ src, alt, className, classNameContainer, WithContainer = false, fill = false, width, height }: ImageWithLoaderProps) {

    const [imageLoaded, setImageLoaded] = useState(false);

    return WithContainer ? (
        <div className={`${classNameContainer || ''}`}>


            {!imageLoaded && (
                <div className='absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center bg-primary object-cover'>
                    <div className='text-white scale-125'>
                        <div className='animate-pulse'>
                            <LogoIcon />
                        </div>
                    </div>
                </div>
            )}

            {src && (
                <Image
                    fill={fill}
                    onLoad={() => setImageLoaded(true)}
                    className={`${className}  transition-all object-cover duration-500 ease-out ${imageLoaded ? "scale-100 opacity-100" : "scale-105 opacity-0"} `}
                    height={height}
                    width={width}
                    src={src}
                    alt={alt}
                    priority={true}
                />
            )}

        </div>
    ) :
        (
            <>


                {!imageLoaded && (
                    <div className='absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center bg-primary object-cover'>
                        <div className='text-white scale-125'>
                            <div className='animate-pulse'>
                                <LogoIcon />
                            </div>
                        </div>
                    </div>
                )}

                {src && (
                    <Image
                        fill={fill}
                        onLoad={() => setImageLoaded(true)}
                        className={`${className}  transition-all object-cover duration-500 ease-out ${imageLoaded ? "scale-100 opacity-100" : "scale-105 opacity-0"} `}
                        height={height}
                        width={width}
                        src={src}
                        alt={alt}
                        priority={true}
                    />
                )}

            </>
        )
}