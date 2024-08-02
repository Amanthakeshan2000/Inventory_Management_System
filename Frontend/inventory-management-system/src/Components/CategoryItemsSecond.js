import React from 'react';
import CustomSelect from './CustomSelect';
import '../Css/RequestForm.css';

const CategoryItems = () => {
  const categoryOptions = [
    { value: 'electric', label: 'Electric' },
    { value: 'furniture', label: 'Furniture' },

  ];

  const itemOptions = [
    { value: 'led_tv', label: 'LED TV' },
    { value: 'projector', label: 'Projector' },
  
  ];

  return (
    <div className="category-items ">
       <div className="row">
       <div className="form-group col-md-6">
        <CustomSelect label="Select Category" options={categoryOptions} placeholder="Choose a category" />
      </div> <br/>
      <div className="form-group col-md-6">
        <CustomSelect label="Select Items" options={itemOptions} placeholder="Choose an item" />
      </div>
       </div>
       
       <button className="search-btn" style={{ outline: 'none', marginTop: '-10px', padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px' }}>
    Search
</button>   
 </div>
  );
};

export default CategoryItems;
