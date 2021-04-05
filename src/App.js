<<<<<<< HEAD
import './App.css';
import Post from '../components/Post';

function App() {
  return (
    <Route path="/post" exact component={Post}/> 
=======
import React from 'react'
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/" exact component={Login} />
      </BrowserRouter>
    </React.Fragment>
>>>>>>> cf6c2045900206b1e1a2906887c553fc386277cd
  );
}

export default App;
