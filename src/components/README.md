# Components Documentation

## Overview

This directory contains all React components used in the Product Catalog application. Each component is fully typed with TypeScript and documented with Storybook.

## Components

### ProductCard

**Location:** `ProductCard.tsx`

**Description:** 
Displays a single product card with image, title, description, category, rating, and price.

**Props:**
```typescript
interface ProductCardProps {
  product: Product
}
```

**Features:**
- Product image with hover zoom effect
- Category badge
- Title and description with text clamping
- 5-star rating visualization
- Price display
- "Add to Cart" button with hover effects
- Responsive design with shadow effects

**Storybook Stories:**
- **Default** - Standard product card with medium rating (4.5★)
- **HighRating** - Product with excellent rating (4.9★)
- **LowRating** - Product with lower rating (3.2★)
- **DifferentPrice** - Premium product with higher price (249.99$)

**Usage Example:**
```tsx
import { ProductCard } from "@/components/ProductCard"
import { Product } from "@/types/product"

const product: Product = {
  id: 1,
  title: "Wireless Headphones",
  price: 99.99,
  image: "https://example.com/image.jpg",
  description: "High-quality wireless headphones",
  category: "Electronics",
  rating: 4.5
}

export function MyComponent() {
  return <ProductCard product={product} />
}
```

### ProductGrid

**Location:** `ProductGrid.tsx`

**Description:**
Renders a responsive grid of product cards with infinite scroll functionality. Automatically loads more products as the user scrolls down.

**Props:**
```typescript
interface ProductGridProps {
  initialProducts: Product[]
}
```

**Features:**
- Responsive grid layout (1-4 columns based on screen size)
- Infinite scroll with Intersection Observer API
- Automatic loading of new products
- Loading indicator during fetch
- "No more products" message when all items are loaded
- Mobile-first responsive design

**Responsive Breakpoints:**
- `sm` (640px) - 2 columns
- `lg` (1024px) - 3 columns
- `xl` (1280px) - 4 columns

**Storybook Stories:**
- **Default** - Standard grid with 8 products
- **SingleProduct** - Grid with single product
- **ManyProducts** - Grid with 24 products

**Usage Example:**
```tsx
import { ProductGrid } from "@/components/ProductGrid"
import { getProducts } from "@/lib/products"

export default async function CatalogPage() {
  const initialProducts = await getProducts(1)
  
  return <ProductGrid initialProducts={initialProducts} />
}
```

## How Infinite Scroll Works

The ProductGrid uses a combination of hooks to implement infinite scroll:

1. **useInfiniteScroll** - Manages product loading state and pagination
2. **useIntersectionObserver** - Detects when a sentinel element enters the viewport

### Flow:
```
1. User loads page → displays initial batch of 12 products
2. User scrolls down
3. Sentinel element becomes visible (with 100px margin)
4. Intersection Observer triggers → loadMore callback
5. New batch of 12 products is fetched
6. Products are added to the grid
7. Process repeats until no more products available
```

## Styling

All components use **Tailwind CSS** utility classes. Key color scheme:

- **Primary**: Blue (#2563eb)
- **Background**: Light gray (#f9fafb)
- **Text**: Dark gray (#111827)
- **Borders**: Light gray (#e5e7eb)
- **Hover**: Darker blue (#1d4ed8)

## TypeScript Types

All components use proper TypeScript interfaces. Main types are defined in `src/types/product.ts`:

```typescript
interface Product {
  id: number
  title: string
  price: number
  image: string
  description: string
  category: string
  rating: number
}
```

## Accessing Storybook

To view components in Storybook:

```bash
npm run storybook
```

Then open: http://localhost:6006

### Navigation in Storybook:
- **Components** > **ProductCard** - View card component stories
- **Components** > **ProductGrid** - View grid component stories

Each component has:
- Multiple stories showing different states
- Fully-documented props
- Automatic generated documentation from TypeScript types
- Interactive props editor for testing

## Performance Considerations

- **ProductCard**: Simple, stateless component - no performance issues
- **ProductGrid**: 
  - Uses React.memo or keys for efficient list rendering
  - Intersection Observer prevents layout thrashing
  - Debounced loading to prevent race conditions
  - Images are lazy-loaded by Next.js

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard accessible buttons
- ARIA labels where necessary

## Future Enhancements

- Add product filters
- Implement wishlist functionality
- Add product detail modal
- Search functionality
- Product comparison
- User reviews display
