const express = require("express");
const router = express.Router();
const { body } = require("express-validator");



// bring the carts controller
const carts = require("../../controllers/carts")

// @route   GET /api/carts/createCart
router.post("/createCart", carts.createCart);

router.get("/getCart", carts.getCart);

router.delete(`/deleteCartItem/:id`, carts.deleteCartItem);


module.exports = router;
