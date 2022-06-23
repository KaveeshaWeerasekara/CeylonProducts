
const { body } = require('express-validator');
const Cart = require('../models/carts');


exports.createCart = async function (req, res, next) {
  try {
    const createCart = new Cart({
      id: req.body.id,
      title: req.body.title,
      price: req.body.price,
      photo: req.body.photo,
      userID: req.body.userID
    });
    
    const result = await createCart.save();
    
    res.json(result);

  } catch (error) {
    console.error(error.message);
    res.send("Server error 2");
  }
};
const getCart = async (req, res, next) => {
  const cart = await Cart.find().exec();
  res.json(cart);
}



exports.getCart = getCart;




const deleteCartItem = async (request, response) => {
  try{
      await Cart.deleteOne({_id: request.params.id});
      response.status(201).json("Job deleted Successfully");
  } catch (error){
      response.status(409).json({ message: error.message});     
  }
}

exports.deleteCartItem = deleteCartItem;
