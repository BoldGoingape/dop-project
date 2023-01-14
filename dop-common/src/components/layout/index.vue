<template>
  <div>
    <Header></Header>
    <Sidebar></Sidebar>
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
