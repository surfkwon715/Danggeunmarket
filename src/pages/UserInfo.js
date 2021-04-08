import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { Grid, Text, Image, Button } from '../elements';
import { actionCreators as userActions } from '../redux/modules/user';
import { CheckUserName,  InfoImageAX } from "../redux/modules/user";




const UserInfo = (props) => {
  const dispatch = useDispatch();

  const username_ref = useRef("yena");
  const email_ref = useRef("yena77@naver.com");
  const image_ref = useRef("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGHWytpUDq5jaDNTJYRvqPAhWmnZtb5TKBiw&usqp=CAU");



  
const InfoAX = () => {

const form = new FormData();
form.append("username", username_ref.current.value);
form.append("email", email_ref.current.value);
form.append("image", image_ref.current.files[0]);

    fetch("/info", {
      method: "POST",
      headers: {
        "content-type": "multipart/form-data",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: form,
    })
      .then((res) => console.log("프로필 수정!!"))
      .catch((e) => {
        console.log(e);
      });
    props.history.push("/postlist");
};


  
  
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

    // //fileUrl을 dispatch로 리덕스에 보냄
    // dispatch(userActions.InfoImageAX(fileUrl));
  }

    return (
      <React.Fragment>
        <Grid width="50%" margin="10px auto">
          <ImgGrid>
            <Image src={fileUrl} shape="circle" size="120" />
          </ImgGrid>
          <UploadGrid>
            <Text size="13px" margin="10px 20px" bold>
              프로필 사진 바꾸기
            </Text>
            <form action="/home/uploadfiles" method="post" enctype="multipart/form-data">
              <label
                className="input-file-button"
                for="input-file"
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  backgroundColor: "white",
                  color: "#495057",
                  border: "2px solid #e67700",
                  borderRadius: "20px",
                  padding: "8px 16px",
                  cursor: "pointer",
                }}
              >
                업로드
              </label>
              <input type="file" id="input-file" ref={image_ref} accept="image/*" onChange={processImage} style={{ display: "none" }} />
            </form>
          </UploadGrid>

          <InfoGrid>
            <Text size="13px" margin="10px 20px" padding="10px" bold>
              이름
            </Text>
            <input type="text" ref={username_ref} style={{ width: "250px", marginBottom: "20px" }} />

            <Text size="13px" margin="10px 0" bold>
              이메일
            </Text>
            <input type="email" ref={email_ref} style={{ width: "250px" }} />

            <div style={{ margin: "50px 20px 0" }}>
              <ButtonStyle
                style={{ cursor: "pointer" }}
                onClick={() => {
                  InfoAX();
                  alert("프로필 수정이 완료되었습니다!");
                  props.history.push('/mypage');
                }}
              >
                수정완료
              </ButtonStyle>
            </div>
          </InfoGrid>
        </Grid>
      </React.Fragment>
    );
  
}




const ButtonStyle = styled.button`
  width: 250px;
  font-size: 12px;
  color: #f8f9fa;
  padding: 8px 20px;
  margin: 5px auto 0px;
  background-color: #e67700;
  border: 1px solid #dee2e6;
  cursor: pointer;
  font-weight: bold;
`;






const ImgGrid = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const UploadGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 30px;
`;

const InfoGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;


export default UserInfo;