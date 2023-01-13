import axios from "axios";
import userAuth from "./auth";
import { Notification as $notify } from "element-ui";
let BASE_API = window.API.DEV_SERVER;
const request = axios.create({
  baseURL: BASE_API,
  timeout: 1000
});
//请求拦截
request.interceptors.request.use(
  config => {
    if (config.url.indexOf("login") == -1) {
      // 在发送请求之前做些什么
      config.headers.Authorization = userAuth.token.get();
      // config.headers["Authorization"] = userAuth.token.get();
      //设置请求类型
      config.headers["Content-Type"] = "application/json;charset=UTF-8";
      //如果租户id存在则添加X-Tenant-id
      // let tenant = userAuth.currentTeam.get(currentTeam);
      try {
        if (userAuth.currentTenant.get() != null) {
          config.headers["X-Tenant-Id"] = userAuth.currentTenant.get();
          console.log("ID", userAuth.currentTenant.get());
        }
      } catch (error) {}
    }
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
//响应拦截
// request.interceptors.response.use(
//   response => {
//     // return response.data;
//     return response;
//   },
//   err => {
//     // console.log(err.response.data.err[0]);
//     $notify.error({
//       title: "错误",
//       message: err.response.data.err[0].msg
//     });
//     if (!window.navigator.onLine) {
//       //断网处理
//       console.error("网络已断开");
//       $notify.error({
//         title: "错误",
//         message: "请连接互联网"
//       });
//       return;
//     }
//   }
// );

export default request;
