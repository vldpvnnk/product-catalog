import { Product } from "@/types/product"

const mockProducts: Product[] = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    description: "High-quality wireless headphones with noise cancellation",
    category: "Electronics",
    rating: 4.5,
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    description: "Latest smartwatch with fitness tracking",
    category: "Electronics",
    rating: 4.8,
  },
  {
    id: 3,
    title: "Portable Speaker",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
    description: "Compact and powerful portable Bluetooth speaker",
    category: "Audio",
    rating: 4.3,
  },
  {
    id: 4,
    title: "USB-C Cable",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&q=80",
    description: "Durable 2-meter USB-C charging cable",
    category: "Accessories",
    rating: 4.6,
  },
  {
    id: 5,
    title: "Laptop Stand",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80",
    description: "Adjustable aluminum laptop stand for better ergonomics",
    category: "Accessories",
    rating: 4.7,
  },
  {
    id: 6,
    title: "Wireless Mouse",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80",
    description: "Ergonomic wireless mouse with precision tracking",
    category: "Accessories",
    rating: 4.4,
  },
  {
    id: 7,
    title: "Phone Case",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80",
    description: "Protective phone case with anti-shock design",
    category: "Accessories",
    rating: 4.2,
  },
  {
    id: 8,
    title: "Power Bank",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=80",
    description: "20000mAh power bank with fast charging",
    category: "Electronics",
    rating: 4.9,
  },
  {
    id: 9,
    title: "Screen Protector",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=80",
    description: "Tempered glass screen protector",
    category: "Accessories",
    rating: 4.1,
  },
  {
    id: 10,
    title: "Webcam HD",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&q=80",
    description: "1080p HD webcam with auto-focus",
    category: "Electronics",
    rating: 4.5,
  },
  {
    id: 11,
    title: "Desk Lamp",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=80",
    description: "LED desk lamp with adjustable brightness",
    category: "Lighting",
    rating: 4.6,
  },
  {
    id: 12,
    title: "Keyboard",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=80",
    description: "Mechanical gaming keyboard with RGB lighting",
    category: "Electronics",
    rating: 4.8,
  },
]

export async function getProducts(
  page: number,
  pageSize: number = 12
): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 500))

  const start = (page - 1) * pageSize
  const end = start + pageSize

  const products = mockProducts.concat(
    mockProducts.map((p) => ({
      ...p,
      id: p.id + 12,
    })),
    mockProducts.map((p) => ({
      ...p,
      id: p.id + 24,
    })),
    mockProducts.map((p) => ({
      ...p,
      id: p.id + 36,
    }))
  )

  return products.slice(start, end)
}
