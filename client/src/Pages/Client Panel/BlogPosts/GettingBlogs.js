import { Box, ImageList } from '@mui/material'
import React from 'react'
import Nav from '../../../components/Client Panel/Nav' 
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import {Blog} from './Blog'
import { Header } from './Header';
// import { OneMessage } from './OneMessage';

export default function GettingBlogs() {


    const [blogs,setBlogs]=useState([{
        name:"",
        title:"",
        image:"",
        description:""
    }

    ]);

useEffect(()=>{
    fetch("http://localhost:5000/api/BlogsNewAdd/getBlogs").then(res=>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes =>setBlogs(jsonRes));
  })



  return (
    <div>
        <Nav/>
        <Header/>
        <h1>Ceylon Products</h1>


        <ImageList
  sx={{ width: '100%', height: 450 }}
  variant="quilted"
  cols={4}
  rowHeight={200}
  gap={12}
>
          {blogs.map(blogs => 
          
             <Blog 
             title={blogs.title} 
            description={blogs.description} 
            
            //  image={blogs.image} 
             name={blogs.name}/>
             
             
          )}

         
</ImageList>


    </div>
  )
}

