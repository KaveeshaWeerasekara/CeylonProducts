
import React, {useState} from "react";
import Button from "@mui/material/Button";

import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FileBase from "react-file-base64";
import useStyles from "./FormStyle";




const Form = () => {

  const [postData, setPostData] = useState({
    title: '', category: '', description: '', quantity: '', price: '', handlingTime: '', photo:''

  });
  const classes = useStyles();

  const handleSubmit = () => {

  }

  const clear= () =>{

  }
  const handleChange = () => {

  }

  return(
    
    <Paper className = {classes.paper}>
       <Grid container justifyContent="center">
      <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
     
      <Typography variant="h6">Fill all the fields</Typography>
      <Grid container direction={"column"} spacing={3}>
      <Grid item>
      <TextField
       name="title"
       variant="filled"
       label="Title"
       fullWidth
       value = {postData.title}
       onChange = {(e) => setPostData({ ...postData,title: e.target.value})}
       
       ></TextField>
       </Grid>
       <Grid item>
       <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">category</InputLabel>
  <Select variant="filled"
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={postData.category}
    label="Category"
    onChange={handleChange}
  >
    <MenuItem value={10}>Spices</MenuItem>
    <MenuItem value={20}>Tea</MenuItem>
    <MenuItem value={30}>Coffee</MenuItem>
    <MenuItem value={30}>Handi Crafts</MenuItem>
    <MenuItem value={30}>Home Decors</MenuItem>
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
       onChange = {(e) => setPostData({ ...postData,description: e.target.value})}
       
       ></TextField>
       </Grid>

       <Grid item>
       
       <TextField
       name="quantity"
       variant="filled"
       label="Quantity"
       fullWidth
       value = {postData.quantity}
       onChange = {(e) => setPostData({ ...postData,quantity: e.target.value})}
       
       ></TextField>
       </Grid>

       <Grid item>
       
       <TextField
       name="price"
       variant="filled"
       label="Price"
       fullWidth
       value = {postData.price}
       onChange = {(e) => setPostData({ ...postData,price: e.target.value})}
       
       ></TextField>
       </Grid>
      
       <Grid item>
       
       <TextField
       name="handlingTime"
       variant="filled"
       label="Handling Time"
       fullWidth
       value = {postData.handlingData}
       onChange = {(e) => setPostData({ ...postData,handlingTime: e.target.value})}
       
       ></TextField>
       </Grid>
       

      </Grid>
      
     
     
      <div className= {classes.fileInput}>
        <FileBase
          type="file"
          multiple={false}
          onDone={({base64})=> setPostData({ ...postData, photo:base64})}
          />
          <h6>Insert a Image of the Product</h6>
      </div> 
      <Grid container justifyContent="center">
      <Grid  container justifyContent="center" direction={"column"} spacing={2}>
     <Grid item justify="center">
       
    <Button className={classes.buttonSubmit} variant="contained" color="primary" type="submit">Publish</Button>
     </Grid>
     <Grid item>
     <Button className={classes.buttonSubmit} variant="contained" color="error" onClick={clear}>Cancel</Button>
     </Grid>
      </Grid>
      </Grid>
       </form>
       </Grid>
      
    </Paper>
    
  )
}

export default Form;