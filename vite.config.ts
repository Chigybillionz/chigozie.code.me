import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  // In development, serve from root '/'. In production build for GitHub Pages, use '/chigozie.code.me/' (unless VERCEL)
  base: command === 'serve' ? '/' : (process.env.VERCEL ? '/' : '/chigozie.code.me/'),

  plugins: [vue(), tailwindcss()],
  server: {
    port: 5180,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}))
