const mongoose = require("mongoose");

const productschema = new mongoose.Schema({
    productid:{
        type:String,
        required: true,
    },
    pname:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required: true,
    },
    
    quantity:{
        type:Number,
        required: true,
    },
    category:{
        type:String,
        required: true,
    },
    price:{
        type:Number,
        required: true,
    },
    img:
    {
        data: Buffer,
        contentType: String,
    },
    date:{
        type: String,
        required: true,
    }
 
});

module.exports = User = mongoose.model("products", productschema);
