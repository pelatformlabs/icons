# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

`@pelatform/icons` is a React icon library built from SVG sources. The library transforms raw SVG icons (stored in `sources/`) into React components (generated in `src/icons/`) and builds multiple output formats (ESM, CJS, UMD, TypeScript declarations).

## Development Commands

### Build Commands

```bash
# Full build pipeline (clean, format, prepare, build JS, build types)
bun run build

# Individual build steps
bun run build:js    # Build JavaScript bundles (ESM, CJS, UMD)
bun run build:types # Generate TypeScript declarations

# Type checking without emitting
bun run types:check
```

### Preparation Pipeline

```bash
bun run pre
```

The `pre` command runs the icon generation pipeline in sequence:

1. `bun scripts/prepare/prepare.ts` - Orchestrates the entire preparation pipeline
2. `bun scripts/convertToReact.ts` - Converts SVGs to React components
3. `bun scripts/generateAdditionalFiles.ts` - Generates aliases, dynamic imports, and icon list

### Individual Preparation Scripts

```bash
# Icon preparation (organizes and builds from sources/)
bun scripts/prepare/prepare.ts

# Convert organized SVGs to React components
bun scripts/convertToReact.ts

# Generate helper files
bun scripts/generateAliases.ts           # Creates src/aliases.ts
bun scripts/generateDynamicImports.ts    # Creates src/dynamic-imports.ts
bun scripts/generateIconList.ts          # Creates src/icon-list.ts
```

### Utility Commands

```bash
bun run clean      # Remove generated directories (icons/, out/, sources/filled-suffix/)
bun run format     # Format code with Prettier
bun run bump       # Bump package version (uses bumpp)
```

## Build Architecture

### Entry Points

The build system produces five separate entry points:

- `index` - Main icon exports (includes all icons from `src/icons/index.ts`)
- `aliases` - Alternative icon names for backward compatibility
- `dynamic-imports` - Chunked dynamic import map for code-splitting
- `icon-list` - Array of all available icon names (kebab-case)
- `types` - TypeScript type definitions

### Build System

- **JavaScript bundling**: Rollup via `scripts/build-js.ts`
  - Sequential builds for each entry point (prevents memory issues)
  - Environment variable `ENTRY` controls which entry to build
  - Environment variable `NODE_ENV=production` enables minification
  - Sets `NODE_OPTIONS=--max-old-space-size=8192` for large builds
- **Type generation**: Rollup with DTS plugin via `scripts/build-ts.ts`
  - Generates `.d.ts` files for all entry points

### Environment Variables

The build system uses these environment variables (set automatically by scripts):

- `ENTRY` - Which entry point to build (index, aliases, dynamic-imports, icon-list, types)
- `NODE_ENV` - Set to 'production' for minified builds
- `NODE_OPTIONS` - Set to '--max-old-space-size=8192' for memory management

You can manually build specific entries:
```bash
ENTRY=aliases NODE_ENV=production bun x rollup -c rollup.config.mjs
```

### Rollup Configuration

- `rollup.config.mjs` - JavaScript bundle configuration
  - External: React and ReactDOM are peer dependencies
  - Advanced tree-shaking enabled
  - Outputs: ESM, CJS, and UMD (for index entry only)
- `rollup.dts.config.mjs` - TypeScript declaration generation

## Icon Generation Pipeline

### Source Structure

```
sources/
├── outline/              # Base outline SVG icons
├── filled/               # Filled variant SVG icons
├── filled-suffix/        # Generated: filled icons with "-filled" suffix
└── brand-pelatform.svg   # Custom brand icon
```

### Pipeline Stages

1. **prepare/prepare.ts** - Main orchestration script that runs:
   - `checkSource.ts` - Validates source SVG files
   - `buildFilled.ts` - Copies `filled/*.svg` to `filled-suffix/[name]-filled.svg`
   - `buildCategory.ts` - Extracts category metadata from SVG comments, creates `out/icon-category.json`
   - `organize.ts` - Organizes SVGs into category folders under `icons/`
   - `iconStats.ts` - Generates icon statistics

2. **convertToReact.ts** - Transforms organized SVGs to React components:
   - Uses `@svgr/core` for SVG-to-JSX conversion
   - Wraps each icon with a custom component template
   - Applies CSS classes: `pelatform-icons pelatform-icon-[name] size-4`
   - Default size is `size-4` unless user provides a `size-*` class
   - Components use automatic JSX runtime
   - Outputs to `src/icons/[ComponentName].tsx`

3. **generateAdditionalFiles.ts** - Runs three generators:
   - `generateAliases.ts` - Creates alias exports from `sources/aliases.json`
   - `generateDynamicImports.ts` - Creates chunked dynamic import map (100 icons per chunk)
   - `generateIconList.ts` - Creates kebab-case icon name array

### Icon Naming Convention

- **SVG filename**: `kebab-case.svg` (e.g., `device-mobile.svg`)
- **Component name**: `IconPascalCase` (e.g., `IconDeviceMobile`)
- **Filled variant**: Component name gets `Filled` suffix (e.g., `IconDeviceMobileFilled`)
- **Dynamic import key**: kebab-case (e.g., `'device-mobile'`)

### SVG Metadata Format

SVG files may contain comment blocks with metadata:

```html
<!--
category: Devices
-->
```

### Category Organization

Icons are organized into categories (Animals, Arrows, Brand, Devices, etc.). The `organize.ts` script:

- Reads category metadata from `out/icon-category.json`
- Creates category folders under `icons/`
- Copies and cleans SVG content (removes comments, minifies)

## Project Structure

```
src/
├── icons/
│   ├── index.ts           # Auto-generated: exports all icon components
│   └── *.tsx              # Individual icon components (auto-generated)
├── index.ts               # Main entry: re-exports icons, aliases, and types
├── aliases.ts             # Auto-generated: alternative icon names
├── dynamic-imports.ts     # Auto-generated: dynamic import map
├── icon-list.ts           # Auto-generated: array of icon names
└── types.ts               # TypeScript type definitions

scripts/
├── prepare/               # Icon preparation pipeline
│   ├── prepare.ts         # Main orchestration
│   ├── buildFilled.ts     # Create filled-suffix variants
│   ├── buildCategory.ts   # Extract category metadata
│   ├── organize.ts        # Organize SVGs by category
│   ├── checkSource.ts     # Validate source files
│   └── iconStats.ts       # Generate statistics
├── convertToReact.ts      # SVG to React conversion
├── generateAdditionalFiles.ts  # Orchestrate file generators
├── generateAliases.ts     # Generate aliases.ts
├── generateDynamicImports.ts  # Generate dynamic-imports.ts
├── generateIconList.ts    # Generate icon-list.ts
├── build-js.ts            # Build JavaScript bundles
├── build-ts.ts            # Generate TypeScript declarations
├── clean.ts               # Clean generated files
└── utils/
    └── shared.ts          # Shared utilities (naming, path helpers)

icons/                     # Generated: organized SVG files by category
out/                       # Generated: build artifacts (icon-category.json)
dist/                      # Build output
    ├── esm/               # ES modules
    ├── cjs/               # CommonJS modules
    ├── umd/               # UMD bundles
    └── types/             # TypeScript declarations
```

## Adding New Icons

To add new icons to the library:

1. Place outline SVG files in `sources/outline/`
2. Optionally place filled variants in `sources/filled/` (same name, without `-filled` suffix)
3. Add SVG metadata comment with category:
   ```html
   <!--
   category: Devices
   -->
   ```
4. Run `bun run pre` to regenerate all files
5. Run `bun run build` to build the distribution files

**Workflow**:
- `bun run pre` - Regenerates everything (fastest for development iterations)
- `bun run build` - Full clean build from scratch (use before publishing)
- Individual scripts can be run for specific tasks (e.g., `bun scripts/prepare/buildCategory.ts`)

## Aliases System

The library supports icon name aliases for backward compatibility. Aliases are defined in `sources/aliases.json`:

```json
{
  "outline": {
    "old-name": "new-name"
  },
  "filled": {
    "old-filled-name": "new-filled-name"
  }
}
```

When aliases are added:
1. Update `sources/aliases.json`
2. Run `bun run pre` to regenerate `src/aliases.ts`
3. The generated aliases.ts will export old names pointing to new icon components

## Component Template

Generated icon components follow this template:
- Apply CSS classes: `pelatform-icons pelatform-icon-[name] size-4`
- Support custom `className` prop (appended to default classes)
- Include `data-slot` attribute for component identification
- Default size is `size-4` unless user provides a `size-*` class
- All props are passed through to the SVG element

Example usage:
```tsx
import { IconDeviceMobile } from '@pelatform/icons';

// Default size (size-4)
<IconDeviceMobile />

// Custom size (overrides default)
<IconDeviceMobile className="size-6 text-blue-500" />

// With data-slot
<IconDeviceMobile data-slot="my-icon" />
```

## TypeScript Configuration

- `target: ES2020`, `module: ESNext`
- `jsx: react-jsx` (automatic JSX runtime)
- Strict mode enabled
- Declarations and source maps enabled

## Dependencies

### Runtime

- `react` (peer dependency, >=18 or >=19-rc)
- `react-dom` (peer dependency, >=18 or >=19-rc)

### Build Tools

- `rollup` - Module bundler
- `@svgr/core` - SVG to React component transformation
- `typescript` - Type checking and declaration generation
- `esbuild` (via rollup plugin) - Minification/transpilation
- `prettier` - Code formatting

## Important Notes

- All preparation scripts use **Bun** for execution (not npm/pnpm)
- Builds are sequential (not parallel) to avoid memory issues with large icon sets
- Source SVGs are organized by category into `icons/` directory before React conversion
- Icon components use automatic JSX runtime - no `import React` needed in components
- Dynamic imports are chunked (100 icons per chunk) for better IDE performance
- Filled variants automatically get `Filled` suffix in component names
- Build process uses `NODE_OPTIONS=--max-old-space-size=8192` to handle large icon sets

## Troubleshooting

### Build Memory Issues
If builds fail with out-of-memory errors:
- The build system already uses sequential builds and increased Node.js heap size
- Close other memory-intensive applications
- Check that `NODE_OPTIONS=--max-old-space-size=8192` is set (handled automatically by build-js.ts)

### Type Errors After Icon Generation
After running `bun run pre`, if you see type errors:
- Run `bun run types:check` to see detailed TypeScript errors
- Ensure all generated files in `src/icons/` are properly formatted
- Check that `src/icons/index.ts` exports all components

### Missing Icons After Build
If icons don't appear in the build output:
- Verify source SVGs exist in `sources/outline/` and/or `sources/filled/`
- Check that SVG files have proper `.svg` extension
- Ensure category metadata format is correct (if using categories)
- Run `bun run pre` again to regenerate all intermediate files
- Check `out/icon-category.json` was generated successfully
