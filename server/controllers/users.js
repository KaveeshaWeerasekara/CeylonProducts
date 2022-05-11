const { body } = require("express-validator");
const Users = require('../models/users');


exports.createuser = async function (req, res, next) {
  try {
    const createduser = new Users({
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
    res.send("Server error");
  }
};




// const getuser = async (req, res, next) => {
//   const users = await User.find().exec();
//   res.json(users);
// }



// exports.getuser = getuser;

//Get User
exports.getuser = async (req, res, next) => {
  Users.find().exec((err, users) => {
    if (err) {
      return res.status(400).json({
        error:err,
      });
    }
    return res.status(200).json({
      success:true,
      existingposts:users,
    });
  });
};

//Get specific User
exports.getSpecificUser = async (req, res, next) => {
  let userid=req.params.id;

  Users.findById(userid,(err,post) => {
    if (err) {
      return res.status(400).json({
        success:false,
        err
      });
    }
    return res.status(200).json({
      success:true,
      post
    });
  });
};

//Update User
exports.updateUser = async (req, res, next) => {
  Users.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, user) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.status(200).json({
        success: "Updated Succesfully",
      });
    }
  );
};

//Delete User
exports.deleteUser = async (req, res, next) => {
  Users.findByIdAndRemove(req.params.id).exec((err, deleteduser) => {
    if (err) {
      return res.status(400).json({
        message: "Delete Unsuccesfully",
        err,
      });
    }
    return res.status(200).json({
      message: "Delete Succesfully",
      deleteduser,
    });
  });
};