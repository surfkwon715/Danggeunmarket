import React from 'react'
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';

import Signup from './pages/Signup';
import Post from './components/Post';
import MyPage from './pages/MyPage';
import UserInfo from "./pages/UserInfo";

import SellRecord from "./pages/SellRecord";
import BuyRecord from "./pages/BuyRecord";
import ConcernList from "./pages/ConcernList";



function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/post" exact component={Post} />
        <Route path="/mypage" exact component={MyPage} />
        <Route path="/info" exact component={UserInfo} />

        {/* 판매내역 */}
        <Route path="/sellrecord" exact component={SellRecord} />

        {/* 구매내역 */}
        <Route path="/buyrecord" exact component={BuyRecord} />

        {/* 관심목록 */}
        <Route path="/concernlist" exact component={ConcernList} />

      </BrowserRouter>
    </React.Fragment>

  );
}

export default App;
