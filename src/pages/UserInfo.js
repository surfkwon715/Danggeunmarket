import React, {useState} from 'react';
import styled from 'styled-components';
import { Grid, Text, Image, Button } from '../elements';
import { FaRegHeart } from 'react-icons/fa';
import { GoComment } from 'react-icons/go';










const UserInfo = (props) => {
  const [fileUrl, setFileUrl] = useState(null);

  const processImage = (event) => {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setFileUrl(imageUrl);
  };
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
              <input type="file" id="input-file" accept="image/*" onChange={processImage} style={{ display: "none" }} />
            </form>
          </UploadGrid>

          <InfoGrid>
            <Text margin="20px 20px" padding="10px" bold>
              이름
            </Text>
            <input type="text" style={{ width: "250px", marginBottom: "20px" }} />

            <Text margin="10px 0" bold>
              이메일
            </Text>
            <input type="email" style={{ width: "250px" }} />
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