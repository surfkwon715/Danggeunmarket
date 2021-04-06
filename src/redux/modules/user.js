import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

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



//서버에서 유저정보 보내고 받아오기 (로그인)
export const loginAX = (username, password) => {
  return function (dispatch, getState, { history }) {
    axios
      .post("http://15.165.77.77:8080/api/login", {
        username: username,
        password: password,
      })

      //res = 서버에서 주는 token (JWT)
      .then((res) => {
        console.log(res);

        sessionStorage.setItem("token", res.data.token);

        // axios.get("", config).then((res) => {
        //   let userInfo = {
        //     username: res.data.data.username,
        //     password: res.data.data.password,
        //   };
        // });

        // dispatch(
        //   setUser({
        //     username: username,
        //     password: password,
        //   })
        // );

        history.push("/");
      })

      .catch((error) => {
                console.log("에러발생!", error);

      });

    // axios
    //   .post("http://13.209.10.75/api/login", {
    //     token: sessionStorage.getItem("token"),
    //   })

    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((error) => {});
  };
};



//서버에 유저정보 추가 (회원가입)
export const SignupAX = (username, password, pwcheck, email) => {
  return function (dispatch, getState, { history }) {
    axios
      .post("http://15.165.77.77:8080/api/signup", { username: username, password: password, pwcheck: pwcheck, email: email })
      .then(() => {
        console.log("성공!")

        //dispatch(setUser({ _user }));

  
      })
      .catch((error) => {
        console.log("에러발생!", error);
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
    
    //GET_USER는 아무것도 안해주는지(?)
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