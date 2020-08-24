import React from "react";
import HeaderCss from "./header.module.css";
import {withRouter} from "react-router-dom";
import propTypes from "prop-types";

class Header extends React.Component{

    /*
    * model: 是否受控 boolean
    * keyUp：按回车时搜索
    * onChange： 函数
    * show: 是否显示书架 bool
    * onClick: 点击
    * onClick2: 点击
    * style: 样式
    * */

    state={
        ipt:""
    }

    static defaultProps={
        model: false,
        keyUp: ()=>console.log("执行了keyUp！"),
        onChange: ()=>console.log("执行了onChange！"),
        show: false,
        onClick:()=>console.log("点击了搜索！"),
        onClick2:()=>console.log("点击了书架！"),
        style:{}
    }
    static propTypes={
        model:propTypes.bool,
        keyUp:propTypes.func,
        onChange:propTypes.func,
        show:propTypes.bool,
        onClick:propTypes.func,
        onClick2:propTypes.func,
        style: propTypes.object,
    }

    render() {
        let {model,keyUp,onChange,show,onClick,onClick2} = this.props;
        return (
            <div id={HeaderCss.wrap} className="clear">
                {show ? <input type="text" id={HeaderCss.inputs} ref={el=>this.input=el} placeholder="来来来，搜索内容"  style={{width:5+"rem"}}/>
                      : <input type="text" id={HeaderCss.inputs} ref={el=>this.input=el} placeholder="来来来，搜索内容"/>
                }
                <span className={HeaderCss.iconfont} id={HeaderCss.search} onClick={this.props.onClick}>&#xe621;</span>
                {show && <span className={HeaderCss.iconfont} id={HeaderCss.book} onClick={this.props.onClick2}>&#xe618;</span>}
            </div>
        );
    }

}

export default withRouter(Header);