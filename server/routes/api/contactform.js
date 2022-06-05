const express = require("express");
const router = express.Router();
const { body } = require("express-validator");


const contact = require("../../controllers/contactform")

router.post("/createcontact", contact.createcontact);

router.get("/getcontact", contact.getcontact);

module.exports = router;