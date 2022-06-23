
const { AggregationCursor } = require('mongoose');
const Product = require('../models/shopProducts');


exports.createProducts = async function (req, res, next) {
  try {
    const createProducts = new Product({
      title: req.body.title,
     
      description: req.body.description,
     
      price: req.body.price,
     
      photo: req.body.photo
    });
    
    const result = await createProducts.save();
    
    res.json(result);

  } catch (error) {
    console.error(error.message);
    res.send("Server error 2");
  }
};


const getProducts = async (req, res, next) => {
  const products = await Product.find().exec();
  res.json(products);
}



exports.getProducts = getProducts;