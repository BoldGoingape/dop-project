<template>
  <div>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="12" class="flex h-sys">
            <i class="el-icon-menu  wh-60"></i>
            <b class="logo"></b>
            <div>系统配置</div>
          </el-col>
          <el-col :span="12">
            <div class=" h-60 flex">
              <h3>天津市赛鸣科技有限公司</h3>
              <div>
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link">
                    <!-- {{ uname }} -->dddd
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>用户详情</el-dropdown-item>
                    <el-dropdown-item>修改密码</el-dropdown-item>
                    <el-dropdown-item divided>退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-header>
    </el-container>
  </div>
</template>

<script>
import Personal from "@/components/Personal.vue";
export default {
  data() {
    return {};
  },
  components: {
    Personal
  }
};
</script>

<style lang="scss" scoped>
.h-sys {
  div {
    width: 150px;
    text-align: center;
    background-color: #c7d0dd;
    line-height: 60px;
    font-size: 25px;
    font-weight: 500;
  }
}
.el-row {
}
.el-col {
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  min-height: 60px;
}
.row-bg {
  background-color: #f9fafc;
}
.el-header {
  padding: 0;
  //background-color: red;
}

.logo {
  height: 60px;
  width: 180px;
  // background: url(../assets/images/logo.png) 50% 2px / auto 140px no-repeat;
  //background: url() 30px 12px / auto 36px no-repeat;
  background: url(../../assets/logo.jpg) 20px -10px / auto 80px no-repeat;
}
.flex {
  display: flex;
}
.wh-60 {
  width: 80px;
  height: 60px;
  border-right: 1px solid #ccc;
  line-height: 60px;
  text-align: center;
  font-size: 25px;
}
.h-60 {
  float: right;
  margin-right: 50px;
  margin-top: 20px;
  h3 {
    margin-right: 10px;
    padding: 1px 8px;
    color: white;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    background-color: #ccc;
  }
}
</style>
