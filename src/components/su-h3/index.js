import React from "react";
import propTypes from "prop-types";
import h3Css from "./h3.module.css";

const H3=({title,model})=>{

    const el= model ? <span>查看更多<i className={h3Css.iconfont}>&#xe502;</i></span>
                    : <span>换一批<i className={h3Css.iconfont}>&#xe509;</i></span>;
    return (
        <div className={h3Css.h3}>
            <em>{title}</em>
            {el}
        </div>
    );
}

H3.defaultProps={
    title:"猜你喜欢",
    model:false,
}
H3.propTypes={
    title:propTypes.string.isRequired,
    model:propTypes.bool,
}

export default H3;
