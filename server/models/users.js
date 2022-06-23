const mongoose = require("mongoose");

const userschema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      // required: true,
    },
    middleName: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
      // required: true,
    },

    userID: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
    tpnumber: {
      type: String,
      required: false,
    },
    tpnumber: {
      type: String,
      required: false,
    },
    Email: {
      type: String,
      // required: true,
    },
    streetNo: {
      type: String,
      required: false,
    },
    val: {
      type: String,
    },
    Street: {
      type: String,
      // required: true,
    },
    city: {
      type: String,
      // required: true,
    },
    province: {
      type: String,
      // required: true,
    },
    country: {
      type: String,
      // required: true,
    },
    postalCode: {
      type: String,
      // required: true,
    },
    postalCode: {
      type: String,
      // required: true,
    },
    driving: {
      type: String,
      // required: true,
    },
    add: {
      type: String,
      // required: true,
    },
    img: {
      data: Buffer,
      contentType: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userschema);
