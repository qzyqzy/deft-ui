# Switch

> 开关。

## 演示

:::demo

```html
<template>
  <div class="page-switch">
    <div class="page-title">Switch</div>
    <div class="page-part page-switch-padding">
      <deft-switch v-model="value1" @change="handleChange">
        <label v-text="value1"></label>
      </deft-switch>
    </div>

    <div class="page-part page-switch-padding">
      <deft-switch v-model="value4" @change="handleChange">
        <label v-text="value4"></label>
      </deft-switch>
    </div>

    <deft-cell :title="'选项 ' + value2">
      <deft-switch v-model="value2" @change="handleChange"></deft-switch>
    </deft-cell>
    <deft-cell :title="'选项 ' + value3">
      <deft-switch v-model="value3" @change="handleChange"></deft-switch>
    </deft-cell>

  </div>
</template>

<script>
export default {
  name: "page-switch",

  data() {
    return {
      value1: false,
      value2: false,
      value3: true,
      value4: true,
    };
  },

  methods: {
    handleChange(event) {
      console.log(event);
    },
  },
};
</script>
```

:::



## 引入

```javascript
import { Switch } from "deft-ui";

Vue.component(Switch.name, Switch);
```

## 例子

```html
<deft-switch v-model="value"></deft-switch>
```

带显示内容

```html
<deft-switch v-model="value">开关</deft-switch>
```

## API

| 参数  | 说明   | 类型    | 可选值 | 默认值 |
| :---- | :----- | :------ | :----- | :----- |
| value | 绑定值 | Boolean |        |        |

## Event

| 名称   | 返回值           |
| :----- | :--------------- |
| change | checked: Boolean |

## Slot

| name | 描述     |
| :--- | :------- |
| -    | 显示内容 |
