const User = require('../models/users');


exports.createuser = async function (req, res, next) {
  try {
    const createduser = new User({
      firstName: req.body.firstName,
      middleName: req.body.middleName,
      lastName: req.body.lastName,
      userID: req.body.userID,
      password: req.body.password,
      tpnumber: req.body.tpnumber,
      Email: req.body.Email,
      streetNo: req.body.streetNo,
      Street: req.body.Street,
      city: req.body.city,
      country: req.body.country,
      postalCode: req.body.postalCode

    });
    
    const result = await createduser.save();
    
    res.json(result);

  } catch (error) {
    console.error(error.message);
    res.send("Server error 2");
  }
};




const getuser = async (req, res, next) => {
  const users = await User.find().exec();
  res.json(users);
}



exports.getuser = getuser;
