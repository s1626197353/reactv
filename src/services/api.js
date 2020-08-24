import axios from "../plugins/axios";

//书城页 Ajax
export const ajaxBanner = async (params) => {

    return axios({
        url: "/mock/banner",
        params: params || {_page: 1, _limit: 3}
    });
};
export const ajaxLikeData = async (params) => {
    // console.log("ajaxLikeDataApi");
    return axios({
        url: "/mock/likeData",
        params: params || {_page: 1, _limit: 4}
    });
};
//发现页 Ajax
export const ajaxFind = async (params) => {
    return axios({
        url: "/mock/find",
        params: params || {_page: 1, _limit: 20}
    });
};
//用户页 Ajax
export const ajaxUser = async () => {
    return axios({
        url: "/mock/user",
    });
};
//详情页 Ajax
export const ajaxDetail = async (_id) => {
    return axios({
        url:`/mock/book/${_id}`
    })
};
//一次发送多(2)个 Ajax
export const ajaxAll = async (arr) => {
    return axios.all(arr).then(axios.spread((banner,likeData)=>({banner,likeData})))
};

export const ajaxSignIn=async ({username,password})=>{
    // if(function(username))   密码判断
    return axios({url:`/mock/signIn`,method:"post",data:{username,password}});
}
export const ajaxReg=async ({username,password})=>{
    // if(function(username))   密码判断
    return axios({url:`/mock/reg`,method:"post",data:{username,password}});
}