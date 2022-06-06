const express = require("express");
const router = express.Router();
const { body } = require("express-validator");



// bring the category controller
const carts = require("../../controllers/category")

// @route   GET /api/carts/createcategory

router.post("/createCategory", carts.createCategory);


// @route   post /api/carts/getCart

router.get("/getCategory", carts.getCategory);

module.exports = router;