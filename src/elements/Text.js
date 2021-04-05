import React from "react";
import styled from "styled-components";

//text는 children으로 가져오는 게 깔끔할거 같아서 
const Text = (props)=> {
    const {bold, color, size,children,margin,left} = props;

    const styles={bold:bold,size:size,color:color,margin,left:left}
    return (
        <P {...styles}>
            {children}
        </P>

    )
}

Text.defaultProps={
    bold: false,
    color: '#222831',
    size: '14px',
    margin: false,
    left :false,
}

const P= styled.div`
color: ${(props)=>props.color};
font-size: ${(props)=>props.size};
font-weight: ${(props)=>(props.bold?"600":"400")};
${(props)=>(props.margin?`margin: ${props.margin}`:"")}
${(props)=> (props.left? `text-align:left;`: '')}
`;

export default Text;