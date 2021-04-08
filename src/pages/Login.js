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
        <Text size="22px" color="#d9480f" margin="0 auto 20px" bold>
          로그인
        </Text>

        <ExtraGrid>
          <input
            type="text"
            placeholder="아이디"
            ref={username_ref}
            style={{
              width: "250px",
              height: "40px",
              padding: "2px 10px",
              fontSize: "12px",
              color: "#495057",
              boxSizing: "border-box",
              border: "1px solid #dee2e6",
            }}
          />
        </ExtraGrid>

        <ExtraGrid>
          <input
            type="password"
            placeholder="비밀번호"
            ref={password_ref}
            style={{
              width: "250px",
              height: "40px",
              padding: "2px 10px",
              fontSize: "12px",
              color: "#495057",
              boxSizing: "border-box",
              border: "1px solid #dee2e6",
            }}
          />
        </ExtraGrid>

        <MiniText>아이디/비밀번호 찾기</MiniText>

        <ExtraGrid>
          <ButtonStyle
            onClick={() => {
              if (username_ref.current.value === "" || password_ref.current.value === "") {
                window.alert("아이디, 패스워드, 닉네임을 모두 입력해주세요!");
                return;
              }
              if (username_ref.current.value === "" || password_ref.current.value === "") {
                window.alert("아이디, 패스워드, 닉네임을 모두 입력해주세요!");
                return;
              }
              dispatch(loginAX(username_ref.current.value, password_ref.current.value));
              alert("로그인 되었습니다")
              props.history.push("/postlist");
            }}
          >
            로그인
          </ButtonStyle>
        </ExtraGrid>

        <div>
          <ButtonStyle
            onClick={() => {
              props.history.push("/signup");
            }}
            style={{ fontSize: "12px", color: "#ffffff", backgroundColor: "#e67700", border: "none" }}
          >
            회원가입
          </ButtonStyle>
        </div>
      </InputWrapper>
    </React.Fragment>
  );
};

const InputWrapper = styled.div`
  width: 60vw;
  height: 100vh;

  padding: 30px 16px;
  margin: 0px auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;

`;

const ExtraGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
`;

const ButtonStyle = styled.button`
  width: 250px;
  font-size: 12px;
  color: #e67700;
  padding: 8px 20px;
  margin: 5px auto 0px;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  cursor: pointer;
  font-weight: bold;
`;

const MiniText = styled.div`
  font-size: 11px;
  color: #adb5bd;
  text-decoration: underline;
  text-align: right;
  margin-top: 30px;
  cursor: pointer;
`;

export default Login;
