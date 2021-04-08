import React from 'react';
import { Grid, Text, Button } from '../elements';
import { BiArrowBack } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { onSalesAX } from "../redux/modules/product";


const SellRecordHeader = (props) => {


  const [category, setCategory] = React.useState("판매중");

  const dispatch = useDispatch();

    return (
      <React.Fragment>
        <Grid width="50%" margin="0px auto">
          <Grid is_flex margin="20px 0px">
              <BiArrowBack
                size="30px"
                width="50px"
                onPress={() => props.history.goBack()}
              />
            <Text size="15px" margin="0px" bold>
              판매내역
            </Text>
          </Grid>

          <Grid is_flex>
            <div
              style={{ width: "33.3%", cursor: "pointer", textAlign: "center" }}
              onClick={() => {
                setCategory("판매중");
                dispatch(onSalesAX(category));
              }}
            >
              <Grid border_bottom="2px solid #495057">
                <Text margin="5px" bold>
                  판매중
                </Text>
              </Grid>
            </div>

            <div
              style={{ width: "33.3%", cursor: "pointer", textAlign: "center" }}
              onClick={() => {
                // props.history.push("/onsale");
                setCategory("거래완료");
                //dispatch(onSalesAX());
              }}
            >
              <Grid>
                <Text margin="5px 0 7px 0" color="#adb5bd" bold>
                  거래완료
                </Text>
              </Grid>
            </div>

            <div
              style={{ width: "33.3%", cursor: "pointer", textAlign: "center" }}
              onClick={() => {
                // props.history.push("/onsale");
                setCategory("숨김");
                //dispatch(onSalesAX());
              }}
            >
              <Grid>
                <Text margin="5px 0 7px 0" color="#adb5bd" bold>
                  숨김
                </Text>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </React.Fragment>
    );
}


const BuyRecordHeader = (props) => {
    return (
      <React.Fragment>
        <Grid width="50%" margin="0px auto">
          <Grid is_flex margin="20px 0px">
            <BiArrowBack size="30px" width="50px" />
            <Text size="15px" margin="0px" bold>
              구매내역
            </Text>
          </Grid>
        </Grid>
      </React.Fragment>
    );
};


const ConcernListHeader = (props) => {
    return (
      <React.Fragment>
        <Grid width="50%" margin="0px auto">
          <Grid is_flex margin="20px 0px">
            <BiArrowBack size="30px" width="50px" />
            <Text size="15px" margin="0px" bold>
              관심목록
            </Text>
          </Grid>

          <Grid>
            <Button width="33.3%" border="none">
              <Grid border_bottom="2px solid #495057">
                <Text
                  margin="5px"
                  bold
                  onClick={() => {
                    props.history.push("/onsale");
                  }}
                >
                  중고거래
                </Text>
              </Grid>
            </Button>

            <Button width="33.3%" border="none">
              <Text>동네홍보</Text>
            </Button>

            <Button width="33.3%" border="none">
              <Text>동네생활</Text>
            </Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
};


export { SellRecordHeader, BuyRecordHeader, ConcernListHeader };