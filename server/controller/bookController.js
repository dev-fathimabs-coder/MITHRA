const Books = require("../models/bookModel");

let addBook = async (req, res) => {
    let { imageUrl, title, author, genre, pages, rating, review } = req.body
    try {
        let isBookExist = await Books.findOne({ title });

        if (isBookExist) {
            return res.status(409).json({ message: "Book already exists" });
        }
        let newBook = await new Books({
            imageUrl: imageUrl || "",
            title,
            author,
            genre: genre || "Unknown",
            pages: pages || 0,
            rating: rating || 0,
            review: review || ""
        })
        await newBook.save()
        res.status(201).json({
            message: "Book added successfully"
        });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }

}

let getBook = async (req, res) => {
    try {

    } catch (error) {

    }
}

let getBookById = async (req, res) => {
    try {

    } catch (error) {

    }
}
let updateBook = async (req, res) => {
    try {

    } catch (error) {

    }
}


let viewBookDetail = async (req, res) => {
    try {

    } catch (error) {

    }
}

