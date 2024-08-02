// App.js
import React from 'react';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import ReturnForm from './Pages/returnForm';
import './App.css';
import Login from './Pages/Login';
import { FaRoute } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Password_Confirm from './Pages/Password_Confirm';
import ApproveRequest from './Components/Approve_Request';

const App = () => {
  return (
    <div className="App a">
      <div className="container c">
        <Sidebar />
        <div className="main-content m">
          <Navbar />
          <div className="content cc">
        
            <ApproveRequest />
            
            
          </div>
        </div>
      </div>


      
    </div>
  );
};

export default App;
