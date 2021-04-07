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
          <Text size="20px" margin="60px 0 20px" bold>
            회원가입
          </Text>

          <ExtraGrid>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ width: "80px", fontSize: "14px", color: "#e67700", fontWeight: "bold" }}>아이디</div>

              <Grid>
                <Button
                  width="90px"
                  padding="6px 8px"
                  margin="0 0 0 20px"
                  bold
                  onClick={() => {
                    CheckUserName(username_ref.current.value);
                  }}
                >
                  <Text size="11px" color="#ffffff">
                    중복확인
                  </Text>
                </Button>
              </Grid>
            </div>

            <Grid>
              <input type="text" ref={username_ref} width="100%" padding="2px 4px" box-sizing="border-box" border="1px solid #000000" />
            </Grid>

            <Grid margin="10px auto">
              <Text size="14px" color="#e67700" bold>
                비밀번호
              </Text>
              <input type="text" ref={password_ref} />
            </Grid>

            <Grid margin="10px auto">
              <Text size="14px" color="#e67700" bold>
                비밀번호 확인
              </Text>
              <input type="text" ref={pwd_check_ref} />
            </Grid>

            <Grid margin="10px auto">
              <Text size="14px" color="#e67700" bold>
                이메일
              </Text>
              <input type="text" ref={email_ref} />
            </Grid>

            <Grid margin="20px auto" style={{ display: "flex", justifyContent: "center" }}>
              <Button
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
                size="14px"
                color="#e67700"
                width="100px"
                padding="4px 8px"
                margin="20px 0 0 30px"
              >
                가입
              </Button>
            </Grid>
          </ExtraGrid>
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
