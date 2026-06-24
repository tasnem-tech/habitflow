export default defineConfig({
  base: '/habitflow/'
})
  import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
