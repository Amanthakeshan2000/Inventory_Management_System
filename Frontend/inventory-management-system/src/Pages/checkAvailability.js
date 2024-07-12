import React from 'react'
import '../Css/checkAvailability.css';

export default function checkAvailability() {
  return (

   
   
    <form>

      <div className='location-header'>
      <h1>Location & Date</h1>
      </div>
   
        <div className='horizontal1'>
            <div class="form-group">
                <label for="main-location">Main location</label>
                <select id="main-location" name="main-location">
                    <option value="faculty-of-computing">Faculty of Computing</option>
                    
                </select>
            </div>
            <div class="form-group">
                <label for="select-flow">Select flow</label>
                <select id="select-flow" name="select-flow">
                    <option value="ground-flow">Ground Flow</option>
                  
                </select>
            </div>
            <div class="form-group">
                <label for="hall-number">Hall number</label>
                <select id="hall-number" name="hall-number">
                    <option value="009">009</option>
                
                </select>
            </div>

            </div>


            
            <div class="horizontal2">
                <label for="need-date">Need date</label>
                <div>
                <input type="date" id="need-date" name="need-date" value="2024-07-12"/>
                </div>
               
            </div>


            <div class="horizontal3">
            <div class="time">
                <label for="start-time">Start Time</label>
                <input type="time" id="start-time" name="start-time" value="09:30"/>
            </div>
            <div class="time">
                <label for="end-time">End Time</label>
                <input type="time" id="end-time" name="end-time" value="13:00"/>
            </div>
            </div>


            
            <button type="submit" class="search-button">Search</button>

        </form>
    

        

    
  )
}
