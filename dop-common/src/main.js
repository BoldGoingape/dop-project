// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import elementUi from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// 全局样式引入
import "@/styles/reset.scss";
import "@/styles/widget.scss";

//滑动模块
// import dragVerify from "vue-drag-verify";
import "font-awesome/css/font-awesome.min.css";
//引入 iconfont
import "@/assets/fonts/iconfont.css";
Vue.config.productionTip = false;
Vue.use(elementUi);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  template: "<App/>"
});
