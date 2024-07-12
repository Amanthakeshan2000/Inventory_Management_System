import React from 'react'
import "../Css/studentcreateAcc.css"
import "../Css/bootstrap.css"
import createpageBgImage from"../Assets/createBgimage.png"
import createpagemainlogo from"../Assets/createpageLogo png-01 1.png"

export default function StudentCreateAccount() {
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
            <label htmlFor="student-name">Student Name</label>
            <input
              style={{ borderRadius: '5px' }} 
              type="text"
              id="student-name"
              placeholder="Enter your name"
            />
      </div>
      <div className="input-group">
           <label htmlFor="student-id">Student ID Number</label>
           <input
              style={{ borderRadius: '5px' }} 
              type="text"
              id="student-id"
              placeholder="Enter your student ID number"
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
            <label htmlFor="batch">Batch</label>
            <select id="batch" style={{ borderRadius: '5px' }} >
              <option value="" disabled>Select your batch</option>
              <option value="21.1">21.1</option>
              <option value="21.2">21.2</option>
              <option value="22.1">22.1</option>
              <option value="22.2">22.2</option>
            </select>
          </div>  
          <div className="input-group" style={{ borderRadius: '5px' }} >
            <label htmlFor="degree">Degree</label>
            <select id="degree">
              <option value="" disabled>Select your degree</option>
              <option value="Software Engineering">Software Engineering</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Business Management">Business Management</option>
            </select>
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
