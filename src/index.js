import React from "react";
import ReactDom from "react-dom";
import {BrowserRouter,Route} from "react-router-dom";
import App from "./App";
import qs from "qs";

//axios-----------------------------
import "./plugins/axios";
import "./plugins/redux";
import store from "./plugins/redux";

import "./assets/css/base.css";
import "./assets/js/flexible";
import SuLoading from "./components/su-loading";

React.SELF_HANDLER=()=>{
    console.log("我是SELF_HANDLER，是React的自定义方法");
}

//强刷同步local&&redux
let local = window.localStorage.getItem('userData');
if (local){
    let userData = qs.parse(local);
    store.dispatch({type:'UPDATE_SIGNIN',payload:userData})
}

let render=()=>{
    ReactDom.render(
        <BrowserRouter>
            <Route component={App}/>
        </BrowserRouter>,
        document.getElementById("root")
    );
}
render();
store.subscribe(render);
