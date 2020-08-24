import React from "react";
import {withRouter} from "react-router-dom";
import propTypes from "prop-types";
import listCss from "./list.module.css";

const SuList = ({pic,bookName,recommend,bookDes,auth,index,model,to,url,history}) => {

    /*
    * pic:图片
    * bookName:名称
    * recommend:推荐原因
    * bookDes:描述
    * auth:作者
    * index:序号
    * model:bool,模型样式
    * to:
    * */
    let go=()=>{
        if(url){
            window.open(url,"_blank");
        }else if(to){
            history.push({pathname:to.pathname,search:`collectionName=${to.search.collectionName}`});
        }
    }

    const list = model ? listCss.list2 : listCss.list;
    const el= model ? "" : <span>{index}</span>;
    return (
        <div className={list}>
            <div><img src={pic} alt=""/></div>
            <dl className="clear">
                {/*<div className={listCss.right+" clear"}>*/}
                    <dt onClick={go}>{el}{bookName}</dt>
                    <p>{recommend}</p>
                    <div className={listCss.auth}>{auth}</div>
                    <dd>{bookDes}</dd>
                {/*</div>*/}
            </dl>
        </div>
    );

}

SuList.defaultProps={
    recommend:"根据最近阅读推荐",
    bookDes:"默认描述",
    auth:"卡深·迈利",
    index:undefined,
    model:false,
    url:"",
    to:null,
}
SuList.propTypes={
    pic: propTypes.string.isRequired,
    bookName: propTypes.string.isRequired,
    recommend:propTypes.string,
    bookDes: propTypes.string,
    auth:propTypes.string,
    index:propTypes.number,
    model:propTypes.bool,
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

export default withRouter(SuList);