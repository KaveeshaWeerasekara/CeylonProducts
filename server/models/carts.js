const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
    {
        id:{type: String},
        title:{type: String},
        price:{type: Number},
        photo:{type: String},
        userID: {type: String}
        
       
    }
);


module.exports = mongoose.model("carts", cartSchema);
