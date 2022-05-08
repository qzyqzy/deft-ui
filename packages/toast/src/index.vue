<template>
  <transition name="deft-toast-pop">
    <div
      class="deft-toast"
      v-show="visible"
      :class="customClass"
      :style="{ padding: iconClass === '' ? '10px' : '20px' }"
    >
      <i class="deft-toast-icon" :class="iconClass" v-if="iconClass !== ''"></i>
      <span
        class="deft-toast-text"
        :style="{ 'padding-top': iconClass === '' ? '0' : '10px' }"
      >
        {{ message }}
      </span>
    </div>
  </transition>
</template>

<script>
export default {
  name: "toast",
  props: {
    message: String,
    className: {
      type: String,
      default: "",
    },
    position: {
      type: String,
      default: "middle",
    },
    iconClass: {
      type: String,
      default: "",
    },
  },
  computed: {
    customClass() {
      var classes = [];
      switch (this.position) {
        case "top":
          classes.push("is-placetop");
          break;
        case "bottom":
          classes.push("is-placebottom");
          break;
        default:
          classes.push("is-placemiddle");
      }
      classes.push(this.className);

      return classes.join(" ");
    },
  },
  data() {
    return {
      visible: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.deft-toast {
  position: fixed;
  max-width: 80%;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  box-sizing: border-box;
  text-align: center;
  z-index: 1000;
  -webkit-transition: opacity 0.3s linear;
  transition: opacity 0.3s linear;
}
.deft-toast.is-placebottom {
  bottom: 50px;
  left: 50%;
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
}
.deft-toast.is-placemiddle {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.deft-toast.is-placetop {
  top: 50px;
  left: 50%;
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
}
.deft-toast-icon {
  display: block;
  text-align: center;
  font-size: 56px;
}
.deft-toast-text {
  font-size: 14px;
  display: block;
  text-align: center;
}
.deft-toast-pop-enter,
.deft-toast-pop-leave-active {
  opacity: 0;
}
</style>
