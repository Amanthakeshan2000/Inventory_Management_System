// Navbar.js
import React from 'react';
import '../Css/Navbar.css';
import profilePic from '../Assets/Active.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        {/* Add any additional items on the left side if needed */}
      </div>
      <div className="navbar-right">
        <div className="user-info">
          <span className="user-name">Amantha Keshan</span>
          <span className="user-role">Student</span>
        </div>
        <img src={profilePic} alt="Profile" className="profile-pic" />
      </div>
    </div>
  );
};

export default Navbar;
