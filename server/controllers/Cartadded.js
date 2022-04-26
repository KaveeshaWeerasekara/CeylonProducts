const Cartadded = require('../models/Cartadded');


exports.createCartadded = async function (req, res, next) {
  try {
    const createdCartadded = new Cartadded({
        
        cart_Id: req.body.cart_Id,
        product_Id: req.body.product_Id
       
    });
    
    const result = await createdCartadded.save();
    
    res.json(result);

  } catch (error) {
    console.error(error.message);
    res.send("Server error cartadded");
  }
};




const getCartadded = async (req, res, next) => {
  const Cartaddeds = await Cartadded.find().exec();
  res.json(Cartaddeds);
}



exports.getCartadded = getCartadded;