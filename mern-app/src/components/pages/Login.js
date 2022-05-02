import React from 'react'
import BaseLogin from '../imports/BaseLogin';
import LoginForm from '../imports/LoginForm';

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
