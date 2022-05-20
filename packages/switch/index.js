import Switch from "./src";
Switch.install = function (Vue) {
  Vue.components(Switch.name, Switch);
};

export default Switch;
