import { exec } from 'node:child_process';
import { promisify } from 'node:util';

const run = promisify(exec);

async function main() {
  try {
    console.log('▶️ Running remove all prepare...');
    await run('rimraf icons out sources/filled-suffix');

    console.log('▶️ Running remove all prebuild...');
    await run(
      'rimraf dist src/icons src/aliases.ts src/categories.ts src/dynamic-imports.ts src/icons-by-category.ts src/icon-list.ts',
    );
  } catch (error) {
    console.error('❌ Script failed:', error);
    process.exit(1);
  }
}

main();
