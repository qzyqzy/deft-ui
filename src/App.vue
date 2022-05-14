<template>
  <div id="app">
    <deft-button type="default" size="large" @click="open">
      点击弹出 Toast
    </deft-button>
    <deft-button type="default" size="large" @click="open2">
      点击弹出带有 icon 的 Toast
    </deft-button>
    <deft-button type="default" size="large" @click="open3">
      自定义 Toast 位置
    </deft-button>
  </div>
</template>

<script>
// import { Indicator } from "../packages";
import { Toast } from "deft-ui";
export default {
  name: "App",
  methods: {
    open() {
      Toast("Upload Complete");
    },
    open2() {
      Toast({
        message: "operation success",
        iconClass: "deftui deftui-success",
      });
    },
    open3() {
      Toast({
        message: "bottom",
        position: "bottom",
      });
    },
  },
};
</script>
