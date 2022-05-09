# Spinner

这是 Spinner 组件

---

## Import

```javascript
import { spinner } from "deft-ui";

Vue.component(spinner.name, spinner);
```

## Example

类型

```html
<deft-spinner type="snake"></deft-spinner>
<deft-spinner type="double-bounce"></deft-spinner>
<deft-spinner type="triple-bounce"></deft-spinner>
<deft-spinner type="fading-circle"></deft-spinner>

or

<deft-spinner :type="1"></deft-spinner>
```

<deft-spinner type="snake"></deft-spinner>
<deft-spinner :type="0"></deft-spinner>

<deft-spinner type="double-bounce"></deft-spinner>
<deft-spinner type="triple-bounce"></deft-spinner>
<deft-spinner type="fading-circle"></deft-spinner>




大小与颜色

```html
<deft-spinner :size="40" color="pink"></deft-spinner>
```

<deft-spinner :size="40" color="pink"></deft-spinner>



## API

| 属性     | 描述         | 类型    | 接收的值                    | 默认值  |
| :------- | :----------- | :------ | :-------------------------- | :------ |
| type    | 显示类型 | string|number |   | false   |
| size     | 尺寸    | String  |  | 30
| color     | 颜色   | String  |   |    #999     |

