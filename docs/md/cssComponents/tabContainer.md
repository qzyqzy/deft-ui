# tab-container

> 面板，可切换显示子页面。


## 引入

```javascript
import { TabContainer, TabContainerItem } from 'deft-ui';

Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
```
## 演示

:::demo

```html
<template>
  <div>
    <div class="nav">
      <deft-button
        size="small"
        @click.native.prevent="active = 'tab-container1'"
        >tab 1</deft-button
      >
      <deft-button
        size="small"
        @click.native.prevent="active = 'tab-container2'"
        >tab 2</deft-button
      >
      <deft-button
        size="small"
        @click.native.prevent="active = 'tab-container3'"
        >tab 3</deft-button
      >
    </div>
    <div class="page-tab-container">
      <deft-tab-container
        class="page-tabbar-tab-container"
        v-model="active"
        swipeable
      >
        <deft-tab-container-item id="tab-container1">
          <deft-cell
            v-for="n in 10"
            title="tab-container 1"
            :key="n"
          ></deft-cell>
        </deft-tab-container-item>
        <deft-tab-container-item id="tab-container2">
          <deft-cell
            v-for="n in 5"
            title="tab-container 2"
            :key="n"
          ></deft-cell>
        </deft-tab-container-item>
        <deft-tab-container-item id="tab-container3">
          <deft-cell
            v-for="n in 7"
            title="tab-container 3"
            :key="n"
          ></deft-cell>
        </deft-tab-container-item>
      </deft-tab-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "page-tab-container",
  data() {
    return {
      active: "tab-container1",
    };
  },
};
</script>

```

:::



## 例子

改变 ative 的值，与 `<tab-container-item>` 的 id 一致即显示对应页面。

```html
<deft-tab-container v-model="active">
  <deft-tab-container-item id="tab-container1">
    <deft-cell v-for="n in 10" title="tab-container 1"></deft-cell>
  </deft-tab-container-item>
  <deft-tab-container-item id="tab-container2">
    <deft-cell v-for="n in 5" title="tab-container 2"></deft-cell>
  </deft-tab-container-item>
  <deft-tab-container-item id="tab-container3">
    <deft-cell v-for="n in 7" title="tab-container 3"></deft-cell>
  </deft-tab-container-item>
</deft-tab-container>
```

## API

### tab-container

| 参数      | 说明          | 类型    | 可选值 | 默认值 |
| :-------- | :------------ | :------ | :----- | :----- |
| value     | 当前激活的 id | *       |        |        |
| swipeable | 显示滑动效果  | Boolean |        | true  |

### tab-container-item

| 参数 | 说明       | 类型 | 可选值 | 默认值 |
| :--- | :--------- | :--- | :----- | :----- |
| id   | item 的 id | *    |        |        |

## Slot

### tab-container

| name | 描述 |
| :--- | :--- |
| -    | 内容 |

### tab-container-item

| name | 描述 |
| :--- | :--- |
| -    | 内容 |