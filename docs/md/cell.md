# Cell

这是 cell 组件、可用于 list, link or form.

---

## Import

```javascript
import { cell } from "deft-ui";

Vue.component(cell.name, cell);
```

## Example

Basic usage

```html
<deft-cell title="标题文字"></deft-cell>
<deft-cell title="标题文字" value="说明文字"></deft-cell>
```

<deft-cell title="标题文字"></deft-cell>
<deft-cell title="标题文字" value="说明文字"></deft-cell>


Clickable link

```html
<deft-cell title="标题文字" to="//www.baidu.com" is-link value="带链接"> </deft-cell>
```
<deft-cell title="标题文字" to="//www.baidu.com" is-link value="带链接"> </deft-cell>

With icon

```html
<deft-cell title="标题文字" icon="more" value="带 icon"></deft-cell>
```
<deft-cell title="标题文字" icon="more" value="带 icon"></deft-cell>

With custom icon

```html
<deft-cell title="标题文字">
  <p>icon 是图片</p>
  <img slot="icon" src="./assets/100x100.png" width="24" height="24" />
</deft-cell>
```
<deft-cell title="标题文字">
  <p>icon 是图片</p>
  <img slot="icon" src="/deft-ui/logo.png" width="24" height="24" />
</deft-cell>


Custom content

```html
<deft-cell title="标题文字" is-link>
  <p style="color: green">这里是元素</p>
</deft-cell>
```
<deft-cell title="标题文字" is-link>
  <p style="color: green">这里是元素</p>
</deft-cell>

With description

```html
<deft-cell title="标题" label="描述信息" is-link></deft-cell>
```
<deft-cell title="标题" label="描述信息" is-link></deft-cell>

## API

| 属性  | 描述 | 类型 | 接收的值 | 缺省值 |
| :------ | :--------------------------------------------------- | :------ | :---------------- | :------ |
| icon    | cell icon | String  | back, more        |         |
| title   | 标题 | String  |    |    |
| to      | 链接 | String  |                   |         |
| value   | 内容 | \*    |                   |         |
| label   | 标题下的描述  | String  |                   |         |
| is-link | 如果为链接、与 `to` 共用 | Boolean |    |         |

## Slot

| name  | 描述    |
| :---- | :------------- |
| -     | 同 value |
| title | 标题 |
| icon  | custom icon |
