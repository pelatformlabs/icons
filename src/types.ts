import type React from 'react';

// ============================================================================
// CORE ICON TYPES
// ============================================================================

/**
 * Props accepted by every icon component
 *
 * @example
 * import { IconHeart } from '@pelatform/icons'
 * import type { IconProps } from '@pelatform/icons/types'
 *
 * const MyIcon = (props: IconProps) => <IconHeart {...props} />
 *
 * // Usage:
 * <IconHeart className="text-red-500 size-6" data-slot="heart-icon" />
 */
export interface IconProps {
  /** Additional CSS classes appended to default classes */
  className?: string;
  /** Component identifier (useful for testing, debugging, or styling) */
  'data-slot'?: string;
  /** Other props passed-through to SVG element */
  [key: string]: any;
}

/**
 * Type for icon component (Function Component with IconProps)
 *
 * @example
 * import type { IconComponent } from '@pelatform/icons/types'
 *
 * const createIcon = (name: string): IconComponent => {
 *   return (props) => <svg {...props}></svg>
 * }
 */
export type IconComponent = React.FC<IconProps>;

// ============================================================================
// ICON NAME & REFERENCE TYPES
// ============================================================================

/**
 * Union type of all available icon names (kebab-case)
 * Auto-generated from `icon-list.ts`
 *
 * @example
 * import type { IconName } from '@pelatform/icons/types'
 *
 * const iconName: IconName = 'heart' // Valid
 * const invalid: IconName = 'invalid-icon' // Type error
 *
 * // For type-safe icon names
 * function getIcon(name: IconName) {
 *   return iconMap[name]
 * }
 */
export type IconName = (typeof import('./icon-list').default)[number];

/**
 * Available icon variants
 * Each icon can have outline or filled variant
 *
 * @example
 * import type { IconVariant } from '@pelatform/icons/types'
 *
 * const variant: IconVariant = 'filled'
 *
 * // In component:
 * import { IconHeart, IconHeartFilled } from '@pelatform/icons'
 */
export type IconVariant = 'outline' | 'filled';

/**
 * Union type of all available icon categories
 * Auto-generated from `categories.ts`
 *
 * @example
 * import type { IconCategory } from '@pelatform/icons/types'
 * import { categories } from '@pelatform/icons/categories'
 *
 * const filterByCategory = (category: IconCategory) => {
 *   return categories.find(cat => cat.id === category)
 * }
 */
export type IconCategory =
  (typeof import('./categories').categories)[number]['id'];

// ============================================================================
// UTILITY TYPES
// ============================================================================

/**
 * Convert icon name (kebab-case) to component name (PascalCase)
 *
 * @example
 * import type { IconNameToComponent } from '@pelatform/icons/types'
 *
 * type HeartComponent = IconNameToComponent<'heart'> // 'IconHeart'
 * type HeartFilledComponent = IconNameToComponent<'heart-filled'> // 'IconHeartFilled'
 */
export type IconNameToComponent<T extends IconName> =
  T extends `${infer First}-${infer Rest}`
    ? `Icon${Capitalize<First>}${Capitalize<Rest>}`
    : T extends `${infer Name}`
      ? `Icon${Capitalize<Name>}`
      : never;

/**
 * Convert component name (PascalCase) to icon name (kebab-case)
 *
 * @example
 * import type { ComponentNameToIcon } from '@pelatform/icons/types'
 *
 * type HeartIcon = ComponentNameToIcon<'IconHeart'> // 'heart'
 * type HeartFilledIcon = ComponentNameToIcon<'IconHeartFilled'> // 'heart-filled'
 */
export type ComponentNameToIcon<T extends string> = T extends `Icon${infer U}`
  ? Lowercase<U extends `${infer First}-${infer Rest}` ? First : U>
  : never;

// ============================================================================
// HELPER TYPES FOR ADVANCED USAGE
// ============================================================================

/**
 * Type for icon metadata (internal usage)
 * Used by the system to store icon information
 */
export interface IconMetadata {
  /** Icon name in kebab-case */
  name: IconName;
  /** Component name in PascalCase */
  component: string;
  /** Icon category */
  category: IconCategory;
  /** Icon variant (outline/filled) */
  variant: IconVariant;
  /** Tags for searching (optional) */
  tags?: string[];
}

/**
 * Props for icon search/filter functionality
 *
 * @example
 * import type { IconSearchOptions } from '@pelatform/icons/types'
 *
 * const searchOptions: IconSearchOptions = {
 *   category: 'animals',
 *   variant: 'outline',
 *   query: 'cat',
 *   limit: 10
 * }
 *
 * const icons = searchIcons(searchOptions)
 */
export interface IconSearchOptions {
  /** Filter by category */
  category?: IconCategory;
  /** Filter by variant */
  variant?: IconVariant;
  /** Search query string */
  query?: string;
  /** Limit number of results */
  limit?: number;
}
