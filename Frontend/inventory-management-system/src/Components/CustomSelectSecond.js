import React from 'react';
import Select from 'react-select';
import '../Css/RequestForm.css';

const CustomSelect = ({ label, options, placeholder }) => {
  return (
    <div className="custom-select-container">
      {label && <label className="custom-select-label">{label}</label>}
      <Select 
        className="custom-select"
        options={options}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomSelect;
