<template>
  <div>
    <div class="nav">
      <deft-button
        size="small"
        @click.native.prevent="active = 'tab-container1'"
        >tab 1</deft-button
      >
      <deft-button
        size="small"
        @click.native.prevent="active = 'tab-container2'"
        >tab 2</deft-button
      >
      <deft-button
        size="small"
        @click.native.prevent="active = 'tab-container3'"
        >tab 3</deft-button
      >
    </div>
    <div class="page-tab-container">
      <deft-tab-container
        class="page-tabbar-tab-container"
        v-model="active"
        swipeable
      >
        <deft-tab-container-item id="tab-container1">
          <deft-cell
            v-for="n in 10"
            title="tab-container 1"
            :key="n"
          ></deft-cell>
        </deft-tab-container-item>
        <deft-tab-container-item id="tab-container2">
          <deft-cell
            v-for="n in 5"
            title="tab-container 2"
            :key="n"
          ></deft-cell>
        </deft-tab-container-item>
        <deft-tab-container-item id="tab-container3">
          <deft-cell
            v-for="n in 7"
            title="tab-container 3"
            :key="n"
          ></deft-cell>
        </deft-tab-container-item>
      </deft-tab-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "page-tab-container",
  data() {
    return {
      active: "tab-container1",
    };
  },
};
</script>
