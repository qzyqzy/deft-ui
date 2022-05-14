function install(Vue, deftUi, module) {
  Vue.use(deftUi);
  const { Indicator, Toast } = module;
  Vue.prototype.$Indicator = Indicator;
  Vue.prototype.$Toast = Toast;
}
export default async ({ Vue }) => {
  console.log(typeof process, "typeof process");
  if (typeof process === "undefined") {
    install(Vue, require("deft-ui"), require("deft-ui"));
  } else {
    // 解决 document 未找到的问题
    Vue.mixin({
      mounted() {
        import("deft-ui").then(function (m) {
          install(Vue, m.default, m);
        });
      },
    });
  }
};
