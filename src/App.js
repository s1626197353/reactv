import React from "react";
import {Route,Redirect,Switch} from "react-router-dom";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import Home from "./pages/home/home";
import BookMall from "./pages/bookMall/bookMall";
import Find from "./pages/find/find";
import User from "./pages/user/user";
import Error from "./pages/error/error";
import Detail from "./pages/detail/detail";
import SignIn from "./pages/signIn/signIn";
import Reg from "./pages/reg/reg";
import Set from "./pages/user/set";
import Loading from "./components/loading";

class App extends React.Component{

    static exam=this;
    state={
        bHeader:false, //控制书架按钮是否显示
        bHeaderShow:true,//控制header组件是否显示
        bFooter:true,
        bLoading:false,
    }

    static getDerivedStateFromProps(nextProps){
        let path=nextProps.location.pathname;
        /*
        * 判断：
        * bookMall页面时显示header组件的部分按钮
        * user页面不显示header组件
        * 默认显示header组件且不显示内部按钮
        * */
        if(path.includes("bookMall")){
            return {bHeader:true,bHeaderShow:true,bFooter:true};
        }
        if(/user/.test(path)){
            return {bHeader:false,bHeaderShow:false,bFooter:true};
        }
        if(/signIn|reg|detail/.test(path)){
            return {bHeader:false,bHeaderShow:false,bFooter:false};
        }

        return {bHeader:false,bHeaderShow:true,bFooter:true};
    }


    render() {
        let {bHeader,bHeaderShow,bFooter,bLoading} = this.state;
        /*
        * bHeaderShow为false时，去除padding属性
        * 通过bHeader控制按钮是否显示
        * 通过bHeaderShow控制组件是否显示，headerShow的结果是页面最终渲染的jsx元素
        * */
        const appStyle=bHeaderShow ? {paddingBottom:1+"rem",paddingTop:0.9+"rem",} : {paddingBottom:1+"rem",};
        const el= bHeader ? <Header show={true}/> : <Header/>;
        const headerShow=bHeaderShow ? el : undefined;

        return (
            <div style={appStyle} className="clear">
                {/*{bLoading && <Loading color="#5477B2"/>}*/}
                {headerShow}
                <Switch>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/bookMall" component={BookMall}></Route>
                    <Route path="/find" component={Find}></Route>
                    <Route path="/user" component={User}></Route>
                    <Route path="/detail/:_id" component={Detail}></Route>
                    <Route path="/set" component={Set}></Route>
                    <Route path="/signIn" component={SignIn}></Route>
                    <Route path="/reg" component={Reg}></Route>
                    <Redirect exact from="/" to="/home"></Redirect>
                    <Route component={Error}></Route>
                </Switch>
                {bFooter && <Footer/>}
            </div>
        );
    }

}

export default App;