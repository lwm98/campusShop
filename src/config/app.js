//import localKey from './localKey'

 
const devApiUrl = 'http://localhost:4399'; //本地开发环境
const buildDevApiUrl = "http://120.27.0.149:8098"; //打包开发环境
const buildTestApiUrl = "http://120.27.0.149:8098"; //打包测试环境
const buildProApiUrl = "http://120.27.0.149:8098"; //打包正式环境

let useApiUrl;

switch (process.env.NODE_ENV) {
  case "development":
    useApiUrl = devApiUrl;
    break;
  case "buildDev":
    useApiUrl = buildDevApiUrl;
    break;
  case "buildTest":
    useApiUrl = buildTestApiUrl;
    break;
  case "production":
    useApiUrl = buildProApiUrl;
    break;
}

export default {
  nodeDevEnv: process.env.NODE_ENV == "development", //开发
  apiUrl: useApiUrl, //api地址
  siteName: "校园商铺", //网站名称
  minSiteMame: "campusShop", //名
  apiPrefix: "", //api前缀
  timeout: 100000, //访问超时事件
  cookiesExpires: 7, //cookie到期参数
  requestRetry: 4, //请求重试
  requestRetryDelay: 800, //请求重试延迟
  tokenKey: "ACCESS_TOKEN", //token密钥
  userInfoKey: "USER_INFO", //用户信息密钥
  permissionsKey: "PERMISSION_ARRAY" //权限密钥
};
