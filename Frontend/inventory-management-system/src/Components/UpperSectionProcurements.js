import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/UpperSection.css'; // Import your styles

const UpperSectionProcurements = ({ activePage }) => {
  return (
    <div className="upper-section">
      <Link to="/Procurements">
        <button 
          className={`heading-button ${activePage === 'add-procurement' ? 'active' : ''}`}
        >
          Add Procurement Request
        </button>
      </Link>
      <Link to="/View-Procurements">
        <button 
          className={`heading-button ${activePage === 'view-procurements' ? 'active' : ''}`}
        >
          View Procurement Requests
        </button>
      </Link>
    </div>
  );
};

export default UpperSectionProcurements;
