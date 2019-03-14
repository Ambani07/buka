const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const bookSchema = new Schema({
    title: {type: String, required: true, max: [128, 'Too long, max is 128 characters']},
    edition: {type: Number, required: true},
    author: {
        type: String,
        min: [4, 'Too short, min is 4 characters'],
        max: [32, 'Too long, max is 128 characters'],
    },
    year: {type: Number, required: true},
    category: {type: String, required: true},
    isbn: {type: Number, required: true},
    price: {type: Number, required: true},
    image: {type: String, required: true},
    negotiable: Boolean,
    previousOwners: {type: Number, required: true},
    university: String,
    city: {type: String, required: true},
    street: {type: String, required: true},
    createdAt: {type: Date, default: Date.now },
    user: {type: Schema.Types.ObjectId, ref: 'User' }
}, {collection: "Book"});

module.exports = mongoose.model('Book', bookSchema);

        