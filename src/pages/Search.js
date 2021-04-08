import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { getItemListSV } from "../redux/modules/item";
import Image from "../elements/Image";
import {FiSearch } from "react-icons/fi";
import {GoSettings,GoChevronLeft } from "react-icons/go";
import {BiBell } from "react-icons/bi";
import Grid from "../elements/Grid";
import axios from "axios";
import {useState} from 'react'




const PostList = (props) => {
  
    const _search =React.useRef("좋아요")
    const text= _search.current.value;

  const initialState=[
    {id:1, title:"당근마켓", contents:"광고"}
  ]

  const [ResData, setData] = useState(initialState);
  
  const Searching =()=>{
    const text= _search.current.value;
      console.log(text)
    axios(
      {
        method: 'get',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
          },
        url:"http://15.165.77.77:8080/api/boards/search?text="+text,
        data:{
            
        },
      })
      .then((response)=>{
        console.log(response.data)
        setData(response.data);
      }).catch(error=>{
        console.log(error);
      })
    };

    
//   React.useEffect(()=>{Searching()}
//   ,[])
  
  
 //두번 눌러야된다 함수사이클이랑 useEffect이해 
  
  

  return (
    
   
    <Grid width="50%" margin="0px auto">
       
    
       <Grid border_bottom="1px solid #e9ecef" padding="20px">
       <TextWrap padding="8px" flex_direction="row">
        <button onClick={()=>{props.history.push("/postlist")}}><GoChevronLeft/></button>
       <NLInput placeholder="검색어를 입력하세요" background_color="#e2e2e2" width="800px" height="30px" ref={_search}></NLInput>
       </TextWrap>
       <button onClick={()=>{Searching()}}>검색하기</button>
      </Grid>
       
        
       
      
    
    {ResData.map((item) => {
        
            return (
              <Card key={item.id} onClick={()=>{props.history.push("/post/"+item.id)}}>
                
                <Grid   border_bottom="1px solid #e9ecef">
                <TextWrap padding="8px" flex_direction="row">
                <Image border_radius="10px"size= {70} shape="logo"/>
                <Grid margin="0px 0px 0px 20px">
                <Text bold>{item.title}</Text>
                <Text>{item.contents}</Text>
                </Grid>
                </TextWrap>

                </Grid>
               
              </Card>
            );
          })}


    </Grid>
  );
};

const ExtraGrid = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 20px 0px;
    border: none;
    background-color: white;
    outline:none;
`;
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

const TextWrap = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.flex_direction === "column" ? "column" : "row"};
    padding:${(props)=>props.padding};
`;

const Text = styled.p`
  font-size: ${(props) => (props.size ? `${props.size}` : "16px")};
  ${(props) => (props.underline ? "text-decoration: underline;" : "")}
  ${(props) => (props.color ? `color: ${props.color};` : "")}
  margin: 4px 0px;
  text-align: left;
`;

const NLInput = styled.input`
  
  outline: none;
  width: ${(props)=>props.width};
  height: ${(props)=>props.height};
  border: none;
  background-color:${(props)=>props.background_color};
  
`;

const AddButton = styled.button`
  position: fixed;
  bottom: 70px;
  right: 300px;
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
