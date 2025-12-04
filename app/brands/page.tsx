import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CartDrawer } from "@/components/cart-drawer"
import { BrandsCarousel } from "@/components/brands-carousel"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nuestras Marcas | Surtrade y Co.",
  description: "Descubra las marcas de confianza que representamos y distribuimos en Argentina y la región.",
}

export default function BrandsPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Nuestras Marcas</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Marcas líderes que orgullosamente representamos y distribuimos
              </p>
            </div>
            <BrandsCarousel />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <CartDrawer />
    </>
  )
}
