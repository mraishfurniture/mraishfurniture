import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' so the built site works on any static host, even in a subfolder.
export default defineConfig({
  plugins: [react()],
  base: './',
})
