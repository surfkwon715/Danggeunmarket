import { React, useState } from "react";

import axios from "axios";

import Login from './pages/Login';


const LoginService = (props) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const Load = () => {
    axios({
      method: "post",
      url: "http://15.165.77.77:8080/api/login",
      data: {
        username: username.current.value,
        password: password.current.value,
        },
    })
      .then((response) => {
        setUsername(response.data.title);
        setPassword(response.data.contents);
        
        console.log(username, password);
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
      {username}
      {password}
    </React.Fragment>
  );
};
export default LoginService;
