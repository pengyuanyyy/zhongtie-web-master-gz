import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import Components from 'unplugin-vue-components/vite';
import path from 'path'
import pxtovw from 'postcss-px-to-viewport'
// import { ElementPlusResolver} from 'unplugin-vue-components/resolvers'
// 插件
import { visualizer } from 'rollup-plugin-visualizer';
// import { Plugin as importToCDN}   from 'vite-plugin-cdn-import'


const loder_pxtovw = pxtovw({
  //这里是设计稿宽度 自己修改
    viewportWidth: 1920,
    viewportUnit: 'vw',
    fontViewportUnit: 'vw', // 字体使用的视口单位
  })

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 解决首次加载慢的问题
    // Components({
    //   dts: true,
    //   dirs: ['src/components'], // 按需加载的文件夹
    //   resolvers: [
    //       ElementPlusResolver(),  // ElementPlus按需加载
           
    //  ] 
    // }),
    visualizer({ open: true }),
    // importToCDN({
    //   modules: [
    //     {
    //       name:"vue",
    //       var:"Vue",
    //       path:"https://unpkg.com/vue@3.2.37"
    //     },

    //     {
    //       name: 'vue-demi',//安装vue-demi并导入 因为pinia中有用vue依赖中的vue-demi
    //       var: 'VueDemi',
    //       path: 'lib/index.iife.min.js'
    //     },

    //     {
    //       name:"element-plus",
    //       var:"ElementPlus",
    //       path:"https://unpkg.com/element-plus@2.2.18",
    //       css:"https://unpkg.com/element-plus/dist/index.css"
    //     }
    //   ]
    // })



  ], 
  // 配置根路径别名 
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    postcss: {
      plugins: [loder_pxtovw]
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled:true
      }
    }
  },
  // 打包配置
  build: {
    target: 'modules',
    outDir: 'dist', //指定输出路径
    assetsDir: 'assets', // 指定生成静态资源的存放路径
    chunkSizeWarningLimit: 1500,
    // rollupOptions: {
      // minify: 'terser',// 混淆器，terser构建后文件体积更小
      // 👇 告诉打包工具 "vue-demi" 也是外部依赖项 👇
      // external: ["vue", "element-plus", "vue-demi"],
      // plugins: [
      //   externalGlobals({
      //     vue: "Vue",
      //     "element-plus": "ElementPlus",
      //     // 👇 配置 vue-demi 全局变量 👇
      //     "vue-demi": "VueDemi",
      //   }),
      // ],
      // output: {
      //   manualChunks(id) {
      //     if (id.includes('node_modules')) {
      //       return id.toString().split('node_modules/')[1].split('/')[0].toString();
      //     }
      //   }
      // },
    // },
  },

  server: {
    // open: true,// 是否自动启动浏览器
    port: 4000,//端口号
  },
  optimizeDeps: {
    include: [
      'vue',
      'map-factory',
      'element-plus/es',
      'element-plus/es/components/form/style/index',
      'element-plus/es/components/radio-group/style/index',
      'element-plus/es/components/radio/style/index',
      'element-plus/es/components/checkbox/style/index',
      'element-plus/es/components/checkbox-group/style/index',
      'element-plus/es/components/switch/style/index',
      'element-plus/es/components/time-picker/style/index',
      'element-plus/es/components/date-picker/style/index',
      'element-plus/es/components/col/style/index',
      'element-plus/es/components/form-item/style/index',
      'element-plus/es/components/alert/style/index',
      'element-plus/es/components/breadcrumb/style/index',
      'element-plus/es/components/select/style/index',
      'element-plus/es/components/input/style/index',
      'element-plus/es/components/breadcrumb-item/style/index',
      'element-plus/es/components/tag/style/index',
      'element-plus/es/components/pagination/style/index',
      'element-plus/es/components/table/style/index',
      'element-plus/es/components/table-column/style/index',
      'element-plus/es/components/card/style/index',
      'element-plus/es/components/row/style/index',
      'element-plus/es/components/button/style/index',
      'element-plus/es/components/menu/style/index',
      'element-plus/es/components/sub-menu/style/index',
      'element-plus/es/components/menu-item/style/index',
      'element-plus/es/components/option/style/index',
      '@element-plus/icons-vue',
      'pinia',
      'axios',
      'vue-request',
      'vue-router',
      '@vueuse/core',
    ],
  }
})
