import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/wsproxy': {
        target: 'ws://localhost:6001/',
        changeOrigin: false,
        secure: false,
        ws: true,
      }
    },
    "hmr": false,

  }
})
