import { build } from 'vite';

async function runBuild() {
  console.log('Starting programmatic Vite build...');
  try {
    await build({
      configFile: './vite.config.js'
    });
    console.log('Build completed successfully!');
  } catch (err) {
    console.error('Build error:', err);
    process.exit(1);
  }
}

runBuild();
