const express = require("express");
const userModel = require("../models/UserModel.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");


dotenv.config()

const router = express.Router();

router.post('/', async (req, res) => {
    const {username, name, password, passwordAgain} = req.body;

    if (password !== passwordAgain) {
        res.status(400).json({token: 'error', error: 'Passwords are not equal'})
    }

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds)
    const hashedPassword = await bcrypt.hash(password, salt);

    userModel.findOne({username: username}, (err, user) => {
        if (user) return res.status(400).json({token: 'error', error: 'User with this username already exists'});
    })

    const imageNumber = Math.floor(Math.random() * 6 + 1)
    console.log(imageNumber)
    const avatar = "./images/user" + imageNumber + ".jpg"

    const user = new userModel({username, name, hashedPassword, avatar});
    user.save((err) => {
        if (err) {
            res.status(500).send(err)
        } else {
            const secret = process.env.TOKEN_SECRET;
            const payload = {username};
            const token = jwt.sign(payload, secret, {'expiresIn': '12h'});
            res.cookie('jwt', token, {'httpOnly': false}).status(200)
                .json({'token': token, 'user': user});
            console.log(token);
        }
    });
});

module.exports = router;