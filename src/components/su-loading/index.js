import React from "react";
import loadingCss from "./loading.module.css";

const SuLoading=()=>{
    return (
        <div className={loadingCss.spinner}>
            <div className={loadingCss.spinnerContainer+" "+loadingCss.container1}>
                <div className={loadingCss.circle1}></div>
                <div className={loadingCss.circle2}></div>
                <div className={loadingCss.circle3}></div>
                <div className={loadingCss.circle4}></div>
            </div>
            <div className={loadingCss.spinnerContainer+" "+loadingCss.container2}>
                <div className={loadingCss.circle1}></div>
                <div className={loadingCss.circle2}></div>
                <div className={loadingCss.circle3}></div>
                <div className={loadingCss.circle4}></div>
            </div>
            <div className={loadingCss.spinnerContainer+" "+loadingCss.container3}>
                <div className={loadingCss.circle1}></div>
                <div className={loadingCss.circle2}></div>
                <div className={loadingCss.circle3}></div>
                <div className={loadingCss.circle4}></div>
            </div>
        </div>
    );
}

export default SuLoading;