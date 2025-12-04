import { Check } from "lucide-react"

const specialties = [
  "Packaging",
  "Doy Pack",
  "Aluminio y Vidrio",
  "Máquinas de Packaging y Marcado Láser",
  "Soporte Técnico y Puesta en Marcha",
  "Gestión Aduanera y Servicios de Importación",
]

export function SpecialistsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Somos Especialistas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {specialties.map((specialty, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-card border rounded-lg hover:border-accent transition-colors"
              >
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <Check className="h-5 w-5 text-accent" />
                </div>
                <span className="font-medium text-left">{specialty}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
