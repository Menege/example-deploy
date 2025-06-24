import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
export default defineConfig({
  base: 'example-deploy',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'primevue': resolve(__dirname, 'node_modules/primevue')
    }
  }
})
