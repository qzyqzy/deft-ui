import radio from "./src";
radio.install = function (Vue) {
  Vue.components(radio.name, radio);
};

export default radio;
