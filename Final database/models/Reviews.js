const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    reviewID:{
        type:String,
        required: true,
    },
    customerID:{
        type:String,
        required: true,
    },
    comment:{
        type:String,
        required: true,
    },
    rating:{
        type:String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
  },
//   time: {
//     type: time,
//     default: time.now,
//   },
});

module.exports = mongoose.model("Reviews", ReviewSchema);
