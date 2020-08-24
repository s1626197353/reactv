let initState={};

const user = (user = initState, {type, userData}) => {
    if(type === "UPDATE_USER"){
        return userData;
    }else{
        return user;
    }
}

export default user;