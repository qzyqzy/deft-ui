# Checklist

> 复选框列表


## 引入

```javascript
import { Checklist } from "deft-ui";

Vue.component(Checklist.name, Checklist);
```


## 演示

:::demo

```html
<template>
  <div>
    <deft-checklist
      title="单选框列表"
      v-model="value"
      :options="['选项A', '选项B', '选项C']"
    >
    </deft-checklist>

    <p>设置禁用项</p>
    <!-- 设置禁用项 -->
    <deft-checklist
      :max="1"
      title="单选框列表"
      v-model="value1"
      :options="options"
    >
    </deft-checklist>

  </div>
</template>

<script>
export default {
  name: "checklist",
  data() {
    return {
      value: [],
      value1: [],
      options: [
        {
          label: "被禁用",
          value: "值F",
          disabled: true,
        },
        {
          label: "选项A",
          value: "值A",
        },
        {
          label: "选项B",
          value: "值B",
        },
      ],
    };
  },
};
</script>

```
:::



## 例子

基本用法

```html
<deft-checklist
  title="复选框列表"
  v-model="value"
  :options="['选项A', '选项B', '选项C']"
>
</deft-checklist>
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
    label: '选中禁用',
    value: '选中禁用的值',
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
```

```html

<deft-checklist
  v-model="value"
  :options="options">
</deft-checklist>
```

设置最大可选数

```html
<deft-checklist :max="2" v-model="value" :options="options"> </deft-checklist>
```

选择框右对齐

```html
<deft-checklist align="right" title="右对齐" v-model="value" :options="options">
</deft-checklist>
```

## API

| 参数    | 说明                                             | 类型   | 可选值      | 默认值 |
| :------ | :----------------------------------------------- | :----- | :---------- | :----- |
| options | 选择项，可直接传字符串数组或者对象数组           | Array  |             |        |
| value   | 绑定值                                           | Array  |             |        |
| title   | 标题，显示在列表上方                             | string |             |        |
| max     | 最多可选个数，超过后其他未选择的选项变成禁用状态 | Number |             |        |
| align   | 复选框对其位置                                   | String | left, right | left   |
