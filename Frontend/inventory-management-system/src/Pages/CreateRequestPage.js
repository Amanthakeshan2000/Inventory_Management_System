import React from 'react';
import CategoryItems from '../Components/CategoryItems';
import DescriptionQuantity from '../Components/DescriptionQuantity';
import DateTime from '../Components/DateTime';
import LocationPerson from '../Components/LocationPerson';
import '../Css/RequestForm.css';

const CreateRequestPage = () => {
  return (
    <div className="create-request-page">
      <h2>Request  / Create Request</h2>
      <br/>
      <div className="request-form">
      <div className="space">
           <CategoryItems />
      </div>
        

      <div className="space">
            <DescriptionQuantity />
            <DateTime />
            <LocationPerson />
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
