const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    name: {type: String},
    hashedPassword: {type: String, required: true},
    type: {type: String, default: "user"},
    achievements: {type: Array, default: ["Гость"]},
    orders: {type: Array, default: []},
    workspace: String,
    karma: {type: Number, default: 1},
    avatar: String,
    }
)


module.exports = userModel = new mongoose.model('Users', UserSchema)
