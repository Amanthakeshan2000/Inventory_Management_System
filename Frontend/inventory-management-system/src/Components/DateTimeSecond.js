import React from 'react';
import '../Css/RequestForm.css';

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
<be/>

    </div>
  );
};

export default DateTime;
