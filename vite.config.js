import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  root: 'src/presentation',
  base: './',
  plugins: [react()],
  build: {
    outDir: '../../dist/renderer',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@business': resolve(__dirname, 'src/business'),
      '@data': resolve(__dirname, 'src/data-access'),
    },
  },
  server: {
  host: 'localhost',
  port: 5173,
  proxy: {
    '/api': {
      target: 'http://localhost:5189',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '/api'),
    },
  },
},

})
