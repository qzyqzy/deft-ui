<template>
  <button
    :type="nativeType"
    class="deft-button"
    :class="[
      'deft-button--' + type,
      'deft-button--' + size,
      {
        'is-disabled': disabled,
        'is-plain': plain,
      },
    ]"
    @click="handleClick"
    :disabled="disabled"
  >
    <span class="deft-button-icon" v-if="icon || $slots.icon">
      <slot name="icon">
        <i v-if="icon" class="deftui" :class="'deftui-' + icon"></i>
      </slot>
    </span>
    <label class="deft-button-text"><slot></slot></label>
  </button>
</template>

<script>
export default {
  name: "deft-button",

  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    },
  },

  props: {
    icon: String,
    disabled: Boolean,
    nativeType: String,
    plain: Boolean,
    type: {
      type: String,
      default: "default",
      validator(value) {
        return ["default", "danger", "primary"].indexOf(value) > -1;
      },
    },
    size: {
      type: String,
      default: "normal",
      validator(value) {
        return ["small", "normal", "large"].indexOf(value) > -1;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../../../src/style/var.scss";
@import "./../../../src/assets/font/iconfont.css";
.deft {
  &-button {
    appearance: none;
    border-radius: 4px;
    border: 0;
    box-sizing: border-box;
    color: inherit;
    display: block;
    font-size: 18px;
    height: 41px;
    outline: 0;
    overflow: hidden;
    position: relative;
    text-align: center;

    &::after {
      background-color: #000;
      content: " ";
      opacity: 0;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      position: absolute;
    }

    &:not(.is-disabled):active::after {
      opacity: 0.4;
    }

    &-icon {
      vertical-align: middle;
      display: inline-block;
    }
    &-text {
      vertical-align: middle;
    }

    &--default {
      color: $button-default-color;
      background-color: $button-default-background-color;
      box-shadow: $button-default-box-shadow;

      &.is-plain {
        border: 1px solid $button-default-plain-color;
        background-color: transparent;
        box-shadow: none;
        color: $button-default-plain-color;
      }
    }

    &--primary {
      color: $button-primary-color;
      background-color: $button-primary-background-color;

      &.plain {
        border: 1px solid $button-primary-background-color;
        background-color: transparent;
        color: $button-primary-background-color;
      }
    }

    &--danger {
      color: $button-danger-color;
      background-color: $button-danger-background-color;

      &.plain {
        border: 1px solid $button-danger-background-color;
        background-color: transparent;
        color: $button-danger-background-color;
      }
    }

    &--large {
      display: block;
      width: 100%;
    }

    &--normal {
      display: inline-block;
      padding: 0 12px;
    }

    &--small {
      display: inline-block;
      font-size: 14px;
      padding: 0 12px;
      height: 33px;
    }

    &.is-disabled {
      opacity: 0.6;
    }
  }
}
</style>
