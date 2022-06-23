import React, { useState } from 'react';
import {AppBar, Button, Toolbar, Typography,Box, Tabs,Tab} from '@mui/material'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//import { authActions } from '../store';
// import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../../sass/Blog/Blog.css';

// const styles = {
//     tab: {
       
//         color: 'white'
//     }
// }

export const Header = () => {

    const dispath=useDispatch();

    const isLoggedIn=useSelector((state)=>state.isLoggedIn);

    const [value,setValue]=useState();
  return (
     <div>
        {/* <MainContainer2><h1>Welcome To <br/>The Blog...</h1></MainContainer2> */}

<AppBar position='sticky' sx={{background:'black' }}>
        <Toolbar>
            <Typography variant='h4' >Blogs</Typography>
           {/* { isLoggedIn && */}
            <Box  display='flex' marginLeft={'auto'} marginRight={'auto'} >
                <Tabs textColor='inherit' value={value} onChange={(e,value)=>setValue(value)} >
                    <Tab LinkComponent={Link} to="/Allblogs" label="All Blogs"  />
                    <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs" />
                    <Tab LinkComponent={Link} to="/blogs/add" label="Add Blogs" />
                    {/* <Tab LinkComponent={Link} to="/blogs/add" label="Add Articles" /> */}
                </Tabs>
               
            </Box>
            {/* } */}
            <Box display="flex" marginLeft='auto'>
                
                {/* { !isLoggedIn && <> */}
                 <Button 
                    LinkComponent={Link} to="/login"
                    variant='contained' sx={{margin:1,borderRadius:10}} 
                    color='warning'>
                    Login
                </Button>

                <Button 
                    LinkComponent={Link} to="/login"
                    variant='contained' sx={{margin:1,borderRadius:10}} 
                    color='warning'>
                    Signup
                </Button> 
                {/* </> */}
                {/* } */}

            {/* {  isLoggedIn && (  */}
            <Button 
                    // onClick={()=>dispath(authActions.logout())}
                    LinkComponent={Link} to="/login"
                    variant='contained' sx={{margin:1,borderRadius:10}} 
                    color='warning'>
                    Logout
                </Button>
                {/* )} */}

            </Box>
        </Toolbar>
    </AppBar>
      </div>
  )
};


// const MainContainer2=styled.header`
//     background:url(../../assests/blogHeader.jpg)no-repeat center/cover;
//     height:25rem;

//     h1{
//         transform:translate(50%,50%);
//         color:#fff;
//         font-weight:900;
//         position:absolute;
//         top:25%
//         left:50%
    
//     }
// `;
