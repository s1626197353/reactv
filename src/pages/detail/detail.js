import React from "react";
import {withRouter} from "react-router-dom";
import SuNav from "../../components/su-nav";
import suNavCss from "../../components/su-nav/su-nav.module.css";
import detailCss from "./detail.module.css";
import SuButton from "../../components/su-button";
import H3 from "../../components/su-h3";
import FindItem from "../find/findItem";
import propTypes from "prop-types";
import store from "../../plugins/redux";
import {actionDetail} from "../../store/actions";
import SuLoading from "../../components/su-loading";

class Detail extends React.Component{

    constructor(props) {
        super(props);
        let {match:{params:{_id}}} = props;
        store.dispatch(actionDetail(_id));
    }

    static defaultProps={
        userData:{},
    }
    static propsTypes={
        userData:propTypes.object,
    }

    addBook=()=>{console.log("点击了加入书架")}
    readBook=()=>{console.log("点击了阅读按钮")}
    buyBook=()=>{console.log("点击了购买按钮")}

    render() {
        // let {data} = this.props;
        let {detail} = store.getState();
        const dataList=[
            {_id:1001,pic:"/img/a.jpg"},
            {_id:1001,pic:"/img/b.jpg"},
            {_id:1001,pic:"/img/c.jpg"},
            {_id:1001,pic:"/img/d.jpg"},
            {_id:1001,pic:"/img/e.jpg"},
        ];


        if(detail.length===0){
            return <SuLoading/>
        }
        return (
            <div className={detailCss.detail}>
                <SuNav render={()=>{return <span className={suNavCss.iconfont}>&#xe603;</span>;}}/>
                <ul className="clear">
                    <li><img src={detail[0].pic} alt=""/></li>
                    <li>
                        <h3>{detail[0].bookName}</h3>
                        <span>{detail[0].auth}</span>
                        <p>{detail[0].classify}·{detail[0].bookStat ? "完结" : "连载"}·{detail[0].words}万字</p>
                        <p><i className={detailCss.iconfont}>&#xe6d2;</i><b>{detail[0].price}</b></p>
                    </li>
                    <li><span><i>{detail[0].readerNum}</i>万人</span><p>正在阅读</p><b>{detail[0].score}分</b></li>
                </ul>
                <p>{detail[0].bookDes}</p>
                <dl>
                    <dt>轻点评分 <span>评分</span><i className={detailCss.iconfont}>&#xe501;</i></dt>
                    <dd>查看目录 <span>共{detail[0].articleNum}章</span><i className={detailCss.iconfont}>&#xe501;</i></dd>
                </dl>
                <div className={detailCss.bottom}>
                    <span onClick={()=>this.addBook()}>加入书架</span>
                    <SuButton onClick={()=>this.readBook()} text="点击阅读" style={{background:"#169BD5",color:"white"}}></SuButton>
                    <b onClick={()=>this.buyBook()}>购买</b>
                </div>
                <H3 title="猜你喜欢"/>
                <FindItem dataList={dataList} num={10} introduce="主流硬盘接口分为M.2和SATA两种，M.2SSD又有PCL-E与SATA通道之分，这是两种"/>
            </div>
        );
    }

}

export default withRouter(Detail);