const express = require("express");
const router = express.Router();
const { body } = require("express-validator");



// bring the products controller
const products = require("../../controllers/products")

// @route   GET /api/products/createproduct

router.post("/createproduct", products.createproduct);


// @route   post /api/products/getproduct

router.get("/getproduct", products.getproduct);

module.exports = router;
