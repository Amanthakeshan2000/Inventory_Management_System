import React from 'react'
import '../Css/login.css'
import NSBM from '../Assets/nsbm.png'
import Logo from '../Assets/Login-Logo.png'
import Password_Confirm from './Password_Confirm'
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate()

        const gotToNewPage=()=>{
            navigate("/Password_Confirm");
        }

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
                    <h3 className='Login-Description'>Please Login to Your Account</h3>

                        <div className='Inputs-and-Lables'>
                            <h5 className='Email-Password'>Email</h5>
                            <input type='email'placeholder='Johndec@gmail.com' />
                                <br/><br/>
                            <h5 className='Email-Password'>Password</h5>
                            <input type='password' placeholder='* * * * * * * *'/>
                        </div>
                        
                        <br/>
                    <div >
                    <h5 className='Login-Remember'>Remember Me</h5> 

                    </div>
                    <br/>
                    <button className='Login-Button'>Login</button>

                    <br/><br/><br/>

                    <h5 className='Register-Description'>If You Don't Have an Account, Please Register Here</h5>

                    <br/>

                    <button className='Register-button' onClick={() => gotToNewPage()}>Register Account</button>
                    </div>
            </div>
        </div>

    </>
  )
}
