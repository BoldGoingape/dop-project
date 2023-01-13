<template>
  <div v-loading="loading">
    <el-container>
      <el-header height="80px">
        <h1 class="logo">logo</h1>
      </el-header>
      <el-main class="flex">
        <el-row style="margin-top: 150px;">
          <el-col :span="10" class="dop-des">
            <h3>立足行业标杆方案</h3>
            <h3>解决企业个性问题</h3>
            <el-divider></el-divider>
            <p>
              在行业标杆的规范基础上，针对企业自身特点，建立的数字化、透明化、协同化运营管理体系，满足企业快速发展的需求。
            </p>
          </el-col>
          <el-col :span="6" :offset="8" class="box-log">
            <h2 class="btn-18">登录</h2>
            <!--  -->
            <el-form
              :model="ruleForm"
              status-icon
              :rules="rules"
              size:medium
              ref="ruleForm"
              label-width="5px"
              class="demo-ruleForm"
            >
              <el-form-item prop="userName">
                <el-input
                  type="text"
                  v-model="ruleForm.userName"
                  prefix-icon="el-icon-user ft-gray"
                ></el-input>
              </el-form-item>
              <el-form-item prop="userPassWord">
                <el-input
                  type="password"
                  prefix-icon="el-icon-lock ft-gray"
                  v-model="ruleForm.userPassWord"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <!-- 滑动 -->
                <drag-verify
                  :width="width"
                  :height="height"
                  :text="text"
                  :circle="false"
                  :success-text="successText"
                  :background="background"
                  :progress-bar-bg="progressBarBg"
                  :completed-bg="completedBg"
                  :handler-bg="handlerBg"
                  :handler-icon="handlerIcon"
                  :text-size="textSize"
                  :success-icon="successIcon"
                  ref="Verify"
                  @passcallback="passcallback"
                >
                  >
                </drag-verify>
              </el-form-item>
              <el-form-item>
                <a href="#javascirp">找回密码</a>
                <el-checkbox v-model="checked" class="remember"
                  >记住我</el-checkbox
                >
              </el-form-item>
              <el-form-item>
                <el-button
                  type="primary"
                  @click="submitForm()"
                  :disabled="isAble"
                  >登录</el-button
                >
              </el-form-item>
            </el-form>

            <!--  -->
          </el-col>
        </el-row>
      </el-main>
      <el-footer height="180px">
        <div class="des-items">
          <figure>
            <i class="iconfont icondata_ico"></i>
            <figcaption>数据整合</figcaption>
          </figure>
          <figure>
            <i class="iconfont iconres_ico"></i>
            <figcaption>流程协同</figcaption>
          </figure>
          <figure>
            <i class="iconfont iconoper_ico"></i>
            <figcaption>体系诊断</figcaption>
          </figure>
          <figure>
            <i class="iconfont iconupgrade_ico"></i>
            <figcaption>企业升级</figcaption>
          </figure>
        </div>
        <ul class="copy">
          <li>Copyright(C)2020</li>
          <li>数易智慧@2020</li>
          <li>ICP备12003508号-15</li>
          <li>公安备1553508号-15</li>
        </ul>
      </el-footer>
    </el-container>
    <loginBox v-show="isShow"> </loginBox>
    <Tenant_app v-show="doubleShow" />
  </div>
</template>
<script>
import "@/styles/login.scss";
import dragVerify from "vue-drag-verify";
import Cookies from "js-cookie";
import { login, UserList, userTenants } from "@/api/khaan";
import userAuth from "@/lib/auth.js";
//md5
import crypto from "crypto-js";
import loginBox from "@/components/LoginBox.vue";
import { getConfig } from "@/api/unay";
import Tenant_app from "@/components/Tenant_app.vue";
export default {
  props: {},
  data() {
    //
    var validatePass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入用户"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入密码"));
      }
    };
    return {
      doubleShow: false,
      isShow: false,
      checked: false,
      loading: "",
      // 滑动模块
      handlerIcon: "fa fa-angle-double-right",
      successIcon: "fa fa-check",
      background: "#cccccc",
      progressBarBg: "#4b0",
      completedBg: "#66cc66",
      handlerBg: "#fff",
      text: "请将滑块拖动到右侧",
      successText: "验证成功",
      width: 320,
      height: 42,
      textSize: "18px",
      ruleForm: {
        userName: "",
        userPassWord: "123456"
      },
      isAble: true,
      rules: {
        userName: [{ validator: validatePass, trigger: "blur" }],
        userPassWord: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },

  computed() {},

  mounted() {
    this.ruleForm.userName = Cookies.get("UserName");
    this.checked = Cookies.get("checked");
    this.$bus.$on("isShow", data => {
      this.isShow = data;
      console.log("我是接受值", data);
    });
    this.$bus.$on("doubleShow", data => {
      console.log("我接受到2的值", data);
      this.doubleShow = data;
    });
  },
  components: {
    dragVerify,
    loginBox,
    Tenant_app
  },
  methods: {
    // 登录按钮
    submitForm(x) {
      this.loading = "true";
      //登录接口login
      login(
        this.ruleForm.userName,
        crypto.MD5(this.ruleForm.userPassWord).toString()
      )
        .then(async result => {
          Cookies.set("UserName", this.ruleForm.userName, 30);
          //存储 token
          userAuth.token.set(result.data.access_token);
          //用户列表
          let userListProfile = await UserList();
          userAuth.profile.set(userListProfile.data);
          //租户列表
          if (result.data.tenants.length == 0) {
            this.$message.error({
              message: "当前用户没有租户",
              type: "success"
            });
          } else {
            userAuth.userTenants.set(result.data.tenants);
          }
          setTimeout(() => {
            this.isShow = true;
            this.loading = false;
            this.open();
          }, 1000);
        })
        .catch(err => {
          setTimeout(() => {
            this.loading = false;
            this.open4();
          }, 1000);
          Cookies.remove("UserName");
          throw err;
        });
    },
    passcallback() {
      this.isAble = false;
    },
    open() {
      this.$message({
        message: "登录成功！",
        type: "success"
      });
    },
    open4() {
      this.$message.error("用户名或密码错误！");
    }
  },
  watch: {
    checked: {
      handler(value, oldvalue) {
        console.log(value, oldvalue);
        if (value) {
          this.checked = true;
          if (this.ruleForm.userName !== undefined) {
            Cookies.set("UserName", this.ruleForm.userName, 30);
            Cookies.set("checked", value, 30);
          }
        }
        if (!value) {
          Cookies.remove("UserName");
          Cookies.remove("checked");
        }
      }
    }
  }
};
</script>

<style scoped lang="scss"></style>
