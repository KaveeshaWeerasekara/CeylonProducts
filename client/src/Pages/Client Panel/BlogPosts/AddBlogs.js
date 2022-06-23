import { Typography,Box, InputLabel, TextField, Button } from '@mui/material'
//import FileBase from "react-file-base64";
//import { fontWeight } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Header } from './Header';
import jwt_decode from 'jwt-decode'



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
  });

   //const [user1,setuser1]=useState()
  
 const user1=useEffect(() => {
  const token = localStorage.getItem('x-access-token')
  const authUser = jwt_decode(token)
  console.log(authUser);
  return authUser;
}, [])


  //return setuser1(authUser);
  //console.log(authUser.id)
  //setBloger(authUser)
  //  if (token) {
    
  //   console.log(authUser.id);
  //   if (!authUser) {
  //     localStorage.removeItem('x-access-token')
      
  //     //navigate('/login')
  //   } else {
  //     setUser(authUser)
  //   }
  // } else {
  //   // alert('Please Login')
  //   // navigate('/login')
  // }
 



  // const handleChange=(e)=>{
  //   setInputs((prevState)=>({
  //     ...prevState,
  //     [e.target.name]:e.target.value,
  
  //   }));
   
  // }
//   const user = JSON.parse(localStorage.getItem('x-access-token'));
// console.log(user);
// const user=localStorage.getItem('x-access-token')
// console.log(user);

const handleChange=(e)=>{
  setInputs((prevState)=>({
    ...prevState,
    [e.target.name]:e.target.value,

  }));
}




const sendRequest=async ()=>{
     axios.post('http://localhost:5000/api/blogRoutes/add',{
      title:inputs.title,
      description:inputs.description,
      image:inputs.imageURL,
      user:"62a9b6968d67a22d34f1"
      
    }) 
    .then((data)=>console.log(data));
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
          {/* <InputLabel sx={labelStyles}>
           Name
          </InputLabel>
          <TextField 
            name='name' 
            // onChange={handleChange} 
            // value={inputs.name} 
            variant="filled" 
            color='warning' 
            value={name}
            onChange={(e) => setName(e.target.value)}
          /> */}

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
         
         
          <InputLabel sx={labelStyles}>
            Description
          </InputLabel>



          <TextField
         name='description'
         onChange={handleChange} 
          value={inputs.description} 
         multiline
          rows={10}
          type='text'
          color='warning'
          defaultValue="Default Value"
          variant="filled"
        />
         {/* <textarea 
                  
                    onChange={handleChange} 
                    value={inputs.description} 
                    type="text"
                    // placeholder="Enter your Email"
                     variant="filled"
                /> */}


          <InputLabel sx={labelStyles}>
            Upload Image
          </InputLabel>
          {/* <TextField  name='imageURL' onChange={handleChange} value={inputs.imageURL} margin='auto' variant='outlined'/> */}
          



          <TextField
            name="image"
            type="file"
            variant="standard" 
            color='warning'
            onChange={handleChange} 
          value={inputs.image} 
          />

          <Button sx={{marginTop:2, borderRadius:2}} variant="contained" color="warning"  type='submit'>Submit</Button>
        </Box>
      </form>
    </div>
  )
}
