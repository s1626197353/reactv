let initState = [];

const likeData = (state=initState, {type, likeData}) => {
    // console.log("likeData状态");
    switch (type) {
        case "UPDATE_LIKEDATA":
            // console.log("likeData状态UPDATE_LIKEDATA");
            return likeData;
        default:
            return state;
    }
    // if (type === "UPDATE_LIKEDATA") {
    //     console.log("likeData状态UPDATE_LIKEDATA");
    //     return likeData;
    // } else {
    //     return state;
    // }
}

export default likeData;