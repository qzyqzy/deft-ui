import Checklist from "./src";

Checklist.install = function (Vue) {
  Vue.components(Checklist.name, Checklist);
};

export default Checklist;
