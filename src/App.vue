<template>
  <div id="app">
    <!-- 测试代码 -->
    mint-ui
    <mt-cell title="标题文字"></mt-cell>
    <mt-cell title="标题文字" value="说明文字"></mt-cell>
    <mt-cell title="标题文字" to="//github.com" is-link value="带链接">
    </mt-cell>
    <mt-cell title="标题文字" icon="more" value="带 icon"></mt-cell>
    <mt-cell title="标题文字">
      <span>icon 是图片</span>
      <img slot="icon" src="@/assets/logo.png" width="24" height="24" />
    </mt-cell>
    <mt-cell title="标题" label="描述信息" is-link></mt-cell>
    <mt-cell title="标题文字" is-link>
      <span style="color: green">这里是元素</span>
    </mt-cell>
    <mt-cell title="标题文字" to="//github.com" is-link value="带链接">
    </mt-cell>
    deft-ui
    <deft-cell title="标题文字"></deft-cell>
    <deft-cell title="标题文字" value="说明文字"></deft-cell>

    <deft-cell title="标题文字" icon="more" value="带 icon"></deft-cell>
    <deft-cell title="标题文字">
      <span>icon 是图片</span>
      <img slot="icon" src="@/assets/logo.png" width="24" height="24" />
    </deft-cell>
    <deft-cell title="标题文字" to="//github.com" is-link value="带链接">
    </deft-cell>
    <deft-cell title="标题" label="描述信息" is-link></deft-cell>
    <deft-cell title="标题文字" is-link>
      <span style="color: green">这里是元素</span>
    </deft-cell>
    <deft-cell title="标题文字" to="//www.baidu.com" is-link value="带链接">
    </deft-cell>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
