// App.js
import React from 'react';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import ReturnForm from './Pages/returnForm';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <div className="content">
        
            <ReturnForm />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
