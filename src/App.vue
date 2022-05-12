<template>
  <div id="app">
    <!-- 测试代码 -->
    <h2>mint-ui</h2>

    <h2>deft-ui</h2>
  </div>
</template>

<script>
import { Indicator } from "../packages";
// import { Indicator } from "mint-ui";
export default {
  name: "App",
  mounted() {
    Indicator.open({
      text: "Loading...",
      spinnerType: "fading-circle",
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
