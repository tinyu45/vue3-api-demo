import { createApp } from "vue";
import App from "./App.vue";
import card from "./layout/card.vue";

// 创建vue实例
const app = createApp(App);

//注册全局组件
app.component("card", card);

// 挂载
app.mount("#app");
