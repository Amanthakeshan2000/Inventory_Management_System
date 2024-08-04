import React from 'react';
import Select from 'react-select';
import "../Css/head-sk-req-form.css"

// CreateRequestPage Component
const CreateRequestPage = () => {
  return (
    <div className="create-request-page">
      <nav className="breadcrumb">
        <span>Request </span> / <span className="active">Create Request</span>
      </nav>
      <div className="buttons">
        <button className="request-form-btn">Request Form</button>
        <span className="request-confirmation">Request confirmation</span>
      </div>
      <br/>
      <div className="request-form">
        <div className="space">
          <CategoryItems />
        </div>
        <div className="space">
          <DescriptionQuantity />
          <DateTime />
          <LocationPerson />
          <br /> <br />
          <div className="form-actions btnRequest">
            <button className="back-btn">Back</button>                    
            <button className="save-request-btn">Save Request</button>
          </div>
        </div>    
      </div>
    </div>
  );
};

// CategoryItems Component
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
    <div className="category-items">
      <div className="row">
        <div className="form-group col-md-6">
          <CustomSelect label="Select Category" options={categoryOptions} placeholder="Choose a category" />
        </div>
        <div className="form-group col-md-6">
          <CustomSelect label="Select Items" options={itemOptions} placeholder="Choose an item" />
        </div>
      </div>
      <button className="search-btn">Search</button>
    </div>
  );
};


  );
};

export default CreateRequestPage;
