let initState = [];

const banner = (banner = initState, {type, bannerData}) => {
    switch(type){
        case "UPDATE_BANNER":
            return bannerData;
        default:
            return banner;
    }
    // if(type === "UPDATE_BANNER"){
    //     return bannerData;
    // }else{
    //     return banner;
    // }
}

export default banner;