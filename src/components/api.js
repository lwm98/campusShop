const url = 'http://localhost:8080';
import axios from 'axios'
//封装请求方法
let MyRequest = function (api,method,dataa){
  console.log("调用接口");
  console.log(dataa);
  return new Promise((resolve,reject)=>{
    axios({
      url:url+api,
      params:dataa,
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
