import React from "react";
import axios from "axios";
import {BrowserRouter as Router} from "react-router-dom";
import qs from "qs";
import store from "./redux";


// 添加一个请求的拦截
axios.interceptors.request.use((config) => {

    //1抓取redux，携带在请求头里   user = {token:'....',username,password}
    if(config.method==="post"){
        return config;
    }
    let userData = store.getState().signIn;
    // user = user ? qs.parse(user) : '';
    // user = user ? JSON.parse(user) : '';
    config.headers={'token': userData.token};
    // config.headers={'token': '1234567890123456'};


    return config;//2返回请求

}, function(error) {
    // 请求错误时做点事
    return Promise.reject(error);
});

//添加一个响应拦截
axios.interceptors.response.use(function(response) {
    // console.log('响应拦截',response);

    let router=new Router();
    // token过期: 返回值2,当前路由不是login时跳转
    if (response.data.err === 2 && !router.history.location.pathname.includes('/login')) {
      window.location.href=require('../config/base').baseUrl+'/signIn?path='+router.history.location.pathname

      /*router.history.push({  //hash 模式可以，history模式有问题
        pathname: '/login',
        search: "path="+router.history.location.pathname
      })*/
    }

    return response;
}, function(error) {

    return Promise.reject(error);
});




React.axios=axios;
React.Component.prototype.axios=axios;

export default axios;