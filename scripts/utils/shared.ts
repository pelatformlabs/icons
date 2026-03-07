import { mkdir } from 'fs/promises';

/**
 * Ensures a directory exists, creating it if necessary
 */
export async function ensureDirectoryExists(dirPath: string): Promise<void> {
  try {
    await mkdir(dirPath, { recursive: true });
  } catch (error) {
    // Directory might already exist, ignore error
  }
}

/**
 * Converts a component name (PascalCase) to kebab-case
 * Example: IconCatDog -> cat-dog
 */
export function componentNameToKebabCase(componentName: string): string {
  // Remove 'Icon' prefix and convert PascalCase to kebab-case
  const withoutIcon = componentName.replace(/^Icon/, '');

  return withoutIcon
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, ''); // Remove leading dash
}

/**
 * Converts a kebab-case file name to PascalCase component name
 * Example: cat-dog -> IconCatDog
 */
export function getComponentName(fileName: string): string {
  // Convert kebab-case to PascalCase and add Icon prefix
  const pascalCase = fileName
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
  return `Icon${pascalCase}`;
}

/**
 * Converts a string to kebab-case
 * Example: 'Category Name' -> 'category-name'
 */
export function toKebabCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Chunks an array into smaller arrays of specified size
 */
export function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

/**
 * Format items into readable groups for file output
 */
export function formatItemsInGroups(
  items: string[],
  groupSize: number = 5,
  formatter: (item: string) => string = (item) => `"${item}"`,
): string {
  let result = '';
  for (let i = 0; i < items.length; i += groupSize) {
    const group = items.slice(i, i + groupSize);
    const formattedGroup = group.map(formatter).join(', ');
    result += `  ${formattedGroup}`;

    if (i + groupSize < items.length) {
      result += ',';
    }
    result += '\n';
  }
  return result;
}

/**
 * Run async tasks with concurrency limit
 */
export async function runWithConcurrency<T, R>(
  items: T[],
  concurrency: number,
  handler: (item: T) => Promise<R>,
): Promise<R[]> {
  const results: R[] = [];
  const executing: Promise<void>[] = [];

  for (const item of items) {
    const promise = handler(item).then((result) => {
      results.push(result);
      executing.splice(executing.indexOf(promise), 1);
    });

    executing.push(promise);

    if (executing.length >= concurrency) {
      await Promise.race(executing);
    }
  }

  await Promise.all(executing);
  return results;
}
