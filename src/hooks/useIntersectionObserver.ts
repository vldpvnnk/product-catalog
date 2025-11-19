"use client"

import { useEffect, useRef } from "react"

interface UseIntersectionObserverProps {
  onIntersect: () => void
  threshold?: number
  rootMargin?: string
}

export const useIntersectionObserver = ({
  onIntersect,
  threshold = 0.1,
  rootMargin = "0px",
}: UseIntersectionObserverProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersect()
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [onIntersect, threshold, rootMargin])

  return ref
}
