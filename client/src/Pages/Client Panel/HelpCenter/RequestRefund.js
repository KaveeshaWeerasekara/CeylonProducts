import { Box } from '@mui/material'
import React from 'react'
import Nav from '../../../components/Client Panel/Nav' 
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from '@mui/material';
import { margin } from '@mui/system';
// import { OneMessage } from './OneMessage';

export default function RequestRefund() {


//     const [contact,setContact]=useState([{
//         name:"",
//         email:"",
//         message:""
//     }

//     ]);


   



// useEffect(()=>{
//     fetch("http://localhost:5000/api/contactform/getcontact").then(res=>{
//       if(res.ok){
//         return res.json()
//       }
//     }).then(jsonRes =>setContact(jsonRes));
//   })



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
        height='600px'
        // position='absolute'

        >
                <h2>Request Refund</h2>


     

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
                    height='300px'
                    // position='absolute'

                >
                    
                  <p>If you encounter any issues,
                     we encourage you to contact the seller first. If you can't reach an agreement, 
                     you can apply for a refund by opening a dispute.</p>
                     <br/>
                     <br/>
                     <a href='/ReportType'>  <Button variant="contained"  sx={{margin:1,borderRadius:1, width:'200px',color:'black', margin:'auto'}}  >Open Dispute</Button></a>
               
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
                    height='300px'
                    // position='absolute'

                >
                    {/* <div className="container2"> */}
                        <p>If you think that a seller (or a buyer) has violated AliExpress trading rules,
                             you have the ability to send report to our team for review. This will help us to make 
                             sure we provide you a safety shopping experience.</p>
                             <br/>
                             <br/>
                           <a href='/ReportType'>  <Button variant="contained"  sx={{margin:1,borderRadius:1, width:'200px',color:'black', margin:'center'}}  >Submit a Report</Button></a>
                    {/* </div> */}
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

