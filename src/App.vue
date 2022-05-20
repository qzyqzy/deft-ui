<template>
  <div id="app">
    <CheckList v-if="false"></CheckList>
    <SwitchCom></SwitchCom>
  </div>
</template>

<script>
import CheckList from "./../example/checklist.vue";
import SwitchCom from "./../example/switch.vue";
CheckList;
export default {
  name: "App",
  components: {
    CheckList,
    SwitchCom,
  },
};
</script>
