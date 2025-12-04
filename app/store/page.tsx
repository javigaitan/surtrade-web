import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CartDrawer } from "@/components/cart-drawer"
import { ProductStore } from "@/components/product-store"
import { Suspense } from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tienda de Productos | Surtrade y Co.",
  description: "Explore nuestro extenso catálogo de packaging, maquinaria y productos para industria y comercio.",
}

export default function StorePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Suspense fallback={<div>Cargando productos...</div>}>
          <ProductStore />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
      <CartDrawer />
    </>
  )
}
