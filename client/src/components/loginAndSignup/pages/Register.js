import React,{useState} from 'react'
//import { useDispatch } from 'react-redux';
//import { registerAction } from '../../../container/actions';
import BaseRegister from '../../loginAndSignup/imports/BaseRegister';
import RegisterForm from '../../loginAndSignup/imports/RegisterForm';

//import {useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function Register() {

    const[username,setUsername]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[passwordCheck,setPasswordCheck]=useState("")

//
// const dispatch = useDispatch()
// const navigate = useNavigate()



//on form submit click handler
const handleSubmit=(event)=>{

    event.preventDefault();
    console.log("sends")
    const newUser={
        username,
        email,
        password,
        passwordCheck

    }

    console.log(newUser);

    // axios.post("http://localhost:5000/api/register",newUser,{
    //     withCredentials:true,
    //     credentials:"include",
    // }).then((res)=>{
    //     console.log(res.data);
    // })

    axios.post("http://localhost:5000/api/register", newUser).then((res) => {
            console.log(res.data);
        })


    // const user={username:"admin",email:"admin@gmail.com",password:"admin123",passwordCheck:"admin123"}
    // //registerAction(user)
    // const validate=dispatch(registerAction(user));


// console.log(validate);
//     validate
//         .then(data=>{
//             console.log(data)
//             navigate('/login');
//         })
//         .catch(error=>console.log(error))


//     console.log(newUser);

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

