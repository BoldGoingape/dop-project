<template>
  <div class="left-nav">
    <button @click="isCollapse = !isCollapse">展开</button>
    <div class="nav-logo">
      <!-- <span>
        <i class="el-icon-platform-eleme logo"></i>
        <img src="" alt />
        <span v-show="!isCollapse">通讯录管理</span>
      </span> -->
      <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
        <i
          v-show="!isCollapse"
          class="el-icon-s-fold expandBtn"
          @click="isCollapse = true"
        ></i>
        <i
          v-show="isCollapse"
          class="el-icon-s-fold shrinkBtn"
          @click="isCollapse = false"
        ></i>
      </el-radio-group> -->
    </div>
    <el-menu
      class="el-menu-vertical-demo"
      :unique-opened="true"
      router
      background-color="#151d41"
      text-color="#fff"
      :collapse="isCollapse"
    >
      <el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "nihao1-",
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@bgc: #151d41;
.left-nav {
  // width: 228px;
  .nav-logo {
    height: 60px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 60px;
    margin-top: 16px;
    .logo {
      font-size: 30px;
    }
    img {
      width: 28px;
      margin: 5px;
    }
    .el-radio-group {
      font-size: 20px;
      line-height: 60px;
      margin-top: 20px;
      margin-left: 10px;
      .shrinkBtn {
        position: fixed;
        left: -18px;
        top: 38px;
        color: #151d41;
        margin-left: 100px;
        transform: rotate(180deg);
      }
    }
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  .el-menu-vertical-demo {
    border: none;
    .el-menu-item {
      span {
        color: #909399;
        font-size: 16px;
      }
    }
    .el-submenu {
      span {
        color: #909399;
        font-size: 16px;
      }
      .el-menu-item {
        span {
          color: #909399;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
