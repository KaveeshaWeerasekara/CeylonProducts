const express = require("express");

const getListings = require("../../controllers/listings.js");
const createListings = require("../../controllers/listings.js")

const router = express.Router();

router.get('/', getListings);
router.post('/', createListings);




module.exports = router;