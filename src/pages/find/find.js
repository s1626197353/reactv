import React from "react";
import {withRouter} from "react-router-dom";
import H3 from "../../components/su-h3";
import FindItem from "./findItem";
import {actionFind} from "../../store/actions";
import store from "../../plugins/redux";
import SuLoading from "../../components/su-loading";


class Find extends React.Component{


    async componentDidMount(){
        actionFind()(store.dispatch);
    }

    render() {
        let {find} = store.getState();
        let dataList=find;
        let dataList2=dataList.splice(5);
        let dataList3=dataList2.splice(5);
        let dataList4=dataList3.splice(5);

        if(find.length===0){
            return <SuLoading/>;
        }
        return (
            <div>
                <H3 title="专题推荐" model/>
                <FindItem bookDes={dataList[0].bookDes} num={dataList[0].num} dataList={dataList}/>
                <FindItem bookDes={dataList[2].bookDes} num={dataList[2].num} dataList={dataList2}/>
                <H3 title="热门书单"/>
                <FindItem bookDes={dataList[3].bookDes} model star={dataList[3].star} fork={dataList[3].fork} dataList={dataList3}/>
                <FindItem bookDes={dataList[4].bookDes} model star={dataList[4].star} fork={dataList[4].fork} dataList={dataList4}/>
            </div>
        );
    }
}

export default withRouter(Find);