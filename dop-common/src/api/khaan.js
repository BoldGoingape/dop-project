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
//获取用户列表
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
}
// 获取用户租户团队
export function getTenantTeams(teamId) {
  console.log("我是id值", teamId);
  let token = userAuth.token.get();
  return request({
    url: `/khaan/me/tenants/${teamId}/teams`,
    method: "GET",
    headers: {
      Authorization: token
    }
  });
}
