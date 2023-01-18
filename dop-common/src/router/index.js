import vue from "vue";
import router from "vue-router";

vue.use(router);

const constantRouterMap = [
  // { path: "/", name: "home", redirect: "/common/home" },
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
      },
      {
        path: "/common/organization",
        name: "organization",
        component: resolve => require(["@/views/organization"], resolve),
        meta: {
          label: "组织架构",
          img: "iconfont iconorg_ico"
        }
      },
      {
        path: "/common/user",
        name: "user",
        component: resolve => require(["@/views/organization"], resolve),
        meta: {
          label: "用户管理",
          img: "iconfont iconuser_ico"
        }
      },
      {
        path: "/common/permission",
        name: "permission",
        component: resolve => require(["@/views/organization"], resolve),
        meta: {
          label: "权限设置",
          img: "iconfont iconrighr_ico"
        }
      },
      {
        path: "/common/role",
        name: "role",
        component: resolve => require(["@/views/organization"], resolve),
        meta: {
          label: "角色设置",
          img: "iconfont iconrole_ico"
        }
      },
      {
        path: "/common/dictionary",
        name: "dictionary",
        component: resolve => require(["@/views/organization"], resolve),
        meta: {
          label: "数据字典",
          img: "iconfont iconetc"
        },
        children: [
          {
            path: "/common/dictionary/static",
            name: "dictionaryStatic",
            component: resolve => require(["@/views/organization"], resolve),
            meta: {
              label: "静态数据字典"
            }
          },
          {
            path: "/common/dictionary/dynamic",
            name: "dynamicStatice",
            component: resolve => require(["@/views/organization"], resolve),
            meta: {
              label: "动态数据字典"
            },
            children: [
              {
                path: "/common/dictionary/dynamic/level3",
                name: "dictionaryStaticLevel",
                component: resolve =>
                  require(["@/views/organization"], resolve),
                meta: {
                  label: "A三级菜单"
                }
              }
            ]
          }
        ]
      },
      {
        path: "/common/work",
        name: "work",
        component: resolve => require(["@/views/organization"], resolve),
        meta: {
          label: "业务单元",
          img: "iconfont iconfenbufenxiang"
        },
        children: [
          {
            path: "/common/work/unit",
            name: "workUnit",
            component: resolve => require(["@/views/organization"], resolve),
            meta: {
              label: "业务单元"
            }
          },
          {
            path: "/common/work/organization",
            name: "workFunction",
            component: resolve => require(["@/views/organization"], resolve),
            meta: {
              label: "组织职能"
            }
          }
        ]
      },
      {
        path: "/common/AndonSim",
        name: "AndonSim",
        component: resolve => require(["@/views/organization"], resolve),
        meta: {
          label: "AndonSim",
          img: "iconfont iconchengshidizhi"
        }
      },
      {
        path: "/common/setting",
        name: "setting",
        component: resolve => require(["@/views/organization"], resolve),
        meta: {
          label: "参数设置",
          img: "iconfont iconsetup_ico1"
        }
      },
      {
        path: "/common/log",
        name: "log",
        component: resolve => require(["@/views/organization"], resolve),
        meta: {
          label: "系统日志",
          img: "iconfont icontubiaozhizuomoban-145"
        },
        children: [
          {
            path: "/common/log/action",
            name: "logAction",
            component: resolve => require(["@/views/organization"], resolve),
            meta: {
              label: "行为日志"
            }
          }
        ]
      }
    ]
  },
  {
    path: "/404",
    redirect: "404",
    component: resolve => require(["@/views/404"], resolve)
  },
  {
    path: "*",
    name: "404"
  }
];
// mode: "history"
const myRouter = new router({
  base: "/",
  routes: constantRouterMap,
  mode: "hash"
});

export default myRouter;
