import React from "react";
import footerCss from "./footer.module.css";
import {NavLink} from "react-router-dom";

class Footer extends React.Component {


    render() {
        return (
            <div className={footerCss.footer}>
                <ul className="clear">

                    <li>
                        <NavLink to="/home" exact className={footerCss.navLink} activeClassName={footerCss.active}>
                            <p><i className={footerCss.iconfont}>&#xe50d;</i></p><span>首页</span>
                        </NavLink>
                    </li>


                    <li>
                        <NavLink to="/bookMall" exact className={footerCss.navLink} activeClassName={footerCss.active}>
                            <p><i className={footerCss.iconfont}>&#xe602;</i></p><span>书城</span>
                        </NavLink>
                    </li>


                    <li>
                        <NavLink to="/find"  exact className={footerCss.navLink} className={footerCss.navLink} activeClassName={footerCss.active}>
                            <p><i className={footerCss.iconfont}>&#xe642;</i></p><span>发现</span>
                        </NavLink>
                    </li>


                    <li>
                        <NavLink to="/user" exact className={footerCss.navLink} activeClassName={footerCss.active}>
                            <p><i className={footerCss.iconfont}>&#xe507;</i></p><span>我的</span>
                        </NavLink>
                    </li>

                </ul>
            </div>
        );
    }

}

export default Footer;