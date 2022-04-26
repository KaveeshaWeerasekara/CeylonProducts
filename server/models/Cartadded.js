const mongoose = require("mongoose");

const cartaddedSchema = new mongoose.Schema({

 
  cart_Id: { type: String, required: true },
  product_Id: { type: String, required: true }
  
});

module.exports = mongoose.model("cartadded", cartaddedSchema);