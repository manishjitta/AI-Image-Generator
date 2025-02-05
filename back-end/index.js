const express = require("express");
const cors = require("cors");
const { connectDB } = require('./config/mongodb.js');
const { userRouter } = require("./routes/userRoute.js");
const { imageRouter } = require("./routes/imageRoutes.js")

require('dotenv').config();

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(cors());

(async () => {
    await connectDB(); // Connect to the database
})();


//Handles login and register
app.use('/api/user', userRouter)

app.use('/api/image', imageRouter)

app.get('/', (req, res) => {
    res.send("API WORKING");
});

app.listen(PORT, () => {
    console.log("Server Started");
});
