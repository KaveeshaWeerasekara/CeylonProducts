
const express = require("express");
const router = express.Router();
const { body } = require("express-validator");



// bring the messages controller
const Blogs = require("../../controllers/Blogs")

// @route   GET /api/messages/createmessage

router.post("/createBlogs", Blogs.createBlogsAdd);


// @route   post /api/messages/getmessage

router.get("/getBlogs", Blogs.getBlogsAdd);

module.exports = router;
