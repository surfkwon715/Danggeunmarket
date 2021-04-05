import React from "react";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Text from "../elements/Text";

const Post =(props)=> {

    // console.log(props);  defaultProps 확인가능
    

    //props.is_me가 있으면 Button 보여주기
    return( 
        <React.Fragment>
            <Grid padding="32px 0" width="677px" margin="0 auto" border_bottom="1px solid #e9ecef" bg="black">
                안녕하세요
            </Grid>
        </React.Fragment>
    )
}

export default Post;