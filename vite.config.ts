import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import pxtovw from 'postcss-px-to-viewport'
const loder_pxtovw = pxtovw({
  //这里是设计稿宽度 自己修改
    viewportWidth: 1920,
    viewportUnit: 'vw',
    fontViewportUnit: 'vw', // 字体使用的视口单位
  })

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()], 
  // 配置根路径别名 
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    postcss: {
      plugins: [loder_pxtovw]
    }
  },
  base: './', // 打包路径

  server: {
    // open: true,// 是否自动启动浏览器
    port: 4000,//端口号
  }

})
