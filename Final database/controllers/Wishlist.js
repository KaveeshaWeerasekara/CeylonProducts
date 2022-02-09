const { body } = require("express-validator");
const Wishlist = require("../models/Wishlist");

exports.createWishlist = async function (req, res, next) {
  try {
    const createdWishlist = new Wishlist({
      Wishlist_Id: req.body.Wishlist_Id,
      No_of_Products: req.body.No_of_Products,
    });

    const result = await createdWishlist.save();

    res.json(result);
  } catch (error) {
    console.error(error.message);
    res.send("Server error 2");
  }
};

const getWishlist = async (req, res, next) => {
  const Wishlists = await Wishlist.find().exec();
  res.json(Wishlists);
};

exports.getWishlist = getWishlist;
