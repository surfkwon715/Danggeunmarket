import React from "react";
import styled from "styled-components";
import Grid from "../elements/Grid";
import Text from "../elements/Text";
import axios from "axios";




const Write = (props) => {
  
  const title_ref = React.useRef("안녕");
  const contents_ref = React.useRef("하이");
  const image_ref = React.useRef("그래");
  const price_ref = React.useRef("가격");
 
  const Create =()=>{

    const form = new FormData();
    form.append('title',title_ref.current.value);
    form.append('contents',contents_ref.current.value);
    form.append('files',image_ref.current.files[0]);
    form.append('price', price_ref.current.value);
      for(var key of form.keys()){
        console.log(key);
      }
     
      
     axios(
      {
        method: 'post',
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer' + localStorage.getItem("jwt"),
        },
        url:"http://15.165.77.77:8080/api/boards",
        data: form
      }
      )
      .then((response)=>{
        console.log(response);  
      }).catch(error=>{
        console.log(error);
      })
      props.history.push("/postlist")
  }

  return (
    <React.Fragment>
      
      <Grid is_flex border_bottom="1px solid #e9ecef" padding="10px">
      <pButton onClick={()=>props.history.push("/postlist")}>
      <Text size="12px">닫기</Text>
      </pButton>
      <Text bold size="20px">중고거래 글쓰기</Text>
      <pButton onClick={()=>{Create()}}>
      <Text size="12px">완료</Text>
      </pButton>
      </Grid>
      
      <Grid border_bottom="1px solid #e9ecef" padding="30px">
        <input type="file" ref={image_ref}/>
      </Grid>

      <Grid border_bottom="1px solid #e9ecef" padding="20px">
       <NLInput placeholder="글 제목"  width="200px" ref={title_ref}></NLInput>
      </Grid>

      <Grid is_flex border_bottom="1px solid #e9ecef" padding="20px">
       <Text>카테고리 선택</Text>
       <pButton>></pButton>
      </Grid>

      <Grid is_flex border_bottom="1px solid #e9ecef" padding="20px">
       <NLInput ref={price_ref} placeholder="가격입력(선택사항)" width="200px"></NLInput>
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
