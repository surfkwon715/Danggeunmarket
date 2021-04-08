import React, {useRef} from 'react';
import { Grid, Text, Button } from "../elements";
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { FindIdAX, FindPwAX } from "../redux/modules/user";
import store from "../redux/configStore";


const FindIdPw = (props) => {
  const dispatch = useDispatch();

  const username_ref = useRef(null);
  const email_ref = useRef(null);

 

    return (
      <React.Fragment>
        <InputWrapper>
          <Text size="18px" margin="0 0 50px 0">
            아이디/비밀번호 찾기
          </Text>

          <input
            type="email"
            placeholder="가입하신 이메일을 입력하세요"
            ref={email_ref}
            style={{ fontSize: "12px", width: "300px", height: "30px", border: "1px solid #868e96" }}

          />

          <ExtraGrid style={{ marginBottom: "40px" }}>
            <ButtonStyle
              onClick={() => {
                console.log(email_ref.current.value);
                dispatch(FindIdAX(email_ref.current.value));
                props.history.push("/");
              }}
              style={{ fontSize: "12px", color: "#ffffff", backgroundColor: "#ff922b", border: "none" }}
            >
              아이디 찾기
            </ButtonStyle>
          </ExtraGrid>

          <input
            type="text"
            placeholder="가입하신 아이디를 입력하세요"
            ref={username_ref}
            style={{ fontSize: "12px", width: "300px", height: "30px", margin: "8px 0", border: "1px solid #868e96" }}
          />
          <input
            type="email"
            placeholder="가입하신 이메일을 입력하세요"
            ref={email_ref}
            style={{ fontSize: "12px", width: "300px", height: "30px", margin: "8px 0", border: "1px solid #868e96" }}
          />
          <ExtraGrid>
            <ButtonStyle
              onClick={() => {
                console.log(username_ref.current.value, email_ref.current.value);
                FindPwAX(username_ref.current.value, email_ref.current.value);
              }}
              style={{ fontSize: "12px", color: "#ffffff", backgroundColor: "#fd7e14", border: "none" }}
            >
              비밀번호 찾기
            </ButtonStyle>
          </ExtraGrid>
        </InputWrapper>
      </React.Fragment>
    );
}


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
    width: 50vw;
    margin: 10px auto;

    display: flex;
    align-items: center;
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

export default FindIdPw;