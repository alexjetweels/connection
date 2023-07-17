import { resolve } from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    outDir: 'build',
    sourcemap: true,
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
    preserveSymlinks: true,
  },
  plugins: [
    checker({
      typescript: true,
    }),
    react(),
    svgr(),
  ],
});
