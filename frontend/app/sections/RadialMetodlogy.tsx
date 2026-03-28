'use client';

import { useState } from "react"
import { CiSearch } from "react-icons/ci";
import { useTranslations } from "next-intl";
import { FaRegLightbulb } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import { LuBrain } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


export function RadialMethodology() {

    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const translate = useTranslations('RadialMethodology')


    const principles = [
        {
            id: 1,
            label: translate('analysis.label'),
            title: translate('analysis.title'),
            description: translate('analysis.description'),
            icon: CiSearch,
            position: { top: "8%", left: "5%" },
            angle: -45,
        },
        {
            id: 2,
            label: translate('intention.label'),
            title: translate('intention.title'),
            description: translate('intention.description'),
            icon: LuBrain,
            position: { top: "8%", right: "5%" },
            angle: 45,
        },
        {
            id: 3,
            label: translate('optimization.label'),
            title: translate('optimization.title'),
            description: translate('optimization.description'),
            icon: VscSettings,
            position: { bottom: "15%", right: "5%" },
            angle: 135,
        },
        {
            id: 4,
            label: translate('solutions.label'),
            title: translate('solutions.title'),
            description: translate('solutions.description'),
            icon: FaRegLightbulb,
            position: { bottom: "15%", left: "5%" },
            angle: -135,
        },
    ]

    return (
        <section className="min-h-screen bg-[var(--primary)] text-white py-16 md:py-24 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12 md:mb-20">
                    <p className="text-xs tracking-[0.3em] text-muted-foreground mb-4 uppercase">
                        {translate('title')}
                    </p>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-foreground max-w-4xl mx-auto text-balance leading-tight">
                        {translate('subtitle')}
                    </h2>
                </div>

                {/* Radial Diagram MD*/}
                <div className="hidden md:flex relative w-full max-w-4xl mx-auto aspect-square">
                    {/* Concentric circles */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* Outer ring with pattern */}
                        <div className="absolute w-[85%] h-[85%] rounded-full border border-border/30" />
                        <div
                            className="absolute w-[70%] h-[70%] rounded-full"
                            style={{
                                background: `repeating-radial-gradient(
                  circle at center,
                  transparent 0px,
                  transparent 2px,
                  rgba(255,255,255,0.03) 2px,
                  rgba(255,255,255,0.03) 4px
                )`,
                                border: "1px solid rgba(255,255,255,0.1)",
                            }}
                        />
                        <div
                            className="absolute w-[55%] h-[55%] rounded-full"
                            style={{
                                background: `repeating-radial-gradient(
                  circle at center,
                  transparent 0px,
                  transparent 3px,
                  rgba(255,255,255,0.04) 3px,
                  rgba(255,255,255,0.04) 6px
                )`,
                                border: "1px solid rgba(255,255,255,0.15)",
                            }}
                        />

                        {/* Center core - the "clear idea" */}
                        <div className="absolute z-10 w-[35%] h-[35%] rounded-full bg-[var(--background)]/10 backdrop-blur-md flex items-center justify-center border border-border/50">
                            <div className="text-center flex flex-col items-center p-4">
                                {/* <span className="mb-5 size-10" >
                                    <HiOutlineBuildingOffice2 />
                                </span> */}
                                <p className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase mb-2">
                                    {translate('result')}
                                </p>
                                {/* <p className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase mb-2">
                                    y alineadas con la visión del proyecto
                                </p> */}
                                {/* <p className="text-lg md:text-xl font-medium text-foreground">
                                    y alineadas con la visión del proyecto
                                </p> */}
                            </div>
                        </div>
                    </div>

                    {/* Connection lines and principle cards */}
                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        {/* Lines from center to principles */}
                        <line x1="50" y1="50" x2="15" y2="20" stroke="currentColor" strokeWidth="0.15" className="text-border" />
                        <line x1="50" y1="50" x2="85" y2="20" stroke="currentColor" strokeWidth="0.15" className="text-border" />
                        <line x1="50" y1="50" x2="85" y2="75" stroke="currentColor" strokeWidth="0.15" className="text-border" />
                        <line x1="50" y1="50" x2="15" y2="75" stroke="currentColor" strokeWidth="0.15" className="text-border" />

                        {/* Connection dots */}
                        <circle cx="15" cy="20" r="0.8" fill="currentColor" className="text-foreground" />
                        <circle cx="85" cy="20" r="0.8" fill="currentColor" className="text-foreground" />
                        <circle cx="85" cy="75" r="0.8" fill="currentColor" className="text-foreground" />
                        <circle cx="15" cy="75" r="0.8" fill="currentColor" className="text-foreground" />
                    </svg>

                    {/* Principle cards positioned around the circle */}
                    {principles.map((principle, index) => {
                        const Icon = principle.icon
                        const isActive = activeIndex === index

                        return (
                            <div
                                key={principle.id}
                                className="absolute w-[42%] md:w-[35%] transition-all duration-300 bg-[var(--background)]/10 backdrop-blur-md p-4 rounded-lg shadow-lg cursor-pointer z-10"
                                style={{
                                    ...principle.position,
                                }}
                                onMouseEnter={() => setActiveIndex(index)}
                                onMouseLeave={() => setActiveIndex(null)}
                            >
                                <div
                                    className={`
                    group cursor-pointer transition-all duration-300
                    ${isActive ? "translate-y-[-4px]" : ""}
                  `}
                                >
                                    <div className="flex items-center gap-2 mb-2 ">
                                        <div className={`
                      w-6 h-6 md:w-8 md:h-8 rounded-sm border flex items-center justify-center
                      transition-colors duration-300
                      ${isActive ? "bg-accent border-accent" : "bg-secondary border-border"}
                    `}>
                                            <Icon className={`w-3 h-3 md:w-4 md:h-4 transition-colors ${isActive ? "text-accent-foreground" : "text-foreground"}`} />
                                        </div>
                                        <span className="text-[10px] md:text-xs tracking-[0.15em] text-muted-foreground uppercase">
                                            {principle.label}
                                        </span>
                                        <span className="text-muted-foreground ml-auto">
                                            {isActive ? <IoIosArrowDown /> : <IoIosArrowForward />}
                                        </span>
                                    </div>

                                    <p className={`
                    text-xs md:text-sm leading-relaxed transition-colors duration-300
                    ${isActive ? "text-foreground" : "text-muted-foreground"}
                  `}>
                                        {principle.title}
                                    </p>

                                    <p className={`
                    text-xs leading-relaxed mt-2 transition-all duration-300 overflow-hidden
                    ${isActive ? "max-h-20 opacity-100 text-muted-foreground" : "max-h-0 opacity-0"}
                  `}>
                                        {principle.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/*Diagram SM*/}
                <div className="flex flex-col gap-5 md:hidden w-full mx-auto ">
                    {principles.map((principle, index) => {
                        const Icon = principle.icon
                        const isActive = activeIndex === index

                        return (
                            <div
                                key={principle.id}
                                className=" transition-all duration-300 bg-[var(--background)]/10 backdrop-blur-md p-4 rounded-lg shadow-lg cursor-pointer z-10"
                                onMouseEnter={() => setActiveIndex(index)}
                                onMouseLeave={() => setActiveIndex(null)}
                            >
                                <div
                                    className={`
                    group cursor-pointer transition-all duration-300
                    ${isActive ? "translate-y-[-4px]" : ""}
                  `}
                                >
                                    <div className="flex items-center gap-2 mb-2 ">
                                        <div className={`
                      w-6 h-6 md:w-8 md:h-8 rounded-sm border flex items-center justify-center
                      transition-colors duration-300
                      ${isActive ? "bg-accent border-accent" : "bg-secondary border-border"}
                    `}>
                                            <Icon className={`w-3 h-3 md:w-4 md:h-4 transition-colors ${isActive ? "text-accent-foreground" : "text-foreground"}`} />
                                        </div>
                                        <span className="text-[10px] md:text-xs tracking-[0.15em] text-muted-foreground uppercase">
                                            {principle.label}
                                        </span>
                                        <span className="text-muted-foreground ml-auto">
                                            {isActive ? <IoIosArrowDown /> : <IoIosArrowForward />}
                                        </span>
                                    </div>

                                    <p className={`
                    text-xs md:text-sm leading-relaxed transition-colors duration-300
                    ${isActive ? "text-foreground" : "text-muted-foreground"}
                  `}>
                                        {principle.title}
                                    </p>

                                    <p className={`
                    text-xs leading-relaxed mt-2 transition-all duration-300 overflow-hidden
                    ${isActive ? "max-h-20 opacity-100 text-muted-foreground" : "max-h-0 opacity-0"}
                  `}>
                                        {principle.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>




                {/* Result section */}
                <div className="block md:hidden mt-16 md:mt-24 text-center w-full ">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="h-px w-12 bg-border" />
                        <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
                            {translate('result_header')}
                        </span>
                        <div className="h-px w-12 bg-border" />
                    </div>
                    <p className="text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed font-light">
                        {translate('result')}
                    </p>
                </div>
            </div>
        </section>
    )
}
