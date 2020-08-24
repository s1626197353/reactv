import React from "react";
import {withRouter} from "react-router-dom";
import userCss from "./user.module.css";
import {NavLink} from "react-router-dom";
import {actionUser} from "../../store/actions";
import store from "../../plugins/redux";
import {dateFilter,readTimeFilter} from "../../utils/date";
import SuLoading from "../../components/su-loading";
import {actionLogout} from "../../store/actions";


class User extends React.Component{

    async componentDidMount(){
        actionUser()(store.dispatch);
    }

    render() {
        let {user} = store.getState();

        if(!user._id){
            return <SuLoading/>;
        }
        return (
            <div className={userCss.user}>
                <nav><b onClick={()=>store.dispatch(actionLogout(this.props.history))}>注销</b><span className={userCss.iconfont}>&#xe601;</span><i className={userCss.iconfont}><NavLink exact to="/Set">&#xe6f5;</NavLink></i></nav>
                <ul className={userCss.message+" clear"}>
                    <li><img src={user.pic} alt=""/></li>
                    <li><h4>{user.userName}</h4><i className={userCss.iconfont}>&#xe660;</i><p>{dateFilter(user.vipTime)}</p></li>
                    <li><i className={userCss.iconfont}>&#xe676;</i><b className={userCss.iconfont}>&#xe502;</b></li>
                </ul>
                <section><p>{user.money}</p><span>书币余额</span></section>
                <div className="clear">
                    <span><h5>今日阅读时长</h5><b>{readTimeFilter(user.todayRead)}</b></span>
                    <span><h5>累计阅读时长</h5><b>{readTimeFilter(user.allRead)}</b></span>
                </div>
                <ul className={userCss.nav}>
                    <li><span>消费充值记录</span><i className={userCss.iconfont}>&#xe502;</i></li>
                    <li><span>我的书单</span><i className={userCss.iconfont}>&#xe502;</i></li>
                    <li><span>帮助中心</span><i className={userCss.iconfont}>&#xe502;</i></li>
                    <li><span>意见反馈</span><i className={userCss.iconfont}>&#xe502;</i></li>
                </ul>
            </div>
        );
    }
}

export default withRouter(User);