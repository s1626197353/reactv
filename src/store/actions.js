import {ajaxAll,ajaxBanner,ajaxFind,ajaxLikeData,ajaxUser,ajaxDetail,ajaxSignIn,ajaxReg} from "../services/api";
import qs from "qs";

export const actionBookMall = ()=> dispatch =>ajaxAll([
    ajaxBanner(),
    ajaxLikeData()
]).then(({banner,likeData})=>{
    dispatch({type:"UPDATE_BANNER",bannerData:banner.data.data});
    dispatch({type:"UPDATE_LIKEDATA",likeData:likeData.data.data});
}).catch(err=>{console.log("获取actionBookMall失败",err)});

export const actionFind=()=>dispatch=>ajaxFind().then(res=>{
    dispatch({type:"UPDATE_FIND",dataList:res.data.data});
})

export const actionUser=()=>dispatch=>ajaxUser().then(res=>{
    dispatch({type:"UPDATE_USER",userData:res.data.data});
})

export const actionDetail=(_id)=>dispatch=>ajaxDetail(_id).then(res=>{
    dispatch({type:"UPDATE_DETAIL",detailData:res.data.data});
})

export const actionSignIn=({username,password})=>async dispatch=>{
    let res=await ajaxSignIn({username,password});
    // console.log(111,res,dispatch);
    dispatch({type:"UPDATE_SIGNIN",payload:res.data});
    window.localStorage.setItem("userData",qs.stringify(res.data));
    return res; //可回执
}
export const actionReg=({username,password})=>async dispatch=>{
    let res=await ajaxReg({username,password});
    dispatch({type:"UPDATE_REG",payload:res.data});
    return res;
}
export const actionLogout=(history)=>dispatch=>{
    dispatch({type:"UPDATE_LOGOUT"});
    window.localStorage.removeItem("userData");
    history.replace('/signIn');
    return true;
}
