# Toast

> A brief toast box. Custom location, duration and style supported.



## Import

```javascript
import { Toast } from "deft-ui";
```


## preview

:::demo 确保 Toast 已经保存到 Vue 原型对象上 Vue.prototype.$Toast = Toast;或直接引入使用

```html
<template>
  <div id="app">
    <deft-button type="default" size="large" @click="open">
      点击弹出 Toast
    </deft-button>
    <br>
    <deft-button type="default" size="large" @click="open2">
      点击弹出带有 icon 的 Toast
    </deft-button>
    <br>
    <deft-button type="default" size="large" @click="open3">
      自定义 Toast 位置
    </deft-button>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    open() {
      this.$Toast("Upload Complete");
    },
    open2() {
      this.$Toast({
        message: "operation success",
        iconClass: "deftui deftui-success",
      });
    },
    open3() {
      this.$Toast({
        message: "bottom",
        position: "bottom",
      });
    },
  },
};
</script>

```

:::




## Example

Basic Usage

```javascript
Toast("Upload Complete");
```

To configure more options, invoke `Toast` with an object

```javascript
Toast({
  message: "Upload Complete",
  position: "bottom",
  duration: 5000
});
```

If you need to put an icon font above the text, just add another key named `iconClass` and set it to whatever icon class you wish to use(please prepare icon fonts your self)

```javascript
Toast({
  message: "operation success",
  iconClass: "deftui deftui-success"
});
```

The `Toast` function returns a `Toast` instance, which has a `close` method to close the `Toast` manually.

```javascript
let instance = Toast("Upload Complete");
setTimeout(() => {
  instance.close();
}, 2000);
```

## API

| option    | description                                                                    | type   | acceptable values       | default  |
| :-------- | :----------------------------------------------------------------------------- | :----- | :---------------------- | :------- |
| message   | toast text content                                                             | String |                         |          |
| position  | location of the toast                                                          | String | 'top' 'bottom' 'middle' | 'middle' |
| duration  | time duration(in millisecond). Toast will not close automatically if set to -1 | Number |                         | 3000     |
| className | class name of the toast                                                        | String |                         |          |
| iconClass | class name of the icon font                                                    | String |                         |          |
