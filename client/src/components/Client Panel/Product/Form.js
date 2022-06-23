import React, {useState} from "react";

import axios from "axios";
import Button from "@mui/material/Button";

import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { FormControl, InputLabel, Select, MenuItem} from "@material-ui/core";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FileBase from "react-file-base64";
import useStyles from "./FormStyle";
import {useForm} from "react-hook-form"
import { SliderValueLabelUnstyled } from "@mui/base";





const Form = () => {

  const {register, handleSubmit, formState:{errors}} = useForm();

  const [postData, setPostData] = useState({
    title: '', category: '', description: '', quantity: '', price: '', handlingTime: '', photo:''

  });

  const [selects, setSelects] = useState({
     category: ''

  });

 
  const classes = useStyles();

  function checkValidations (){
    let validated = false
    if(!postData.title){
      alert("title is required")
    }
    else if(!postData.description){
      alert("description is required")

    }
    else if(postData.description.length>50){
      alert("limit the size of description")
    }
    else if(!postData.quantity){
      alert("Quantity is required")
    }
    else if(isNaN(postData.quantity)){
      alert("Quantity should be a number")
    }
    else if(!postData.price){
      alert("price is required")
    }
    
    else if(isNaN(postData.price)){
      alert("Price should be a Number")
    }
    else if(isNaN(postData.handlingTime)){
      alert("Handling time should be a Number")
    }

    else{
      validated=true
      console.log("validated in the function")
      console.log("validated")
    }
    return validated
  }

  const handleSubmits = (event)=> {
    event.preventDefault();
    //form data

    const newData ={
      title: postData.title,
      category: selects.category,
      description: postData.description,
      quantity: postData.quantity,
      price: postData.price,
      handlingTime: postData.handlingTime,
      photo: postData.photo
    }
    if(checkValidations()==true){
      console.log("validated")
    axios.post('http://localhost:5000/api/listings/createListing',newData)

    // const newProduct ={
    //   title: postData.title,
    //   category: selects.category,
    //   description: postData.description,
    //   quantity: postData.quantity,
    //   price: postData.price,
    //   handlingTime: postData.handlingTime,
    //   photo: postData.photo
    // }
    
      axios.post('http://localhost:5000/api/shopProducts/createProduct',newData)}

  }
  const handleClick = (event)=> {
    event.preventDefault();

    const newListing ={
      title: postData.title,
      category: selects.category,
      description: postData.description,
      quantity: postData.quantity,
      price: postData.price,
      handlingTime: postData.handlingTime,
      photo: postData.photo
    }
    
    axios.post('http://localhost:5000/api/listings/createListing',newListing)
 
  }

  const clear= () =>{
    

  }
  const handleChange = (event) => {
    const {name, value} = event.target;

    setPostData(prevPostData => {
      return{
        ...prevPostData,
        [name]:value
      }
    })

  }

  return(
    <>
   
    
    <Paper sx={{backgroundImage:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.shutterstock.com%2Fimage-photo%2Fset-various-spices-bowls-on-260nw-715363177.jpg&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fspice&tbnid=M7U4JVRCZMc6FM&vet=10CEgQMyiFAWoXChMI2N2PtLal-AIVAAAAAB0AAAAAEAI..i&docid=J82jr5K_1CvD9M&w=390&h=280&q=images%20of%20spices&ved=0CEgQMyiFAWoXChMI2N2PtLal-AIVAAAAAB0AAAAAEAI'}} className = {classes.paper} >
       <Grid container justifyContent="center">
      <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmits}>
     
      <Typography variant="h6">Fill all the fields</Typography>
      <Grid container direction={"column"} spacing={3}>
      <Grid item>
      <TextField
       name="title"
       variant="filled"
       label="Title"
       fullWidth
       value = {postData.title}
      //  {...register("title", {required:"Title is required"})}
       onChange = {handleChange}
       
       ></TextField>
       </Grid>
       <Grid item>
       <FormControl fullWidth>
  <InputLabel id="category">category</InputLabel>
      <Select variant="filled"
      LabelId="category"
      id="categorySelect"

      label="Category"
      value={selects.category} onChange={(e)=> setSelects({...selects, category: e.target.value})}>
        <MenuItem></MenuItem>
        <MenuItem>Spices</MenuItem>
        <MenuItem>Tea</MenuItem>
        <MenuItem>Coffee</MenuItem>
        <MenuItem>Handicrafts</MenuItem>
        
       

      </Select>
      
      </FormControl>
</Grid>

      
     

       
       <Grid item>
       
       <TextField
       name="description"
       variant="filled"
       label="Description"
       fullWidth
       value = {postData.description}
       onChange = {handleChange}
       
       ></TextField>
       </Grid>

       <Grid item>
       
       <TextField
       name="quantity"
       variant="filled"
       label="Quantity"
       fullWidth
       value = {postData.quantity}
       onChange = {handleChange}
       
       ></TextField>
       </Grid>

       <Grid item>
       
       <TextField
       name="price"
       variant="filled"
       label="Price"
       fullWidth
       value = {postData.price}
       onChange = {handleChange}
       
       ></TextField>
       </Grid>
      
       <Grid item>
       
       <TextField
       name="handlingTime"
       variant="filled"
       label="Handling Time"
       fullWidth
       value = {postData.handlingData}
       onChange = {handleChange}
       
       ></TextField>
       </Grid>
       <div className= {classes.fileInput}>
        <FileBase
          type="file"
          multiple={false}
          onDone={({base64})=> setPostData({ ...postData, photo:base64})}
          />
          <h6>Insert a Image of the Product</h6>
      </div> 

      </Grid>
      
     
     
      
      <Grid container justifyContent="center">
      <Grid  container justifyContent="center" direction={"row"} spacing={2}>
     <Grid item justify="center">
       
    <Button className={classes.buttonSubmit} variant="contained" color="success" type="submit" >Publish</Button>
     </Grid>
     <Grid item>
     <Button className={classes.buttonSubmit} variant="contained" color="primary" onClick={handleClick}>Save</Button>
     </Grid>
<Grid item>
     <Button className={classes.buttonSubmit} variant="contained" color="error" onClick={clear}>Cancel</Button>
     </Grid>
      </Grid>
      </Grid>
       </form>
       </Grid>
      
    </Paper>
    </>
    
  )
}

export default Form;