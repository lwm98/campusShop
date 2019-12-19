const url = 'http://120.27.0.149:8099';
import axios from 'axios'
//封装请求方法
let MyRequest = function (api,method,data){
  console.log("调用接口");
  return new Promise((resolve,reject)=>{
    axios({
      url:url+api,
      data:data,
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
