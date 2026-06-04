import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor split — each chunk caches independently across deploys.
          'react-vendor':   ['react', 'react-dom', 'react-router-dom'],
          'motion-vendor':  ['framer-motion'],
          'icons-vendor':   ['lucide-react'],
          'helmet-vendor':  ['react-helmet-async'],
        },
      },
    },
    // Fail loud if any chunk creeps back over budget.
    chunkSizeWarningLimit: 250,
  },
})
