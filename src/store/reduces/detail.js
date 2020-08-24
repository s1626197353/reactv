let initState=[];

const detail = (detail = initState, {type, detailData}) => {
    if(type === "UPDATE_DETAIL"){
        return detailData;
    }else{
        return detail;
    }
}

export default detail;