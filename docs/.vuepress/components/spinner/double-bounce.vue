<template>
  <div
    class="deft-spinner-double-bounce"
    :style="{
      width: spinnerSize,
      height: spinnerSize,
    }"
  >
    <div
      class="deft-spinner-double-bounce-bounce1"
      :style="{ backgroundColor: spinnerColor }"
    ></div>
    <div
      class="deft-spinner-double-bounce-bounce2"
      :style="{ backgroundColor: spinnerColor }"
    ></div>
  </div>
</template>

<script>
import common from "./common.vue";
export default {
  name: "double-bounce",
  mixins: [common],
};
</script>

<style lang="scss">
.deft-spinner {
  &-double-bounce {
    position: relative;
    &-bounce1,
    &-bounce2 {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      opacity: 0.6;
      position: absolute;
      top: 0;
      left: 0;
      animation: deft-spinner-double-bounce 2s infinite ease-in-out;
    }
    &-bounce2 {
      animation-delay: -1s;
    }
  }
}
@keyframes deft-spinner-double-bounce {
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
}
</style>
