let initState={
    err:1,
    token:'',
    msg:'失败',
    data:{}
};

const signIn = (state=initState,{type,payload})=>{
    switch (type) {
        case 'UPDATE_SIGNIN':
            return payload;
        case 'UPDATE_LOGOUT':
            return {err:1,token:'',msg:'失败'};
        case 'UPDATE_REG':
            return payload;
        default:
            return state;
    }
};

export default signIn;