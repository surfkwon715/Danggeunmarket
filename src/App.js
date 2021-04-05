
import React from 'react'
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';

import Signup from './pages/Signup';
import Post from './components/Post';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/post" exact component={Post} />
      </BrowserRouter>
    </React.Fragment>

  );
}

export default App;
