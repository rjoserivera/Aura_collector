import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    middlewares: [
      (req, res, next) => {
        if (req.url === '/' || req.url === '/index.html') {
          try {
            const filePath = path.join(process.cwd(), 'index.html')
            const content = fs.readFileSync(filePath, 'utf-8')
            res.setHeader('Content-Type', 'text/html; charset=utf-8')
            res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
            res.setHeader('Pragma', 'no-cache')
            res.setHeader('Expires', '0')
            res.end(content)
            return
          } catch (e) {
            next()
          }
        }
        next()
      }
    ]
  }
})
