<template>
  <label class="deft-switch">
    <input
      class="deft-switch-input"
      :disabled="disabled"
      @change="$emit('change', currentValue)"
      type="checkbox"
      v-model="currentValue"
    />
    <span class="deft-switch-core"></span>
    <div class="deft-switch-label"><slot></slot></div>
  </label>
</template>

<script>
export default {
  name: "deft-switch",

  props: {
    value: Boolean,
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    currentValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
};
</script>

<style lang="scss">
.deft {
  &-switch {
    display: flex;
    align-items: center;
    position: relative;

    * {
      pointer-events: none;
    }

    &-label {
      margin-left: 10px;
      display: inline-block;

      &:empty {
        margin-left: 0;
      }
    }

    &-core {
      display: inline-block;
      position: relative;
      width: 52px;
      height: 32px;
      border: 1px solid $color-grey;
      border-radius: 16px;
      box-sizing: border-box;
      background: $color-grey;

      &::after,
      &::before {
        content: " ";
        position: absolute;
        transition: transform 0.3s;
        border-radius: 15px;
      }

      &::after {
        width: 30px;
        height: 30px;
        background-color: $color-white;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
      }

      &::before {
        width: 50px;
        height: 30px;
        background-color: #fdfdfd;
      }
    }

    &-input {
      display: none;

      &:checked {
        + .deft-switch-core {
          border-color: $color-blue;
          background-color: $color-blue;

          &::before {
            transform: scale(0);
          }

          &::after {
            transform: translateX(20px);
          }
        }
      }
    }
  }
}
</style>
