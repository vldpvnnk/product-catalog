# Product Catalog

A modern Next.js application showcasing a product catalog with infinite scroll functionality, built with TypeScript, React, Tailwind CSS, and documented with Storybook.

## Features

- **Product Catalog Grid**: Responsive grid layout displaying products with images, descriptions, and pricing
- **Infinite Scroll**: Automatic loading of more products as you scroll down the page
- **Product Cards**: Beautiful, interactive product cards with ratings and quick purchase action
- **TypeScript**: Full type safety across the application
- **Storybook Documentation**: Interactive component documentation and testing
- **Responsive Design**: Mobile-first design that works on all screen sizes
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Component Documentation**: Storybook 7
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd product-catalog
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Build

Create a production build:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

### Storybook

View and interact with components in Storybook:
```bash
npm run storybook
```

Storybook will be available at `http://localhost:6006`

Build Storybook for production:
```bash
npm run build-storybook
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Home page with catalog
│   └── globals.css         # Global styles
├── components/
│   ├── ProductCard.tsx     # Product card component
│   ├── ProductCard.stories.tsx
│   ├── ProductGrid.tsx     # Product grid component
│   └── ProductGrid.stories.tsx
├── hooks/
│   ├── useInfiniteScroll.ts    # Infinite scroll logic
│   └── useIntersectionObserver.ts
├── lib/
│   └── products.ts         # Product data and API functions
├── types/
│   └── product.ts          # Product type definitions
└── .storybook/
    ├── main.ts             # Storybook configuration
    └── preview.ts          # Storybook preview settings
```

## Components

### ProductCard

Displays individual product information including:
- Product image with hover effect
- Category badge
- Title and description
- Star rating
- Price and "Add to Cart" button

**Props:**
```typescript
interface ProductCardProps {
  product: Product
}
```

### ProductGrid

Renders a responsive grid of product cards with infinite scroll support.

**Props:**
```typescript
interface ProductGridProps {
  initialProducts: Product[]
}
```

## Types

### Product

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

## Hooks

### useInfiniteScroll

Manages infinite scroll functionality with automatic product loading.

```typescript
const { products, isLoading, hasMore, loadMore } = useInfiniteScroll(
  initialProducts,
  initialPage
)
```

### useIntersectionObserver

Low-level hook for detecting when an element enters the viewport.

## API

The application uses mock data stored in `/src/lib/products.ts`. To integrate with a real API:

1. Modify the `getProducts()` function in `src/lib/products.ts`
2. Update the function to fetch from your API endpoint
3. Ensure the response matches the `Product` interface

## Styling

The project uses Tailwind CSS utility classes for styling. Custom configurations can be found in `tailwind.config.ts`.

### Color Scheme

- Primary: Blue (#2563eb)
- Background: Gray (#f9fafb)
- Text: Dark Gray (#111827)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Run production server
- `npm run lint` - Run ESLint
- `npm run storybook` - Start Storybook dev server
- `npm run build-storybook` - Build Storybook

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Images are optimized and lazy-loaded
- Products load in batches to improve performance
- CSS is tree-shaken and optimized by Tailwind
- JavaScript is minified and split into chunks

## Future Enhancements

- Add product filtering and search
- Implement shopping cart functionality
- Add product detail pages
- Integration with real e-commerce API
- User authentication and wishlist
- Product reviews and comments
- Admin dashboard for product management

## License

MIT

## Support

For issues or questions, please create an issue in the repository.
