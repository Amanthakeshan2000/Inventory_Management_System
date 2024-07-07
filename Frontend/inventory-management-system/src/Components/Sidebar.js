// Sidebar.js
import React, { useState } from 'react';
import { FaBars, FaClipboardList, FaCalendarAlt, FaUsers, FaBuilding, FaUser } from 'react-icons/fa';
import '../Css/Sidebar.css';
import '../Assets/Logo.png';

const Sidebar = () => {
  const [isRequestOpen, setIsRequestOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);

  const toggleRequestMenu = () => {
    setIsRequestOpen(!isRequestOpen);
  };

  const toggleEventsMenu = () => {
    setIsEventsOpen(!isEventsOpen);
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <img src="../Assets/Logo.png" alt="NSBM Inventory Management System" />
      </div>
      <div className="menu">
        <div className="menuItem">
          <FaBars className="icon" />
          <span>Dashboard</span>
        </div>
        <div className="menuItem" onClick={toggleRequestMenu}>
          <FaClipboardList className="icon" />
          <span>Request</span>
        </div>
        <div className={`submenu ${isRequestOpen ? 'open' : ''}`}>
          <span>Create Request</span>
          <span>Request History</span>
        </div>
        <div className="menuItem" onClick={toggleEventsMenu}>
          <FaCalendarAlt className="icon" />
          <span>Events</span>
        </div>
        <div className={`submenu ${isEventsOpen ? 'open' : ''}`}>
          <span>Active Events</span>
        </div>
        <div className="menuItem">
          <FaUsers className="icon" />
          <span>Teams</span>
        </div>
        <div className="menuItem">
          <FaBuilding className="icon" />
          <span>Workplaces</span>
        </div>
        <div className="menuItem">
          <FaUser className="icon" />
          <span>Employees</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
