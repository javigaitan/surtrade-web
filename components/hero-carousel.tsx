"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const slides = [
  {
    image: "/industrial-packaging-machines-factory-production-l.jpg",
    title: "Soluciones Industriales Completas",
    subtitle: "Envases y Maquinaria de Última Generación",
    description:
      "Envases de aluminio, vidrio y doypacks. Máquinas de llenado, sellado, marcación y logística para potenciar tu línea de producción.",
    cta: "Explorar Soluciones Industriales",
    ctaLink: "/store?category=Para+Industrias",
    gradient: "from-blue-900/90 via-blue-800/85 to-blue-700/80",
  },
  {
    image: "/business-consulting-industrial-services-profession.jpg",
    title: "Servicios que Impulsan tu Producción",
    subtitle: "Asesoramiento Técnico y Logística Profesional",
    description:
      "Puesta en marcha, diseño de envases, importación, mantenimiento técnico y customización. Tu socio estratégico de principio a fin.",
    cta: "Conocer Nuestros Servicios",
    ctaLink: "/services",
    gradient: "from-teal-900/90 via-teal-800/85 to-teal-700/80",
  },
  {
    image: "/outdoor-camping-kayak-products-retail-display.jpg",
    title: "HANA Outdoor para tu Comercio",
    subtitle: "Productos Premium Listos para Reventa",
    description:
      "Carpas, kayaks, paddleboard, termos, mochilas impermeables y más. Línea completa Wellness, Home, Pack y Gift personalizables.",
    cta: "Ver Productos HANA",
    ctaLink: "/store?category=Para+Comercios",
    gradient: "from-orange-900/90 via-orange-800/85 to-orange-700/80",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[750px] overflow-hidden bg-primary/5">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl text-white">
                <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                  <p className="text-sm font-semibold uppercase tracking-wide">{slide.subtitle}</p>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-8 text-pretty opacity-95 leading-relaxed max-w-2xl">
                  {slide.description}
                </p>
                <Button
                  asChild
                  size="lg"
                  className="text-base md:text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-xl"
                >
                  <Link href={slide.ctaLink} className="flex items-center gap-2">
                    {slide.cta}
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10 h-12 w-12"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10 h-12 w-12"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === currentSlide ? "w-12 bg-white" : "w-2.5 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
