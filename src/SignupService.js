import { React, useState } from "react";

import axios from "axios";

const SignupService = (props) => {
  const [title, setTitle] = useState(null);
  const [contents, setContents] = useState(null);

  const Load = () => {
    axios({
      method: "get",
      url: "http://15.165.77.77:8080/api/signup",
      data: {},
    })
      .then((response) => {
        setTitle(response.data.title);
        setContents(response.data.contents);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  React.useEffect(() => {
    Load();
  }, []);
  return (
    <React.Fragment>
      image
      {title}
      {contents}
    </React.Fragment>
  );
};
export default SignupService;
