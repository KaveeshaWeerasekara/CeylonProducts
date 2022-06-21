import { Typography,Box, InputLabel, TextField, Button } from '@mui/material'
//import FileBase from "react-file-base64";
//import { fontWeight } from '@mui/system'
import axios from 'axios'
import React, { useState } from 'react'
import { Header } from './Header';




const labelStyles={ 
  marginBottom:2,
  marginTop:2,
  fontSize:'24px', 
  fontWeight:'bold',
 
};

export const AddBlog = () => {
  const [inputs, setInputs]=useState({
    title:"",
    description:"",
    image:"",
    user:"",
  });

  const handleChange=(e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value,
  
    }));
  }
//   const user = JSON.parse(localStorage.getItem('x-access-token'));
// console.log(user);

  const sendRequest=async ()=>{
     axios.post('http://localhost:5000/api/blogRoutes/add',{
      title:inputs.title,
      description:inputs.description,
      image:inputs.image,
       user:localStorage.getItem('x-access-token')
    }) .then((data)=>console.log(data));
    // .then((res) => {
    //   console.log(res.data);
   // })
    //.catch((err)=>{console.log(err)});
    // const data=await res.data;
    // return data;
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(inputs);
    sendRequest().then((data)=>console.log(data));

  }


  return (
    
    <div>

<header>
    <Header/>
  </header>

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
          Post Your Blog
          </Typography>

          <InputLabel sx={labelStyles}>
            Title
          </InputLabel>
          <TextField 
            name='title' 
            onChange={handleChange} 
            value={inputs.title} 
            variant="filled" 
            color='warning' 
          />
          {/* <InputLabel sx={labelStyles}>
            Sub Title
          </InputLabel>
          <TextField 
            name='title' 
            onChange={handleChange} 
            value={inputs.title} 
            variant="filled" 
            color='warning' 
          /> */}
          <InputLabel sx={labelStyles}>
            Description
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
          onChange={handleChange} 
          value={inputs.description} 
          multiline
          rows={10}
       
          color='warning'
          defaultValue="Default Value"
          variant="filled"
        />


          <InputLabel sx={labelStyles}>
            Upload Image
          </InputLabel>
          {/* <TextField  name='imageURL' onChange={handleChange} value={inputs.imageURL} margin='auto' variant='outlined'/> */}
          
{/* <InputLabel sx={labelStyles}>Description</InputLabel>
<TextField
  sx={labelStyles}
  variant="standard"
  color="warning"
  focused
> Description</TextField> */}

          <TextField
            name="upload-photo"
            type="file"
            variant="standard" 
            color='warning'
            onChange={handleChange} 
            value={inputs.imageURL}
          />

          <Button sx={{marginTop:2, borderRadius:2}} variant="contained" color="warning"  type='submit'>Submit</Button>
        </Box>
      </form>
    </div>
  )
}
