import { Box } from '@mui/material'
import React from 'react'
import Nav from '../../../components/Client Panel/Nav' 
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from '@mui/material';
import { margin } from '@mui/system';
// import { OneMessage } from './OneMessage';

export default function ReportType() {




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
                <h2>Report Type</h2>


     

<div className=" grid grid-flow-row grid-cols-3 grid-rows-1">
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
                    width="340px"
                    height='350px'
                    // position='absolute'

                >
                    
                  <p><h6>Intellectual Property Complaint (For Rights Holders)</h6>

If you are intellectual property rights holders, including copyright (pictures, artworks, etc.), 
portrait rights, trademark rights, and believe that the product infringes on your rights, please
 submit complaints on IPP Platform.</p>
                     
                     <br/>
                     <Button variant="contained"  sx={{margin:1,borderRadius:1, width:'200px',color:'black', margin:'auto'}}  >Submit a report</Button>
               
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
                    width="340px"
                    height='350px'
                    // position='absolute'

                >
                    {/* <div className="container2"> */}
                        <p><h6>Report (For Non-Rights Holders)</h6>
                        <br/>

If you are not the owner of the intellectual property
 rights but would like to report a case of a party infringing on another trademark, 
 please click on the button below to file a complaint.</p>
                             <br/>
                             <br/>
                         <a href='/ReturnProduct'>   <Button variant="contained"  sx={{margin:1,borderRadius:1, width:'200px',color:'black', margin:'auto'}}  >
                            Submit a Report
                            </Button>
                        </a> 
                    {/* </div> */}
                    <br></br>
                   
                    </Box>
        </div>
        <div className=" col-start-3 ">
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
                    width="340px"
                    height='350px'
                    // position='absolute'

                >
                    {/* <div className="container2"> */}
                        <p><h6>Restricted or Prohibited Products</h6>
                        <br/>

The seller has listed products that are restricted, prohibited or not suitable for delivery.

Product Safety or Compliance.</p>
                             <br/>
                             <br/>
                             <br/>
                             <br/>
                            
                             <Button variant="contained"  sx={{margin:1,borderRadius:1, width:'200px',color:'black', margin:'auto'}}  >Submit a Report</Button>
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

