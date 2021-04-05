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
  );
}

export default App;
