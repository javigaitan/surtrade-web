export interface Product {
  id: string
  name: string
  description: string
  shortDescription?: string
  category: string
  images: string[]
  stock: boolean
  product_related: string[]
  slug: string
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface QuotationRequest {
  name: string
  phone: string
  email: string
  message: string
  items: CartItem[]
  timestamp: Date
}
