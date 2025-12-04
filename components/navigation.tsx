"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, Search, ShoppingCart, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const menuItems = [
  { label: "Inicio", href: "/" },
  { label: "Quienes somos", href: "/#about" },
  {
    label: "Productos y Servicios",
    href: "/store",
    submenu: [
      {
        label: "Para Industrias",
        href: "/store?category=Para+Industrias",
        items: [
          { label: "Envases", href: "/store?category=Para+Industrias&subcategory=Envases" },
          { label: "Máquinas de Envasado", href: "/store?category=Para+Industrias&subcategory=Máquinas+de+Envasado" },
          { label: "Máquinas de Sellado", href: "/store?category=Para+Industrias&subcategory=Sellado" },
          { label: "Máquinas de Marcación", href: "/store?category=Para+Industrias&subcategory=Marcación" },
        ],
      },
      {
        label: "Para Comercios",
        href: "/store?category=Para+Comercios",
        items: [
          { label: "Author", href: "/store?category=Para+Comercios&subcategory=Author" },
          { label: "Wellness", href: "/store?category=Para+Comercios&subcategory=Wellness" },
          { label: "Deco", href: "/store?category=Para+Comercios&subcategory=Deco" },
          { label: "Packing", href: "/store?category=Para+Comercios&subcategory=Packing" },
          { label: "Gift", href: "/store?category=Para+Comercios&subcategory=Gift" },
        ],
      },
      {
        label: "Servicios",
        href: "/services",
        items: [
          { label: "Asesoramiento de Envasado", href: "/services#asesoramiento" },
          { label: "Más Máquinas", href: "/services#maquinas" },
          { label: "Representación Comercial", href: "/services#representacion" },
          { label: "Logística de Importación", href: "/services#logistica" },
          { label: "Puesta en Marcha", href: "/services#puesta-marcha" },
          { label: "Post Venta", href: "/services#post-venta" },
          { label: "Mantenimiento Mayor", href: "/services#mantenimiento" },
          { label: "Guión Tercerizado", href: "/services#guion" },
          { label: "Diseño e Impresión de Etiquetas", href: "/services#etiquetas" },
          { label: "Tercerizado", href: "/services#tercerizado" },
          { label: "Diseño de Envases", href: "/services#diseno-envases" },
          { label: "DOI Pack", href: "/services#doi-pack" },
          { label: "Servicios de Importación", href: "/services#importacion" },
          { label: "Customización", href: "/services#customizacion" },
        ],
      },
    ],
  },
  {
    label: "Nuestras Marcas",
    href: "/brands",
    submenu: [
      {
        label: "HANA",
        href: "/store?brand=HANA",
        items: [
          { label: "HANA Outdoor", href: "/store?brand=HANA&line=Outdoor" },
          { label: "HANA Wellness", href: "/store?brand=HANA&line=Wellness" },
          { label: "HANA Home", href: "/store?brand=HANA&line=Home" },
          { label: "HANA Pack", href: "/store?brand=HANA&line=Pack" },
        ],
      },
    ],
  },
  { label: "Contacto", href: "/#contact" },
  { label: "Novedades", href: "/news" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const { totalItems, setIsCartOpen } = useCart()

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Surtrade & Co." width={190} height={60} className="h-10 w-auto" priority />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.submenu && setOpenSubmenu(item.label)}
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 text-base font-medium text-foreground hover:text-accent transition-colors flex items-center gap-1"
                >
                  {item.label}
                  {item.submenu && <ChevronDown className="h-4 w-4" />}
                </Link>

                {/* Mega Menu Dropdown */}
                {item.submenu && openSubmenu === item.label && (
                  <div className="absolute left-0 top-full pt-2 w-screen max-w-4xl z-50">
                    <div className="bg-card border rounded-lg shadow-xl p-8">
                      <div className={`grid gap-8 ${item.submenu.length === 3 ? "grid-cols-3" : "grid-cols-2"}`}>
                        {item.submenu.map((section) => (
                          <div key={section.label}>
                            <Link
                              href={section.href || "#"}
                              className="font-bold text-base text-primary mb-4 pb-2 border-b block hover:text-accent transition-colors"
                              onClick={() => setOpenSubmenu(null)}
                            >
                              {section.label}
                            </Link>
                            <ul className="space-y-2.5">
                              {section.items.map((subItem) => (
                                <li key={subItem.label}>
                                  <Link
                                    href={subItem.href}
                                    className="text-sm text-muted-foreground hover:text-accent transition-colors block py-1"
                                    onClick={() => setOpenSubmenu(null)}
                                  >
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hidden md:inline-flex" asChild>
              <Link href="/store?search=true">
                <Search className="h-5 w-5" />
                <span className="sr-only">Buscar productos</span>
              </Link>
            </Button>

            <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(true)} className="relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
              <span className="sr-only">Carrito de compras</span>
            </Button>

            {/* Mobile Menu Toggle */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-md overflow-y-auto">
                <nav className="flex flex-col space-y-2 mt-6">
                  <Accordion type="single" collapsible className="w-full">
                    {menuItems.map((item, index) =>
                      item.submenu ? (
                        <AccordionItem key={item.label} value={`item-${index}`} className="border-b">
                          <AccordionTrigger className="text-base font-medium hover:text-accent py-3">
                            {item.label}
                          </AccordionTrigger>
                          <AccordionContent>
                            <Accordion type="single" collapsible className="w-full pl-2">
                              {item.submenu.map((section, sectionIndex) => (
                                <AccordionItem
                                  key={section.label}
                                  value={`section-${index}-${sectionIndex}`}
                                  className="border-b-0"
                                >
                                  <AccordionTrigger className="text-sm font-semibold text-primary py-2">
                                    <Link
                                      href={section.href || "#"}
                                      className="flex-1 text-left hover:text-accent transition-colors"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {section.label}
                                    </Link>
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    <ul className="space-y-2 pl-3">
                                      {section.items.map((subItem) => (
                                        <li key={subItem.label}>
                                          <Link
                                            href={subItem.href}
                                            className="text-sm text-muted-foreground hover:text-accent transition-colors block py-1.5"
                                            onClick={() => setIsOpen(false)}
                                          >
                                            {subItem.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </AccordionContent>
                                </AccordionItem>
                              ))}
                            </Accordion>
                          </AccordionContent>
                        </AccordionItem>
                      ) : (
                        <div key={item.label} className="border-b">
                          <Link
                            href={item.href}
                            className="text-base font-medium hover:text-accent transition-colors block py-3"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </div>
                      ),
                    )}
                  </Accordion>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
