const mongoose = require("mongoose");


const AchievementSchema = new mongoose.Schema({
        name: {type: String, required: true, unique: true},
        description: String,
        image: {type: String, default: "./images/productAvatar"},
    }
)


module.exports = achievementModel = new mongoose.model('Achievements', AchievementSchema)
