import { execSync } from 'node:child_process';

const entries = [
  'index',
  'categories',
  'dynamic-imports',
  'icon-list',
  'types',
];

interface TypeGenResult {
  entry: string;
  success: boolean;
  error?: string;
  duration: number;
}

function generateTypesForEntry(entry: string): TypeGenResult {
  const startTime = Date.now();
  console.log(`\n📘 Generating types for: ${entry} ...\n`);

  try {
    const shell =
      process.platform === 'win32' ? undefined : ('/bin/bash' as const);

    execSync(
      `bun x rollup -c ./rollup.dts.config.mjs --environment ENTRY:${entry}`,
      {
        stdio: 'inherit',
        ...(shell ? { shell } : {}),
        env: {
          ...process.env,
          NODE_OPTIONS: '--max-old-space-size=8192',
        },
      },
    );

    const duration = Date.now() - startTime;
    console.log(
      `\n✅ ${entry} types generated in ${(duration / 1000).toFixed(2)}s\n`,
    );

    return { entry, success: true, duration };
  } catch (error) {
    const duration = Date.now() - startTime;
    const errorMsg = error instanceof Error ? error.message : String(error);

    console.error(`\n❌ ${entry} type generation failed: ${errorMsg}\n`);

    return { entry, success: false, error: errorMsg, duration };
  }
}

function generateAllTypes(): void {
  console.log('🚀 Starting sequential type generation for all entries...');
  console.log('⚠️  Generating types one at a time to avoid memory issues\n');
  const totalStartTime = Date.now();

  const results: TypeGenResult[] = [];

  // Generate types sequentially (one at a time)
  for (const entry of entries) {
    const result = generateTypesForEntry(entry);
    results.push(result);

    // Stop if type generation failed
    if (!result.success) {
      console.error(`❌ Stopping type generation due to failure in: ${entry}`);
      process.exit(1);
    }
  }

  const totalDuration = Date.now() - totalStartTime;

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📋 Type Generation Summary:');
  console.log('='.repeat(60));

  const successful = results.filter((r) => r.success);
  const failed = results.filter((r) => !r.success);

  console.log(`✅ Successful: ${successful.length}/${results.length}`);
  successful.forEach((result) => {
    console.log(
      `   ✓ ${result.entry} (${(result.duration / 1000).toFixed(2)}s)`,
    );
  });

  if (failed.length > 0) {
    console.log(`\n❌ Failed: ${failed.length}/${results.length}`);
    failed.forEach((result) => {
      console.log(`   ✗ ${result.entry}: ${result.error}`);
    });
  }

  console.log(`\n⏱️  Total time: ${(totalDuration / 1000).toFixed(2)}s`);
  console.log('='.repeat(60));

  if (failed.length > 0) {
    console.error(
      '\n❌ Some type generations failed. Please check the errors above.',
    );
    process.exit(1);
  } else {
    console.log('\n✅ All type definitions generated successfully!');
  }
}

// Run the type generation
try {
  generateAllTypes();
} catch (error) {
  console.error('❌ Unexpected error during type generation:', error);
  process.exit(1);
}
