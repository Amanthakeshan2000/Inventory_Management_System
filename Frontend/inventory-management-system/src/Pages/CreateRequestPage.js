import React, { useState } from 'react';
import CategoryItems from '../Components/CategoryItems';
import CategoryItemsSecond from '../Components/CategoryItemsSecond';
import DescriptionQuantity from '../Components/DescriptionQuantity';
import DateTime from '../Components/DateTime';
import LocationPerson from '../Components/LocationPerson';
import PersonalRequestFormPage from './PersonalRequestFormPage';
import RequestConfirmationPage from './RequestConfirmationPage';
import '../Css/createRequest.css';
import '../Css/RequestForm.css';

const CreateRequestPage = () => {
  const [activeForm, setActiveForm] = useState('requestForm');

  return (
    <div className="create-request-page">
      <nav className="breadcrumb">
        <span>Request </span> / <span  className="active" >Create Request</span>
      </nav>
      <div className="buttons">
  <button 
    className={`request-form-btn ${activeForm === 'requestForm' ? 'active' : ''}`} 
    onClick={() => setActiveForm('requestForm')}
    style={{ outline: 'none' }}
  >
    Request Form
  </button>
  <button 
    className={`request-form-btn ${activeForm === 'personalRequestForm' ? 'active' : ''}`} 
    onClick={() => setActiveForm('personalRequestForm')}
    style={{ outline: 'none' }}
  >
    Personal Request Form
  </button>
  <button 
    className={`request-form-btn ${activeForm === 'requestConfirmation' ? 'active' : ''}`} 
    onClick={() => setActiveForm('requestConfirmation')}
    style={{ outline: 'none' }}
  >
    Request Confirmation
  </button>
</div>

      <br />
      <div className="request-form">
        {activeForm === 'requestForm' && (
          <>
            <div className="space">
              <CategoryItems />
            </div>
            <div className="space">
              <DescriptionQuantity />
              <br/>
              <DateTime />
              <br/>
              <LocationPerson />
              <br /> <br />
              <div className="form-actions btnRequest">
                <button className="back-btn">Back</button>
                <button className="save-request-btn">Save Request</button>
              </div>
            </div>
          </>
        )}
        {activeForm === 'personalRequestForm' && <PersonalRequestFormPage />}
        {activeForm === 'requestConfirmation' && <RequestConfirmationPage />}
      </div>
    </div>
  );
};

export default CreateRequestPage;
