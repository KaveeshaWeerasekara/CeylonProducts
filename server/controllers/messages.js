const Message = require('../models/messages');


exports.createmessage = async function (req, res, next) {
  try {
    const createmessage = new Message({
      messageID: req.body.messageID,
      message: req.body.message,
    
    });
    
    const result = await createmessage.save();
    
    res.json(result);

  } catch (error) {
    console.error(error.message);
    res.send("Server error 2");
  }
};




const getmessage = async (req, res, next) => {
  const messages = await Message.find().exec();
  res.json(messages);
}



exports.getmessage = getmessage;
