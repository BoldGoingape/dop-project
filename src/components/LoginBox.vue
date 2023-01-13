<template>
  <div
    class="moneBox dialog"
    id="drag"
    style="width: 450px; background-color: white"
  >
    <div style="" class="Tiele dialog-title" @click="drag">
      <span style="margin-left: 10px;overflow:hidden">选择租户</span>
      <h1
        style="margin-left: 95%; cursor: pointer"
        @click="isShow"
        title="关闭"
      >
        X
      </h1>
    </div>
    <div class="TieleBox">
      <div class="selectItem">
        <span>选择租户</span>
        <el-select
          v-model="value"
          placeholder="请选择"
          @change="selectValue(value)"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <div class="btn">
          <el-button size="small" @click="isShow">取消</el-button>
          <el-button size="small" @click="determineBtn">确定</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import auth from "@/lib/auth.js";
import { getTenantTeams } from "@/api/khaan";
import { getConfig } from "@/api/unay";
export default {
  name: "Checksystem-",
  // props: ["isShow"],
  data() {
    return {
      options: [],
      value: ""
    };
  },
  methods: {
    //获取用户列表
    getApplicationList() {
      getConfig({ type: "TENANT_APP" })
        .then(result => {
          console.log("我是数据1", result.data[0]);
          // let app_lis = JSON.parse(result.data[0].def);
          auth.applicationList.set(result.data[0].def);
        })
        .catch(err => {
          throw err;
        });
    },
    isShow() {
      this.$bus.$emit("isShow", false);
    },
    determineBtn() {
      this.$bus.$emit("doubleShow", true);
      this.$bus.$emit("isShow", false);
      console.log("确定");
    },
    //获取租户
    selectValue(data, value) {
      // console.log(auth.userTenants.get("userTenants"));
      console.log(data);
      auth.currentTenant.set(data);
      //团队信息结果
      getTenantTeams(data)
        .then(result => {
          console.log(result);
          auth.tenantTeams.set(result.data);
          if (result.data.length > 0) {
            auth.currentTeam.set(result.data[0]);
            this.getApplicationList();
          } else {
            console.log("没有租户信息");
          }
        })
        .catch(err => {
          throw err;
        });
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
    const SelectUserTenants = auth.userTenants.get("userTenants");
    for (let index = 0; index < SelectUserTenants.length; index++) {
      this.options.push({
        label: SelectUserTenants[index].name,
        value: SelectUserTenants[index].id
      });
    }
  }
};
</script>
<style>
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter,
    .fade-leave-to

    /* .fade-leave-active, 2.1.8 版本以下 */
 {
  opacity: 0;
}
</style>
<style lang="scss" scoped>
.moneBox {
  position: absolute;
  top: 250px;
  left: 40%;
  z-index: 999;
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
  height: 180px;
  .selectItem {
    margin-left: 80px;
    margin-top: 50px;
  }
  .el-button {
    margin-top: 40px;
    width: 135px;
  }
}
</style>
