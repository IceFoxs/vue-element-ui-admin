import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    base: "/",
    port: 3003,
    host: '0.0.0.0',
    open: true,
    proxy: {
      "/api": {
        target: 'http://127.0.0.1:8887',
        changeOrigin: false, // 是否允许跨域
        secure: false, // 如果是https接口，需要配置这个参数
      }
    },

  },
  resolve: {
    alias: {
      '@': '/src/'
    },
  },

  plugins: [vue()],
})
