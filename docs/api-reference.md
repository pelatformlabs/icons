# API Reference

Complete API documentation for @pelatform/icons.

## 📦 Package Exports

### Main Export (`@pelatform/icons`)

```tsx
import {
  // Individual icon components
  IconHeart,
  IconStar,
  IconUser,
  // ... all 5000+ icons

  // Aliases (exported from main entry)
  IconBoxSeam, // alias for IconPackage
  Icon12Hours, // alias for IconHours12

  // Icons object for dynamic access
  icons,
} from '@pelatform/icons';
```

### Dynamic Imports (`@pelatform/icons/dynamic-imports`)

```tsx
import iconMap from '@pelatform/icons/dynamic-imports';

// Type: Record<string, () => Promise<{ default: IconComponent }>>
// Maps kebab-case icon names to dynamic import functions

// Usage
const IconComponent = await iconMap['heart']();
```

### Icon List (`@pelatform/icons/icon-list`)

```tsx
import iconList from '@pelatform/icons/icon-list';

// Type: string[]
// Array of all available icon names (kebab-case)

// Usage
console.log(iconList); // ['heart', 'star', 'user', ...]
console.log(`Total icons: ${iconList.length}`); // 5000+
```

### Categories (`@pelatform/icons/categories`)

```tsx
import { categories, type Category } from '@pelatform/icons/categories';

// Type: Category[]
interface Category {
  id: string; // kebab-case, e.g., "animals", "arrows"
  title: string; // Title Case, e.g., "Animals", "Arrows"
}

// Usage
console.log(categories); // Array of 42 categories
```

### Icons by Category (`@pelatform/icons/icons-by-category`)

```tsx
import iconsByCategory from '@pelatform/icons/icons-by-category';

// Type: Record<string, string[]>
// Mapping of category IDs to arrays of icon names

// Usage
const animalsIcons = iconsByCategory['animals'];
console.log(animalsIcons); // ['cat', 'dog', 'bird', ...]

// Get icons in a specific category
const getCategoryIcons = (categoryId: string) => {
  return iconsByCategory[categoryId] || [];
};
```

### Types (`@pelatform/icons/types`)

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
```

### IconName

Union type of all available icon names (kebab-case):

```tsx
type IconName = 'heart' | 'star' | 'user' | ... // 5000+ icon names

// Usage
import type { IconName } from '@pelatform/icons/types';

const iconName: IconName = 'heart'; // ✅ Valid
const invalid: IconName = 'invalid-icon'; // ❌ Type error
```

### IconCategory

Union type of all available categories:

```tsx
type IconCategory = 'all' | 'animals' | 'arrows' | ... // 42 categories

// Usage
import type { IconCategory } from '@pelatform/icons/types';

const category: IconCategory = 'animals'; // ✅ Valid
```

### IconVariant

Available icon variants:

```tsx
type IconVariant = 'outline' | 'filled';
```

## 🔧 Icon Components

### Individual Icons

All icons are React functional components that accept `IconProps`:

```tsx
// All icons support standard SVG props
<IconHeart
  className="w-6 h-6 text-red-500"
  onClick={handleClick}
  aria-label="Like this item"
  data-testid="heart-icon"
/>
```

### Aliases

Alternative icon names are exported from the main entry point:

```tsx
import { IconBoxSeam, Icon12Hours } from '@pelatform/icons';

// IconBoxSeam is an alias for IconPackage
// Icon12Hours is an alias for IconHours12
```

## 📋 Categories API

### Categories Array

```tsx
const categories: Category[];
```

Array of all available categories:

```tsx
import { categories, type Category } from '@pelatform/icons/categories';

// Example: Get all categories
console.log(categories);

// Example: Category filter dropdown
<select>
  {categories.map((category: Category) => (
    <option key={category.id} value={category.id}>
      {category.title}
    </option>
  ))}
</select>;
```

### Category Interface

```tsx
interface Category {
  id: string; // kebab-case identifier
  title: string; // Title Case display name
}
```

**Example categories:**

```tsx
{
  id: "all",
  title: "All"
},
{
  id: "animals",
  title: "Animals"
},
{
  id: "arrows",
  title: "Arrows"
},
// ... 39 more categories
```

### Utility Functions

```tsx
// Find category by ID
function getCategoryById(id: string): Category | undefined {
  return categories.find((cat) => cat.id === id);
}

// Filter icons by category
function filterByCategory(categoryId: string): string[] {
  if (categoryId === 'all') {
    return Object.values(iconsByCategory).flat();
  }

  return iconsByCategory[categoryId] || [];
}

// Get category count
function getCategoryCount(): number {
  return categories.length;
}
```

## ⚡ Dynamic Imports API

### Icon Map

```tsx
const iconMap: Record<string, () => Promise<{ default: IconComponent }>>;
```

Maps kebab-case icon names to dynamic import functions:

```tsx
import iconMap from '@pelatform/icons/dynamic-imports';

// Load single icon
async function loadIcon(iconName: string): Promise<IconComponent | null> {
  if (iconName in iconMap) {
    const module = await iconMap[iconName]();
    return module.default;
  }
  return null;
}

// Usage
const IconHeart = await loadIcon('heart');
```

### Loading Functions

```tsx
// Load multiple icons
async function loadIcons(
  iconNames: string[],
): Promise<(IconComponent | null)[]> {
  return Promise.all(
    iconNames.map((name) => {
      if (name in iconMap) {
        return iconMap[name]().then((module) => module.default);
      }
      return Promise.resolve(null);
    }),
  );
}

// Preload icons
function preloadIcons(iconNames: string[]): Promise<void> {
  const promises = iconNames.map((name) => {
    return name in iconMap ? iconMap[name]() : Promise.resolve();
  });

  return Promise.all(promises).then(() => void 0);
}
```

## 📝 Icon List API

### Icon Names Array

```tsx
const iconList: string[];
```

Array of all available icon names in kebab-case:

```tsx
import iconList from '@pelatform/icons/icon-list';

// Example: ['heart', 'star', 'user', ...]
console.log(iconList.length); // 5000+

// Filter icons
const heartIcons = iconList.filter((name) => name.includes('heart'));
const arrowIcons = iconList.filter((name) => name.includes('arrow'));
```

### Utility Functions

```tsx
// Check if icon exists
function iconExists(iconName: string): boolean {
  return iconList.includes(iconName);
}

// Get icons by pattern
function getIconsByPattern(pattern: RegExp): string[] {
  return iconList.filter((name) => pattern.test(name));
}

// Get random icon
function getRandomIcon(): string {
  return iconList[Math.floor(Math.random() * iconList.length)];
}

// Search icons
function searchIcons(query: string): string[] {
  const lowercaseQuery = query.toLowerCase();
  return iconList.filter((name) => name.toLowerCase().includes(lowercaseQuery));
}
```

## 🎨 Styling API

### CSS Classes

Icons inherit styles from their parent and accept standard CSS classes:

```tsx
// Tailwind CSS
<IconHeart className="size-6 text-red-500 hover:text-red-700" />

// Custom CSS
<IconStar className="icon icon-large icon-yellow" />
```

### Inline Styles

```tsx
<IconUser
  style={{
    width: 24,
    height: 24,
    color: '#3b82f6',
    cursor: 'pointer',
  }}
/>
```

### Default Classes

All icons come with default CSS classes:

```tsx
// Default classes applied to all icons
'pelatform-icons pelatform-icon-[name] size-4';

// Example for IconHeart:
'pelatform-icons pelatform-icon-heart size-4';
```

You can override these by providing your own className:

```tsx
// Override default size-4 with size-6
<IconHeart className="size-6 text-red-500" />
```

## 🔍 Search API

### Search Functions

```tsx
import iconList from '@pelatform/icons/icon-list';

// Basic search
function searchIcons(query: string): string[] {
  const lowercaseQuery = query.toLowerCase();
  return iconList.filter((name) => name.toLowerCase().includes(lowercaseQuery));
}

// Advanced search with category filter
function searchIconsInCategory(query: string, categoryId: string): string[] {
  const categoryIcons =
    categoryId === 'all'
      ? Object.values(iconsByCategory).flat()
      : iconsByCategory[categoryId] || [];

  return categoryIcons.filter((iconName) =>
    iconName.toLowerCase().includes(query.toLowerCase()),
  );
}
```

### Search with Scoring

```tsx
interface SearchResult {
  iconName: string;
  score: number;
}

function advancedSearch(query: string, limit: number = 10): SearchResult[] {
  const results: SearchResult[] = [];
  const lowercaseQuery = query.toLowerCase();

  iconList.forEach((iconName) => {
    if (iconName.toLowerCase().includes(lowercaseQuery)) {
      // Exact match gets highest score
      const score = iconName.toLowerCase() === lowercaseQuery ? 100 : 80;
      results.push({ iconName, score });
    }
  });

  return results.sort((a, b) => b.score - a.score).slice(0, limit);
}
```

## 🎯 Event Handling

### Standard Events

All icons support standard SVG/DOM events:

```tsx
<IconHeart
  onClick={(e) => console.log('Clicked!', e)}
  onMouseEnter={(e) => console.log('Mouse enter', e)}
  onMouseLeave={(e) => console.log('Mouse leave', e)}
  onFocus={(e) => console.log('Focused', e)}
  onBlur={(e) => console.log('Blurred', e)}
  onKeyDown={(e) => console.log('Key down', e)}
/>
```

### Custom Event Handlers

```tsx
interface IconWithEventsProps extends IconProps {
  onIconClick?: (iconName: string, event: MouseEvent) => void;
}

function IconWithEvents({
  iconName,
  onIconClick,
  ...props
}: IconWithEventsProps) {
  return <IconHeart {...props} onClick={(e) => onIconClick?.(iconName, e)} />;
}
```

## 🚀 Performance API

### Bundle Analysis

```tsx
// Get bundle information
function getBundleInfo() {
  return {
    totalIcons: iconList.length,
    totalCategories: categories.length,
    formats: ['ESM', 'CJS', 'UMD'],
    treeShaking: true,
  };
}
```

### Memory Management

```tsx
// Check if icon is available for dynamic loading
import iconMap from '@pelatform/icons/dynamic-imports';

function isIconAvailable(iconName: string): boolean {
  return iconName in iconMap;
}
```

## 🔧 Utility Types

### IconNameToComponent

Convert icon name to component name:

```tsx
import type { IconNameToComponent } from '@pelatform/icons/types';

type HeartComponent = IconNameToComponent<'heart'>; // 'IconHeart'
type HeartFilledComponent = IconNameToComponent<'heart-filled'>; // 'IconHeartFilled'
```

### ComponentNameToIcon

Convert component name to icon name:

```tsx
import type { ComponentNameToIcon } from '@pelatform/icons/types';

type HeartIcon = ComponentNameToIcon<'IconHeart'>; // 'heart'
type HeartFilledIcon = ComponentNameToIcon<'IconHeartFilled'>; // 'heart-filled'
```

## 🚀 Next Steps

- [Check out practical examples](./examples.md)
- [Learn about advanced usage](./advanced-usage.md)
- [Explore TypeScript features](./types.md)
- [Learn about categories](./categories.md)
