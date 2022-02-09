const express = require("express");
const router = express.Router();
const { body } = require("express-validator");


// bring the payments controller
const paymentsdata = require("../../controllers/Payments")

// @route   GET /api/payments

router.post("/createPayments", paymentsdata.createPayment);


// @route   GET /api/payments

router.get("/getPayments", paymentsdata.getPayments);

module.exports = router;
