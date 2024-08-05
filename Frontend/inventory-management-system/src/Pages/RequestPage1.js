import React from 'react'
import '../Css/RequestPage1.css'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css';
import '../Css/requestRepair.css'

function RequestPage1() {
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
          <div className='page1'>
          <div className='section-one'>
              <div className='heading'>
                  <p className='heading-request'>Request / <section className='heading-create-req'>  Create Request</section></p>
                 
              </div>
              <div className='upper-section'>
                  <button className='send-request-button'>Request Form</button>
                  <h5 className='heading-text'>Personal Request Form</h5>
                  <h5 className='heading-text'>Request conformation</h5>
              </div>

              <div>
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
              <h6 className='dropdown-header'>Select Item</h6>
              <Dropdown
                className='category-dropdown'
                options={items} 
                placeholder='Select item'
              />
            </div>
          </div>
        </div>
        <div className='button-section'>
          <button className='search-button'>Search</button>
        </div>  
     </div>
              
          {/*------------------------------*/}
          <div className='section-two'>
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
              </div>
          </div>
          <div>
         
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
              <h6 className='dropdown-header'>Select Item</h6>
              <Dropdown
                className='category-dropdown'
                options={items} 
                placeholder='Select item'
              />
            </div>
              </div>
              </div>
      </>
  )
}  

export default RequestPage1