"use client"
import { useTranslations } from "next-intl"
import { useEffect, useRef, useState } from "react"

function useCountUp(target: number, duration: number = 2000, startCounting: boolean = false) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!startCounting) return
        let start = 0
        const increment = target / (duration / 16)
        const timer = setInterval(() => {
            start += increment
            if (start >= target) {
                setCount(target)
                clearInterval(timer)
            } else {
                setCount(Math.floor(start))
            }
        }, 16)
        return () => clearInterval(timer)
    }, [target, duration, startCounting])

    return count
}

function StatCard({
    value,
    prefix,
    suffix,
    label,
    inView,
}: {
    value: number
    prefix?: string
    suffix?: string
    label: string
    inView: boolean
}) {
    const count = useCountUp(value, 2000, inView)

    return (
        <div className="group relative text-center ">
            {/* Divider line on right (except last) */}
            <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-border/50 hidden lg:block group-last:hidden" />

            <div className="mb-3">
                <span className="font-bold text-3xl md:text-4xl lg:text-5xl text-white tabular-nums">
                    {prefix}
                    {count.toLocaleString()}
                    {suffix}
                </span>
            </div>
            <p className="text-sm md:text-base text-white uppercase tracking-wider">
                {label}
            </p>
        </div>
    )
}

export function StatsSection() {
    const ref = useRef<HTMLDivElement>(null)
    const [inView, setInView] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.3 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    const translate = useTranslations('StatsCards')

    const stats = [
        { value: 100, suffix: " %", label: translate('TitleOne'), prefix: "" },
        { value: 10, label: translate('TitleTwo'), prefix: "+ " },
        { value: 280, label: translate('TitleThree'), prefix: "+ " },
        { value: 200000, label: translate('TitleFour'), prefix: "+ " },
    ]

    return (
        <section ref={ref} className="py-16 border-y border-border/50 bg-[var(--primary)] w-full mx-auto">
            <div className="mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-15 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <StatCard
                            key={stat.label}
                            value={stat.value}
                            prefix={stat.prefix}
                            suffix={stat.suffix}
                            label={stat.label}
                            inView={inView}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
