import request from '../utils/request';

// 获取评论内容
export const getCommentInfo = function (params) { 
    return request({
        url:'/api/getCommentInfo',
        method:'POST',
        params
    })
 }

// 发表评论
export const sendCommentInfo = function (params) { 
    return request({
        url:'/api/sendCommentInfo',
        method:'POST',
        params
    })
 }
