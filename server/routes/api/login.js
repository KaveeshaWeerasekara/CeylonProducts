const router=require('express').Router()
const { TokenExpiredError } = require('jsonwebtoken');
const controller = require('../../controllers/login');
const auth=require('../../middleware/auth');
const Token = require('../../models/token');



router.post('/register',controller.registerUser);
router.post('/login',controller.login);
//  router.get("/user",controller.verifyToken)
router.delete('/delete',auth,controller.delete);


router.get("/:id/verify/:token",async(req,res)=>{
    try{
     const user=await User.findOne({_id:req.params.id});
     if(!user)
     return res.status(400).send({message:"invalid link"});

     const token=await Token.findOne({
       userId:user._id,
       token:req.params.token
     })
     if(!token)
     return res.status(400).send({message:"invalid link"})

     await User.updateOne({_id:user._id,verified:true});
     await token.remove()

     res.status(200).send({message:"Email verified successfully"})
    }catch(error){
         res.status(500).send({message:"Internal Server Error"})   
    }
})

 module.exports=router;

 