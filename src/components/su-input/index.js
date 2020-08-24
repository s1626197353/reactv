import React, {Component} from "react";
import propTypes from "prop-types";
import SuInputCss from "./su-input.module.css";

/*
* model:是否受控
* type：text/password  string
* multi:是否多行
* label:标签
* style:样式 object
* placeholder：提示
* */
class SuInput extends Component {

    static defaultProps = {
        type: "text",
        model: null,
        multi: false,
        label: "标题",
        style: {},
        placeholder:""

    }
    static propTypes = {
        type: propTypes.string,
        model: propTypes.shape({
            value: propTypes.string.isRequired,
            onChange: propTypes.func.isRequired,
            name: propTypes.string.isRequired
        }),
        multi: propTypes.bool,
        label: propTypes.string,
        style: propTypes.object,
        placeholder:propTypes.string,
    }

    renderLabel = (label) => {
        return label ? <span>{label}</span> : null;
    }

    //渲染单行输入框
    renderInput = () => {
        let {model, type, label, style,placeholder} = this.props;
        let el = null;

        //非受控input
        if (!model) {
            el = (
                <div className={SuInputCss.suInput}>
                    <input type={type} ref={el=>this.input=el} style={style} defaultValue={""} placeholder={placeholder}/>
                    {this.renderLabel(label)}
                </div>
            );
            return el;
        }

        //受控时
        let {name, value, onChange} = model;
        el = (
            <div className={SuInputCss.suInput}>
                <input type={type} name={name} value={value} onChange={onChange} style={style} placeholder={placeholder}/>
                {this.renderLabel(label)}
            </div>
        );
        return el;

    }

    //多行输入，文本域
    renderTextarea = () => {
        let {model, label} = this.props;
        let el = null;
        if (!model) {
            el = (
                <div>{this.renderLabel(label)}<textarea></textarea></div>
            );
            return el;
        }
        el = (
            <div>{this.renderLabel(label)}<textarea {...model}></textarea></div>
        );
        return el;
    }

    render() {
        let {multi} = this.props;
        return multi ? this.renderTextarea() : this.renderInput();
    }

}
export default SuInput;