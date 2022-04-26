const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({

 ChatID: { type: String, required: true },
  User1_ID: { type: String, required: true },
  User2_ID: { type: String, required: true },
   Item_ID: {type:String, required:true},
  Purchase_ID: { type: String, required: true }
});

module.exports = mongoose.model("chats", chatSchema);