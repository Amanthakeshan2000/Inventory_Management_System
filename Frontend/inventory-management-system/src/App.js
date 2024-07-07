import React from 'react';
import Sidebar from './Components/Sidebar';
import '../src/Css/app.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        {/* Your main content goes here */}
      </div>
    </div>
  );
}

export default App;