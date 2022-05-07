# Deft UI

> Mobile UI elements for **Vue 2.0**

## 安装

```shell
npm i deft-ui -S
```

## 使用

全部引入.

```javascript
import Vue from "vue";
import Deft from "deft-ui";

Vue.use(Deft);
```

按需引入.

```javascript
import Vue from "vue";
import { button } from "deft-ui";

Vue.component(button.name, button);
```

## License

MIT
