"use client"

import { useState, useEffect, useCallback } from "react"
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import { cn } from "@/lib/utils"

interface Testimonial {
  id: number
  name: string
  profession: string
  testimonial: string
  avatar?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María García",
    profession: "Directora General",
    testimonial:
      "Trabajar con este equipo ha sido una experiencia increíble. Su profesionalismo y dedicación superaron todas mis expectativas. El resultado final fue exactamente lo que necesitábamos para impulsar nuestro negocio.",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    profession: "CEO & Fundador",
    testimonial:
      "La calidad del servicio es excepcional. Desde el primer contacto hasta la entrega final, todo fue impecable. Definitivamente los recomendaría a cualquier empresa que busque resultados de alta calidad.",
  },
  {
    id: 3,
    name: "Ana Martínez",
    profession: "Directora BIM",
    testimonial:
      "Su atención al detalle y capacidad para entender nuestras necesidades fue impresionante. El proyecto se entregó a tiempo y el soporte post-entrega ha sido excelente.",
  },
  {
    id: 4,
    name: "Roberto Sánchez",
    profession: "Director General",
    testimonial:
      "Encontrar un equipo que combine creatividad con profesionalismo técnico es difícil. Ellos lo lograron perfectamente y el resultado habla por sí mismo.",
  },
  {
    id: 5,
    name: "Laura Torres",
    profession: "Gerente de Proyectos",
    testimonial:
      "La comunicación fue clara y constante durante todo el proceso. Siempre estuvieron disponibles para resolver dudas y hacer ajustes. Un placer trabajar con ellos.",
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(goToNext, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, goToNext])

  return (
    <section className="w-full py-16 md:py-24 ">
      <div className="max-w-6xl mx-auto lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-medium tracking-wider uppercase text-primary mb-3 block">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground text-balance">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Testimonial Card */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4 ">
                  <div className="rounded-2xl p-8 shadow-sm border border-border max-w-3xl mx-auto">
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <FaQuoteLeft className="size-8 text-primary opacity-60" />
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-md text-foreground leading-relaxed mb-4 font-serif italic">
                      {`"${testimonial.testimonial}"`}
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-lg">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>

                      {/* Name and Profession */}
                      <div>
                        <p className="font-semibold text-foreground text-lg">
                          {testimonial.name}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {testimonial.profession}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => {
              goToPrevious()
              setIsAutoPlaying(false)
            }}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:translate-x-0 w-12 h-12 rounded-full bg-card border border-border shadow-sm flex items-center justify-center text-foreground hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Testimonio anterior"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => {
              goToNext()
              setIsAutoPlaying(false)
            }}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-0 w-12 h-12 rounded-full bg-card border border-border shadow-sm flex items-center justify-center text-foreground hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Siguiente testimonio"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                index === currentIndex
                  ? "bg-primary w-8"
                  : "bg-border hover:bg-muted-foreground"
              )}
              aria-label={`Ir al testimonio ${index + 1}`}
              aria-current={index === currentIndex ? "true" : "false"}
            />
          ))}
        </div>

        {/* Counter */}
        <p className="text-center text-muted-foreground text-sm">
          {currentIndex + 1} / {testimonials.length}
        </p>
      </div>
    </section>
  )
}
