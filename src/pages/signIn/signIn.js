import React from "react";
import {withRouter,NavLink} from "react-router-dom";
import SuInput from "../../components/su-input";
import signInCss from "./signInCss.module.css";
import SuNav from "../../components/su-nav";
import SuButton from "../../components/su-button";
import store from "../../plugins/redux";
import {actionSignIn} from "../../store/actions";
import qs from "qs";


class SignIn extends React.Component{

    state={
        username:'',
        password:'',
        errorMess:''//失败信息
    };

    changeIpt=(ev)=>{
        this.setState({[ev.target.name]:ev.target.value})
    };

    clickHandler=async ()=>{
        let {username,password} = this.state;
        let res = await store.dispatch(actionSignIn({username,password}));
        if (res.data.err === 0 ){

            //跳转路径 {ignoreQueryPrefix:true}去问号
            let path = qs.parse(this.props.location.search,{ignoreQueryPrefix:true}).path;
            // console.log(22222222222222222222222222222222,path);
            if (path && !path.includes('/login')){
                //跳转之前
                this.props.history.push(path);
            } else {
                //跳转user
                this.props.history.push('/user');
            }

        } else {
            this.setState({errorMess:res.data.msg})
        }
    }

    render() {
        return (
            <div className={signInCss.signIn}>
                <SuNav render={()=><span><NavLink exact to="/reg">注册</NavLink></span>}/>
                <h3>登录</h3>
                <SuInput label="用户名" type="text" model={{name:'username',value:this.state.username,onChange:this.changeIpt}} placeholder="账号hello"/>
                <SuInput label="密码" type="password" model={{name:'password',value:this.state.password,onChange:this.changeIpt}} placeholder="密码hello"/>
                <p><span>验证码登录</span><i>忘记密码</i></p>
                <SuButton size="large" text="登录" onClick={this.clickHandler}/>
                <div className={signInCss.msg}>{this.state.errorMess}</div>
            </div>
        );
    }
}

export default withRouter(SignIn);