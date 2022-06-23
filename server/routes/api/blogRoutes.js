 const express = require("express");

const controller=require("../../controllers/blog-controller");
// const addBlogs=require("../../controllers/blog-controller");
// const updateBlog=require("../../controllers/blog-controller");
// const getById=require("../../controllers/blog-controller");
// const deleteBlog=require("../../controllers/blog-controller");
// const getByUserId=require("../../controllers/blog-controller");

//const blogRouter=require('express').Router();
// import {
//     getAllBlogs,
//     addBlogs, 
//     updateBlog,
//     getById,
//     deleteBlog,
//     getByUserId
// } from "../controllers/blog-controller";


const router=express.Router();


router.get("/",controller.getAllBlogs);
router.post("/add",controller.addBlogs);
router.put("/update/:id",controller.updateBlog);
router.get("/:id",controller.getById);
router.delete("/:id",controller.deleteBlog);
router.get("/user/:id",controller.getByUserId);




module.exports = router;