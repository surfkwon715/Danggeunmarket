import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import user from "./modules/user";


//thunk로 middlewares 생성
const middlewares = [thunk];

//middlewares를 하나씩 꺼내서 미들웨어를 적용 (enhancer 생성: '향상)
const enhancer = applyMiddleware(...middlewares);

//redux의 word를 받아 reducer와 결합해서 rootReducer를 생성
const rootReducer = combineReducers({ user });

//rootReducer와 enhancer를 합쳐 store 생성
const store = createStore(rootReducer, enhancer);

//store 내보내기
export default store;