# Types & TypeScript

Complete TypeScript support and type definitions for @pelatform/icons.

## 📝 Available Types

The package exports comprehensive TypeScript types with full JSDoc documentation:

```tsx
import type {
  IconProps,
  IconComponent,
  IconName,
  IconCategory,
  IconVariant,
  IconMetadata,
  IconSearchOptions,
  IconNameToComponent,
  ComponentNameToIcon,
} from '@pelatform/icons/types';
```

## 🎯 Core Types

### IconProps

Props accepted by every icon component:

```tsx
interface IconProps {
  /** Additional CSS classes appended to default classes */
  className?: string;
  /** Component identifier (useful for testing, debugging, or styling) */
  'data-slot'?: string;
  /** Other props passed-through to SVG element */
  [key: string]: any;
}

// Usage
import type { IconProps } from '@pelatform/icons/types';

const MyIcon = (props: IconProps) => <IconHeart {...props} />;
```

### IconComponent

Type for icon function components:

```tsx
type IconComponent = React.FC<IconProps>;

// Usage
import type { IconComponent } from '@pelatform/icons/types';

const createIcon = (name: string): IconComponent => {
  return (props) => <svg {...props}>{/* ... */}</svg>;
};
```

### IconName

Union type of all available icon names (kebab-case):

```tsx
type IconName = 'heart' | 'star' | 'user' | ... // 5000+ icon names

// Auto-generated from icon-list.ts
// Usage
import type { IconName } from '@pelatform/icons/types';

const iconName: IconName = 'heart'; // ✅ Valid
const invalid: IconName = 'invalid-icon'; // ❌ Type error

// Type-safe icon function
function renderIcon(name: IconName) {
  const iconComponent = iconMap[name];
  return <iconComponent />;
}
```

### IconCategory

Union type of all available categories:

```tsx
type IconCategory = 'all' | 'animals' | 'arrows' | ... // 42 categories

// Auto-generated from categories.ts
// Usage
import type { IconCategory } from '@pelatform/icons/types';

const category: IconCategory = 'animals'; // ✅ Valid
const invalid: IconCategory = 'invalid'; // ❌ Type error

// Type-safe filter function
function filterByCategory(iconList: string[], category: IconCategory) {
  if (category === 'all') return iconList;
  // Filter logic here
}
```

### IconVariant

Available icon variants:

```tsx
type IconVariant = 'outline' | 'filled';

// Usage
import type { IconVariant } from '@pelatform/icons/types';

const variant: IconVariant = 'filled';
```

## 🔧 Utility Types

### IconNameToComponent

Convert icon name (kebab-case) to component name (PascalCase):

```tsx
import type { IconNameToComponent } from '@pelatform/icons/types';

type HeartComponent = IconNameToComponent<'heart'>; // 'IconHeart'
type HeartFilledComponent = IconNameToComponent<'heart-filled'>; // 'IconHeartFilled'

// Usage in function
function getComponentName<T extends IconName>(
  iconName: T,
): IconNameToComponent<T> {
  // Type-safe component name conversion
}
```

### ComponentNameToIcon

Convert component name (PascalCase) to icon name (kebab-case):

```tsx
import type { ComponentNameToIcon } from '@pelatform/icons/types';

type HeartIcon = ComponentNameToIcon<'IconHeart'>; // 'heart'
type HeartFilledIcon = ComponentNameToIcon<'IconHeartFilled'>; // 'heart-filled'

// Usage
function toKebabCase<T extends string>(
  componentName: T,
): ComponentNameToIcon<T> {
  // Type-safe conversion
}
```

### IconMetadata

Icon metadata structure (internal usage):

```tsx
import type { IconMetadata } from '@pelatform/icons/types';

interface IconMetadata {
  name: IconName; // Icon name in kebab-case
  component: string; // Component name in PascalCase
  category: IconCategory; // Icon category
  variant: IconVariant; // Icon variant (outline/filled)
  tags?: string[]; // Tags for searching (optional)
}

// Usage
const metadata: IconMetadata = {
  name: 'heart',
  component: 'IconHeart',
  category: 'health',
  variant: 'outline',
  tags: ['love', 'favorite', 'romance'],
};
```

### IconSearchOptions

Search/filter options interface:

```tsx
import type { IconSearchOptions } from '@pelatform/icons/types';

interface IconSearchOptions {
  category?: IconCategory; // Filter by category
  variant?: IconVariant; // Filter by variant
  query?: string; // Search query string
  limit?: number; // Limit number of results
}

// Usage
import type { IconSearchOptions } from '@pelatform/icons/types';

const searchOptions: IconSearchOptions = {
  category: 'animals',
  variant: 'outline',
  query: 'cat',
  limit: 10,
};

const icons = searchIcons(searchOptions);
```

## 🎯 Type-Safe Icon Usage

### 1. Type-Safe Icon Names

```tsx
import type { IconName } from '@pelatform/icons/types';
import { icons } from '@pelatform/icons';

function renderIcon(iconName: IconName) {
  const IconComponent =
    icons[
      `Icon${iconName.charAt(0).toUpperCase()}${iconName.slice(1)}` as keyof typeof icons
    ];
  return <IconComponent />;
}

// Usage
renderIcon('heart'); // ✅ Type-safe
renderIcon('invalid-icon'); // ❌ TypeScript error
```

### 2. Type-Safe Icon Component

```tsx
import type { IconProps, IconName } from '@pelatform/icons/types';
import { icons } from '@pelatform/icons';

interface TypedIconProps extends IconProps {
  name: IconName;
}

function TypedIcon({ name, ...props }: TypedIconProps) {
  const IconComponent =
    icons[
      `Icon${name.charAt(0).toUpperCase()}${name.slice(1)}` as keyof typeof icons
    ];
  return <IconComponent {...props} />;
}

// Usage
function App() {
  return (
    <div>
      <TypedIcon name="heart" className="text-red-500" /> {/* ✅ Type-safe */}
      <TypedIcon name="invalid-icon" /> {/* ❌ TypeScript error */}
    </div>
  );
}
```

### 3. Type-Safe Category Filter

```tsx
import type { IconCategory, IconName } from '@pelatform/icons/types';
import iconList from '@pelatform/icons/icon-list';
import iconCategoryMap from '@pelatform/icons/out/icon-category.json';

function filterByCategory(
  iconList: IconName[],
  category: IconCategory,
): IconName[] {
  if (category === 'all') return iconList;

  return iconList.filter((iconName) => {
    const iconData = iconCategoryMap[iconName];
    if (!iconData) return false;

    const categoryLower = iconData.category.toLowerCase();
    return categoryLower === category;
  });
}

// Usage
const healthIcons = filterByCategory(allIcons, 'health'); // ✅ Type-safe
const invalid = filterByCategory(allIcons, 'invalid'); // ❌ TypeScript error
```

### 4. Type-Safe Icon Registry

```tsx
import type { IconName } from '@pelatform/icons/types';
import { icons } from '@pelatform/icons';

class TypedIconRegistry {
  private registry = new Map<string, IconName>();

  register(alias: string, iconName: IconName): void {
    this.registry.set(alias, iconName);
  }

  get(alias: string): IconName | undefined {
    return this.registry.get(alias);
  }

  has(alias: string): boolean {
    return this.registry.has(alias);
  }
}

// Usage
const registry = new TypedIconRegistry();
registry.register('like', 'heart'); // ✅ Type-safe
registry.register('invalid', 'invalid-icon'); // ❌ TypeScript error
```

## 🔍 Advanced Type Patterns

### 1. Icon Component Factory

```tsx
import type { IconProps, IconName } from '@pelatform/icons/types';
import { icons } from '@pelatform/icons';
import { forwardRef } from 'react';

interface IconFactoryOptions {
  defaultClassName?: string;
}

function createIconComponent(
  iconName: IconName,
  options: IconFactoryOptions = {},
) {
  const { defaultClassName = '' } = options;

  return forwardRef<SVGSVGElement, IconProps>(
    ({ className = '', ...props }, ref) => {
      const IconElement =
        icons[
          `Icon${iconName.charAt(0).toUpperCase()}${iconName.slice(1)}` as keyof typeof icons
        ];
      return (
        <IconElement
          ref={ref}
          className={`${defaultClassName} ${className}`.trim()}
          {...props}
        />
      );
    },
  );
}

// Usage
const HeartIcon = createIconComponent('heart', {
  defaultClassName: 'text-red-500',
});
```

### 2. Icon Variant System

```tsx
import type { IconName, IconVariant } from '@pelatform/icons/types';

interface IconVariants {
  outline?: IconName;
  filled?: IconName;
}

type VariantType = keyof IconVariants;

function getIconVariant(baseName: string, variant: IconVariant): IconName {
  if (variant === 'filled') {
    return `${baseName}-filled` as IconName;
  }
  return baseName as IconName;
}

// Usage
const heartIcon: IconName = getIconVariant('heart', 'outline'); // 'heart'
const heartFilled: IconName = getIconVariant('heart', 'filled'); // 'heart-filled'
```

### 3. Type-Safe Icon Builder

```tsx
import type { IconProps, IconName } from '@pelatform/icons/types';
import { icons } from '@pelatform/icons';
import { createElement } from 'react';

class IconBuilder {
  private iconName: IconName;
  private props: IconProps = {};

  constructor(iconName: IconName) {
    this.iconName = iconName;
  }

  className(className: string): this {
    this.props.className = className;
    return this;
  }

  style(style: React.CSSProperties): this {
    this.props.style = style;
    return this;
  }

  build() {
    const IconComponent =
      icons[
        `Icon${this.iconName.charAt(0).toUpperCase()}${this.iconName.slice(1)}` as keyof typeof icons
      ];
    return createElement(IconComponent, this.props);
  }
}

// Usage
const heartIcon = new IconBuilder('heart')
  .className('text-red-500')
  .style({ cursor: 'pointer' })
  .build();
```

## 🎨 Type Guards

### 1. Icon Name Validation

```tsx
import type { IconName } from '@pelatform/icons/types';
import iconList from '@pelatform/icons/icon-list';

function isIconName(name: string): name is IconName {
  return iconList.includes(name);
}

// Usage
const iconName = 'heart';
if (isIconName(iconName)) {
  // iconName is typed as IconName here
  console.log('Valid icon:', iconName);
}
```

### 2. Category Validation

```tsx
import type { IconCategory } from '@pelatform/icons/types';
import { categories } from '@pelatform/icons/categories';

function isIconCategory(category: string): category is IconCategory {
  return categories.some((cat) => cat.id === category);
}

// Usage
const category = 'animals';
if (isIconCategory(category)) {
  // category is typed as IconCategory here
  console.log('Valid category:', category);
}
```

## 📚 Type Exports Summary

```tsx
// Core Types
import type {
  IconProps, // Props for icon components
  IconComponent, // Icon component type
  IconName, // Union type of all icon names
  IconCategory, // Union type of all categories
  IconVariant, // 'outline' | 'filled'
} from '@pelatform/icons/types';

// Utility Types
import type {
  IconNameToComponent, // Convert icon name to component name
  ComponentNameToIcon, // Convert component name to icon name
} from '@pelatform/icons/types';

// Advanced Types
import type {
  IconMetadata, // Icon metadata structure
  IconSearchOptions, // Search/filter options
} from '@pelatform/icons/types';
```

## 💡 Best Practices

### 1. Use IconName for Type Safety

```tsx
// ✅ Good - Type-safe
import type { IconName } from '@pelatform/icons/types';

function getIcon(name: IconName) {
  // Implementation
}

// ❌ Avoid - Not type-safe
function getIcon(name: string) {
  // Implementation
}
```

### 2. Use IconCategory for Filters

```tsx
// ✅ Good - Type-safe categories
import type { IconCategory } from '@pelatform/icons/types';

function filterIcons(category: IconCategory) {
  // Implementation
}

// ❌ Avoid - Not type-safe
function filterIcons(category: string) {
  // Implementation
}
```

### 3. Leverage Utility Types

```tsx
// ✅ Good - Using utility types
import type { IconNameToComponent } from '@pelatform/icons/types';

type MyIcon = IconNameToComponent<'heart'>; // 'IconHeart'

// ❌ Avoid - Hardcoded strings
type MyIcon = 'IconHeart';
```

## 🚀 Next Steps

- [Learn about categories](./categories.md)
- [Explore dynamic imports](./dynamic-imports.md)
- [Check out examples](./examples.md)
- [Read API reference](./api-reference.md)
