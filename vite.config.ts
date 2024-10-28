import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias: {
      "@":"/src",
      '@components': './src/components',
      '@layouts': './src/layouts',
      '@services': './src/services',
      '@ui': './src/ui',
      '@utils': './src/utils',
      '@routers': './src/routers',
      
    },
  }
})
