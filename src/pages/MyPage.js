import React from 'react';
import styled from 'styled-components';
import { Grid, Text, Image, Button } from '../elements';
import { FiSettings, FiCrosshair, FiTag, FiGrid, FiBookOpen, FiHome } from "react-icons/fi";
import { FaRegNewspaper, FaShoppingBag, FaHeart, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { BiCommentDetail, BiBuildings, BiLocationPlus, BiChat } from "react-icons/bi";
import UserInfo from './UserInfo';



const MyPage = (props) => {

    return (
      <React.Fragment>
        <Grid width="50%" margin="0px auto">
          <Grid is_flex margin="20px 0px">
            <Text size="20px" bold>
              나의 당근
            </Text>
            <FiSettings size="20" />
          </Grid>

          <Grid is_flex>
            <Image shape="circle" margin="10px" />
            <Grid>
              <Text size="15px" bold>
                Cheryl
              </Text>
              <Text size="11px" color="#868e96">
                방화동 #0
              </Text>
            </Grid>
          </Grid>

          <ExtraGrid>
            <Button onClick={UserInfo}width="90%" margin="10px auto">
              프로필 보기
            </Button>
          </ExtraGrid>

          <Grid is_flex padding="10px" border_bottom="3px solid #eeeeee">
            <ExtraGrid>
              <Button border="none">
                <FaRegNewspaper />
                <Text size="13px" margin="10px 0px">
                  판매내역
                </Text>
              </Button>
            </ExtraGrid>

            <ExtraGrid>
              <Button border="none">
                <FaShoppingBag />
                <Text size="13px" margin="10px 0px">
                  구매내역
                </Text>
              </Button>
            </ExtraGrid>

            <ExtraGrid>
              <Button border="none">
                <FaHeart />
                <Text size="13px" margin="10px 0px">
                  관심목록
                </Text>
              </Button>
            </ExtraGrid>
          </Grid>

          <Grid>
            <Grid is_flex padding="20px">
              <FaMapMarkerAlt />
              <Grid is_flex margin="0px 20px">
                <Text>내 동네 설정</Text>
              </Grid>
            </Grid>
            <Grid is_flex padding="20px">
              <FiCrosshair />
              <Grid is_flex margin="0px 20px">
                <Text>동네 인증하기</Text>
              </Grid>
            </Grid>
            <Grid is_flex padding="20px">
              <FiTag />
              <Grid is_flex margin="0px 20px">
                <Text>키워드 알림</Text>
              </Grid>
            </Grid>
            <Grid is_flex padding="20px" border_bottom="3px solid #eeeeee">
              <FiGrid />
              <Grid is_flex margin="0px 20px">
                <Text>모아보기</Text>
              </Grid>
            </Grid>
            <Grid is_flex padding="20px">
              <FiBookOpen />
              <Grid is_flex margin="0px 20px">
                <Text>동네생활 글</Text>
              </Grid>
            </Grid>
            <Grid is_flex padding="20px">
              <BiCommentDetail />
              <Grid is_flex margin="0px 20px">
                <Text>동네생활 댓글</Text>
              </Grid>
            </Grid>
          </Grid>

          <Grid is_flex margin="20px 0px" border_top="2px solid #eeeeee">
            <ExtraGrid>
              <Button border="none">
                <FiHome />
                <Text margin="10px" size="12px">
                  홈
                </Text>
              </Button>
            </ExtraGrid>
            <ExtraGrid>
              <BiBuildings />
              <Text margin="10px" size="12px">
                동네생활
              </Text>
            </ExtraGrid>
            <ExtraGrid>
              <BiLocationPlus />
              <Text margin="10px" size="12px">
                내 근처
              </Text>
            </ExtraGrid>
            <ExtraGrid>
              <BiChat />
              <Text margin="10px" size="12px">
                채팅
              </Text>
            </ExtraGrid>
            <ExtraGrid>
              <FaUser />
              <Text margin="10px" size="12px">
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
    padding: 20px 20px 0px;
`;


export default MyPage;