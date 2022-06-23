import React, { useEffect, useState } from 'react'
import axios from 'axios'; 
// import Image from './backImage';
import {Blog} from './Blog'
import { Box } from '@mui/system';
//import { Grid } from '@mui/x-data-grid';
import {Grid,Paper} from '@mui/material'
import { Header } from './Header';
import {ImageList} from '@mui/material'

export default function Blogs(){

  const [blogs,setBlogs]=useState();

      
      const sendRequest=async()=>{
        const res= await axios
        .get("http://localhost:5000/api/blogRoutes/")
        .catch((err)=>console.log(err));
        const data=await res.data;
        return data;
      }

  useEffect(()=>{
    sendRequest().then((data)=>setBlogs(data.blogs));
  },[]);
  console.log(blogs);

 

/* <div>
      
      { blogs && blogs.map((blog,index)=>(
          <Blog/>
      )) }
      
    </div> */


//     return(<div>
// <Box display='flex' flexDirection='raw' padding={1}>
// { blogs && blogs.map((blog,index)=>(
//           <Blog title={blog.title} description={blog.description} 
//           imageURL={blog.imageURL} userName={blog.userName}/>
//       )) }
// </Box>

// </div>)


return (
<>
  <header>
    <Header/>
  </header>
  <ImageList
  sx={{ width: '100%', height: 450 }}
  variant="quilted"
  cols={4}
  rowHeight={200}
  gap={12}
>
          {blogs && blogs.map((blog,index) => (
             <Blog 
             title={blog.title} 
            description={blog.description} 
             image={blog.image} 
             username={blog.user.name}/>
          ))}
</ImageList>
    
      </>
      )
    
    
 
   

  
}

 //default Blogs;
