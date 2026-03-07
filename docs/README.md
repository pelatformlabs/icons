# @pelatform/icons Documentation

A comprehensive React icon library with 5000+ icons, built with TypeScript and optimized for performance.

## 📚 Documentation Index

- [Installation & Getting Started](./getting-started.md)
- [Basic Usage](./basic-usage.md)
- [Advanced Usage](./advanced-usage.md)
- [Types & TypeScript](./types.md)
- [Categories](./categories.md)
- [Dynamic Imports](./dynamic-imports.md)
- [Icons by Category](./icons-by-category.md)
- [API Reference](./api-reference.md)
- [Examples](./examples.md)

## 🚀 Quick Start

```bash
# Install the package
pnpm add @pelatform/icons

# Import and use icons
import { IconHeart, IconStar } from '@pelatform/icons';

function App() {
  return (
    <div>
      <IconHeart className="text-red-500" />
      <IconStar className="text-yellow-500" />
    </div>
  );
}
```

## 📦 Package Features

- ✅ **5000+ Icons** - Comprehensive icon collection
- ✅ **42 Categories** - Organized by category (Animals, Arrows, Brand, etc.)
- ✅ **TypeScript Support** - Full type safety and IntelliSense with JSDoc
- ✅ **Tree Shaking** - Import only what you need
- ✅ **Multiple Formats** - ESM, CJS, UMD support
- ✅ **Aliases** - Alternative names for backward compatibility (exported from main entry)
- ✅ **Dynamic Loading** - Load icons dynamically by name
- ✅ **Optimized Bundle** - Minified and gzipped (~434KB for all icons)
- ✅ **React 18 & 19 Compatible** - Latest React support

## 🎯 Use Cases

### 1. Direct Import (Recommended)

```tsx
import { IconArrowRight, IconUser } from '@pelatform/icons';
```

### 2. Dynamic Loading

```tsx
import iconMap from '@pelatform/icons/dynamic-imports';

const IconComponent = await iconMap['arrow-right']();
```

### 3. Icon List

```tsx
import iconList from '@pelatform/icons/icon-list';
// Get all available icon names (5000+ icons)
```

### 4. Categories

```tsx
import { categories } from '@pelatform/icons/categories';
// Get all available categories (42 categories)
```

### 5. Icons by Category

```tsx
import iconsByCategory from '@pelatform/icons/icons-by-category';
// Get icons in a specific category
const animalsIcons = iconsByCategory['animals']; // ['cat', 'dog', ...]
```

## 📖 Next Steps

1. [Read the Getting Started guide](./getting-started.md)
2. [Explore usage examples](./examples.md)
3. [Check the API reference](./api-reference.md)

## 🔗 Links

- [GitHub Repository](https://github.com/pelatformlabs/icons)
- [NPM Package](https://www.npmjs.com/package/@pelatform/icons)
