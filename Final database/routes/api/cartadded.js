const express = require("express");
const router = express.Router();
const { body } = require("express-validator");



// bring the cartadded controller
const cartadded = require("../../controllers/Cartadded")

// @route   GET /cartadded/createCartadded

router.post("/createCartadded", cartadded.createCartadded);


// @route   post /api/cartadded/

router.get("/getCartadded", cartadded.getCartadded);

module.exports = router;