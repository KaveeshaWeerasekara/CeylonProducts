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
  

  export default function AddBlogsNew() {

    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')


    
      const sendRequest=async ()=>{
         axios.post('http://localhost:5000/api/BlogsNewAdd/createBlogs',{
            name,
            title,
            image,
            description
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
        const re=/^[A-Za-z]+$/;
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!name)
      alert("name is required")
    if(!image)
      alert('image is required')
   
        event.preventDefault();
        //console.log(inputs);
        sendRequest().then((data)=>console.log(data));
    
      }

  return (
    <div>
        <Nav/>
        <h1>Ceylon Products</h1>
        <h5>Blogs...</h5>
        <h6>Add article</h6>
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
            Name
          </InputLabel>
          <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    //placeholder="Enter your Name"
                    //variant="filled"
            />
            <InputLabel sx={labelStyles}>
            Title
          </InputLabel>
          <input 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    //placeholder="Enter your Name"
                    //variant="filled"
            />
         
          
           <InputLabel sx={labelStyles}>
      Image
          </InputLabel>


          <input
          id="filled-multiline-static"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="file"
       
        />
         <InputLabel sx={labelStyles}>
        Description
          </InputLabel>
          <textarea 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    // placeholder="Enter your Email"
                    // variant="filled"
                />
         
             <Button sx={{marginTop:2, borderRadius:1, width:'150px'}} variant="contained" color="warning"  type='submit'>Submit Report</Button>
        </Box>
      </form>
      <Footer/>
    </div>
  )
}

// export default contactUsForm