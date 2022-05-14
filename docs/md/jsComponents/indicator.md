# Indicator

> A brief toast box. Custom location, duration and style supported.

## Import

```javascript
import { Indicator } from "deft-ui";
```

## preview

:::demo   确保 Indicator 已经保存到 Vue 原型对象上 Vue.prototype.$Indicator = Indicator; 或直接引入使用
```html
<template>
  <deft-button type="default" size="large" @click="open">
    点击弹出 Indicator
  </deft-button>
  <br>
  <deft-button type="default" size="large" @click="openText">
    点击弹出带有文字的 Indicator
  </deft-button>
  <br>
  <deft-button type="default" size="large" @click="openSpinner">
    可配置 spinner
  </deft-button>

</template>
<script>
export default {
  name: "App",
  methods: {
    open() {
      this.$Indicator.open();
      setTimeout(() => {
        this.$Indicator.close();
      }, 1000);
    },
    openText() {
      this.$Indicator.open("Loading...");
      setTimeout(() => {
        this.$Indicator.close();
      }, 1000);
    },
    openSpinner() {
     this.$Indicator.open({
        text: "Loading...",
        spinnerType: "fading-circle",
      });
      setTimeout(() => {
        this.$Indicator.close();
      }, 1000);
    },

    

  },
};
</script>
```
:::

## Example


Open an indicator

```javascript
Indicator.open();
```


Display text below the spinner

```javascript
Indicator.open("Loading...");
```

Open an indicator with an object

```javascript
Indicator.open({
  text: "Loading...",
  spinnerType: "fading-circle"
});
```

Then close it

```javascript
Indicator.close();
```

better
```javascript
this.$nextTick(() => {
  Indicator.close();
});
```




## API

| option | description | type   | acceptable values | default |
| :---------- | :------------------ | :----- | :------------------------------------------------------ | :------ |
| text  | indicator text  | String |                                                         |         |
| spinnerType | type of the spinner | String | 'snake' 'fading-circle' 'double-bounce' 'triple-bounce' | 'snake' |
