// App.js
import React from 'react';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import './App.css';
import CreateRequestPage from './Pages/CreateRequestPage';


const App = () => {
  return (
    <div className="App a">
      <div className="container c">
        <Sidebar />
        <div className="main-content m">
          <Navbar />
          <div className="content cc">
        
       {/* <RequestPage/> */}
            <CreateRequestPage />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
