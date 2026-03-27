'use client'
import React, { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

interface Partner {
    company: string
    contact?: string
    logo: string
}

interface CarruselCustomersProps {
    partners: Partner[]
    speed?: number // Segundos por ciclo
    pauseOnHover?: boolean
}

export const CarruselCustomers: React.FC<CarruselCustomersProps> = ({
    partners,
    speed = 30,
    pauseOnHover = true
}) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const tweenRef = useRef<gsap.core.Tween | null>(null)

    useGSAP(() => {
        if (!containerRef.current || partners.length === 0) return

        const container = containerRef.current
        // El ancho a desplazar es la mitad del total (ya que duplicamos la lista)
        const totalWidth = container.scrollWidth / 2

        // Creamos la animación infinita
        tweenRef.current = gsap.to(container, {
            x: -totalWidth,
            duration: speed,
            ease: "none",
            repeat: -1,
            // Asegura que si los logos tardan en cargar, se recalcule al terminar un ciclo
            onRepeat: () => {
                const currentWidth = container.scrollWidth / 2
                if (currentWidth !== totalWidth) {
                    gsap.set(container, { x: 0 })
                }
            }
        })
    }, { scope: containerRef, dependencies: [partners, speed] })

    // Manejadores de eventos optimizados
    const handleMouseEnter = () => {
        if (pauseOnHover && tweenRef.current) {
            // "timeScale" permite una pausa/reanudación más suave si se desea
            tweenRef.current.pause()
        }
    }

    const handleMouseLeave = () => {
        if (pauseOnHover && tweenRef.current) {
            tweenRef.current.play()
        }
    }

    if (!partners || partners.length === 0) return null

    const duplicatedPartners = [...partners, ...partners]

    return (
        <section className="w-full overflow-hidden py-8" aria-label="Nuestros Partners">
            <div className="container mx-auto px-4">
                <div
                    className="relative overflow-hidden select-none"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div
                        ref={containerRef}
                        className="flex items-center gap-12"
                        style={{ width: 'max-content', willChange: 'transform' }}
                    >
                        {duplicatedPartners.map((partner, index) => (
                            <div
                                key={`${partner.company}-${index}`}
                                className="flex-shrink-0 w-40 h-24 flex items-center justify-center p-4 transition-transform duration-300 hover:scale-110"
                            >
                                {partner.contact ? (
                                    <a
                                        href={partner.contact}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full h-full flex items-center justify-center"
                                        aria-label={`Visitar sitio web de ${partner.company}`}
                                    >
                                        <LogoImage partner={partner} />
                                    </a>
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <LogoImage partner={partner} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

// Sub-componente para limpiar el JSX principal
const LogoImage = ({ partner }: { partner: Partner }) => (
    <>
        <img
            src={partner.logo}
            alt={`Logo de ${partner.company}`}
            className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            loading="lazy"
            draggable="false"
            onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
                target.nextElementSibling?.classList.remove('hidden')
            }}
        />
        <div className="hidden text-center text-sm text-gray-600 dark:text-gray-300">
            {partner.company}
        </div>
    </>
)