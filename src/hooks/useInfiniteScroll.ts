"use client"

import { useState, useCallback, useRef } from "react"
import { Product } from "@/types/product"
import { getProducts } from "@/lib/products"

interface UseInfiniteScrollResult {
  products: Product[]
  isLoading: boolean
  hasMore: boolean
  loadMore: () => Promise<void>
}

export const useInfiniteScroll = (
  initialProducts: Product[],
  initialPage: number = 1
): UseInfiniteScrollResult => {
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [currentPage, setCurrentPage] = useState(initialPage)
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const loadingRef = useRef(false)

  const loadMore = useCallback(async () => {
    // Предотвращаем одновременные запросы
    if (loadingRef.current || isLoading) return

    loadingRef.current = true
    setIsLoading(true)

    try {
      const newProducts = await getProducts(currentPage + 1)

      if (newProducts.length === 0) {
        setHasMore(false)
      } else {
        setProducts((prev) => [...prev, ...newProducts])
        setCurrentPage((prev) => prev + 1)
      }
    } catch (error) {
      console.error("Failed to load products:", error)
      setHasMore(false)
    } finally {
      setIsLoading(false)
      loadingRef.current = false
    }
  }, [currentPage, isLoading])

  return {
    products,
    isLoading,
    hasMore,
    loadMore,
  }
}
