import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio_Ilyes_Najjari/', // Chemin de base pour GitHub Pages
});

