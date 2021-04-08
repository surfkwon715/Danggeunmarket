import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import axios from "axios";
import { SellRecordHeader } from '../../components/Header';
import { history } from '../configStore';



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
  return function (dispatch, getState) {

    fetch("http://15.165.77.77:8080/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    })
      .then((res) => res.json())
      .then((token) => {
        console.log(token);
        localStorage.setItem("jwt", token.accessToken);
        // alert("로그인 되었습니다");
      });



    // axios
    //   .post("", {
    //     username: username,
    //     password: password,
    //   })

    //   //res = 서버에서 주는 token (JWT)
    //   .then((res) => {
    //     console.log(res);

    //     sessionStorage.setItem("token", res.data.token);

      
        //리덕스에 보내기
        dispatch(
          setUser({
            username: username,
            password: password,
          })
        );

        history.push("/");
      }

    // axios
    //   .post("http://13.209.10.75/api/login", {
    //     token: sessionStorage.getItem("token"),
    //   })

    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((error) => {});
  };




//서버에 유저정보 추가 (회원가입)
export const SignupAX = (username, password, pwcheck, email) => {
  return function (dispatch, getState) {

        fetch("http://15.165.77.77:8080/api/signup", {
          method: "POST",
          headers: {
            "content-type": "application/json",

          },

          body: JSON.stringify({
            username: username,
            password: password,
            pwcheck: pwcheck,
            email: email,
          }),

        })
          .then((res) => res.json())
          .then((user) => {
            console.log(user);
            alert("회원가입 되었습니다");
          })
          .catch((error) => {
            console.log(error.errorMessage);
    })

    // axios
    //   .post("http://15.165.77.77:8080/api/signup", { username: username, password: password, pwcheck: pwcheck, email: email }, SellRecordHeader)
    //   .then(() => {
    //     console.log("성공!")

    //     //dispatch(setUser({ _user }));

  
    //   })
    //   .catch((error) => {
    //     console.log("에러발생!", error);
    //   });
  };
};




export const CheckUserName = (username) => {

    fetch("http://15.165.77.77:8080/api/checkusername", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: username,
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          console.log("성공!");
          alert("사용가능한 아이디입니다.");
        } else {
          console.log("실패!");
          alert("중복되는 아이디입니다.");
        }
      });
  };





//Reducer 함수 (## 리듀서에 default가 붙음!)
//1항 - 갈아끼울 state(initialState), 2항 - state를 갈아끼우기 위한 action
//(action은 dictionary 형태 -)
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

const actionCreators = {
  loginAX,
  SignupAX,

  CheckUserName,
};

export { actionCreators };