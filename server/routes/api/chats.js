const express = require("express");
const router = express.Router();
const { body } = require("express-validator");



// bring the chats controller
const chats = require("../../controllers/Chats")

// @route   GET /api/chats/createChat

router.post("/createChat", chats.createChat);


// @route   post /api/chats/getChat

router.get("/getChat", chats.getChat);

module.exports = router;