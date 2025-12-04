"use client"

import { useEffect, useState } from "react"
import { getAllProducts } from "@/lib/products"
import type { Product } from "@/lib/types"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function ProductShowcase() {
  const [products, setProducts] = useState<Product[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productData = await getAllProducts()
        setProducts(productData.slice(0, 8))
      } catch (error) {
        console.error("[v0] Error fetching products:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const visibleProducts = 3
  const canScrollLeft = currentIndex > 0
  const canScrollRight = currentIndex < products.length - visibleProducts

  const scrollLeft = () => {
    if (canScrollLeft) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const scrollRight = () => {
    if (canScrollRight) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  if (loading) {
    return (
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Shop – Nuestra Tienda Online</h2>
            <p className="text-muted-foreground">Cargando productos...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Shop – Nuestra Tienda Online</h2>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            Explore nuestra selección de productos de calidad para industria y comercio
          </p>
        </div>

        {products.length > 0 ? (
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{
                  transform: `translateX(-${currentIndex * (100 / visibleProducts)}%)`,
                }}
              >
                {products.map((product) => (
                  <div key={product.id} className="flex-shrink-0 w-full md:w-1/3">
                    <div className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-64 bg-muted">
                        <Image
                          src={product.images[0] || "/placeholder.svg?height=300&width=300"}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {product.shortDescription || product.description}
                        </p>
                        <Button asChild className="w-full">
                          <Link href={`/products/${product.slug}`}>Leer Más</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            {products.length > visibleProducts && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 hidden md:flex bg-transparent"
                  onClick={scrollLeft}
                  disabled={!canScrollLeft}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 hidden md:flex bg-transparent"
                  onClick={scrollRight}
                  disabled={!canScrollRight}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </>
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No hay productos disponibles en este momento.</p>
          </div>
        )}

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/store">Ver Todos los Productos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
