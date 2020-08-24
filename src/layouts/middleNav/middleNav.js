import React from 'react';
import {NavLink} from "react-router-dom";
import navCss from "./nav.module.css";

const MiddleNav=()=>{
    return (
        <div className={navCss.nav}>
            <ul className="clear">

                <li>
                    <NavLink to="/detail" exact className={navCss.navLink}>
                        <p><i className={navCss.iconfont}>&#xe604;</i></p><span>分类</span>
                    </NavLink>
                </li>


                <li>
                    <NavLink to="/detail" exact className={navCss.navLink}>
                        <p><i className={navCss.iconfont}>&#xe6a5;</i></p><span>榜单</span>
                    </NavLink>
                </li>


                <li>
                    <NavLink to="/detail"  exact className={navCss.navLink}>
                        <p><i className={navCss.iconfont}>&#xe63b;</i></p><span>完本</span>
                    </NavLink>
                </li>


                <li>
                    <NavLink to="/detail" exact className={navCss.navLink}>
                        <p><i className={navCss.iconfont}>&#xe62c;</i></p><span>连载</span>
                    </NavLink>
                </li>

            </ul>
        </div>
    );
}

export default MiddleNav;