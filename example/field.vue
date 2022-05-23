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
