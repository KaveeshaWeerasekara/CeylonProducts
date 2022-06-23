import React,{useState} from 'react'
import BaseLogin from '../../loginAndSignup/imports/BaseLogin';
import LoginForm from '../../loginAndSignup/imports/LoginForm';

import axios from 'axios';


 import {useDispatch,useStore} from 'react-redux';
 //import { loginAction } from '../../../container/actions';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const [errorMessage,setError]=useState("")

  const dispath = useDispatch()
  // const store=useStore()
  const navigate=useNavigate()

  //handle Submit handler function
  const handleSubmit=(event)=>{
    const re=/^[A-Za-z]+$/;
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!email)
      alert("email is required")
    if(!password)
      alert('password is required')
    if(!regex.test(email))
      alert("Email is not valid")
    event.preventDefault();

    const userCredential={
      email,
      password
    }

  


    //const login=loginAction(userCredential)
   
    axios.post("http://localhost:5000/api/login", userCredential)
    .then((res) => {
            console.log(res.data);
            navigate('/Home');
        })
        
    .catch(error =>{
      //const login=dispatch(loginAction(userCredential))
     
      setError(error.err)
     alert(error);
    }) 

   // axios.post("http://localhost:5000/api/login", userCredential)
                            // .then((res) => {
                            //   console.log(res.data);
  //     .then(response=>{
  //         if(response.data.token){
  //         localStorage.setItem("x-access-token",response.data.token)
  //         }
  //         return Promise.resolve(response.data)
  //    })
  //     .catch(error=>{
  //      return Promise.reject(error.response.data)
  //       //         })
  // })


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
