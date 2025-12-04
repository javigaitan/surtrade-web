import {
  Package,
  Settings,
  Palette,
  Box,
  Wrench,
  Ship,
  PenTool as Tool,
  FileText,
  ShoppingCart,
  Headphones,
  Globe,
  Store,
} from "lucide-react"

const services = [
  {
    icon: Package,
    title: "Asesoramiento en Packaging",
    description:
      "Orientación experta en soluciones de packaging adaptadas a sus productos y requisitos de la industria.",
  },
  {
    icon: Settings,
    title: "Asesoramiento en Maquinaria",
    description:
      "Asesoramiento profesional para seleccionar e implementar la maquinaria adecuada para sus necesidades de producción.",
  },
  {
    icon: Palette,
    title: "Diseño e Implementación de Etiquetas",
    description:
      "Servicios creativos de diseño de etiquetas con soporte completo de implementación para su marca de producto.",
  },
  {
    icon: Box,
    title: "Diseño de Packaging",
    description:
      "Soluciones personalizadas de diseño de packaging que protegen sus productos y mejoran la visibilidad de la marca.",
  },
  {
    icon: Wrench,
    title: "Doy Pack y Puesta en Marcha",
    description: "Soluciones completas de Doy Pack con servicios profesionales de puesta en marcha y configuración.",
  },
  {
    icon: Ship,
    title: "Logística de Importación",
    description:
      "Gestión logística de importación de principio a fin asegurando despacho aduanero y entrega sin problemas.",
  },
  {
    icon: Tool,
    title: "Mantenimiento Mayor",
    description: "Servicios integrales de mantenimiento para mantener su equipo funcionando al máximo rendimiento.",
  },
  {
    icon: FileText,
    title: "Gestión Técnica Tercerizada",
    description: "Servicios profesionales de documentación técnica y gestión para sus operaciones.",
  },
  {
    icon: ShoppingCart,
    title: "Recomendación, Cotización y Abastecimiento",
    description:
      "Recomendaciones expertas de productos con cotizaciones competitivas y cadenas de suministro confiables.",
  },
  {
    icon: Headphones,
    title: "Posventa y Mantenimiento",
    description: "Soporte posventa dedicado y mantenimiento continuo para asegurar la satisfacción del cliente.",
  },
  {
    icon: Globe,
    title: "Servicios de Importación y Personalización",
    description:
      "Soluciones de importación personalizadas adaptadas a sus necesidades y requisitos específicos de negocio.",
  },
  {
    icon: Store,
    title: "Abastecimiento Local para PYMEs",
    description: "Red de suministro local confiable diseñada específicamente para pequeñas y medianas empresas.",
  },
]

export function IntegralServices() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Servicios Integrales</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hacemos tu proceso simple, rápido y eficiente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow hover:border-accent"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg mb-2 text-primary">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
