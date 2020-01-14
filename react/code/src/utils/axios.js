

import axios from "axios";
import {Toast} from "antd-mobile"
import {history} from "&"
// const baseURL = 'http://localhost:1910/'
const baseURL = 'http://zuozhaoxi.com:1910/'

let token = "";
axios.defaults.baseURL = baseURL;
axios.defaults.headers.common['token'] = token;   // req.headers.token 
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


export function loadingToast(msg,time) {
    msg = msg || "请求中...";
    time = time || 1;
    Toast.hide();
    Toast.loading(msg, time , () => {
        console.log('Load complete !!!');
    });
}

export function fail(msg) {
    Toast.hide();
    Toast.fail(msg, 1);
}

export function offline(msg) {
    Toast.hide();
    Toast.offline(msg, 1);
}

export function success(msg) {
    Toast.hide()
    Toast.success(msg, 1);
}
// axios  拦截器  Interceptors
// request 请求发送之前的拦截器
axios.interceptors.request.use(function (config) {

    // 配置动画
    loadingToast();
    token =  sessionStorage.token ? sessionStorage.token : "";
    config.headers['token'] = token;
    return config;
  }, function (error) {
    // 请求失败错误提示 
    offline("请求失败-网络异常");
    return Promise.reject(error);
});



// response 响应 完成 的拦截器
axios.interceptors.response.use(function (response) {

    console.log(response)
    if(response.data.code=="3000"){
       // 跳转 登录 
       history.push("/login");
    }
    // type  不存在    success
    // type = 0  fail
    // type = 1  success 
    if(!!response.data.type){
        success(response.data.msg);
    }else{
        if(response.data.type==0){
            fail(response.data.msg)
        }else{
            success(response.data.msg)
        }
    }
    

    // 成功的响应
    return response;
  }, function (error) {
    // 失败的响应 
    fail("响应失败-服务器异常")
    return Promise.reject(error);
});

export {axios,baseURL}