
import React, { useState } from "react";

import axios from "axios";
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
import useStyles from "./BuynowStyles";





const Buynow = () => {

    const [postData, setPostData] = useState({
        firstName: '', mobileNo: '', lastName: '', StreetNo: '', City: '', postalCode: '', Country: '', quantity: ''

    });




    const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault();
        //form data

        const newData = {
            firstName: postData.firstName,
            lastName: postData.lastName,
            mobileNo: postData.mobileNo,
            StreetNo: postData.StreetNo,
            City: postData.City,
            posatalCode: postData.posatalCode,
            Country: postData.Country,
            quantity: postData.quantity
        }

        axios.post('http://localhost:5000/api/sellerOrder/createOrder', newData)

        // const newProduct ={
        //   title: postData.title,
        //   category: selects.category,
        //   description: postData.description,
        //   quantity: postData.quantity,
        //   price: postData.price,
        //   handlingTime: postData.handlingTime,
        //   photo: postData.photo
        // }

        //axios.post('http://localhost:5000/api/shopProducts/createProduct', newData)

    }
    const handleClick = (event) => {
        event.preventDefault();

        const newOrder = {
            firstName: postData.firstName,
            lastName: postData.lastName,
            mobileNo: postData.mobileNo,
            StreetNo: postData.StreetNo,
            City: postData.City,
            postalCode: postData.postalCode,
            Country: postData.Country,
            quantity: postData.quantity
        }

        axios.post('http://localhost:5000/api/sellerOrder/createOrder', newOrder)

    }

    const clear = () => {


    }
    const handleChange = (event) => {
        const { name, value } = event.target;

        setPostData(prevPostData => {
            return {
                ...prevPostData,
                [name]: value
            }
        })

    }

    return (
        <>


            <Paper sx={{ backgroundImage: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.shutterstock.com%2Fimage-photo%2Fset-various-spices-bowls-on-260nw-715363177.jpg&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fspice&tbnid=M7U4JVRCZMc6FM&vet=10CEgQMyiFAWoXChMI2N2PtLal-AIVAAAAAB0AAAAAEAI..i&docid=J82jr5K_1CvD9M&w=390&h=280&q=images%20of%20spices&ved=0CEgQMyiFAWoXChMI2N2PtLal-AIVAAAAAB0AAAAAEAI' }} className={classes.paper} >
                <Grid container justifyContent="center">
                    <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>

                        <Typography variant="h6">Fill all the fields</Typography>
                        <Grid container direction={"column"} spacing={3}>
                            <Grid item>
                                <TextField
                                    name="firstName"
                                    variant="filled"
                                    label="FirstName"
                                    fullWidth
                                    value={postData.firstName}
                                    onChange={handleChange}

                                ></TextField>
                            </Grid>


                            <Grid item>

                                <TextField
                                    name="lastName"
                                    variant="filled"
                                    label="LastName"
                                    fullWidth
                                    value={postData.lastName}
                                    onChange={handleChange}

                                ></TextField>
                            </Grid>


                            <Grid item>

                                <TextField
                                    name="mobileNo"
                                    variant="filled"
                                    label="mobileNo"
                                    fullWidth
                                    value={postData.mobileNo}
                                    onChange={handleChange}

                                ></TextField>
                            </Grid>

                            <Grid item>

                                <TextField
                                    name="StreetNo"
                                    variant="filled"
                                    label="StreetNo"
                                    fullWidth
                                    value={postData.StreetNo}
                                    onChange={handleChange}

                                ></TextField>
                            </Grid>

                            <Grid item>

                                <TextField
                                    name="City"
                                    variant="filled"
                                    label="City"
                                    fullWidth
                                    value={postData.City}
                                    onChange={handleChange}

                                ></TextField>
                            </Grid>

                            <Grid item>

                                <TextField
                                    name="postalCode"
                                    variant="filled"
                                    label="PostalCode"
                                    fullWidth
                                    value={postData.postalCode}
                                    onChange={handleChange}

                                ></TextField>
                            </Grid>

                            <Grid item>

                                <TextField
                                    name="Country"
                                    variant="filled"
                                    label="Country"
                                    fullWidth
                                    value={postData.Country}
                                    onChange={handleChange}

                                ></TextField>
                            </Grid>

                            <Grid item>

                                <TextField
                                    name="quantity"
                                    variant="filled"
                                    label="quantity"
                                    fullWidth
                                    value={postData.quantity}
                                    onChange={handleChange}

                                ></TextField>
                            </Grid>

                        </Grid>




                        <Grid container justifyContent="center">
                            <Grid container justifyContent="center" direction={"row"} spacing={2}>
                                {/* <Grid item justify="center">

                                    <Button className={classes.buttonSubmit} variant="contained" color="success" type="submit" >Publish</Button>
                                </Grid> */}
                                <Grid item>
                                    <Button className={classes.buttonSubmit} variant="contained" color="primary" onClick={handleClick}>Submit your shipping details</Button>
                                </Grid>
                                {/* <Grid item>
                                    <Button className={classes.buttonSubmit} variant="contained" color="error" onClick={clear}>Cancel</Button>
                                </Grid> */}
                            </Grid>
                        </Grid>
                    </form>
                </Grid>

            </Paper>
        </>

    )
}

export default Buynow;