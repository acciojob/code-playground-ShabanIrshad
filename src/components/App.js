
import React, { useState } from "react";
import './../styles/App.css';
import Login from "./Login";
import {Link,BrowserRouter, Routes, Route} from 'react-router-dom';
import PlayGround from "./PlayGround";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  const [login,setLogin]=useState(false);
  return (
    <BrowserRouter>
      <div className="main-container">
        {login?'Logged in , Now you can enter Playground.' :'You are not authenticated, Please Login first.'}
        <ul>
          <li><Link to='/playGround'>PlayGround</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>
      </div>
     <Routes>
        <Route path="/playGround" element={<PrivateRoute login={login}>
          <PlayGround/>
        </PrivateRoute>}/>
        <Route path="/login" element={<Login data={{login,setLogin}}/>}/>
        
     </Routes>

    </BrowserRouter>
  )
}

export default App
