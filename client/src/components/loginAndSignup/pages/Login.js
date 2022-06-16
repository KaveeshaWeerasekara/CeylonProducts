import React,{useState} from 'react'
import BaseLogin from '../../loginAndSignup/imports/BaseLogin';
import LoginForm from '../../loginAndSignup/imports/LoginForm';

import axios from 'axios';


// import {useDispatch,useStore} from 'react-redux';
// import { loginAction } from '../../../container/actions';
// import { useNavigate } from 'react-router-dom';

export default function Login() {

  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")

  // const dispatch = useDispatch()
  // const store=useStore()
  // const navigate=useNavigate()

  //handle Submit handler function
  const handleSubmit=(event)=>{
    event.preventDefault();

    const userCredential={
      email,
      password
    }

    axios.post("http://localhost:5000/api/login", userCredential).then((res) => {
      console.log(res.data);
  })


  //   const userData={email:"admin@gmail.com", password:"admin123"}
  //   const login =dispatch(loginAction(userData))
  //   login
  //     .then(data => navigate("/"))
  //     .catch(error => console.log(error))
  //   console.log(store.getState())
  //   //console.log(userCredential)
   }

  let loginData={
    handleSubmit,
    setEmail,
    setPassword
}


  return (
    <div id='login' >
      <div className="container">
        <div className="row login-box">
        <LoginForm loginState={loginData}/>
        <BaseLogin/>
            
         </div> 
       </div>
    </div>
  )
}
