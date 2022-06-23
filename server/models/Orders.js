const mongoose = require('mongoose')
const OrderSchema = new mongoose.Schema(
  {
    productID: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      required: false,
    },

    name: {
      type: String,
      required: true,
    },
    streetNo: {
      type: String,
      required: false,
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
      required: false,
    },
    country: {
      type: String,
      required: true,
    },
    customerID: {
      type: String,
      required: true,
    },
    Sid: {
      type: String,
      required: true,
    },
    trackingProvider: {
      type: String,
      required: false,
    },
    trackingID: {
      type: String,
      required: false,
    },
    paymentID: {
      type: String,
      required: false,
    },
    amount: {
      type: Number,
      required: true,
    },

    //   time: {
    //     type: Time,
    //     default: Time.now,
    //   },
    paymentType: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Orders', OrderSchema)
