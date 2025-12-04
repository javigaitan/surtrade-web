"use client"

import { useEffect, useState } from "react"
import { getAllProducts, getProductBySlug, getRelatedProducts } from "@/lib/products"
import type { Product } from "@/lib/types"
import { useCart } from "@/contexts/cart-context"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import Image from "next/image"
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

interface ProductDetailProps {
  slug: string
}

export function ProductDetail({ slug }: ProductDetailProps) {
  const [product, setProduct] = useState<Product | null>(null)
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { addToCart } = useCart()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductBySlug(slug)

        if (productData) {
          setProduct(productData)

          const allProducts = await getAllProducts()
          const related = getRelatedProducts(productData, allProducts, 8)
          setRelatedProducts(related)
        }
      } catch (error) {
        console.error("[v0] Error fetching product:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [slug])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <p className="text-center text-muted-foreground">Cargando producto...</p>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-primary mb-4">Producto No Encontrado</h1>
        <p className="text-muted-foreground mb-6">El producto que busca no existe.</p>
        <Button asChild>
          <Link href="/store">Volver a la Tienda</Link>
        </Button>
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-accent">
            Inicio
          </Link>
          {" / "}
          <Link href="/store" className="hover:text-accent">
            Tienda
          </Link>
          {" / "}
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div>
            <div className="relative h-[500px] bg-muted rounded-lg overflow-hidden mb-4">
              <Image
                src={product.images[currentImageIndex] || "/placeholder.svg?height=500&width=500"}
                alt={product.name}
                fill
                className="object-cover"
              />
              {product.images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative h-20 w-20 flex-shrink-0 rounded-md overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex ? "border-accent" : "border-transparent"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg?height=80&width=80"}
                      alt={`${product.name} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">{product.name}</h1>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-secondary/20 text-secondary-foreground text-sm rounded-full">
                {product.category}
              </span>
            </div>

            {product.shortDescription && (
              <p className="text-lg text-muted-foreground mb-6">{product.shortDescription}</p>
            )}

            <div className="bg-secondary/20 p-4 rounded-lg mb-6">
              <p className="text-sm text-muted-foreground">
                Los productos no muestran precio. Agregue al carrito para solicitar una cotización. Nuestro equipo de
                ventas lo contactará con asistencia personalizada y precios.
              </p>
            </div>

            <Button size="lg" onClick={() => addToCart(product)} className="w-full md:w-auto">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Agregar al Carrito
            </Button>

            {/* Additional Information */}
            <div className="mt-8 space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Descripción</h3>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>

              {product.product_related && product.product_related.length > 0 && (
                <div>
                  <h3 className="font-semibold text-lg mb-2">Palabras Clave</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.product_related.map((keyword, index) => (
                      <span key={index} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">Productos Relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
