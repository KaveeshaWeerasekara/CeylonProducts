const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        Sid: { type: String },
        productid: { type: String },
        title: { type: String },
        category: { type: String },
        description: { type: String },
        quantity: { type: String },
        price: { type: String },
        handlingTime: { type: String },
        photo: { type: String },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("shopProducts", productSchema);