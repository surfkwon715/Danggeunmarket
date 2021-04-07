import React from 'react';
import { Grid, Text, Image } from '../elements';
import { FaRegHeart } from 'react-icons/fa';
import { GoComment } from 'react-icons/go';



const UserInfo = (props) => {
    return (
      <React.Fragment>
        <Grid>
          <Grid is_flex>
            <Image shape="circle" margin="10px" />
            <Grid>
              <Text size="15px" bold>
                Cheryl
              </Text>
              <Text size="11px" color="#868e96">
                #0
              </Text>
            </Grid>
          </Grid>

          <Grid margin="20px">
            <Text>매너온도 </Text>
          </Grid>

          <Grid is_flex>
            <FaRegHeart />
            <Grid is_flex margin="0px 10px">
              <Text>재거래희망률 -%</Text>
              <Text>표시될 만큼 충분히 대화하지 않았어요</Text>
            </Grid>
          </Grid>
          <Grid>
            <GoComment />
            <Text>응답률 -%</Text>
            <Text>표시될 만큼 충분히 대화하지 않았어요</Text>
          </Grid>

          <Grid bg="#eeeeee">
            <Text>방화동 4회 인증</Text>
            <Text>2021년 04월 2일 가입 (최근 3일 이내 활동)</Text>
          </Grid>
          <Grid>
            <Text>활동 배지 1개</Text>
          </Grid>
          <Grid>
            <Text>판매상품 0개</Text>
          </Grid>
          <Grid>
            <Text>동네생활</Text>
          </Grid>
          <Grid>
            <Text>받은 매너 평가</Text>
          </Grid>
        </Grid>
      </React.Fragment>
    );
}


export default UserInfo;