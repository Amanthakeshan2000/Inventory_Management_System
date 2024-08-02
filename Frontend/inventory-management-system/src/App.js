import React from 'react';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import './App.css';
import CreateRequestPage from './Pages/CreateRequestPage';
import RequestHistory from './Pages/RequestHistory';

const App = () => {
  return (
    <div className="App a">
      <div className="container c">
        <Sidebar />
        <div className="main-content m">
          <Navbar />
          <div className="content cc">
              
            <CreateRequestPage />
              <RequestHistory/>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;