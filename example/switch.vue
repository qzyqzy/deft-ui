<template>
  <div class="page-switch">
    <div class="page-title">Switch</div>
    <div class="page-part page-switch-padding">
      <deft-switch v-model="value1" @change="handleChange">
        <label v-text="value1"></label>
      </deft-switch>
    </div>

    <div class="page-part page-switch-padding">
      <deft-switch v-model="value4" @change="handleChange">
        <label v-text="value4"></label>
      </deft-switch>
    </div>

    <deft-cell :title="'选项 ' + value2">
      <deft-switch v-model="value2" @change="handleChange"></deft-switch>
    </deft-cell>
    <deft-cell :title="'选项 ' + value3">
      <deft-switch v-model="value3" @change="handleChange"></deft-switch>
    </deft-cell>
  </div>
</template>

<script>
export default {
  name: "page-switch",

  data() {
    return {
      value1: false,
      value2: false,
      value3: true,
      value4: true,
    };
  },

  methods: {
    handleChange(event) {
      console.log(event);
    },
  },
};
</script>

<style lang="scss">
.page {
  &-switch {
    &-padding {
      padding: 0 10px;
    }
  }
}
</style>
