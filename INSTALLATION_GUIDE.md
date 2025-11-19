INSTALLATION_GUIDE.md

# Инструкция по установке и запуску

## Системные требования

- Node.js версии 18 или выше
- npm версии 9 или выше
- Git

## Быстрый старт

### 1. Установка зависимостей

```bash
npm install
```

### 2. Запуск в режиме разработки

```bash
npm run dev
```

Приложение будет доступно по адресу: http://localhost:3000

### 3. Просмотр компонентов в Storybook

```bash
npm run storybook
```

Storybook откроется на http://localhost:6006

## Команды разработки

- `npm run dev` - Запуск development сервера
- `npm run build` - Сборка для production
- `npm start` - Запуск production версии
- `npm run lint` - Проверка кода с ESLint
- `npm run storybook` - Запуск Storybook
- `npm run build-storybook` - Сборка Storybook

## Структура проекта

```
product-catalog/
├── .storybook/              # Конфигурация Storybook
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── layout.tsx       # Корневой лейаут
│   │   ├── page.tsx         # Главная страница
│   │   └── globals.css      # Глобальные стили
│   ├── components/          # React компоненты
│   │   ├── ProductCard.tsx
│   │   ├── ProductCard.stories.tsx
│   │   ├── ProductGrid.tsx
│   │   └── ProductGrid.stories.tsx
│   ├── hooks/               # Custom React hooks
│   │   ├── useInfiniteScroll.ts
│   │   └── useIntersectionObserver.ts
│   ├── lib/                 # Утилиты и функции
│   │   └── products.ts      # Работа с данными товаров
│   └── types/               # TypeScript типы
│       └── product.ts
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Основные функции

### ProductCard компонент
Отображает карточку товара с:
- Изображением
- Названием и описанием
- Категорией
- Рейтингом (звездочки)
- Ценой и кнопкой добавления в корзину

### ProductGrid компонент
Отображает сетку товаров с:
- Адаптивным макетом (1-4 столбца в зависимости от размера экрана)
- Кнопкой загрузки дополнительных товаров
- Управлением состоянием загрузки

### Infinite Scroll
- Использует hook useInfiniteScroll для управления загрузкой товаров
- Поддерживает пакетную загрузку товаров
- Отслеживает состояние загрузки и наличие дополнительных товаров

## Использованные технологии

- **Next.js 14** - React фреймворк с SSR
- **TypeScript** - Типизация JavaScript
- **Tailwind CSS** - Утилит-фёрст CSS фреймворк
- **React 18** - Библиотека UI компонентов
- **Lucide React** - Иконки
- **Storybook 7** - Документирование компонентов

## Устранение проблем

### Проблема: Порт 3000 занят
Решение: Используйте другой порт с флагом -p
```bash
npm run dev -- -p 3001
```

### Проблема: Зависимости не установлены
Решение: Очистите кэш и переустановите
```bash
rm -rf node_modules package-lock.json
npm install
```

### Проблема: TypeScript ошибки
Решение: Пересоберите проект
```bash
npm run build
```

## Интеграция с API

Для подключения реального API измените функцию getProducts в файле `src/lib/products.ts`:

```typescript
export async function getProducts(
  page: number,
  pageSize: number = 12
): Promise<Product[]> {
  const response = await fetch(
    `https://your-api.com/products?page=${page}&limit=${pageSize}`
  )
  return response.json()
}
```

## Развертывание

### Развертывание на Vercel (рекомендуется для Next.js)

1. Залейте код на GitHub
2. Подключите репозиторий на vercel.com
3. Vercel автоматически выберет Next.js конфиг и развернет приложение

### Локальное развертывание

```bash
npm run build
npm start
```

Приложение запустится на http://localhost:3000

## Дополнительная документация

- Полная документация в файле README.md
- Компоненты задокументированы в Storybook
- TypeScript типы в папке src/types/
