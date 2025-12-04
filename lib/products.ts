import type { Product } from "./types"

let cachedProducts: Product[] | null = null

export async function getAllProducts(): Promise<Product[]> {
  if (cachedProducts) {
    return cachedProducts
  }

  try {
    const response = await fetch("/data/products.json")
    if (!response.ok) {
      throw new Error("Failed to fetch products")
    }
    const data = await response.json()
    cachedProducts = data.products
    return cachedProducts
  } catch (error) {
    console.error("[v0] Error loading products:", error)
    return []
  }
}

export async function getProductById(id: string): Promise<Product | null> {
  const products = await getAllProducts()
  return products.find((p) => p.id === id) || null
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const products = await getAllProducts()
  return products.find((p) => p.slug === slug) || null
}

export function getRelatedProducts(product: Product, allProducts: Product[], limit = 4): Product[] {
  if (!product.product_related || product.product_related.length === 0) {
    return []
  }

  const relatedProducts = allProducts
    .filter((p) => p.id !== product.id)
    .map((p) => {
      const matchCount = p.product_related?.filter((keyword) => product.product_related?.includes(keyword)).length || 0
      return { product: p, matchCount }
    })
    .filter((item) => item.matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount)
    .slice(0, limit)
    .map((item) => item.product)

  return relatedProducts
}

export function filterProducts(
  products: Product[],
  filters: {
    category?: string
    subcategory?: string
    search?: string
  },
): Product[] {
  return products.filter((product) => {
    if (filters.category && !product.category.includes(filters.category)) {
      return false
    }

    if (filters.subcategory && !product.category.includes(filters.subcategory)) {
      return false
    }

    if (filters.search && filters.search.trim()) {
      const query = filters.search.toLowerCase()
      const searchIn = [
        product.name,
        product.description,
        product.shortDescription || "",
        product.category,
        ...(product.product_related || []),
      ]
        .join(" ")
        .toLowerCase()

      return searchIn.includes(query)
    }

    return true
  })
}
