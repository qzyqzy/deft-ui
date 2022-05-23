<template>
  <div
    v-show="$parent.swiping || id === $parent.currentActive"
    class="deft-tab-container-item"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "deft-tab-container-item",
  props: ["id"],
};
</script>

<style lang="scss" scoped>
.deft {
  &-tab-container-item {
    flex-shrink: 0;
    width: 100%;
  }
}
</style>
