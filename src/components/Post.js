import React from "react";
import Grid from "../elements/Grid";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Text from "../elements/Text";
import styled from "styled-components";

import axios from "axios";
import {useState} from 'react'



const Post =(props)=> {

    const initialState=[
      
      ]
    
      const [ResData, setData] = useState(initialState);
      const Load =()=>{
        axios(
          {
            method: 'get',
            headers: {
             
              'Authorization': 'Bearer' + localStorage.getItem("jwt"),
            },
            url:"http://15.165.77.77:8080/api/boards",
            data:{
            },
          })
          .then((response)=>{
           
            setData(response.data);
          }).catch(error=>{
            console.log(error);
          })
        }

      React.useEffect(()=>{Load()
      },[])
      console.log(ResData)
      const myid= props.match.params.id
      console.log(myid)

      const data = ResData.filter((item)=>{return item.id === parseInt(myid)})
      console.log(data)


    return( 

      <Grid width="50%" margin="0px auto">
      
          <Grid>
          <Grid>
          <Button width="100px" onClick={()=>{props.history.push("/postlist")}}>뒤로가기</Button>
          </Grid>

          <ItemImage padding="10px" border_radius="20px" width="400px" height="50vw" display="flex" src={data[0]?.imgFilePath}/>
          
          <Grid is_flex border_bottom="1px solid #e9ecef" >
          <TextWrap flex_direction="">
          <Image size={40} margin="8px 4px 8px 4px" />

          <TextWrap padding="8px" flex_direction="column">
          <Text left bold color="black" size="15px">{data[0]?.username}</Text>
          <Text left color="grey" size="1px">사당동</Text>
          </TextWrap>
          </TextWrap>
          <Text color="grey" size="1px">매너온도</Text>
          </Grid>

          <p><Text left bold size="18px">{data[0]?.title}</Text></p>
          <p><Text left size="1px" color="grey">가구/인테리어 14시간전</Text></p>
          <p><Text left bold size="8px">{data[0]?.price}</Text></p>
          <p><Text left size="8px">{data[0]?.contents}</Text></p>
          </Grid>
          
     
       </Grid>
    )
}

const ItemImage= styled.img`
    width: ${(props)=>props.width};
    height:${(props)=>props.height};
    
    padding:${(props)=>props.padding};
    
    ${(props)=> (props.is_flex? `display: flex; align-items: center;`: '')}
    ${(props)=>(props.margin? `margin:${props.margin};`:'')}
    ${(props)=> (props.border_radius? `border-radius: ${props.border_radius};`: '')} 
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.flex_direction === "column" ? "column" : "row"};
    padding:${(props)=>props.padding};
`;


export default Post;