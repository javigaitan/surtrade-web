import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CartDrawer } from "@/components/cart-drawer"
import { IntegralServices } from "@/components/integral-services"
import { SpecializedServices } from "@/components/specialized-services"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Servicios | Surtrade y Co.",
  description:
    "Servicios integrales de importación y comercio para PYMEs. Asesoramiento en packaging, maquinaria, logística y soluciones personalizadas.",
}

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main>
        <IntegralServices />
        <SpecializedServices />
      </main>
      <Footer />
      <WhatsAppButton />
      <CartDrawer />
    </>
  )
}
