
const { body } = require('express-validator');
const Chat = require('../models/Chats');


exports.createChat = async function (req, res, next) {
  try {
    const createdChat = new Chat({
        
        ChatID: req.body.ChatID,
        User1_ID: req.body.User1_ID,
        User2_ID: req.body.User2_ID,
        Item_ID: req.body.Item_ID,
        Purchase_ID: req.body.Purchase_ID
    });
    
    const result = await createdChat.save();
    
    res.json(result);

  } catch (error) {
    console.error(error.message);
    res.send("Server error 2");
  }
};




const getChat = async (req, res, next) => {
  const Chats = await Chat.find().exec();
  res.json(Chats);
}



exports.getChat = getChat;