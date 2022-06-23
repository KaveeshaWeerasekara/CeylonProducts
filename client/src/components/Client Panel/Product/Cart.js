import React, {useEffect, useState} from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid,DataGrid , Item, AppBar, Container} from '@material-ui/core/';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {Link} from 'react-router-dom'
import { useParams } from "react-router-dom";

import useStyles from './cartStyles';
import Nav from '../Nav'


const Cart = () => {

  
const classes = useStyles();



const deleteCartItem= async (id) => {
  return await axios.delete(`http://localhost:5000/api/carts/deleteCartItem/${id}`);
}


const deleteCartItemData = async (id) => {
  await deleteCartItem(id);



}



  const[cartItems, setCarts] = useState([{
     id:'',
     title:'',
     category:'',
     price:'',
     photo:'',
    
  }])

  useEffect(()=>{
    fetch("http://localhost:5000/api/carts/getCart").then(res=>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes =>setCarts(jsonRes));
  })
 
  
  return (
    <>
    <p>{cartItems.length}</p>
    <Paper className={classes.paper}>
      <div className = {classes.cartDiv}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell align="right">Item</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Delete Item</TableCell>
            <TableCell align="right">CheckOut</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((row) => (

            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img width = "30px" height = "30px" src = {row.photo}></img>
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right"><Button variant="contained" size="small" color="secondary"  onClick={()=>deleteCartItemData(row._id)}><DeleteIcon fontSize="small" /> </Button></TableCell>
              <TableCell align="right"><Button variant="contained" size="small" color="success"  >CheckOut </Button></TableCell>
             
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
   
    </TableContainer>
    </div>
    </Paper>
    </>
  );


};

export default Cart;