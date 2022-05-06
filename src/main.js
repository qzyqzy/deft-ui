import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// 仿照 mint-ui 开发
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(MintUI);

// 导入组件库
import DeftUI from "../packages";
// 注册组件库
Vue.use(DeftUI);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
