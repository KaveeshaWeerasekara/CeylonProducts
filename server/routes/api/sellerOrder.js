const express = require("express");
const router = express.Router();
const { body } = require("express-validator");



// bring the products controller
const Orders = require("../../controllers/sellerOrder");


// @route   GET /api/products/createproduct

router.post("/createOrder", Orders.createOrder);


// @route   post /api/products/getproduct

router.get("/getOrder", Orders.getOrders);

module.exports = router;