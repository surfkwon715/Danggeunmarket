import styled from 'styled-components';
import React from 'react';

const Image = (props)=>{
    //props에서 이건 받아와야한다
    const {shape, src,size } =props;
    //똑같이 styles로 받아주고 밑에서 ...styles로 가져온다
    const styles ={
        src:src,
        size:size,
    }

    if(shape==="circle"){
        return (
            <ImageCircle {...styles}></ImageCircle>
        )
    }

    if(shape==="logo"){
        return (
            <ImageLogo {...styles}></ImageLogo>
        )
    }

    if(shape==="rectangle"){
        return (
            <AspectOutter>
                <AspectInner {...styles}></AspectInner>
            </AspectOutter>
        )
    }

    return(
        <React.Fragment>

        </React.Fragment>
    )
}
//모양 이미지 경로
Image.defaultProps = {
    shape: "circle",
    src: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    size: 36,
}


//prop로 사이즈 가져오고 + 원을 만들어주는 것 --size를 선언하면 그리기 편하다
// 공통적인 부분이 아니라 개별적으로 약간의 다른 점이 있다면 적용해준다
const ImageCircle = styled.div`
 --size: ${(props)=>props.size}px;
 width: var(--size);
 height: var(--size);
 border-radius: var(--size);

 background-image: url("${(props)=>props.src}");
 background-size: cover;
 margin: 4px;
`;

const ImageLogo = styled.div`
 --size: ${(props)=>props.size}px;
 width: var(--size);
 height: var(--size);
 
 background-image: url("${(props)=>props.src}");
 background-size: cover;
 
`;



//반응형 사각형 만든는법!! 두가지 사용!!
const AspectOutter = styled.div`
 width: 100%;
 min-width: 250px;
`;

//넓이의 4:3으로 해주기 위해 75% 그러면 사진이 짤린다
const AspectInner = styled.div`
 position: relative;
 padding-top: 75%; 
 overflow: hidden;
 background-image: url("${(props)=>props.src}");
 background-size: cover;
`;



export default Image;