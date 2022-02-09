const express = require("express");
const router = express.Router();
const { body } = require("express-validator");



// bring the Wishlist controller
const wishlists = require("../../controllers/Wishlist")

// @route   GET /api/wishlist/createWishlist

router.post("/createWishlist", wishlists.createWishlist);


// @route   post /api/Wishlist/getWishlist

router.get("/getWishlist", wishlists.getWishlist);

module.exports = router;