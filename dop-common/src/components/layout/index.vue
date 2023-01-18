<template>
  <div>
    <Header></Header>
    <div style="display:flex">
      <Sidebar></Sidebar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./header.vue";
import Sidebar from "./sidebar.vue";

export default {
  data() {
    return {};
  },
  components: {
    Header,
    Sidebar
  }
};
</script>

<style lang="scss" scoped>
/deep/ i {
  color: #e9eef3;
}
</style>
