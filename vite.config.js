import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        music: resolve(__dirname, 'music.html'),
        armorial: resolve(__dirname, 'armorial.html'),
        divinewhomst: resolve(__dirname, 'divinewhomst.html'),
      },
    },
  },
});
