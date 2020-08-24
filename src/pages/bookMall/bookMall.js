import React from "react";
import {withRouter,NavLink} from "react-router-dom";
import bookMallCss from "./bookMall.module.css";
import SuList from "../../components/su-list";
import SuSwiper from "../../components/su-swiper";
import MiddleNav from "../../layouts/middleNav/middleNav";
import H3 from "../../components/su-h3";
import {actionBookMall} from "../../store/actions";
import store from "../../plugins/redux";
import SuLoading from "../../components/su-loading";


class BookMall extends React.Component{

    state={
        prevSpan:null
    }

    async componentDidMount(){
        // console.log("bookmailcomponentDidMount",actionBookMall()(store.dispatch),store.dispatch);
        actionBookMall()(store.dispatch);
    }

    spanClick=(e)=>{
        this.changeActive(e);
    }
    /*
    * 点击时增加下划线样式
    * 默认prevSpan是第一个span
    * 每次点击清除上一次span的样式
    * 增加这次被点击span的样式，并将其存储到prevSpan中
    * */
    changeActive=(e)=>{
        if(this.state.prevSpan===null) {this.state.prevSpan=document.querySelector('span[keys="1"]');}
        this.state.prevSpan.className="";
        e.target.className=bookMallCss.spanActive;
        this.state.prevSpan=e.target;
    }

    render() {
        // console.log("bookMall render && store.getState",store.subscribe((aaa,bbb)=>console.log(aaa,bbb)));
        let {banner,likeData} = store.getState();
        let bannerData=banner,recommendDate=likeData.splice(2);

        if(bannerData.length===0 && likeData.length===0){
            return <SuLoading/>;
        }
        return (
            <div className={bookMallCss.bookMall+" clear"}>
                <ul className={bookMallCss.ul+" clear"}>
                    <li><span keys="1" onClick={(e)=>this.spanClick(e)} className={bookMallCss.spanActive}>精选内容</span></li>
                    <li><span keys="2" onClick={(e)=>this.spanClick(e)}>男生频道</span></li>
                    <li><span keys="3" onClick={(e)=>this.spanClick(e)}>女生频道</span></li>
                </ul>
                <SuSwiper data={bannerData} to={{pathname:"/detail"}}/>
                <MiddleNav/>

                <H3 title="猜你喜欢"/>
                <div className="clear">
                    {likeData.map((item,index)=>(
                        <SuList to={{pathname:`/detail/${item.bookId}`,search:{collectionName:'book',_id:item.bookId}}} key={item._id} pic={item.pic} bookName={item.bookName} recommend={item.recommend} model/>
                    ))}
                </div>

                <H3 title="今日推荐" model/>
                <div className="clear">
                    {recommendDate.map((item,index)=>(
                        <SuList to={{pathname:`/detail/${item.bookId}`,search:{collectionName:'book',_id:item.bookId}}} key={item._id} bookName={item.bookName} pic={item.pic} auth={item.auth} bookDes={item.bookDes} index={index+1}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default withRouter(BookMall);