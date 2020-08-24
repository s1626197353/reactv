import React from "react";
import {withRouter} from "react-router-dom";
import SuButton from "../../components/su-button";

const Set=()=>{
    return (
        <div>
            <SuButton text="注销" size="big"/>
        </div>
    );
}


export default withRouter(Set);

