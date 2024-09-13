import React from 'react'
import "../Css/storekeeper-create-acc.css"
import "../Css/headstorekeeper-create-acc.css"
import createpageBgImage from"../Assets/createBgimage.png"
import createpagemainlogo from"../Assets/createpageLogo png-01 1.png"

export default function HeadstorekeeperCreateAccount() {
  return (
    <div className='studentCreateAcc-page'>
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
           <label htmlFor="store--staff-id">Staff ID Number</label>
           <input
              style={{ borderRadius: '5px' }} 
              type="text"
              id="store--staff-id"
              placeholder="Enter your staff ID number"
           />
     </div>
      <div className="input-group">
            <label htmlFor="store-staff-name">Name</label>
            <input
              style={{ borderRadius: '5px' }} 
              type="text"
              id="store-staff-name"
              placeholder="Enter your name"
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
            <label htmlFor="staff-position">Position</label>
            <input
              style={{ borderRadius: '5px' }} 
              type="text"
              id="staff-position"
              placeholder="Head StoreKeeper"
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
