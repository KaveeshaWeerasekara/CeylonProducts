const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    cid:{ type:String, required: true},
   numofp:{ type:Number, required: true}
 
});

module.exports = mongoose.model("carts", cartSchema);
