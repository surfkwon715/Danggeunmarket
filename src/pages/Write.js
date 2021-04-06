import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { addItemSV } from "../redux/modules/item";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Text from "../elements/Text";
import Button from "../elements/Button";

const Write = (props) => {
  

  const dispatch = useDispatch();

  const title_ref = React.useRef(null);
  const contents_ref = React.useRef(null);
//   const example_ref = React.useRef(null);

  const addItem = () => {
    
    const item = {
      title: title_ref.current.value, 
      contents: contents_ref.current.value,
    };

    
    dispatch(addItemSV(item));
    
    
    props.history.replace("/postlist");
  };

  return (
    <React.Fragment>
        <Grid is_flex border_bottom="1px solid #e9ecef" padding="5px">
        <Button>닫기</Button>
      <Text bold size="20px">중고거래 글쓰기</Text>
      <Button>완료</Button>
      </Grid>
      <InputWrapper>
        <p>글 제목</p>
        <input ref={title_ref} />
      </InputWrapper>

      <InputWrapper>
        <p>설명</p>
        <input ref={contents_ref} />
      </InputWrapper>

      {/* <InputWrapper>
        <p>예시</p>
        <input ref={example_ref} />
      </InputWrapper> */}

      {/* 추가 버튼을 누르면 추가할 가짜데이터를 미리 꾸려볼게요. */}
      <pButton onClick={()=>{addItem()}}>추가하기</pButton>
    </React.Fragment>
  );
};

// 제목 스타일을 잡아줄 거예요.
const Title = styled.h1`
  width: 90vw;
  margin: 8px auto;
`;

// input이 들어갈 부분을 감싸줄거예요. 배경색도 흰색으로 줘볼게요!
// 이 div 아래에 있는 p 태그에 접근할 때는 & > p로 접근할 수 있어요.
// 이 div 아래에 있는 input 태그에 접근할 때는 & > input으로 접근할 수 있어요.
const InputWrapper = styled.div`
  width: 90vw;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  margin: 8px auto;
  box-sizing: border-box;
  background-color: #ffffff;
  & > p {
    text-decoration: underline;
    font-size: 8px;
    color: #888888;
    margin: 4px 0px;
  }

  & > input {
    border: 1px solid #000000;
    width: 100%;
    padding: 2px 4px;
    margin: 4px 0px;
    box-sizing: border-box;
  }
`;

// 추가하기 버튼 스타일을 잡아줄거예요.
const pButton = styled.button`
  background-color: #6100ff;
  color: #ffffff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 8px 0px;
  margin: 16px;
`;

export default Write;
