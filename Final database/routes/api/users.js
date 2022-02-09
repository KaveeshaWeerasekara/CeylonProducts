const express = require("express");
const router = express.Router();
const { body } = require("express-validator");



// bring the users controller
const users = require("../../controllers/users")

// @route   GET /api/users/createuser

router.post("/createuser", users.createuser);


// @route   post /api/users/getuser

router.get("/getuser", users.getuser);

module.exports = router;
