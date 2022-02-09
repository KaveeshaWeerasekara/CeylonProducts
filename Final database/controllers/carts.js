
const { body } = require('express-validator');
const Cart = require('../models/carts');


exports.createCart = async function (req, res, next) {
  try {
    const createdCart = new Cart({
      cid: req.body.cid,

      numofp: req.body.numofp
    });
    
    const result = await createdCart.save();
    
    res.json(result);

  } catch (error) {
    console.error(error.message);
    res.send("Server error 2");
  }
};


const getCart = async (req, res, next) => {
  const carts = await Cart.find().exec();
  res.json(Customers);
}



exports.getCart = getCart;
