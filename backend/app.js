const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const createUser = require("./api/createUser.js");
const loginUser = require("./api/loginUser.js");
const productRequests = require("./api/productRequests.js");
const achievementRequests = require("./api/achievementsRequests.js");
const orderRequests = require("./api/orderRequests.js");
const getUserFromToken = require("./api/getUserFromToken.js");
const getUser = require("./api/getUser.js")

const app = express()
app.use(cors())
app.use(express.json())

dotenv.config()

const port = 8000

mongoose.connect(process.env.MONGO_URI, () => console.log("Mongo connected successfully!"))

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

app.use(cookieParser());
app.use('/api/register', createUser);
app.use('/api/login', loginUser);
app.use('/api/product', productRequests)
app.use('/api/achievement', achievementRequests)
app.use('/api/order', orderRequests)
app.use('/api/verify', getUserFromToken);
app.use('/api/user', getUser)
