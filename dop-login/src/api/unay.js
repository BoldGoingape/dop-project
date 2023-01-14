import request from "../lib/requsert";
import qs from "qs";

//获取配置下的用户信息
export function getConfig(params) {
  return request({
    url: "/unay/configs",
    method: "GET",
    params: params
  });
}
