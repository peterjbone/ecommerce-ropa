import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  VITE_BACK_URL: 'http://localhost:3001',
  plugins: [react()],
})