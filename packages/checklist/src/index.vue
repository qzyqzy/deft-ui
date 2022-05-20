<template>
  <div
    @change="$emit('change', currentValue)"
    class="deft-checklist"
    :class="{ 'is-limit': max <= currentValue.length }"
  >
    <label class="deft-checklist-title" v-text="title"></label>
    <x-cell v-for="(option, index) in options" :key="index">
      <label class="deft-checklist-label" slot="title">
        <span :class="{ 'is-right': align === 'right' }" class="deft-checkbox">
          <input
            class="deft-checkbox-input"
            type="checkbox"
            v-model="currentValue"
            :disabled="option.disabled"
            :value="option.value || option"
          />
          <span class="deft-checkbox-core"></span>
        </span>
        <span
          class="deft-checkbox-label"
          v-text="option.label || option"
        ></span>
      </label>
    </x-cell>
  </div>
</template>

<script>
import XCell from "../../cell";
export default {
  name: "deft-checklist",
  components: { XCell },
  props: {
    max: Number,
    title: String,
    align: String,
    options: {
      type: Array,
      required: true,
    },
    value: Array,
  },

  data() {
    return {
      currentValue: this.value,
    };
  },

  computed: {
    limit() {
      return this.max < this.currentValue.length;
    },
  },

  watch: {
    value(val) {
      this.currentValue = val;
    },

    currentValue(val) {
      if (this.limit) val.pop();
      this.$emit("input", val);
    },
  },
};
</script>

<style lang="scss">
.deft {
  &-checklist {
    .deft-cell {
      padding: 0;
    }

    &-label {
      display: block;
      padding: 0 10px;
    }

    &-title {
      color: $checklist-title-color;
      display: block;
      font-size: 12px;
      margin: 8px;
    }

    &.is-limit {
      .deft-checkbox-core:not(:checked) {
        background-color: $color-grey;
        border-color: $color-grey;
      }
    }
  }

  &-checkbox {
    &.is-right {
      float: right;
    }

    &-label {
      vertical-align: middle;
      margin-left: 6px;
    }

    &-input {
      display: none;

      &:checked {
        + .deft-checkbox-core {
          background-color: $color-blue;
          border-color: $color-blue;

          &::after {
            border-color: $color-white;
            transform: rotate(45deg) scale(1);
          }
        }
      }

      &[disabled] + .deft-checkbox-core {
        background-color: $color-grey;
        border-color: #ccc;
      }
    }

    &-core {
      display: inline-block;
      background-color: $color-white;
      border-radius: 100%;
      border: 1px solid #ccc;
      position: relative;
      width: 20px;
      height: 20px;
      vertical-align: middle;

      &::after {
        border: 2px solid transparent;
        border-left: 0;
        border-top: 0;
        content: " ";
        top: 3px;
        left: 6px;
        position: absolute;
        width: 4px;
        height: 8px;
        transform: rotate(45deg) scale(0);
        transition: transform 0.2s;
      }
    }
  }
}
</style>
