import React from "react";
import propTypes from "prop-types";
import {withRouter} from "react-router-dom";
import findItemCss from "./findItem.module.css";

const FindItem=({bookDes,num,star,fork,dataList,model,url,to,history})=>{


    /*
    * bookDes:"",介绍
    * num:0,数量
    * star:0,点赞数
    * fork:0,收藏数
    * dataList:数组
    * model:类型 bool
    * */
    let go=(_id)=>{
        if(url){
            window.open(url,"_blank");
        }else if(_id){
            history.push({pathname:"detail/"+_id});
        }
    }

    //通过model判断显示类型
    const el= model ? <p><span>{star}人点赞</span><i>{fork}人收藏</i></p> : <p>{num}部书</p>;
    return (
        <div className={findItemCss.findItem}>
            <h4>{bookDes}</h4>
            {el}
            <ul className={findItemCss.ulPic+" clear"}>
                {dataList.map((item,index)=>(
                    <li key={index}><img onClick={()=>{go(item.bookId)}} src={item.pic} alt=""/></li>
                ))}
            </ul>
        </div>
    );
}

FindItem.defaultProps={
    bookDes:"",
    num:0,
    star:0,
    fork:0,
    dataList:[],
    model:false,
}
FindItem.propTypes={
    bookDes: propTypes.string.isRequired,
    num:propTypes.number,
    star:propTypes.number,
    fork:propTypes.number,
    dataList:propTypes.arrayOf(propTypes.shape(
        {pic:propTypes.string.isRequired}
    )).isRequired,
    model:propTypes.bool,
}

export default withRouter(FindItem);