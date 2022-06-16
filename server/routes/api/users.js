const express = require('express')
const router = express.Router()
const { body } = require('express-validator')

// bring the users controller
const users = require('../../controllers/users')

// @route   GET /api/users/createuser
router.post('/createuser', users.createuser)

// @route   post /api/users/getusers
router.get('/getusers', users.getuser)

// @route   GET /api/users/getuser/:id
router.get('/getuser/:id', users.getSpecificUser)

// @route   PUT /api/users/updateuser/:id
router.put('/updateuser/:id', users.updateUser)

// @route   DELETE /api/users/deleteuser/:id
router.delete('/deleteuser/:id', users.deleteUser)

// @route   GET /api/users/getuserByCatergory/:id
router.post('/getuserByCatergory', users.getuserByCatergory)

// @route   GET /api/users/getuserByCatergory/:id
router.get('/getnewusers', users.getnewusers)
module.exports = router
