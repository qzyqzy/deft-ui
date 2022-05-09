<template>
  <div id="app">
    <!-- 测试代码 -->
    <h2>mint-ui</h2>
    <mt-spinner :type="3"></mt-spinner>
    <h2>deft-ui</h2>
    <deft-spinner :type="3"></deft-spinner>
  </div>
</template>

<script>
// import { Indicator } from "../packages";
// import { Indicator } from "mint-ui";
export default {
  name: "App",
  mounted() {
    // Indicator.open("加载中...");
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
