# Spinner

> A loading spinner with custom type, size and color.

## Import

```javascript
import { spinner } from "deft-ui";

Vue.component(spinner.name, spinner);
```

## Example

Custom type

:::demo accepts a 0-3 number 同样生效

```html
<template> 
 <deft-cell title="snake">
  <deft-spinner type="snake"></deft-spinner>
 </deft-cell>
 <deft-cell title="double-bounce">
  <deft-spinner type="double-bounce"></deft-spinner>
 </deft-cell>
 <deft-cell title="triple-bounce">
  <deft-spinner type="triple-bounce"></deft-spinner>
 </deft-cell>
 <deft-cell title="fading-circle">
  <deft-spinner type="fading-circle"></deft-spinner>
 </deft-cell>

</template>
```
:::


Custom color

:::demo

```html
<template> 
 <deft-cell title="#26a2ff">
  <deft-spinner type="fading-circle" color="#26a2ff"></deft-spinner>
 </deft-cell>
 <deft-cell title="rgb(100, 100, 100)">
  <deft-spinner type="fading-circle" color="rgb(100, 100, 100)"></deft-spinner>
 </deft-cell>
 <deft-cell title="yellow">
  <deft-spinner type="fading-circle" color="yellow"></deft-spinner>
 </deft-cell>


</template>
```
:::

Custom size

:::demo

```html
<template> 
 <deft-spinner :size="60"></deft-spinner>
</template>
```
:::

## API

| option | description  | type | acceptable values | default |
| :----- | :-------------------------------------------------------------- | :------------- | :---------------------------------------------- | :------ |
| type   | type of the spinner. Accepts a name(String) or an index(Number) | String, Number | snake double-bounce triple-bounce fading-circle | snake   |
| color | color of the spinner. Hex and RGB format accepted | String  |  | #ccc |
| size | size of the spinner(in pixel)  | Number  |     | 28      |
