import React, {useEffect, useState} from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid,DataGrid , Item, AppBar, Container} from '@material-ui/core/';
import axios from "axios";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useParams } from "react-router-dom";

import useStyles from './productStyles';
import Nav from '../Nav'


const ProductView = () => {

  
const classes = useStyles();

/*const deleteListings = (id) =>{
  
  axios.delete(`http://localhost:5000/api/listings/deleteListings/${id}`);
    

}*/

const deleteListings = async (id) => {
  return await axios.delete(`http://localhost:5000/api/listings/deleteListings/${id}`);
}


const deleteListingsData = async (id) => {
  await deleteListings(id);



}

  const[listings, setListings] = useState([{
    title:'',
    category:'',
    description:'',
    quantity:'',
    price:'',
    handlingTime:'',
    photo:''
  }])

  useEffect(()=>{
    fetch("http://localhost:5000/api/listings/getListing").then(res=>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes =>setListings(jsonRes));
  })
 
  
  return<div >
  <Nav />
  <div style={{ 
    backgroundImage: `url("https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.ofi.com%2Fcontent%2Fdam%2Folamofi%2Fproducts-and-ingredients%2Fspices%2Fspices-images%2Fspices-ofi-pr.jpg&imgrefurl=https%3A%2F%2Fwww.ofi.com%2Fproducts-and-ingredients%2Fspices.html&tbnid=08OnS6UiTJacPM&vet=10CI0BEDMo9AJqFwoTCNDdk-z0nPgCFQAAAAAdAAAAABAE..i&docid=68hkqp85rXG8KM&w=960&h=540&q=images%20of%20Spices&ved=0CI0BEDMo9AJqFwoTCNDdk-z0nPgCFQAAAAAdAAAAABAE")` }}>
  <AppBar className={classes.appBar} position = "static" color="black" >
            <Typography variant= "h5" align="left" >Manage Your Listings Here</Typography>
        </AppBar>

       
  <Grid container direction={"row"} spacing={3} >
      {listings.map(listings=>
  

   <Grid item className ={classes.oneCard}>
  <Card className={classes.card}>
  <Typography className={classes.titleColor} variant="h6" component="h2" >{listings.title}</Typography>
   
   <div className={classes.myDiv}>
  
   <img className = {classes.image} width="250px" height="100px" src={listings.photo}></img>
   </div>
   <div className={classes.myDiv2}>
  
   <Typography  variant="h5" component="h2">{listings.title}</Typography>
   
     <Typography variant="body2" color="textSecondary" component="p">{listings.description}</Typography>
     
     <Typography className={classes.price} variant="subtitile1"  component="p">{listings.price}</Typography>
    
      </div>
     
      <CardActions className={classes.cardActions}>
      
        <Button variant="contained" size="small" color="secondary" onClick={()=>deleteListingsData(listings._id)}><DeleteIcon fontSize="small" />Delete </Button>
        <Button variant="contained" size="small" color="primary" > <EditIcon fontSize="small" />Edit</Button>
        <Button variant="contained" size="small" color="Success" > Publish</Button>
        
      </CardActions>
     
   
     </Card> 
     
 </Grid>
  // <Grid item xs={8}>
  //   <div>xs=8</div>
  // </Grid>
  // <Grid item xs={4}>
  //   <div>xs=4</div>
  // </Grid>
  // <Grid item xs={4}>
  //   <div>xs=4</div>
  // </Grid>
  // <Grid item xs={8}>
  //   <div>xs=8</div>
  // </Grid>
  )}
 </Grid>
</div>

</div>
  
 
};

export default ProductView;