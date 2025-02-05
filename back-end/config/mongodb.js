const mongoose = require("mongoose")

const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        
    })
    
    await mongoose.connect(`${process.env.MONGODB_URI}/imagify`)
}

module.exports = {connectDB}