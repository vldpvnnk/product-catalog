import type { Meta, StoryObj } from "@storybook/react"
import { ProductGrid } from "./ProductGrid"
import { Product } from "@/types/product"

/**
 * ProductGrid компонент отображает сетку товаров с поддержкой
 * infinite scroll (автоматическая загрузка при скролле).
 * 
 * ## Особенности:
 * - Адаптивная сетка (1-4 колонки в зависимости от размера экрана)
 * - Автоматическая загрузка товаров при приближении к низу страницы
 * - Использует Intersection Observer API для оптимальной производительности
 * - Предотвращение одновременных запросов
 * - Индикатор загрузки во время подгрузки товаров
 * 
 * ## Props:
 * - `initialProducts` - массив товаров для начальной загрузки
 */
const meta = {
  title: "Components/ProductGrid",
  component: ProductGrid,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Компонент для отображения сетки товаров с функционалом infinite scroll.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProductGrid>

export default meta
type Story = StoryObj<typeof meta>

const mockProducts: Product[] = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    description: "High-quality wireless headphones with noise cancellation",
    category: "Electronics",
    rating: 4.5,
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    description: "Latest smartwatch with fitness tracking",
    category: "Electronics",
    rating: 4.8,
  },
  {
    id: 3,
    title: "Portable Speaker",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
    description: "Compact and powerful portable Bluetooth speaker",
    category: "Audio",
    rating: 4.3,
  },
  {
    id: 4,
    title: "USB-C Cable",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&q=80",
    description: "Durable 2-meter USB-C charging cable",
    category: "Accessories",
    rating: 4.6,
  },
  {
    id: 5,
    title: "Laptop Stand",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80",
    description: "Adjustable aluminum laptop stand for better ergonomics",
    category: "Accessories",
    rating: 4.7,
  },
  {
    id: 6,
    title: "Wireless Mouse",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1586253408846-caa00a4c5352?w=500&q=80",
    description: "Ergonomic wireless mouse with precision tracking",
    category: "Accessories",
    rating: 4.4,
  },
  {
    id: 7,
    title: "Phone Case",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1619287884864-c09d255e3d6a?w=500&q=80",
    description: "Protective phone case with anti-shock design",
    category: "Accessories",
    rating: 4.2,
  },
  {
    id: 8,
    title: "Power Bank",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=80",
    description: "20000mAh power bank with fast charging",
    category: "Electronics",
    rating: 4.9,
  },
]

export const Default: Story = {
  args: {
    initialProducts: mockProducts,
  },
  parameters: {
    docs: {
      description: {
        story: "Стандартная сетка с 8 товарами. Попробуйте скроллить вниз (в Storybook это может быть ограничено).",
      },
    },
  },
}

export const SingleProduct: Story = {
  args: {
    initialProducts: [mockProducts[0]],
  },
  parameters: {
    docs: {
      description: {
        story: "Демонстрация сетки с одним товаром. Полезно для тестирования внешнего вида при минимальном количестве элементов.",
      },
    },
  },
}

export const ManyProducts: Story = {
  args: {
    initialProducts: [...mockProducts, ...mockProducts, ...mockProducts],
  },
  parameters: {
    docs: {
      description: {
        story: "Сетка с 24 товарами. Показывает, как компонент работает с большим количеством элементов и как выглядит пагинация при скролле.",
      },
    },
  },
}
