import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { addItemSV } from "../redux/modules/item";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Text from "../elements/Text";
import Button from "../elements/Button";


import axios from "axios";



const Write = (props) => {
  
  const title_ref = React.useRef("안녕");
  const contents_ref = React.useRef("하이");
  const fileInput = React.useRef(null)

  
  const Create =()=>{
    axios(
      {
        method: 'post',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        url:"http://15.165.77.77:8080/api/boards",
        data:{
          title: title_ref.current.value,
          contents: contents_ref.current.value,
        },
      })
      .then((response)=>{
        console.log(response.data)
        
      }).catch(error=>{
        console.log(error);
      })
    }
    
   
      
  const ImageUp=()=>{
      console.log(fileInput.current)}

    
   

  

// 이미지 업로드  const example_ref = React.useRef(null);
// 가격도 추가
// 완료 누르면 데이터가 서버로 넘어가도록 + 등록이 되도록
  return (
    <React.Fragment>

      <Grid is_flex border_bottom="1px solid #e9ecef" padding="10px">
      
      <pButton onClick={()=>props.history.push("/postlist")}>
        <Text size="12px">닫기</Text></pButton>

      <Text bold size="20px">중고거래 글쓰기</Text>
      
      <pButton onClick={()=>{Create()}}>
      <Text size="12px">완료</Text></pButton>
      </Grid>
      
      <Grid border_bottom="1px solid #e9ecef" padding="30px">
        <input type="file" ref={fileInput} onClick={()=>{ImageUp()}}></input>
      </Grid>
      <Grid border_bottom="1px solid #e9ecef" padding="20px">
       <NLInput placeholder="글 제목"  width="200px" ref={title_ref}></NLInput>
      </Grid>
      <Grid is_flex border_bottom="1px solid #e9ecef" padding="20px">
       <Text>카테고리 선택</Text>
       <pButton>></pButton>
      </Grid>
      <Grid is_flex border_bottom="1px solid #e9ecef" padding="20px">
       <NLInput placeholder="가격입력(선택사항)" width="200px"></NLInput>
       <Text><input type="checkbox"></input>가격제안받기</Text>
      </Grid>
      <Grid is_flex border_bottom="1px solid #e9ecef" padding="60px">
       <NLInput type="text" ref={contents_ref} width="800px" height="100px"
        placeholder="올릴 게시글 내용을 작성해주세요">

       </NLInput>
      </Grid>

     
    </React.Fragment>
  );
};


const NLInput = styled.input`
  
  outline: none;
  width: ${(props)=>props.width};
  height: ${(props)=>props.height};
  border: none;
  
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
