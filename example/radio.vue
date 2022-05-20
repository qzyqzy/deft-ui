<template>
  <div>
    <mt-radio
      title="单选框列表"
      v-model="value"
      :options="['选项A', '选项B', '选项C']"
    >
    </mt-radio>
    <br />

    <div></div>

    <deft-radio
      title="单选框列表"
      v-model="value"
      :options="['选项A', '选项B', '选项C']"
    >
    </deft-radio>
  </div>
</template>

<script>
export default {
  name: "radio",
  data() {
    return {
      value: "",
    };
  },
};
</script>
