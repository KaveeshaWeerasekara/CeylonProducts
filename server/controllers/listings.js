const listingmessage = require ('../models/listingmessage.js');

const getListings = async(req, res) => {
    try{
        const listingmessages = await listingmessage.find();
         
        res.status(200).json(listingmessages);

    }
    catch(error){
        res.status(404).json({ message: error.message});
    }
}



module.exports = getListings;

const createListings = async (req, res) =>{
    const listing = req.body;

    const newListing = new listingmessage(listing);
    try{

        await newListing.save();

        res.status(201).json({ newListing});
    }catch(error){
        res.status(409).json({ message: error.message});


    }


}

module.exports = createListings;