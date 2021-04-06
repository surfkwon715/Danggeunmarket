import React, {useRef} from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { emailCheck } from "../regExp";
import { SignupAX } from "../redux/modules/user";


const Signup = (props) => {
  const dispatch = useDispatch();

  const username_ref = useRef(null);
  const password_ref = useRef(null);
  const pwd_check_ref = useRef(null);
  const email_ref = useRef(null);

  return (
    <React.Fragment>
      <InputWrapper>
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>회원가입</p>

        <div>
          <p style={{ fontSize: "16px", color: "#e67700" }}>아이디</p>
          <input type="text" ref={username_ref} width="100%" padding="2px 4px" box-sizing="border-box" border="1px solid #000000" />
        </div>

        <div margin="10px auto">
          <p style={{ fontSize: "16px", color: "#e67700" }}>비밀번호</p>
          <input type="text" ref={password_ref} />
        </div>

        <div margin="10px auto">
          <p style={{ fontSize: "16px", color: "#e67700" }}>비밀번호 확인</p>
          <input type="text" ref={pwd_check_ref} />
        </div>

        <div margin="10px auto">
          <p style={{ fontSize: "16px", color: "#e67700" }}>이메일</p>
          <input type="text" ref={email_ref} />
        </div>

        <div margin="20px">
          <button
            onClick={() => {

              //예외처리
              if (username_ref.current.value === "" || password_ref.current.value === "" || email_ref.current.value === "") {
                window.alert("아이디, 패스워드, 닉네임을 모두 입력해주세요!");
                return;
              }

              // if (!emailCheck(username_ref.current.value)) {
              //   window.alert('이메일 형식이 맞지 않습니다!');
              //   return;
              // }

              if (password_ref.current.value !== pwd_check_ref.current.value) {
                window.alert("패스워드와 패스워드 확인이 일치하지 않습니다!");
                return;
              }

              dispatch(
                SignupAX(username_ref.current.value,
                  password_ref.current.value,
                  pwd_check_ref.current.value,
                  email_ref.current.value
                )
              );
            }}

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
