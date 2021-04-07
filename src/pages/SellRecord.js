import React from 'react';
import { Grid, Text } from '../elements';
import { SellRecordHeader } from '../components/Header';


const SellRecord = (props) => {


  return (
    <React.Fragment>

      <SellRecordHeader/>
      
      <Grid width="50%" height="100vh" bg="#eeeeee" margin="10px auto">
        <Text color="#adb5bd">판매중인 게시글이 없어요</Text>
      </Grid>

    </React.Fragment>
  );
}





SellRecord.defaultProps = {

}


export default SellRecord;

