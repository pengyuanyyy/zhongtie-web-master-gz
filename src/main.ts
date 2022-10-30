import { createApp } from 'vue'
// 导入全局样式
import './style.css'
import App from './App.vue'

// 全局组件注册
const app = createApp(App)

// 导入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 导入路由对象
import router from './router';

// 导入网站公共样式
import  '@/assets/styles/common.less'


// 导入 pinia
import { createPinia } from "pinia";

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(ElementPlus).use(router).use(pinia).mount('#app')


