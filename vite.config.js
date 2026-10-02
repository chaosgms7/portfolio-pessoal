import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    // permite o import "@/lib/utils" usado pelo InteractiveGridPattern
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) }
  }
});
