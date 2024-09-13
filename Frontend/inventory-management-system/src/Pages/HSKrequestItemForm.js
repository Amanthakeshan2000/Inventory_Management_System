import React from 'react';
import Select from 'react-select';
import "../Css/head-sk-req-form.css"

// CreateRequestPage Component
const HSKrequestItemForm = () => {
  return (
    <div className="create-request-page">
      <nav className="breadcrumb">
        <span>Buy </span> / <span className="active">Request Items</span>
      </nav>
      <br/><br/>
      <div className="buttons">
        <button className="request-form-btn">Request Form</button>
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
            <button className="save-request-btn">Send Request</button>
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
      <h5>Category & Items</h5>
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

// DateTime Component
const DateTime = () => {
  return (
    <div className="date-time">
      <br/>
      <h5>Request date</h5>
      <div className="row">
        <div className="form-group col-md-6">
          <label htmlFor="from-date">On</label>
          <input type="date" id="from-date" className="form-control" />
        </div>
      </div>
      <br/>
    </div>
  );
};

// DescriptionQuantity Component
const DescriptionQuantity = () => {
  return (
    <div className="description-quantity">
      
      <div className="row">
        <div className="form-group col-md-6">
          <label htmlFor="description">Description</label>
          <textarea id="description" className="form-control" placeholder="Enter description for reason" maxLength="1000"></textarea>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="quantity">Quantity</label>
          <input type="number" id="quantity" className="form-control" defaultValue="02" />
        </div>
      </div>
    </div>
  );
};

// LocationPerson Component
const LocationPerson = () => {
  const categoryOptions = [
    { value: 'abc_company', label: 'ABC Company' },
    { value: 'xyz_company', label: 'XYZ Company' },
  ];

  const categoryOptions2 = [
    { value: 'abc_company_no', label: '077 4352345' },
    { value: 'xyz_company_no', label: '055 3535356' },
  ];
  

  return (
    <div className="location-person">
      <h5>Supplier</h5>
      <div className="row">
        <div className="form-group col-md-6">
          <CustomSelect label="Company Name" options={categoryOptions} placeholder="Choose a Company" />
        </div>
        <div className="form-group col-md-6">
          <CustomSelect label="Phone Number" options={categoryOptions2} placeholder="Phone Number" />
        </div>
      </div>
      <br/>
    </div>
  );
};

// CustomSelect Component
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

export default HSKrequestItemForm;
