import React, {useRef} from "react";
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import Signup from "./Signup";
import { loginAX } from "../redux/modules/user";

import { Grid, Text } from '../elements';


const Login = (props) => {
  const dispatch = useDispatch();

    const username_ref = useRef(null);
    const password_ref = useRef(null);


  return (
    <React.Fragment>
      <InputWrapper>
        <Text size="20px" color="#e67700" bold>로그인</Text>
        <Text size="10px" color="#e67700" bold>당근마켓에 오신 것을 환영합니다!</Text>
        

        <ExtraGrid>
          <Text size="16px" color="#e67700">아이디</Text>
          <input type="text" ref={username_ref} width="100%" padding="2px 4px" box-sizing="border-box" border="1px solid #000000" />
        </ExtraGrid>

        <ExtraGrid>
          <Text size="16px" color="#e67700">비밀번호</Text>
          <input type="text" ref={password_ref} />
        </ExtraGrid>

        <ExtraGrid>
          <button
            onClick={() => {
              if (username_ref.current.value === "" || password_ref.current.value === "") {
                window.alert("아이디, 패스워드, 닉네임을 모두 입력해주세요!");
                return;
              }
              dispatch(
                loginAX(username_ref.current.value, password_ref.current.value)
              );
            }}
            style={{
              fontSize: "14px",
              color: "#e67700",
              padding: "8px 4px",
              margin: "30px auto 0px",
              backgroundColor: "ivory",
              border: "1px solid #888888",
            }}
          >
            로그인
          </button>
        </ExtraGrid>

        <div>
          <button onClick={() => {
            props.history.push("/signup");
          }}
            
            style={{ fontSize: "14px", color: "#e67700", marginTop: "20px", backgroundColor: "ivory", border: "1px solid #888888" }}
          >
            회원가입
          </button>
        </div>
      </InputWrapper>
    </React.Fragment>
  );
};

const InputWrapper = styled.div`
  width: 60vw;
  height: 100vh;

  padding: 30px 16px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;

  background-color: #ffe3e3;
`;

const ExtraGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;


`;


export default Login;
