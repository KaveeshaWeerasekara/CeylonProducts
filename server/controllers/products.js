const Product = require('../models/products');


exports.createproduct = async function (req, res, next) {
  try {
    const createproduct = new Product({
      productid: req.body.productid,
      pname: req.body.pname,
      description: req.body.description,
      quantity: req.body.quantity,
      category: req.body.category,
      price: req.body.price
    });
    
    const result = await createproduct.save();
    
    res.json(result);

  } catch (error) {
    console.error(error.message);
    res.send("Server error 2");
  }
};


const getproduct = async (req, res, next) => {
  const products = await Product.find().exec();
  res.json(products);
}



exports.getproduct = getproduct;
