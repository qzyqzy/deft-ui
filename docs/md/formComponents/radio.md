# Radio

> 单选框列表


## 引入

```javascript
import { Radio } from "deft-ui";

Vue.component(Radio.name, Radio);
```

## 演示

:::demo

```html
<template>
  <div>
    <deft-radio
      title="单选框列表"
      v-model="value"
      :options="['选项A', '选项B', '选项C']"
    >
    </deft-radio>

  </div>
</template>

<script>
export default {
  name: "radio",
  data() {
    return {
      value: "",
    };
  },
};
</script>

```

:::



## 例子

基本用法

```html
<deft-radio
  title="单选框列表"
  v-model="value"
  :options="['选项A', '选项B', '选项C']"
>
</deft-radio>
```

设置禁用选项

```javascript
this.options = [
  {
    label: '被禁用',
    value: '值F',
    disabled: true
  },
  {
    label: '选项A',
    value: '值A'
  },
  {
    label: '选项B',
    value: '值B'
  }
];
<deft-radio
  title="单选框列表"
  v-model="value"
  :options="options">
</deft-radio>
```

单选框右对齐

```html
<deft-radio align="right" title="右对齐" v-model="value" :options="options">
</deft-radio>
```

## API

| 参数    | 说明                 | 类型   | 可选值      | 默认值 |
| :------ | :------------------- | :----- | :---------- | :----- |
| options | 选择项               | Array  |             |        |
| value   | 绑定值               | String |             |        |
| title   | 标题，显示在列表上方 | string |             |        |
| align   | 单选框对其位置       | String | left, right | left   |
