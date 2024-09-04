// App.js
import React from 'react';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import ReturnForm from './Pages/returnForm';
import './App.css';
<<<<<<< HEAD
import RequestPage1 from './Pages/RequestPage1'
=======
import Login from './Pages/Login';
import { FaRoute } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Password_Confirm from './Pages/Password_Confirm';


>>>>>>> a59bc2265d32287b8dabe2afb74cf3e4a587c6c7

const App = () => {
  return (
    <div className="App a">    
      {/* <div className="container c">
        <Sidebar />
        <div className="main-content m">
          <Navbar />
          <div className="content cc">
        
<<<<<<< HEAD
            {/* <ReturnForm /> */}
            <RequestPage1/>
=======
             
            
>>>>>>> a59bc2265d32287b8dabe2afb74cf3e4a587c6c7
          </div>
        </div>
      </div> */}
      
      <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Password_Confirm" element={<Password_Confirm/>} />
      </Routes>
    </Router>


    </div>
  );
};

export default App;
