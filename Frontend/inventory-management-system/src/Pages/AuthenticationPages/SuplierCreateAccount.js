import React from 'react'
import "../Css/suplier-create-acc.css"
import "../Css/bootstrap.css"
import createpageBgImage from"../Assets/createBgimage.png"
import createpagemainlogo from"../Assets/createpageLogo png-01 1.png"

export default function SuplierCreateAccount() {
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
            <label htmlFor="suplier-name">Name</label>
            <input
              style={{ borderRadius: '5px' }} 
              type="text"
              id="suplier-name"
              placeholder="Enter your name"
            />
      </div>
      <div className="input-group">
           <label htmlFor="nic-id">NIC Number</label>
           <input
              style={{ borderRadius: '5px' }} 
              type="text"
              id="nic-id"
              placeholder="Enter your staff ID number"
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
            <label htmlFor="company-name">Company Name</label>
            <input
              style={{ borderRadius: '5px' }} 
              type="text"
              id="company-name"
              placeholder="Enter your name"
            />
      </div>
      <div className="input-group">
            <label htmlFor="company-phone-number">Company Phone Number</label>
            <input
              style={{ borderRadius: '5px' }} 
              type="text"
              id="company-phone-number"
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
