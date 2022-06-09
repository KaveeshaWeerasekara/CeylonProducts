
const Contact = require('../models/contactform');


exports.createcontact = async function (req, res, next) {
  try {
    const createcontact = new Contact({
        
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
    });
    
    const result = await createcontact.save();
    
    res.json(result);

  } catch (error) {
    console.error(error.message);
    res.send("Server error 2");
  }
};




const getcontact = async (req, res, next) => {
  const contact = await Chat.find().exec();
  res.json(contact);
}



exports.getcontact = getcontact;