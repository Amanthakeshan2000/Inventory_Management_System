import React from 'react'
import "../Css/staffandlec-create-acc.css"
import "../Css/bootstrap.css"
import createpageBgImage from"../Assets/createBgimage.png"
import createpagemainlogo from"../Assets/createpageLogo png-01 1.png"

export default function StaffandLecCreateAccount() {
  return (
      
    <div className='stafandLecCreateAcc-page'>
    <div className='full-pagecss'>
      <img src={createpageBgImage} className='register-BgImage' alt=''/>
      
      <img src={createpagemainlogo} className='create-mainpage-logo' alt=''/>  
    </div>
    
    <div className="form-selection">

    <div className="right-side">
      <div className='mobile-size-div-logo'>
      <img src={createpagemainlogo} className='mobileSize-Logo' alt=''/> 
      </div>
      <h1>Welcome!</h1>
      <p>First create your account.</p>

      <div className="input-group">
           <label htmlFor="staff-id">Staff ID Number</label>
           <input
              style={{ borderRadius: '5px' }} 
              type="text"
              id="staff-id"
              placeholder="Enter your staff ID number"
           />
     </div>
      <div className="input-group">
            <label htmlFor="staff-name">Name</label>
            <input
              style={{ borderRadius: '5px' }} 
              type="text"
              id="staff-name"
              placeholder="Enter your name"
            />
      </div>
      <div className="input-group">
            <label htmlFor="staff-position">Position</label>
            <input
              style={{ borderRadius: '5px' }} 
              type="text"
              id="staff-position"
              placeholder="Enter your job position"
            />
      </div>

      <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              style={{ borderRadius: '5px' }} 
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div> 
          <div className="input-group">
            <label htmlFor="mobile-number">Mobile Number</label>
            <input
              style={{ borderRadius: '5px' }} 
              type="text"
              id="mobile-number"
              placeholder="Enter your mobile number"
            />
          </div>  
          <div className="input-group">
            <label htmlFor="dep-name">Department</label>
            <select id="dep-name" style={{ borderRadius: '5px' }} >
              <option value="" disabled>Select your Department</option>
              <option value="FOC">Faculty of Computing</option>
              <option value="FOB">Faculty of Buessiness</option>
              <option value="FOE">Faculty of Engineering</option>
            </select>
            <small className='small-text'>Only for lectures</small>
          </div>  


      <button className='have-acc-login-btn-1'>Next</button>
      <div className="login-linkbtn">
        <p>Already have an account?</p>
        <div className='have-acc-login-btn-2'>
        Login
        </div>
        
      </div>
    </div>
  </div>

  </div> 
  )
}
