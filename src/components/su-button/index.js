import React from "react";
import propTypes from "prop-types";
import SuButtonCss from "./su-button.module.css";

class SuButton extends React.Component {


    /*
    * text:文字
    * onClick：点击函数
    * style：样式,object
    * disable:是否禁用
    * size：按钮大小 large small default
    * type：类型，circ\default等
    * */

    static defaultProps = {
        text: "按钮",
        onClick: () => undefined,
        style: {},
        disable: false,
        size: "default",
        type: "default"
    }
    static propTypes = {
        text: propTypes.string,
        onClick: propTypes.func,
        style: propTypes.object,
        disable: propTypes.bool,
        size: propTypes.string,
        type: propTypes.string
    }

    render() {
        let {text, onClick, style, disable, size, type, children} = this.props;
        return (
            <button
                onClick={onClick} style={style} disabled={disable}
                className={` ${SuButtonCss[`size-${size}`]} ${SuButtonCss[`type-${type}`]} ${SuButtonCss[`suButton`]} `}
            >{children ? children : text}</button>
        );
    }
}

export default SuButton;