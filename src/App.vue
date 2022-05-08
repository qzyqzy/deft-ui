<template>
  <div id="app">
    <!-- 测试代码 -->
    <h2>mint-ui</h2>

    <h2>deft-ui</h2>
  </div>
</template>

<script>
import { Toast } from "../packages";
// import { Toast } from "mint-ui";
export default {
  name: "App",
  mounted() {
    Toast({
      message: "operation success",
      iconClass: "deftui deftui-success",
      duration: 1000,
    });
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
