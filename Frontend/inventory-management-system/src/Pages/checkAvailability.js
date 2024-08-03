import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import '../Css/checkAvailability.css';

export default function CheckAvailability() {
  const [formData, setFormData] = useState({
    mainLocation: 'faculty-of-computing',
    selectFlow: 'ground-floor',
    hallNumber: '009',
    needDate: '2024-07-12',
    startTime: '09:30',
    endTime: '13:00'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <Container style={{ maxWidth: 'none', padding: '20px' }}>
      <form onSubmit={handleSubmit}>
        <div className='location-header'>
          <h1>Location & Date</h1>
        </div>

        <div className='horizontal1'>
          <div className="form-group">
            <label htmlFor="main-location">Main location</label>
            <select
              id="main-location"
              name="mainLocation"
              value={formData.mainLocation}
              onChange={handleInputChange}
            >
              <option value="faculty-of-computing">Faculty of Computing</option>
              <option value="faculty-of-engineering">Faculty of Engineering</option>
              <option value="faculty-of-science">Faculty of Science</option>
              <option value="faculty-of-business">Faculty of Business</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="select-flow">Select flow</label>
            <select
              id="select-flow"
              name="selectFlow"
              value={formData.selectFlow}
              onChange={handleInputChange}
            >
              <option value="ground-floor">Ground Floor</option>
              <option value="basement-floor">Basement Floor</option>
              <option value="first-floor">First Floor</option>
              <option value="second-flo0r">Second Floor</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="hall-number">Hall number</label>
            <select
              id="hall-number"
              name="hallNumber"
              value={formData.hallNumber}
              onChange={handleInputChange}
            >
              <option value="009">009</option>
              <option value="002">002</option>
              <option value="003">003</option>
              <option value="005">005</option>
              <option value="006">006</option>
            </select>
          </div>
        </div>

        <div className="horizontal2">
          <label htmlFor="need-date">Need date</label>
          <div>
            <input
              type="date"
              id="need-date"
              name="needDate"
              value={formData.needDate}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="horizontal3">
          <div className="time">
            <label htmlFor="start-time">Start Time</label>
            <input
              type="time"
              id="start-time"
              name="startTime"
              value={formData.startTime}
              onChange={handleInputChange}
            />
          </div>
          <div className="time">
            <label htmlFor="end-time">End Time</label>
            <input
              type="time"
              id="end-time"
              name="endTime"
              value={formData.endTime}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <button type="submit" className="search-button">Search</button>
      </form>

      <div className='seperate-form-from-div'></div>

      <div className="availability-status">
        <div className="status">
          <span>Availability status</span>
          <span className="status-message">Available</span>
        </div>
        <button className="request-button">Create Request</button>
      </div>
    </Container>
  );
}
