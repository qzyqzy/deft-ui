<template>
  <div id="app">
    <CheckList v-if="false"></CheckList>
    <SwitchCom v-if="false"></SwitchCom>
    <TabContainer></TabContainer>
  </div>
</template>

<script>
import CheckList from "./../example/checklist.vue";
import SwitchCom from "./../example/switch.vue";
import TabContainer from "./../example/tab-container.vue";
export default {
  name: "App",
  components: {
    CheckList,
    SwitchCom,
    TabContainer,
  },
};
</script>
