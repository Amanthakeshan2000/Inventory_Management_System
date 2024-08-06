import React from 'react'
import '../Css/update_request.css'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css';

export default function UpdateRrquest() {

    const options = [
        'one', 'two', 'three'
      ];

  return (
    <div className='approve_request'>
            <div  className='direction'>
                <h5 className='request-title'>Update Request</h5>
                {/* <h5 className='approve-request-title'>Booking Request</h5> */}
            </div>
            
            <div  className='requester-details'>
                <div>
                    <h6>Category and Items</h6>
                </div>
                <br/>
                <div className='location-dropdowns'>
                    <div className='updateRrquest-dropd'>
                        <h6 className='requester-text'>Location and Date</h6>
                        <Dropdown className='updateRrquest-dropdown'options={options}/>
                    </div>
                    <div className='updateRrquest-dropd'>
                        <h6 className='requester-text'>Main Location</h6>
                        <Dropdown className='updateRrquest-dropdown'options={options}/>
                    </div>

                    
                </div>

                <div className='location-dropdowns'>
                    <div className='updateRrquest-dropd'>
                        <h6 className='requester-text'>Description  (0 / 1000)</h6>
                        <p>
                            <input className='updateRrquest-description' type='text'/>
                        </p>
                    </div>
                    <div className='updateRrquest-dropd'>
                        <h6 className='requester-text'>Location and Date</h6>
                        <Dropdown className='updateRrquest-dropdown'options={options}/>
                    </div>
                    

                    
                </div>
                <div>
                    <h6>Request Date and Time</h6>
                </div>

                <br/>
                <div className='location-dropdowns'>
                    <div className='updateRrquest-dropd'>
                        <h6 className='requester-text'>From</h6>
                        <Dropdown className='updateRrquest-dropdown'options={options}/>
                    </div>
                    <div className='updateRrquest-dropd'>
                        <h6 className='requester-text'>Start Time</h6>
                        <Dropdown className='updateRrquest-dropdown'options={options}/>
                    </div>

                    
                </div>

                <br/>
                <div className='location-dropdowns'>
                    <div className='updateRrquest-dropd'>
                        <h6 className='requester-text'>To</h6>
                        <Dropdown className='updateRrquest-dropdown'options={options}/>
                    </div>
                    <div className='updateRrquest-dropd'>
                        <h6 className='requester-text'>End Time</h6>
                        <Dropdown className='updateRrquest-dropdown'options={options}/>
                    </div>

                    
                </div>

                <div className='radio-buttons'>
                    <input type='radio'/>Day
                    <input type='radio'/>Night
                </div>

                <br/>

                <div>
                    <h6>Category and Items</h6>
                </div>
                <br/>
                <div className='location-dropdowns'>
                    <div className='updateRrquest-dropd'>
                        <h6 className='requester-text'>Faculty</h6>
                        <Dropdown className='updateRrquest-dropdown'options={options}/>
                    </div>
                    <div className='updateRrquest-dropd'>
                        <h6 className='requester-text'>Hall or Room</h6>
                        <Dropdown className='updateRrquest-dropdown'options={options}/>
                    </div>

                    
                </div>
                <br/>

                <div>
                    <h6>Responsible Person</h6>
                </div>
                <br/>
                <div className='location-dropdowns'>
                    <div className='updateRrquest-dropd'>
                        <h6 className='requester-text'>Select Lecturer</h6>
                        <Dropdown className='updateRrquest-dropdown'options={options}/>
                    </div>
                    
                </div>

                
                <br/>
                
                <div className='request-approvech-buttons'>
                        <button className='back-button'>Back</button>
                        <button className='updateRequest-Button'>Update Request</button>
                    </div>
                    <br/>
                
            </div>
            

        </div>
  )
}
