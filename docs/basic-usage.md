# Basic Usage

Learn the fundamental ways to use @pelatform/icons in your React applications.

## 📖 Import Methods

### 1. Named Imports (Recommended)

```tsx
import { IconHeart, IconStar, IconUser } from '@pelatform/icons';

function App() {
  return (
    <div>
      <IconHeart />
      <IconStar />
      <IconUser />
    </div>
  );
}
```

### 2. Default Import with Destructuring

```tsx
import Icons from '@pelatform/icons';

const { IconHeart, IconStar, IconUser } = Icons;
```

### 3. Namespace Import

```tsx
import * as Icons from '@pelatform/icons';

function App() {
  return (
    <div>
      <Icons.IconHeart />
      <Icons.IconStar />
      <Icons.IconUser />
    </div>
  );
}
```

## 🎨 Styling Icons

### Size Control

```tsx
import { IconHeart } from '@pelatform/icons';

function SizeExamples() {
  return (
    <div>
      {/* Method 1: Tailwind CSS size classes */}
      <IconHeart className="size-4" /> {/* 16px */}
      <IconHeart className="size-6" /> {/* 24px */}
      <IconHeart className="size-8" /> {/* 32px */}
      {/* Method 2: Inline Styles */}
      <IconHeart style={{ width: 16, height: 16 }} />
      <IconHeart style={{ width: 24, height: 24 }} />
      <IconHeart style={{ width: 32, height: 32 }} />
      {/* Method 3: SVG Props */}
      <IconHeart width={16} height={16} />
      <IconHeart width={24} height={24} />
      <IconHeart width={32} height={32} />
    </div>
  );
}
```

### Color Control

```tsx
import { IconStar } from '@pelatform/icons';

function ColorExamples() {
  return (
    <div>
      {/* Method 1: CSS Classes */}
      <IconStar className="text-red-500" />
      <IconStar className="text-blue-500" />
      <IconStar className="text-green-500" />

      {/* Method 2: Inline Styles */}
      <IconStar style={{ color: '#ef4444' }} />
      <IconStar style={{ color: '#3b82f6' }} />
      <IconStar style={{ color: '#10b981' }} />

      {/* Method 3: SVG Props */}
      <IconStar fill="#ef4444" />
      <IconStar fill="#3b82f6" />
      <IconStar fill="#10b981" />
    </div>
  );
}
```

### Combined Styling

```tsx
import { IconArrowRight } from '@pelatform/icons';

function StyledIcon() {
  return (
    <IconArrowRight
      className="text-blue-500 hover:text-blue-700 transition-colors"
      style={{
        width: 20,
        height: 20,
        cursor: 'pointer',
      }}
      onClick={() => console.log('Icon clicked!')}
    />
  );
}
```

## 🔧 Common Props

All icons accept standard SVG element props:

```tsx
import { IconUser } from '@pelatform/icons';

function IconWithProps() {
  return (
    <IconUser
      // Size props
      width={24}
      height={24}
      // Style props
      className="text-gray-600"
      style={{ marginRight: 8 }}
      // Color props
      fill="currentColor"
      stroke="none"
      // Event props
      onClick={handleClick}
      onMouseEnter={handleHover}
      // Accessibility props
      aria-label="User profile"
      role="img"
      // Data attributes
      data-testid="user-icon"
      data-category="navigation"
    />
  );
}
```

## 🎯 Common Use Cases

### 1. Navigation Icons

```tsx
import { IconHome, IconUser, IconSettings, IconLogout } from '@pelatform/icons';

function Navigation() {
  return (
    <nav className="flex space-x-4">
      <a href="/home" className="flex items-center space-x-2">
        <IconHome className="w-5 h-5" />
        <span>Home</span>
      </a>
      <a href="/profile" className="flex items-center space-x-2">
        <IconUser className="w-5 h-5" />
        <span>Profile</span>
      </a>
      <a href="/settings" className="flex items-center space-x-2">
        <IconSettings className="w-5 h-5" />
        <span>Settings</span>
      </a>
      <button className="flex items-center space-x-2">
        <IconLogout className="w-5 h-5" />
        <span>Logout</span>
      </button>
    </nav>
  );
}
```

### 2. Button Icons

```tsx
import { IconPlus, IconEdit, IconTrash, IconDownload } from '@pelatform/icons';

function ActionButtons() {
  return (
    <div className="flex space-x-2">
      <button className="btn btn-primary">
        <IconPlus className="w-4 h-4 mr-2" />
        Add New
      </button>

      <button className="btn btn-secondary">
        <IconEdit className="w-4 h-4 mr-2" />
        Edit
      </button>

      <button className="btn btn-danger">
        <IconTrash className="w-4 h-4 mr-2" />
        Delete
      </button>

      <button className="btn btn-success">
        <IconDownload className="w-4 h-4 mr-2" />
        Download
      </button>
    </div>
  );
}
```

### 3. Status Indicators

```tsx
import { IconCheck, IconX, IconAlert, IconInfo } from '@pelatform/icons';

function StatusIndicators() {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2 text-green-600">
        <IconCheck className="w-5 h-5" />
        <span>Success: Operation completed</span>
      </div>

      <div className="flex items-center space-x-2 text-red-600">
        <IconX className="w-5 h-5" />
        <span>Error: Something went wrong</span>
      </div>

      <div className="flex items-center space-x-2 text-yellow-600">
        <IconAlert className="w-5 h-5" />
        <span>Warning: Please check your input</span>
      </div>

      <div className="flex items-center space-x-2 text-blue-600">
        <IconInfo className="w-5 h-5" />
        <span>Info: Additional information available</span>
      </div>
    </div>
  );
}
```

### 4. Form Icons

```tsx
import { IconMail, IconLock, IconEye, IconEyeOff } from '@pelatform/icons';
import { useState } from 'react';

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="space-y-4">
      <div className="relative">
        <IconMail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        <input
          type="email"
          placeholder="Email"
          className="pl-10 pr-4 py-2 border rounded-lg w-full"
        />
      </div>

      <div className="relative">
        <IconLock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          className="pl-10 pr-12 py-2 border rounded-lg w-full"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-3"
        >
          {showPassword ? (
            <IconEyeOff className="w-5 h-5 text-gray-400" />
          ) : (
            <IconEye className="w-5 h-5 text-gray-400" />
          )}
        </button>
      </div>
    </form>
  );
}
```

## 🎨 CSS Integration

### Tailwind CSS

```tsx
import { IconHeart } from '@pelatform/icons';

function TailwindExample() {
  return (
    <IconHeart
      className="
      size-6
      text-red-500
      hover:text-red-700
      transition-colors
      duration-200
      cursor-pointer
    "
    />
  );
}
```

### CSS Modules

```css
/* styles.module.css */
.icon {
  width: 1.5rem;
  height: 1.5rem;
  transition: color 0.2s ease;
}

.iconPrimary {
  color: #3b82f6;
}

.iconSecondary {
  color: #6b7280;
}

.iconHover:hover {
  color: #1d4ed8;
}
```

```tsx
import { IconStar } from '@pelatform/icons';
import styles from './styles.module.css';

function CSSModuleExample() {
  return (
    <IconStar
      className={`${styles.icon} ${styles.iconPrimary} ${styles.iconHover}`}
    />
  );
}
```

### Styled Components

```tsx
import styled from 'styled-components';
import { IconArrowRight } from '@pelatform/icons';

const StyledIcon = styled(IconArrowRight)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${(props) => props.theme.colors.primary};
  transition: color 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.colors.primaryDark};
  }
`;

function StyledComponentExample() {
  return <StyledIcon />;
}
```

## 📋 Category Filtering

### Using Categories for Icon Organization

```tsx
import { categories, type Category } from '@pelatform/icons/categories';
import { icons } from '@pelatform/icons';
import { createElement } from 'react';

function CategoryIconPicker() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

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

      {/* Icon Grid */}
      <div className="grid grid-cols-8 gap-2">
        {Object.keys(icons)
          .slice(0, 32)
          .map((iconName) => (
            <div
              key={iconName}
              className="flex items-center justify-center p-2 border rounded"
            >
              {createElement(icons[iconName as keyof typeof icons], {
                className: 'w-6 h-6',
              })}
            </div>
          ))}
      </div>
    </div>
  );
}
```

## 🚀 Next Steps

- [Learn about advanced usage patterns](./advanced-usage.md)
- [Explore TypeScript features](./types.md)
- [Learn about categories](./categories.md)
- [Check out more examples](./examples.md)
