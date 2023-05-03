import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import eslint from 'vite-plugin-eslint';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src/'),
    },
  },

  server: {
    port: 8000,
    open: true,
    strictPort: true,
    proxy: {
      '/api/v2': {
        target: 'http://localhost:3000',
      },
    },
  },
});
