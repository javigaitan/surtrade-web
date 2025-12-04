"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useCart } from "@/contexts/cart-context"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, CheckCircle } from "lucide-react"
import { sendQuotationRequest } from "@/app/actions/send-quotation"

export function CheckoutForm() {
  const { items, clearCart } = useCart()
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  // Redirect if cart is empty and not submitted
  useEffect(() => {
    if (items.length === 0 && !submitted) {
      router.push("/store")
    }
  }, [items.length, router, submitted])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      // Prepare quotation data
      const quotationData = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
        items: items.map((item) => ({
          name: item.product.name,
          quantity: item.quantity,
          category: item.product.category
          
        })),
      }

      // Save to Firestore (optional - store quotation requests)
      try {
        // Firestore save logic can remain here if needed
      } catch (firestoreError) {
        console.error("[v0] Error saving to Firestore:", firestoreError)
        // Continue even if Firestore fails
      }

      // Send email via server action
      const result = await sendQuotationRequest(quotationData)

      if (!result.success) {
        alert(result.message)
        return
      }

      // Clear cart and show success
      clearCart()
      setSubmitted(true)
    } catch (error) {
      console.error("[v0] Error submitting quotation:", error)
      alert("Hubo un error al enviar su solicitud. Por favor intente nuevamente o contáctenos directamente.")
    } finally {
      setSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (submitted) {
    return (
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="h-20 w-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-accent" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">¡Solicitud de Cotización Enviada!</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Gracias por su solicitud. Nuestro equipo de ventas revisará su consulta y lo contactará pronto con precios
              personalizados y asistencia.
            </p>
            <div className="bg-muted/30 rounded-lg p-6 mb-8">
              <h2 className="font-semibold text-lg mb-2">¿Qué sigue?</h2>
              <ul className="text-left text-muted-foreground space-y-2">
                <li>• Nuestro equipo revisará su selección de productos</li>
                <li>• Prepararemos una cotización personalizada</li>
                <li>• Recibirá una respuesta en 24-48 horas</li>
                <li>• Responderemos cualquier pregunta que tenga</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/store">Seguir Comprando</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/">Volver al Inicio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">Solicitar Cotización</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6">Su Información</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nombre Completo *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="juan@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Teléfono *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+54 11 1234 5678"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Mensaje Adicional</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntenos sobre sus necesidades, plazos o cualquier requisito específico..."
                    rows={4}
                  />
                </div>

                <div className="bg-secondary/20 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Al enviar este formulario, acepta ser contactado por nuestro equipo de ventas respecto a su
                    solicitud de cotización.
                  </p>
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                  {submitting ? "Enviando Solicitud..." : "Enviar Solicitud de Cotización"}
                </Button>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-card border rounded-lg p-6 sticky top-20">
              <h2 className="text-xl font-semibold mb-6">Resumen del Pedido</h2>

              {items.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingBag className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground">Su carrito está vacío</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div key={item.product.id} className="flex gap-3">
                        <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden bg-muted">
                          <Image
                            src={item.product.images[0] || "/placeholder.svg?height=80&width=80"}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm line-clamp-2 mb-1">{item.product.name}</h4>
                          <p className="text-xs text-muted-foreground">Cantidad: {item.quantity}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Total de Artículos:</span>
                      <span className="font-semibold">{items.reduce((sum, item) => sum + item.quantity, 0)}</span>
                    </div>
                    <div className="bg-accent/10 rounded-lg p-3 mt-4">
                      <p className="text-xs text-muted-foreground text-center">
                        Los precios serán proporcionados por nuestro equipo de ventas según sus requisitos y cantidades
                        específicas.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
