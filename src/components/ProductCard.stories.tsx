import type { Meta, StoryObj } from "@storybook/react"
import { ProductCard } from "./ProductCard"
import { Product } from "@/types/product"

/**
 * ProductCard компонент отображает карточку товара с изображением,
 * названием, описанием, рейтингом и ценой.
 * 
 * ## Особенности:
 * - Адаптивный дизайн с CSS Grid
 * - Hover эффекты на изображении
 * - Визуализация рейтинга со звездочками
 * - Категория товара в виде бейджа
 * - Кнопка добавления в корзину
 * 
 * ## Props:
 * - `product` - объект товара с интерфейсом Product
 */
const meta = {
  title: "Components/ProductCard",
  component: ProductCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Компонент для отображения отдельной карточки товара в каталоге.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProductCard>

export default meta
type Story = StoryObj<typeof meta>

const mockProduct: Product = {
  id: 1,
  title: "Wireless Headphones",
  price: 99.99,
  image:
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
  description: "High-quality wireless headphones with noise cancellation",
  category: "Electronics",
  rating: 4.5,
}

/**
 * История по умолчанию. Показывает стандартную карточку товара
 * с рейтингом среднего уровня (4.5 звезды).
 */
export const Default: Story = {
  args: {
    product: mockProduct,
  },
}

/**
 * История с высоким рейтингом (4.9 из 5 звезд).
 * Демонстрирует внешний вид карточки для популярного товара.
 */
export const HighRating: Story = {
  args: {
    product: {
      ...mockProduct,
      rating: 4.9,
    },
  },
}

/**
 * История с низким рейтингом (3.2 из 5 звезд).
 * Показывает внешний вид карточки товара с меньшей популярностью.
 */
export const LowRating: Story = {
  args: {
    product: {
      ...mockProduct,
      rating: 3.2,
    },
  },
}

/**
 * История с премиум товаром. Демонстрирует карточку с более высокой ценой
 * и отличным рейтингом.
 */
export const DifferentPrice: Story = {
  args: {
    product: {
      ...mockProduct,
      title: "Premium Gaming Headphones",
      price: 249.99,
      rating: 4.8,
    },
  },
}
