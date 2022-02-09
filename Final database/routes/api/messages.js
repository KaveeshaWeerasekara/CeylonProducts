
const express = require("express");
const router = express.Router();
const { body } = require("express-validator");



// bring the messages controller
const messages = require("../../controllers/messages")

// @route   GET /api/messages/createmessage

router.post("/createmessage", messages.createmessage);


// @route   post /api/messages/getmessage

router.get("/getmessage", messages.getmessage);

module.exports = router;
