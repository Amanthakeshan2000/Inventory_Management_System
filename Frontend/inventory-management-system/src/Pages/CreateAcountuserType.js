import React from 'react'
import "../Css/createUserType.css"
import "../Css/bootstrap.css"
import createpageBgImage from"../Assets/createBgimage.png"
import createpagemainlogo from"../Assets/createpageLogo png-01 1.png"

export default function CreateAcountuserType() {

  return (
    <div className='select-userType-page'>
      <div className='full-pagecss'>
        <img src={createpageBgImage} className='register-BgImage' alt=''/>
        
        <img src={createpagemainlogo} className='create-mainpage-logo' alt=''/>  
      </div>
      
      <div className="user-type-selection">

      <div className="right-side">
        <h1>Welcome!</h1>
        <p>First select your user type.</p>
        <div className="user-type-dropdown">
          <label htmlFor="user-type">User Type</label>
          <select id="user-type" >
            <option value="" disabled>Select your user type</option>
            <option value="student">Student</option>
            <option value="teacher">Lecturer or Staf</option>
            <option value="teacher">Storekeeper</option>
            <option value="teacher">Head Storekeeper</option>
            <option value="teacher">Suplier</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button className='have-acc-login-btn-1'>Next</button>
        <div className="login-link">
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
