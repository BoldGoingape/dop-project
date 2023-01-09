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
  }
};
export default userAuth;
