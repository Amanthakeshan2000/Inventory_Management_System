import React from 'react';
import '../Css/RequestForm.css';
import CustomSelect from './CustomSelect';

const LocationPerson = () => {
  const categoryOptions = [
    { value: 'electric', label: 'Electric' },
    { value: 'furniture', label: 'Furniture' },

  ];

  const itemOptions = [
    { value: 'led_tv', label: 'LED TV' },
    { value: 'projector', label: 'Projector' },
  
  ];
  return (
    <div className="location-person">
      
      <h5>Request Details</h5>
      <div className="row">
        <div className="form-group col-md-6">
          <CustomSelect label="Select Faculty" options={categoryOptions} placeholder="Choose a Faculty" />
        </div>
      <div className="form-group col-md-6">
          <CustomSelect label="Select Hall or Room" options={categoryOptions} placeholder="Choose a Hall or Room" />
       </div>
      </div>
      <br/>
      <div className="form-group">
      <h5>Responsible Person</h5>
      <div className="form-group ">
          <CustomSelect label="Select Responsible Person" options={categoryOptions} placeholder="Choose a Responsible Person" />
       </div>
      </div>
    </div>
  );
};

export default LocationPerson;
