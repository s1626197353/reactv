import React from "react";
import {withRouter} from "react-router-dom";
import propTypes from "prop-types";
import suCellCss from "./suCell.module.css";


class SuCell extends React.Component{

    /*
    * pic:图片
    * bookName:书名
    * bookStat:书籍状态，是否完结，bool
    * readStat:已阅读多少,num
    * url:map跳转
    * to:object  {pathname:string,search:{collectionName:string}}
    * */

    static defaultProps={
        pic:"",
        bookName:"",
        bookStat:true,
        readStat:0,
        url:"",
        to:null,
    }
    static propTypes={
        pic:propTypes.string,
        bookName: propTypes.string,
        bookStat:propTypes.bool,
        readStat: propTypes.number,
        url:propTypes.string,
        to:propTypes.shape({
            pathname:propTypes.string.isRequired,
            search:propTypes.shape({
                collectionName:propTypes.string,
                _id:propTypes.number,
            }),
            userData:propTypes.object,
        })
    }

    go=()=>{
        let {url,to,history} = this.props;
        if(url){
            window.open(url,"_blank");
        }else if(to){
            history.push({pathname:to.pathname,search:`collectionName=${to.search.collectionName}`});
        }
    }

    render() {
        let {pic,bookName,bookStat,readStat} = this.props;
        return (
            <div className={suCellCss.cell}>
                <dl>
                    <dt><img onClick={()=>this.go()} src={pic} alt=""/></dt>
                    <dd>{bookName}</dd>
                    <p><span>{bookStat ? "完结" : "连载"}</span>{readStat ? <b>已读{readStat}%</b> : ""}</p>
                </dl>
            </div>
        );
    }
}

export default withRouter(SuCell);