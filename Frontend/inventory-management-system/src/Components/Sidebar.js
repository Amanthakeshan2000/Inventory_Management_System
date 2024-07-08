import React, { useState } from 'react';
import { FaBars, FaClipboardList, FaCalendarAlt, FaUsers, FaBuilding, FaUser, FaUndo } from 'react-icons/fa';
import '../Css/Sidebar.css';
import logo from '../Assets/Logo.png';
import '../Css/bootstrap.css';

const Sidebar = () => {
  const [isRequestOpen, setIsRequestOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar initially hidden

  const toggleRequestMenu = () => {
    setIsRequestOpen(!isRequestOpen);
    setIsEventsOpen(false); // Close events menu when request menu is toggled
  };

  const toggleEventsMenu = () => {
    setIsEventsOpen(!isEventsOpen);
    setIsRequestOpen(false); // Close request menu when events menu is toggled
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* <div className="menuIcon" onClick={toggleSidebar}>
        <FaBars />
      </div> */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="logo">
          <img src={logo} alt="NSBM Inventory Management System" />
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
          <div className="menuItem">
            <FaUndo className="icon" />
            <span>Return</span>
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
    </div>
  );
};

export default Sidebar;
