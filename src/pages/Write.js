import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { addItemSV } from "../redux/modules/item";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Text from "../elements/Text";
import Button from "../elements/Button";


import axios from "axios";
import { FaParachuteBox } from "react-icons/fa";



const Write = (props) => {
  
  const title_ref = React.useRef("안녕");
  const contents_ref = React.useRef("하이");
  const image_ref = React.useRef("그래");
  const preview = "사진"
  
 
  
  const Create =()=>{
    
    

    const form = new FormData();
    form.append('title',title_ref.current.value);
    form.append('contents',contents_ref.current.value);
    form.append('files',image_ref.current.files[0]);
      console.log(title_ref.current.value)
      console.log(contents_ref.current.value)
      console.log(image_ref.current.files[0])
     
      
     axios(
      {
        method: 'post',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        url:"http://15.165.77.77:8080/api/boards",
        body: form,
      }
     )

    
    // axios.post("http://15.165.77.77:8080/api/boards",form,{
    //       headers: {
    //       // Accept: "application/json",
    //        'Content-Type': 'multipart/form-data'
    //      },
    //     })
      .then((response)=>{
        console.log(response);
        // console.log(snapshot);
        // snapshot.ref.getDownloadURL().then((url)=>console.log(url))
        
      }).catch(error=>{
        console.log(error);
      })
    }

    // const prac = () =>{
    //   console.log(title_ref.current.value)
    //   const form = new FormData();
    //   form.append('title',title_ref.current.value);
    //   console.log(form)
      
    // }
    

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
       <NLInput placeholder="가격입력(선택사항)" width="200px"></NLInput>
       <Text><input type="checkbox"></input>가격제안받기</Text>
      </Grid>
      <Grid is_flex border_bottom="1px solid #e9ecef" padding="60px">
       <NLInput type="text" ref={contents_ref} width="800px" height="100px"
        placeholder="올릴 게시글 내용을 작성해주세요">

       </NLInput>
      </Grid>
      {/* <button onClick={()=>{prac()}}></button> */}

     
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
