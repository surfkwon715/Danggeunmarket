import React from 'react';
import styled from 'styled-components';
import { Grid, Text, Image } from '../elements';
import { FiSettings, FiCrosshair, FiTag, FiGrid, FiBookOpen, FiHome } from "react-icons/fi";
import { FaRegNewspaper, FaShoppingBag, FaHeart, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { BiCommentDetail, BiBuildings, BiLocationPlus, BiChat } from "react-icons/bi";
<<<<<<< HEAD
import { useDispatch } from 'react-redux';
import { LogoutAX } from "../redux/modules/user";
=======
import axios from "axios";
>>>>>>> eabc32e83bfed5b16c19480f100f74de8f9aac1c

import {useState} from 'react'

<<<<<<< HEAD
=======
const MyPage = (props) => {
  
  const initialState=[
      
  ]

  const [user_info, setUser_info] = useState(initialState);
  const Temp =()=>{
    axios(
      {
        method: 'get',
        headers: {
          
          'Authorization': 'Bearer' + localStorage.getItem("jwt"),
        },
        url:"http://15.165.77.77:8080/api/profile",
        data:{
        },
      })
      .then((response)=>{
        
        
        const userinfo = {username :response.data.username, email : response.data.email}
        console.log(userinfo)
        setUser_info(userinfo)
      
      }).catch(error=>{
        console.log(error);
      })
    }              

    console.log(user_info)
    const your_id= props.match.params.username
    console.log(your_id)
    // const your_data = user_info.filter((item)=>{return user_info.username=== your_id})
    
    
    React.useEffect(()=>{Temp()
    },[])
>>>>>>> eabc32e83bfed5b16c19480f100f74de8f9aac1c

const MyPage = (props) => {
  const dispatch = useDispatch();

  const myPageAX = (profile_img, username, email) => {
    return function (dispatch, getState, { history }) {
      fetch("http://15.165.77.77:8080/api/profile", {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer" + localStorage.getItem("jwt"),
        },
      }).then((res) => {
        console.log(res.data);
      });
    };
  }
    return (
      <React.Fragment>
        <Grid width="50%" margin="0px auto">
          <Grid is_flex margin="20px 0px">
            <Text size="20px" bold>
              나의 당근
            </Text>
            <ButtonStyle
              style={{
                width: "70px", margin: "0px", padding: "4px 8px"
              }}
              onClick={() => {
                  localStorage.removeItem("jwt");
                  props.history.replace("/");
            }}>
              <Text size="12px">로그아웃</Text>
            </ButtonStyle>
          </Grid>
           
          <Grid is_flex>
            <Image src={props.profile_img} shape="circle" margin="10px" />
            <Grid>
              <Text size="15px" bold>
<<<<<<< HEAD
                {props.username}
              </Text>
              <Text size="11px" color="#868e96">
                {props.email}
=======
               {user_info.username} 
              </Text>
              <Text size="11px" color="#868e96">
             {user_info.email}
>>>>>>> eabc32e83bfed5b16c19480f100f74de8f9aac1c
              </Text>
            </Grid>
          </Grid>

          <ExtraGrid>
            <ButtonStyle
              onClick={() => {
                props.history.push("/info");
              }}
            >
              <Text color="#000000" bold>
                프로필 수정
              </Text>
            </ButtonStyle>
          </ExtraGrid>

          <Grid is_flex padding="10px 0 0 0" border_bottom="3px solid #eeeeee">
            <ExtraGrid>
              <ButtonStyle
                onClick={() => {
                  props.history.push("/sellrecord");
                }}
                style={{ border: "none" }}
              >
                <div
                  style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "45px",
                    backgroundColor: "#ffe8cc",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FaRegNewspaper size="20px" />
                </div>
                <Text size="11px" margin="10px 0px">
                  판매내역
                </Text>
              </ButtonStyle>
            </ExtraGrid>

            <ExtraGrid>
              <ButtonStyle style={{ border: "none" }}>
                <div
                  style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "45px",
                    backgroundColor: "#ffe8cc",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FaShoppingBag size="20px" />
                </div>

                <Text size="11px" margin="10px 0px">
                  구매내역
                </Text>
              </ButtonStyle>
            </ExtraGrid>

            <ExtraGrid>
              <ButtonStyle style={{ border: "none" }}>
                <div
                  style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "45px",
                    backgroundColor: "#ffe8cc",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FaHeart size="20px" />
                </div>
                <Text size="11px" margin="10px 0px">
                  관심목록
                </Text>
              </ButtonStyle>
            </ExtraGrid>
          </Grid>

          <Grid>
            <Grid is_flex padding="20px">
              <FaMapMarkerAlt />
              <Grid is_flex margin="0px 20px">
                <Text size="13px">내 동네 설정</Text>
              </Grid>
            </Grid>
            <Grid is_flex padding="20px">
              <FiCrosshair />
              <Grid is_flex margin="0px 20px">
                <Text size="13px">동네 인증하기</Text>
              </Grid>
            </Grid>
            <Grid is_flex padding="20px">
              <FiTag />
              <Grid is_flex margin="0px 20px">
                <Text size="13px">키워드 알림</Text>
              </Grid>
            </Grid>
            <Grid is_flex padding="20px" border_bottom="3px solid #eeeeee">
              <FiGrid />
              <Grid is_flex margin="0px 20px">
                <Text size="13px">모아보기</Text>
              </Grid>
            </Grid>
            <Grid is_flex padding="20px">
              <FiBookOpen />
              <Grid is_flex margin="0px 20px">
                <Text size="13px">동네생활 글</Text>
              </Grid>
            </Grid>
            <Grid is_flex padding="20px">
              <BiCommentDetail />
              <Grid is_flex margin="0px 20px">
                <Text size="13px">동네생활 댓글</Text>
              </Grid>
            </Grid>
          </Grid>

          <div style={{ borderBottom: "2px solid #eeeeee" }}></div>

          <Grid is_flex margin="10px 0px">
            <ExtraGrid>
              <ExtraGrid onClick={() => props.history.push("/")} style={{ cursor: "pointer" }}>
                <FiHome />
                <Text margin="10px" size="11px">
                  홈
                </Text>
              </ExtraGrid>
            </ExtraGrid>
            <ExtraGrid>
              <BiBuildings />
              <Text margin="10px" size="11px">
                동네생활
              </Text>
            </ExtraGrid>
            <ExtraGrid>
              <BiLocationPlus />
              <Text margin="10px" size="11px">
                내 근처
              </Text>
            </ExtraGrid>
            <ExtraGrid>
              <BiChat />
              <Text margin="10px" size="11px">
                채팅
              </Text>
            </ExtraGrid>
            <ExtraGrid onClick={() => props.history.push("/mypage")} style={{ cursor: "pointer" }}>
              <FaUser />
              <Text margin="10px" size="11px">
                나의 당근
              </Text>
            </ExtraGrid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
}

const ExtraGrid = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ButtonStyle = styled.button`
  width: 100%;
  font-size: 11px;
  color: #e67700;
  padding: 8px 20px;
  margin: 20px auto 0;
  background-color: #ffffff;
  border: 1px solid #ced4da;
  cursor: pointer;
  font-weight: bold;
`;

export default MyPage;