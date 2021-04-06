
import React from 'react'
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';

import Signup from './pages/Signup';
import Post from './components/Post';
import PostList from './pages/PostList';
import Write from './pages/Write';



function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/post" exact component={Post} />
        <Route path="/postlist" exact component={PostList} />
        <Route path="/write" exact component={Write} />
      </BrowserRouter>
    </React.Fragment>

  );
}

export default App;
