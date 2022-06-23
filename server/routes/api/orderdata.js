const express = require('express')
const router = express.Router()
const { body } = require('express-validator')

// bring the Orders controller
const orderdata = require('../../controllers/Orders')

// @route   GET /api/Orders

router.post('/createOrders', orderdata.createOrder)

// @route   GET /api/Orders

router.get('/getOrders', orderdata.getOrder)

// @route   GET /api/getOrderCount

router.get('/getOrderCount', orderdata.getOrderCount)

module.exports = router
