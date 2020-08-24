let initState=[];

const find = (find = initState, {type, dataList}) => {
    if(type === "UPDATE_FIND"){
        return dataList;
    }else{
        return find;
    }
}

export default find;