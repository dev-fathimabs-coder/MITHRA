let mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
},
    {
        timestamps: true
    })

let User = new mongoose.model('users', userSchema)
module.exports = User