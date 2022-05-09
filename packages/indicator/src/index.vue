<template>
  <transition name="deft-indicator">
    <div class="deft-indicator" v-show="visible">
      <div
        class="deft-indicator-wrapper"
        :style="{ padding: text ? '20px' : '15px' }"
      >
        <!-- <spinner
          class="deft-indicator-spin"
          :type="convertedSpinnerType"
          :size="32"
        ></spinner> -->
        <span class="deft-indicator-text" v-show="text">{{ text }}</span>
      </div>
      <div class="deft-indicator-mask" @touchmove.stop.prevent></div>
    </div>
  </transition>
</template>

<script type="text/babel">
export default {
  data() {
    return {
      visible: false,
    };
  },

  components: {
    // Spinner,
  },

  computed: {
    convertedSpinnerType() {
      switch (this.spinnerType) {
        case "double-bounce":
          return 1;
        case "triple-bounce":
          return 2;
        case "fading-circle":
          return 3;
        default:
          return 0;
      }
    },
  },

  props: {
    text: String,
    spinnerType: {
      type: String,
      default: "snake",
    },
  },
};
</script>
<style lang="scss" scoped>
.mint-indicator {
  -webkit-transition: opacity 0.2s linear;
  transition: opacity 0.2s linear;
}
.mint-indicator-wrapper {
  top: 50%;
  left: 50%;
  position: fixed;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  box-sizing: border-box;
  text-align: center;
}
.mint-indicator-text {
  display: block;
  color: #fff;
  text-align: center;
  margin-top: 10px;
  font-size: 16px;
}
.mint-indicator-spin {
  display: inline-block;
  text-align: center;
}
.mint-indicator-mask {
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  opacity: 0;
  background: transparent;
}
.mint-indicator-enter,
.mint-indicator-leave-active {
  opacity: 0;
}
</style>
