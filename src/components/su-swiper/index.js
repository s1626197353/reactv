import React from "react";
import SuSwiperCss from "./su-swiper.module.css";
import "./swiper-bundle.min.css";
import Swiper from "./swiper-bundle.min";
import {withRouter} from "react-router-dom";
import propTypes from "prop-types";


class SuSwiper extends React.Component{
    /*
    * data 轮播数据  [{},{}]
    * url:mpa跳转
    * to：spa跳转 {pathname，collectionName}
    * //index
    * */

    static defaultProps={
        url:"",
        to:null,
        index:0,
    }
    static propTypes={
        data: propTypes.arrayOf(propTypes.shape({
            _id:propTypes.number.isRequired,
            title:propTypes.string.isRequired,
            sub_title:propTypes.string,
            banner:propTypes.string.isRequired,
        })).isRequired,
        to:propTypes.shape({
            pathname:propTypes.string.isRequired,
            collectionName:propTypes.string,
        }),
        url:propTypes.string,
        index:propTypes.number,
    }



    initSwiper=()=>{
        new Swiper ('.swiper-container', {
            loop: true, // 循环模式选项

            autoplay:{
                autoplay:true,
                delay:1000,
            },
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },

            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

        })
    }

    to=()=>{
        console.log("被点击了");
    }

    componentDidMount() {
        this.initSwiper();
    }

    render() {
        let {data} = this.props;
        return (
            <div id={SuSwiperCss.swiper} className="swiper-container">
                <div className="swiper-wrapper">
                    {data.map(item=>(
                        <div key={item._id} className="swiper-slide" id={SuSwiperCss.slide} onClick={()=>this.to(item._id)}>
                            <img src={item.banner} alt=""/>
                        </div>
                    ))}
                </div>
                <div className="swiper-pagination"></div>

                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        );
    }
}

export default withRouter(SuSwiper);