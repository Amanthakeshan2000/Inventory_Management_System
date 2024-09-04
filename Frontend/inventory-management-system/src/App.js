// App.js
import React from 'react';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import ReturnForm from './Pages/returnForm';
import './App.css';
import RequestPage1 from './Pages/RequestPage1'

const App = () => {
  return (
    <div className="App a">
      <div className="container c">
        <Sidebar />
        <div className="main-content m">
          <Navbar />
          <div className="content cc">
        
            {/* <ReturnForm /> */}
            <RequestPage1/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
