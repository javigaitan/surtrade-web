import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CartDrawer } from "@/components/cart-drawer"
import { ProductDetail } from "@/components/product-detail"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Detalles del Producto | Surtrade y Co.",
  description: "Ver información detallada del producto y solicitar cotización.",
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <Navigation />
      <main>
        <ProductDetail slug={params.slug} />
      </main>
      <Footer />
      <WhatsAppButton />
      <CartDrawer />
    </>
  )
}
