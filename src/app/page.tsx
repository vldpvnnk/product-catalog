import { getProducts } from "@/lib/products"
import { ProductGrid } from "@/components/ProductGrid"

export default async function Home() {
  const initialProducts = await getProducts(1)

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Product Catalog
          </h1>
          <p className="text-lg text-gray-600">
            Discover our amazing collection of products
          </p>
        </div>

        <ProductGrid initialProducts={initialProducts} />
      </div>
    </main>
  )
}
