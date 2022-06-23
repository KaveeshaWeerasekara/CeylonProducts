import React, {useState} from "react";

import { Typography,Box, InputLabel, TextField, Button } from '@mui/material'
//import FileBase from "react-file-base64";
//import { fontWeight } from '@mui/system'
import axios from 'axios'

// import { useState } from 'react';
// import { Header } from './Header';









const labelStyles={ 
    marginBottom:2,
    marginTop:2,
    fontSize:'24px', 
    fontWeight:'bold',
   
  };
  

  export default function ContactUsCeylon() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, Setmessage] = useState('')


      // const handleChange=(e)=>{
      //   setPostData((prevState)=>({
      //     ...prevState,
      //     [e.target.name]:e.target.value,
      
      //   }));
      // }
    //   const user = JSON.parse(localStorage.getItem('x-access-token'));
    // console.log(user);
    
      const sendRequest=async ()=>{
         axios.post('http://localhost:5000/api/contactform/createcontact',{
          name,
          email,
          message,
        //    user:localStorage.getItem('x-access-token')
        }) .then((data)=>console.log(data));
        alert("Thank You For Contacting Us...")
        // .then((res) => {
        //   console.log(res.data);
       // })
        //.catch((err)=>{console.log(err)});
        // const data=await res.data;
        // return data;
      }
    
      const handleSubmit=(event)=>{
        event.preventDefault();
        //console.log(inputs);
        sendRequest().then((data)=>console.log(data));
    
      }








  return (
    <div>
        <form onSubmit={handleSubmit}>
        <Box 
        //border={3} 
        borderColor="gray" 
        borderRadius={3} 
        boxShadow="10px 10px 20px #ccc" 
        padding={3} 
        margin='auto' 
        marginTop={5}
        display='flex'
        flexDirection={'column'}
        width={"80%"}
        >
          <Typography 
          fontWeight={'bold'}
          padding={3}
          color="black"
          variant='h2'
          textAlign={'center'}
          >
       Contact Us
          </Typography>

          <InputLabel sx={labelStyles}>
          Name
          </InputLabel>
          <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Enter your Name"
                    variant="filled"
            />
          <InputLabel sx={labelStyles}>
           Email
          </InputLabel>
          <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter your Email"
                    variant="filled"
                />
          <InputLabel sx={labelStyles}>
            Message
          </InputLabel>


          {/* <TextField  
            name='description' 
            onChange={handleChange} 
            value={inputs.description}  
            variant="standard" 
            color='warning'
          /> */}
          <TextField
          id="filled-multiline-static"
          value={message}
          onChange={(e) => Setmessage(e.target.value)}
           
          multiline
          rows={10}
       
          color='warning'
          defaultValue="Default Value"
          variant="filled"
        />


          {/* <TextField  name='imageURL' onChange={handleChange} value={inputs.imageURL} margin='auto' variant='outlined'/> */}
          
{/* <InputLabel sx={labelStyles}>Description</InputLabel>
<TextField
  sx={labelStyles}
  variant="standard"
  color="warning"
  focused
> Description</TextField> */}

        
          <Button sx={{marginTop:2, borderRadius:2}} variant="contained" color="warning"  type='submit'>Submit</Button>
          
        </Box>
      </form>
    </div>
  )
}

// export default contactUsForm