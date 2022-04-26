const mongoose = require("mongoose");

const listingSchema = mongoose.Schema(
    {
        title: String,
        category: String,
        photo: String,
        description: String,
        quality: Number,
        price: Number,
        handlingtime: Number,
    }
);

const listingmessage = mongoose.model('listingmessage', listingSchema);

module.exports = listingmessage;