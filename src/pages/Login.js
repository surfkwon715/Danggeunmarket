import React from "react";
import styled from "styled-components";

import Signup from "./Signup";
import LoginService from "./LoginService";


const Login = (props) => {

    const id_ref = React.useRef(null);
    const pwd_ref = React.useRef(null);

  return (
    <React.Fragment>
      <InputWrapper>
        <p style={{ fontSize: "20px", fontWeight: "bold", color: "#e67700" }}>당근마켓에 오신것을 환영합니다!</p>

        <div>
          <p style={{ fontSize: "16px", color: "#e67700" }}>아이디</p>
                  <input type="text" ref={id_ref} width="100%" padding="2px 4px" box-sizing="border-box" border="1px solid #000000" />
        </div>

        <div>
          <p style={{ fontSize: "16px", color: "#e67700" }}>비밀번호</p>
                  <input type="text" ref={pwd_ref}/>
        </div>

        <div>
          <button
            _onClick={LoginService}
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
        </div>

        <p style={{ marginTop: "50px" }}>아직 회원이 아니신가요?</p>
        <div>
          <button
            onClick={Signup}
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
  height: auto;

  padding: 30px 16px;
  margin: 100px auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;

  background-color: #ffe066;
`;

export default Login;
