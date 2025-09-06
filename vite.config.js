import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://project-lucky7.onrender.com',
        changeOrigin: true,
        secure: true,
      },
    },
  },

  plugins: [react()],
  build: {
    sourcemap: true,
  },
});
