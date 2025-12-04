import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CartDrawer } from "@/components/cart-drawer"
import { HeroCarousel } from "@/components/hero-carousel"
import { SpecialistsSection } from "@/components/specialists-section"
import { AboutSection } from "@/components/about-section"
import { ProductShowcase } from "@/components/product-showcase"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroCarousel />
        <SpecialistsSection />
        <AboutSection />
        <ProductShowcase />
      </main>
      <Footer />
      <WhatsAppButton />
      <CartDrawer />
    </>
  )
}
