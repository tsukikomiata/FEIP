const express = require("express");
const userModel = require("../models/UserModel.js");

const router = express.Router();

router.get('/:name', (req, res) => {
    userModel.findOne({username: req.params.name}, (err, user) => {
        if (err) {
            res.status(500).send('User not found, try again')
        } else if (!user) {
            res.status(404).send('User not found')
        } else {
            res.send(user)
        }
    })
})

module.exports = router