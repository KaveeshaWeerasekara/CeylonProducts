const bcrypt=require('bcrypt');
const User=require('../models/login');
const jwt=require('jsonwebtoken');


//controller for register
exports.registerUser=async(req,res)=>{
    try {

        //validate request
        if(!req.body){
            res.status(406).json({err:"You have to fill the registration form"});
        }

        let{email,password,passwordCheck,username}=req.body

        if(!email||!password||!passwordCheck)
            return res.status(406).json({err:"not all fields have been entered"})

        
        if(passwordCheck.length<8)
            return res.status(406).json({err:"the password need to be at least 8 characters"})

        if(password!==passwordCheck)
            res.status(406).json({err:"Password must be same for verification"});

//hashing password
const hash=await bcrypt.hashSync(password,10)



//using document structure
const newUser=new User({
    email,
    password:hash,
    username
})

newUser
    .save(newUser)
    .then(register=>{
        res.json(register)
    })
    .catch(error=>{
        res.status(406).json({err:error.message||"something went wrong while registration"})
    })
    } catch (error) {
       res.status(500).json({err:error.message || "Error while registration"}) 
    }
    
};


//..................................................//
//controller for login


exports.login=async(req,res)=>{
    try{
//validate request
if(!req.body){
    res.status(406).json({err:"You have to fill the login form"});
    return;
}

//get user data
const{email,password}=req.body


//validation
if(!email||!password)
    return res.status(406).json({err:"Not all fields have been entered"})


const user=await User.findOne({email});
if(!user)
    return res.status(406).json({err:"No account with this email"})

//compare the password
const isMatch=await bcrypt.compare(password,user.password);

if(!isMatch)
    return res.status(406).json({err:"invalid credentials"})



//create jwt token
 JWT_SECRET="Kk7Bpyfvq9Dd4huGWK2yLKPnmGPktX8pr7VczdVTupuHshzrRN";
const token=jwt.sign({id:user._id},JWT_SECRET)


res.json({token,username:user.username,email:user.email})

    }catch(error){
        res.status(500).json({err:error.message||"error while login"})
    }
   
};


//delete user controller
exports.delete=async(req,res)=>{
    try{
        await User.findByIdAndDelete(req.user_id)
        res.json({msg:"User deleted successfully..!"})
    }catch(error){
        res.status(500).json({err:error.message||"Error while deleting user"})
    }
}