import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { getItemListSV } from "../redux/modules/item";
import Image from "../elements/Image";
import { FiHome,FiSearch,FiUser} from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { BiBuildings, BiLocationPlus, BiChat,BiBell } from "react-icons/bi";
import { GoSettings } from "react-icons/go";
import Grid from "../elements/Grid";
import axios from "axios";
import {useState} from 'react'




const PostList = (props) => {
  
  const initialState=[
    {id:1, title:"귀염", contents:"뽀짝이"}
  ]

  const [ResData, setData] = useState(initialState);
  const Load =()=>{
    axios(
      {
        method: 'get',
        url:"http://15.165.77.77:8080/api/boards",
        data:{
        },
      })
      .then((response)=>{
        console.log(response.data)
        setData(response.data);
      }).catch(error=>{
        console.log(error);
      })
    }

  React.useEffect(()=>{Load()
  },[])
  
  console.log(ResData)

  

  return (
    
   
    <Grid width="50%" margin="0px auto">
       <TextWrap padding="8px" flex_direction="row">
       <ExtraGrid onClick={()=>{props.history.push("/search")}}>
        <FiSearch />
        </ExtraGrid>
        
        <ExtraGrid>
        <GoSettings />
        </ExtraGrid>

        <ExtraGrid>
        <BiBell />
        </ExtraGrid>
      
      </TextWrap>
    
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



        <Grid is_flex margin="20px 0px" border_top="2px solid #eeeeee">
          
          <ExtraGrid padding= "20px 20px 0px">
            <FaHome />
            <Text margin="10px" size="12px">
              홈
            </Text>
          </ExtraGrid>

          <ExtraGrid padding= "20px 20px 0px">
            <BiBuildings />
            <Text margin="10px" size="12px">
              동네생활
            </Text>
          </ExtraGrid>
          
          <ExtraGrid padding= "20px 20px 0px">
            <BiLocationPlus />
            <Text margin="10px" size="12px">
              내 근처
            </Text>
          </ExtraGrid>
          
          <ExtraGrid padding= "20px 20px 0px">
            <BiChat />
            <Text margin="10px" size="12px">
              채팅
            </Text>
          </ExtraGrid>
          
        <ExtraGrid onClick={() => {
          
          props.history.push("/mypage"
          
          )
        }} padding="20px 20px 0px">
            <FiUser />
            <Text margin="10px" size="12px">
              나의 당근
            </Text>
          </ExtraGrid>
         
        </Grid>
      
      <AddButton onClick={() => {props.history.push("/write")}}> + </AddButton>
  </Grid>
 
  );
};

const ExtraGrid = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    border: none;
    background-color: white;
    padding:${(props)=>props.padding};
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
