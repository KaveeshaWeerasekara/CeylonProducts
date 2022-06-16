const { body } = require('express-validator')
const Order = require('../models/Orders')

exports.createOrder = async function (req, res, next) {
  try {
    const createdOrder = new Order({
      orderID: req.body.orderID,
      productID: req.body.productID,
      quantity: req.body.quantity,
      status: req.body.status,
      name: req.body.name,
      streetNo: req.body.streetNo,
      street: req.body.street,
      city: req.body.city,
      postalCode: req.body.postalCode,
      country: req.body.country,
      customerID: req.body.customerID,
      sellerID: req.body.sellerID,
      trackingProvider: req.body.trackingProvider,
      trackingID: req.body.trackingID,
      paymentID: req.body.paymentID,
      amount: req.body.amount,
      // date: body.date,
      // time: req.body.time,
      paymentType: req.body.paymentType,
    })

    const result = await createdOrder.save()

    res.json(result)
  } catch (error) {
    console.error(error.message)
    res.send('Server error 3')
  }
}

const getOrder = async (req, res, next) => {
  const Orders = await Order.find().exec()
  res.json(Orders)
}

// exports.getOrderCount = async (req, res, next) => {
//   await Order.Count().exec((err, orders) => {
//     if (err) {
//       return res.status(400).json({
//         error: err,
//       })
//     }
//     return res.status(200).json({
//       success: true,
//       noNewUsers: orders,
//     })
//   })
// }

//Get count of all orders
exports.getOrderCount = async (req, res, next) => {
  Order.count().exec((err, orders) => {
    if (err) {
      return res.status(400).json({
        error: err,
      })
    }
    return res.status(200).json({
      success: true,
      noOrder: orders,
    })
  })
}
exports.getOrder = getOrder
