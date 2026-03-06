# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

`@pelatform/icons` is a React icon library built from SVG sources. The library transforms raw SVG icons (stored in `sources/`, not published) into React components (generated in `src/icons/`) and builds multiple output formats (ESM, CJS, UMD, TypeScript declarations).

**Note**: The `sources/` directory is gitignored and contains private source SVG files. Only the generated React components and distribution files are published.

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
bun run clean:all  # Clean everything + remove node_modules and bun.lock
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

### Package Exports

The `package.json` defines conditional exports for all entry points, supporting:

```bash
# Main entry (all icons)
import { IconHeart } from '@pelatform/icons'

# Aliases for backward compatibility
import { IconOldName } from '@pelatform/icons/aliases'

# Dynamic imports for code-splitting
import iconMap from '@pelatform/icons/dynamic-imports'
const IconComponent = await iconMap['heart']

# List of all available icon names
import iconList from '@pelatform/icons/icon-list'

# TypeScript types
import type { IconProps } from '@pelatform/icons/types'
```

Each entry point supports ESM (`import`), CJS (`require`), and TypeScript (`types`).

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
- `NODE_OPTIONS` - Set to '--max-old-space-size=8192' for memory management (critical for large icon sets)

You can manually build specific entries:

```bash
ENTRY=aliases NODE_ENV=production bun x rollup -c rollup.config.mjs
```

### Build Process Details

The `scripts/build-js.ts` script orchestrates the build process:

- **Sequential builds**: Builds each entry point one at a time to prevent memory issues
- **Error handling**: Stops immediately if any entry fails
- **Performance tracking**: Reports build time for each entry and total duration
- **Cross-platform support**: Detects Windows vs Unix for proper shell execution
- **Summary report**: Shows success/failure count and timings after completion

### Rollup Configuration

- `rollup.config.mjs` - JavaScript bundle configuration
  - External: React and ReactDOM are peer dependencies
  - Advanced tree-shaking enabled with `moduleSideEffects: false`
  - Outputs: ESM, CJS, and UMD (for index entry only)
  - ESBuild target: `es2018` for modern browser support
  - Performance optimizations: `maxParallelFileOps: 20`, cache enabled
  - Inlines dynamic imports for `dynamic-imports` entry
  - UMD build only for `index` entry (named `PelatformIcons`)
- `rollup.dts.config.mjs` - TypeScript declaration generation

## Icon Generation Pipeline

### Build Artifacts

The preparation pipeline generates several metadata files in the `out/` directory:

- `icon-category.json` - Maps each icon name to its category and whether it has a filled variant
- `icon-sources.json` - Complete catalog of all icon sources with metadata
- `icon-stats.json` - Statistics about icons organized by category

These files are used during the React component generation and for documentation purposes.

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

The dynamic imports are chunked into groups of 100 icons per chunk for better IDE performance and reduced memory consumption during development. Each chunk is a separate object that gets merged into the final export.

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
    └── shared.ts          # Shared utilities (naming, path helpers, chunking)

icons/                     # Generated: organized SVG files by category
out/                       # Generated: build artifacts (icon-category.json)
dist/                      # Build output
    ├── esm/               # ES modules
    ├── cjs/               # CommonJS modules
    ├── umd/               # UMD bundles
    └── types/             # TypeScript declarations
```

### Utility Functions

The `scripts/utils/shared.ts` file provides reusable utilities used across the pipeline:

- `ensureDirectoryExists()` - Creates directories recursively
- `componentNameToKebabCase()` - Converts PascalCase to kebab-case (e.g., `IconCatDog` → `cat-dog`)
- `getComponentName()` - Converts kebab-case to PascalCase with Icon prefix (e.g., `cat-dog` → `IconCatDog`)
- `chunkArray()` - Splits arrays into smaller chunks (used for dynamic import chunking)
- `formatItemsInGroups()` - Formats items for readable file output
- `runWithConcurrency()` - Executes async tasks with concurrency control

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

- `target: ES2020`, `module: ESNext`, `moduleResolution: node`
- `lib: ["ES2020", "DOM"]` for browser APIs
- `jsx: react-jsx` (automatic JSX runtime)
- `strict: true` with consistent casing and synthetic default imports
- Declarations and source maps enabled
- `resolveJsonModule: true` for importing JSON files
- `esModuleInterop: true` for better interop
- `skipLibCheck: true` to skip type checking of dependencies
- Excludes: `node_modules`, `dist`, `out`, `scripts`

## Code Style

The project uses Prettier for code formatting with these settings:

- **Print width**: 80 characters
- **Tab width**: 2 spaces
- **Quotes**: Single quotes (except JSX uses double quotes)
- **Trailing commas**: All
- **Semicolons**: Required
- **Line endings**: LF
- **Bracket spacing**: Enabled
- **Bracket same line**: False (hanging brackets)

### Files Excluded from Formatting

The `.prettierignore` file excludes auto-generated files from formatting:

- Generated source directories: `dist/`, `out/`, `sources/`, `icons/`
- Generated icon files: `src/icons/`
- Generated exports: `src/aliases.ts`, `src/dynamic-imports.ts`, `src/icon-list.ts`

This ensures that manually-written source files are formatted, while auto-generated files maintain their generator's formatting.

Run `bun run format` to format code before committing.

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

## Documentation

User-facing documentation is located in the `docs/` directory:

- `docs/README.md` - Main documentation index
- `docs/getting-started.md` - Installation and setup
- `docs/basic-usage.md` - Basic usage examples
- `docs/advanced-usage.md` - Advanced patterns
- `docs/types.md` - TypeScript support
- `docs/aliases.md` - Icon name aliases
- `docs/dynamic-imports.md` - Dynamic loading patterns
- `docs/api-reference.md` - Complete API reference
- `docs/examples.md` - Usage examples

When updating icon behavior or adding new features, update the relevant documentation files.

## CI/CD & Release Process

The project uses GitHub Actions for automated releases triggered by version tags:

### Release Workflow

`.github/workflows/release.yml` handles the release process:

- **Triggers**: Push to `v*` tags or manual workflow dispatch
- **Build process**: Separates JS and TS builds (same as local `build:js` and `build:types`)
- **Changelog**: Automatically generates changelog using `changelogithub` on tag push
- **NPM publishing**:
  - Checks if version already exists on NPM (skips if published)
  - Publishes with public access
  - Uses `NPM_TOKEN` secret for authentication
  - Sets `NODE_OPTIONS=--max-old-space-size=8192` for large builds

### Publishing a New Release

```bash
# 1. Bump version (uses bumpp)
bun run bump

# 2. Commit the version changes
git add package.json bun.lock
git commit -m "chore: bump version to x.x.x"

# 3. Create and push tag
git tag vx.x.x
git push origin vx.x.x

# 4. GitHub Actions will automatically:
#    - Generate changelog
#    - Build packages
#    - Publish to NPM
```

**Note**: The workflow uses `bun install --frozen-lockfile` to ensure consistent dependencies.

## Git Workflow

### Gitignore Configuration

The `.gitignore` file excludes these directories from version control:

- `dist/` - Build output (generated during build)
- `node_modules/` - Dependencies
- `sources/` - Private source SVG files (not published)

**Important**: The `sources/` directory contains private source SVG files that are never committed to git. Only the generated React components and distribution files are published.

### Typical Git Workflow

```bash
# 1. Add new icons to sources/outline/ and sources/filled/
# 2. Run preparation pipeline
bun run pre

# 3. Build and format everything
bun run build

# 4. Check changes (should only show generated files and config)
git status

# 5. Commit the changes
git add .
git commit -m "feat: add new icons"

# 6. For releases, use version tags
git tag vx.x.x
git push origin vx.x.x
```

## Important Notes

- **Package manager**: Always use **Bun** (not npm/pnpm) for all preparation and build scripts
- **Private sources**: The `sources/` directory is gitignored and contains private source SVG files - do not commit these files
- **Build optimization**: Builds are sequential (not parallel) to avoid memory issues with large icon sets (5926+ icons)
- **Source organization**: Source SVGs are organized by category into `icons/` directory before React conversion
- **JSX runtime**: Icon components use automatic JSX runtime - no `import React` needed in components
- **Dynamic imports**: Chunked into groups of 100 icons per chunk for better IDE performance and reduced memory consumption
- **Filled variants**: Automatically get `Filled` suffix in component names (e.g., `IconHeartFilled`)
- **Memory management**: Build process uses `NODE_OPTIONS=--max-old-space-size=8192` to handle large icon sets
- **React support**: The library supports both React 18 and React 19 (via peer dependencies `>=18.0.0 || >=19.0.0-rc.0`)
- **TypeScript targets**: ES2020 with strict mode enabled for modern JavaScript features
- **Tree-shaking**: Configured with `moduleSideEffects: false` in both Rollup and package.json for optimal bundle size
- **UMD builds**: Only generated for the `index` entry point (not available for aliases, dynamic-imports, etc.)
- **Package exports**: All entry points support ESM (`import`), CJS (`require`), and TypeScript (`types`) for maximum compatibility
- The `sources/` directory is gitignored and contains private source SVG files - do not commit these files
- Builds are sequential (not parallel) to avoid memory issues with large icon sets
- Source SVGs are organized by category into `icons/` directory before React conversion
- Icon components use automatic JSX runtime - no `import React` needed in components
- Dynamic imports are chunked (100 icons per chunk) for better IDE performance
- Filled variants automatically get `Filled` suffix in component names
- Build process uses `NODE_OPTIONS=--max-old-space-size=8192` to handle large icon sets
- The library supports both React 18 and React 19 (via peer dependencies `>=18.0.0 || >=19.0.0-rc.0`)
- TypeScript configuration targets ES2020 with strict mode enabled
- Tree-shaking is configured with `moduleSideEffects: false` for optimal bundle size
- UMD build is only generated for the `index` entry point (not for aliases, dynamic-imports, etc.)
- The `sideEffects: false` in package.json enables better tree-shaking by bundlers

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

### Import Errors in Consumer Projects

If consumers see import errors:

- Verify the package exports in `package.json` match the built files
- Check that `dist/` directory contains all expected entry points
- Ensure `sideEffects: false` is set in package.json for optimal tree-shaking
- For UMD builds, only the `index` entry is available (no UMD for aliases, dynamic-imports, etc.)
