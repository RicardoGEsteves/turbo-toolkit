/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'RepoCore',
      fileName: 'repo-core'
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@repo/ui'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@repo/ui': 'RepoUI'
        }
      }
    }
  }
});
