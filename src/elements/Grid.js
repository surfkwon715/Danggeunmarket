import React from 'react';
import styled from "styled-components";


// 여백을 Grid를 통해서 잡아두면 편하다 쉽게 구성요소들을 원하는대로 사용하는 것...?

const Grid =(props)=>{
    //prop로 설정해준 값을 가져와야한다
    const {is_flex,width,margin,padding,bg,children,center,border_bottom} = props;
    //styles 변수 생성
    const styles = {
        is_flex: is_flex,
        width: width,
        margin: margin,
        padding: padding,
        bg:bg,
        center:center,
        border_bottom:border_bottom
    }
    
    //원래 props라고 써야하는 부분을 styles 변수를 만들어서 객체형으로 전달해준다
    return (<React.Fragment>
        <GridBox {...styles}>             
            {children}
        </GridBox>
    </React.Fragment>);
}
// 기본으로 들어오는 props값
Grid.defaultProps={
    children: null,
    is_flex: false,
    width: "100%",
    padding: false,
    margin: false,
    bg: false,
    center: false,
    border_bottom: false,

}
// Grid Box 컴포넌트 + props에서 데이터 받아오는 형식(있을 수도 있고 없을 수도 있는 것 표현) 
const GridBox = styled.div`           
    width: ${(props)=> props.width},
    height: 100%;
    box-sizing: border-box;
    ${(props)=> (props.padding? `padding: ${props.padding};`: '')}   
    ${(props)=> (props.margin? `margin: ${props.margin};`: '')}
    ${(props)=> (props.bg? `bg: ${props.bg};`: '')}
    ${(props)=> (props.is_flex? `display: flex; align-items: center; justify-content: space-between;`: '')}
    ${(props)=> (props.center? `text-align:center;`: '')}
    ${(props)=> (props.border_bottom? `border-bottom: ${props.border_bottom};`: '')}
`; //선굵기까지 width에 전부 포함한다 //CSS 안에서 변수선언 시 $를 사용한다 + 스타일드 컴포넌트 내에서 props 사용하려면 arrow func써야한다
                      
export default Grid;