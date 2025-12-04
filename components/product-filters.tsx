"use client"

import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

interface ProductFiltersProps {
  selectedCategory: string
  selectedSubcategory: string
  selectedBrand: string
  selectedLine: string
  selectedMaterial: string
  selectedProductType: string
  availableSubcategories: string[]
  availableBrands: string[]
  availableLines: string[]
  availableMaterials: string[]
  availableProductTypes: string[]
  onCategoryChange: (category: string) => void
  onSubcategoryChange: (subcategory: string) => void
  onBrandChange: (brand: string) => void
  onLineChange: (line: string) => void
  onMaterialChange: (material: string) => void
  onProductTypeChange: (type: string) => void
  showFilters: boolean
  setShowFilters: (show: boolean) => void
}

const categories = [
  { value: "Para Industrias", label: "Para Industrias" },
  { value: "Para Comercios", label: "Para Comercios" },
]

export function ProductFilters({
  selectedCategory,
  selectedSubcategory,
  selectedBrand,
  selectedLine,
  selectedMaterial,
  selectedProductType,
  availableSubcategories,
  availableBrands,
  availableLines,
  availableMaterials,
  availableProductTypes,
  onCategoryChange,
  onSubcategoryChange,
  onBrandChange,
  onLineChange,
  onMaterialChange,
  onProductTypeChange,
  showFilters,
  setShowFilters,
}: ProductFiltersProps) {
  const activeFiltersCount =
    (selectedCategory ? 1 : 0) +
    (selectedSubcategory ? 1 : 0) +
    (selectedBrand ? 1 : 0) +
    (selectedLine ? 1 : 0) +
    (selectedMaterial ? 1 : 0) +
    (selectedProductType ? 1 : 0)

  const clearAllFilters = () => {
    onCategoryChange("")
    onSubcategoryChange("")
    onBrandChange("")
    onLineChange("")
    onMaterialChange("")
    onProductTypeChange("")
  }

  const FilterContent = () => (
    <div className="space-y-6">
      {activeFiltersCount > 0 && (
        <div className="pb-4 border-b">
          <Button variant="outline" size="sm" onClick={clearAllFilters} className="w-full bg-transparent">
            Limpiar todos los filtros ({activeFiltersCount})
          </Button>
        </div>
      )}

      {/* Category Filter */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-sm text-foreground">Categoría</h3>
          {selectedCategory && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                onCategoryChange("")
                onSubcategoryChange("")
              }}
              className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground"
            >
              Limpiar
            </Button>
          )}
        </div>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => {
                onCategoryChange(selectedCategory === category.value ? "" : category.value)
                if (selectedCategory !== category.value) {
                  onSubcategoryChange("")
                }
              }}
              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                selectedCategory === category.value ? "bg-accent text-accent-foreground" : "hover:bg-muted"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Subcategory Filter */}
      {availableSubcategories.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-sm text-foreground">Subcategoría</h3>
            {selectedSubcategory && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onSubcategoryChange("")}
                className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground"
              >
                Limpiar
              </Button>
            )}
          </div>
          <div className="space-y-2">
            {availableSubcategories.map((subcat) => (
              <button
                key={subcat}
                onClick={() => onSubcategoryChange(selectedSubcategory === subcat ? "" : subcat)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  selectedSubcategory === subcat ? "bg-accent text-accent-foreground" : "hover:bg-muted"
                }`}
              >
                {subcat}
              </button>
            ))}
          </div>
        </div>
      )}

      {availableBrands.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-sm text-foreground">Marca</h3>
            {selectedBrand && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  onBrandChange("")
                  onLineChange("")
                }}
                className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground"
              >
                Limpiar
              </Button>
            )}
          </div>
          <div className="space-y-2">
            {availableBrands.map((brand) => (
              <button
                key={brand}
                onClick={() => {
                  onBrandChange(selectedBrand === brand ? "" : brand)
                  if (selectedBrand !== brand) {
                    onLineChange("")
                  }
                }}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  selectedBrand === brand ? "bg-accent text-accent-foreground" : "hover:bg-muted"
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>
      )}

      {availableLines.length > 0 && selectedBrand && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-sm text-foreground">Línea de Producto</h3>
            {selectedLine && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onLineChange("")}
                className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground"
              >
                Limpiar
              </Button>
            )}
          </div>
          <div className="space-y-2">
            {availableLines.map((line) => (
              <button
                key={line}
                onClick={() => onLineChange(selectedLine === line ? "" : line)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  selectedLine === line ? "bg-accent text-accent-foreground" : "hover:bg-muted"
                }`}
              >
                {line}
              </button>
            ))}
          </div>
        </div>
      )}

      {availableMaterials.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-sm text-foreground">Material</h3>
            {selectedMaterial && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onMaterialChange("")}
                className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground"
              >
                Limpiar
              </Button>
            )}
          </div>
          <div className="space-y-2">
            {availableMaterials.map((material) => (
              <button
                key={material}
                onClick={() => onMaterialChange(selectedMaterial === material ? "" : material)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors capitalize ${
                  selectedMaterial === material ? "bg-accent text-accent-foreground" : "hover:bg-muted"
                }`}
              >
                {material}
              </button>
            ))}
          </div>
        </div>
      )}

      {availableProductTypes.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-sm text-foreground">Tipo de Producto</h3>
            {selectedProductType && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onProductTypeChange("")}
                className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground"
              >
                Limpiar
              </Button>
            )}
          </div>
          <div className="space-y-2">
            {availableProductTypes.map((type) => (
              <button
                key={type}
                onClick={() => onProductTypeChange(selectedProductType === type ? "" : type)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors capitalize ${
                  selectedProductType === type ? "bg-accent text-accent-foreground" : "hover:bg-muted"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-4">
        <Sheet open={showFilters} onOpenChange={setShowFilters}>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full bg-transparent">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
              {activeFiltersCount > 0 && (
                <span className="ml-2 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Filtros</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Filters */}
      <div className="hidden lg:block bg-card border rounded-lg p-6">
        <h2 className="font-bold text-lg mb-6">Filtros</h2>
        <FilterContent />
      </div>
    </>
  )
}
