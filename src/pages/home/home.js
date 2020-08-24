import React from "react";
import {withRouter} from "react-router-dom";
import SuCell from "../../components/su-cell";
import homeCss from "./home.module.css";
import store from "../../plugins/redux";
import {actionUser} from "../../store/actions";
import Loading from "../../components/loading";
import SuLoading from "../../components/su-loading";

class Home extends React.Component{


    async componentDidMount(){
        actionUser()(store.dispatch);
    }

    render() {
        let data=[
            {_id:1001,pic:"/img/homea.jpg",bookName:"月亮与六联式",readStat:20,bookStat:true,},
            {_id:1002,pic:"/img/homea.jpg",bookName:"月亮与七联式",readStat:20,bookStat:true,},
            {_id:1003,pic:"/img/homea.jpg",bookName:"月亮与六联式",readStat:20,bookStat:true,},
            {_id:1004,pic:"/img/homea.jpg",bookName:"月亮与六联式",readStat:20,bookStat:true,},
            {_id:1005,pic:"/img/homea.jpg",bookName:"月亮与六联式",readStat:20,bookStat:true,},
        ];
        let {user} = store.getState();

        if(!user._id){
            return <SuLoading/>;
            // return <Loading color="#5477B2"/>;
        }else{
            data=user.userBook;
            var data2=user.readBook;
        }
        // console.log(data);
        return (
            <div className={homeCss.home+" clear"}>
                <p className={homeCss.titleP}><span>书架·在读</span><b>按最新</b><i>查看更多></i></p>
                <div className="clear">
                    {data.map((item,index)=>(
                        <SuCell to={{pathname:`/detail/${item._id}`,search:{collectionName:'book',_id:item._id}}} key={item._id} bookName={item.bookName} bookStat={item.bookStat} readStat={item.readStat} pic={item.pic}/>
                    ))}
                </div>
                <div className={homeCss.titleP2+" clear"}><span>浏览记录·读过</span><i>查看更多></i></div>
                {data2.map((item,index)=>(
                    <SuCell to={{pathname:`/detail/${item._id}`,search:{collectionName:'book',_id:item._id}}} key={item._id} bookName={item.bookName} bookStat={item.bookStat} pic={item.pic}/>
                ))}
            </div>
        );
    }
}

export default withRouter(Home);