import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/AcceptedCleanConnect/',
  plugins: [react()],
  build: {
    outDir: '../docs',
    emptyOutDir: true
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Your backend server
        changeOrigin: true,
      }
    }
  }
})