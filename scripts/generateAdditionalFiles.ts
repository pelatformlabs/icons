import { spawn } from 'child_process';
import { join } from 'path';

interface ScriptResult {
  name: string;
  success: boolean;
  error?: string;
}

function runScript(
  scriptPath: string,
  scriptName: string,
): Promise<ScriptResult> {
  return new Promise((resolve) => {
    console.log(`🚀 Running ${scriptName}...`);

    const child = spawn('bun', [scriptPath], {
      stdio: 'inherit',
      shell: true,
    });

    child.on('close', (code) => {
      if (code === 0) {
        console.log(`✅ ${scriptName} completed successfully`);
        resolve({ name: scriptName, success: true });
      } else {
        const error = `${scriptName} failed with exit code ${code}`;
        console.error(`❌ ${error}`);
        resolve({ name: scriptName, success: false, error });
      }
    });

    child.on('error', (error) => {
      const errorMsg = `${scriptName} failed to start: ${error.message}`;
      console.error(`❌ ${errorMsg}`);
      resolve({ name: scriptName, success: false, error: errorMsg });
    });
  });
}

async function generateAdditionalFiles(): Promise<void> {
  console.log('🚀 Starting additional files generation...');
  console.log(
    '📂 Generating aliases, categories, dynamic imports, icons-by-category, and icon list files...\n',
  );

  const scripts = [
    { path: join('scripts', 'generateAliases.ts'), name: 'Aliases Generator' },
    {
      path: join('scripts', 'generateCategories.ts'),
      name: 'Categories Generator',
    },
    {
      path: join('scripts', 'generateDynamicImports.ts'),
      name: 'Dynamic Imports Generator',
    },
    {
      path: join('scripts', 'generateIconsByCategory.ts'),
      name: 'Icons By Category Generator',
    },
    {
      path: join('scripts', 'generateIconList.ts'),
      name: 'Icon List Generator',
    },
  ];

  const results: ScriptResult[] = [];

  // Run scripts sequentially
  for (const script of scripts) {
    const result = await runScript(script.path, script.name);
    results.push(result);
    console.log(''); // Add spacing between scripts
  }

  // Summary
  console.log('📋 Generation Summary:');
  const successful = results.filter((r) => r.success);
  const failed = results.filter((r) => !r.success);

  console.log(`✅ Successful: ${successful.length}/${results.length}`);
  successful.forEach((result) => {
    console.log(`   ✓ ${result.name}`);
  });

  if (failed.length > 0) {
    console.log(`❌ Failed: ${failed.length}/${results.length}`);
    failed.forEach((result) => {
      console.log(`   ✗ ${result.name}: ${result.error}`);
    });
  }

  if (failed.length > 0) {
    console.log('\n❌ Some generators failed. Please check the errors above.');
    process.exit(1);
  } else {
    console.log('\n✅ All additional files generated successfully!');
    console.log('📂 Generated files:');
    console.log('   - src/aliases.ts');
    console.log('   - src/categories.ts');
    console.log('   - src/dynamic-imports.ts');
    console.log('   - src/icons-by-category.ts');
    console.log('   - src/icon-list.ts');
  }
}

// Run the script
generateAdditionalFiles().catch((error) => {
  console.error('❌ Unexpected error:', error);
  process.exit(1);
});
