const express = require("express");
const router = express.Router();
const { body } = require("express-validator");



// bring the carts controller
const carts = require("../../controllers/carts")

// @route   GET /api/carts/createCart

router.post("/createCart", carts.createCart);


// @route   post /api/carts/getCart

router.get("/getCart", carts.getCart);

module.exports = router;
