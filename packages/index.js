require("./../src/assets/font/iconfont.css");

// 导入button组件
import button from "./button";

import cell from "./cell";

// 组件列表
const components = [button, cell];

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return;
  // 遍历注册全局组件
  components.map((component) => Vue.component(component.name, component));
};

// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

// 导出的对象必须具有 install，才能被 Vue.use() 方法安装
// 全部导出
export default {
  install,
};

// 按需导出
export {
  install,
  // 以下是具体的组件列表
  button,
  cell,
};
