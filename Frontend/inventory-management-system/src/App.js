// App.js
import React from 'react';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import './App.css';
import CreateAcountuserType from './Pages/CreateAcountuserType';
import StudentCreateAccount from './Pages/StudentCreateAccount';
import StaffandLecCreateAccount from './Pages/StaffandLecCreateAccount';
import StoreKeeperCreateAccount from './Pages/StoreKeeperCreateAccount';
import SuplierCreateAccount from './Pages/SuplierCreateAccount';

const App = () => {
  return (
    <div className="App1">
      

      {/* <CreateAcountuserType/> */}

      {/* <StudentCreateAccount/> */}
      {/* <StaffandLecCreateAccount/> */}
      {/* <StoreKeeperCreateAccount/> */}
      <SuplierCreateAccount/>

    </div>
  );
};

export default App;
