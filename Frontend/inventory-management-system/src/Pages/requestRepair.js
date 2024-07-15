import React from 'react'
import '../Css/requestRepair.css'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css';


function RequestRepair() {
  const categories = [
    'Electric'
    ];
    const items = [
        'LED TV', 'Microphone', 'Projector'
    ];
    const locations = [
        'Faculty of Computing', 'Faculty of Engineering', 'Faculty of Bussiness'
    ];
    const floors = [
        'Ground floor', 'First Floor', 'First Floor', 'First Basement', 'Second Basement', 'Third Basement'
    ];
    const halls = [
        '009','101','102'
    ]
  return (
      <>
      <div className='request-repair'>
        <div className='headers'>
        <h5 className='main-heading'>Request Repair</h5>
        <button className='request-button'>Request Form</button>
        </div>
        
        <div className='category-items-all-section'>
          <h5 className='category-items'>Category & Items</h5>
          <div className='category-selection'>
            <div className='category-selection-left'>
              <h6 className='dropdown-header'>Select Category</h6>
              <Dropdown
                className='category-dropdown'
                options={categories} 
                placeholder='Select category'
              />
            </div>
            <div className='category-selection-left'>
              <h6 className='dropdown-header'>Select Category</h6>
              <Dropdown
                className='category-dropdown'
                options={items} 
                placeholder='Select item'
              />
            </div>
          </div>
       

        <div className='category-items-section'>
            <div>
            <h5 className='category-items'>Location & Date</h5>
          </div>
          <div className='category-selection'>
            <div className='category-selection-left'>
                <h6 className='dropdown-header'>Main Location
              </h6>
                <Dropdown
                  className='location-dropdown'
                  options={locations} 
                  placeholder='Select location'
              />
            </div>
            <div className='category-selection-left'>
              <h6 className='dropdown-header'>Select Floor</h6>
                <Dropdown
                  className='location-dropdown'
                  options={floors} 
                  placeholder='Select floor'
              />
            </div>
            <div className='category-selection-left'>
              <h6 className='dropdown-header'>Hall Number</h6>
                <Dropdown
                  className='location-dropdown'
                  options={halls} 
                  placeholder='Select hall'
              />
            </div>
          </div>

          
        </div>

        <div className='msg-date-selection'>
            <div className='category-selection-left'>
              <h6 className='dropdown-header'>Message (0 / 1000)</h6>
              <input
                className='message-input'
              type='text'
              />
            </div>
            <div className='category-selection-left'>
              <h6 className='dropdown-header'>Required Date</h6>
              <input
                className='date-input'
                type='date'
              />
            </div>
        </div>
        
        <div className='button-section'>
          <button className='back-button'>Back</button>
          <button className='send-request-button'>Send Request</button>
        </div>
      </div>
      </div>
      </>
  )
}

export default RequestRepair