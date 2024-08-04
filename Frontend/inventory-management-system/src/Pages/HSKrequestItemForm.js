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

// DateTime Component
const DateTime = () => {
  return (
    <div className="date-time">
      <br/>
      <h5>Request date & time</h5>
      <div className="row">
        <div className="form-group col-md-6">
          <label htmlFor="from-date">From</label>
          <input type="date" id="from-date" className="form-control" />
          <span className="note">Must request for a week.</span>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="start-time">Start time</label>
          <input type="time" id="start-time" className="form-control" />
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-6">
          <label htmlFor="to-date">To</label>
          <input type="date" id="to-date" className="form-control" />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="end-time">End time</label>
          <input type="time" id="end-time" className="form-control" />
        </div>
      </div>
      <div className="form-group">
        <br/>
        <div className="radio-group">
          <input type="radio" id="day" name="session" />
          <label htmlFor="day">Day</label>
          <input type="radio" id="night" name="session" defaultChecked />
          <label htmlFor="night">Night</label>
        </div>
        <br/>
      </div>
      <br/>
    </div>
  );
};

// DescriptionQuantity Component
const DescriptionQuantity = () => {
  return (
    <div className="description-quantity">
      <h5>Request Details</h5>
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
    { value: 'electric', label: 'Electric' },
    { value: 'furniture', label: 'Furniture' },
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
        <div className="form-group">
          <CustomSelect label="Select Responsible Person" options={categoryOptions} placeholder="Choose a Responsible Person" />
        </div>
      </div>
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

export default CreateRequestPage;
