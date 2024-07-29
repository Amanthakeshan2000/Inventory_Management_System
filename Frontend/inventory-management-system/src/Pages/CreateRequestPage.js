import React from 'react';
import CategoryItems from '../Components/CategoryItems';
import DescriptionQuantity from '../Components/DescriptionQuantity';
import DateTime from '../Components/DateTime';
import LocationPerson from '../Components/LocationPerson';
import '../Css/createRequest.css';
import '../Css/RequestForm.css';

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
            <br/> <br/>
        <div className="form-actions btnRequest">
          <button className="back-btn">Back</button>                    
          <button className="save-request-btn">Save Request</button>
        </div> 
      </div>    

      </div>
    </div>

    
  );
};

export default CreateRequestPage;
