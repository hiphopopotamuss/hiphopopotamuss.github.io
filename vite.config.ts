import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ['personal-site.test', 'https://hiphopopotamuss.github.io/#projects'],
  },
  plugins: [react()],
})
