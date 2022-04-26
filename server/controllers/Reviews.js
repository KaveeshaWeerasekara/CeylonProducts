const Review = require("../models/Reviews");

exports.createReview = async function (req, res, next) {
  try {
    const createdReview = new Review({
      reviewID: req.body.reviewID,
      customerID: req.body.customerID,
      comment: req.body.comment,
      rating: req.body.rating,
      date: req.body.date,
    });

    const result = await createdReview.save();

    res.json(result);
  } catch (error) {
    console.error(error.message);
    res.send("Server error 4");
  }
};

const getReviews = async (req, res, next) => {
  const Reviews = await Review.find().exec();
  res.json(Reviews);
};

exports.getReviews = getReviews;
