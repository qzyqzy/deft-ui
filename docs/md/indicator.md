# Indicator


## Import

```javascript
import { Indicator } from "deft-ui";
```

## Example

Open an indicator

```javascript
Indicator.open();
```

Display text below the spinner

```javascript
Indicator.open("Loading...");
```

Open an indicator with an object

```javascript
Indicator.open({
  text: "Loading...",
  spinnerType: "fading-circle"
});
```

Then close it

```javascript
Indicator.close();
```

better
```javascript
this.$nextTick(() => {
    Indicator.close();
});
```




## API

| 属性 | 描述 | 类型   | 接收的值 | 默认值 |
| :---------- | :------------------ | :----- | :------------------------------------------------------ | :------ |
| text        | indicator text      | String |                                                         |         |
| spinnerType | type of the spinner | String | 'snake' 'fading-circle' 'double-bounce' 'triple-bounce' | 'snake' |
