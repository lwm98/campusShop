import axios from 'axios';
/*
 * 封装axios
 */
switch (process.env.NODE_ENV) {
  case "production":
    axios.defaults.baseURL = "";
  case "testing":
    axios.defaults.baseURL = 'http://localhost:4399';
  default:
    axios.defaults.baseURL = 'http://localhost:4399';
}
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN; //这是token
axios.defaults.timeout = 10000;
// axios.defaults.withCredentials = true; //允许跨域
axios.defaults.headers.post['Content-Type'] = 'application/json';

/*
 * 请求拦截器
 */
axios.interceptors.request.use(config => {
  //token校验
  const token = window.localStorage.getItem('token');
  token && (config.headers.Authorization = token);
  return config;
}, error => {
  return Promise.reject(error)
});

/*
 * 响应拦截器
 */

let MyRequest = function (api, method, data) {
  console.log("调用接口");
  console.log(data);
  return new Promise((resolve, reject) => {
    axios({
      url: api,
      params: data,
      method: method
    }).then(res => {
      resolve(res.data)
    }).catch(res => {
      reject(res)
    })
  })
};
export default {
  MyRequest
}
