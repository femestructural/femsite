import React from "react"
import { Project } from "@/src/types/project"
import AnimatedImageAdvanced from "./AnimatedImageAdvanced"

export const InfoProject: React.FC<{ project: Project }> = ({ project }) => {



    return (
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-y-10 md:gap-x-20 md:gap-y-20 p-4 mb-5 lg:mb-20 md:min-h-[90dvh]">

            <AnimatedImageAdvanced
                staticSrc="https://res.cloudinary.com/ditwfi7c9/image/upload/v1758020731/DSC00270_c8de6b.jpg"
                gifSrc="https://res.cloudinary.com/ditwfi7c9/image/upload/v1757941470/gif_lafing.gif"
                alt="Icono de área"
                className="col-span-1 row-span-1 "
                gifDuration={2000}
            />


            <article className="col-span-1 row-span-1 p-4 gap-4 py-5" >

                <h1 className="font-bold text-xl mb-5" >{project.description['en']}</h1>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde repellendus eius asperiores optio labore soluta facere facilis sunt eveniet cumque eum in laboriosam, autem quam voluptas illum ab quia delectus?</p>

                <footer className="flex flex-col gap-1 pt-5" >
                    <span className="text-sm text-zinc-500" >Área construida</span>
                    <span className="text-lg font-semibold" >{project.area}</span>
                </footer>
            </article>



            <AnimatedImageAdvanced
                staticSrc="https://res.cloudinary.com/ditwfi7c9/image/upload/v1758020732/DSC00130_o3esn5.jpg"
                gifSrc="https://res.cloudinary.com/ditwfi7c9/image/upload/v1757941470/gif_lafing.gif"
                alt="Icono de área"
                className="col-span-1 row-span-1 "
                gifDuration={2000}
            />

            <AnimatedImageAdvanced
                staticSrc="https://res.cloudinary.com/ditwfi7c9/image/upload/v1758020732/DSC00059_yzjwkr.jpg"
                gifSrc="https://res.cloudinary.com/ditwfi7c9/image/upload/v1757941470/gif_lafing.gif"
                alt="Icono de área"
                gifDuration={2000}
                className="col-span-1 row-span-1"
            />

        </div >
    )
}

