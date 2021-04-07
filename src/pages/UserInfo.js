import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { Grid, Text, Image, Button } from '../elements';
import { actionCreators as userActions } from '../redux/modules/user';



const UserInfo = (props) => {
  const dispatch = useDispatch();

  const username_ref = useRef(null);
  const email_ref = useRef(null);


  const [fileUrl, setFileUrl] = useState(null);

  const defaultImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfgsIDOVs6jg4E6rK-7CeBUM5N8Z95pZfh_g&usqp=CAU";

  if (!fileUrl) {
    //프로필 기본이미지로
    console.log("이미지??");
    setFileUrl(defaultImg);
    return;
  }

  const processImage = (e) => {
    //업로드를 클릭해서 선택한 파일
    const imageFile = e.target.files[0];
    console.log(imageFile);

    //그 파일의 이미지 url
    const imageUrl = URL.createObjectURL(imageFile);
    console.log(imageUrl);

    //이미지 url을 fileUrl에 지정
    setFileUrl(imageUrl);

    //fileUrl을 dispatch로 리덕스에 보냄
    dispatch(userActions.InfoImageAX(fileUrl));
  }

    return (
      <React.Fragment>
        <Grid width="50%" margin="10px auto">
          <ImgGrid>
            <Image src={fileUrl} shape="circle" size="120" />
          </ImgGrid>
          <UploadGrid>
            <Text margin="10px 20px" bold>
              프로필 사진 바꾸기
            </Text>
            <form action="/home/uploadfiles" method="post" enctype="multipart/form-data">
              <label
                className="input-file-button"
                for="input-file"
                style={{
                  fontSize: "13px",
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  borderRadius: "20px",
                  padding: "8px 16px",
                  cursor: "pointer",
                }}
              >
                업로드
              </label>
              <input type="file" id="input-file" accept="image/*"
                onChange={processImage} style={{ display: "none" }} />
            </form>
          </UploadGrid>

          <InfoGrid>
            <Text margin="20px 20px" padding="10px" bold>
              이름
            </Text>
            <input type="text" ref={username_ref} style={{ width: "250px", marginBottom: "20px" }} />

            <Text margin="10px 0" bold>
              이메일
            </Text>
            <input type="email" ref={email_ref} style={{ width: "250px" }} />
          </InfoGrid>

          <Grid width="150px" margin="50px auto">
            <Button>수정완료</Button>
          </Grid>

        </Grid>
      </React.Fragment>
    );
}


const ImgGrid = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const UploadGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;


export default UserInfo;