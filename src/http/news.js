import request from "../utils/request";

//
export const getNews = function(params) {
  return request({
    url: "/api/getNews",
    method: "GET",
    params
  });
};

//
export const getNewsUser = function(params) {
  console.log(params)
  return request({
    url: "/api/getNewsUser",
    method: "GET",
    params
  });
};

//
export const getNewsList = function(params) {
  return request({
    url: "/api/getNewsList",
    method: "GET",
    params
  });
};
