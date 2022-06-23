import React from 'react'
import {Card,CardHeader,Avatar,CardMedia,CardContent,Typography} from "@mui/material";

export const Blog = ({title,description,image,username,name}) => {
  return (
    <div>
        <Card sx={{ 
            maxWidth: 345 , 
            margin:'left', 
            padding:2, 
            boxShadow:"5px 5px 10px #ccc",
             ":hover:":{
                    boxShadow:"10px 10px 20px #ccc",
             },
              }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            {/* {name}
           {username} */}
          </Avatar>
        }
        
        title={title}
        subheader={name}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        //alt="Paella dish"
      />
    
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          
          {description}
        
        </Typography>
      </CardContent>
    </Card>
    </div>
  )
}
