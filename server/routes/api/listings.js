const express = require("express");
const router = express.Router();
const { body } = require("express-validator");



// bring the products controller
const Listings = require("../../controllers/listings")

// @route   GET /api/products/createproduct

router.post("/createListing", Listings.createListings);


// @route   post /api/products/getproduct

router.get("/getListing", Listings.getListings);

// @route   post /api/products/getproduct

router.delete(`/deleteListings/:id`, Listings.deleteListings);

// @route   post /api/products/getproduct

router.put("/updateListing/:id", Listings.updateListing);

module.exports = router;