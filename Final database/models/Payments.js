const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
    paymentID:{
        type:String,
        required: true,
    },
    amount:{
        type:Number,
        required: true,
    },
    paymentType:{
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

module.exports = mongoose.model("Payments", PaymentSchema)
