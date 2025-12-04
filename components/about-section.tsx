import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/professional-business-team-international-trade-off.jpg"
              alt="Sobre Surtrade y Co"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="text-sm font-semibold text-accent mb-2">01.</div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                En SurTrade&Co conectamos mercados, generamos oportunidades de negocio y promovemos bienestar. Somos una
                empresa formada por profesionales de múltiples áreas que comparten la misma visión: ayudar a que las
                PYMEs argentinas crezcan a través de soluciones reales en comercio internacional, abastecimiento y
                procesos de producción.
              </p>
            </div>

            <div>
              <div className="text-sm font-semibold text-accent mb-2">02.</div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Nuestro equipo incluye expertos en Economía, Comercio Internacional, Logística, Desarrollo de Negocios y
                personal técnico especializado para mantenimiento, instalación y puesta en marcha de equipos
                industriales. Esta combinación nos permite brindar soporte integral a cada cliente, acompañando sus
                procesos de fabricación, embalaje y optimización de costos con un enfoque en innovación y mejora
                continua.
              </p>
            </div>

            <div>
              <div className="text-sm font-semibold text-accent mb-2">03.</div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                También contamos con una red nacional de talleres y técnicos asociados, diseñada para ofrecer servicios
                de mantenimiento, asistencia técnica y consultoría personalizada.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6 py-4">
              <h3 className="font-bold text-xl mb-3 text-primary">Fabricación</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fabricamos nuestro propio packaging Doy Pack en una planta de producción en China que opera bajo
                estándares de calidad internacionales superiores a la fabricación local. Ofrecemos una amplia variedad
                de Doy Packs con tapas, asas o cierres zipper en diferentes tamaños y capacidades.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6 py-4">
              <h3 className="font-bold text-xl mb-3 text-primary">Marca HANA</h3>
              <p className="text-muted-foreground leading-relaxed">
                También desarrollamos nuestras propias líneas de productos bajo nuestra marca HANA, dirigidos tanto al
                comercio mayorista como minorista, alineados con nuestro propósito de hacer la vida más fácil, limpia y
                saludable.
              </p>
            </div>

            <div className="bg-secondary/20 rounded-lg p-6">
              <h3 className="font-bold text-xl mb-3 text-primary">Compromiso</h3>
              <p className="text-muted-foreground leading-relaxed">
                En SurTrade&Co, trabajamos cada día para que nuestros clientes puedan producir mejor, crecer con
                confianza y disfrutar de la tranquilidad de saber que tienen un socio que comprende sus desafíos y
                comparte sus objetivos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
