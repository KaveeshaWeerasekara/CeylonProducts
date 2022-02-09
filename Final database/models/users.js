const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true,
    },
    middleName:{
        type:String,
        required: true,
    },
    lastName:{
        type:String,
        required: true,
    },
    
   userID :{
        type:String,
        required: true,
    },
    password:{
        type:String,
        required: true,
    },
    tpnumber:{
        type:String,
        required: true,
    },
    Email:{
        type:String,
        required: true,
    },
    streetNo:{
        type:String,
        required: true,
    },
    Street:{
        type:String,
        required: true,
    },
    city:{
        type:String,
        required: true,
    },
    country:{
        type:String,
        required: true,
    },
    postalCode:{
        type:String,
        required: true,
    },
 
});

module.exports  = mongoose.model("users", userschema);


