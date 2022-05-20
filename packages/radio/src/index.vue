<template>
  <div class="deft-radiolist" @change="$emit('change', currentValue)">
    <label class="deft-radiolist-title" v-text="title"></label>
    <x-cell v-for="(option, index) in options" :key="index">
      <label class="deft-radiolist-label" slot="title">
        <span :class="{ 'is-right': align === 'right' }" class="deft-radio">
          <input
            class="deft-radio-input"
            type="radio"
            v-model="currentValue"
            :disabled="option.disabled"
            :value="option.value || option"
          />
          <span class="deft-radio-core"></span>
        </span>
        <span class="deft-radio-label" v-text="option.label || option"></span>
      </label>
    </x-cell>
  </div>
</template>

<script>
import XCell from "../../cell";
export default {
  name: "deft-radio",
  components: {
    XCell,
  },
  props: {
    title: String,
    align: String,
    options: {
      type: Array,
      required: true,
    },
    value: String,
  },
  data() {
    return {
      currentValue: this.value,
    };
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },

    currentValue(val) {
      this.$emit("input", val);
    },
  },
};
</script>

<style lang="scss" scoped>
.deft {
  &-radiolist {
    .deft-cell {
      padding: 0;
    }

    &-label {
      display: block;
      padding: 0 10px;
    }

    &-title {
      font-size: 12px;
      margin: 8px;
      display: block;
      color: $radio-title-color;
    }
  }

  &-radio {
    .is-right {
      float: right;
      margin-left: 6px;
    }

    &-label {
      vertical-align: middle;
      margin-left: 6px;
    }

    &-input {
      display: none;

      &:checked {
        + .deft-radio-core {
          background-color: $color-blue;
          border-color: $color-blue;

          &::after {
            background-color: $color-white;
            transform: scale(1);
          }
        }
      }

      &[disabled] + .deft-radio-core {
        background-color: $color-grey;
        border-color: #ccc;
      }
    }

    &-core {
      box-sizing: border-box;
      display: inline-block;
      background-color: $color-white;
      border-radius: 100%;
      border: 1px solid #ccc;
      position: relative;
      width: 20px;
      height: 20px;
      vertical-align: middle;

      &::after {
        content: " ";
        border-radius: 100%;
        position: absolute;
        top: 5px;
        left: 5px;
        width: 8px;
        height: 8px;
        transition: transform 0.2s;
        transform: scale(0);
      }
    }
  }
}
</style>
