import request from '../utils/request';

// 
export const getActsList = function (params) { 
    return request({
        url:'/api/getActsList',
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
