//存储用户信息
import commonUtils from "@/lib/utils.js";
const userAuth = {
  token: {
    set(token) {
      commonUtils.storage.setSession("token", "Bearer " + token);
    },
    get() {
      return commonUtils.storage.getSession("token");
    }
  },
  //缓存用户信息
  profile: {
    set(value) {
      console.log(value);
      commonUtils.storage.setSession("profile", JSON.stringify(value));
    },
    get() {
      return JSON.parse(commonUtils.storage.getSession("token"));
    }
  },
  //租户缓存
  userTenants: {
    set(value) {
      commonUtils.storage.setSession("userTenants", JSON.stringify(value));
    },
    get() {
      return JSON.parse(commonUtils.storage.getSession("userTenants"));
    }
  },
  //租住团队
  tenantTeams: {
    set(value) {
      commonUtils.storage.setSession("tenantTeams", JSON.stringify(value));
    },
    get() {
      return JSON.parse(commonUtils.storage.getSession("tenantTeams"));
    }
  },
  //当前选择租户
  currentTenant: {
    set(value) {
      commonUtils.storage.setSession("currentTenant", JSON.stringify(value));
    },
    get() {
      return JSON.parse(commonUtils.storage.getSession("currentTenant"));
    }
  },
  //当前团队
  currentTeam: {
    set(value) {
      commonUtils.storage.setSession("currentTeam", JSON.stringify(value));
    },
    get() {
      return JSON.parse(commonUtils.storage.getSession("currentTeam"));
    }
  },
  //应用列表
  applicationList: {
    set(value) {
      console.log("啦啦啦啦");
      commonUtils.storage.setSession("applicationList", JSON.stringify(value));
    },
    get() {
      return JSON.parse(commonUtils.storage.getSession("applicationList"));
    }
  }
};
export default userAuth;
