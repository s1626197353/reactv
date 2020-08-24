import React,{Component} from 'react';
import suNavCss from './su-nav.module.css';
import propTypes from 'prop-types';
import {withRouter} from 'react-router-dom'

/*
*
* background: string 箭头背景颜色
* arrow: 'default'  gray
* borderWidth: 1  边框
* style: object
* title: 标题
* show: 忘了。。。好像无用。。。
* */
class SuNav extends Component{

    static defaultProps={
        background:'#fff',
        arrow:'default',
        borderWidth: 1,
        style:{},
        title:"",
        render:()=>{},
    };
    static propTypes={
        background: propTypes.string,
        arrow: propTypes.string,
        borderWidth: propTypes.number,
        style: propTypes.object,
        show: propTypes.string,
        render:propTypes.func,
    };
    render(){
        let {borderWidth,arrow,background,style,children,history,title} = this.props;
        return (
            <div className={suNavCss.nav+" clear"} style={{borderWidth,background,...style}}>
                <div className={suNavCss.arrow+" clear"}>
                    <div className={suNavCss[arrow]} onClick={()=>history.go(-1)}></div>
                    <span>{title}</span>
                    {children}
                    <i>{this.props.render()}</i>
                </div>
            </div>
        )
    }
}

export default withRouter(SuNav)