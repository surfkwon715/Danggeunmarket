import React, {useRef} from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { SignupAX } from "../redux/modules/user";
import { CheckUserName } from "../redux/modules/user";
import { Grid, Text, Button } from "../elements";


const Signup = (props) => {
  const dispatch = useDispatch();

  const username_ref = useRef(null);
  const password_ref = useRef(null);
  const pwd_check_ref = useRef(null);
  const email_ref = useRef(null);


  return (
    <React.Fragment>
      <div style={{ margin: "0 auto" }}>
        <InputWrapper>
          <Text size="20px" margin="40px 0 10px" padding="20px" bold style={{ width: "250px", borderBottom: "3px solid #000000" }}>
            회원가입
          </Text>

          {/* 회원가입 아래 선 */}
          <div
            style={{
              width: "400px",
              height: "10px",
              borderBottom: "1.3px solid #495057",
              marginBottom: "30px",
            }}
          ></div>

          <div style={{ display: "flex", margin: "10px auto", flexDirection: "row", alignItems: "center" }}>
            <Text size="13px" color="#e67700" margin="0 45px 0 0" bold>
              아이디
            </Text>
            <input
              type="text"
              ref={username_ref}
              placeholder="영문, 숫자 포함"
              style={{
                width: "200px",
                height: "40px",
                padding: "2px 10px",
                fontSize: "11px",
                color: "#ced4da",
                boxSizing: "border-box",
                border: "1px solid #dee2e6",
              }}
            />

            <div
              style={{
                width: "70px",
                padding: "9px 0",
                margin: "0 0 0 5px",
                borderRadius: "3px",
                backgroundColor: "#ffffff",
                border: "1px solid #d9480f",
                textAlign: "center",
              }}
              onClick={() => {
                CheckUserName(username_ref.current.value);
              }}
            >
              <Text size="11px" color="#d9480f" bold>
                중복확인
              </Text>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "row", height: "28px", margin: "20px auto", alignItems: "center" }}>
            <Text size="13px" color="#e67700" margin="0 30px 0 0" bold>
              비밀번호
            </Text>
            <input
              type="text"
              ref={password_ref}
              placeholder="영문, 숫자, 특수문자 포함"
              style={{
                width: "200px",
                height: "40px",
                padding: "2px 10px",
                fontSize: "11px",
                color: "#ced4da",
                boxSizing: "border-box",
                border: "1px solid #dee2e6",
              }}
            />

            <div
              style={{
                width: "70px",
                padding: "6px 0",
                margin: "0 0 0 5px",
                borderRadius: "3px",
                backgroundColor: "#ffffff",
                textAlign: "center",
              }}
              onClick={() => {
                CheckUserName(username_ref.current.value);
              }}
            ></div>
          </div>

          <div style={{ display: "flex", flexDirection: "row", height: "28px", margin: "20px auto", alignItems: "center" }}>
            <Text size="12px" color="#e67700" margin="0 15px 0 0" bold>
              비밀번호확인
            </Text>
            <input
              type="text"
              ref={password_ref}
              placeholder="비밀번호를 한번 더 입력"
              style={{
                width: "200px",
                height: "40px",
                padding: "2px 10px",
                fontSize: "11px",
                color: "#ced4da",
                boxSizing: "border-box",
                border: "1px solid #dee2e6",
              }}
            />

            <div
              style={{
                width: "70px",
                padding: "6px 0",
                margin: "0 0 0 5px",
                borderRadius: "3px",
                backgroundColor: "#ffffff",
                textAlign: "center",
              }}
              onClick={() => {
                CheckUserName(username_ref.current.value);
              }}
            ></div>
          </div>

          <div style={{ display: "flex", flexDirection: "row", height: "28px", margin: "20px auto", alignItems: "center" }}>
            <Text size="13px" color="#e67700" margin="0 45px 0 0" bold>
              이메일
            </Text>
            <input
              type="text"
              ref={password_ref}
              placeholder="예: danggeun@market.com"
              style={{
                width: "200px",
                height: "40px",
                padding: "2px 10px",
                fontSize: "11px",
                color: "#ced4da",
                boxSizing: "border-box",
                border: "1px solid #dee2e6",
              }}
            />

            <div
              style={{
                width: "70px",
                padding: "6px 0",
                margin: "0 0 0 5px",
                borderRadius: "3px",
                backgroundColor: "#ffffff",
                textAlign: "center",
              }}
              onClick={() => {
                CheckUserName(username_ref.current.value);
              }}
            ></div>
          </div>

          {/* 가입 버튼 */}
          <div style={{ display: "flex", justifyContent: "center", margin: "20px auto" }}>
            <div
              style={{
                width: "70px",
                padding: "10px 20px",
                borderRadius: "3px",
                marginTop: "15px",
                backgroundColor: "#e8590c",
                border: "1px solid #d9480f",
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                //예외처리
                if (username_ref.current.value === "" || password_ref.current.value === "" || email_ref.current.value === "") {
                  window.alert("아이디, 패스워드, 닉네임을 모두 입력해주세요!");
                  return;
                }

                if (password_ref.current.value !== pwd_check_ref.current.value) {
                  window.alert("패스워드와 패스워드 확인이 일치하지 않습니다!");
                  return;
                }

                dispatch(
                  SignupAX(username_ref.current.value, password_ref.current.value, pwd_check_ref.current.value, email_ref.current.value)
                );

                props.history.push("/");
              }}
            >
              <Text size="13px" color="#ffffff" bold>
                가입하기
              </Text>
            </div>
          </div>
        </InputWrapper>
      </div>
    </React.Fragment>
  );
};

const InputWrapper = styled.div`
  width: 60vw;
  height: 100vh;

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
  justify-content: center;

  margin: 10px auto;
  padding: 30px;

  height: 100%;
`;



export default Signup;
