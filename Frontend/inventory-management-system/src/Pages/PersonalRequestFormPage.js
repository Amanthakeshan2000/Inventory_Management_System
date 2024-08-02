import React from 'react';
import CategoryItemsSecond from '../Components/CategoryItemsSecond';
import DescriptionQuantitySecond from '../Components/DescriptionQuantitySecond';
import DateTimeSecond from '../Components/DateTimeSecond';
import LocationPersonSecond from '../Components/LocationPersonSecond';
import '../Css/createRequest.css';
import '../Css/RequestForm.css';

const PersonalRequestFormPage = () => {
  return (
    <div className="personal-request-page">
      <div className="request-form">
        <div className="space">
          <CategoryItemsSecond />
        </div>
        <div className="space">
          <DescriptionQuantitySecond />
          <br/>
          <br/>
          {/* <DateTimeSecond /> */}
           <LocationPersonSecond />
           
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

export default PersonalRequestFormPage;
