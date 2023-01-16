<template>
  <div>
    <el-container>
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        background-color="#2dad76"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        text-color="#fff"
      >
        <el-submenu index="1" :popper-append-to-body="false">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>

          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>

      <el-main>
        <div class="banner-box">
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <button @click="isCollapse = !isCollapse">按钮</button>
          </el-radio-group>
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import myRouter from "@/router/index";
export default {
  data() {
    return {
      isShow: true,
      isCollapse: true
    };
  },
  mounted() {
    // console.log(this.$route);
    console.log(myRouter);
  },
  methods: {
    Hello() {
      console.log("我被");
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style>
.el-icon-location {
  color: #e9eef3 !important;
}
.el-menu {
  border-right: none;
}

.el-aside {
  background-color: #2dad76;
  color: #333;
  height: calc(100vh - 60px);
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.banner-box {
  background-color: #cccc;
  height: calc(100vh - 95px);
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}
.el-menu-item.is-active {
  background-color: #397d54 !important;
}
.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.left-enter,
.left-leave-to {
  transform: translate3d(-100%, 0, 0);
}
.left-leave,
.left-enter-to {
  transform: translate3d(0, 0, 0);
}
.left-enter-active,
.left-leave-active {
  transition: all 0.3s;
}
</style>
