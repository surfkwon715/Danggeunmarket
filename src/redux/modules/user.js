import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";

import axios from "axios";



// Actions (액션)
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";


// initialState
const initialState = {
  user: null,
  is_login: false,
};


// Action Creators (액션 생성 함수)
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));



//서버에서 유저정보 받아오기 (로그인)
export const loginAX = (username, password) => {

  return function (dispatch, {history}) {

    //로그인 input값 전달하고 나서 서버에서 토큰을 받아올때
    //쿼리에 넣어 받아옴
    axios.get("http://15.165.77.77:8080/api/login")
      
      .then((user) => {
        console.log(user);

        dispatch(
          setUser({
            username: username,
            password: password,
          })
        );

        history.push("/");
    })

    .catch((error) => {
     alert(error.errorMessage);
    })
  };
};



//서버에 유저정보 추가 (회원가입)
export const SignupAX = (username, password, pwCheck, email) => {

  return function (dispatch, { history }) {
        let _user = {
            username: username,
            password: password,
            pwCheck: pwCheck,
            email: email,
        }
        
      axios.post("http://15.165.77.77:8080/api/signup", {
        ..._user
      })
        .then(() => {
          dispatch(
            setUser({ _user })
          );

          history.push("/");
        })
        .catch((error) => {
          alert(error.errorMessage);
        });
    };
};


// Reducer 함수 (## 리듀서에 default가 붙음!)
// 1항 - 갈아끼울 state(initialState), 2항 - state를 갈아끼우기 위한 action
// (action은 dictionary 형태 - key:value)
export default handleActions(
  {
    [SET_USER]: (state, action) => 
      produce(state, (draft) => {
        //setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    
    //GET_USER는 아무것도 안해줘도 되나(?)
    [GET_USER]: (state, action) => produce(state, (draft) => {

    })
  },
  initialState
);

const ActionCreators = {
  loginAX,
  SignupAX,
};

export { ActionCreators };