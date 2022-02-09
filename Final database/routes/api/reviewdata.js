const express = require("express");
const router = express.Router();
const { body } = require("express-validator");


// bring the Reviews controller
const reviewdata = require("../../controllers/Reviews")

// @route   GET /api/Reviews

router.post("/createReviews", reviewdata.createReview);


// @route   GET /api/Reviews

router.get("/getReviews", reviewdata.getReviews);

module.exports = router;
