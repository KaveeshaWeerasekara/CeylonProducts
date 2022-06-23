import { Box, CardMedia } from '@mui/material'
import React from 'react'
import Nav from '../../../components/Client Panel/Nav'

const BuyingProcess = () => {
  return (
    <div>
        <Nav/>
        <h1>Ceylon Products</h1>
        <h2>Basic Solutions regading buying...</h2>




        <Box 
        //border={3} 
                    borderColor="gray" 
                    borderRadius={2} 
                    backgroundColor='#E5E5E5'
                    // boxShadow="10px 10px 10px #ccc" 
                    padding={3} 
                    margin='left' 
                    marginTop={5}
                    display='auto'
                    flexDirection={'column'}
                    width="1500px"
                    height='980px'
                    // position='absolute'

                >
                     <div className=" grid grid-flow-row grid-cols-2 grid-rows-1">
        <div className=" col-start-1">
         <Box 
        //border={3} 
                    borderColor="gray" 
                    borderRadius={3} 
                    backgroundColor='#E5E5E5'
                    // boxShadow="10px 10px 10px #ccc" 
                    padding={3} 
                    margin='left' 
                    marginTop={5}
                    display='flex'
                    flexDirection={'column'}
                    width="550px"
                    height='450px'
                    // position='absolute'

                >
                    <img src='https://cdn.dribbble.com/users/69417/screenshots/3816920/dribbble_tele2.gif'></img>

                </Box>
            </div>



            <div className=" col-start-2">

            <Box 
        //border={3} 
                    borderColor="gray" 
                    borderRadius={3} 
                    backgroundColor='#E5E5E5'
                    // boxShadow="10px 10px 10px #ccc" 
                    padding={3} 
                    margin='left' 
                    marginTop={5}
                    display='flex'
                    flexDirection={'column'}
                    width="550px"
                    height='450px'
                    // position='absolute'

                >
                    <h5>1.How to customize products</h5>
                    <p>From concert tickets to washing machines, groceries to holidays, there’s bound to be a website that sells just what you want. If there’s a particular brand or store you like, you can go straight to their website or you can visit a shopping website such as eBay or Amazon, which carry broad ranges of new and second-hand items. If you’re a bargain hunter, you can use a price comparison site such as moneysupermarket.com, which lists the websites that sell your product according to price

In this guide, we’re going to show you how to find a product online and make a transaction.

You’ll need:

a computer with an internet connection
a credit or debit card.
Follow these step-by-step instructions to learn how to buy online

Step 1: Search for a product using Google shopping

Type the name of the item you want to buy into the search box of a search engine such as Google </p>
                </Box>
                </div>
                
            </div>
            <h5>2.Quality of the product</h5>
                <p>From concert tickets to washing machines, groceries to holidays,there’s bound to be a website that sells just what you want. If there’s a particular brand or store you like, you can go straight to their website or you can visit a shopping website such as eBay or Amazon, which carry broad ranges of new and second-hand items. If you’re a bargain hunter, you can use a price comparison site such as moneysupermarket.com, which lists the websites that sell your product according to price In this guide, we’re going to show you how to find a product online and make a transaction. You’ll need: a computer with an internet connection a credit or debit card. Follow these step-by-step instructions to learn how to buy online Step 1: Search for a product using Google shopping Type 
                    the name of the item you want to buy into the search box of a search engine such as Google</p>
                </Box>
       




            
    </div>
  )
}

export default BuyingProcess