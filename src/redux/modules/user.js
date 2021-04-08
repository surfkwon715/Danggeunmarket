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
      })
      .catch((error) => {
        alert(error.errorMessage);
    })
  
        //리덕스에 보내기
        dispatch(
          setUser({
            username: username,
            password: password,
          })
        );

        history.push("/");
      }

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
      })
      .catch((error) => {
        console.log(error.errorMessage);
  })
  };



 export const FindIdAX = (email) => {
   fetch("http://15.165.77.77:8080/api/usernamefind", {
     method: "POST",
     headers: {
       "content-type": "application/json",
     },

     //문자열을 json로 만들어서 body에 실어보냄
     body: JSON.stringify({
       email: email,
     }),
   })
     //서버에서 받은 문자열 응답을 다시 json으로!!
     .then((res) => res.json())
     .then((res) => {
       if (res.status === 200) {
         console.log("아이디 찾기 성공!");
         alert(`가입하신 아이디는 ${res.username} 입니다`);
       } else {
         console.log("실패!");
         alert("이메일을 다시 입력해주세요");
       }
     })
     .catch((error) => {
       console.log(error.errorMessage);
     });
 };



export const FindPwAX = (username, email) => {
   fetch("http://15.165.77.77:8080/api/passwordfind", {
     method: "POST",

     //accept header : 자신에게 이러한 데이터 타입만 허용하겠다는 뜻
     headers: {
       //HTTP 메시지(요청과 응답 모두)에 담겨 보내는 데이터의 형식을 알려주는 헤더
       //AJAX를 통해 json 형식의 데이터를 전송하는 경우 Content-Type 값을 application/json 으로 지정하여 보낼 수 있고
       //<form>태그를 통해 첨부파일 등을 전송하는 경우라면 브라우저가 자동으로 Content-Type울 multipart/form-data로 설정하여 요청 메시지를 보낼것
       "content-type": "application/json",
     },

     //문자열을 json로 만들어서 body에 실어보냄
     body: JSON.stringify({
       username: username,
       email: email,
     }),
   })
     //서버에서 받은 문자열 응답을 다시 json으로!!
     .then((res) => res.json())
     .then((res) => {
       if (res.status === 200) {
         console.log("비밀번호 찾기 성공!");
         alert(`가입하신 아이디는 ${res.username} 입니다`);
       } else {
         console.log("실패!");
         alert("이메일을 다시 입력해주세요");
       }
     })
     .catch((error) => {
       console.log(error.errorMessage);
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
  FindIdAX,
  FindPwAX,
};

export { actionCreators };