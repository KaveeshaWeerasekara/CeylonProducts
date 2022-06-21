const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({

    email: { type: String, required: true ,unique:true},
     password: { type: String, required: true,minlength:8 },
     username: { type: String, required: true },
     blogs:[{type:mongoose.Types.ObjectId,ref:"blogs",required:true}],
     verified:{type:Boolean,default:false}
     
   });
   
   module.exports = mongoose.model("loginusers", loginSchema);  