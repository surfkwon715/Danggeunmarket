import React from "react";
import styled from "styled-components";



const Signup = (props) => {
  return (
    <React.Fragment>
      <InputWrapper>
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>회원가입</p>

        <div>
          <p style={{ fontSize: "16px", color: "#e67700" }}>아이디</p>
          <input type="text" width="100%" padding="2px 4px" box-sizing="border-box" border="1px solid #000000" />
        </div>

        <div margin="10px auto">
          <p style={{ fontSize: "16px", color: "#e67700" }}>비밀번호</p>
          <input type="text" />
        </div>

        <div margin="10px auto">
          <p style={{ fontSize: "16px", color: "#e67700" }}>비밀번호 확인</p>
          <input type="text" />
        </div>

        <div margin="20px">
          <button
            style={{
              fontSize: "14px",
              color: "#e67700",
              marginTop: "40px",
              backgroundColor: "ivory",
              border: "1px solid #888888",
              padding: "4px 8px",
            }}
          >
            가입
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

export default Signup;
