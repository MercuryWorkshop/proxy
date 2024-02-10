import { defineConfig } from 'vite'
import crossOriginIsolation from 'vite-plugin-cross-origin-isolation'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/wsproxy': {
        target: 'ws://localhost:6001/',
        changeOrigin: false,
        secure: false,
        ws: true,
      },
      '/mux': {
        target: 'wss://localhost:4000/',
        changeOrigin: false,
        secure: false,
        ws: true,
      },
    },
  },
  plugins: [
    // crossOriginIsolation()
  ]
})
