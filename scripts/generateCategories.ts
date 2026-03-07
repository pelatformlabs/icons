import { readdir, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';
import { ensureDirectoryExists } from './utils/shared.ts';

interface Category {
  id: string;
  title: string;
}

/**
 * Converts Title Case or any case to kebab-case lowercase
 * e.g., "Device Mobile" → "device-mobile", "Brand Logos" → "brand-logos"
 */
function toKebabCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/_+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing dashes
}

async function generateCategories(): Promise<void> {
  console.log('🚀 Starting categories generation...');

  const iconsDir = join('icons');
  const outputPath = join('src', 'categories.ts');

  if (!existsSync(iconsDir)) {
    console.error('❌ Icons directory not found:', iconsDir);
    process.exit(1);
  }

  try {
    // Read all directories in icons/ folder
    const entries = await readdir(iconsDir, { withFileTypes: true });
    const folders = entries
      .filter((entry) => entry.isDirectory())
      .map((dir) => dir.name)
      .sort();

    console.log(`📊 Found ${folders.length} category folders`);

    // Generate categories array
    const categories: Category[] = [
      { id: 'all', title: 'All' },
      ...folders.map((folder) => ({
        id: toKebabCase(folder),
        title: folder,
      })),
    ];

    // Generate TypeScript file content
    const content = `// This file is auto-generated. Do not edit manually.
// Run 'bun run pre' to regenerate this file.

export interface Category {
  id: string
  title: string
}

export const categories: Category[] = ${JSON.stringify(categories, null, 2)};

export default categories;
`;

    // Ensure output directory exists
    await ensureDirectoryExists('src');

    // Write to file
    await writeFile(outputPath, content, 'utf-8');

    console.log('✅ Categories generation completed successfully!');
    console.log(`📂 Categories file generated: ${outputPath}`);
    console.log(`📝 Generated ${categories.length} categories`);
    console.log(`   Categories: ${categories.map((c) => c.id).join(', ')}`);
  } catch (error) {
    console.error('❌ Error generating categories:', error);
    process.exit(1);
  }
}

// Run the generator
generateCategories().catch((error) => {
  console.error('❌ Unexpected error:', error);
  process.exit(1);
});
