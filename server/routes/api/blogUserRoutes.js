//const userRouter=require('express').Router()
const express = require("express");
//import { getAllUser,signup,login } from '../controllers/BlogUser-controller';
                //const controller =require("../../controllers/blogUser-controller");
const controller =require("../../controllers/login");
//const signup =require("../../controllers/blogUser-controller");
//const login =require("../../controllers/blogUser-controller");



const router=express.Router();

router.get("/",controller.getAllUser);
router.post("/signup",controller.registerUser);
router.post("/login",controller.login);


module.exports = router;