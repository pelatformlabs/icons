# Examples

Practical examples and use cases for @pelatform/icons.

## 🎯 Basic Examples

### 1. Simple Icon Usage

```tsx
import { IconHeart, IconStar, IconUser } from '@pelatform/icons';

function BasicExample() {
  return (
    <div className="flex space-x-4">
      <IconHeart className="w-6 h-6 text-red-500" />
      <IconStar className="w-6 h-6 text-yellow-500" />
      <IconUser className="w-6 h-6 text-blue-500" />
    </div>
  );
}
```

### 2. Interactive Icons

```tsx
import { IconHeart, IconHeartFilled } from '@pelatform/icons';
import { useState } from 'react';

function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100"
    >
      {liked ? (
        <IconHeartFilled className="w-5 h-5 text-red-500" />
      ) : (
        <IconHeart className="w-5 h-5 text-gray-500" />
      )}
      <span>{liked ? 'Liked' : 'Like'}</span>
    </button>
  );
}
```

### 3. Icon with Loading State

```tsx
import { IconLoader, IconCheck, IconX } from '@pelatform/icons';
import { useState } from 'react';

function SubmitButton() {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const handleSubmit = async () => {
    setStatus('loading');
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const getIcon = () => {
    switch (status) {
      case 'loading':
        return <IconLoader className="w-4 h-4 animate-spin" />;
      case 'success':
        return <IconCheck className="w-4 h-4" />;
      case 'error':
        return <IconX className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <button
      onClick={handleSubmit}
      disabled={status === 'loading'}
      className={`flex items-center space-x-2 px-4 py-2 rounded ${
        status === 'success'
          ? 'bg-green-500 text-white'
          : status === 'error'
            ? 'bg-red-500 text-white'
            : 'bg-blue-500 text-white hover:bg-blue-600'
      }`}
    >
      {getIcon()}
      <span>
        {status === 'loading'
          ? 'Submitting...'
          : status === 'success'
            ? 'Success!'
            : status === 'error'
              ? 'Error!'
              : 'Submit'}
      </span>
    </button>
  );
}
```

## 🧭 Navigation Examples

### 1. Navigation Menu

```tsx
import { IconHome, IconUser, IconSettings, IconLogout } from '@pelatform/icons';

function NavigationMenu() {
  const menuItems = [
    { icon: IconHome, label: 'Home', href: '/' },
    { icon: IconUser, label: 'Profile', href: '/profile' },
    { icon: IconSettings, label: 'Settings', href: '/settings' },
    { icon: IconLogout, label: 'Logout', href: '/logout' },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            {menuItems.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
```

### 2. Breadcrumb Navigation

```tsx
import { IconHome, IconChevronRight } from '@pelatform/icons';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center space-x-2 text-sm">
      <a
        href="/"
        className="flex items-center text-blue-600 hover:text-blue-800"
      >
        <IconHome className="w-4 h-4" />
      </a>

      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <IconChevronRight className="w-4 h-4 text-gray-400" />
          {item.href ? (
            <a href={item.href} className="text-blue-600 hover:text-blue-800">
              {item.label}
            </a>
          ) : (
            <span className="text-gray-500">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}

// Usage
function App() {
  return (
    <Breadcrumb
      items={[
        { label: 'Products', href: '/products' },
        { label: 'Electronics', href: '/products/electronics' },
        { label: 'Smartphones' },
      ]}
    />
  );
}
```

### 3. Tab Navigation

```tsx
import { IconGrid, IconList, IconCard } from '@pelatform/icons';
import { useState } from 'react';

function TabNavigation() {
  const [activeTab, setActiveTab] = useState('grid');

  const tabs = [
    { id: 'grid', label: 'Grid View', icon: IconGrid },
    { id: 'list', label: 'List View', icon: IconList },
    { id: 'card', label: 'Card View', icon: IconCard },
  ];

  return (
    <div>
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-4">
        {activeTab === 'grid' && <div>Grid view content</div>}
        {activeTab === 'list' && <div>List view content</div>}
        {activeTab === 'card' && <div>Card view content</div>}
      </div>
    </div>
  );
}
```

## 📝 Form Examples

### 1. Input with Icons

```tsx
import {
  IconMail,
  IconLock,
  IconEye,
  IconEyeOff,
  IconSearch,
} from '@pelatform/icons';
import { useState } from 'react';

function FormWithIcons() {
  const [showPassword, setShowPassword] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <form className="space-y-4 max-w-md">
      {/* Email Input */}
      <div className="relative">
        <IconMail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        <input
          type="email"
          placeholder="Email address"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Password Input */}
      <div className="relative">
        <IconLock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
        >
          {showPassword ? (
            <IconEyeOff className="w-5 h-5" />
          ) : (
            <IconEye className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Search Input */}
      <div className="relative">
        <IconSearch className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {searchTerm && (
          <button
            type="button"
            onClick={() => setSearchTerm('')}
            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
          >
            <IconX className="w-5 h-5" />
          </button>
        )}
      </div>
    </form>
  );
}
```

### 2. Form Validation

```tsx
import { IconCheck, IconX, IconAlert } from '@pelatform/icons';
import { useState } from 'react';

function ValidatedForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailValid = email.includes('@') && email.includes('.');
  const passwordValid = password.length >= 8;

  const getValidationIcon = (isValid: boolean, value: string) => {
    if (!value) return null;

    return isValid ? (
      <IconCheck className="w-5 h-5 text-green-500" />
    ) : (
      <IconX className="w-5 h-5 text-red-500" />
    );
  };

  return (
    <form className="space-y-4 max-w-md">
      <div>
        <div className="relative">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full pr-12 py-2 px-3 border rounded-lg ${
              email && !emailValid ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          <div className="absolute right-3 top-3">
            {getValidationIcon(emailValid, email)}
          </div>
        </div>
        {email && !emailValid && (
          <div className="flex items-center space-x-2 mt-1 text-red-600 text-sm">
            <IconAlert className="w-4 h-4" />
            <span>Please enter a valid email address</span>
          </div>
        )}
      </div>

      <div>
        <div className="relative">
          <input
            type="password"
            placeholder="Password (min 8 characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full pr-12 py-2 px-3 border rounded-lg ${
              password && !passwordValid ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          <div className="absolute right-3 top-3">
            {getValidationIcon(passwordValid, password)}
          </div>
        </div>
        {password && !passwordValid && (
          <div className="flex items-center space-x-2 mt-1 text-red-600 text-sm">
            <IconAlert className="w-4 h-4" />
            <span>Password must be at least 8 characters</span>
          </div>
        )}
      </div>
    </form>
  );
}
```

## 🎨 UI Component Examples

### 1. Alert Components

```tsx
import { IconCheck, IconX, IconAlert, IconInfo } from '@pelatform/icons';

interface AlertProps {
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  onClose?: () => void;
}

function Alert({ type, title, message, onClose }: AlertProps) {
  const config = {
    success: {
      icon: IconCheck,
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      iconColor: 'text-green-500',
      titleColor: 'text-green-800',
      messageColor: 'text-green-700',
    },
    error: {
      icon: IconX,
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      iconColor: 'text-red-500',
      titleColor: 'text-red-800',
      messageColor: 'text-red-700',
    },
    warning: {
      icon: IconAlert,
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      iconColor: 'text-yellow-500',
      titleColor: 'text-yellow-800',
      messageColor: 'text-yellow-700',
    },
    info: {
      icon: IconInfo,
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      iconColor: 'text-blue-500',
      titleColor: 'text-blue-800',
      messageColor: 'text-blue-700',
    },
  };

  const {
    icon: Icon,
    bgColor,
    borderColor,
    iconColor,
    titleColor,
    messageColor,
  } = config[type];

  return (
    <div className={`${bgColor} ${borderColor} border rounded-lg p-4`}>
      <div className="flex">
        <Icon className={`w-5 h-5 ${iconColor} mt-0.5`} />
        <div className="ml-3 flex-1">
          <h3 className={`text-sm font-medium ${titleColor}`}>{title}</h3>
          <p className={`mt-1 text-sm ${messageColor}`}>{message}</p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className={`ml-auto -mx-1.5 -my-1.5 ${iconColor} hover:bg-gray-100 rounded-lg p-1.5`}
          >
            <IconX className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

// Usage
function AlertExamples() {
  return (
    <div className="space-y-4">
      <Alert
        type="success"
        title="Success!"
        message="Your changes have been saved successfully."
      />
      <Alert
        type="error"
        title="Error"
        message="There was a problem with your request."
      />
      <Alert
        type="warning"
        title="Warning"
        message="Please review your input before proceeding."
      />
      <Alert
        type="info"
        title="Information"
        message="This feature is currently in beta."
      />
    </div>
  );
}
```

### 2. Card Components

```tsx
import {
  IconHeart,
  IconShare,
  IconBookmark,
  IconMoreVertical,
} from '@pelatform/icons';
import { useState } from 'react';

interface CardProps {
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
}

function Card({ title, description, image, author, date }: CardProps) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <button className="text-gray-400 hover:text-gray-600">
            <IconMoreVertical className="w-5 h-5" />
          </button>
        </div>

        <p className="text-gray-600 mb-4">{description}</p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span>By {author}</span>
          <span>{date}</span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex space-x-4">
            <button
              onClick={() => setLiked(!liked)}
              className={`flex items-center space-x-1 ${
                liked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
              }`}
            >
              <IconHeart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
              <span>Like</span>
            </button>

            <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
              <IconShare className="w-5 h-5" />
              <span>Share</span>
            </button>
          </div>

          <button
            onClick={() => setBookmarked(!bookmarked)}
            className={`${
              bookmarked ? 'text-blue-500' : 'text-gray-500 hover:text-blue-500'
            }`}
          >
            <IconBookmark
              className={`w-5 h-5 ${bookmarked ? 'fill-current' : ''}`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
```

## 🔍 Dynamic Examples

### 1. Icon Search and Picker

```tsx
import { icons } from '@pelatform/icons';
import { categories, type Category } from '@pelatform/icons/categories';
import iconsByCategory from '@pelatform/icons/icons-by-category';
import { useState, useMemo } from 'react';

function IconPicker({ onSelect }: { onSelect: (iconName: string) => void }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredIcons = useMemo(() => {
    // Get icons by category
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

    return results.slice(0, 100); // Limit for performance
  }, [searchTerm, selectedCategory]);

  return (
    <div className="w-full max-w-4xl">
      <div className="mb-4 space-y-4">
        <input
          type="text"
          placeholder="Search icons..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg"
        />

        <div className="flex space-x-2">
          {categories.map((category: Category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                selectedCategory === category.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-8 gap-3 max-h-96 overflow-y-auto border border-gray-200 rounded-lg p-4">
        {filteredIcons.map((iconName) => {
          const IconComponent = icons[iconName as keyof typeof icons];

          return (
            <button
              key={iconName}
              onClick={() => onSelect(iconName)}
              className="flex flex-col items-center p-3 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
              title={iconName}
            >
              <IconComponent className="w-8 h-8 mb-2" />
              <span className="text-xs text-center truncate w-full">
                {iconName.replace('Icon', '')}
              </span>
            </button>
          );
        })}
      </div>

      {filteredIcons.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No icons found for "{searchTerm}"
        </div>
      )}
    </div>
  );
}

// Usage
function App() {
  const [selectedIcon, setSelectedIcon] = useState('');

  return (
    <div>
      <IconPicker onSelect={setSelectedIcon} />
      {selectedIcon && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <p>
            Selected: <code>{selectedIcon}</code>
          </p>
        </div>
      )}
    </div>
  );
}
```

## 🚀 Next Steps

- [Learn about advanced usage patterns](./advanced-usage.md)
- [Explore TypeScript features](./types.md)
- [Check the API reference](./api-reference.md)
