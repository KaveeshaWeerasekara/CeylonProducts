const mongoose = require("mongoose");

const sellerorderSchema = mongoose.Schema(
    {
        firstName: { type: String },
        lastName: { type: String },
        mobileNo: { type: String },
        StreetNo: { type: String },
        City: { type: String },
        postalCode: { type: String },
        Country: { type: String },
        quantity: { type: String },
    },
    {
        timestamps: true,
    }

);


module.exports = mongoose.model("sellerOrder", sellerorderSchema);