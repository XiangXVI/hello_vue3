// 引入 createApp 用於創建應用
import { createApp } from "vue";
// 引入 App 根組件
import App from "./App.vue";
// 引入 pinia
import { createPinia } from "pinia";

// 創建一個應用
const app = createApp(App);
// 第二步:創建 pinia
const pinia = createPinia();

// 第三步:安裝 pinia
app.use(pinia);
// 掛載整個應用到app容器中
app.mount("#app");