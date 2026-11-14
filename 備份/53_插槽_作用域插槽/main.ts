import {createApp} from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import router from './router/index.ts'

// 創建應用
const app = createApp(App)
// 創建 pinia
const pinia = createPinia()

// 安裝插件
app.use(pinia)
// 安装路由器
app.use(router)
// 掛載應用
app.mount('#app')