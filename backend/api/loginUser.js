const express = require("express");
const userModel = require("../models/UserModel.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");


dotenv.config()

const router = express.Router()

router.post('/', async (req, res) => {
    const { username, password } = req.body;
    userModel.findOne({username: username}, async (err, user) => {
        if (err) {
            res.status(500).send('Server error!!!!!!!');
        } else if (!user) {
            res.status(400).send('User with this username does not exist');
        } else {
            const auth = await bcrypt.compare(password, user.hashedPassword)
            if (auth) {
                const secret = process.env.TOKEN_SECRET;
                const payload = { username };
                const token = jwt.sign(payload, secret, {'expiresIn': '12h'});
                res.cookie('jwt', token, {'httpOnly': false}).status(200)
                    .json({'token': token, 'user': user})
            } else {
                res.status(400).send('Wrong password')
            }
        }}
    )
})

module.exports = router;