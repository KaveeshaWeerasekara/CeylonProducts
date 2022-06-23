const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { Product } = require("../../models/shopProducts");



// bring the products controller
const Products = require("../../controllers/shopProducts")

// @route   GET /api/products/createproduct

router.post("/createProduct", Products.createProducts);


// @route   post /api/products/getproduct

router.get("/getProduct", Products.getProducts);

// @route   post /api/products/getproductsById


router.get("/findOne/:id", Products.findOne)

// router.get("/getProductByid",(req,res) =>{
//     let type = req.query.type
//     let productIds =req.query.productIds

//     if(type === "array"){}
//     Product.find({'_id':{$in : productIds}})
//     .exec((err,Product) => {
//         if(err) return req.status(400).send(err)
//         return res.status(200).send(Product)
//     })
// });

module.exports = router;