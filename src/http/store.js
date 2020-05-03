import request from '../utils/request';

// 
export const getStoreByid = function (params) { 
    return request({
        url:'/api/getStoreByid',
        method:'GET',
        params
    })
 }

// 
export const getStoreByArea = function (params) { 
    return request({
        url:'/api/getStoreByArea',
        method:'GET',
        params
    })
 }
 

 // 
export const getAreaInfo = function (params) { 
    return request({
        url:'/api/getAreaInfo',
        method:'GET',
        params
    })
 }
 
 // 
export const clicksAddInfo = function (params) { 
    return request({
        url:'/api/clicksAddInfo',
        method:'POST',
        params
    })
 }
 
  // 
export const getAllStoreList = function (params) { 
    return request({
        url:'/api/getAllStoreList',
        method:'GET',
        params
    })
 }
