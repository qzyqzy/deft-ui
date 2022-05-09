<template>
  <span><component :is="spinner"></component></span>
</template>

<script>
const SPINNERS = ["snake", "double-bounce", "triple-bounce", "fading-circle"];
const parseSpinner = function (index) {
  if ({}.toString.call(index) === "[object Number]") {
    if (SPINNERS.length <= index) {
      // eslint-disable-next-line
      console.warn(`'${index}' spinner not found, use the default spinner.`);
      index = 0;
    }
    return SPINNERS[index];
  }
  if (SPINNERS.indexOf(index) === -1) {
    // eslint-disable-next-line
    console.warn(`'${index}' spinner not found, use the default spinner.`);
    index = SPINNERS[0];
  }
  return index;
};
/**
 * deft-spinner
 * @module components/spinner
 * @desc 加载动画
 * @param {(string|number)} [type=snake] - 显示类型，传入类型名或者类型 id，可选 `snake`, `dobule-bounce`, `triple-bounce`, `fading-circle`
 * @param {number} size - 尺寸
 * @param {string} color - 颜色
 *
 * @example
 * <deft-spinner type="snake"></deft-spinner>
 *
 * <!-- double-bounce -->
 * <deft-spinner :type="1"></deft-spinner>
 *
 * <!-- default snake -->
 * <deft-spinner :size="30" color="#999"></deft-spinner>
 */
export default {
  name: "deft-spinner",
  components: {
    SpinnerSnake: require("./spinner/snake.vue").default,
    SpinnerDoubleBounce: require("./spinner/double-bounce.vue").default,
    SpinnerTripleBounce: require("./spinner/triple-bounce.vue").default,
    SpinnerFadingCircle: require("./spinner/fading-circle.vue").default,
  },
  props: {
    type: {
      default: 0,
    },
    size: {
      type: Number,
      default: 28,
    },
    color: {
      type: String,
      default: "#ccc",
    },
  },
  computed: {
    spinner() {
      return `spinner-${parseSpinner(this.type)}`;
    },
  },
};
</script>
