import React from 'react'
import{ Container, AppBar, Typography, Paper, Grow, Grid} from "@material-ui/core";
import Sidebar from '../../../components/Client Panel/Product/Sidebar'
import Form from '../../../components/Client Panel/Product/Form'
import Nav from '../../../components/Client Panel/Nav'
import useStyles from './FormStyle'
export default function Formview() {
    const classes = useStyles();
  return (
    <Container maxwidth="lg">
        < Nav />
        <AppBar className={classes.appBar} position = "static" color="black" >
            <Typography variant= "h5" align="left" >Create Your Listing</Typography>
        </AppBar>
       
        <Form />
        
       
        
       
    </Container>
  )
}