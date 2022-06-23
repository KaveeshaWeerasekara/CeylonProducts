const mongoose= require ("mongoose");
const Blog= require ("../models/Blog");
const User= require ("../models/login");



// const multer=require('multer');

// const storage=multer.diskStorage({
//     destination:(req,file,callback)=>{
//        callback(null,"./") 
//     }
// })


exports.getAllBlogs=async(req,res,next)=>{
    let blogs;
    try{
        blogs=await Blog.find().populate("loginusers");
    }catch(err){
        return console.log(err);
    }
    if(!blogs){
        return res.status(404).json({message:"No Blogs Found"})
    }
    return res.status(200).json({blogs})
};



exports.addBlogs=async(req,res,next)=>{
    const {title,description,image,user}=req.body;
    
    let existingUser;       //add validation

    try{
        existingUser= await User.findById(user);
    }catch(err){
        return console.log(err);
    }
    if(!existingUser){
        return res.status(400).json({message:"Unable to find by this ID"})
    }

    const blog=new Blog({
       
        title,
        description,
        image,
        user,
    });
    try{
        const session=await mongoose.startSession();   //define a session to save the blog
        session.startTransaction();
        await blog.save({session});
        existingUser.blogs.push(blog);
        await existingUser.save({session})
        await session.commitTransaction();
    }catch(err){
         console.log(err);
         return res.status(500).json({message:err})
    }
    return res.status(200).json({blog});
};



exports.updateBlog=async(req,res,next)=>{
    const { title,description }=req.body;
    const blogId=req.params.id;
    let blog;
    try{
         blog=await Blog.findOneAndUpdate(blogId,{
            title,
            description
        })
    }catch(err){
        return console.log(err);
    }
   if(!blog){
       return res.status(500).json({message:"unable to update the blog"})
   }
   return res.status(200).json({blog});
};



exports.getById=async(req,res,next)=>{
    const id=req.params.id;
    let blog;
    try{
        blog=await Blog.findById(id);
    }catch(err){
        return console.log(err);
    }
    if(!blog){
        return res.status(404).json({message:"no blog found"})
    }
    return res.status(200).json({blog})

};

exports.deleteBlog=async(req,res,next)=>{
    const id=req.params.id;

    let blog;
    try{
        blog=await Blog.findOneAndDelete(id).populate('loginusers')  //delete blogs from the user collection
        //await blog.user.blogs.pull(blog); 
        //await blog.user.save();
        .then(()=>res.json("article is deleted"))
    .catch(err=>res.status(400).json(err))
    }catch(err){
        return console.log(err);
    }
    if(!blog){
        return res.status(400).json({message:"unable to delete"})
    }
    return res.status(200).json({message:"Successfully deleted..."})
};


exports.getByUserId=async(req,res,next)=>{
    const userId=req.params.id;
    let userBlogs;
    try{
        userBlogs=await User.findById(userId).populate("blogs");
    }catch(err){
        return console.log(err);
    }
    if(!userBlogs){
        return res.status(404).json({message:"No blog found"})
    }
    return res.status(200).json({blogs:userBlogs})
};