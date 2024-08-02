import React from 'react';
import Select from 'react-select';

const CustomSelect = ({ label, options, placeholder }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      {label && <label style={{ display: 'block', marginBottom: '8px', fontSize: '16px', color: '#333', fontFamily: 'Montserrat, sans-serif' }}>{label}</label>}
      <Select 
        options={options}
        placeholder={placeholder}
        styles={{
          control: (base) => ({
            ...base,
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '14px',
          }),
        }}
      />
    </div>
  );
};

export default CustomSelect;
