
const { AggregationCursor } = require('mongoose');
const Product = require('./../models/shopProducts');


exports.createProducts = async function (req, res, next) {
  try {
    const createProducts = new Product({
      title: req.body.title,
      category: req.body.category,
      description: req.body.description,
      quantity: req.body.quantity,
      price: req.body.price,
      photo: req.body.photo,
      Sid: req.body.Sid
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


// const getProductByid = async (req, res, next) => {
//   const products = await Product.findById(req.params.id).exec();
//   res.json(products);
// }


// exports.getProductByid = getProductByid;


exports.findOne = (req,res)=>{
  Product.findById(req.params.id)
  .then(Product =>{
    if(!Product){
      return res.status(404).send({
        message:"Product not found"
      })
    }
    res.send(Product)
  })
  .catch(err =>{
    if(err.kind==="objectId"){
      return res.status(404).send({
        message:"Todo not found"
      })
    }
    return res.status(500).send({
      message:"Error retrieving error"
    })
  })
}

