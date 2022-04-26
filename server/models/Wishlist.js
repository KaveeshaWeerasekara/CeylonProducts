const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({

 
  Wishlist_Id: { type: String, required: true },
  No_of_Products: { type: Number, required: true }
  
});

module.exports = mongoose.model("wishlists", wishlistSchema);