<template>
  <div class="moneBox" style="width: 450px; background-color: white">
    <div style="" class="Tiele">
      <span style="margin-left: 10px">选择租户</span>
      <h1 style="margin-left: 95%; cursor: pointer" @click="isShow">X</h1>
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
          <el-button size="small">确定</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import auth from "@/lib/auth.js";
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
    isShow() {
      this.$bus.$emit("isShow", false);
    },
    //租户方法
    selectValue(data) {
      console.log(auth.userTenants.get("userTenants"));
      console.log(data);
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
<style lang="scss" scoped>
.moneBox {
  position: absolute;
  top: 250px;
  left: 35%;
  z-index: 999;
}
.Tiele {
  height: 50px;
  line-height: 50px;
  background-color: #0080c9;
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
    width: 150px;
  }
}
</style>
