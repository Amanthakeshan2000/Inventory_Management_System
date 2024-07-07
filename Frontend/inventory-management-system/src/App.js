// App.js
import React from 'react';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <div className="content">
        
              <h1>Your Page Here</h1>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
