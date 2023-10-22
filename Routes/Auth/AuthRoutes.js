const express = require('express')
const { signin, signup } = require('../../Controllers/AuthController/AuthController')

const router = express.Router()

router.route('/signin').post(signin)
router.route('/signup').post(signup)


module.exports = router
