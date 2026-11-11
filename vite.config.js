// VEX Portfolio v2.0.0
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [tailwindcss()],
  server: { port: 3000 },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        privacy: resolve(import.meta.dirname, 'privacy.html'),
        cgu: resolve(import.meta.dirname, 'cgu.html'),
        flair: resolve(import.meta.dirname, 'flair/index.html'),
        flairPrivacy: resolve(import.meta.dirname, 'flair/confidentialite.html'),
        flairTerms: resolve(import.meta.dirname, 'flair/cgu.html'),
      },
    },
  },
});
