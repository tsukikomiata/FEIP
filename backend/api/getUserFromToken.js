const express = require("express");
const userModel = require("../models/UserModel.js");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");


dotenv.config()

const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body);
    const {token}= req.body;
    let user = jwt.verify(token, process.env.TOKEN_SECRET);
    if (user) {
        userModel.findOne({username: user.username}, async (err, user) => {
            if (err) {
                res.status(500).send('Server error!!!!!!!');
            } else if (!user) {
                res.status(400).send('User with this username does not exist');
            } else {
                res.status(200).send({user: user})
                }
            })
    }
}
)

module.exports = router;