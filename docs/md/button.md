# Button

这是 button 组件

---

## Import

```javascript
import { button } from "deft-ui";

Vue.component(button.name, button);
```

## Example

颜色

```html
<deft-button type="default">default</deft-button>
<deft-button type="primary">primary</deft-button>
<deft-button type="danger">danger</deft-button>
```

<deft-button type="default">default</deft-button>
<deft-button type="primary">primary</deft-button>
<deft-button type="danger">danger</deft-button>


大小

```html
<deft-button size="small">small</deft-button>
<deft-button size="large">large</deft-button>
<deft-button size="normal">normal</deft-button>
```

<deft-button size="small">small</deft-button>
<deft-button size="large">large</deft-button>
<deft-button size="normal">normal</deft-button>


禁用

```html
<deft-button disabled>disabled</deft-button>
```

<deft-button disabled>disabled</deft-button>


幽灵

```html
<deft-button plain>plain</deft-button>
```
<deft-button plain>plain</deft-button>


With icon

```html
<deft-button icon="back">back</deft-button> 
<deft-button icon="more">more</deft-button>
```
<deft-button icon="back">back</deft-button>
<deft-button icon="more">more</deft-button>



With custom icon

```html
<deft-button>
  <img src="/logo.png" height="20" width="20" slot="icon" />
  icon
</deft-button>
```
<deft-button>
  <img src="/logo.png" height="20" width="20" slot="icon" />
  icon
</deft-button>



## API

| option   | description                     | type    | acceptable values        | default |
| :------- | :------------------------------ | :------ | :----------------------- | :------ |
| plain    | if the button is a ghost button | Boolean |                          | false   |
| disabled | if the button is disabled       | Boolean |                          | false   |
| type     | type of the button              | String  | default, primary, danger | default |
| size     | size of the button              | String  | small, normal, large     | normal  |
| icon     | button icon                     | String  | more, back               |         |

## Slot

| name | description    |
| :--- | :------------- |
| -    | displayed text |
| icon | custom icon    |
