import { Box } from '@mui/material'
import React from 'react'
import Nav from '../../../components/Client Panel/Nav' 
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
// import { OneMessage } from './OneMessage';

export default function GettingMsg() {


    const [contact,setContact]=useState([{
        name:"",
        email:"",
        message:""
    }

    ]);


 



useEffect(()=>{
    fetch("http://localhost:5000/api/contactform/getcontact").then(res=>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes =>setContact(jsonRes));
  })



  return (
    <div>
        <Nav/>
        <h1>Ceylon Products</h1>


        <Box
        //border={3} 
        borderColor="gray" 
        borderRadius={3} 
        backgroundColor='#E5E5E5'
        boxShadow="10px 10px 20px #ccc" 
        padding={3} 
        margin='auto' 
        marginTop={5}
        display='flex'
        flexDirection={'column'}
        width={"80%"}
        height='800px'
        // position='absolute'

        >
                <h2>Here we have <br/>Frequently asked questions</h2>


     

<div className=" grid grid-flow-row grid-cols-2 grid-rows-1">
        <div className=" col-start-1">
        <Box 
        //border={3} 
                    borderColor="gray" 
                    borderRadius={3} 
                    backgroundColor='#fff'
                    // boxShadow="10px 10px 10px #ccc" 
                    padding={3} 
                    margin='auto' 
                    marginTop={5}
                    display='flex'
                    flexDirection={'column'}
                    width="550px"
                    height='471px'
                    // position='absolute'

                >
                    
                    {/* asked questions list*/}
                    {/* <div style={{ display: 'inline', float: 'left' }} fontSize='30px'> */}
                    <ol style={{ listStyleType: 'decimal' }} fontSize={30}>
                       <h5> 
                        
                        
                  {  contact.map((contact=>
                         
                         <li> {contact.message}</li>
                          
                         
                        )) }
                                            
                        </h5>
                       
                    </ol>
                    {/* </div> */}

                   <a href="/GettingMsg"><h4>more questions--</h4></a> 

                    </Box>
        </div>
        <div className=" col-start-2 ">
        <Box 
        //border={3} 
                    borderColor="gray" 
                    borderRadius={3} 
                    backgroundColor='#fff'
                    // boxShadow="10px 10px 10px #ccc" 
                    padding={3} 
                    margin='auto' 
                    marginTop={5}
                    display='flex'
                    flexDirection={'column'}
                    width="550px"
                    height='471px'
                    // position='absolute'

                >
                    <div className="container2">
                        
                    </div>
                    <br></br>
                   
                    </Box>
        </div>
      </div>
         <hr  />  
        
         <hr  />   

         
  </Box>








    </div>
  )
}

