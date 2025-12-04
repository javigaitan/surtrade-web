"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"

const accordionItems = [
  {
    value: "experience",
    title: "Nuestra Experiencia",
    content:
      "Con años de experiencia en comercio internacional, hemos desarrollado una profunda expertise en ayudar a las PYMEs argentinas a navegar procesos complejos de importación. Nuestro equipo combina conocimiento de regulaciones locales con gestión de cadena de suministro global, asegurando operaciones sin problemas desde el abastecimiento hasta la entrega. Hemos completado exitosamente miles de operaciones de importación, construyendo relaciones sólidas con proveedores en múltiples continentes.",
  },
  {
    value: "doypack",
    title: "Diseño y Producción de Nuestro Propio Packaging Doy Pack",
    content:
      "Operamos nuestra propia planta de producción en China, fabricando packaging Doy Pack bajo estándares de calidad internacionales que superan las alternativas locales. Nuestras capacidades de producción propia nos permiten ofrecer soluciones personalizadas con varias opciones de cierre incluyendo tapas, asas y zippers. Esta integración vertical asegura control de calidad, precios competitivos y flexibilidad para cumplir con los requisitos específicos del cliente en diferentes tamaños y capacidades.",
  },
  {
    value: "network",
    title: "Red Consolidada de Proveedores Internacionales",
    content:
      "A lo largo de los años, hemos construido y mantenido una red robusta de proveedores internacionales confiables en las principales regiones de manufactura. Esta red consolidada proporciona a nuestros clientes acceso a productos de calidad a precios competitivos, tiempos de entrega reducidos y mayor estabilidad en la cadena de suministro. Nuestras relaciones establecidas nos permiten negociar términos favorables y asegurar calidad consistente de productos para nuestros clientes.",
  },
  {
    value: "importing",
    title: "Importación Tercerizada con Esquemas Personalizados",
    content:
      "Ofrecemos servicios integrales de importación tercerizada adaptados a las necesidades únicas de cada cliente. Nuestros esquemas personalizados manejan todo desde la selección de proveedores y control de calidad hasta el despacho aduanero y entrega final. Esta solución llave en mano permite a las PYMEs enfocarse en su negocio principal mientras nosotros gestionamos las complejidades del comercio internacional, incluyendo documentación, cumplimiento y coordinación logística.",
  },
  {
    value: "vision",
    title: "Visión Estratégica",
    content:
      "Nuestra visión estratégica se centra en empoderar a las PYMEs argentinas para competir globalmente proporcionando soluciones de importación accesibles y eficientes. Invertimos continuamente en tecnología, relaciones y expertise para mantenernos adelante de las tendencias del mercado. Al entender los objetivos a largo plazo de cada cliente, desarrollamos asociaciones que apoyan el crecimiento sostenible, la innovación y la ventaja competitiva en sus respectivos mercados.",
  },
]

export function SpecializedServices() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Servicios Especializados</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expertise profunda y soluciones personalizadas para el crecimiento de su negocio
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/professional-business-handshake-international-trad.jpg"
              alt="Servicios Especializados"
              fill
              className="object-cover"
            />
          </div>

          {/* Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {accordionItems.map((item) => (
                <AccordionItem key={item.value} value={item.value} className="bg-card border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:text-accent hover:no-underline">
                    <span className="font-semibold text-lg">{item.title}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
