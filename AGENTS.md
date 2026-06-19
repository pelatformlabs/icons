# AGENTS.md

## Critical Constraints

- **Use Bun** for all commands. Do not use npm/pnpm.
- **`sources/` is gitignored**. Contains private SVGs — never commit.
- **Memory**: builds set `NODE_OPTIONS=--max-old-space-size=8192` automatically via `scripts/build-js.ts`. Don't change heap size without cause.
- **Builds are sequential** (not parallel) to avoid OOM with large icon sets.

## Commands

```bash
bun run pre          # Full generation pipeline (prepare → convertToReact → generateAdditionalFiles)
bun run build        # Full clean build: clean → format → pre → build:js → build:types
bun run build:js     # Build JS bundles only
bun run build:types  # Generate .d.ts only
bun run types:check  # tsc --noEmit (type-check without emit)
bun run clean        # Remove all generated dirs/files
bun run format       # Prettier
bun run bump         # Bump version (bumpp)
```

## Pipeline Order (when invoked by `bun run pre`)

1. `scripts/prepare/prepare.ts` — Orchestrates: checkSource → buildFilled → buildCategory → organize → iconStats
2. `scripts/convertToReact.ts` — SVG → React components (`src/icons/*.tsx` + `src/icons/index.ts`)
3. `scripts/generateAdditionalFiles.ts` — Sequentially runs 5 generators:
   - `generateAliases.ts` → `src/aliases.ts`
   - `generateCategories.ts` → `src/categories.ts`
   - `generateDynamicImports.ts` → `src/dynamic-imports.ts`
   - `generateIconsByCategory.ts` → `src/icons-by-category.ts`
   - `generateIconList.ts` → `src/icon-list.ts`

## Entry Points (matched to source files → dist output)

| Entry | Source | Package Export | Notes |
|-------|--------|---------------|-------|
| `index` | `src/index.ts` → `src/icons/index.ts` + `src/aliases.ts` | `.` | UMD too (`dist/umd/`) |
| `categories` | `src/categories.ts` | `./categories` | |
| `dynamic-imports` | `src/dynamic-imports.ts` | `./dynamic-imports` | 100 icons/chunk |
| `icons-by-category` | `src/icons-by-category.ts` | `./icons-by-category` | |
| `icon-list` | `src/icon-list.ts` | `./icon-list` | |
| `types` | `src/types.ts` | `./types` | |

## Auto-Generated Files (do not edit manually)

- `src/icons/**` (all `.tsx` + `index.ts`)
- `src/aliases.ts`
- `src/categories.ts`
- `src/dynamic-imports.ts`
- `src/icons-by-category.ts`
- `src/icon-list.ts`

Hand-written source files: `src/index.ts`, `src/types.ts`, `scripts/**`

## Icon Naming

- SVG filename: `kebab-case.svg`
- Component: `IconPascalCase` (filled = `IconPascalCaseFilled`)
- Dynamic import key: kebab-case

## Adding Icons

1. Place outline SVGs in `sources/outline/`, filled in `sources/filled/`
2. Add `<!-- category: CategoryName -->` comment in SVG
3. Run `bun run pre` then `bun run build`

## Adding Aliases

Edit `sources/aliases.json`, then `bun run pre`.

## Release Process

```bash
bun run bump                                    # interactively bump version
git add package.json bun.lock
git commit -m "chore: bump version to x.x.x"
git tag vx.x.x
git push origin vx.x.x                          # CI auto-builds & publishes
```

## Relevant Config Files

- `rollup.config.mjs` — JS bundling (ESM/CJS/UMD, React external, tree-shaking)
- `rollup.dts.config.mjs` — TS declaration generation
- `tsconfig.json` — target ES2020, module ESNext, jsx react-jsx
- `prettier.config.mjs` + `.prettierignore` — note: all auto-generated files excluded from formatting

CLAUDE.md is a pointer to this file. No other agent instruction files exist.