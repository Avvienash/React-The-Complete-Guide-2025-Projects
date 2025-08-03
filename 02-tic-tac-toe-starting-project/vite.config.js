import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/ ddd
export default defineConfig({
  base: '/React-The-Complete-Guide-2025-Projects/02-tic-tac-toe-starting-project/',
  plugins: [react()],
})
