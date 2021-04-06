import React from "react";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Text from "../elements/Text";
import styled from "styled-components";

const Post =(props)=> {

    // console.log(props);  defaultProps 확인가능
    

    //props.is_me가 있으면 Button 보여주기
    return( 
        <React.Fragment>
            
            <Grid center padding="12px auto" width="50px" margin="20px 20.5px"  border_bottom="1px solid #e9ecef" >
                헤더부분
            </Grid>
            <Container width="400px" height="120vw">
            <ItemImage padding="10px" border_radius="20px" width="400px" height="50vw" display="flex" src="https://images.unsplash.com/photo-1593643946890-b5b85ade6451?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1529&q=80"/>
            
            <Grid is_flex border_bottom="1px solid #e9ecef" >
            <TextWrap flex_direction="">
            <Image size={40} margin="8px 4px 8px 4px" />

            <TextWrap padding="8px" flex_direction="column">
            <Text left bold color="black" size="15px">아랑전설</Text>
            <Text left color="grey" size="1px">서초구 반포1동</Text>
            </TextWrap>
            </TextWrap>
            <Text color="grey" size="1px">매너온도</Text>
            </Grid>
            <p><Text left bold size="18px">스토케 트리트랩 화이트워시/블랙 2종</Text></p>
            <p><Text left size="1px" color="grey">가구/인테리어 14시간전</Text></p>
            <p><Text left bold size="8px">15,000원</Text></p>
            <p><Text left size="8px">스토케 트리트랩 화이트워시/블랙 2종류 판매해요.</Text></p>

            
            

           
            </Container>


        </React.Fragment>
    )
}

const Container= styled.div`
    width: ${(props)=>props.width};
    height:${(props)=>props.height};
    background-color: white;
    color: #ffffff;
    padding:${(props)=>props.padding};
    box-sizing: border-box;
    border: none;
    text-align: center;
    
    margin: auto;
    ${(props)=>(props.margin? `margin:${props.margin};`:'')}
`;

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