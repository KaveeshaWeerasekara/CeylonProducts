const mongoose = require("mongoose");

const listingSchema = mongoose.Schema(
    {
        title:{type: String},
        category: {type: String},
        description: {type: String},
        quantity: {type: String},
        price: {type: String},
        handlingTime: {type: String},
        photo: {type: String}
    }
);


module.exports = mongoose.model("listingmessage", listingSchema);
