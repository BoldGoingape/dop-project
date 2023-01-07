import vue from "vue";
import router from "vue-router";

vue.use(router);

const constantRouterMap = [
  {
    path: "/",
    name: "home",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    component: resolve => require(["@/views/login"], resolve)
  },
  {
    path: "/404",
    name: "404",
    component: resolve => require(["@/views/404"], resolve)
  },
  {
    path: "*",
    redirect: "/404"
  }
];

const myRouter = new router({
  base: "/",
  routes: constantRouterMap,
  mode: "history"
});

export default myRouter;
