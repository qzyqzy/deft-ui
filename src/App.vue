<template>
  <div id="app">
    <!-- 测试代码 -->
    <deft-button plain disabled>按钮</deft-button>
    <br />
    <mt-button plain disabled>按钮</mt-button>
  </div>
</template>

<script>
// 单个引入
// import Vue from "vue";
// import { button } from "../packages";
// Vue.component(button.name, button);

export default {
  name: "App",
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
