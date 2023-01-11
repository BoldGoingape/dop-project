import request from "../lib/requsert";
import qs from "qs";
import userAuth from "@/lib/auth.js";

//暴露
export function login(userName, passWord) {
  return request({
    url: "/khaan/login",
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
  return request({
    url: "/khaan/me/profile",
    // url: "http://dev.qingdao.internal.zzydop.com/khaan/me/profile",
    method: "GET",
    headers: {
      Authorization: token
    }
  });
  // 设置请求的根路径
}
