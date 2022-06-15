// const User= require ("../models/BlogUser");
// const bcrypt =require ('bcrypt');

// exports.getAllUser=async(req,res,next)=>{
//     let users;
//     try{
//         users=await User.find();
//     }catch(err){
//         console.log(err);
//     }
//     if(!users){
//         return res.status(404).json({message:"no users found"});
//     }
//     return res.status(200).json({users});
// }


// exports.signup=async(req,res,next)=>{
//     const {name,email,password}=req.body;
//     let existingUser;
//     try{
//         existingUser=await User.findOne({email});
//     }catch(err){
//       return  console.log(err);
//     }
//     if(existingUser){
//         return res
//         .status(400).json({message:"user is exists...login instead"})
//     }

//     const hashPassword=bcrypt.hashSync(password);

//     const user=new User({
//         name,
//         email,
//         password:hashPassword,
//         blogs:[]
//     });
    

//     try{
//         await user.save();
//     }catch(err){
//       return  console.log(err);
//     }
//      res.status(201).json({user});
// };

// exports.login=async(req,res,next)=>{
//     const {email,password}=req.body;
//     let existingUser;
//     try{
//         existingUser=await User.findOne({email});
//     }catch(err){
//       return  console.log(err);
//     }
//     if(!existingUser){
//         return res
//         .status(404)
//         .json({message:"coudnt find user by this email"})
//     }

//     const isPasswordCorrect=bcrypt.compareSync(password,existingUser.password);
//     if(!isPasswordCorrect){
//         return res.status(400).json({message:"incorrect password"});
//     }
//     return res.status(200)
//     .json({message:"login successfull",user:existingUser})
// }