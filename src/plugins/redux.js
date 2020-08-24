import {createStore,combineReducers,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";

import banner from "../store/reduces/banner";
import likeData from "../store/reduces/likeData";
import find from "../store/reduces/find";
import user from "../store/reduces/user";
import detail from "../store/reduces/detail";
import signIn from "../store/reduces/signIn";



const rootReducer = combineReducers({banner,likeData,find,user,detail,signIn});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
// let store = createStore(rootReducer,applyMiddleware(thunk));

export default store;