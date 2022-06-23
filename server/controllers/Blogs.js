const { body } = require('express-validator');
//const Chat = require('../models/Chats');
//const Blogs=require('../models/ReturnProduct')
const Blogs=require('../models/BlogsNew')

exports.createBlogsAdd = async function (req, res, next) {
  try {
    const createdBlogsAdd = new Blogs({
        
        name: req.body.name,
        title:req.body.title,
        image:req.body.image,
        description:req.body.description
        
    });
    
    const result = await createdBlogsAdd.save();
    
    res.json(result);

  } catch (error) {
    console.error(error.message);
    res.send("Server error 2");
  }
};




const getBlogsAdd = async (req, res, next) => {
    const BlogsAdded = await Blogs.find().exec();
    res.json(BlogsAdded);
  }
  
  
  
  exports.getBlogsAdd = getBlogsAdd;

