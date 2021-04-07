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
        <Text size="22px" color="#d9480f" margin="0 auto 10px" bold>
          로그인
        </Text>

        <ExtraGrid>
          <Text size="16px" color="#e67700" margin="7px 0">
            아이디
          </Text>
          <input
            type="text"
            ref={username_ref}
            style={{ width: "250px", padding: "2px 4px", boxSizing: "border-box", border: "1px solid #000000" }}
          />
        </ExtraGrid>

        <ExtraGrid>
          <Text size="16px" color="#e67700" margin="7px 0">
            비밀번호
          </Text>
          <input type="text" ref={password_ref} style={{ width: "250px" }} />
        </ExtraGrid>

        <ExtraGrid>
          <ButtonStyle
            onClick={() => {
              if (username_ref.current.value === "" || password_ref.current.value === "") {
                window.alert("아이디, 패스워드, 닉네임을 모두 입력해주세요!");
                return;
              }
              dispatch(loginAX(username_ref.current.value, password_ref.current.value));
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
            style={{ fontSize: "14px", color: "#e67700", backgroundColor: "ivory", border: "1px solid #ffa94d" }}
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
  margin: 20px;
`;

const ButtonStyle = styled.button`
  font-size: 14px;
  color: #ffffff;
  padding: 8px 20px;
  margin: 20px auto 0px;
  background-color: #e67700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;



export default Login;
