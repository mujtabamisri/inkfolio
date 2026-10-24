import { defineConfig } from 'vite';

export default defineConfig({
  // Actions supplies the repository base path; localhost uses root.
  base: process.env.VITE_BASE_PATH || '/',
});
