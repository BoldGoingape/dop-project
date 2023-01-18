<template>
  <div class="box">
    <el-menu
      default-active="1"
      @open="handleOpen"
      @close="handleClose"
      background-color=" #2dad76"
      text-color="#fff"
      active-text-color="#ffff"
      :router="true"
      :default-active="$route.path"
    >
      <el-menu-item
        :index="item.path"
        v-for="item in noChildren(this.menuList)"
        :key="item.path"
      >
        <i :class="item.meta.img"></i>
        <span>{{ item.meta.label }}</span>
      </el-menu-item>
      <el-submenu
        :index="item.path"
        v-for="item in hasChildren(this.menuList)"
        :key="item.path"
      >
        <template slot="title">
          <i :class="item.meta.img"></i>
          <span>{{ item.meta.label }}</span>
        </template>
        <!-- 二级 -->
        <el-menu-item
          :index="sub.path"
          v-for="sub in noChildren(item.children)"
          :key="sub.path"
          >{{ sub.meta.label }}</el-menu-item
        >
        <!--三级-->
        <el-submenu
          :index="subs.path"
          v-for="subs in hasChildren(item.children)"
          :key="subs.path"
        >
          <template slot="title">{{ subs.meta.label }}</template>
          <el-menu-item
            :index="item.path"
            v-for="item in subs.children"
            :key="item.path"
            >{{ item.meta.label }}</el-menu-item
          >
        </el-submenu>
      </el-submenu>
      <!-- end -->
    </el-menu>
  </div>
</template>

<script>
import myRouter from "@/router/index";
export default {
  data() {
    return {
      menuList: [],
      dataObj: {}
    };
  },
  mounted() {
    // 取第一个
    this.menuList = myRouter.options.routes[0].children.slice(1);

    console.log(this.menuList);
  },
  computed: {
    /**
     * 无children
     */
    noChildren() {
      return function(arr) {
        return arr.filter(item => !item.children);
      };
    },
    /**
     * 有children
     */
    hasChildren() {
      return function(arr) {
        return arr.filter(item => item.children);
      };
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {}
  }
};
</script>

<style lang="scss" scoped>
i {
  color: white;
}
.box {
  width: 180px;
  background-color: #2dad76;
  height: calc(100vh - 60px);
}
/deep/ i {
  color: white;
}

.el-submenu .el-menu-item {
  min-width: 170px;
}
/deep/ .el-menu-item.is-active {
  background-color: rgb(5, 100, 59) !important;
}
</style>
