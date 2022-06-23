
const express = require("express");
const router = express.Router();
const { body } = require("express-validator");



// bring the messages controller
const returnProducts = require("../../controllers/returnProduct")

// @route   GET /api/messages/createmessage

router.post("/createReturnProducts", returnProducts.createReturnProduct);


// @route   post /api/messages/getmessage

router.get("/getReturnProducts", returnProducts.getReturnProduct);

module.exports = router;
