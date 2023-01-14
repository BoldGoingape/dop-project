import vue from "vue";
import router from "vue-router";

vue.use(router);

const constantRouterMap = [
  {
    path: "/common",
    name: "common_index",
    component: resolve => require(["@/components/layout/index"], resolve),
    children: [
      {
        path: "/common/home",
        name: "common_home",
        component: resolve => require(["@/views/home"], resolve),
        meta: {
          label: "首页"
        }
      }
    ]
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
