"use client"

import { useCart } from "@/contexts/cart-context"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart } = useCart()

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle>Su Solicitud de Cotización</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
            <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Su carrito está vacío</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Agregue productos para solicitar una cotización a nuestro equipo de ventas.
            </p>
            <Button onClick={() => setIsCartOpen(false)} asChild>
              <Link href="/store">Ver Productos</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4">
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-4 border-b pb-4">
                    <div className="relative h-20 w-20 flex-shrink-0 rounded-md overflow-hidden bg-muted">
                      <Image
                        src={item.product.images[0] || "/placeholder.svg?height=80&width=80"}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm line-clamp-2">{item.product.name}</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {item.product.category === "industry" ? "Industria" : "Comercio"}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-7 w-7 bg-transparent"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-7 w-7 bg-transparent"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-7 w-7 ml-auto text-destructive"
                          onClick={() => removeFromCart(item.product.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t pt-4 space-y-3">
              <div className="bg-secondary/20 p-3 rounded-md">
                <p className="text-xs text-muted-foreground">
                  Los productos no muestran precio. Nuestro equipo de ventas lo contactará con asistencia personalizada
                  y precios.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" onClick={() => setIsCartOpen(false)}>
                  Seguir Comprando
                </Button>
                <Button asChild>
                  <Link href="/checkout">Solicitar Cotización</Link>
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
