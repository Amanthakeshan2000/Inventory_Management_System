import React from 'react';
import '../Css/RequestForm.css';

const DescriptionQuantity = () => {
  return (
    <div className="description-quantity">
      <h5 className='h5Color'>Request Details</h5>
      <div className="row">
      <div className="form-group col-md-6" >
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

export default DescriptionQuantity;
