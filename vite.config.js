import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'mui-vendor': ['@mui/material', '@mui/icons-material', '@mui/x-date-pickers'],
          'query-vendor': ['@tanstack/react-query', '@tanstack/react-query-devtools'],
          'form-vendor': ['react-hook-form', '@hookform/resolvers', 'zod'],
          'utils-vendor': ['axios', 'dayjs', 'react-toastify', 'react-icons'],
          'emotion-vendor': ['@emotion/react', '@emotion/styled'],
        },
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Enable source maps for better debugging
    sourcemap: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@mui/material',
      '@tanstack/react-query',
      'react-hook-form',
      'zod',
      'axios',
      'dayjs',
    ],
  },
})
