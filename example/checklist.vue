<template>
  <div>
    <mt-checklist
      title="复选框列表"
      v-model="value"
      :options="['选项A', '选项B', '选项C']"
    >
    </mt-checklist>
    <br />

    <div></div>

    <deft-checklist
      title="单选框列表"
      v-model="value"
      :options="['选项A', '选项B', '选项C']"
    >
    </deft-checklist>

    <p>设置禁用项</p>
    <!-- 设置禁用项 -->
    <deft-checklist
      :max="1"
      title="单选框列表"
      v-model="value1"
      align="right"
      :options="options"
    >
    </deft-checklist>
  </div>
</template>

<script>
export default {
  name: "checklist",
  data() {
    return {
      value: [],
      value1: [],
      options: [
        {
          label: "被禁用",
          value: "值F",
          disabled: true,
        },
        {
          label: "选项A",
          value: "值A",
        },
        {
          label: "选项B",
          value: "值B",
        },
      ],
    };
  },
};
</script>
