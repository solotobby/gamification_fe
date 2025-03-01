import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  preview: {
    host: '0.0.0.0',
    port: 3001,
  },

  server: {
    host: '0.0.0.0',
    port: 3006,
  },
  build: {
    outDir: 'dist',  // Default output directory
    emptyOutDir: true,  // Clear the output directory before building
  },
})
