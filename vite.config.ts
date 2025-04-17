import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: './docs',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (/\.(woff2?|ttf|otf|eot)$/.test(assetInfo.name || '')) {
            return 'assets/fonts/[name][extname]' // bez hash
          }
          return 'assets/[name]-[hash][extname]' // ostatní assets
        },
      },
    },
  },
  base: '/fidoo/',
})
