//second report type

import React, {useState} from "react";

import { Typography,Box, InputLabel, TextField, Button } from '@mui/material'
//import FileBase from "react-file-base64";
//import { fontWeight } from '@mui/system'
import axios from 'axios'
import { width } from "@mui/system";
import Nav from "../../../components/Client Panel/Nav";
import Footer from "../../../components/Client Panel/Footer";



// import { useState } from 'react';
// import { Header } from './Header';


const labelStyles={ 
    marginBottom:2,
    marginTop:2,
    fontSize:'14px', 
    // fontWeight:'bold',
   
  };
  

  export default function ReturnProduct() {

    const [productNum, setproductNum] = useState('')
    const [reason, setreason] = useState('')
    const [image, setImage] = useState('')
    const [email, setEmail] = useState('')


    
      const sendRequest=async ()=>{
         axios.post('http://localhost:5000/api/returnProduct/createReturnProducts',{
            productNum,
            reason,
            image,
            email
        //    user:localStorage.getItem('x-access-token')
        }) .then((data)=>console.log(data));
        //alert("Thank You For Contacting Us...")
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
        <Nav/>
        <h1>Ceylon Products</h1>
        <h5>Report Center</h5>
        <h6>Report Intellectual Property Rights Infringements</h6>
        <form onSubmit={handleSubmit}>
        <Box 
        //border={3} 
        borderColor="gray" 
        borderRadius={1} 
        boxShadow="10px 10px 20px #ccc" 
        backgroundColor='#E5E5E5'
        padding={3} 
        margin='left' 
        marginTop={5}
        display='flex'
        flexDirection={'column'}
        width={"50%"}
        >
          <Typography 
        //   fontWeight={'bold'}
          padding={2}
          color="black"
          variant='h5'
          textAlign={'left'}
          >
       Complete the details below
          </Typography>

          <InputLabel sx={labelStyles}>
       Product Number
          </InputLabel>
          <input 
                    value={productNum}
                    onChange={(e) => setproductNum(e.target.value)}
                    type="text"
                    //placeholder="Enter your Name"
                    //variant="filled"
            />
          <InputLabel sx={labelStyles}>
        Reason
          </InputLabel>
          <textarea 
                    value={reason}
                    onChange={(e) => setreason(e.target.value)}
                    type="text"
                    // placeholder="Enter your Email"
                    // variant="filled"
                />
          
           <InputLabel sx={labelStyles}>
       Upload Evidence
          </InputLabel>


          <input
          id="filled-multiline-static"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="file"
       
        />
          <Typography 
        //   fontWeight={'bold'}
          padding={2}
          color="black"
          variant='h5'
          textAlign={'left'}
          >
      Enter your details
          </Typography>
          <InputLabel sx={labelStyles}>
        email-Address
          </InputLabel>
          <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    //placeholder="Enter your Name"
                    //variant="filled"
            />
             <Button sx={{marginTop:2, borderRadius:1, width:'150px'}} variant="contained" color="warning"  type='submit'>Submit Report</Button>
        </Box>
      </form>
      <Footer/>
    </div>
  )
}

// export default contactUsForm