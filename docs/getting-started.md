# Getting Started

This guide will help you install and set up @pelatform/icons in your React project.

## 📦 Installation

### Using pnpm (Recommended)

```bash
pnpm add @pelatform/icons
```

### Using npm

```bash
npm install @pelatform/icons
```

### Using yarn

```bash
yarn add @pelatform/icons
```

### Using bun

```bash
bun add @pelatform/icons
```

## 🔧 Setup

### TypeScript Configuration

If you're using TypeScript, make sure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler", // or "node"
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "jsx": "react-jsx"
  }
}
```

### Bundler Configuration

The package works out of the box with modern bundlers:

- ✅ **Vite** - No configuration needed
- ✅ **Next.js** - No configuration needed
- ✅ **Create React App** - No configuration needed
- ✅ **Webpack** - No configuration needed
- ✅ **Rollup** - No configuration needed
- ✅ **Bun** - No configuration needed

## 🎯 First Usage

### 1. Basic Import and Usage

```tsx
import React from 'react';
import { IconHeart, IconStar, IconArrowRight } from '@pelatform/icons';

function MyComponent() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <IconHeart className="text-red-500 w-6 h-6" />
      <IconStar className="text-yellow-500 w-6 h-6" />
      <IconArrowRight className="text-blue-500 w-6 h-6" />
    </div>
  );
}

export default MyComponent;
```

### 2. With Styling

```tsx
import { IconUser, IconSettings } from '@pelatform/icons';

function Navigation() {
  return (
    <nav className="flex space-x-4">
      <button className="flex items-center space-x-2">
        <IconUser style={{ width: 20, height: 20 }} />
        <span>Profile</span>
      </button>
      <button className="flex items-center space-x-2">
        <IconSettings style={{ width: 20, height: 20 }} />
        <span>Settings</span>
      </button>
    </nav>
  );
}
```

### 3. With Props

All icons accept standard SVG props:

```tsx
import { IconAlert } from '@pelatform/icons';

function Alert({ message }: { message: string }) {
  return (
    <div className="alert">
      <IconAlert
        width={24}
        height={24}
        color="red"
        className="alert-icon"
        data-testid="alert-icon"
      />
      <span>{message}</span>
    </div>
  );
}
```

## 🔍 Finding Icons

### 1. IntelliSense (Recommended)

With TypeScript, you get full IntelliSense support:

```tsx
import { Icon... } from '@pelatform/icons';
//              ^ Type "Icon" and see all available icons
```

### 2. Icon List

Get all available icon names:

```tsx
import iconList from '@pelatform/icons/icon-list';

console.log(iconList); // Array of 5000+ icon names
console.log(`Total icons: ${iconList.length}`);
```

### 3. Categories

Get all available categories:

```tsx
import { categories, type Category } from '@pelatform/icons/categories';

console.log(categories); // Array of 42 categories

// Example: Create category filter dropdown
categories.map((category: Category) => (
  <option key={category.id} value={category.id}>
    {category.title}
  </option>
));
```

### 4. Icons by Category

Get icons filtered by category:

```tsx
import iconsByCategory from '@pelatform/icons/icons-by-category';

// Get all icons in a specific category
const animalsIcons = iconsByCategory['animals'];
console.log(animalsIcons); // ['cat', 'dog', 'bird', ...]

// Example: Filter icons by category
const getCategoryIcons = (categoryId: string) => {
  return iconsByCategory[categoryId] || [];
};
```

## ⚡ Performance Tips

### 1. Tree Shaking

Only import icons you actually use:

```tsx
// ✅ Good - Only imports specific icons
import { IconHeart, IconStar } from '@pelatform/icons';

// ❌ Avoid - Imports entire library
import * as Icons from '@pelatform/icons';
```

### 2. Code Splitting

For large applications, consider dynamic imports:

```tsx
import { lazy, Suspense } from 'react';

const IconHeart = lazy(() =>
  import('@pelatform/icons').then((module) => ({
    default: module.IconHeart,
  })),
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <IconHeart />
    </Suspense>
  );
}
```

### 3. Dynamic Loading

Load icons on-demand using the dynamic import map:

```tsx
import iconMap from '@pelatform/icons/dynamic-imports';

async function loadIcon(iconName: string) {
  const iconModule = await iconMap[iconName]();
  return iconModule.default;
}

// Usage
const IconHeart = await loadIcon('heart');
```

## 🎨 Styling

### CSS Classes

```css
.icon {
  width: 1.5rem;
  height: 1.5rem;
  color: currentColor;
}

.icon-large {
  width: 2rem;
  height: 2rem;
}

.icon-red {
  color: #ef4444;
}
```

```tsx
import { IconHeart } from '@pelatform/icons';

<IconHeart className="icon icon-large icon-red" />;
```

### Inline Styles

```tsx
import { IconStar } from '@pelatform/icons';

<IconStar
  style={{
    width: 24,
    height: 24,
    color: '#fbbf24',
    cursor: 'pointer',
  }}
/>;
```

### CSS-in-JS

```tsx
import styled from 'styled-components';
import { IconArrowRight } from '@pelatform/icons';

const StyledIcon = styled(IconArrowRight)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${(props) => props.theme.primary};
  transition: color 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.primaryHover};
  }
`;
```

### Tailwind CSS

```tsx
import { IconHeart } from '@pelatform/icons';

// Size classes
<IconHeart className="size-4" />      // 16px
<IconHeart className="size-6" />      // 24px
<IconHeart className="size-8" />      // 32px

// Color classes
<IconHeart className="text-red-500" />
<IconHeart className="text-blue-600" />

// Combined
<IconHeart className="size-6 text-red-500 hover:text-red-600" />
```

## 🚀 Next Steps

- [Learn about basic usage patterns](./basic-usage.md)
- [Explore advanced features](./advanced-usage.md)
- [Check out examples](./examples.md)
- [Learn about categories](./categories.md)
