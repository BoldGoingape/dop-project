<template>
  <div>
    <el-container>
      <transition name="left">
        <el-aside width="200px" v-if="isShow">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#2dad76"
            text-color="#fff"
            active-text-color="#fffff"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo "
            background-color="#2dad76"
            text-color="#fff"
            active-text-color="#fffff"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location "></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
      </transition>
      <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group> -->
      <el-menu
        v-if="!isShow"
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        background-color="#2dad76"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>

      <el-main>
        <div class="banner-box">
          <button @click="isShow = !isShow">切换</button
          ><router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      isCollapse: true
    };
  },
  methods: {
    isShow() {
      setTimeout(() => {
        this.isCollapse = !this.isCollapse;
      }, 0.5);
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
