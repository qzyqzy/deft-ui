# Field

> 表单编辑器


## 引入

```javascript
import { Field } from "deft-ui";

Vue.component(Field.name, Field);
```

## 演示

:::demo

```html
<template>
  <div>
    <deft-field
      label="用户名"
      placeholder="请输入用户名"
      v-model="username"
    ></deft-field>
    <deft-field
      label="邮箱"
      placeholder="请输入邮箱"
      type="email"
      v-model="email"
    ></deft-field>
    <deft-field
      label="密码"
      placeholder="请输入密码"
      type="password"
      v-model="password"
    ></deft-field>
    <deft-field
      label="手机号"
      placeholder="请输入手机号"
      type="tel"
      v-model="phone"
    ></deft-field>
    <deft-field
      label="网站"
      placeholder="请输入网址"
      type="url"
      v-model="website"
    ></deft-field>
    <deft-field
      label="数字"
      placeholder="请输入数字"
      type="number"
      v-model="number"
    ></deft-field>
    <deft-field
      label="自我介绍"
      placeholder="自我介绍"
      type="textarea"
      rows="4"
      v-model="introduction"
    ></deft-field>

    <h2>设置校验状态</h2>
    <deft-field
      label="邮箱"
      state="success"
      v-model="email1"
      :attr="{ maxlength: 10 }"
    ></deft-field>
  </div>
</template>

<script>
export default {
  name: "field",
  data() {
    return {
      username: "",
      email: "",
      email1: "",
      introduction: "",
      birthday: "",
      number: "",
      website: "",
      phone: "",
      password: "",
    };
  },
};
</script>

```

:::



## 例子

基础用法

```html
<deft-field
  label="用户名"
  placeholder="请输入用户名"
  v-model="username"
></deft-field>

```

设置校验状态

```html
<deft-field label="邮箱" state="success" v-model="email"></deft-field>
<deft-field label="邮箱" state="error" v-model="email"></deft-field>
<deft-field label="邮箱" state="warning" v-model="email"></deft-field>
```

自定义内容（例如添加验证码）

```html
<deft-field label="验证码" v-model="captcha">
  <img src="../assets/100x100.png" height="45px" width="100px" />
</deft-field>
```

## API

| 参数         | 说明                                           | 类型    | 可选值                                                            | 默认值 |
| :----------- | :--------------------------------------------- | :------ | :---------------------------------------------------------------- | :----- |
| type         | 输入框类型                                     | String  | text, number, email, url, tel, date, datetime, password, textarea | text   |
| label        | 标签                                           | String  |                                                                   |        |
| value        | 绑定表单输入值                                 | String  |                                                                   |        |
| rows         | 类型为 textarea 时可指定高度（显示行数）       | Number  |                                                                   |        |
| placeholder  | 占位内容                                       | String  |                                                                   |        |
| disableClear | 禁用 clear 按钮                                | Booean  |                                                                   | false  |
| readonly     | readonly                                       | Boolean |                                                                   | false  |
| disabled     | disabled                                       | Boolean |                                                                   | false  |
| state        | 校验状态                                       | String  | error, success, warning                                           |        |
| attr         | 设置原生属性，例如 `:attr="{ maxlength: 10 }"` | Object  |                                                                   |        |

## Slot

| name | 描述             |
| :--- | :--------------- |
| -    | 显示的 HTML 内容 |
