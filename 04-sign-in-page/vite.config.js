import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/React-The-Complete-Guide-2025-Projects/04-sign-in-page/',
  plugins: [react(), tailwindcss()],
})