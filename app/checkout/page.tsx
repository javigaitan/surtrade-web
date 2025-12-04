import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CartDrawer } from "@/components/cart-drawer"
import { CheckoutForm } from "@/components/checkout-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Solicitar Cotización | Surtrade y Co.",
  description: "Envíe su solicitud de cotización y nuestro equipo de ventas lo contactará con precios personalizados.",
}

export default function CheckoutPage() {
  return (
    <>
      <Navigation />
      <main>
        <CheckoutForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <CartDrawer />
    </>
  )
}
