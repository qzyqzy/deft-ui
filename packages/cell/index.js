import cell from "./src";

cell.install = function (Vue) {
  Vue.components(cell.name, cell);
};

export default cell;
