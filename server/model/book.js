const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const bookSchema = new Schema({
    title: String,
    edition: Number,
    author: String,
    year: Number,
    category: String,
    isbn: Number,
    price: Number,
    image: String,
    negotiable: String,Boolean,
    previousOwners: Number,
    university: String,
    createdAt: String
});

module.exports = mongoose.model('Book', bookSchema);

        