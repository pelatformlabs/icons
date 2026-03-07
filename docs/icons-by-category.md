# Icons by Category

The `/icons-by-category` entry point provides a mapping of category IDs to arrays of icon names, making it easy to filter and display icons by category in your UI.

## Installation

This entry point is included in the `@pelatform/icons` package. No additional installation needed.

## Import

```typescript
// ESM/TypeScript
import iconsByCategory from '@pelatform/icons/icons-by-category';

// CommonJS
const iconsByCategory = require('@pelatform/icons/icons-by-category');
```

## Type Definition

```typescript
type IconsByCategory = Record<string, string[]>

// Example structure:
{
  "animals": ["cat", "dog", "bird", ...],
  "arrows": ["arrow-left", "arrow-right", ...],
  "devices": ["mobile", "laptop", "desktop", ...],
  // ... more categories
}
```

## Usage Examples

### Get Icons by Category

```typescript
import iconsByCategory from '@pelatform/icons/icons-by-category';

// Get all icons in a specific category
const animalsIcons = iconsByCategory['animals'];
// Returns: ["cat", "dog", "bird", ...]

const devicesIcons = iconsByCategory['devices'];
// Returns: ["mobile", "laptop", "desktop", ...]
```

### Category Filter Component

```typescript
import { useState } from 'react'
import iconsByCategory from '@pelatform/icons/icons-by-category'
import { categories } from '@pelatform/icons/categories'

export function IconFilter() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
  }

  const getFilteredIcons = () => {
    if (selectedCategory === 'all') {
      // Return all icons
      return Object.values(iconsByCategory).flat()
    }
    return iconsByCategory[selectedCategory] || []
  }

  return (
    <div>
      <select
        value={selectedCategory}
        onChange={(e) => handleCategoryChange(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.title}
          </option>
        ))}
      </select>

      <div>
        {getFilteredIcons().map((iconName) => (
          <IconCard key={iconName} name={iconName} />
        ))}
      </div>
    </div>
  )
}
```

### Category with Icon Count

```typescript
import iconsByCategory from '@pelatform/icons/icons-by-category'
import { categories } from '@pelatform/icons/categories'

export function CategoryList() {
  return (
    <ul>
      {categories.map((category) => {
        const iconCount = iconsByCategory[category.id]?.length || 0

        return (
          <li key={category.id}>
            {category.title} ({iconCount} icons)
          </li>
        )
      })}
    </ul>
  )
}
```

### Search Within Category

```typescript
import { useState, useMemo } from 'react'
import iconsByCategory from '@pelatform/icons/icons-by-category'

export function CategorySearch() {
  const [categoryId, setCategoryId] = useState('animals')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredIcons = useMemo(() => {
    const icons = iconsByCategory[categoryId] || []

    if (!searchQuery) return icons

    return icons.filter((iconName) =>
      iconName.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [categoryId, searchQuery])

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search icons..."
      />

      <div>
        {filteredIcons.map((iconName) => (
          <IconPreview key={iconName} name={iconName} />
        ))}
      </div>
    </div>
  )
}
```

### Dynamic Icon Grid with Pagination

```typescript
import { useState } from 'react'
import iconsByCategory from '@pelatform/icons/icons-by-category'

const ICONS_PER_PAGE = 50

export function IconGrid() {
  const [category, setCategory] = useState('all')
  const [page, setPage] = useState(1)

  const icons = category === 'all'
    ? Object.values(iconsByCategory).flat()
    : (iconsByCategory[category] || [])

  const totalPages = Math.ceil(icons.length / ICONS_PER_PAGE)
  const startIndex = (page - 1) * ICONS_PER_PAGE
  const paginatedIcons = icons.slice(startIndex, startIndex + ICONS_PER_PAGE)

  return (
    <div>
      <div className="grid grid-cols-10 gap-4">
        {paginatedIcons.map((iconName) => (
          <IconCard key={iconName} name={iconName} />
        ))}
      </div>

      <div className="pagination">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>

        <span>Page {page} of {totalPages}</span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  )
}
```

### Category Navigation with Breadcrumbs

```typescript
import { useParams, useNavigate } from 'react-router-dom'
import iconsByCategory from '@pelatform/icons/icons-by-category'
import { categories } from '@pelatform/icons/categories'

export function CategoryView() {
  const { categoryId } = useParams()
  const navigate = useNavigate()

  const category = categories.find((cat) => cat.id === categoryId)
  const icons = iconsByCategory[categoryId || ''] || []

  if (!category) {
    return <div>Category not found</div>
  }

  return (
    <div>
      <nav className="breadcrumbs">
        <span onClick={() => navigate('/icons')}>All Icons</span>
        <span>/</span>
        <span>{category.title}</span>
      </nav>

      <h1>{category.title} Icons</h1>
      <p>{icons.length} icons in this category</p>

      <div className="icon-grid">
        {icons.map((iconName) => (
          <IconCard key={iconName} name={iconName} />
        ))}
      </div>
    </div>
  )
}
```

### Multi-Category Selection

```typescript
import { useState } from 'react'
import iconsByCategory from '@pelatform/icons/icons-by-category'

export function MultiCategoryFilter() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  const getFilteredIcons = () => {
    if (selectedCategories.length === 0) {
      return Object.values(iconsByCategory).flat()
    }

    return selectedCategories.flatMap((cat) => iconsByCategory[cat] || [])
  }

  return (
    <div>
      <div className="category-checkboxes">
        {Object.keys(iconsByCategory).map((categoryId) => (
          <label key={categoryId}>
            <input
              type="checkbox"
              checked={selectedCategories.includes(categoryId)}
              onChange={() => toggleCategory(categoryId)}
            />
            {categoryId}
          </label>
        ))}
      </div>

      <div>
        {getFilteredIcons().map((iconName) => (
          <IconCard key={iconName} name={iconName} />
        ))}
      </div>
    </div>
  )
}
```

## API Reference

### iconsByCategory

A `Record<string, string[]>` where:

- **Key**: Category ID (kebab-case)
- **Value**: Array of icon names (kebab-case)

### Available Categories

The following categories are available (see `/categories` entry point for complete list):

- `animals` - Animal and creature icons
- `arrows` - Directional arrows
- `badges` - Badge and award icons
- `brand` - Brand and logo icons
- `buildings` - Building and architecture
- `charts` - Chart and graph icons
- `communication` - Communication icons
- `computers` - Computer and hardware
- `currencies` - Currency and money
- `database` - Database and storage
- `design` - Design and creative tools
- `development` - Development and coding
- `devices` - Devices and gadgets
- `document` - Document and file icons
- `e-commerce` - Shopping and e-commerce
- `electrical` - Electrical components
- `extensions` - File extension icons
- `food` - Food and drink
- `games` - Gaming icons
- `gender` - Gender and identity
- `gestures` - Hand gestures
- `health` - Health and medical
- `laundry` - Laundry and cleaning
- `letters` - Alphabet letters
- `logic` - Logic and operators
- `map` - Map and location
- `math` - Math and science
- `media` - Media and playback
- `mood` - Mood and emotions
- `nature` - Nature and weather
- `numbers` - Numerical icons
- `other` - Miscellaneous icons
- `photography` - Camera and photography
- `shapes` - Geometric shapes
- `sport` - Sports and activities
- `symbols` - Symbols and signs
- `system` - System and UI icons
- `text` - Text and typography
- `vehicles` - Vehicles and transport
- `version-control` - Version control icons
- `weather` - Weather conditions
- `zodiac` - Zodiac signs

## Tips

1. **Combine with `/categories`**: Use the `/categories` entry point to get category metadata (titles) while using `/icons-by-category` for filtering

2. **Handle Missing Categories**: Always check if a category exists before accessing:

   ```typescript
   const icons = iconsByCategory[categoryId] || [];
   ```

3. **Performance**: For large datasets, consider pagination or virtual scrolling

4. **Type Safety**: Use TypeScript for better autocomplete and type checking

5. **Server-Side Filtering**: This data can also be used server-side for API filtering

## Related

- [Categories](./categories.md) - Get category metadata
- [Icon List](./icon-list.md) - Get all icon names as flat array
- [Dynamic Imports](./dynamic-imports.md) - Load icons dynamically
