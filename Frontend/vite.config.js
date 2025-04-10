// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    port: parseInt(process.env.PORT) || 4173,
    host: true,
    allowedHosts: ['code-reviewer-6-g24y.onrender.com'] // ← Add this line
  }
})
