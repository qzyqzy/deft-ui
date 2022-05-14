# Cell

> A cell to display list, link or form.


## Import

```javascript
import { cell } from "deft-ui";

Vue.component(cell.name, cell);
```

## Example

Basic usage

:::demo

```html
<template>
  <deft-cell title="标题文字"></deft-cell>
  <deft-cell title="标题文字" value="说明文字"></deft-cell>
</template>
```
:::


Clickable link

:::demo
```html
<template>
  <deft-cell title="标题文字" to="//github.com" is-link value="带链接"> </deft-cell>
</template>
```
:::

With icon


:::demo
```html
<template>
  <deft-cell title="标题文字" icon="more" value="带 icon"></deft-cell>
</template>
```
:::


With custom icon

:::demo

```html
<template>
  <deft-cell title="标题文字">
    <p>icon 是图片</p>
    <img slot="icon" src="/deft-ui/logo.png" width="24" height="24" />
  </deft-cell>
</template>
```
:::

Custom content

:::demo

```html
<template>
  <deft-cell title="标题文字" is-link>
    <p style="color: green">这里是元素</p>
  </deft-cell>
</template>
```
:::



With description

:::demo

```html
<template>
  <deft-cell title="标题" label="描述信息" is-link></deft-cell>
</template>
```
:::


## API

| option  | description | type    | acceptable values | default |
| :------ | :--------------------------------------------------- | :------ | :---------------- | :------ |
| icon    | cell icon   | String  | back, more    |         |
| title   | title of the cell  | String  |    |         |
| to      | link | String  |    |         |
| value   | content of the cell | \*      |    |         |
| label | a description shown underneath the title | String  |   |   |
| is-link | if the cell is a link, works with the `to` attribute | Boolean |  |  |

## Slot

| name  | description    |
| :---- | :------------- |
| -     | custom content |
| title | custom title   |
| icon  | custom icon    |

