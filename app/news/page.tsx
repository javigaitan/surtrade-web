import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CartDrawer } from "@/components/cart-drawer"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Novedades | Surtrade y Co.",
  description:
    "Manténgase actualizado con las últimas novedades y actualizaciones de Surtrade y Co. Suscríbase a nuestros canales de mensajería.",
}

export default function NewsPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="py-16 md:py-24 bg-background min-h-[60vh]">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Novedades</h1>
              <p className="text-xl text-muted-foreground mb-12">
                Manténgase actualizado suscribiéndose a nuestros canales de mensajería.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="bg-card border rounded-lg p-8 hover:shadow-lg transition-all hover:border-accent">
                    <div className="h-16 w-16 rounded-full bg-[#1877F2]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1877F2]/20 transition-colors">
                      <Facebook className="h-8 w-8 text-[#1877F2]" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Facebook</h3>
                    <p className="text-sm text-muted-foreground">Síguenos para actualizaciones y novedades diarias</p>
                  </div>
                </a>

                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="bg-card border rounded-lg p-8 hover:shadow-lg transition-all hover:border-accent">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex items-center justify-center mx-auto mb-4 group-hover:opacity-90 transition-opacity">
                      <Instagram className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Instagram</h3>
                    <p className="text-sm text-muted-foreground">Revisa nuestras historias visuales y productos</p>
                  </div>
                </a>

                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="bg-card border rounded-lg p-8 hover:shadow-lg transition-all hover:border-accent">
                    <div className="h-16 w-16 rounded-full bg-[#0A66C2]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0A66C2]/20 transition-colors">
                      <Linkedin className="h-8 w-8 text-[#0A66C2]" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">LinkedIn</h3>
                    <p className="text-sm text-muted-foreground">Conéctate para conocimientos de negocios</p>
                  </div>
                </a>
              </div>

              <div className="mt-16 p-8 bg-muted/30 rounded-lg">
                <h2 className="text-2xl font-bold text-primary mb-4">Suscríbase a Nuestro Boletín</h2>
                <p className="text-muted-foreground mb-6">
                  Reciba las últimas actualizaciones sobre productos, servicios y novedades de la industria en su
                  bandeja de entrada.
                </p>
                <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Ingrese su email"
                    className="flex-1 px-4 py-2 rounded-md border bg-background"
                    required
                  />
                  <Button type="submit">Suscribirse</Button>
                </form>
              </div>

              <div className="mt-12 text-center text-muted-foreground">
                <p className="text-sm">
                  Más contenido próximamente. ¡Siga nuestros canales sociales para mantenerse conectado!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <CartDrawer />
    </>
  )
}
