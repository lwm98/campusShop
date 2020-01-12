import axios from 'axios';
//封装请求方法
axios.defaults.baseURL = 'http://localhost:8080';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN; //这是token
axios.defaults.headers.post['Content-Type'] = 'application/json';
let MyRequest = function (api,method,data){
  console.log("调用接口");
  console.log(data);
  return new Promise((resolve,reject)=>{
    axios({
      url:api,
      params:data,
      method:method
    }).then(res=>{
      resolve(res.data)
    }).catch(res=>{
      reject(res)
    })
  })
};
export default{
  MyRequest
}
