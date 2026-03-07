# Advanced Usage

Explore advanced patterns and techniques for using @pelatform/icons in complex applications.

## 🔄 Dynamic Icon Loading

### 1. Using the `icons` Object

```tsx
import { icons } from '@pelatform/icons';
import { createElement } from 'react';

function DynamicIcon({
  iconName,
  ...props
}: {
  iconName: string;
  [key: string]: any;
}) {
  if (iconName && iconName in icons) {
    return createElement(icons[iconName as keyof typeof icons], props);
  }
  return null;
}

// Usage
function App() {
  return (
    <div>
      <DynamicIcon iconName="IconHeart" className="w-6 h-6 text-red-500" />
      <DynamicIcon iconName="IconStar" className="w-6 h-6 text-yellow-500" />
      <DynamicIcon iconName="IconUser" className="w-6 h-6 text-blue-500" />
    </div>
  );
}
```

### 2. Icon Loader Function

```tsx
import { icons } from '@pelatform/icons';
import { createElement, ComponentType } from 'react';

type IconProps = {
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
};

export const loadIcon = (iconName: string) => {
  return (props: IconProps) => {
    if (iconName && iconName in icons) {
      return createElement(icons[iconName as keyof typeof icons], props);
    }
    return null;
  };
};

// Usage
const HeartIcon = loadIcon('IconHeart');
const StarIcon = loadIcon('IconStar');

function App() {
  return (
    <div>
      <HeartIcon className="w-6 h-6 text-red-500" />
      <StarIcon className="w-6 h-6 text-yellow-500" />
    </div>
  );
}
```

### 3. Icon Registry Pattern

```tsx
import { icons } from '@pelatform/icons';
import { createElement, ComponentType } from 'react';

class IconRegistry {
  private static instance: IconRegistry;
  private iconMap: Map<string, ComponentType<any>> = new Map();

  static getInstance(): IconRegistry {
    if (!IconRegistry.instance) {
      IconRegistry.instance = new IconRegistry();
    }
    return IconRegistry.instance;
  }

  register(name: string, iconName: keyof typeof icons): void {
    if (iconName in icons) {
      this.iconMap.set(name, icons[iconName]);
    }
  }

  get(name: string): ComponentType<any> | null {
    return this.iconMap.get(name) || null;
  }

  render(name: string, props: any = {}) {
    const IconComponent = this.get(name);
    return IconComponent ? createElement(IconComponent, props) : null;
  }
}

// Setup
const registry = IconRegistry.getInstance();
registry.register('heart', 'IconHeart');
registry.register('star', 'IconStar');
registry.register('user', 'IconUser');

// Usage
function App() {
  return (
    <div>
      {registry.render('heart', { className: 'w-6 h-6 text-red-500' })}
      {registry.render('star', { className: 'w-6 h-6 text-yellow-500' })}
      {registry.render('user', { className: 'w-6 h-6 text-blue-500' })}
    </div>
  );
}
```

## 🎨 Custom Icon Components

### 1. Icon Wrapper Component

```tsx
import { icons } from '@pelatform/icons';
import { createElement, forwardRef } from 'react';

interface IconProps {
  name: keyof typeof icons;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

const sizeMap = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12',
};

const colorMap = {
  primary: 'text-blue-500',
  secondary: 'text-gray-500',
  success: 'text-green-500',
  danger: 'text-red-500',
  warning: 'text-yellow-500',
  info: 'text-cyan-500',
};

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 'md', color, className = '', ...props }, ref) => {
    const sizeClass = sizeMap[size];
    const colorClass = color ? colorMap[color] : '';
    const combinedClassName = `${sizeClass} ${colorClass} ${className}`.trim();

    if (name in icons) {
      return createElement(icons[name], {
        ref,
        className: combinedClassName,
        ...props,
      });
    }

    return null;
  },
);

Icon.displayName = 'Icon';

// Usage
function App() {
  return (
    <div>
      <Icon name="IconHeart" size="lg" color="danger" />
      <Icon name="IconStar" size="md" color="warning" />
      <Icon name="IconUser" size="sm" color="primary" />
    </div>
  );
}
```

### 2. Animated Icon Component

```tsx
import { icons } from '@pelatform/icons';
import { createElement, useState } from 'react';

interface AnimatedIconProps {
  name: keyof typeof icons;
  animation?: 'spin' | 'pulse' | 'bounce' | 'ping';
  duration?: 'slow' | 'normal' | 'fast';
  className?: string;
  [key: string]: any;
}

const animationMap = {
  spin: 'animate-spin',
  pulse: 'animate-pulse',
  bounce: 'animate-bounce',
  ping: 'animate-ping',
};

const durationMap = {
  slow: 'duration-1000',
  normal: 'duration-500',
  fast: 'duration-200',
};

export function AnimatedIcon({
  name,
  animation,
  duration = 'normal',
  className = '',
  ...props
}: AnimatedIconProps) {
  const animationClass = animation ? animationMap[animation] : '';
  const durationClass = durationMap[duration];
  const combinedClassName =
    `${animationClass} ${durationClass} ${className}`.trim();

  if (name in icons) {
    return createElement(icons[name], {
      className: combinedClassName,
      ...props,
    });
  }

  return null;
}

// Usage
function LoadingButton() {
  const [loading, setLoading] = useState(false);

  return (
    <button
      onClick={() => setLoading(!loading)}
      className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded"
    >
      <AnimatedIcon
        name="IconLoader"
        animation={loading ? 'spin' : undefined}
        className="w-4 h-4"
      />
      <span>{loading ? 'Loading...' : 'Click me'}</span>
    </button>
  );
}
```

## 🔧 Performance Optimization

### 1. Lazy Loading Icons

```tsx
import { lazy, Suspense, ComponentType } from 'react';

const createLazyIcon = (iconName: string): ComponentType<any> => {
  return lazy(() =>
    import('@pelatform/icons').then((module) => ({
      default: (module as any)[iconName],
    })),
  );
};

const LazyIconHeart = createLazyIcon('IconHeart');
const LazyIconStar = createLazyIcon('IconStar');

function LazyIconExample() {
  return (
    <div>
      <Suspense
        fallback={<div className="w-6 h-6 bg-gray-200 animate-pulse" />}
      >
        <LazyIconHeart className="w-6 h-6 text-red-500" />
      </Suspense>

      <Suspense
        fallback={<div className="w-6 h-6 bg-gray-200 animate-pulse" />}
      >
        <LazyIconStar className="w-6 h-6 text-yellow-500" />
      </Suspense>
    </div>
  );
}
```

### 2. Icon Preloading

```tsx
import { icons } from '@pelatform/icons';

// Preload commonly used icons
const preloadIcons = (iconNames: (keyof typeof icons)[]) => {
  iconNames.forEach((iconName) => {
    if (iconName in icons) {
      // Icons are already loaded when imported, but this ensures they're available
      const IconComponent = icons[iconName];
      // You could also prefetch dynamic imports here if using lazy loading
    }
  });
};

// Preload on app initialization
preloadIcons(['IconHeart', 'IconStar', 'IconUser', 'IconSettings']);
```

### 3. Bundle Analysis

```tsx
// Create a separate bundle for icons
import { IconHeart, IconStar } from '@pelatform/icons';

// This will be tree-shaken to only include used icons
export const CommonIcons = {
  IconHeart,
  IconStar,
};

// Usage in components
import { CommonIcons } from './common-icons';

function App() {
  return (
    <div>
      <CommonIcons.IconHeart />
      <CommonIcons.IconStar />
    </div>
  );
}
```

## 🎯 Advanced Patterns

### 1. Icon Theme Provider

```tsx
import React, { createContext, useContext, ReactNode } from 'react';

interface IconTheme {
  size: 'sm' | 'md' | 'lg';
  color: string;
  className: string;
}

const defaultTheme: IconTheme = {
  size: 'md',
  color: 'currentColor',
  className: '',
};

const IconThemeContext = createContext<IconTheme>(defaultTheme);

export function IconThemeProvider({
  children,
  theme,
}: {
  children: ReactNode;
  theme: Partial<IconTheme>;
}) {
  const mergedTheme = { ...defaultTheme, ...theme };

  return (
    <IconThemeContext.Provider value={mergedTheme}>
      {children}
    </IconThemeContext.Provider>
  );
}

export function useIconTheme() {
  return useContext(IconThemeContext);
}

// Usage
function ThemedIcon({
  name,
  ...props
}: {
  name: keyof typeof icons;
  [key: string]: any;
}) {
  const theme = useIconTheme();
  const { icons } = await import('@pelatform/icons');

  if (name in icons) {
    return createElement(icons[name], {
      className: theme.className,
      style: { color: theme.color },
      ...props,
    });
  }

  return null;
}

function App() {
  return (
    <IconThemeProvider
      theme={{ size: 'lg', color: '#3b82f6', className: 'transition-colors' }}
    >
      <ThemedIcon name="IconHeart" />
      <ThemedIcon name="IconStar" />
    </IconThemeProvider>
  );
}
```

### 2. Icon Search and Filter

```tsx
import { categories, type Category } from '@pelatform/icons/categories';
import iconsByCategory from '@pelatform/icons/icons-by-category';
import { useState, useMemo } from 'react';

function IconSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredIcons = useMemo(() => {
    // Get icons by category (much faster than filtering)
    let results =
      selectedCategory === 'all'
        ? Object.values(iconsByCategory).flat()
        : iconsByCategory[selectedCategory] || [];

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter((iconName) =>
        iconName.toLowerCase().includes(term),
      );
    }

    return results.slice(0, 50); // Limit results
  }, [searchTerm, selectedCategory]);

  return (
    <div>
      {/* Category Filter */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      >
        {categories.map((category: Category) => (
          <option key={category.id} value={category.id}>
            {category.title}
          </option>
        ))}
      </select>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search icons..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />

      {/* Icon Grid */}
      <div className="grid grid-cols-8 gap-4">
        {filteredIcons.map((iconName) => (
          <div
            key={iconName}
            className="flex flex-col items-center p-2 border rounded"
          >
            <DynamicIcon iconName={iconName} className="w-8 h-8 mb-2" />
            <span className="text-xs text-center">{iconName}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
```

## 🚀 Next Steps

- [Learn about TypeScript features](./types.md)
- [Learn about categories](./categories.md)
- [Check out dynamic imports](./dynamic-imports.md)
- [Check out more examples](./examples.md)
