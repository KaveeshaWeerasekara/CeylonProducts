import React from 'react'
import {Box, Card, CardContent, CardMedia, Grid, ImageList, ImageListItem, InputAdornment, InputLabel, Link, Paper, TextField, Typography} from '@mui/material'
import Nav from '../../../components/Client Panel/Nav'
import Footer from '../../../components/Client Panel/Footer'
import '../../../sass/HelpCenter/HelpCenter.css'
import GettingMsg from './GettingMsg'
import { SearchIcon } from '@heroicons/react/outline'




const labelStyles={ 
    marginBottom:2,
    marginTop:2,
    fontSize:'24px', 
    fontWeight:'bold',
   
  };

 

export default function HelpCenter() {



  return (
    <div>
        <Nav/>
        

        <br/>
      <h1>Help Center</h1>

  



      <Box 
        //border={3} 
        borderColor="gray" 
        borderRadius={3} 
        backgroundColor='#F87700'
        boxShadow="10px 10px 20px #ccc" 
        padding={3} 
        margin='auto' 
        marginTop={5}
        display='flex'
        flexDirection={'column'}
        width={"80%"}
        height='1100px'
        // position='absolute'

        >
                <h2>Hi,<br/>How can we help?</h2>


     

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
                    <InputLabel sx={labelStyles}>
                       Frequently Asked Questions
                    </InputLabel>
                    {/* asked questions list*/}
                    {/* <div style={{ display: 'inline', float: 'left' }} fontSize='30px'> */}
                    <ol style={{ listStyleType: 'decimal' }} fontSize={30}>
                       <h5> <li>I have not received goods</li></h5>
                        <h5> <li>What can I do?	How to check my refund?</li></h5>
                        <h5> <li>How to open dispute?	How to cancel my order</li></h5>
                        <h5> <li>My order was closed. What can I do?	How to track my package?</li></h5>
                        <h5> <li>The product I received does not match the description. What can I do ?	How do I return goods?</li></h5>
                        <h5> <li>I cannot find order in my account.</li></h5>
                        <h5> <li>	How to contact seller?</li></h5>
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
                        <div className="items2">
                        <a href='/BuyingProcess'> <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://png.pngtree.com/png-vector/20190320/ourlarge/pngtree-vector-add-to-cart-vector-icon-png-image_850574.jpg"
                                    alt="green iguana"
                                />
                            </Card>
                            </a>
                            </div>
                        <div className="items2">
                        <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://png.pngtree.com/png-vector/20190412/ourlarge/pngtree-vector-buying-icon-png-image_931084.jpg"
                                    alt="green iguana"
                                />
                            </Card>
                        </div>
                        <div className="items2"> 
                        <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://cdn-icons-png.flaticon.com/512/4472/4472457.png"
                                    alt="green iguana"
                                />
                            </Card>
                        </div>
                        <div className="items2"> 
                        <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTll9VP1Mhk-_NLAQZV-T9T5bBaiNVs6WNg0fdybLb2orHAuEbFhy8S11pX5KE7xCro7ZI&usqp=CAU"
                                    alt="green iguana"
                                />
                            </Card>
                        </div>
                        <div className="items2"> 
                      <a href='/RequestRefund'>  <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://cdn4.iconfinder.com/data/icons/logistics-and-delivery-vol-2/64/easy-returns-512.png"
                                    alt="refund"
                                />
                            </Card>
                            </a>
                        </div>
                        <div className="items2">
                        <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://www.pngmart.com/files/7/Cyber-Security-PNG-Transparent-Picture.png"
                                    alt="green iguana"
                                />
                            </Card>
                        </div>
                    </div>
                    <br></br>
                    <h2 align='center'>--Popular Solutions--</h2>
                    </Box>
        </div>
      </div>
         <hr  />  
         <h3 align='center'>Need more help</h3>  
         <hr  />   

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
                    width="692px"
                    height='241px'
                    // position='absolute'
                >
                    {/* <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                    component="img"
                    height="194"
                    image="https://c4.wallpaperflare.com/wallpaper/145/251/761/spices-food-world-wallpaper-preview.jpg"
                    alt="Paella dish"
                  />
                  </Card> */}
                   <Card sx={{ display: 'flex' }}>
    <a href='/ContactUs'>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" >
          <h1> Contact <br/>"Ceylon Products"....!!!</h1>
          </Typography>
         
        </CardContent>
        </a>
       
     
        <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                    component="img"
                    height="194"
                    image="https://media.istockphoto.com/photos/spectacular-view-of-the-lion-rock-surrounded-by-green-rich-vegetation-picture-id1288609237?b=1&k=20&m=1288609237&s=170667a&w=0&h=GXB2XXYB_PY7qa6gtTQHcjZnZWYI4D1VDna7Ipq2f4k="
                    alt="Paella dish"
                  />
                  </Card>
             </Card>
        </Box>        
  </Box>
         
<br/>
<br/>
        <Footer/>
        
    </div>
  )
}
