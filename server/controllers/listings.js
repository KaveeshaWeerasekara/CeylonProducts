
const { AggregationCursor } = require('mongoose');
const Listing = require('../models/listingmessage');


exports.createListings = async function (req, res, next) {
  try {
    const createListings = new Listing({
      title: req.body.title,
      category: req.body.category,
      description: req.body.description,
      quantity: req.body.quantity,
      price: req.body.price,
      handlingTime: req.body.handlingTime,
      photo: req.body.photo
    });
    
    const result = await createListings.save();
    
    res.json(result);

  } catch (error) {
    console.error(error.message);
    res.send("Server error 2");
  }
};


const getListings = async (req, res, next) => {
  const listings = await Listing.find().exec();
  res.json(listings);
}



exports.getListings = getListings;




const deleteListings = async (request, response) => {
  try{
      await Listing.deleteOne({_id: request.params.id});
      response.status(201).json("Job deleted Successfully");
  } catch (error){
      response.status(409).json({ message: error.message});     
  }
}

exports.deleteListings = deleteListings;