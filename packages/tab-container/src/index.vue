<template>
  <div
    class="mint-tab-container"
    @touchstart="touchstart"
    @mousedown="touchstart"
    @touchmove="touchmove"
    @mousemove="touchmove"
    @touchend="touchend"
    @mouseup="touchend"
  >
    <div ref="wrap" class="mint-tab-container-wrap">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "deft-tab-container",
  props: {
    value: {},
    swipeable: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      currentActive: this.value,
      start: { x: 0, y: 0 },
      swiping: false,
      pageWidth: 0,
    };
  },
  watch: {
    value(val) {
      this.currentActive = val;
    },
    currentActive(val, oldValue) {
      this.$emit("input", val);
      if (!this.swipeable) return;
      const lastIndex = this.$children.findIndex((item) => {
        return item.id === oldValue;
      });
      this.swipeLeaveTransition(lastIndex);
    },
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      if (!this.swipeable) return;
      // 获取宽度
      this.wrap = this.$refs.wrap;
      this.pageWidth = this.wrap.clientWidth;
      // 滑动超过此距离，触发上下页滑动
      this.limitWidth = this.pageWidth / 4;
    },

    swipeMove(offset) {
      this.wrap.style.webkitTransform = `translate3d(${offset}px, 0, 0)`;
      this.swiping = true;
    },
    swipeLeaveTransition(lastIndex = 0) {
      if (typeof this.index !== "number") {
        this.index = this.$children.findIndex((item) => {
          return item.id === this.currentActive;
        });
        this.swipeMove(-lastIndex * this.pageWidth);
      }

      setTimeout(() => {
        this.wrap.classList.add("swipe-transition");
        this.swipeMove(-this.index * this.pageWidth);
        this.wrap.addEventListener(
          "webkitTransitionEnd",
          () => {
            this.wrap.classList.remove("swipe-transition");
            this.wrap.style.webkitTransform = "";
            this.swiping = false;
            this.index = null;
          },
          false
        );
      }, 0);
    },
    touchstart(evt) {
      if (!this.swipeable) return;

      // 兼容 pc 端与移动端
      evt = evt.changedTouches ? evt.changedTouches[0] : evt;

      // 滑动开始、记录初始位置
      this.dragging = true;
      this.start.x = evt.pageX;
      this.start.y = evt.pageY;
    },
    touchmove(evt) {
      if (!this.dragging) return;

      const e = evt.changedTouches ? evt.changedTouches[0] : evt;

      // 获取滑动距离
      const offsetTop = e.pageY - this.start.y;
      const offsetLeft = e.pageX - this.start.x;
      const y = Math.abs(offsetTop);
      const x = Math.abs(offsetLeft);
      // 区分滑动与用户滚动页面 斜着滑动或者移动距离很小
      if (x < 5 || (x >= 5 && y >= x * 1.73)) return;

      evt.preventDefault();

      // 获取当前页面的距离
      const index = this.$children.findIndex((item) => {
        return item.id === this.currentActive;
      });
      const currentPageOffset = index * this.pageWidth;

      // 算出偏移距离 实时滚动
      const offset = offsetLeft - currentPageOffset;

      // 边界值计算
      if (
        Math.abs(offset) > (this.$children.length - 1) * this.pageWidth ||
        (offset > 0 && offset < this.pageWidth)
      ) {
        this.swiping = false;
        return;
      }

      this.offsetLeft = offsetLeft;

      this.index = index;
      this.swipeMove(offset);
    },
    touchend() {
      if (!this.swiping) return;
      this.dragging = false;
      const direction = this.offsetLeft > 0 ? -1 : 1;
      const isChange = Math.abs(this.offsetLeft) > this.limitWidth;
      if (isChange) {
        this.index += direction;
        const child = this.$children[this.index];
        if (child) {
          this.currentActive = child.id;
          return;
        }
      }
      this.swipeLeaveTransition();
    },
  },
};
</script>

<style lang="scss" scoped>
.mint {
  &-tab-container {
    overflow: hidden;
    position: relative;

    &-wrap {
      display: flex;
    }

    .swipe-transition {
      transition: transform 150ms ease-in-out;
    }
  }
}
</style>
