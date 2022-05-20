<template>
  <a class="deft-cell" :href="href">
    <span class="deft-cell-mask" v-if="isLink"></span>
    <div class="deft-cell-left">
      <slot name="left"></slot>
    </div>
    <div class="deft-cell-wrapper">
      <div class="deft-cell-title">
        <slot name="icon">
          <i v-if="icon" class="deftui" :class="'deftui-' + icon"></i>
        </slot>
        <slot name="title">
          <span class="deft-cell-text" v-text="title"></span>
          <span v-if="label" class="deft-cell-label" v-text="label"></span>
        </slot>
      </div>
      <div class="deft-cell-value" :class="{ 'is-link': isLink }">
        <slot>
          <span v-text="value"></span>
        </slot>
      </div>
      <i v-if="isLink" class="deft-cell-allow-right"></i>
    </div>
  </a>
</template>

<script>
/**
 * deft-cell
 * @desc 单元格
 * @param {string|Object} [to] - 跳转链接，使用 vue-router 的情况下 to 会传递给 router.push，否则作为 a 标签的 href 属性处理
 * @param {string} [icon] - 图标，提供 more, back，或者自定义的图标（传入不带前缀的图标类名，最后拼接成 .deftui-xxx）
 * @param {string} [title] - 标题
 * @param {string} [value] - 右侧显示文字
 * @param {string} [label] - 备注信息
 * @param {boolean} [is-link=false] - 可点击的链接
 * @param {slot} - 同 value, 会覆盖 value 属性
 * @param {slot} [title] - 同 title, 会覆盖 title 属性
 * @param {slot} [icon] - 同 icon, 会覆盖 icon 属性，例如可以传入图片
 *
 */
export default {
  name: "deft-cell",
  props: {
    to: [String, Object],
    title: String,
    icon: String,
    label: String,
    isLink: Boolean,
    value: {},
  },
  computed: {
    href() {
      if (this.to && !this.added && this.$router) {
        // 使用 vue-router并且判断路由是否存在
        const resolved = this.$router.match(this.to);
        if (!resolved.matched.length) return this.to;

        // eslint-disable-next-line vue/no-async-in-computed-properties
        this.$nextTick(() => {
          this.added = true;
          this.$el.addEventListener("click", this.handleClick);
        });
        return resolved.fullPath || resolved.path;
      }
      return this.to;
    },
  },
  methods: {
    handleClick($event) {
      $event.preventDefault();
      this.$router.push(this.href);
    },
  },
};
</script>

<style lang="scss" scoped>
.deft {
  &-cell {
    background-color: $color-white;
    box-sizing: border-box;
    color: inherit;
    min-height: 48px;
    display: block;
    overflow: hidden;
    position: relative;
    text-decoration: none;

    &:first-child {
      .deft-cell-wrapper {
        background-origin: border-box;
      }
    }

    &:last-child {
      background-image: linear-gradient(
        0deg,
        $color-grey,
        $color-grey 50%,
        transparent 50%
      );
      background-size: 100% 1px;
      background-repeat: no-repeat;
      background-position: bottom;
    }

    &-wrapper {
      background-image: linear-gradient(
        180deg,
        $color-grey,
        $color-grey 50%,
        transparent 50%
      );
      background-size: 120% 1px;
      background-repeat: no-repeat;
      background-position: top left;
      background-origin: content-box;
      align-items: center;
      box-sizing: border-box;
      display: flex;
      font-size: 16px;
      line-height: 1;
      min-height: inherit;
      overflow: hidden;
      padding: 0 10px;
      width: 100%;
    }

    &-mask {
      &::after {
        background-color: #000;
        content: " ";
        opacity: 0;
        position: absolute;
      }

      &:active::after {
        opacity: 0.1;
      }
    }

    &-text {
      vertical-align: middle;
    }

    &-label {
      color: #888;
      display: block;
      font-size: 12px;
      margin-top: 6px;
    }

    img {
      vertical-align: middle;
    }

    &-title {
      flex: 1;
    }

    &-value {
      color: $cell-value-color;
      display: flex;
      align-items: center;

      &.is-link {
        margin-right: 24px;
      }
    }

    &-left {
      position: absolute;
      height: 100%;
      left: 0;
      transform: translate3d(-100%, 0, 0);
    }

    &-right {
      position: absolute;
      height: 100%;
      right: 0;
      top: 0;
      transform: translate3d(100%, 0, 0);
    }

    &-allow-right::after {
      border: solid 2px #c8c8cd;
      border-bottom-width: 0;
      border-left-width: 0;
      content: " ";
      top: 50%;
      right: 20px;
      position: absolute;
      width: 5px;
      height: 5px;
      transform: translateY(-50%) rotate(45deg);
    }
  }
}
</style>
