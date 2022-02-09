const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema({
    orderID:{
        type:String,
        required: true,
    },
    productID:{
        type:String,
        required: true,
    },
    quantity:{
        type:Number,
        required: true,
    },

    status:{
        type:String,
        required: true,
    },

    name: {
        type: String,
        required: true,
  },
    streetNo: {
        type: String,
        required: true,
  },
    street: {
        type: String,
        required: true,
  },
    city: {
        type: String,
        required: true,
  },
    postalCode: {
        type: Number,
        required: true,
  },
    country: {
        type: String,
        required: true,
  },
    customerID: {
        type: String,
        required: true,
  },
    sellerID: {
        type: String,
    required: true,
  },
    trackingProvider: {
    type: String,
    required: true,
  },
    trackingID: {
    type: String,
    required: true,
  },
  paymentID: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
//   time: {
//     type: Time,
//     default: Time.now,
//   },
  paymentType: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Orders", OrderSchema);