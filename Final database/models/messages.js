const mongoose = require("mongoose");

const messageschema = new mongoose.Schema({
    messageID:{
        type:String,
        required: true,
    },
    message:{
        type:String,
        required: true,
    },
  
});

module.exports = mongoose.model("messages", messageschema);
