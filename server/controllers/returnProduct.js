const { body } = require('express-validator');
//const Chat = require('../models/Chats');
const ReturnProduct=require('../models/ReturnProduct')

exports.createReturnProduct = async function (req, res, next) {
  try {
    const createdReturnProduct = new ReturnProduct({
        
        productNum: req.body.productNum,
        reason:req.body.reason,
        image:req.body.image,
        email:req.body.email
        
    });
    
    const result = await createdReturnProduct.save();
    
    res.json(result);

  } catch (error) {
    console.error(error.message);
    res.send("Server error 2");
  }
};




const getReturnProduct = async (req, res, next) => {
  const ReturnProducts = await ReturnProduct.find().exec();
  res.json(ReturnProducts);
}



exports.getReturnProduct = getReturnProduct;