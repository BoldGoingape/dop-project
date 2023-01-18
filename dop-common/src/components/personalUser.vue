<template name="test-slide-fade">
  <div class="background-log">
  <div
    class="moneBox dialog"
    id="drag"
    style="width: 900px; background-color: white"
  >
    <div style="" class="Tiele dialog-title" @click="drag">
      <span style="margin-left: 10px;overflow:hidden;font-size:20px"
        >查看个人信息</span
      >
      <h1
        style="margin-left: 95%; cursor: pointer"
        title="关闭"
        @click="isShow"
      >
        X
      </h1>
    </div>

    <div class="TieleBox">
      <el-descriptions class="margin-top" :column="2" border>
                    <el-descriptions-item label="用户姓名 :">
                      {{ profile.fullname }}
                    </el-descriptions-item>
                    <el-descriptions-item label="手机号码 :">
                      {{ profile.mobile }}
                    </el-descriptions-item>
                    <el-descriptions-item label="电子邮箱 :">
                      {{ profile.email }}
                    </el-descriptions-item>
                    <el-descriptions-item label="用户职责 :">
                    </el-descriptions-item>
                    <el-descriptions-item label="所属组织 :">
                      {{ tenantTeams.name }}
                    </el-descriptions-item>
                    <el-descriptions-item label="职务 :">
                      {{ tenantTeams.member.duty }}
                    </el-descriptions-item>
                    <el-descriptions-item label="身份证号 :">
                      {{ profile.identityNumber }}
                    </el-descriptions-item>
                    <el-descriptions-item label="员工卡号 :">
                    </el-descriptions-item>
                    <el-descriptions-item label="员工工号 :">
                    </el-descriptions-item>
                    <el-descriptions-item label="工作电话 :">
                    </el-descriptions-item>
                    <el-descriptions-item label="K3编码 :">
                    </el-descriptions-item>
                    <el-descriptions-item label="WMS编码 :">
                    </el-descriptions-item>
                    <el-descriptions-item label="钉钉账号 :">
                    </el-descriptions-item>
                    <el-descriptions-item label="微信账号 :">
                    </el-descriptions-item>
                  </el-descriptions>
      </div>
    </div>
  </div>
</template>
</template>
<script>
import auth from "@/lib/auth.js"
export default {
  name: "personalUser",
  // props: ["isShow"],
  data() {
    return {
      options: [],
      value: "",
      size: '',
       tenantTeams: auth.tenantTeams.get()[0],
       profile: auth.profile.get(),
    };
  },
  methods: {
    isShow() {
      this.$bus.$emit("isUserShow", false);
    },
    //拖拽
    drag() {
      let drag = document.getElementById("drag");
      drag.onmousedown = function(e) {
        let diffX = e.clientX - drag.offsetLeft; //鼠标距box边框的距离
        let diffY = e.clientY - drag.offsetTop;
        document.onmousemove = function(e) {
          let left = e.clientX - diffX;
          let top = e.clientY - diffY;
          //控制在视窗内
          if (left < 0) {
            left = 0;
          } else if (left > window.innerWidth - drag.offsetWidth) {
            left = window.innerWidth - drag.offsetWidth;
          }
          if (top < 0) {
            top = 0;
          } else if (top > window.innerHeight - drag.offsetHeight) {
            top = window.innerHeight - drag.offsetHeight;
          }
          drag.style.left = left + "px";
          drag.style.top = top + "px";
        };
        document.onmouseup = function(e) {
          // console.log(this);
          this.onmousemove = null;
          this.onmouseup = null;
        };
      };
    }
  },
  mounted() {
    console.log(auth.profile.get());
  }
};
</script>
<style lang="scss" scoped>
.background-log {
  width: 100%;
  height: 100vh;
  z-index: 999;
  position: absolute;
  background: rgba(143, 136, 136, 0.384);
  top: 0px;
}
.moneBox {
  position: relative;
  top: 200px;
  left: 30%;


}
#drag {
  position: absolute;
  justify-content: center;
  position: absolute;
}
.Tiele {
  cursor: move;
  height: 50px;
  line-height: 50px;
  background-color: rgba(231, 231, 231, 0.5);
  span {
    float: left;
  }
}
.TieleBox {
  height: 250px;
  .selectItem {
    margin-left: 80px;
  }
  .el-button {
    margin-top: 40px;
    width: 135px;
  }
}
</style>
