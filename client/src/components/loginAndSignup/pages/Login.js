import React from 'react'
import BaseLogin from '../../loginAndSignup/imports/BaseLogin';
import LoginForm from '../../loginAndSignup/imports/LoginForm';

export default function Login() {
  return (
    <div id='login' >
      <div className="container">
        <div className="row login-box">
        <LoginForm/>
        <BaseLogin/>
            
         </div> 
       </div>
    </div>
  )
}
