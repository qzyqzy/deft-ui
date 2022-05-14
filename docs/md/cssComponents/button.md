# Button

> Buttons with configurable type, size and customized icons.


## Import

```javascript
import { button } from "deft-ui";

Vue.component(button.name, button);
```

## Example

Configure color

:::demo

```html
<template>
  <deft-button type="default">default</deft-button>
  <deft-button type="primary">primary</deft-button>
  <deft-button type="danger">danger</deft-button>
</template>
```
:::


Configure size

:::demo
```html
<template>
  <deft-button type="primary" size="small">small</deft-button>
  <div></div>
  <br/>
  <deft-button type="primary" size="large">large</deft-button>
  <br/>
  <deft-button type="primary" size="normal">normal</deft-button>
</template>
```
:::


Disabled

:::demo

```html
<template>
  <deft-button type="primary" disabled>disabled</deft-button>
</template>
```
:::



Ghost button


:::demo

```html
<template>
  <deft-button plain>plain</deft-button>
</template>
```
:::


With icon

:::demo

```html
<template> 
  <deft-button icon="back">back</deft-button>
  <deft-button icon="more">more</deft-button>
</template>
```
:::


With custom icon

:::demo

```html
<template>
  <deft-button>
    <img src="/deft-ui/logo.png" height="20" width="20" slot="icon" />
    icon
  </deft-button>
</template>
```
:::




## API

| option   | description   | type    | acceptable values        | default |
| :------- | :------------------------------ | :------ | :----------------------- | :------ |
| plain    | if the button is a ghost button | Boolean |   | false   |
| disabled | if the button is disabled       | Boolean |  | false   |
| type | type of the button | String  | default, primary, danger | default |
| size | size of the button | String  | small, normal, large | normal  |
| icon | button icon  | String  | more, back  |        |

## Slot

| name | description    |
| :--- | :------------- |
| -    | displayed text |
| icon | custom icon    |

