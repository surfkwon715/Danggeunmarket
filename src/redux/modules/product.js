import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import axios from "axios";

// Actions (액션)
const ON_SALES = "ON_SALES";
const DONE = "DONE";
const HIDE = "HIDE";

// initialState
const initialState = {


};

// Action Creators (액션 생성 함수)
const onSales = createAction(ON_SALES, (user) => ({ user }));
const done = createAction(DONE, (user) => ({ user }));
const hide = createAction(HIDE, (user) => ({ user }));



//판매중
export const onSalesAX = (category) => {
    return function (dispatch, getState, { history }) {

        if (category === "판매중") {
        


    }

    axios
    .get("http://15.165.77.77:8080/api/login", {
        
    })

      //res = 서버에서 주는 token (JWT)
    .then((res) => {
        console.log(res);

        sessionStorage.setItem("token", res.data.token);

        history.push("/");
      })

      .catch((error) => {
        console.log("에러발생!", error);
      });

  };
};

//거래완료
export const DoneAX = () => {
  return function (dispatch, getState, { history }) {
    axios
      //구매내역 목록 받아올 때도 token을 보내야 하는지?
      .get("http://15.165.77.77:8080/api/signup", {})
      .then(() => {
        console.log("성공!");

        //dispatch(setUser({ _user }));
      })
      .catch((error) => {
        console.log("에러발생!", error);
      });
  };
};


//숨김
export const hideAX = (username, password, pwcheck, email) => {
  return function (dispatch, getState, { history }) {
    axios
      .get("http://15.165.77.77:8080/api/signup", { username: username, password: password, pwcheck: pwcheck, email: email })
      .then(() => {
        console.log("성공!");

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
    [ON_SALES]: (state, action) =>
      produce(state, (draft) => {
        //setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;
      }),

    //GET_USER는 아무것도 안해주는지(?)
    [DONE]: (state, action) => produce(state, (draft) => {}),

    [HIDE]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const ActionCreators = {
  onSalesAX,
  DoneAX,
  hideAX,
};

export { ActionCreators };
