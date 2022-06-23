// import axios from 'axios';

// const baseURL="http://localhost:5000/api";


// //register request
// export const register=(newUser)=>{
//     console.log(newUser);
//     console.log("auther");
//     //post request on http://localhost:5000/api/register
//    return axios.post(`${baseURL}/register`,newUser)
//         .then(response=>{
//             if(response){
//                 return Promise.resolve(response)
//             }
//         })
//         .catch(error=>{
//             return Promise.reject(error.reponse)
//         })
// }

// //login request
// export const login=(userCredential)=>{
//    return axios.post(`${baseURL}/login`,userCredential)
//         .then(response=>{
//             if(response.data.token){
//                 localStorage.setItem("x-access-token",response.data.token)
//             }
//             return Promise.resolve(response.data)
//         })
//         .catch(error=>{
//             return Promise.reject(error.response.data)
//         })
// }

// // export{
// //     register,
// //     login
// // }

import {configureStore, createSlice} from '@reduxjs/toolkit'

const authSlice=createSlice({
    name:"login",
    initialState:{isLoggedIn:false},
    reducers:{                        //action creator
        login(state){
            state.isLoggedIn=true;
        },
        logout(state){
            state.isLoggedIn=false;
        },
    },
});

export const authActions=authSlice.actions;

export const store=configureStore({
    reducer:authSlice.reducer
})