"use client"

import type { Product } from "@/lib/types"
import { useCart } from "@/contexts/cart-context"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()

  return (
    <div className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
      <Link href={`/products/${product.slug}`}>
        <div className="relative h-64 bg-muted overflow-hidden">
          <Image
            src={product.images[0] || "/placeholder.svg?height=300&width=300"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-accent transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.shortDescription || product.description}
        </p>
        <div className="flex gap-2">
          <Button onClick={() => addToCart(product)} className="flex-1" size="sm">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Agregar al Carrito
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href={`/products/${product.slug}`}>Detalles</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
