import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env files

const BACK_URL = process.env.BACK_URL;

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.BACK_URL': JSON.stringify(BACK_URL),
  },
});