import React, { useState } from 'react';
import ItemSelector from '../Components/ItemSelector';
import '../Css/return.css';
import '../Css/bootstrap.css';

const ReturnForm = () => {
  const [returnDate, setReturnDate] = useState('27 May 2024');
  const [returnTime, setReturnTime] = useState('9:00');

  return (
    <div className="return-form">
      <h2>Return Items Inform</h2>
      <h4>Select Return Items</h4>
      <ItemSelector />
      <div className="row return-date-time">
        <div className="form-group col-md-6">
        <label>Return Date</label>
          <input
            type="text"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
         
        </div>
        <div className="form-group col-md-6">
        <label>Return Time</label>
          <input
            type="text"
            value={returnTime}
            onChange={(e) => setReturnTime(e.target.value)}
          />
          
        </div>
      </div>
      <button className="send-button">Send</button>
    </div>
  );
};

export default ReturnForm;
