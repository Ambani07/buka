const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const FakeDB = require('./fake-db');
const booksRoutes = require('./routes/books');


mongoose.connect(config.DB_URI, { useNewUrlParser: true }).then(() => {
    const fakeDB = new FakeDB();

    fakeDB.seedDB();
});

const app = express(); //call express 

app.use('/api/v1/books', booksRoutes);

// app.get('/api/v1/books', function(req, res){
//     res.json({'success': true})
// });

app.get('/api/v1/books/:id', function(req, res){
    const bookId = req.params.id;
    res.json({'success': bookId});
});

// app.use()

const PORT = process.env.PORT || 3001;

app.listen(PORT, function(){
    console.log('I am running'); 
});