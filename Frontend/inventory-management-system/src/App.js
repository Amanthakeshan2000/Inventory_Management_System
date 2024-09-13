// App.js
import React from 'react';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import './App.css';


import HSKapproveReq from './Pages/HSKapproveReq';



const App = () => {
  return (
    <div className="App a">    
      <div className="container c">
        <Sidebar />
        <div className="main-content m">
          <Navbar />
          <div className="content cc">
          {/* <HSKrequestItemForm/> */}
           {/* <Testtestone/>  */}
            <HSKapproveReq/>
          </div>
        </div>
      </div> 
      
      {/* <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Password_Confirm" element={<Password_Confirm/>} />
      </Routes>
    </Router> */}


    </div>
  );
};

export default App;
