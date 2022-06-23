const express = require("express");
const router = express.Router();
const { body } = require("express-validator");



// bring the products controller
const Products = require("../../controllers/shopProducts")

// @route   GET /api/products/createproduct

router.post("/createProduct", Products.createProducts);


// @route   post /api/products/getproduct

router.get("/getProduct", Products.getProducts);



module.exports = router;