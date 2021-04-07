import React from "react";
import styled from "styled-components";


const Button = (props)=>{

    const { text, _onClick, is_float, children, margin, width, border, padding} = props;

        <React.Fragment>
            <FloatButton onClick={_onClick}>{text? text: children}</FloatButton>
        </React.Fragment>
    
    const styles={
        margin: margin,
        width: width,
        border: border,
        padding: padding,
    };
    
    return(
        <ElButton {...styles} onClick={_onClick}>{text? text: children}</ElButton>         // 로그인 js에서  _onClick={()=>{console.log("로그인 했어!");}} 이 값을 props로 내려주면 클릭하면 이 함수 실행되도록 했다
    )
}

Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  is_float: false,
  margin: false,
  width: "100%",
    border: "1px solid #adb5bd",
  cursor: 'pointer',
};


Button.defaultProps={
    text: false,
    children: null,
    _onClick:()=>{},
    is_float: false,
    margin: false,
    width: "100%",
    padding: "12px 0px",
}

const ElButton = styled.button`
    width: ${(props)=>props.width};
    background-color:  #212121;
    color: #ffffff;
    padding:${(props)=>props.padding};
    box-sizing: border-box;
    border: none;
    border-radius: 100px;
    ${(props)=>(props.margin? `margin:${props.margin};`:'')}
`;

const FloatButton = styled.button`
    width: 50px;

    heights: 50px;
    background-color: #212121;
    color: #ffffff;

    box-sizing: border-box;
    font-size: 36px;
    font-weight: 800;
    position: fixed;
    bottom: 50px;
    right: 16px;
    text-align: center;

    border: none;
    border-radius: 50px;
    vertical-align: middle;
`;

export default Button;

