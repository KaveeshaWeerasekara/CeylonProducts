import React, {useEffect, useState} from "react";
import { Card,TextField, CardActions, CardContent, CardMedia, Button, Typography, Grid,DataGrid , Item, AppBar, Container} from '@material-ui/core/';
import axios from "axios";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom'
import { useParams } from "react-router-dom";
import Image from '../../../assets/Image.jpg'
import Masks from '../../../assets/Masks.jpg'
import InputAdornment from '@mui/material/InputAdornment';
import Handis from '../../../assets/Handis.jpg'

import useStyles from './productStyles';
import Nav from '../Nav'


const Shop = () => {

  
const classes = useStyles();









  const [query, setQuery] = useState("")
  const[products, setProducts] = useState([{
    title:'',
    category:'',
    description:'',
    quantity:'',
    price:'',
    handlingTime:'',
    photo:''
  }])

  useEffect(()=>{
    fetch("http://localhost:5000/api/shopProducts/getProduct").then(res=>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes =>setProducts(jsonRes));
  })
 
  
  return<div >
  <Nav />
  <div style={{ 
    backgroundImage: `url("https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.ofi.com%2Fcontent%2Fdam%2Folamofi%2Fproducts-and-ingredients%2Fspices%2Fspices-images%2Fspices-ofi-pr.jpg&imgrefurl=https%3A%2F%2Fwww.ofi.com%2Fproducts-and-ingredients%2Fspices.html&tbnid=08OnS6UiTJacPM&vet=10CI0BEDMo9AJqFwoTCNDdk-z0nPgCFQAAAAAdAAAAABAE..i&docid=68hkqp85rXG8KM&w=960&h=540&q=images%20of%20Spices&ved=0CI0BEDMo9AJqFwoTCNDdk-z0nPgCFQAAAAAdAAAAABAE")` }}>
  
  <div className={classes.myDiv6}>
  <img className = {classes.image2}  src={Masks}></img>
  <img className = {classes.image1}  src={Image}></img>
  <img className = {classes.image2}  src={Handis}></img>
  </div>
  <div className={classes.myDiv8}></div>
  <div className={classes.myDiv7}>
  <TextField className={classes.searchText}
      
       variant="outlined"
       label="Search Products"
       //placeholder="Search here to find products"
       Width ="30%"
      onChange = {event => setQuery(event.target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
  ></TextField>
  

  </div>
  </div>
       
  <Grid container direction={"row"} spacing={3} >
    
 {products.filter(products => {
  if(query===""){

    return products;
      }else if (products.title.toLowerCase().includes(query.toLowerCase())) {
          //returns filtered array
          return products;
        }

       })
      .map(products=>
      
  

   <Grid item className ={classes.oneCard}>
  <Card className={classes.card1}>

   
   <div className={classes.myDiv5}>
  
   <img className = {classes.image} width="250px" height="100px" src={products.photo}></img>
   </div>
 
   <div className={classes.myDiv9}>
   <div className={classes.myDiv11}>
  
   <Typography className={classes.titleColor1} align= 'center' variant="h5" component="h2">{products.title}</Typography>
   
   
     
     <Typography className={classes.titleColor2} align='center' variant="subtitile1"  component="p">{products.price}</Typography>
     </div>
     
     <div className={classes.myDiv10}>
     <CardActions className={classes.cardActions}>

     <Button     style={{ backgroundColor: '#c96838', borderRadius: 35,}} variant="contained" size="small" color="#000000"  ><ShoppingCartIcon fontSize="small" />Add to Cart </Button>
     <Link to = {`/ProductDetail/${products._id}`}><Button     style={{ borderRadius: 35,}} variant="contained" size="small" color="primary"  >View Product </Button></Link>

     </CardActions>
     </div>
     
      </div>
      
     
     
     
   
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



  
 
};

export default Shop;