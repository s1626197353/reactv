import React from "react";
import {withRouter} from "react-router-dom";
import SuNav from "../../components/su-nav";
import regCss from "./regCss.module.css";
import SuInput from "../../components/su-input";
import SuButton from "../../components/su-button";
import {actionReg} from "../../store/actions";
import store from "../../plugins/redux";

class Reg extends React.Component{

    state={
        username:'',
        password:'',
        errorMess:''//失败信息
    };

    clickHandler=async ()=>{
        let {username,password} = this.state;
        let res=await store.dispatch(actionReg({username,password}));
        this.setState(res.data)
    }
    changeIpt=(ev)=>{
        this.setState({[ev.target.name]:ev.target.value});
    }

    render() {
        return (
            <div className={regCss.reg}>
                <SuNav />
                <h3>注册账号</h3>
                <SuInput label="用户名" type="text" model={{name:'username',value:this.state.username,onChange:this.changeIpt}}/>
                <SuInput label="密码" type="password" model={{name:'password',value:this.state.password,onChange:this.changeIpt}}/>
                <SuButton size="large" text="注册" onClick={this.clickHandler}/>
                <p className={regCss.msg}>{this.state.msg}</p>
            </div>
        );
    }
}

export default withRouter(Reg);