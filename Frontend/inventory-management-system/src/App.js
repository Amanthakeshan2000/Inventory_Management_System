// App.js
import React from 'react';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import ReturnForm from './Pages/returnForm';
import './App.css';
import CheckAvailability from './Pages/checkAvailability';
import DashbordOne from './Pages/DashbordOne';
import SupApproveReq from './Pages/SupApproveReq';

const App = () => {
  return (
    <div className="App a">
      <div className="container c">
        <Sidebar />
        <div className="main-content m">
          <Navbar />
          <div className="content cc">
        
          {/* <CheckAvailability/> */}
          {/* <DashbordOne/> */}
          <SupApproveReq/>
        

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
