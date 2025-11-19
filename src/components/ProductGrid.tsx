"use client"

import { Product } from "@/types/product"
import { ProductCard } from "./ProductCard"
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import { useEffect } from "react"

interface ProductGridProps {
  initialProducts: Product[]
}

export const ProductGrid = ({ initialProducts }: ProductGridProps) => {
  const { products, isLoading, hasMore, loadMore } = useInfiniteScroll(
    initialProducts,
    1
  )

  const sentinelRef = useIntersectionObserver({
    onIntersect: () => {
      if (!isLoading && hasMore) {
        loadMore()
      }
    },
    threshold: 0.1,
    rootMargin: "100px",
  })

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Sentinel element for infinite scroll */}
      <div
        ref={sentinelRef}
        className="flex justify-center mt-12 py-8"
      >
        {hasMore && (
          <div className="text-center">
            {isLoading && (
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                <span className="text-gray-600">Loading more products...</span>
              </div>
            )}
          </div>
        )}
      </div>

      {!hasMore && products.length > 0 && (
        <div className="text-center mt-12 text-gray-500">
          <p>No more products to load</p>
        </div>
      )}
    </div>
  )
}
