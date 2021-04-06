import React from 'react'
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';

import Signup from './pages/Signup';
import Post from './components/Post';

import PostList from './pages/PostList';
import Write from './pages/Write';


import MyPage from './pages/MyPage';
import SellRecord from "./pages/SellRecord";
import BuyRecord from "./pages/BuyRecord";



function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/post/:id" exact component={Post} />

        <Route path="/postlist" exact component={PostList} />
        <Route path="/write" exact component={Write} />

        <Route path="/mypage" exact component={MyPage} />
      
        {/* 판매내역 */}
        <Route path="/sellrecord" exact component={SellRecord} />
        
        {/* 구매내역 */}
        <Route path="/buyrecord" exact component={BuyRecord} />

      </BrowserRouter>
    </React.Fragment>

  );
}

export default App;
