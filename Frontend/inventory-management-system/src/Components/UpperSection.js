import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/UpperSection.css'; // Import your styles

const UpperSection = ({ activePage }) => {
  return (
    <div className="upper-section">
      <Link to="/add-supplier">
        <button className={`heading-button ${activePage === 'add-supplier' ? 'active' : ''}`}>
          Add Supplier
        </button>
      </Link>
      <Link to="/view-suppliers">
        <button className={`heading-button ${activePage === 'view-suppliers' ? 'active' : ''}`}>
          View Suppliers
        </button>
      </Link>
    </div>
  );
};

export default UpperSection;
