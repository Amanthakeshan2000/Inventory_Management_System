import React from 'react'
import '../Css/confirm_password.css'
import NSBM from '../Assets/nsbm.png'
import Logo from '../Assets/Login-Logo.png'

export default function Password_Confirm() {
  return (
    <>
    <div className='Login-Page'>

        <div className='Login-image-side'>
                <img src={NSBM} alt='' className='Login-Image'/> 
                <img src={Logo} alt='' className='Login-Logo'/>   
        </div>
    

        <div className='Login-Details-Side'> 
            <div className='Login-Details'>
                <h3 className='welcome'>Welcome!</h3>
                <h3 className='Password-Confirmation-Description'>First Create Your Account</h3>
<br/>
                <h3 className='Password-Description'>Your password must be at least 8 characters long</h3>

                    <div className='Inputs-and-Lables'>
                    <h5 className='Password'>Enter Password</h5>
                        <input type='password' placeholder='* * * * * * * *'/>
                            <br/><br/>
                        <h5 className='Password'>Confirm Password</h5>
                        <input type='password' placeholder='* * * * * * * *'/>
                    </div>
                    
                    <br/>
                
                <br/>
                <button className='Login-Button'>Login</button>

                <br/><br/>

                <button className='Back-button'>Back</button>
                </div>
        </div>
    </div>

</>
  )
}
