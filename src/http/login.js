import request from '../utils/request';

// 
export const loginInfo = function (params) { 
    return request({
        url:'/api/loginInfo',
        method:'POST',
        params
    })
 }

// 
export const registerInfo = function (params) { 
    return request({
        url:'/api/registerInfo',
        method:'POST',
        params
    })
 }
 

 // 
export const loginOut = function (params) { 
    return request({
        url:'/api/loginOut',
        method:'POST',
        params
    })
 }
 
 // 
export const updateUserInfo = function (params) { 
    return request({
        url:'/api/updateUserInfo',
        method:'POST',
        params
    })
 }
