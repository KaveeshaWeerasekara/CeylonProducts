const { body } = require('express-validator');
const Category = require('../models/category');


exports.createCategory = async function (req, res, next) {
  try {
    const createdCategory = new Category({
      name: req.body.name

    });
    
    const result = await createdCategory.save();
    
    res.json(result);

  } catch (error) {
    console.error(error.message);
    res.send("Server error 2");
  }
};


const getCategory = async (req, res, next) => {
  const categories = await Cart.find().exec();
  res.json(categories);
}



exports.getCategory = getCategory;
