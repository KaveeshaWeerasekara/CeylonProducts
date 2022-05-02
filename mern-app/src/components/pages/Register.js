import React from 'react'
import BaseRegister from '../imports/BaseRegister';
import RegisterForm from '../imports/RegisterForm';

export default function Register() {
  return (
    <div id='login' >
            
        <div className="container">
            <div className="row login-box">
                
                <RegisterForm/>
                <BaseRegister/>
            
            </div> 
        </div>
    </div>
            
            
    )
}
