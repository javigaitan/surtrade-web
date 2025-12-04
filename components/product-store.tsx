"use client"

import { useEffect, useState, useMemo } from "react"
import { getAllProducts } from "@/lib/products"
import type { Product } from "@/lib/types"
import { ProductCard } from "@/components/product-card"
import { ProductFilters } from "@/components/product-filters"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useSearchParams } from "next/navigation"

export function ProductStore() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("")
  const [selectedBrand, setSelectedBrand] = useState<string>("")
  const [selectedLine, setSelectedLine] = useState<string>("")
  const [selectedMaterial, setSelectedMaterial] = useState<string>("")
  const [selectedProductType, setSelectedProductType] = useState<string>("")
  const [showFilters, setShowFilters] = useState(false)

  const searchParams = useSearchParams()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productData = await getAllProducts()
        setProducts(productData)

        const categoryParam = searchParams.get("category")
        const subcategoryParam = searchParams.get("subcategory")
        const brandParam = searchParams.get("brand")
        const lineParam = searchParams.get("line")
        const materialParam = searchParams.get("material")
        const typeParam = searchParams.get("type")
        const searchParam = searchParams.get("search")

        if (categoryParam) setSelectedCategory(categoryParam)
        if (subcategoryParam) setSelectedSubcategory(subcategoryParam)
        if (brandParam) setSelectedBrand(brandParam)
        if (lineParam) setSelectedLine(lineParam)
        if (materialParam) setSelectedMaterial(materialParam)
        if (typeParam) setSelectedProductType(typeParam)

        if (searchParam === "true") {
          setTimeout(() => {
            document.getElementById("product-search")?.focus()
          }, 100)
        }
      } catch (error) {
        console.error("[v0] Error fetching products:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [searchParams])

  const extractMaterial = (product: Product): string => {
    const text = `${product.name} ${product.description} ${product.category}`.toLowerCase()
    if (text.includes("aluminio")) return "Aluminio"
    if (text.includes("vidrio")) return "Vidrio"
    if (text.includes("doypack") || text.includes("flexible")) return "Flexible"
    if (text.includes("acero")) return "Acero"
    if (text.includes("plastico") || text.includes("plástico")) return "Plástico"
    return ""
  }

  const extractProductType = (product: Product): string => {
    const text = `${product.name} ${product.category}`.toLowerCase()
    if (text.includes("máquina") || text.includes("maquina")) return "Máquinas"
    if (text.includes("envase") || text.includes("pote") || text.includes("botella") || text.includes("doypack"))
      return "Envases"
    if (text.includes("carpa") || text.includes("kayak") || text.includes("paddle") || text.includes("outdoor"))
      return "Outdoor"
    if (text.includes("termo") || text.includes("vaso") || text.includes("taza")) return "Térmicos"
    if (text.includes("bolso") || text.includes("mochila")) return "Bolsos"
    if (text.includes("sillon") || text.includes("sillón") || text.includes("funda")) return "Muebles"
    if (text.includes("aromatizador") || text.includes("difusor")) return "Wellness"
    return ""
  }

  const extractBrand = (product: Product): string => {
    if (product.category.includes("HANA")) return "HANA"
    return ""
  }

  const extractLine = (product: Product): string => {
    if (product.category.includes("Outdoor")) return "Outdoor"
    if (product.category.includes("Wellness")) return "Wellness"
    if (product.category.includes("Home")) return "Home"
    if (product.category.includes("Pack")) return "Pack"
    return ""
  }

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (selectedCategory && !product.category.includes(selectedCategory)) {
        return false
      }

      if (selectedSubcategory && !product.category.includes(selectedSubcategory)) {
        return false
      }

      if (selectedBrand) {
        const productBrand = extractBrand(product)
        if (productBrand !== selectedBrand) return false
      }

      if (selectedLine) {
        const productLine = extractLine(product)
        if (productLine !== selectedLine) return false
      }

      if (selectedMaterial) {
        const productMaterial = extractMaterial(product)
        if (productMaterial !== selectedMaterial) return false
      }

      if (selectedProductType) {
        const productType = extractProductType(product)
        if (productType !== selectedProductType) return false
      }

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase()
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
  }, [
    products,
    selectedCategory,
    selectedSubcategory,
    selectedBrand,
    selectedLine,
    selectedMaterial,
    selectedProductType,
    searchQuery,
  ])

  const availableSubcategories = useMemo(() => {
    if (!selectedCategory) return []

    const subcats = new Set<string>()
    products
      .filter((p) => p.category.includes(selectedCategory))
      .forEach((p) => {
        const parts = p.category.split(" > ")
        if (parts.length >= 2) {
          subcats.add(parts[1])
        }
      })

    return Array.from(subcats).sort()
  }, [products, selectedCategory])

  const availableBrands = useMemo(() => {
    const brands = new Set<string>()
    products.forEach((p) => {
      const brand = extractBrand(p)
      if (brand) brands.add(brand)
    })
    return Array.from(brands).sort()
  }, [products])

  const availableLines = useMemo(() => {
    if (!selectedBrand) return []

    const lines = new Set<string>()
    products
      .filter((p) => extractBrand(p) === selectedBrand)
      .forEach((p) => {
        const line = extractLine(p)
        if (line) lines.add(line)
      })

    return Array.from(lines).sort()
  }, [products, selectedBrand])

  const availableMaterials = useMemo(() => {
    const materials = new Set<string>()
    products.forEach((p) => {
      const material = extractMaterial(p)
      if (material) materials.add(material)
    })
    return Array.from(materials).sort()
  }, [products])

  const availableProductTypes = useMemo(() => {
    const types = new Set<string>()
    products.forEach((p) => {
      const type = extractProductType(p)
      if (type) types.add(type)
    })
    return Array.from(types).sort()
  }, [products])

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Tienda de Productos</h1>
          <div className="bg-secondary/20 p-4 rounded-lg mb-6">
            <p className="text-sm text-muted-foreground">
              Los productos no muestran precio. Agregue artículos para solicitar una cotización. Nuestro equipo de
              ventas lo contactará con asistencia personalizada y precios.
            </p>
          </div>

          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              id="product-search"
              type="text"
              placeholder="Buscar productos por nombre, descripción o palabras clave..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0">
            <ProductFilters
              selectedCategory={selectedCategory}
              selectedSubcategory={selectedSubcategory}
              selectedBrand={selectedBrand}
              selectedLine={selectedLine}
              selectedMaterial={selectedMaterial}
              selectedProductType={selectedProductType}
              availableSubcategories={availableSubcategories}
              availableBrands={availableBrands}
              availableLines={availableLines}
              availableMaterials={availableMaterials}
              availableProductTypes={availableProductTypes}
              onCategoryChange={setSelectedCategory}
              onSubcategoryChange={setSelectedSubcategory}
              onBrandChange={setSelectedBrand}
              onLineChange={setSelectedLine}
              onMaterialChange={setSelectedMaterial}
              onProductTypeChange={setSelectedProductType}
              showFilters={showFilters}
              setShowFilters={setShowFilters}
            />
          </aside>

          <div className="flex-1">
            {loading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Cargando productos...</p>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg mb-2">No se encontraron productos</p>
                <p className="text-sm text-muted-foreground">Intente ajustar sus filtros o búsqueda</p>
              </div>
            ) : (
              <>
                <div className="mb-4 text-sm text-muted-foreground">
                  Mostrando {filteredProducts.length} {filteredProducts.length === 1 ? "producto" : "productos"}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
