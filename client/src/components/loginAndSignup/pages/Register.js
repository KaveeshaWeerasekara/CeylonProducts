import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { registerAction } from '../../../container/actions';
import BaseRegister from '../../loginAndSignup/imports/BaseRegister';
import RegisterForm from '../../loginAndSignup/imports/RegisterForm';

import {useNavigate} from 'react-router-dom';

export default function Register() {

    const[username,setUsername]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[passwordCheck,setPasswordCheck]=useState("")

//
const dispatch = useDispatch()
const navigate = useNavigate()



//on form submit click handler
const handleSubmit=(event)=>{
    event.preventDefault();

    const newUser={
        username,
        email,
        password,
        passwordCheck

    }
    const user={username:"admin",email:"admin@gmail.com",password:"admin123",passwordCheck:"admin123"}
    const validate=dispatch(registerAction(user));
    validate
        .then(data=>{
            //console.log(data)
            navigate('/login');
        })
        .catch(error=>console.log(error))


    console.log(newUser);

}

let registerData={
    handleSubmit,
    setUsername,
    setEmail,
    setPassword,
    setPasswordCheck
}

  return (
    <div id='login' >
            
        <div className="container">
            <div className="row login-box">
                
                <RegisterForm registerState={registerData}/>
                <BaseRegister/>
            
            </div> 
        </div>
    </div>
            
            
    )
}
