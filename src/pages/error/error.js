import React from "react";
import {withRouter} from "react-router-dom";

class Error extends React.Component{

    render() {
        return (
            <div>
                <h2>404</h2>
                <h2>404</h2>
                <h2>404</h2>
                <h2>404</h2>
                <h2>404</h2>
                <h2>404</h2>
                <h3>找不到页面</h3>
            </div>
        );
    }

}

export default withRouter(Error);