let mongoose = require('mongoose')

let bookSchema = new mongoose.Schema({
    imageUrl: String,
    title: String,
    author: String,
    genre: String,
    pages: String,
    rating: Number,
    review: String
},
    {
        timestamps: true
    })

let Books = new mongoose.model('books', bookSchema)

module.exports = Books