let mongoose = require('mongoose')

let movieSchema = new mongoose.Schema({
    imageUrl: String,
    title: String,
    director: String,
    genre: String,
    duration: String,
    rating: Number,
    review: String
},
    {
        timestamps: true
    })

let Movies = new mongoose.model('movies', movieSchema)

module.exports = Movies