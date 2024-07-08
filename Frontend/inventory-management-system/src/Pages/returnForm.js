import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../Css/return.css';
import '../Css/bootstrap.css';
import '../Css/custom-datepicker.css'; 
import ItemSelector from '../Components/ItemSelector';

const ReturnForm = () => {
  const [returnDate, setReturnDate] = useState(new Date('2024-05-27T00:00:00'));
  const [returnTime, setReturnTime] = useState(new Date('2024-05-27T09:00:00'));
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [hours, setHours] = useState(9);
  const [minutes, setMinutes] = useState(0);

  const handleDateChange = (date) => {
    setReturnDate(date);
  };

  const handleTimeChange = (time) => {
    setReturnTime(time);
    setHours(time.getHours());
    setMinutes(time.getMinutes());
    setShowTimePicker(false);
  };

  const handleHourChange = (e) => {
    const newHours = parseInt(e.target.value) || 0;
    if (newHours >= 0 && newHours <= 23) {
      setHours(newHours);
      setReturnTime(new Date(returnTime.setHours(newHours)));
    }
  };

  const handleMinuteChange = (e) => {
    const newMinutes = parseInt(e.target.value) || 0;
    if (newMinutes >= 0 && newMinutes <= 59) {
      setMinutes(newMinutes);
      setReturnTime(new Date(returnTime.setMinutes(newMinutes)));
    }
  };

  const toggleTimePicker = () => {
    setShowTimePicker(!showTimePicker);
  };

  return (
    <div className="return-form">
      <h2>Return Items Inform</h2>
      <h4>Select Return Items</h4>
      {
         <ItemSelector />
      }
      <div className="row return-date-time">
        <div className="form-group col-md-6">
        <h6>Return Date</h6>
          <DatePicker
            selected={returnDate}
            onChange={handleDateChange}
            dateFormat="dd MMM yyyy"
            className="form-control"
          />
        </div>
        <div className="form-group col-md-6">
          <h6>Return Time</h6>
          <div className="custom-time-picker">
            <input
              type="text"
              value={`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`}
              className="form-control1"
              onClick={toggleTimePicker}
              readOnly
            />
            {showTimePicker && (
              <div className="time-picker-dropdown">
                <div className="hour-input">
                  <label>Hour</label>
                  <input
                    type="number"
                    value={hours}
                    onChange={handleHourChange}
                    className="form-control"
                  />
                </div>
                <div className="minute-input">
                  <label>Minute</label>
                  <input
                    type="number"
                    value={minutes}
                    onChange={handleMinuteChange}
                    className="form-control"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="button-container">
        <button className="send-button">Send</button>
      </div>
    </div>
  );
};

export default ReturnForm;
