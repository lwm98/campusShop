import Axios from "axios";
import Config from "../config/app.js";
import { Notification, Loading } from "element-ui";
import router from "../router/";

//创建axios实例
const service = Axios.create({
  baseURL: Config.apiUrl, //+ '/' + Config.apiPrefix, //访问api  地址+前缀
  headers: {
    Accept: "*/*", //接收所有类型
    "Content-Type": "application/json; charset=UTF-8", //发送json格式
  },
  timeout: Config.timeout, //访问超时事件
});

service.defaults.retry = Config.requestRetry; //请求重试
service.defaults.retryDelay = Config.requestRetryDelay; //请求重试延迟

//拦截请求头
service.interceptors.request.use(
  (request) => {
    //请求头
    request.headers["Authorization"] = window.localStorage.getItem("token"); //获取token插入请求头
    // if()
    request.headers["userType"] = "webUser";
    // console.log(request.headers);
    // console.log(request);
    // if (!window.localStorage.getItem("token")) {
    //   router.push({ path: "/login" });
    //   return;
    // }

    //
    //console.log(request);
    //console.log(config);
    // if (!config.closeLoading) {
    //     window.loadingInstance = Loading.service();
    // }
    //let noParameters = config.url.indexOf('?') == -1;
    //config.headers['X-Token'] = getToken() //
    //config.url = noParameters ? config.url + '?access_token=' + getToken() : config.url + '&access_token=' + getToken();
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//拦截响应头
service.interceptors.response.use(
  (response) => {
    //响应头状态200
    console.log(response);
    return response;
    // if (response.status == 200) {
    //   // console.log(response)
    //   //返回code 为0
    //   // console.log(typeof response.data);
    //   if (typeof response.data == "string") {
    //     console.log(response.data);
    //     // response.data = JSON.parse(response.data);
    //   }
    //   if (response.data.code == 200) {
    //     //console.log(response.data);
    //     // console.log(response.config.url + '请求成功');
    //     //登录时获取token
    //     if (response.headers.authorization) {
    //       //将token存入sessionStorage
    //       window.localStorage.setItem("token", response.headers.authorization);
    //     }
    //     //返回接口数据
    //     // console.log(response);
    //     return response.data.data;
    //   } else if (response.data.code == 3000) {
    //     console.log(response.config.url + "   失败");
    //     console.log(response.data.msg);
    //     return Promise.reject("error");
    //   } else if (response.data.code === 10006) {
    //     console.log("token可能过期了");
    //     window.localStorage.removeItem("token");
    //     router.push({ path: "/login" });
    //     return Promise.reject("error");
    //   } else {
    //     console.log(response.data);
    //     console.log(response.config.url + "   失败");
    //     //请求失败提示msg
    //     Notification({
    //       title: response.data.msg || "" + response.data.message || "",
    //       type: "warning",
    //     });
    //     return Promise.reject("error");
    //   }
    // } else {
    //   //请求报错提示msg
    //   Notification({
    //     title: "数据返回出错",
    //     message: "请稍后重试",
    //     type: "warning",
    //   });
    //   return Promise.reject("error");
    // }
  },
  (error) => {
    console.log(error);
    Notification({
      title: "请求未响应",
      message: "服务器可能出了点问题",
      type: "warning",
    });
    return Promise.reject(error); //千万不能去掉，，，否则请求超时会进入到then方法，导致逻辑错误。
  }
);

export default service;
