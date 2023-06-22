const express = require("express");
const achievementModel = require("../models/AchievementModel.js");

const router = express.Router();

router.get('/', (req, res) => {
    achievementModel.find({}, (err, achievement) => {
        if (err) {
            res.status(500).send('Achievements not found, try again')
        } else if (achievement.length === 0) {
            res.status(404).send('Achievements not found')
        } else {
            res.send(achievement)
        }
    })
})

router.get('/:name', (req, res) => {
    achievementModel.findOne({name: req.params.name}, (err, achievement) => {
        if (err) {
            res.status(500).send('Achievement not found, try again')
        } else if (!achievement) {
            res.status(404).send('Achievement not found')
        } else {
            res.send(achievement)
        }
    })
})

router.post('/',(req, res) => {
    const {name, description, image} = req.body;

    let achievement = new achievementModel({name, description, image});
    achievement.save((err) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error while adding, please, try again")
        } else {
            res.status(200).send("New achievement successfully added!")
        }
    });
});


module.exports = router;
