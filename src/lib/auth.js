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
      console.log(value);
      commonUtils.storage.setSession("userTenants", JSON.stringify(value));
    },
    get() {
      return JSON.parse(commonUtils.storage.getSession("userTenants"));
    }
  }
};
export default userAuth;
