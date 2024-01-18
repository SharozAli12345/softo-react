import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
  server: {
    port: 3000
  },
  test: {
    global: true,
    environment: "jsdom",
    setupFiles: "./setupTest.js",
  },
})
