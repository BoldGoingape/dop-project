import axios from "axios";
import qs from "qs";
import userAuth from "@/lib/auth.js";
let BASEAPI = window.API.DEV_SERVER;
//暴露
export function login(userName, passWord) {
  return axios({
    url: BASEAPI + "/khaan/login",
    // url: "http://dev.qingdao.internal.zzydop.com/khaan/login",
    method: "POST",
    data: qs.stringify({
      username: userName,
      password: passWord,
      grant_type: "password",
      scope: "server"
    })
  });
}
export function UserList() {
  let token = userAuth.token.get();
  alert(token);
  return axios({
    url: BASEAPI + "/khaan/me/profile",
    // url: "http://dev.qingdao.internal.zzydop.com/khaan/me/profile",
    method: "GET",
    headers: {
      Authorization: token
    }
  });
  // 设置请求的根路径
}
