import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { getItemListSV } from "../redux/modules/item";
import Image from "../elements/Image";


const PostList = (props) => {


 
  return (
    <React.Fragment>
      <Title></Title>
       {/* {item_list.map((w,index) => {
       {item_list}
        return (
          <Card key={w.title} onClick={()=>{props.history.push("/post/"+index)}}>
            <Image></Image>
            <div>
            
            <Text bold>{w.title}</Text>
            
            <Text>{w.content}</Text>
            
            </div>
          </Card>
        );
      })} */}

      <AddButton
        onClick={() => {
          props.history.push("/write");
        }}
      >
        +
      </AddButton>
    </React.Fragment>
  );
};

const Title = styled.h1`
  width: 90vw;
  margin: 8px auto;
`;

const Card = styled.div`
  width: 90vw;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 4px 16px;
  margin: 8px auto;
  box-sizing: border-box;
  background-color: #ffffff;
  
`;

// 텍스트 스타일을 잡아줄거예요.
// size라는 props가 있으면 size대로 폰트 크기를 넣어주고,
// underline이라는 props가 있으면 밑줄을 줄거예요.(text-decoration 속성을 사용합니다.)
// color라는 props가 있으면 color대로 텍스트 컬러를 바꿔줄거예요.
const Text = styled.p`
  font-size: ${(props) => (props.size ? `${props.size}` : "16px")};
  ${(props) => (props.underline ? "text-decoration: underline;" : "")}
  ${(props) => (props.color ? `color: ${props.color};` : "")}
  margin: 4px 0px;
  text-align: left;
`;

// 추가하기 버튼 스타일을 잡아줄거예요.
const AddButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: orange;
  color: #ffffff;
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default PostList;
