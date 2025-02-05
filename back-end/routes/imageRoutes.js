const express = require('express')
const {userAuth} = require('../middlewares/Auth')
const { generateImage } = require('../controllers/imageController')

const imageRouter = express.Router()

imageRouter.post('/generate-image', userAuth, generateImage)

module.exports = {imageRouter}