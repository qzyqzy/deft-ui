<template>
  <x-cell
    class="deft-field"
    :title="label"
    v-clickoutside="doCloseActive"
    :class="[
      {
        'is-textarea': type === 'textarea',
        'is-nolabel': !label,
      },
    ]"
  >
    <textarea
      @change="$emit('change', currentValue)"
      ref="textarea"
      class="deft-field-core"
      :placeholder="placeholder"
      v-if="type === 'textarea'"
      :rows="rows"
      :disabled="disabled"
      :readonly="readonly"
      v-model="currentValue"
    >
    </textarea>
    <input
      @change="$emit('change', currentValue)"
      ref="input"
      class="deft-field-core"
      :placeholder="placeholder"
      :number="type === 'number'"
      v-else
      :type="type"
      @focus="active = true"
      :disabled="disabled"
      :readonly="readonly"
      :value="currentValue"
      @input="handleInput"
    />
    <div
      @click="handleClear"
      class="deft-field-clear"
      v-if="!disableClear"
      v-show="currentValue && type !== 'textarea' && active"
    >
      <i class="deftui deftui-field-error"></i>
    </div>
    <span class="deft-field-state" v-if="state" :class="['is-' + state]">
      <i class="deftui" :class="['deftui-field-' + state]"></i>
    </span>
  </x-cell>
</template>

<script>
import XCell from "./../../cell";
import Clickoutside from "@/utils/clickoutside";
export default {
  name: "deft-field",
  components: {
    XCell,
  },
  directives: {
    Clickoutside,
  },
  props: {
    type: {
      type: String,
      default: "text",
    },
    rows: String,
    label: String,
    value: {},
    placeholder: String,
    readonly: Boolean,
    disabled: Boolean,
    disableClear: Boolean,
    state: {
      type: String,
      default: "default",
    },
    attr: Object,
  },
  data() {
    return {
      active: false,
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
    attr: {
      immediate: true,
      handler(attrs) {
        this.$nextTick(() => {
          const target = [this.$refs.input, this.$refs.textarea];
          target.forEach((el) => {
            if (!el || !attrs) return;
            Object.keys(attrs).map((name) =>
              el.setAttribute(name, attrs[name])
            );
          });
        });
      },
    },
  },
  methods: {
    doCloseActive() {
      this.active = false;
    },
    handleClear() {
      if (this.disabled || this.readonly) return;
      this.currentValue = "";
    },
    handleInput(evt) {
      this.currentValue = evt.target.value;
    },
  },
};
</script>

<style lang="scss">
.deft {
  &-field {
    &.is-textarea {
      .deft-cell-title {
        padding: 10px 0;
      }

      .deft-cell-value {
        padding: 5px 0;
      }
    }
    .deft-cell-title {
      width: 105px;
      flex: none;
    }
    .deft-cell-value {
      flex: 1;
      color: inherit;
      display: flex;
    }
  }
}
</style>
<style lang="scss" scoped>
.deft {
  &-field {
    display: flex;

    &-core {
      appearance: none;
      border-radius: 0;
      border: 0;
      flex: 1;
      outline: 0;
      line-height: 1.6;
      font-size: inherit;
      width: 100%;
    }
    &-clear {
      opacity: 0.2;
    }
    &-state {
      color: inherit;
      margin-left: 20px;

      &.deftui {
        font-size: 20px;
      }

      &.is-error {
        color: $error-color;
      }

      &.is-warning {
        color: $warning-color;
      }

      &.is-success {
        color: $success-color;
      }

      &.is-default {
        margin-left: 0;
      }
    }
    &-other {
      position: relative;
    }

    .is-nolabel {
      .deft-cell-title {
        display: none;
      }
    }
  }
}
</style>
