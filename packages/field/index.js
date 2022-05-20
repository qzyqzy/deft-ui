import field from "./src";

field.install = function (Vue) {
  Vue.components(field.name, field);
};

export default field;
