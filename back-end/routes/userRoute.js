const {registerUser, paymentRazorpay, verifyRazorpay} = require('../controllers/userController')
const {loginUser} = require('../controllers/userController')
const {userCredits} = require('../controllers/userController')
const {userAuth} = require('../middlewares/Auth')

const express = require('express')

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/credits', userAuth, userCredits)
userRouter.post('/pay-razor', userAuth, paymentRazorpay)
userRouter.post('/verify-razor', verifyRazorpay)

module.exports = {userRouter}